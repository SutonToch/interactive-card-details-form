import './../styles/formComplete.css'
import formCompleteIcon from './../assets/icon-complete.svg'


export default function FormComplete() {

  return (
    <div className="form-complete-container">
        <div>
            <img src={formCompleteIcon} />
        </div>
        <h2>Thank you!</h2>
        <p>We've added your card details</p>
        <button onClick={() => {alert("Website continues from here on out")}}>Continue</button>
    </div>
  )
}

