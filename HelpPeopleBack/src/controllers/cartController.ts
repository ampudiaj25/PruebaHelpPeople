import { Request, Response } from 'express';
import Cart from '../models/Cart';

export const addToCart = async (req: Request, res: Response) => {
  try {
    const cartItem = await Cart.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const cartItems = await Cart.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const checkout = async (req: Request, res: Response) => {
  try {
    // Aquí puedes implementar la lógica para simular una compra (checkout)
    await Cart.destroy({ where: {}, truncate: true }); // Vacía el carrito
    res.status(200).json({ message: 'Checkout successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
