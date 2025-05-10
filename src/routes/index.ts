import { Router } from 'express';
import transactionsRoute from './transactionsRoute';

const router: Router = Router();
router.use('/transactions', transactionsRoute);

export default router;
