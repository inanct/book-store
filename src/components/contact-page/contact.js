import { useFormik } from 'formik'
import React from 'react'
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import * as Yup from "yup";


const Contact = () => {
  const formik = useFormik({
    initialValues:{
      firstName: "",
      lastName:"",
      email:"",
      password:"",
      id:""
    },
    validationSchema: Yup.object ({
       firstName:Yup.string().min(2, "En az 2 karakter olmalidir").required("Isim kismi bos birakilamaz"),
      lastName:Yup.string().min(2, "En az 2 karakter olmalidir").required("Soyisim kismi bos birakilamaz"),
      email:Yup.string().email("Gecerli bir email giriniz").required("Mail kismi bos birakilamaz"),
      password:Yup.string().min(6, "Sifre en az 6 karakter olmalidir").max(15, "Sifre en fazla 15 karakter olamalidir").required("Sifre kismi bos birakilamaz")
    }),

    onSubmit: (values) => {
      console.log(values)
    }

  })
  return (
    <Container>
        <Form noValidate onSubmit={formik.handleSubmit}>
            <FormGroup onSubmit={formik.handleSubmit}>
                <FormLabel>First Name</FormLabel>
                <FormControl type='text' placeholder='Entry firtsname'
                {...formik.getFieldProps("firstName")}

                />
       {formik.errors.firstName && formik.touched.firstName && <p className='text-danger'> {formik.errors.firstName} </p>}
            </FormGroup>

             <FormGroup onSubmit={formik.handleSubmit}>
                <FormLabel>Last Name</FormLabel>
                <FormControl type='text' placeholder='Entry lastsname'
                {...formik.getFieldProps("lastName")}
                />
     {formik.errors.lastName && formik.touched.lastName && <p className='text-danger'> {formik.errors.lastName} </p>}
            </FormGroup>

             <FormGroup onSubmit={formik.handleSubmit}>
                <FormLabel>Email</FormLabel>
                <FormControl type='email' placeholder='Email'
                {...formik.getFieldProps("email")}

                />
      {formik.errors.email && formik.touched.email && <p className='text-danger'> {formik.errors.email} </p>}
            </FormGroup>

            
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password &&  <p className='text-danger'> {formik.errors.password} </p>}
      </Form.Group>
      
      <Button variant="primary" className='w-100 mt-5 mb-5' type="submit">
        Send
      </Button>
        </Form>
    </Container>
  )
}

export default Contact