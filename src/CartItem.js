import React from 'react'

class CartItem extends React.Component{
    render(){
        return (
            <div style={styles.cartItem} className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div style={styles.rightBlock} className="right-block">
                    <div style={{fontSize: 20, fontWeight: 500, fontFamily: "sans-serif"}}>Phone</div>
                    <div style={{color:"#333", fontStyle:"italic"}}>>Rs 999</div>
                    <div style={{color:"#333", fontStyle: "oblique"}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 100,
        width: 100,
        background: "#ccc",
        borderRadius: 20,
        border:"none"
    },
    cartItem:{
        display:"flex",
        alignItems: "center"
    },
    rightBlock:{
        marginLeft: 20,
    }
}
export default CartItem;