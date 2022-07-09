import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from '../Nav'

const Account = ()=>{

    const navigate = useNavigate();

    const [userData, setUserData] = useState()

    const fetchUserData = async()=>{
        const response = await fetch('/account',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })

        const data = await response.json()
        setUserData(data.user)
    }

    const editUserData = async()=>{
        const response = await fetch('/account',{
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(userData)
        })
    }

    const changeHandler = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    useEffect(()=>{
        fetchUserData()
    }, [])




    return(
        <div>
            {
                !userData&&
                <h1>
                    Loading...
                </h1>
            }
            {
                userData&&
                // <div className="account d-flex flex-column" >
                //     <h3>{accountInfo.user.username}</h3>
                //     <h3>{accountInfo.user.email}</h3>
                // </div>
                <div>
                    <TopNav/>
                    <div className="container">
                        <div className="row">
                            <div className="d-flex flex-column">
                                <h1 className="col-12">Account Details</h1>
                                <div className="input-group mb-4">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Email</span>
                                    </div>
                                    <input type = 'email' name = 'email'className="form-control" value={userData.email} onChange={changeHandler}/>
                                </div>
                                <div className="input-group mb-4">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Username</span>
                                    </div>
                                    <input type = 'text' name = 'username' className="form-control" value={userData.username} onChange={changeHandler}/>
                                </div>
                                {/* <div className="input-group mb-4">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Password</span>
                                    </div>
                                    <input type = 'password' name = 'password' className="form-control" value={userData.password} onChange={changeHandler}/>
                                </div> */}
                                <div className="input-group mb-4">
                                    <button className='btn col-12 btn-light' type='button' onClick={editUserData}>
                                        Save
                                    </button>
                                </div>
                                <div className="input-group">
                                    <button className='btn col-12 btn-light' type='button' onClick={()=>navigate('/')}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>

    )
}

export default Account