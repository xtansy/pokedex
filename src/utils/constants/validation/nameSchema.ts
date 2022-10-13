import { required, maxLength, minLength } from "./rules";

export const nameSchema = {
    maxLength: maxLength(14),
    minLength: minLength(2),
    required,
};
