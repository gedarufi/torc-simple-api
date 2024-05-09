import { Request, Response } from 'express';
import { listingItems } from '../db';

export const deleteListings =  (req: Request, res: Response) => {
  const { id } = req.params;
  const index = listingItems.findIndex(listing => listing.id === id);

  if (index < 0) {
    return res.status(404).send(`The element with the ID: ${id} doesn't exits`);
  }

  listingItems.splice(index, 1);

  res.send(listingItems);
};
