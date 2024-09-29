import React, { useState } from "react";
import style from "../css/EnterCity.module.css";

function EnterCity(prop) {
  const [city, setCity] = useState("");

  return (
    <div className={style.main_container}>
      <input className={style.input_city} 
      placeholder="Enter your city..." 
      value={city||""}
      onChange={(e)=>{
        setCity(e.target.value)       
      }}

      onKeyDown={(e)=>{
        if(e.key=='Enter'){
            prop.fetchCity(city)
            setCity('')
        }
      }}
      />

      <button className={style.search_btn}
      
      onClick={()=>{
        prop.fetchCity(city)
        setCity('')
      }}
      >Search</button>
    </div>
  );
}

export default EnterCity;
