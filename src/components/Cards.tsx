import './../styles/Cards.css'
import cardFront from './../assets/bg-card-front.png'
import cardFrontLogo from './../assets/card-logo.svg'
import cardBack from './../assets/bg-card-back.png'

interface CardsProps {
  formData: {
    name:string,
    card_number:string,
    month:string,
    year:string,
    cvc:string
  }
}

export default function Cards(props:CardsProps) {

  const formData = props.formData

  return (
    <>
        <div className="card-front-container">
            <img src={cardFront} />
            <img className="card-logo" src={cardFrontLogo} />
            <p className="card-front-cardNumber">{formData.card_number ? formData.card_number : "0000 0000 0000 0000"}</p>
            <p className="card-front-name">{formData.name ? formData.name : "Jane Appleseed"}</p>
            <p className="card-front-month-year">{formData.month ? formData.month : "00"}/{formData.year ? formData.year : "00"}</p>
        </div>
        <div className="card-back-container">
            <img src={cardBack}/>
            <p className="card-back-cvc">{formData.cvc ? formData.cvc : "000"}</p>
        </div>
    </>
  )
}

