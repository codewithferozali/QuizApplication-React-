import { useState } from "react";
import {Java,Sql,Html} from "./Subject"
import "./styles.css"
function App() {

  const [pag,setPag]=useState(1)
  function changepag(pagnum){
    setPag(pagnum)

  }
  return (
   <div>
<button onClick={()=>changepag(1)} className={pag===1?"activeButton":""}>JAVA</button>
<button onClick={()=>changepag(2)}className={pag===2?"activeButton":""}>SQL</button>
<button onClick={()=>changepag(3)}className={pag===3?"activeButton":""}>HTML</button>


{pag===1 && <Java />}
{pag===2  && <Sql />}
{pag===3 &&  <Html />}
   </div>
  );
}

export default App;
