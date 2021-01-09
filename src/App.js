
import Shop from './Shop.js';

import React, { Component } from 'react'
import Basket from './Basket';
import Main from './Main';
import data from './data';

function App(){
const {products}=data;
return (

<div className="App">
  
<div class="row">
<Main products={data.products[0].item}></Main>
<Basket></Basket>
  </div>




  </div>





)









}
export default App;