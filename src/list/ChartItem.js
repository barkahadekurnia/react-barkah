import React,{useState,useEffect} from 'react'

export default function ChartItem() {
    const listChart = [
        {prodId : 1, prodName:'Shampoo',qty:1,salary:5000},
        {prodId : 2, prodName:'Soap',qty:1,salary:4000},
        {prodId : 3, prodName:'Tooth Paste',qty:1,salary:6000},
    ]
    const [cart,setCart] = useState(listChart)
    const [total,setTotal] = useState(0)
    const [totalQty,setTotalQty] = useState(0)

    const Tambah = (id) => {
        setCart(
            [...cart.map(carts=> {
                if (id === carts.prodId) {
                    carts.qty = carts.qty + 1
                    return carts
                } else {
                    return carts
                }
            })]
        )
    }

    const Kurang = (id) => {
        setCart(
            [...cart.map(carts=> {
                if (id === carts.prodId) {
                    carts.qty = carts.qty - 1
                    return carts
                } else {
                    return carts
                }
            })]
        )
    }
    useEffect(()=>{
        const TotalHarga = cart.reduce((sum,el)=>sum+(el.salary * el.qty),0)
        setTotal(TotalHarga)
        const TotalQuantity = cart.reduce((sum,el)=>sum+el.qty,0)
        setTotalQty(TotalQuantity)
    })
  return (
    <div>
        <h2>List of Carts</h2>
        <table>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Salary</th>
            <th>Sub Total</th>
        <tbody>
            {
                (cart||[]).map(carts=>(
                    <tr key={carts.prodId}>
                        <td>{carts.prodId}</td>
                        <td>{carts.prodName}</td>
                        <td>{carts.qty}</td>
                        <td>{carts.salary}</td>
                        <td>{carts.qty * carts.salary}</td>
                        <td>
                        <button onClick={()=>Tambah(carts.prodId)}>+</button>
                        <button onClick={()=>Kurang(carts.prodId)}>-</button>
                        </td>
                    </tr>
                )

                )
            }
        </tbody>
        </table>
        <h3>Total Harga : Rp. {total}</h3>
        <h3>Total Quantity : {totalQty}</h3>
    </div>
  )
}
