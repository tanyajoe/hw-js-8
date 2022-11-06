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

let sum = 0;

expenses.forEach(function (item) {
  console.log(`Массив длиной ${item.expenses.length}`);
  for (let i = 0; i < item.expenses.length; i++) {
    console.log(`Проверяем значение ${item.expenses[i]}`);
    if (item.expenses[i] > 1000) {
      console.log(
        `Значение ${item.expenses[i]} подходит под условие сложения: прибавляем к текущей сумме ${sum}`
      );
      sum += item.expenses[i];
      console.log(`Текуущая сумма ${sum}`);
    } else {
      console.log(
        `Значение ${item.expenses[i]} не подходит под условие сложения`
      );
    }
  }
  console.log(`Итоговая сумма ${sum}`);
});