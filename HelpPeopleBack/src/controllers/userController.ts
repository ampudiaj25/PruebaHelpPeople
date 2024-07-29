import csvParser from 'csv-parser';
import { Request, Response } from 'express';
import fs from 'fs';
import User from '../models/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const uploadUsers = async (req: Request, res: Response) => {
  const results: any[] = [];
  if (!req.file) {
    return res.status(400).json({ error: 'File is required' });
  }
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        const users = await User.bulkCreate(results);
        res.status(201).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
};
