import Router from 'express-promise-router';
import { userController } from '../controllers/index.js';

const router = Router();

router.post('/', userController.createUser);

router.post('/login', userController.login);

router.get('/list', userController.listAllUser);

router.get('/:id', userController.findUserById);

router.put('/:id', userController.updateUserById);

router.delete('/:id', userController.deleteUserById);
export default router;
