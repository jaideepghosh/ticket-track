import express, { Request, Response, NextFunction } from 'express';
import Tickets from "../models/tickets";
import MESSAGES from '../constants/messages';
import { TicketCreateSchema, TicketPatchSchema } from '../schema/ticket';
import StatusValidator from '../validators/status';
import PayloadValidator from '../validators/payload';

var router = express.Router();

/* GET tickets listing. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await Tickets.find();
    
    return res.json(result);
  } catch (error) {
    return res.status(500).send({message: MESSAGES.SOMETHING_WENT_WRONG});
  }
});

// Create a ticket
router.post('/', PayloadValidator(TicketCreateSchema),  async function(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const result = await Tickets.create(payload);    
    return res.json(result);
  } catch (error) {
    console.log("error:: ", error);
    return res.status(500).send({message: MESSAGES.SOMETHING_WENT_WRONG});
  }
});

// Update ticket
router.patch('/:id', PayloadValidator(TicketPatchSchema), StatusValidator(), async function(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const updatedTicket = await Tickets.findOneAndUpdate({_id: id}, req.body, {
      new: true
    });
    return res.json(updatedTicket);
  } catch (error) {
    console.log("error:: ", error);
    return res.status(500).send({message: MESSAGES.SOMETHING_WENT_WRONG});
  }
});

/* GET ticket by ID. */
router.get('/:id', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const result = await Tickets.findById(id);

    if(!result) return res.status(404).send({message: MESSAGES.INVALID_REQUEST});
    
    return res.json(result);
  } catch (error) {
    return res.status(500).send({message: MESSAGES.SOMETHING_WENT_WRONG});
  }
});
module.exports = router;