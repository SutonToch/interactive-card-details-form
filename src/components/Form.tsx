import './../styles/Form.css'

export default function Form() {

    return (
        <form>
            <div className="form-box">
                <label htmlFor={"name"}>Cardholder Name</label>
                <input placeholder={"e.g. Jane Appleseed"} id={"name"} name={"name"}/>
            </div>
            <div className="form-box">
                <label htmlFor={"card_number"}>Card Number</label>
                <input placeholder={"e.g. 1234 5678 9123 0000"} id={"card_number"} name={"card_number"}/>
            </div>
            <div className="form-box multi-input-line">
                <div className="form-box-date">
                    <label htmlFor={"month"}>Exp. Date (MM/YY)</label>
                    <input placeholder={"MM"} id={"month"} name={"month"}/>
                    <input placeholder={"YY"} name={"year"}/>
                </div>
                <div>
                    <label htmlFor={"cvc"}>CVC</label>
                    <input placeholder={"e.g. 123"} id={"cvc"} name={"cvc"}/>
                </div>
            </div>
            <input className="submit" type={"submit"} value="Confirm" />
        </form>
    )
  }
  
  