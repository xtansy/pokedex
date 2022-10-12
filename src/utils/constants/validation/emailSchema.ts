import { required, maxLength, minLength, patternEmail } from "./rules";

export const emailSchema = {
    maxLength: maxLength(15),
    minLength: minLength(5),
    pattern: patternEmail,
    required,
};
