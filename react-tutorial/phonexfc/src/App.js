import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style';
import Header from './common/header/index';
import { GlobalIconFont } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
 render(){
  return (
   <>
   <GlobalIconFont />
   <GlobalStyle />
   <Provider store={store}>
   <Header />
    <BrowserRouter>
     <Route path='/' exact component={Home}></Route>
     <Route path='/detail' exact component={Detail}></Route>
    </BrowserRouter>
   </Provider>
   </>
  );
 }  
}

export default App;
