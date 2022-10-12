import { required, maxLength, minLength } from "./rules";

export const passwordSchema = {
    maxLength: maxLength(20),
    minLength: minLength(5),
    required,
};
