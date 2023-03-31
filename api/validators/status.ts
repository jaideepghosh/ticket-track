import { Request, Response, NextFunction } from 'express';
import MESSAGES from '../constants/messages';
import Tickets from '../models/tickets';
import { STATUS_LIST } from '../constants/common';

const StatusValidator = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            if(!req.body || !req.body.status) return next();

            const { id } = req.params;

            // check the ticket status
            const ticket = await Tickets.findById(id);

            if(!ticket)
                return res.status(404).send({message: MESSAGES.INVALID_REQUEST});

            // As per the condition, the possible new status can be current-status-1 or current-status+1;
            const currentStatusId = STATUS_LIST.findIndex((item: string) => item===ticket?.status);

            const possibleStatus = [
                STATUS_LIST[currentStatusId-1],
                STATUS_LIST[currentStatusId+1]
            ].filter(Boolean);

            if(!possibleStatus.includes(req.body.status))
                return res.status(400).send(
                    {
                        message: MESSAGES.INVALID_STATUS,
                        description: `Valid status option(s) is(are): [${possibleStatus}]`
                    }
                );
            return next();
        } catch (error) {
            return res.status(500).send({message: MESSAGES.INTERNAL_SERVER_ERROR});
        }
    }
}

export default StatusValidator;