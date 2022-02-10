// BOOLEAN Empty Object
export const isObjectEmpty = (object: Record<string, string>): boolean => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};
