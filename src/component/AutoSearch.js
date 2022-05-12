import {  useState } from "react";
import Class from "../style/AutoSearch.module.css";


function AutoSearch({ data, placeholder, valueHandel }) {


  const [isShow, setShow] = useState(false);
  const [val, setVal] = useState([]);
  const [inputValue,setInputValue] = useState()



  const onFocusHandel = () => {
    setTimeout(() => {
      setShow((e) => (e = !e));
      setVal(data);
    }, 200);
  };

  const inputValueHander = (f) => {
    setInputValue(f.target.value)
    let searchValue = data.filter((e) => e.name.match(f.target.value));
    setVal(searchValue);
  };

  const selectSearch = (value) =>{
    valueHandel(value);
    // setInputValue('')
   
    
  }

//   useEffect(() => {
//     if (val.length === 0) {
//       setVal(data);
//     }
//   }, []);
  return (
    <div className={Class.searchArea}>
      <input
        placeholder={placeholder}
        onChange={inputValueHander}
        onFocus={() => onFocusHandel()}
        onBlur={() => onFocusHandel()}
        value={inputValue}
        className={Class.autoSearch}
      />
      {isShow && (
        <div className={Class.completeArea}>
          {val.map((value) => (
            <div
              key={value.name}
              
              className={Class.items}
            >
              <div>{value.name}</div>
              <div>{value.weight}</div>
              <div>{value.price}</div>
              <div>{value.vendor}</div>
              <div>
                <button onClick={() =>selectSearch(value)} className="btnn">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
       
    </div>
  );
}

export default AutoSearch;
