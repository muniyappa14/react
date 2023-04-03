import React from 'react'

const Two = () => {
    let users=[
       {id:1,name:"muni"} ,
       {id:2,name:"chiru"} ,
       {id:3,name:"darshu"} ,
        {id:4,name:"manjuu"} 
        ]
  return (
    <div>
     {
        users.map((ele)=>{
            //return <li>{ele.id}</li>
            return<li
             key={ele.id}>{ele.name}</li>
            //key:is used for to maintain unique value of the object
            
        })
     }
    </div>
  )
}

export default Two
