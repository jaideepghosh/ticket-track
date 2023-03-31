import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import FrameJoiMessage from '../utils/joi-message';
import MESSAGES from '../constants/messages';

const PayloadValidator = (schema: Joi.ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validationResponse = await schema.validate(req.body, {
                abortEarly: false, //abortEarly - collect all errors not just the first one
                allowUnknown: true
            });
            const validationErrors = FrameJoiMessage(validationResponse);
            if (Object.keys(validationErrors).length)
                return res.status(400).send({errors: validationErrors});
            return next();
        } catch (error) {
            return res.status(500).send({message: MESSAGES.INTERNAL_SERVER_ERROR});
        }
    }
}

export default PayloadValidator;