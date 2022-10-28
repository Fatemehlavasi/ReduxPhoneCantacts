
import './App.css';
import {  RouterProvider} from "react-router-dom";
import router from './router/router';
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from "./redux/store"
function App() {

 
  return (
    <div>
      <Provider store={store}>
      <PersistGate  persistor={persistor} />
      <RouterProvider router={router} />
    
     
      </Provider>
      
    </div>
  );
}

export default App;
