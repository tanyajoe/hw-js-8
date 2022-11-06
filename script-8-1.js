let expenses = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  {
    expenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    expenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

//console.log(Array.from(expenses[0].expenses));

// for (let item of expenses) {Array.from(expenses[0].expenses)}
const array1 = Array.from(expenses[0].expenses);
const array2 = Array.from(expenses[1].expenses);
const array3 = Array.from(expenses[2].expenses);

const newArray = array1.concat(array2, array3);
console.log(newArray);

let sum = 0;

const filteredArray = newArray.filter(function (value) {
  return value > 1000;
});
let i = 0;
while (i < filteredArray.length) {
  sum += filteredArray[i];
  i++;
}
console.log(sum);
