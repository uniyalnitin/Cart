import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Mobile Phone",
      price: 999,
      qty: 1,
    };
  }

  render() {
    // object destructuring
    const { title, price, qty } = this.state;
    return (
      <div style={styles.cartItem} className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div style={styles.rightBlock} className="right-block">
          <div
            style={{ fontSize: 20, fontWeight: 500, fontFamily: "sans-serif" }}
          >
            {title}
          </div>
          <div style={{ color: "#333", fontStyle: "italic" }}>>Rs {price}</div>
          <div style={{ color: "#333", fontStyle: "oblique" }}>Qty: {qty}</div>
          <div style={{marginTop: 10}} className="cart-item-actions">
              <img style={styles.actionIcons} alt="increase" src="https://image.flaticon.com/icons/svg/992/992651.svg" onClick={this.increaseQty}/>
              <img style={styles.actionIcons} alt="decrease" src="https://image.flaticon.com/icons/svg/864/864373.svg" onClick={this.decreaseQty}/>
              <img style={styles.actionIcons} alt="delete" src="https://image.flaticon.com/icons/svg/1345/1345823.svg"/>
          </div>
        </div>
      </div>
    );
  }

  increaseQty = () => {
      this.setState({
        any: this.state.qty + 1
      });
  }

  decreaseQty = () => {
    const { qty } = this.state;

    if(qty == 0){
      return;
    }

    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }
}

const styles = {
  image: {
    height: 100,
    width: 100,
    background: "#ccc",
    borderRadius: 20,
    border: "none",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
  },
  rightBlock: {
    marginLeft: 20,
  },
  actionIcons:{
      height: 25,
      width: 25,
      marginLeft: 10
  }
};
export default CartItem;
