import React, { useState, useEffect } from "react";

const ShoppingCart = ({ userInfo, products }) => {
  const {
    email,
    address,
    firstName,
    lastName,
    phone,
    city,
    postal,
    prov,
    cart,
  } = userInfo;

  const { id, title, description, price, image } = products;
  const [total, setTotal] = useState();
  const [subTotal, setSubTotal] = useState();
  const [hst, setHST] = useState();

  useEffect(() => {
    let subTotal = 0;
    let hst = 0;
    cart.map((item) => {
      subTotal += item.price * item.quantity;
    });
    setSubTotal(subTotal);
    hst = subTotal * 0.15;
    setHST(hst);

    setTotal(subTotal + hst);
  }, [userInfo]);

  return (
    <div className="background">
      <div className="shoppingCart">
        {cart.map((item) => {
          return (
            <div key={item.productId} className="cart-item">
              <img src={item.image} alt="Flower Image" />
              <div className="cart-item-text">
                <h3>{item.title}</h3>
                <div className="delete-small">X</div>
                <div className="cart-item-price=container">
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <span className="cart-item-x"> X </span>
                  <span className="cart-item-price">
                    {new Intl.NumberFormat("en-CA", {
                      style: "currency",
                      currency: "CAD",
                    }).format(item.price / 100)}
                  </span>
                </div>
              </div>
              <div className="cart-item-delete">X</div>
            </div>
          );
        })}
        <hr />
        <div className="total-background">
          <div className="total-container">
            <div>
              <div className="total-detail">
                <span>Subtotal: </span>
                <span>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(subTotal / 100)}
                </span>
              </div>
              <div className="total-detail">
                <span>HST:</span>{" "}
                <span>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(hst / 100)}
                </span>
              </div>
              <div className="total-detail">
                <span>Total: </span>
                <span>
                  {new Intl.NumberFormat("en-CA", {
                    style: "currency",
                    currency: "CAD",
                  }).format(total / 100)}
                </span>
              </div>
              <button className="checkout-btn-small">
                <i className="fas fa-shopping-cart"></i> <span>Checkout!</span>
              </button>
            </div>
            <button className="checkout-btn">
              <i className="fas fa-shopping-cart"></i> <span>Checkout!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

// Default Props for Guest Checkout
ShoppingCart.defaultProps = {
  userInfo: {
    email: "notaperson@gmail.com",
    firstName: "Guest",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    prov: "",
    postal: "",
    cart: [],
  },
};
