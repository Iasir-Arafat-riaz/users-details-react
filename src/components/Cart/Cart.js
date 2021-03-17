import React from 'react';

const Cart = (props) => {
  const cart = props.total
  let totalSalary = 0
  for (let i = 0; i < cart.length; i++) {
    let user = cart[i];
    totalSalary = totalSalary + user.salary;
    //   console.log(totalSalary)
    console.log(user.salary)
  }
  let monthlyCost = totalSalary * 0.8;
  let taxes = monthlyCost * .1

  const totalCost = monthlyCost + taxes
  const savings = totalSalary - totalCost

  return (
    <div>
      <h2>Summary</h2>
      <h2>Month = {props.total.length}</h2>
      <h4>Monthly Salary = ${totalSalary}</h4>
      <h3>Monthly cost = ${monthlyCost}</h3>
      <p>vat = $ {taxes}</p>
      <h6>total Cost = ${totalCost}</h6>
      <h5>Monthly Savings = ${savings}</h5>

    </div>
  );
};

export default Cart;