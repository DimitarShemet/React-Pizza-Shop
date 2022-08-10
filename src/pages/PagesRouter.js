import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page_Basket from './Page_Basket';
import App from '../App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import dataPizzaReducer from "./dataPizzaReducer";
import startBasketReducer from "./startBasketReducer"
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
let combinedReducer=combineReducers({
  // редьюсер dataBasketReducer отвечает за раздел state под именем dataPizza
  dataPizza: dataPizzaReducer, 
  startBasket:startBasketReducer,
  // + другие редьюсеры
});
let store=createStore(combinedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class PagesRouter extends React.Component {
          
  render() {

    return (
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/basket" element={<Page_Basket/>} />
        <Route path="/pizzas/1" element={<Page1/>} />
        <Route path="/pizzas/2" element={<Page2/>} />
        <Route path="/pizzas/3" element={<Page3/>} />
      </Routes>
      </Provider>
    );
    
  }

}
    
export default PagesRouter;
    