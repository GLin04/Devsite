import stock from './assets/stock.jpeg'

function Card(){
    return (
        <div className="card">
            <img className="card-image" src={stock} alt="card picture" />
            <h2 className="card-title">Card Title</h2>
            <p className="card-description">Card Description</p>
        </div>
    )
}

export default Card;