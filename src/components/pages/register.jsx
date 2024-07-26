import React, { useEffect, useState } from 'react'
import { Form, Button, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {Users} from '../context/users'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


const Register = () => {
    const { register, handleSubmit, watch, reset,formState ,setError,formState: { errors } } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })
    const { users, setUsers } = useContext(Users)
    const [isShow,setIsShow] = useState(false)

    useEffect(() => {
        const subscription = watch((data) => {
            // console.log(data)
        })
        return(()=> subscription.unsubscribe())
    }, [watch])

    useEffect(() => {
        if (formState.isSubmitSuccessful) reset()
    },[reset,formState])
    

    const handleSubmiting = (person) => {
        setUsers([...users, person])
        toast.success("Register done")
    }

    console.log(users)

    return (
        <div className=" w-100 overflow-none bg-dark d-flex justigy-content-center align-items-center flex-column" style={{ height: '100vh' }}>
            <Form className='w-50 bg-secondary shadow px-2 py-4 rounded  my-auto' onSubmit={handleSubmit(()=> handleSubmiting)} >
                <Navbar.Brand className=' w-100 '><img className='mx-auto d-block' src="https://worldwise-lemon.vercel.app/logo.png" height={50} /></Navbar.Brand>
                <Form.Group controlId='username' >
                    <Form.Label className='text-light'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='john'
                        name='username'
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required"
                           }
                        })}
                        className={errors.username ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback className='text-warning' type='invalid'>{errors.username?.message}</Form.Control.Feedback>
                </Form.Group >
                <Form.Group controlId='emaill' className='mt-2' >
                    <Form.Label className='text-light'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='john@gmail.com'
                        name='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+@gmail\.com$/,
                                message: "Invalid email address"
                            },
                            validate: (value) => {
                                if (users.some(user => user.email === value)) { 
                                    setError("email", { message: "Email already exist" })
                                    return false
                                } else {
                                    return true
                                }
                            }
                        })}
                        className={errors.email ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback className='text-warning' type='invalid'>{errors.email?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='password' className='mt-2' >
                    <Form.Label className='text-light'>Password</Form.Label>
                    <Form.Control
                        type={isShow ? "text": "password"}
                        name='password'
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            maxLength: {
                                value: 10,
                                message: "password must be 10 characters or less"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                message: "password must contain 8 letters or more with special character"
                            }
                        })}
                        className={errors.password ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback className='text-warning' type='invalid'>{errors.password?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='confirmPassword' className='mt-2' >
                    <Form.Label className='text-light'>Confirm Password</Form.Label>
                    <Form.Control
                        type={isShow ? "text": "password"}
                        name='confirmPassword'
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Confirm Password is required"
                            },
                            validate: (value) => value === watch('password') || "the passwords do not match",
                        })}
                        className={errors.confirmPassword ? "is-invalid" : ""}
                    />
                    <Form.Control.Feedback className='text-warning' type='invalid'>{errors.confirmPassword?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Check onClick={()=>setIsShow(!isShow)} label="Show Password" id='password-checkbox' type='checkbox' className='text-light my-2 text-sm-start' />
                <Button variant='primary ' className='fw-bold my-3 w-25 mx-auto d-block' type='button' onClick={handleSubmit((data)=> handleSubmiting(data))} >SIGNUP</Button>
                <span className='d-flex justify-content-center text-light'><hr className='w-25 me-2' /> or <hr className='w-25 ms-2' /></span>
                <Button variant='primary' className='my-3 fw-bold d-block mx-auto w-auto' >SIGN UP WITH GOOGLE</Button>
                <span className='d-flex justify-content-center'>
                    <p className='text-light me-1'>If you have an account?</p> <NavLink to={'/login'} className="text-decoration-none" >SIGNIN</NavLink>
                </span>
            </Form>
        </div>
    )
}

export default Register
