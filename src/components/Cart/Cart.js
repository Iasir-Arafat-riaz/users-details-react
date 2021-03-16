import React from 'react';

const Cart = (props) => {
    const cart=props.total
    let totalSalary=0
    for (let i = 0; i< cart.length; i++) {
      let element = cart[i];
      totalSalary=totalSalary+element.salary;
      
    }
    return (
        <div>
            <h1>count = {props.total.length}</h1>
            <h4>Total Salary = ${Number(totalSalary)}</h4>
        </div>
    );
};

export default Cart;