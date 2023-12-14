import { useState } from 'react';
import Cards from './Cards.tsx'
import './../styles/Form.css'

export default function Form() {
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    
    return (
        <>
            <form>
                <div className="form-box">
                    <label htmlFor={"name"}>Cardholder Name</label>
                    <input
                        placeholder={"e.g. Jane Appleseed"}
                        value={name}
                        id={"name"} 
                        name={"name"}
                        onChange={(e) => setName(e.target.value)}
                    />
                        
                </div>
                <div className="form-box">
                    <label htmlFor={"card_number"}>Card Number</label>
                    <input 
                        placeholder={"e.g. 1234 5678 9123 0000"}
                        value={cardNumber}
                        id={"card_number"} 
                        name={"card_number"}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div className="form-box multi-input-line">
                    <div className="form-box-date">
                        <label htmlFor={"month"}>Exp. Date (MM/YY)</label>
                        <input 
                            placeholder={"MM"}
                            value={month} 
                            id={"month"} 
                            name={"month"}
                            onChange={(e) => setMonth(e.target.value)}
                        />
                        <input
                            placeholder={"YY"}
                            value={year}
                            name={"year"}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor={"cvc"}>CVC</label>
                        <input 
                            placeholder={"e.g. 123"} 
                            value={cvc}
                            id={"cvc"} 
                            name={"cvc"}
                            onChange={(e) => setCvc(e.target.value)}
                        />
                    </div>
                </div>
                <input className="submit" type={"submit"} value="Confirm" />
            </form>
            <Cards
                name={name}
                cardNumber={cardNumber}
                month={month}
                year={year}
                cvc={cvc}
            />
        </>
    )
  }
  
  