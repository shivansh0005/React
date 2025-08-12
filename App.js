import React from "react";
import ReactDOM from "react-dom/client";

//HTML like syntax
//Jsx code is transpiled before it reaches the browser ->DONE by parcel using babel

  const heading=
  (<h1 className="head">Jsx heading</h1>)


  //React  functional Component
  //Class Based Component-->OLd way of writing components
  //Functional Component-> New way of writing components
const Title=()=>{
  return <h1>Titleee</h1>
}

const F=function(){
  return <h2>Heading 2</h2>
}
const HeadingComponent=()=>{
  return  (<div className="container">
    {heading  }
    {2+"2"} 
    <Title/>
    <F/>
    <h1 className="heading">Namaste react functional component </h1>
  </div>)
}
  const root =ReactDOM.createRoot(document.getElementById("root"));



root.render(<HeadingComponent/>);