import mongoose from "mongoose";
import { STATUS } from "../constants/common";

const TiketSchema = new mongoose.Schema({
	status: {
        type: String,
        enum : [
            STATUS.CLOSED,
            STATUS.CODE_REVIEW,
            STATUS.IN_PROGRESS,
            STATUS.OPEN
        ],
        default: STATUS.OPEN,
		required: true
	},
    description: {
        type: String,
    },
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

TiketSchema.index(
    { status: 1 }
);

const Tickets = mongoose.model("tickets", TiketSchema);
export default Tickets;