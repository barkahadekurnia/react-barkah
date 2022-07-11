import React, { useState, useEffect } from "react";
import ChartForm from "./ChartForm";

export default function ChartList() {
  const listChart = [
    { prodId: 1, prodName: "Dell", qty: 1, salary: 5000, Category: "Laptop" },
    { prodId: 2, prodName: "Gamis", qty: 1, salary: 4000, Category: "Baju" },
    {
      prodId: 3,
      prodName: "Xiaomi",
      qty: 1,
      salary: 6000,
      Category: "Handphone",
    },
  ];
  const [carts, setCarts] = useState(listChart);
  const [Category] = useState(["Handphone", "Laptop", "Baju", "Alat Rumah"]);
  const [totalHrg, setTotalHrg] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    prodName: undefined,
    qty: 0,
    salary: 0,
    Category: undefined,
  });

  useEffect(() => {
    const TotalHarga = carts.reduce((sum, el) => sum + el.qty * el.salary, 0);
    setTotalHrg(TotalHarga);
    const TotalQuantity = carts.reduce((sum, el) => sum + el.qty, 0);
    setTotalQty(TotalQuantity);
  }, [carts]);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setCarts([
      ...carts,
      {
        prodId: Math.round(Math.random() * 10),
        prodName: values.prodName,
        qty: values.qty,
        salary: values.salary,
        Category: values.Category,
      },
    ]);
    setDisplay(false);
  };

  const selectOnChange = (e) => {
    const value =
      e.target.selectedIndex !== 0
        ? e.target.options[e.target.selectedIndex].value
        : null;
    setValues({ ...values, Category: value });
  };

  return (
    <div>
      <h2>List Cart</h2>
      <button onClick={() => setDisplay(true)}> Add Product</button>
      {display ? (
        <ChartForm
          onSubmitForm={onSubmit}
          handleOnChange={handleChange}
          Category={Category}
          selectOnChange={selectOnChange}
          setDisplay={setDisplay}
        />
      ) : (
        <>
          <table>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Salary</th>
            <th>Category</th>
            <th>Sub Total</th>
            <tbody>
              {(carts || []).map((cart) => (
                <tr key={cart.prodId}>
                  <td>{cart.prodId}</td>
                  <td>{cart.prodName}</td>
                  <td>{cart.qty}</td>
                  <td>{cart.salary}</td>
                  <td>{cart.Category}</td>
                  <td>{cart.qty * cart.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3> Total Salary : Rp. {totalHrg} </h3>
          <h3> Total Quantity : {totalQty} </h3>
        </>
      )}
    </div>
  );
}
