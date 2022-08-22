import { useState } from "react";
function AdUser() {
    const [values, setValues] = useState({
        firstName:"",
        laststName:"",
        age: "",
        email:"",
        passwordOne:"",
        passwordTow:""
    });
    const [submitted,setSubmitted ]= useState(false)
    
    const chengeFirstname = (event) => {
        setValues({...values, firstName: event.target.value});
    }
   
    const chengeLastname = (event) => {
        setValues({...values,laststName: event.target.value})
    }
    
    const chengeuserAge = (event) => {
        setValues({...values,age:event.target.value})
    }
    
    const chengeemaile = (event) => {
        setValues({...values,email:event.target.value})
    }
   
    const firstPassword = (event) => {
        setValues({...values,passwordOne:event.target.value})
    }
    
    const secPassword = (event) => {
        setValues({...values,passwordTow:event.target.value})
    }
    const submitFormValid = (event)=>{
        if(values.passwordTow === values.password){
          event.preventDifault();
          setSubmitted(true)
        }
    }
    


    return (
        <div>
            <form onSubmit={submitFormValid}>
                <input value={values.firstName} type="text" placeholder="first-name" onChange={chengeFirstname} /><br></br>
                <input value={values.laststName} type="text" placeholder="last name" onChange={chengeLastname} /><br></br>
                <input value={values.age} type="age" placeholder="age" onChange={chengeuserAge} /><br></br>
                <input value={values.email} type="text" placeholder="email" onChange={chengeemaile} /><br></br>
                <input value={values.passwordOne} name="password" type="password" placeholder="password" onChange={firstPassword} /><br></br>
                <input value={values.passwordTow} name="password1" type="password" placeholder="password valid" onChange={secPassword} /><br></br>
                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <td>First-name</td>
                    <td>Last-name</td>
                    <td>Age</td>
                    <td>Email</td>
                    <td>password</td>
                    <td>valid-password</td>
                </thead>
                <tbody>
                    <tr>
                        <td>{values.firstName}</td>
                        <td>{values.laststName}</td >
                        <td>{values.age}</td>
                        <td>{values.email}</td >
                        <td>{values.passwordOne}</td >
                        <td>{values.passwordTow}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
export default AdUser