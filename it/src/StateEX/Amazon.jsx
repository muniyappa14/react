import React from "react";
class Amazon extends React.Component{
    state ={
    product_name:"iphone",
    price:45000,
    Image:"https://img1.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg",
    qty:1
      
    }
    render(){
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <img src={this.state.Image}></img>
                                <h1>$45000</h1>
                                <h4>model:iphone 14 pro max</h4>
                                <button className="btn btn-danger">add cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Amazon