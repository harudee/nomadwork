const list = [1, 2, 3, 4];

//const newList = list.concat(5);
//const newList = list.filter((i) => i !== 3);
const newList = list.map((list) => (list === 1 ? list : 2));

console.log(newList);
