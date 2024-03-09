import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import LoginCheck from './LoginCheck.jsx'


function App() {

    return(
        <>
            <Header/>
            <LoginCheck isLoggedIn={true} />
            <Card number={1} title="Cards" description="hello my name is card title"/>
            <Card></Card>
            <Footer/>
        </>
    )
}

export default App
