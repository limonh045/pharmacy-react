import { useState } from "react";
import Modal from "../component/Modal";
import FormInput from "../component/FormInput";

import { useDispatch, useSelector } from "react-redux";
import { deleteDrug, addvendor, editDrug } from "../app/Drug";
function Drugs() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [addDrug, setAddDrug] = useState(false);
  const [drugValue, addDrugValue] = useState({
    name: "",
    type: "",
    weight: "",
    vendor: "",
    price: "",
    quantity: "",
  });
  const [handelValue, setHandelValue] = useState(false);

  const drugs = useSelector((state) => state.drugs.value);
  const vendors = useSelector((state) => state.vendor.value);
  const dispatch = useDispatch();

  const deleteConfirmHandelar = () => {
    setDeleteModal((e) => (e = !e));
    dispatch(deleteDrug(selectedDrug));
  };

  const addDrugHandel = () => {
    setAddDrug((e) => (e = !e));
    dispatch(addvendor(drugValue));
    addDrugValue({
      name: "",
      type: "tab",
      weight: "",
      vendor: "",
      price: "",
      quantity: "",
    });
  };
  const editModalDrugHandel = (item) => {
    setAddDrug((e) => (e = !e));
    setSelectedDrug(item);
    setHandelValue(false);
    addDrugValue(item);
  };
  const editDrugHandel = () => {
    dispatch(editDrug({ selectedDrug, drugValue }));
    setAddDrug((e) => (e = !e));
    addDrugValue({
      name: "",
      type: "tab",
      weight: "",
      vendor: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <div style={{ padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>All Drugs</h1>
        <button
          className="btnn"
          onClick={() => {
            setAddDrug((e) => (e = !e));
            setHandelValue(true);
          }}
        >
          Add Drug
        </button>
      </div>

      <div className="table-section">
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>weight</th>
              <th>type</th>
              <th>vendor</th>
              <th>price</th>
              <th>quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug) => (
              <tr key={drug.name}>
                <td>{drug.name}</td>
                <td>{drug.weight}</td>
                <td>{drug.type}</td>
                <td>{drug.vendor}</td>
                <td>{drug.price}</td>
                <td>{drug.quantity}</td>
                <td>
                  <img
                    className="delete-icon"
                    onClick={() => {
                      setDeleteModal((e) => (e = !e));
                      setSelectedDrug(drug);
                    }}
                    alt="Delete icon"
                    src="icon/delete.png"
                  />
                  <img
                    onClick={() => editModalDrugHandel(drug)}
                    className="delete-icon"
                    src="icon/edit.png"
                    alt="Edit Icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Delete Modal */}
      <Modal
        value={deleteModal}
        modalHandelar={() => setDeleteModal((e) => (e = !e))}
        title="Do you confirm to delete?"
      >
        <br />
        <div className="d-flex">
          <button
            onClick={deleteConfirmHandelar}
            className="btnn"
            style={{ background: "green", marginRight: "10px" }}
          >
            Yess
          </button>
          <button
            onClick={() => setDeleteModal((e) => (e = !e))}
            className="btnn"
            style={{ background: "red" }}
          >
             No
          </button>
        </div>
        <br />
      </Modal>
      {/* Add or Edit Drugs Modal */}
      <Modal
        value={addDrug}
        modalHandelar={() => setAddDrug((e) => (e = !e))}
        title={`${handelValue ? "Add" : "Edit"} Vendor`}
      >
        <p>Select Drug Type</p>
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="d-flex">
            <input
              checked={drugValue.type === "Tab"}
              onChange={(e) =>
                addDrugValue({ ...drugValue, type: e.target.value })
              }
              value="Tab"
              type="radio"
              name="drug"
            />
            <label>Tab</label>
          </div>
          <div className="d-flex">
            <input
              checked={drugValue.type === "Capsule"}
              onChange={(e) =>
                addDrugValue({ ...drugValue, type: e.target.value })
              }
              value="Capsule"
              type="radio"
              name="drug"
            />
            <label>Capsule</label>
          </div>
          <div className="d-flex">
            <input
              checked={drugValue.type === "Syrup"}
              onChange={(e) =>
                addDrugValue({ ...drugValue, type: e.target.value })
              }
              value="Syrup"
              type="radio"
              name="drug"
            />
            <label>Syrup</label>
          </div>
          <div className="d-flex">
            <input
              checked={drugValue.type === "Suppository"}
              onChange={(e) =>
                addDrugValue({ ...drugValue, type: e.target.value })
              }
              value="Suppository"
              type="radio"
              name="drug"
            />
            <label>Suppository</label>
          </div>
        </div>
        <br />
        <FormInput
          value={drugValue.name}
          setValue={(e) => addDrugValue({ ...drugValue, name: e.target.value })}
          placeholder="Drug Name"
        />
        <FormInput
          value={drugValue.weight}
          setValue={(e) =>
            addDrugValue({ ...drugValue, weight: e.target.value })
          }
          placeholder="weight"
        />
        <select
          onChange={(e) =>
            addDrugValue({ ...drugValue, vendor: e.target.value })
          }
          value={drugValue.vendor}
          placeholder="Vendor"
          className="inputField"
        >
           <option value="">Select Vendor</option>
          {vendors.map((e) => 
            <option key={e.name} value={e.name}>
              {e.name}
            </option>
          )}
        </select>
        <br /> <br />
        <FormInput
          value={drugValue.price}
          setValue={(e) =>
            addDrugValue({ ...drugValue, price: e.target.value })
          }
          placeholder="price"
        />
        <FormInput
          value={drugValue.quantity}
          type="number"
          setValue={(e) =>
            addDrugValue({ ...drugValue, quantity: e.target.value })
          }
          placeholder="Quentity"
        />
        <button
          className="btnn"
          onClick={handelValue ? addDrugHandel : editDrugHandel}
        >
          {handelValue ? "Add" : "Edit"} Vendor
        </button>
      </Modal>
    </div>
  );
}

export default Drugs;
