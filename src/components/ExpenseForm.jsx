import { useState } from "react";
import styles from './ExpenseForm.module.css';


const ExpenseForm = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("select Category");
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);


  const handleOnChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleOnChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleOnChangeCategory = (e) => {
    setCategory(e.target.value);
  };



  const handleOnFormSubmit = (event)=>{
     event.preventDefault();
     let expenseObj = {
        "amount": amount,
        "description": description,
        "category": category
     }

     console.log(expenseObj);

     setExpense((preExpense)=>{
        const updatedExpense = [...preExpense, expenseObj]
        console.log("Updated Expense: ", updatedExpense);

        return updatedExpense;
     })
     
     setAmount(0);
     setDescription('');
     setCategory("Select Category");

  }

  const handleGetTotalExpense = ()=>{
    const total = expense.reduce((acc, curr)=> acc + Number(curr.amount), 0);
    setTotalExpense(total);
  }


  return (
    <>
      <form onSubmit={handleOnFormSubmit}>
        <input className={styles.AmountBox} type="number" placeholder="enter amount" value={amount} onChange={handleOnChangeAmount}></input>
        <input className={styles.DescriptionBox} type="text" placeholder="enter description" value={description} onChange={handleOnChangeDescription}></input>
        <div>
          <select className={styles.selectBox} onChange={handleOnChangeCategory} value={category}>
            <option>Select Category</option>
            <option>Food & Dining</option>
            <option>Transportation</option>
            <option>Housing</option>
            <option>Utilities</option>
            <option>Healthcare & Wellness</option>
            <option>Entertainment</option>
            <option>Shopping</option>
            <option>Education</option>
            <option>Insurance</option>
            <option>Debt Payments</option>
            <option>Personal Care</option>
            <option>Savings Investments</option>
            <option>Miscellaneous</option>
          </select>
        </div>

        <button type="submit">SAVE</button>
      </form>


      <div>
         <p>Expense Amount: ₹{amount}</p>
         <p>Expense Description: {description}</p>
         <p>Expense Category: {category}</p>
         {/* <ul>
           {expense.map((exp)=><div key={exp.amount}><li>{exp.amount}</li><li>{exp.description}</li><li>{exp.category}</li></div>)}
         </ul> */}
      </div>

      <div className="Expense_Tracker">
         <div className="Expense-btn">
           <button onClick={handleGetTotalExpense}>Check Expense</button>
         </div>

         <div>
           <p>Total Expense: <b>₹{totalExpense}</b></p>
         </div>
      </div>
    </>
  );
};

export default ExpenseForm;
