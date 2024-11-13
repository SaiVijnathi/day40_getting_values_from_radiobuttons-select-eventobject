import React, { useRef } from 'react'

function SignupForm() {
    let msgLabelRef= useRef();
    let stateSelectRef = useRef();
    let fnInputRef = useRef();
    let lnInputRef = useRef();
    let maleRbRef = useRef();
    let femaleRbRef = useRef();
    let selectedGender;
    let salutation;
    let maritalStatus;
    

    let onCreateAccount = ()=>{
        if(selectedGender == "Male"){
            salutation="Mr";
        }
        else{
            if(maritalStatus == "Married"){
                salutation = "Mrs"
            }
            else{
                salutation = "Ms";
            }
        }
        msgLabelRef.current.innerHTML = `${salutation}. ${fnInputRef.current.value} ${lnInputRef.current.value} from ${stateSelectRef.current.value}, your account has been created.`;
    }

  return (
    <div>
    <h1>Signup Form</h1>
    <form>
        <div>
            <label>First Name</label>
            <input ref={fnInputRef}></input>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lnInputRef}></input>
        </div>
        <div>
            <label>Gender</label>
            <input type="radio" name='gender' ref={maleRbRef} onChange={()=>{
                if(maleRbRef.current.checked == true){
                    selectedGender="Male";
                }
            }}></input>
            <label>Male</label>
            <input type="radio" name='gender' ref={femaleRbRef} onChange={()=>{
                if(femaleRbRef.current.checked == true){
                    selectedGender="Female";
                }
            }}></input>
            <label>Female</label>
        </div>

        <div>
            <label>Marital Status</label>
            <input type="radio" name="marraige" onChange={(eo)=>{
                console.log(eo);
                if(eo.target.checked == true){
                    maritalStatus="Married";
                }
            }}></input>
            <label>Married</label>

            <input type="radio" name="marraige" onChange={(e)=>{
                if(e.target.checked == true){
                    maritalStatus = "Unmarried";
                }
            }}></input>
            <label>Unmarried</label>
        </div>

        <div>
            <label>Age</label>
            <input></input>
        </div>
        <div>
            <label>Email</label>
            <input type="email"></input>
        </div>
        <div>
            <label>Password</label>
            <input type="password"></input>
        </div>
        <div>
            <label>State</label>
            <select ref={stateSelectRef}>
                <option>Select State</option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
                <option>Karnataka</option>
                <option>Tamilnadu</option>
                <option>Kerala</option>
                <option>MadhyaPradesh</option>
            </select>
        </div>

        <div>
            <button type='button' onClick={()=>{
                onCreateAccount();
            }}>Signup</button>
        </div>

        <label id="msg" ref={msgLabelRef}></label>
    </form>
    </div>
  )
}

export default SignupForm;