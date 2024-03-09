import stock from './assets/stock.jpeg'
import PropTypes from 'prop-types'

function Card(content){
    return (
        <div className="card">
            <p className="card-number">{content.number}</p>
            <img className="card-image" src={stock} alt="card picture" />
            <h2 className="card-title">{content.title}</h2>
            <p className="card-description">{content.description}</p>
        </div>
    )
}


Card.prototype = {
    number: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string
}

Card.defaultProps = {
    number: 0,
    title: "Card Title",
    description: "Card Description"
}


export default Card;