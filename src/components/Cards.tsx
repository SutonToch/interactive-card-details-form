import './../styles/Cards.css'
import cardFront from './../assets/bg-card-front.png'
import cardFrontLogo from './../assets/card-logo.svg'
import cardBack from './../assets/bg-card-back.png'

export default function Cards() {

  return (
    <>
        <div className="card-front-container">
            <img src={cardFront} />
            <img className="card-logo" src={cardFrontLogo} />
        </div>
        <div className="card-back-container">
            <img src={cardBack}/>
            <p className="card-back-cvc"></p>
        </div>
    </>
  )
}

