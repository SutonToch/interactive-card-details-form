import './../styles/Cards.css'
import cardFront from './../assets/bg-card-front.png'
import cardFrontLogo from './../assets/card-logo.svg'
import cardBack from './../assets/bg-card-back.png'

interface CardsProps {
  name:string,
  cardNumber:string,
  month:string,
  year:string,
  cvc:string
}

export default function Cards(props:CardsProps) {

  return (
    <>
        <div className="card-front-container">
            <img src={cardFront} />
            <img className="card-logo" src={cardFrontLogo} />
            <p className="card-front-cardNumber">{props.cardNumber ? props.cardNumber : "0000 0000 0000 0000"}</p>
            <p className="card-front-name">{props.name ? props.name : "Jane Appleseed"}</p>
            <p className="card-front-month-year">{props.month ? props.month : "00"}/{props.year ? props.year : "00"}</p>
        </div>
        <div className="card-back-container">
            <img src={cardBack}/>
            <p className="card-back-cvc">{props.cvc ? props.cvc : "000"}</p>
        </div>
    </>
  )
}

