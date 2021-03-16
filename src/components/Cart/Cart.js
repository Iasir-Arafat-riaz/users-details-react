import React from 'react';

const Cart = (props) => {
    const cart=props.total
    let totalSalary=0
    for (let i = 0; i< cart.length; i++) {
      let user = cart[i];
      totalSalary=totalSalary+user.salary;
    //   console.log(totalSalary)
      console.log(user.salary)
      
    }
    return (
        <div>
            <h1>count = {props.total.length}</h1>
            <h4>Total Salary = ${totalSalary}</h4>
        </div>
    );
};

export default Cart;