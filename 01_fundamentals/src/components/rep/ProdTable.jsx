import React from 'react'
import products from '../../data/products'
import './ProdTable.css'

const ProdTable = () => {

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    return (
        <div className='prodTable'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody >
                    {products && products.map((prod, i) => (
                        <tr key={prod.id} className={i % 2 === 0 ? 'even' : ''}>
                            <td>{prod.id}</td>
                            <td>{prod.product}</td>
                            <td>{formatCurrency(prod.price)}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ProdTable