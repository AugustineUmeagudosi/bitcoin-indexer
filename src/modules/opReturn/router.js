import { Router } from 'express';
import * as Controller from './controller';

const router = Router();

router.get('/:opReturnData', Controller.getOpReturnData);

export default router;