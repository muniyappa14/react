import React from 'react'

const One = () => {
  let fruits=["apple","mango","grapes","kiwi"]
      let result=[]

      //for loop
      for(let i=0;i<fruits.length;i++){
        result.push(<li>{fruits[i]}</li>)
      }


      //for each
      /*fruits.forEach((fruits)=>{
        result.push(<li>{fruits}</li>)
      })*/

      //map method
      fruits.map((ele)=>{
        result.push(<ul>{ele}</ul>)
      })
  return (
    <div>
      <p>{result}</p>
    </div>
  )
}

export default One
