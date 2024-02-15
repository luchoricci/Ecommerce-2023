import "./styles.css";
import { useState } from "react";
import Input from "../../components/input";
import { useForm } from "../../hooks/useForm";


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
  const[formState, inputHandler, clearInputs, inputFocus, inputBlur] = useForm(initialState)

  const onChange = (event) => {
    const {name,value} = event.target 
    inputHandler({name, value})
  };
  const onFocus = ({name}) => {
inputFocus({name})
  };
  const onBlur = ({name}) => {
   inputBlur({name})
  };

 const onSubmit =(event) => {
  event.preventDefault()

 }

  return (
    <div className="checkOutContainer">
      <h1 className="checkOutTitle">CheckOut</h1>
      <form onSubmit ={onSubmit} className="checkoutForm">
        <div className="checkOutFormContainer">
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeholder="name"
              type="text"
              id="name"
              name="name"
              required={true}
              label="name"
              onChange={onChange}
              onFocus={() => onFocus({name: 'name'}) }
              onBlur={() => onBlur({name: 'name'}) }
              active={formState.name.active}
              error={formState.name.error}
              hasError={formState.name.hasError}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeholder="surname"
              type="text"
              id="surname"
              name="surname"
              required={true}
              label="surname"
              onChange={onChange}
              onFocus={() => onFocus({name: 'surname'}) }
              onBlur={() => onBlur({name: 'surname'}) }
              active={formState.surname.active}
              error={formState.surname.error}
              hasError={formState.surname.hasError}
            />
          </div>
          
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeholder="document"
              type="text"
              id="document"
              name="document"
              required={true}
              label="document"
              onChange={onChange}
              onFocus={() => onFocus({name: 'document'}) }
              onBlur={() => onBlur({name: 'document'}) }
              active={formState.document.active}
              error={formState.document.error}
              hasError={formState.document.hasError}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeholder="email"
              type="text"
              id="email"
              name="email"
              required={true}
              label="email"
              onChange={onChange}
              onFocus={() => onFocus({name: 'email'}) }
              onBlur={() => onBlur({name: 'email'}) }
              active={formState.email.active}
              error={formState.email.error}
              hasError={formState.email.hasError}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeholder="phone"
              type="text"
              id="phone"
              name="phone"
              required={true}
              label="phone"
              onChange={onChange}
              onFocus={() => onFocus({name: 'phone'}) }
              onBlur={() => onBlur({name: 'phone'}) }
              active={formState.phone.active}
              error={formState.phone.error}
              hasError={formState.phone.hasError}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
             className="checkOutFormInput"
              placeholder="address"
              type="text"
              id="address"
              name="address"
              required={true}
              label="address"
              onChange={onChange}
              onFocus={() => onFocus({name: 'address'}) }
              onBlur={() => onBlur({name: 'address'}) }
              active={formState.address.active}
              error={formState.address.error}
              hasError={formState.address.hasError}
            />
          </div>
          <div className="checkOutFormInputGroup">
            <Input
              className="checkOutFormInput"
              placeholder="postalCode"
              type="text"
              id="postalCode"
              name="postalCode"
              required={true}
              label="postalCode"
              onChange={onChange}
              onFocus={() => onFocus({name: 'postalCode'}) }
              onBlur={() => onBlur({name: 'postalCode'}) }
              active={formState.postalCode.active}
              error={formState.postalCode.error}
              hasError={formState.postalCode.hasError}
            />
          </div>
          
        </div>
        <button disabled={!formState.isFormValid} type="submit"  className="cartButtonCheckout">Checkout</button>
      </form>


    </div>
  );
}

export default Checkout;
