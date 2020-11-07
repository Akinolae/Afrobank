import React from 'react';
import SignUp from "./components/signUp"
import { Provider} from "react-redux"
// import store from "./components/appstore/store"

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
     <SignUp />
    </div>
    // </Provider>
  );
}

export default App;
