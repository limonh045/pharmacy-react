import { useState } from "react";
import Class from "../style/CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartQuantityHandel, cartItemDelete, totalBuy } from "../app/CartSlice";

function CartItem() {
  const [cartToggle, setCartToggle] = useState(true);
  const [customarInfo, setCustomarInfo] = useState({ name: "", mobile: "" });

  const cartItem = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const Total = () => {
    return cartItem.length
      ? cartItem.reduce(
          (total, item) =>
            total + parseInt(item.price) * parseInt(item.buyQuantity),
          0
        )
      : 0;
  };
  const cartItemQuantity = (e, itemName) => {
    if (e.target.value >= 1) {
      dispatch(cartQuantityHandel({ quantity: e.target.value, itemName }));
    }
  };
  const buyallHandel = () => {
    let info = {
      customarInfo,
      total: cartItem.reduce(
        (total, item) =>
          total + parseInt(item.price) * parseInt(item.buyQuantity),
        0
      ),
      cartItem,
    };
    dispatch(totalBuy(info));
    setCustomarInfo({ name: "", mobile: "" });
  };
  return (
    <div
      className={Class.cartArea}
      style={{ marginRight: cartToggle ? "-430px" : "" }}
    >
      <button
        onClick={() => setCartToggle((e) => (e = !e))}
        className={Class.cartToggleBtn}
        style={{ transform: cartToggle ? "rotate(180deg)" : "rotate(0deg)" }}
      ></button>

      {cartItem.length!==0 && (
        <div>
          <h1>Cart Item</h1>
          <table width="100%">
            <thead>
              <tr>
                <th>Item</th>
                <th>Vendor</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}s</td>
                  <td>{item.vendor}</td>
                  <td>
                    <input
                      style={{ width: "25px" }}
                      type="number"
                      value={item.buyQuantity}
                      onChange={(e) => cartItemQuantity(e, item.name)}
                    />
                  </td>
                  <td>{item.price * item.buyQuantity}</td>
                  <td>
                    <img
                      onClick={() => dispatch(cartItemDelete(item.name))}
                      className="delete-icon"
                      src="icon/delete.png"
                      alt="Edit Icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />

          <div style={{ textAlign: "right" }}>
            <b>Grand Total :</b>
            <Total /> Tk
          </div>
          <div>
            <input
              className="customar-info"
              value={customarInfo.name}
              placeholder="Name"
              onChange={(e) =>
                setCustomarInfo({ ...customarInfo, name: e.target.value })
              }
            />
            <input
              className="customar-info"
              value={customarInfo.mobile}
              placeholder="Mobile Number"
              onChange={(e) =>
                setCustomarInfo({ ...customarInfo, mobile: e.target.value })
              }
            />
          </div>
          <button className="btnn" onClick={() => buyallHandel()}>
            Buy{" "}
          </button>
        </div> 
      )}
      {
        !cartItem.length && <h1 style={{textAlign: 'center'}}>No Item Added</h1>
      }
    </div>
  );
}

export default CartItem;
