import express, { Request, Response, NextFunction } from 'express';
import Tickets from "../models/tickets";
import MESSAGES from '../constants/messages';

var router = express.Router();

/* GET tickets listing. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await Tickets.find();
    console.log("result:: ", result);
    
    res.json(result);
  } catch (error) {
    return res.status(500).send({message: MESSAGES.SOMETHING_WENT_WRONG});
  }
});

// Create a ticket
router.post('/', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const result = await Tickets.create(payload);
    console.log("result:: ", result);
    
    return res.json(result);
  } catch (error) {
    console.log("error:: ", error);
    return res.status(500).send({message: MESSAGES.SOMETHING_WENT_WRONG});
  }
});

// Update ticket
router.patch('/:id', async function(req: Request, res: Response, next: NextFunction) {
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

module.exports = router;