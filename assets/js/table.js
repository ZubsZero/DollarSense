function calculateExpenseBreakdown() {
    let income = parseFloat(document.getElementById('income').value);
    let fixedExpenses = income * 0.65;
    let investments = income * 0.1;
    let goWild = income * 0.1;
    let savings = income * 0.15;
    document.getElementById('fixed-expenses-amount').textContent = fixedExpenses.toFixed(2);
    document.getElementById('investments-amount').textContent = investments.toFixed(2);
    document.getElementById('go-wild-amount').textContent = goWild.toFixed(2);
    document.getElementById('savings-amount').textContent = savings.toFixed(2);
  }
  function addExpense() {
    let expenseName = document.getElementById('expense-name').value;
    let expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    let expenseCategory = document.getElementById('expense-category').value;
    let categoryElement = document.getElementById(expenseCategory + '-amount');
    let categoryAmount = parseFloat(categoryElement.textContent);
    categoryElement.textContent = (categoryAmount - expenseAmount).toFixed(2);
    let table = document.getElementById('expense-outcomes-table');
    let row = table.insertRow(-1);
    let nameCell = row.insertCell(0);
    let amountCell = row.insertCell(1);
    let categoryCell = row.insertCell(2);
    let actionCell = row.insertCell(3);
    nameCell.textContent = expenseName;
    amountCell.textContent = expenseAmount.toFixed(2);
    categoryCell.textContent = expenseCategory;
    actionCell.innerHTML = '<button onclick="deleteExpense(this)">Delete</button>';
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
  }
  function deleteExpense(button) {
  let row = button.parentNode.parentNode;
  let expenseAmount = parseFloat(row.cells[1].textContent);
  let expenseCategory = row.cells[2].textContent;
  let categoryElement = document.getElementById(expenseCategory + '-amount');
  let categoryAmount = parseFloat(categoryElement.textContent);
  categoryElement.textContent = (categoryAmount + expenseAmount).toFixed(2);
  let table = document.getElementById('expense-outcomes-table');
  table.deleteRow(row.rowIndex);
  }
  function clearExpenseOutcomes() {
  let table = document.getElementById('expense-outcomes-table');
  let rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  }
  document.getElementById('income').addEventListener('input', calculateExpenseBreakdown);
  
  
  
  
  
  