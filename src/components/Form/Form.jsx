import React from 'react'
 const Form = () => {
    return (
        <div className="form__content">
            <form className="form__container">
                <div className="form__header">
                    Report Form
                </div>
                <div className="divider"></div>
                <div className="form__body">
                    <div className="form__item">
                        <label className="form__label">Call Type</label>
                        <select className="form__input">
                            <option>Lights & Siren</option>
                            <option>Non-Lights & Siren</option>
                            <option>Lights & Non-Siren</option>
                        </select>
                    </div>

                    <div className="form__item">
                        <label className="form__label">Address</label>
                        <input type="text" name="address" className="form__input"></input>
                    </div>

                    <div className="form__item">
                        <label className="form__label">Date of Call</label>
                        <input type="date" name="calldate" className="form__input"></input>
                    </div>

                    <div className="form__item">
                        <label className="form__label">Time</label>
                        <input type="time" name="time" className="form__input"></input>
                    </div>

                    <div className="form__item">
                        <label className="form__label">Ambulance Arrival Date</label>
                        <input type="date" name="arrivaldate" className="form__input"></input>
                    </div>

                    <div className="form__item">
                        <label className="form__label">Ambulance Arrival Time</label>
                        <input type="time" name="arrivaltime" className="form__input"></input>
                    </div>

                    <button type="submit" className="form__button">Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Form;
