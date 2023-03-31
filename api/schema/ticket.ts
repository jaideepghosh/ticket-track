import Joi from 'joi';
import { STATUS_LIST } from '../constants/common';

export const TicketCreateSchema = Joi.object({
    title: Joi.string().required(),
    status: Joi.any().valid(...STATUS_LIST).required(),
    description: Joi.string().required(),
});

export const TicketPatchSchema = Joi.object({
    title: Joi.string(),
    status: Joi.any().valid(...STATUS_LIST),
    description: Joi.string(),
});
