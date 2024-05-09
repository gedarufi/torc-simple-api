import request from 'supertest';

import app, { Listing } from './app';

describe('Listings API Testing', () => {
  let application = request(app);

  jest.spyOn(app, 'listen');

  it('Should return the health of the API', async () => {
    const response = await application.get('/');
    
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });

  it('Should return an empty array of listings', async () => {
    const response = await application.get('/listings');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
  });

  const data = [
    ['Title 1', 1000, 'Description 1'],
    ['Title 2', 2000, 'Description 2'],
    ['Title 3', 3000, 'Description 3'],
    ['Title 4', 4000, 'Description 4'],
  ];

  it.each(data)('Should insert the a new item with title=%s and price=%s', async (title, price, description) => {
    const payload = { title, price, description };
    const response = await application
      .post('/listings')
      .send(payload);
    
    const newItem = response.body;

    expect(response.status).toBe(200);
    expect(newItem.id).toBeDefined();
    expect(newItem).toEqual(expect.objectContaining(payload));
  });

  it('Should throw an error when the payload have erros', async () => {
    const payload = { title: 'Title 1' };
    const response = await application
      .post('/listings')
      .send(payload);
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.arrayContaining(
        ['The field price is missing', 'The field description is missing']
      )
    );
  });

  it('Should return a list with the elements inserted', async () => {
    const response = await application.get('/listings');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(data.length);
  });

  it('Should delete a item from the listings', async () => {
    const { body } = await application.get('/listings');
    const newItem = body.shift();

    expect(newItem.id).toBeDefined();

    const response = await application.delete(`/listings/${newItem.id}`);
    const updatedItems = response.body;

    expect(
      updatedItems.findIndex(
        (item: Listing) => item.id === newItem.id
      )
    ).toBe(-1);
  });

  it('Should try to delete a item from the listings and return 404', async () => {
    const response = await application.delete(`/listings/${new Date().getTime()}`);

    expect(response.status).toBe(404);
  });
});
