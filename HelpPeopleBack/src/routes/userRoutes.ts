import { Router } from 'express';
import multer from 'multer';
import {
    createUser,
    uploadUsers
} from '../controllers/userController';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', createUser);
router.post('/upload', upload.single('file'), uploadUsers);

export default router;
