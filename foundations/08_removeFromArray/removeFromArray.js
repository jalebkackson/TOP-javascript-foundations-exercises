const removeFromArray = function (array, ...itemsToDelete) {
  for (let i = 0; i < itemsToDelete.length; i++) {
    while (array.includes(itemsToDelete[i])) {
      const itemIndex = array.indexOf(itemsToDelete[i]);
      if (itemIndex !== -1) {
        array.splice(itemIndex, 1);
      }
    }
  }
  return array;
};

removeFromArray(arr2, 5, 6, 7, 8, 9, 10, 11, 48);
// Do not edit below this line
module.exports = removeFromArray;
