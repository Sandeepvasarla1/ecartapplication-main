import React from 'react'

const ProductsCart=({CartItems})=>{
    return (
        <div >
            <h1>welcome to cart</h1>
            {/* <i className='bi bi-cart4 cartShape'></i> */}
            <ul>
                
                {
                    CartItems?.map((item)=>{
                        return (
                            <li className='abc'>
                                {item.title}</li>
                        )
                    })
                }
            </ul>
            {
              CartItems.length===0 &&<h3>Cart Empty</h3>
            }
        </div>
    )
}
export default ProductsCart