import "./styles.css";
import { useState } from "react";
import Input from "../../components/input";
import { useFormAction } from "react-router-dom";


const initialState = {
  name : { value: '', error: '', hasError: true, active: false, name: 'name' },
  surname : { value: '', error: '', hasError: true, active: false, name: 'surname' },
  document : { value: '', error: '', hasError: true, active: false, name: 'document' },
  email : { value: '', error: '', hasError: true, active: false, name: 'email' },
  phone : { value: '', error: '', hasError: true, active: false, name: 'phone' },
  address : { value: '', error: '', hasError: true, active: false, name: 'address' },
  postalCode : { value: '', error: '', hasError: true, active: false, name: 'postalCode' },
  isFormValid: false,
}



function Checkout() {
  // const = useForm(initialState)
  const [active, setActive] = useState(false);
  const onChange = () => {};
  const onFocus = () => {
    setActive(true);
  };
  const onBlur = () => {
    setActive(false);
  };

  return (
    <div className="checkOutContainer">
      <h1 className="checkOutTitle">CheckOut</h1>
      <form className="checkoutForm">
        <div className="checkOutFormContainer">
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeHolder="name"
              type="text"
              id="name"
              name="name"
              required={true}
              label="name"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              active={active}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeHolder="surname"
              type="text"
              id="surname"
              name="surname"
              required={true}
              label="surname"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              active={active}
            />
          </div>
          
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeHolder="document"
              type="text"
              id="document"
              name="document"
              required={true}
              label="document"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              active={active}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeHolder="email"
              type="text"
              id="email"
              name="email"
              required={true}
              label="email"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              active={active}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeHolder="phone"
              type="text"
              id="phone"
              name="phone"
              required={true}
              label="phone"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              active={active}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeHolder="adress"
              type="text"
              id="adress"
              name="adress"
              required={true}
              label="adress"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              active={active}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
              className="checkOutFormInput"
              placeHolder="postalcode"
              type="text"
              id="postalcode"
              name="postalcode"
              required={true}
              label="postalcode"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              active={active}
            />
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default Checkout;
