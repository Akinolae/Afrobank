import React from 'react';
import { Provider} from "react-redux"
import store from "./appstore/store"
import MainApp from "./views/index";
import {Div} from "./constants/style"
import "./index.css";

function App() {
  return (
      <Provider store={store}>
          <Div>
          <MainApp />
          </Div>
      </Provider>
  );
}

export default App;
