import React, {useEffect, useState} from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import LoginCheck from './LoginCheck.jsx'
import Posts from './Posts.jsx'
import Button from './ButtonMessage.jsx'


function App() {

  const [backendData, setBackendData] = useState([{}])

  const posts = [ 
    {id:1, name:"post1", title:"posting 1", content:"this is a poster post of one"}, 
    {id:2, name:"post2", title:"posting 2", content:"this is a poster post of tows"}, 
    {id:3, name:"post3", title:"posting 3", content:"this is a poster post of tree"}, 
    {id:4, name:"post4", title:"posting 4", content:"this is a poster post of fory"}, 
    {id:5, name:"post5", title:"posting 5", content:"this is a poster post of five"}];

  const megaposts = [ 
    {id:1, name:"megaposmegat1", title:"posting mega 1", content:"this is a mega poster post of mega one"}, 
    {id:2, name:"megaposmegat2", title:"posting mega 2", content:"this is a mega poster post of mega tows"}, 
    {id:5, name:"megaposmegat 3", title:"posting mega 3", content:"this is a mega poster post of mega tree"}];

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])

  return (

      <>
        <div>
          {(typeof backendData.users === 'undefined') ? (
            <p>Loading...</p>
          ): (
            backendData.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))
          )}
        </div>
        <Header/>
        <Button name="supserman" />
        <LoginCheck isLoggedIn={true} />
        <Card number={1} title="Cards" description="hello my name is card title"/>
        <Posts items={posts}/>
        <Posts items={megaposts}/>
        <Card></Card>
        <Footer/>
      </>
  )
}

export default App