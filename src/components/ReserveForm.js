import React from 'react'
import "../styles/Reservation.css"
import { useForm } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email("Email is not valid"),
  telephone: yup.number().required("Phone number is required"),
  guests: yup.number().min(1).required("Guest is required"),
  date: yup.string().required("Please select Booking Date and Time"),
})
function ReserveForm() {
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  console.log(errors)

  const formSubmit = (data) => {
    console.table(data)
    navigate("/thankyou");
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <fieldset>
                <div className="field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" placeholder="First Name" name="firstName" {...register("firstName")} />
                    <span className="error-message">{errors.firstName?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" placeholder="First Name" name="lastName" {...register("lastName")} />
                    <span className="error-message">{errors.lastName?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="text@email.com" name="email" {...register("email")}/>
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="telephone">Phone Number</label>
                    <input type="tel" placeholder="Phone Number" name="telephone" {...register("telephone")}/>
                    <span className="error-message">{errors.telephone?.message}</span>
                </div>

                <div className="field occasion">
                    <label htmlFor="occasion">Occasion (optional)</label>
                    <div className="options">
                        <select name="occasion" {...register("occasion")}>
                            <option value="select">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="field guest">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="2" name="guests" {...register("guests")}/>
                    <span className="error-message">{errors.guests?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="date">Choose Date & Time</label>
                    <input type="datetime-local" name="date" {...register("date")} />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <button className="reserve-btn" type="submit">Make Your reservation</button>
            </fieldset>
    </form>
  )
}

export default ReserveForm