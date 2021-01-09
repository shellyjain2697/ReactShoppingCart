import React from 'react';

function Main(props) {
   const {products}=props;
  return (
    <main className="block col-2">
      <div className="row">
      <div class="container mb-4">
<div class="row">
<div class="col-12">
<div class="table-responsive">
    <table class="table table-striped">
            <tr>
                <td><img src={products.products[0].img_url} /> </td>
                <td>
                    {products.products[0].item}
                <span>X</span> 
                </td> 
                <td>
                  <span >-</span>
                  <input ></input>
                  <span value="2" >+</span>
                </td> 
                <td>
                  {products.price}
                </td>
              
            </tr>
    </table>
</div>
</div>
</div>
</div>
    
      </div>
    </main>
  );
}
export default Main;