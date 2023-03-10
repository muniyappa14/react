
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Product = () => {
   let [product,updateproduct]=useState([])
    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products').then((resp)=>{
            updateproduct(resp.data)
        }).catch((err)=>{})
    },[])
  return <>
  <pre>{JSON.stringify(product)}</pre>
  <nav className='navbar bg-dark navbar-expand-large text-white'>flipkart.com</nav>
  <div className="container">
    <div className="row">
        
        {product.map((item)=>{
            return<>
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                    <img src={item.image} height="100px"/>
                    </div>
                    <div className="card-body bg-info">
                        {item.id}
                        {item.product}
                        {item.price}
                        
                    </div>
                </div>
            </div>
            </>
        })}
    </div>
  </div>
</>
    }

export default Product
