import React from "react";

const CartItem = (props) => {
    // object destructuring
  const { title, price, qty } = props.product;
  const { product, increaseQuantity, decreaseQuantity, deleteProduct} = props;
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
              onClick={() => {increaseQuantity(product)}}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
              onClick={() => {decreaseQuantity(product)}}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
              onClick={() => deleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
}

const styles = {
  image: {
    height: 100,
    width: 100,
    background: "#ccc",
    borderRadius: 20,
    border: "none",
  }
};
export default CartItem;
