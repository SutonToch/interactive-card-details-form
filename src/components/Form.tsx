import { FormEvent, useState } from 'react';
import Cards from './Cards.tsx'
import FormComplete from './FormComplete.tsx';
import './../styles/Form.css'

export default function Form() {
    const namePattern = "^[A-Za-z]+\\s+[A-Za-z\\s]+$"
    const cardNumberPattern = "^[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}\\s[0-9]{4}$"
    const monthPattern = "^01|02|03|04|05|06|07|08|09|10|11|12$"
    const yearPattern = "^[2-9][0-9]$"
    const cvcPattern = "^[0-9][0-9][0-9]$"

    const [form, setForm] = useState({
        name: "",
        card_number: "",
        month: "",
        year: "",
        cvc: ""
    })

    const [invalidMsgs, setInvalidMsgs] = useState({
        hide: {
            name: true,
            card_number: true,
            month: true,
            year: true,
            cvc: true
        },
        msg: {
            name: "",
            card_number: "",
            month: "",
            year: "",
            cvc: ""
        }
    })

    const [formComplete, setFormComplete] = useState(false)

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

        let invalidMsg:string
        if(value == "") {
            invalidMsg = "Can't be blank"
        } else if(name != "name" && value.match("[A-Za-z]+")) {
            invalidMsg = "Wrong format, numbers only"
        } else {
            invalidMsg = "Wrong format"
        }

        if(!value.match(pattern)) {
            target.classList.add("invalid")
            setInvalidMsgs((prevState) => {
                return(
                    {
                        "hide": {
                            ...prevState.hide,
                            [name]: false
                        },
                        "msg": {
                            ...prevState.msg,
                            [name]: invalidMsg
                        }
                    }
                )
            })
        } else {
            target.classList.remove("invalid")
            setInvalidMsgs((prevState) => {
                return(
                    {
                        "hide": {
                            ...prevState.hide,
                            [name]: true
                        },
                        "msg": {
                            ...prevState.msg,
                            [name]: ""
                        }
                    }
                )
            })
        }
    }

    function handleSubmit(e:FormEvent) {
        e.preventDefault();

        if(!form.name.match(namePattern) ||
            !form.card_number.match(cardNumberPattern) ||
            !form.month.match(monthPattern) ||
            !form.year.match(yearPattern) ||
            !form.cvc.match(cvcPattern)
        ) {
            return;
        }

        setFormComplete(true)
    }
    
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className={formComplete ? "hide":""}>
                <div className="form-box">
                    <label htmlFor={"name"}>Cardholder Name</label>
                    <input
                        placeholder={"e.g. Jane Appleseed"}
                        value={form.name}
                        id={"name"} 
                        name={"name"}
                        pattern={namePattern}
                        required
                        onChange={(e) => updateForm(e.target)}
                    />
                    <p className={invalidMsgs.hide.name ? "invalid-msg hide":"invalid-msg"}>{invalidMsgs.msg.name}</p>
                </div>
                <div className="form-box">
                    <label htmlFor={"card_number"}>Card Number</label>
                    <input 
                        placeholder={"e.g. 1234 5678 9123 0000"}
                        value={form.card_number}
                        id={"card_number"} 
                        name={"card_number"}
                        pattern={cardNumberPattern}
                        required
                        onChange={(e) => updateForm(e.target)}
                    />
                    <p className={invalidMsgs.hide.card_number ? "invalid-msg hide":"invalid-msg"}>{invalidMsgs.msg.card_number}</p>
                </div>
                <div className="form-box multi-input-line">
                    <div className="form-box-date">
                        <label htmlFor={"month"}>Exp. Date (MM/YY)</label>
                        <input 
                            placeholder={"MM"}
                            value={form.month} 
                            id={"month"} 
                            name={"month"}
                            pattern={monthPattern}
                            required
                            onChange={(e) => updateForm(e.target)}
                        />
                        <input
                            placeholder={"YY"}
                            value={form.year}
                            id={"year"}
                            name={"year"}
                            pattern={yearPattern}
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
                            pattern={cvcPattern}
                            required
                            onChange={(e) => updateForm(e.target)}
                        />
                    </div>
                    <p className={!invalidMsgs.hide.month || !invalidMsgs.hide.year ? "invalid-msg":"invalid-msg hide"}>{invalidMsgs.msg.month == "" ? invalidMsgs.msg.year : invalidMsgs.msg.month}</p>
                    <p className={invalidMsgs.hide.cvc ? "invalid-msg hide":"invalid-msg"} style={{gridColumn: 2}}>{invalidMsgs.msg.cvc}</p>
                </div>
                <input className="submit" type={"submit"} value="Confirm" />
            </form>
            <Cards
                formData={form}
            />
            {formComplete && <FormComplete />}
        </>
    )
  }
  
  