import Joi from "joi";
import MESSAGES from "../constants/messages";

interface ValidationErrorType {
    [key: string | number]: string | number
}

const FrameJoiMessage = (validationResponse: Joi.ValidationResult) => {
    if (!validationResponse.error || !validationResponse.error.details) {
            return {};
        }
        let validationErrors: ValidationErrorType = {};
        validationResponse.error.details.forEach((error_message) => {
            if (!error_message.path)
                throw new Error(MESSAGES.MISSING_VALIDATION_KEYPATH);

            let errorKey: string | number;
            if (error_message.path.length > 1) {
                errorKey = error_message.path.join(".");
            } else {
                errorKey = error_message.path[0];
            }
            validationErrors[errorKey] = error_message.message;
        });

        return validationErrors;
};



export default FrameJoiMessage;