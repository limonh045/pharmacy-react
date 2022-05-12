import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../component/Modal";

function OrderHistory() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [viewModal, setViewModal] = useState(false);

  const orderAll = useSelector((state) => state.cart.totalSell);


  const viewOrderHandel = (item) => {
    console.log(item);
    setSelectedOrder(item);
    setViewModal((e) => (e = !e));
  };

  return (
    <div style={{ padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Order History</h1>
      </div>

      <div className="table-section">
        <table width="100%">
          <thead>
            <tr>
              <th>Customar Name</th>
              <th>Customar Phone</th>
              <th>Total Items</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orderAll.map((item, i) => (
              <tr key={i}>
                <td>{item.customarInfo.name}</td>
                <td>{item.customarInfo.mobile}</td>
                <td>{item.cartItem.length}</td>
                <td>{item.total}</td>

                <td>
                 
                  <img
                    onClick={() => viewOrderHandel(item)}
                    className="delete-icon"
                    src="icon/view.png"
                    alt="Edit Icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Delete Modal */}
  
      {/* Add Vendor Modal */}
      <Modal
        value={viewModal}
        modalHandelar={() => setViewModal((e) => (e = !e))}
        title="Order Details"
      >
        <div className="spaceBetween">
          <div>
            <b>Customar :</b> {selectedOrder && selectedOrder.customarInfo.name}
          </div>
          <div>
            <b>Customar :</b>{" "}
            {selectedOrder && selectedOrder.customarInfo.mobile}
          </div>
        </div>
        <br />
        <div>
          <table width="100%">
            <thead>
              <tr>
                <th>Item</th>
                <th>Weight</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder &&
                selectedOrder.cartItem.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.weight}</td>
                    <td>{item.price}</td>
                    <td>{item.buyQuantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <hr />
          <div style={{ textAlign: "right" }}>
            <b>Grand Total :</b> {selectedOrder && selectedOrder.total}
          </div>
        </div>
      </Modal>
      {/* Edit Modal */}
    </div>
  );
}

export default OrderHistory;
