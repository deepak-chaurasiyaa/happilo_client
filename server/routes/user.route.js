import Router from 'express-promise-router';
import { userController } from '../controllers/index.js';
import { validateBody, validateDbBody, schemas } from '../validators/index.js';
const router = Router();

router.post(
  '/signup',
  validateBody(schemas.signup),
  validateDbBody.signup,
  userController.createUser
);

router.post('/login', userController.login);

router.post('/encryption', userController.encryption);

router.get('/list', userController.listAllUser);
router.param('id', userController.findUserById);

router.put('/:id', userController.updateUserById);

router.delete('/:id', userController.deleteUserById);
export default router;
