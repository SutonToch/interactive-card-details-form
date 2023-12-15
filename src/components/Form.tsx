import { useState } from 'react';
import Cards from './Cards.tsx'
import './../styles/Form.css'

export default function Form() {
    const [form, setForm] = useState({
        name: "",
        card_number: "",
        month: "",
        year: "",
        cvc: ""
    })

    function updateForm(target: HTMLInputElement) {
        const {name, value, pattern} = target;
        setForm((prevForm) => {
            return (
                {
                    ...prevForm,
                    [name]: value
                }
            )
        })

        if(!value.match(pattern)) {
            target.classList.add("invalid")
        } else {
            target.classList.remove("invalid")
        }
    }
    
    return (
        <>
            <form>
                <div className="form-box">
                    <label htmlFor={"name"}>Cardholder Name</label>
                    <input
                        placeholder={"e.g. Jane Appleseed"}
                        value={form.name}
                        id={"name"} 
                        name={"name"}
                        pattern={"^[A-Za-z]+\\s+[A-Za-z\\s]+$"}
                        required
                        onChange={(e) => updateForm(e.target)}
                    />     
                </div>
                <div className="form-box">
                    <label htmlFor={"card_number"}>Card Number</label>
                    <input 
                        placeholder={"e.g. 1234 5678 9123 0000"}
                        value={form.card_number}
                        id={"card_number"} 
                        name={"card_number"}
                        pattern={"^[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}$"}
                        required
                        onChange={(e) => updateForm(e.target)}
                    />
                </div>
                <div className="form-box multi-input-line">
                    <div className="form-box-date">
                        <label htmlFor={"month"}>Exp. Date (MM/YY)</label>
                        <input 
                            placeholder={"MM"}
                            value={form.month} 
                            id={"month"} 
                            name={"month"}
                            pattern={"^01|02|03|04|05|06|07|08|09|10|11|12$"}
                            required
                            onChange={(e) => updateForm(e.target)}
                        />
                        <input
                            placeholder={"YY"}
                            value={form.year}
                            name={"year"}
                            pattern={"^[2-9][0-9]$"}
                            required
                            onChange={(e) => updateForm(e.target)}
                        />
                    </div>
                    <div>
                        <label htmlFor={"cvc"}>CVC</label>
                        <input 
                            placeholder={"e.g. 123"} 
                            value={form.cvc}
                            id={"cvc"} 
                            name={"cvc"}
                            pattern={"^[0-9][0-9][0-9]$"}
                            required
                            onChange={(e) => updateForm(e.target)}
                        />
                    </div>
                </div>
                <input className="submit" type={"submit"} value="Confirm" />
            </form>
            <Cards
                formData={form}
            />
        </>
    )
  }
  
  