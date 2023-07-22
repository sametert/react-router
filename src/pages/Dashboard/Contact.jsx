import React from 'react'
import {Link} from 'react-router-dom'
import { Formik, useFormik } from 'formik';

function Contact() {
  const formik = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit:(values) => {
      console.log(values);
    }
  })


  return (
    <div>
      <h2>Contact</h2>
      <Link to='samet'>Samet Ertürk</Link>
      {/* <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
       {({ handleSubmit, handleChange }) => ( */}
          <form onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" placeholder="Jane" onChange={formik.handleChange('firstName')}/>
    
              <label htmFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" placeholder="Doe" onChange={formik.handleChange('lastName')}/>
    
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                onChange={formik.handleChange('email')}
              />
              <button type="submit">Submit</button>
          </form>
       
    
    </div>

    
  )
}

export default Contact