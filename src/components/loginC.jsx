import React, { useState } from "react";
import "../styles/loginStyle.css";

export function LoginC() {

  const [ formValues, setFormValues]= useState({
    nombre_usuario: '',
    password:'',
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    console.log(name,value)

    setFormValues({...formValues, [name]:value})
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(formValues)
  }

 

  return (
    <div className="container">
      <div className="frame">
        <div ng-app ng-init="checked = false">
          <form className="form-signin" method="post" name="form">
            
            <label for="nombre_usuario">Nombre de usuario</label>
            <input className="form-styling" type="text" name="nombre_usuario" value={formValues.name} onChange={handleChange} placeholder=""/>

            <label for="password">Password</label>
            <input className="form-styling" type="password" name="password" value={formValues.name} onChange={handleChange} placeholder=""/>
            

            <div className="btn-animate">
              <input type="submit" className="btn-signin" value="Sign in" />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
