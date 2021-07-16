import React from "react";
import '../header.css';

function Buttoncom(pros) {
  return (
    <nav>
          
          <button class="Button-div" onClick = {() => pros.setActive("clang")}> clang </button>
          
          <button onClick = {() => pros.setActive("c++lang")}> c++lang </button>
          <button onClick = {() => pros.setActive("javalang")}> javalang </button>
          <button onClick = {() => pros.setActive("pythonlang")}> pythonlang </button>
          
        
      </nav>
  );
}

export default Buttoncom;
