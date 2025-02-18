import { Object } from "../types/definitions";

const objectToString = (obj: Object): string => {
  return JSON.stringify(obj, null, 2);
};

export default objectToString;
