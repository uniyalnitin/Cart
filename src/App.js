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
          img:
            "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile",
          qty: 10,
          img:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 4,
          img:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
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
  };

  getCartTotal = () => {
    const { products } = this.state;
    return products.reduce(
      (accumulator, product) => accumulator + product.qty * product.price,
      0
    );
  };

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
        <div style={{fontSize:20, marginLeft:20, fontWeight:500}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
