import { Products_Type } from "../types";

export function isObjectInArray(array: Products_Type[], targetId: string) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === targetId) {
      return true;
    }
  }
  return false;
}
