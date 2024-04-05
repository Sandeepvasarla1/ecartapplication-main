import React from "react";
import axios from "axios";
import ProductsCart from "./ProductsCart";

const Products = () => {
  var [products, setProducts] = React.useState([]);
  var [CartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts([...res.data]);
      console.log(res.data);
    });
  }, []);

  function addTocart(product) {
    if (product.quantity) {
      product.quantity = product.quantity++;
    } else {
      product.quantity = 1;
      setCartItems([...CartItems, { ...product }]);
    }
  }

  // function addTocart(product){
  //     setCartItems([...CartItems,{...product}])
  // }

  React.useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="d-flex" >
      {/* <h1>PRODUCTS</h1> */}
      <div className="d-flex flex-wrap w-65">
        {products?.map((product) => {
          return (
            <div id="d1" class="card m-3" style={{ width: "250px" }}>
              <img src={product.image} id="i1" class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.description.slice(0, 100)}</p>
                <p class="card-text">
                  <small class="text-body-secondary">{product.category}</small>
                </p>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    addTocart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border border-dark w-25">
        <ProductsCart CartItems={CartItems} />
      </div>
    </div>
  );
};
export default Products;
