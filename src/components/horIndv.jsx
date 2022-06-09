import React from "react";

export function BotonHora({ materia, hora, ntask, dtask, color,activo }) {
  // const [formValues, setFormValues] = useState({
  //   nombre_usuario: "",
  //   horario_x: "",
  // });

  
  const pulsar = () => {
    console.log('materia: ', materia, '  horario: ',hora,"  tareas:",ntask, dtask);
  }
  

  if(activo){
  return (
    <>
      <div className="">
        <div className={`accent-${color}-gradient`} onClick={pulsar}>
          <p>{hora}</p>
          <p>{materia}</p>
          <p>{ntask} tareas</p>
          <p>{dtask.join(", ")}</p>
        </div>
      </div>
    </>
  )
}else{
return(
  <>
      <div className="">
        <div className={`accent-${color}-gradient`} onClick={()=>{}}>
          
        </div>
      </div>
    </>
)}

;
}
