import { Request, Response } from 'express';
import { listingItems } from '../db';

export const getAllListings =  (req: Request, res: Response) => {
  res.send(listingItems);
};
