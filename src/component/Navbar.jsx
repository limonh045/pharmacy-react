import Class from "../style/Navbar.module.css";
import AutoSearch from "./AutoSearch";
import { useSelector,useDispatch } from "react-redux";
import Modal from "../component/Modal";
import {  useState } from "react";
import {cartAddItem} from '../app/CartSlice'

function Navbar() {
  const drugs = useSelector(state=>state.drugs.value)
  const dispatch = useDispatch()

  const [isModal,setModal] = useState(false)
  const [item,setItem] = useState({})
  const [quantity,setQuantity] = useState(1)

  const searchItem = (item) => {
    setItem(item)
    setModal((e) => (e = !e))
  };
  const quantityPrice =(e)=>{
    if (e.target.value > 0 && item.quantity >= e.target.value) {
      setQuantity(e.target.value)
    }
  }
  const buyConfirmHandle =()=>{
    setModal((e) => (e = !e))
    dispatch(cartAddItem({item,quantity}))
  }
 

  return (
    <div className={Class.navbar}>
      <AutoSearch
        placeholder="Search & buy "
        valueHandel={searchItem}
        data={drugs}
      />

      <Modal
        value={isModal}
        modalHandelar={() => setModal((e) => (e = !e))}
        title={`Buy ${item.name}`}
      >
        <table>
          <tfoot>
          <tr>
            <th>Name</th>
            <td>{item.name}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{item.type}</td>
          </tr>
          <tr>
            <th>Vendor</th>
            <td>{item.vendor}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{item.weight}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>{item.price} Tk</td>
          </tr>
          <tr>
            <th>Quantity</th>
            <td><input value={quantity} onChange={quantityPrice} type='number'/> 
            <div style={{fontSize:'10px',width: '10rem'}}>Only {item.quantity} item available</div>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{item.price * quantity} Tk</td>
          </tr>
          </tfoot>
        </table>
        <button className="btnn" onClick={buyConfirmHandle}>Buy Confirm</button>

      </Modal>
    </div>
  );
}

export default Navbar;
