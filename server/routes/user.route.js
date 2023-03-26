import Router from 'express-promise-router';
import { userController } from '../controllers';

const router = Router();

router.post('/', userController.createUser);

router.post('/login', userController.login);

router.get('/:id', userController.findUserById);

router.put('/:id', userController.updateUserById);

router.get('/list', userController.listAllUser);
router.delete('/:id', userController.deleteUserById);
export default router;
