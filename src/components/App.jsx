
import React, {useState} from "react";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import clang from "../clang";
import cpplang from "../cpplang";
import javalang from "../javalang";
import pythonlang from "../pythonlang";
import Footer from "./Footer";
import "../header.css";



function createEntry(emojiTerm) {
  return (
    
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
      Button_link={emojiTerm.Button_link}
    />
    
  );
}

function App() {

  const [active,setActive] = useState("clang");
  return (
    <div>
      <div>
      <Header></Header>
      </div>
      <div>
      <h1>
        <span>Keywordpedia</span>
      </h1>
      
     
      <nav class="nav-design ">
          
          <button class="Button-div clang" onClick = {() => setActive("clang")}> clang </button>
          
          <button class="Button-div cpplang" onClick = {() => setActive("c++lang")}> c++lang </button>
          <button class="Button-div javalang" onClick = {() => setActive("javalang")}> javalang </button>
          <button class="Button-div pythonlang" onClick = {() => setActive("pythonlang")}> pythonlang </button>
          
        
      </nav>
      <div>
      {active === "clang" && <h4><span>c lang has 32 keywords.</span></h4> }
      {active === "clang" && <dl className="dictionary">{clang.map(createEntry)}</dl>}
      {active === "javalang" && <h4><span>java lang has 48 keywords.</span></h4> }
      {active === "javalang" && <dl className="dictionary">{javalang.map(createEntry)}</dl>}
      {active === "pythonlang" && <h4><span>Python lang has 33 keywords.</span></h4> }
      {active === "pythonlang" && <dl className="dictionary">{pythonlang.map(createEntry)}</dl>}
      {active === "c++lang" && <h4><span>C++ and c lang has 32 keywords in common.</span></h4> }
      {active === "c++lang" && <dl className="dictionary">{cpplang.map(createEntry)}</dl>}
 
      {/* {active === "c++lang" && <dl className="dictionary">{cpplang.map(createEntry)}</dl>}
      {active === "javalang" && <dl className="dictionary">{javalang.map(createEntry)}</dl>}
      {active === "pythonlang" && <dl className="dictionary">{pythonlang.map(createEntry)}</dl>}
         */}

      </div>
     
    
      </div>
      <Footer></Footer>
      </div>
      
  );
}

export default App;
