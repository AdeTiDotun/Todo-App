import React from "react"
import "../src/styles/styles.css"
import { Header } from "./Components/Header/header"
import Body from "./Components/Body/body"



function App() {
  return (
    <div>
      <div className="todo-div">
      <Header />
      <Body />
      </div>
     

    </div>
  )
};

export default App;
