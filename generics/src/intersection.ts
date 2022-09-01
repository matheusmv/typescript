export function mergeTwoObjects<O1, O2>(object1: O1, object2: O2): O1 & O2 {
  return { ...object1, ...object2 };
}

export function mergeObjects<O1, O2>(object1: O1, object2: O2): O1 & O2 {
  return Object.assign({}, object1, object2);
}

const obj1 = { key1: 'value1' };
const obj2 = { key2: 'value2' };

console.log(mergeTwoObjects(obj1, obj2));
console.log(mergeObjects(obj1, obj2));
