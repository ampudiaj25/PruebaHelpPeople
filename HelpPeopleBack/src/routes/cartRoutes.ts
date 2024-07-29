import { Router } from 'express';
import {
    addToCart,
    checkout,
    getCart
} from '../controllers/cartController';

const router = Router();

router.post('/', addToCart);
router.get('/', getCart);
router.post('/checkout', checkout);

export default router;
