import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }
  handlerIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handlerDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty <= 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () =>{
    const {products} = this.state;
    return products.reduce((accumulator, product) => (accumulator + product.qty*product.price), 0);
  }

  handlerDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((product) => product.id != id);
    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          increaseQuantity={this.handlerIncreaseQuantity}
          decreaseQuantity={this.handlerDecreaseQuantity}
          deleteProduct={this.handlerDeleteProduct}
        />
        <div>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
