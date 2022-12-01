import React from "react";
class Product extends React.Component{
    state={
        name:"EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens ",
        price:31000,
        qty:1,
        image:"https://rukminim1.flixcart.com/image/416/416/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70"
        
    }
    incr=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decr=()=>{
        this.setState({qty:this.state.qty-1})
    }
    
    render(){
        return<div>
            <div className="container"></div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-4">
                    <table className="table table-hover table table-bordered">
            <thead  className="table-success">
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>image</th>
                        <th> total</th>
                    </tr>
            </thead>
                <tbody>
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.price}</td>
                        <td><i className="fa fa-minus-circle "onClick={this.decr}></i>{this.state.qty}<i className= "fa fa-plus-circle "onClick={this.incr}> </i></td>
                        <td><img src={this.state.image} height="45px"></img></td>
                        <td>{this.state.qty*this.state.price}</td>
                    </tr>


                </tbody>
            </table>
            </div>
            </div>

        </div>
    }
}
export default Product