import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from 'firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore()
  }

  componentDidMount(){
    this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      
      this.setState({
        products,
        loading: false
      })
    })
  }

  handlerIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty + 1
    })
    .then(()=>{
      console.log('Document Updated Successfully!');
    })
    .catch((err)=>{
      console.log("error", err);
    })
    
  };

  handlerDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty <= 0) {
      return;
    }
    
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty - 1
    })
    .then(() => {
      console.log("Product updated Successfully!");
    })
    .catch((err) => {
      console.log("Error", err);
    })
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
    const docRef = this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=> {
      console.log("Product deleted Successfully!");
    })
    .catch((err) => {
      console.log("Error", err);
    })
  };

  addProduct = () =>{
    const product = {
      title: "Washing Machine",
      qty: 2,
      img: "",
      price: 7887
    }

    this.db.collection('products').add(product).then((docRef) => {
      console.log('Product Added', docRef);
    }).catch((err) => {
      console.log("error", err);
    })
  }
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button style={{padding: 20, fontSize: 20, marginTop: 10, backgroundColor: "yellow"}} onClick={this.addProduct}>Add Product</button>
        <Cart
          products={products}
          increaseQuantity={this.handlerIncreaseQuantity}
          decreaseQuantity={this.handlerDecreaseQuantity}
          deleteProduct={this.handlerDeleteProduct}
        />
        {loading && <h1>loading products</h1>}
        {!loading && <div style={{fontSize:20, marginLeft:20, fontWeight:500}}>Total: {this.getCartTotal()}</div> }
      </div>
    );
  }
}

export default App;
