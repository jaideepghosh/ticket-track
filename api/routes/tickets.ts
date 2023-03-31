import express, { Request, Response, NextFunction } from 'express';
import Tickets from "../models/tickets";

var router = express.Router();

/* GET users listing. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await Tickets.find();
    console.log("result:: ", result);
    
    res.json(result);
  } catch (error) {
    return res.status(500).send({message: "SOMETHING_WENT_WRONG"});
  }
});

module.exports = router;
