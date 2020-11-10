import React from 'react';
// import { Provider} from "react-redux"
// import store from "./appstore/store"
import MainApp from "./views/index";
import {Div} from "./constants/style"
import "./index.css";

function App() {
  return (
    <Div>
    <MainApp />
    </Div>
  );
}

export default App;
