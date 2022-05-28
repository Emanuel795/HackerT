import React, { useState } from "react";
import { sha256 } from "crypto-hash";
import "../styles/loginStyle.css";

export function Signup() {
  const [formValues, setFormValues] = useState({
    nombre_usuario: "",
    nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    correo: "",
    fecha_nacimiento: "",
    pais: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    console.log(name);
    if (
      name === "nombre_usuario" ||
      name === "confirmpassword" ||
      name === "correo" ||
      name === "password"
    ) {
      let vari = value;
      let result = await sha256(vari);
      setFormValues({ ...formValues, [name]: result });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="container">
      <div className="frame">

        <div >
          <form className="form-signin" onSubmit={ handleSubmit } name="form" method="POST">

            <label for="nombre_usuario">Nombre de usuario</label>
            <input
              className="form-styling"
              type="text"
              name="nombre_usuario"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="nombre">nombre</label>
            <input
              className="form-styling"
              type="text"
              name="nombre"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="primer_apellido">primer apellido</label>
            <input
              className="form-styling"
              type="text"
              name="primer_apellido"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="segundo_apellido">segundo apellido </label>
            <input
              className="form-styling"
              type="text"
              name="segundo_apellido"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="correo">Email</label>
            <input
              className="form-styling"
              type="email"
              name="correo"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="fecha_nacimiento">fecha de nacimento</label>
            <input
              className="form-styling"
              type="date"
              name="fecha_nacimiento"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="pais">pais</label>
            <input
              className="form-styling"
              type="text"
              name="pais"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="password">Password</label>
            <input
              className="form-styling"
              type="password"
              name="password"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <label for="confirmpassword">Confirm password</label>
            <input
              className="form-styling"
              type="password"
              name="confirmpassword"
              value={formValues.name}
              onChange={handleChange}
              placeholder=""
            />

            <div className="btn-animate">
              <input type="submit" className="btn-signin" value="Sign up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
