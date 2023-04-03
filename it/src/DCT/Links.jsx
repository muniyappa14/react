import React from 'react'
//how to display the links in list form

const Links = () => {
    let links=[
        {id:1,name:"facebook",url:"https://www.facebook.com/"},
         {id:2,name:"whatsapp",url:"https://faq.whatsapp.com/iphone/23559013/"}, 
        {id:3,name:"insta",url:"https://www.instagram.com/accounts/login/"}
        
    ]
  return (
    <div>
        {links.map((ele)=>{
            return <li key={ele.id}><a href='links.url' target='_blank'></a></li>
        })}
      
    </div>
  )
}

export default Links
