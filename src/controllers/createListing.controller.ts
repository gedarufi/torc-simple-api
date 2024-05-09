import { Request, Response } from 'express';
import { listingItems } from '../db';
import { Listing } from '../app';

const validatePayload = (data: any): string[] => {
  const errors: string[] = [];
  const validFields = ['title', 'price', 'description'];
  
  validFields.forEach(key => {
    if (data[key] === undefined) {
      errors.push(`The field ${key} is missing`);
    }
  });

  return errors;
};

export const createListings =  (req: Request, res: Response) => {
  const newItem: Listing = req.body;
  const errors  = validatePayload(newItem);

  if (errors.length > 0) {
    return res.status(400).send(errors);
  }

  newItem.id = new Date().getTime().toString();

  listingItems.push(newItem);

  res.send(newItem);
};
