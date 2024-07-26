import React, { useContext, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { User, Users } from '../context/users'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const { register, handleSubmit, watch, reset, formState, formState: { errors} } = useForm({
        mode: 'onChange',
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate()
    const { user, setUser } = useContext(User)
    const { users } = useContext(Users);
    console.log(users)

    useEffect(() => {
        const subscription = watch(data => {
            // console.log(data)
        })
        return () => subscription.unsubscribe()
    }, [watch])

    useEffect(() => {
        if (formState.isSubmitSuccessful) reset()
    }, [reset, formState])

    const handleSubmitting = (data) => {
        setUser(data)
        toast.success("Login successful")
        navigate('/')
    }
    console.log(user)
    console.log(users)

    return (
        <div className=" w-100 overflow-none bg-dark d-flex justigy-content-center align-items-center flex-column" style={{ height: '100vh' }}>
            <Form className='w-50 bg-secondary shadow px-2 py-4 rounded  my-auto' >
                <Navbar.Brand className=' w-100 '><img className='mx-auto d-block' src="https://worldwise-lemon.vercel.app/logo.png" height={50} /></Navbar.Brand>
                <Form.Group controlId='email' >
                    <Form.Label className='text-light'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='main@example.com'
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            validate: (value) => users.some(user => user.email === value) ? true : "Incorrect Email"
                        })}
                        className={errors.email ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback type='invalid' className='text-warning fs-6'>{errors.email?.message}</Form.Control.Feedback>
                </Form.Group >
                <Form.Group controlId='password' className='mt-2' >
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control
                        type={isShow ? "text" : "password"}
                        placeholder='Enter Your Password'
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            validate: (value) => users.some(user => user.password === value) ? true : "Incorrect Password"
                        })}
                        className={errors.password ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback type='invalid' className='text-warning fs-6' >{errors.password?.message}</Form.Control.Feedback>
                    <Form.Check className='text-light my-2' type='checkbox' label="Show Password" onClick={() => setIsShow(!isShow)} />
                </Form.Group>
                <Button variant='primary ' className='fw-bold my-3 w-25 mx-auto d-block' onClick={handleSubmit(data => handleSubmitting(data))} >LOGIN</Button>
                <span className='d-flex justify-content-center text-light'><hr className='w-25 me-2' /> or <hr className='w-25 ms-2' /></span>
                <Button variant='primary' className='my-3 fw-bold d-block mx-auto w-auto' >SIGN IN WITH GOOGLE</Button>
                <span className='d-flex justify-content-center'>
                    <p className='text-light me-1'>Don't have an account?</p> <NavLink to={'/register'} className="text-decoration-none" >SIGNUP</NavLink>
                </span>
            </Form>
        </div>
    )
}

export default Login
