import express, { Response } from 'express';

import { getAllListings } from './controllers/getAllListings.controller';
import { createListings } from './controllers/createListing.controller';
import { deleteListings } from './controllers/deleteListing.controller';

export interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
}

const app = express();

app.use(express.json());
/**
 * API EndPoints
 */

app.get('/', (_, res: Response) => res.send('OK'));
app.get('/listings', getAllListings);
app.post('/listings', createListings);
app.delete('/listings/:id', deleteListings);

export default app;