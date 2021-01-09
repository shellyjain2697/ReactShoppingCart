import React, { Component } from 'react'

class Shop extends Component {
   
    render(props) {
        return (
            <div>
                 <div>

<div class="container mb-4">
<div class="row">
<div class="col-12">
<div class="table-responsive">
    <table class="table table-striped">
            <tr>
                <td><img src={this.props.img_url} alt="some image"/> </td>
                <td>
                    {this.props.item}
                <span>X</span> 
                </td> 
                <td>
                  <span onClick={this.props.decvalue} >-</span>
                  
                  <input   Value={(this.props.quantity)} > </input>
                
                  <span  onClick={this.props.changeValue} Value={(this.props.quantity)}>+</span>
                 
                  
                </td> 
                <td>
                  {this.props.price}
                </td>
              
            </tr>
    </table>
</div>
</div>
</div>
</div>

</div>
            </div>
        )
    }
}
export default Shop;