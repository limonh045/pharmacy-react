import { useState } from "react";
import Modal from "../component/Modal";
import FormInput from "../component/FormInput";
import {useDispatch, useSelector} from 'react-redux'
import {deleteVender,editVendor,addVendors} from '../app/Vendor'
function Vendors() {

  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedvendor, setSelectedVendor] = useState(null);
  const [addVendor, setAddVendor] = useState(false);
  const [vendorValue, addVendorValue] = useState({ name: "", descrip: "" });
  const [handelValue, setHandelValue] = useState(false);


  const vendor = useSelector(state=>state.vendor.value)
  const dispatch = useDispatch()

  const deleteConfirmHandelar = () => {
    setDeleteModal((e) => (e = !e));
    dispatch(deleteVender(selectedvendor))
  };

  const addVendorHandel = () => {
    setAddVendor((e) => (e = !e));
    dispatch(addVendors(vendorValue))
    addVendorValue({ name: "", descrip: "" });
  };
  const editModalVendorHandel = (item) => {
    setAddVendor((e) => (e = !e));
    setSelectedVendor(item);
    setHandelValue(false);
    addVendorValue(item);
  };
  const editVendorHandel = () => {
    dispatch(editVendor({selectedvendor,vendorValue}))
    setAddVendor((e) => (e = !e));
    addVendorValue({ name: "", descrip: "" });
  };

  return (
    <div style={{ padding: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>All Vendor</h1>
        <button
          className="btnn"
          onClick={() => {
            setAddVendor((e) => (e = !e));
            setHandelValue(true);
          }}
        >
          Add Vendor
        </button>
      </div>

      <div className="table-section">
        <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Vendor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vendor.map((ven) => (
              <tr key={ven.name}>
                <td>{ven.name}</td>
                <td>{ven.descrip}</td>
                <td>
                  <img
                    className="delete-icon"
                    onClick={() => {
                      setDeleteModal((e) => (e = !e));
                      setSelectedVendor(ven);
                    }}
                    alt='Delete icon'
                    src="icon/delete.png"
                  />
                  <img
                    onClick={() => editModalVendorHandel(ven)}
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
      {/* Add Vendor Modal */}
      <Modal
        value={addVendor}
        modalHandelar={() => setAddVendor((e) => (e = !e))}
        title={`${handelValue ? "Add" : "Edit"} Vendor`}
      >
        <FormInput
          value={vendorValue.name}
          setValue={(e) =>
            addVendorValue({ ...vendorValue, name: e.target.value })
          }
          placeholder="name"
        />
        <FormInput
          value={vendorValue.descrip}
          setValue={(e) =>
            addVendorValue({ ...vendorValue, descrip: e.target.value })
          }
          placeholder="Description"
        />
        <button
          className="btnn"
          onClick={handelValue ? addVendorHandel : editVendorHandel}
        >
          {handelValue ? "Add" : "Edit"} Vendor
        </button>
      </Modal>
      {/* Edit Modal */}
    </div>
  );
}

export default Vendors;
