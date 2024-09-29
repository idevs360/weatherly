import { useState } from "react"
import EnterCity from "./components/EnterCity"
import WheatherCard from "./components/WheatherCard"

function App() {
const[city, setCity] = useState();

function fetchCity(prop) {
  if(prop!='')
    setCity(prop)
}


  return (
    <>
     <EnterCity fetchCity={fetchCity}/>
     <WheatherCard city={city}/>
     <div>
        <img src="src/assets/sun.png" alt="Sun Icon" />      
     </div>
    </>
  )
}

export default App
