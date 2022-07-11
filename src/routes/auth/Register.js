import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {Box, TextField} from '@mui/material'

function Register(){
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const {username, email, password} = userData

    const changeHandler = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e)=>{
        e.preventDefault()
        try{
            const response = await fetch('/auth/register',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            const userResponse = await response.json()
            console.log(userResponse)

            localStorage.setItem('token', userResponse.token);
            localStorage.setItem('username', userResponse.username);
            localStorage.setItem('userId', userResponse.userId)

            navigate('/')
        }catch(error){
            console.log(error);

        }


    }

    return(
        <div className='screen'>
            <div className='container p-4'>
                <div className = 'row text-center'>
                    <h1>Register</h1>
                </div>
            </div>
            <div className='container'>
                <form onSubmit = {submitHandler}>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'text' placeholder = 'username' name = 'username' value = {username} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'email' placeholder = 'email' name = 'email' value = {email} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className='row form-group d-flex justify-content-center mb-2'>
                        <div className = 'col-8'>
                            <input className='form-control' type = 'password' placeholder = 'password' name = 'password' value = {password} onChange = {changeHandler}/>
                        </div>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center'>
                            <button className = 'btn btn-block col-4 btn-custom' type = 'submit'>Submit</button>
                    </div>
                    <div className = 'row form-group d-flex justify-content-center mt-3'>
                            <Link className = 'btn btn-block col-4 btn-link'to='/auth/login'>Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
        

    )
}

export default Register