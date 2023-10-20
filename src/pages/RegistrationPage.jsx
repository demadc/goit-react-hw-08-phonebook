import React from "react";
import{signUp} from 'redux/auth/operations';
import{toast} from 'react-toastify';


const RegistrationPage = () => {
    const handleSubmit=()=>{
        e.preventDefault()
        const newUser = {
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
       const data = signUp(newUser)
       .then(()=> toast.success())
       .catch((error)=>toast.error(error.response.data.message[0]))
       console.log(data);
    }
    return(
        <div>


        </div>
    )
}

