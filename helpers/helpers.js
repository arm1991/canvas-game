export function objectExistsInArray(obj, arr, type) {
  let bool = false;
  arr.forEach((item, idx) => {
    if (type && idx === 0) {
      return;
    }
    if (item.x === obj.x && item.y === obj.y) {
      bool = true;
    }
  });
  return bool;
}
