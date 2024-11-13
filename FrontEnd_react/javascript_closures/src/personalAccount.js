const personAccount = () => {
  const firstName = "Jonas";
  const lastName = "Jonaitis";
  const incomes = [[1, 2, 3, 4], "Description of income"];
  const expenses = [[3, 1, 2], "Description of expenses"];

  const totalIncome = () => {
    return incomes[0].reduce((acc, val) => acc + val);
  };
  const totalExpense = () => {
    return expenses[0].reduce((acc, val) => acc + val);
  };
  const accountInfo = () => {
    return { firstName, lastName, incomes, expenses };
  };
  const addIncome = (income) => {
      return income[0].push(income)
  };
  const addExpense = (expense) => {
    return expenses[0].push(expense)
  };
  const accountBalance = () => {
    return totalIncome() - totalExpense();
  };

  return {}
};
