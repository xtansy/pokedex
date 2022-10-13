import { maxLength, minLength, required } from "./rules";

export const citySchema = {
    required,
    minLength: minLength(2),
    maxLength: maxLength(10),
};
