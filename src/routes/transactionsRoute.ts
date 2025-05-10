import { Router } from 'express';
import controller from '../modules/transactions/controller';
import { isBodyValidation, isParamValidation } from '../middlewares/requestMiddleware';
import { mugglePayWebhookSchema, transactionSchema } from '../modules/transactions/validation';

const router: Router = Router();
router.get('/:txhash', isParamValidation(transactionSchema), controller.getTransaction);
router.post('/muggle-pay-webhook', isBodyValidation(mugglePayWebhookSchema), controller.mugglePayWebhook);

export default router;
