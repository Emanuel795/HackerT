import React, {useState} from "react";
import "../styles/timeTable.scss";
import { BotonHora } from "./horIndv";
import data from "./datoshorario";
// import JsonData from "./horarioData.json";

export function TimeTable1() {



  // const [tarea, setTarea] = useState();

  // useEffect(() => {
  //   console.log(data);
  // }, []);


  // const handleTask = () => {
  //   data =[...data,tarea];
  //   console.log(data)
  //   };  



  return (
    <>
      <div className="timetable">
      {/* <button onClick={() => { handleTask() }}>agregar</button> */}

        <div className="week-names">
          <div>monday</div>
          <div>tuesday</div>
          <div>wednesday</div>
          <div>thursday</div>
          <div>friday</div>
          <div className="weekend">saturday</div>
          <div className="weekend">sunday</div>
        </div>
        <div className="time-interval">
          <div>8:00 - 10:00</div>
          <div>10:00 - 12:00</div>
          <div>12:00 - 14:00</div>
          <div>14:00 - 16:00</div>
          <div>16:00 - 18:00</div>
          <div>18:00 - 20:00</div>
        </div>
        <div className="content">
          {data.map((hour) => (
            <BotonHora
              key={hour.id}
              materia={hour.materia}
              hora={hour.hora}
              ntask={hour.pendientesN}
              dtask={hour.pendientesD}
              color={hour.color}
              activo={hour.activo}
            />  
          ))}

          {/* weekend */}
        </div>
      </div>
    </>
  );
}
