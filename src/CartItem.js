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
    const { title, price, qty } = this.props.product;
    return (
        <div className="cart-item">
          <div className="left-block">
            <img style={styles.image} />
          </div>
          <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>Rs {price} </div>
            <div style={ { color: '#777' } }>Qty: {qty} </div>
            <div className="cart-item-actions">
              {/* Buttons */}
              <img
                alt="increase"
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/992/992651.svg"
                onClick={this.increaseQty}
              />
              <img
                alt="decrease"
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
                onClick={this.decreaseQty}
              />
              <img
                alt="delete"
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              />
            </div>
          </div>
        </div>
      );
  }

  increaseQty = () => {
    console.log(this.props);
      this.setState({
        qty: this.props.qty + 1
      });
  }

  decreaseQty = () => {
    const { qty } = this.props;

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
