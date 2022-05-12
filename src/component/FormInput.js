import "../style/forminput.css";

export default function FormInput({
  value,
  setValue,
  placeholder,
  type,
  errors,
...rest
}) {
 

  return (
    <div>
      <input
        type={type}
       
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className='inputField'
        {...rest}
      />
      <p className="input-errors">{errors} </p>
    </div>
  );
}
