import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import TopNav from "../Nav";
import {BsThreeDots} from 'react-icons/bs'
import { BiArrowBack } from "react-icons/bi";

const VendorPage = ()=>{
    const {id} = useParams()
    const navigate = useNavigate();

    const [vendorInfo, setVendorInfo] = useState()
    const [userStatus, setUserStatus] = useState()
    // const date = null

    const fetchVendorInfo = async()=>{
        const response = await fetch(`/vendor/${id}`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        const data = await response.json();
        setVendorInfo(data.vendor)
        setUserStatus(data.userStatus)
    }

    useEffect(()=>{
        fetchVendorInfo()
    }, [])

    const editVendor = async()=>{
        if(userStatus === "attendee"){
            vendorInfo.peopleCurrent -= 1
        }else if(userStatus === "none"){
            vendorInfo.peopleCurrent += 1
        }
        console.log({vendorInfo, userStatus})
        const response = await fetch(`/vendor/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body:JSON.stringify({vendorInfo, userStatus})
        })
        const data = await response.json()
        console.log(data)
        setVendorInfo(data)
    }

    const enterChat = async()=>{
        navigate(`/vendor/${id}/chat`)
    }

    return(
        <div>
            <TopNav/>
            {
                !vendorInfo&&
                <h1>
                    Loading...
                </h1>
            }
            {
                vendorInfo &&
                <div className="container mt-3">
                        <div className="card vendorPage">
                            <div className="card-header">
                                <div className="d-flex justify-content-between">
                                    <BiArrowBack onClick = {()=>navigate(-1)}/>
                                    <h1>{vendorInfo.userStatus}</h1>
                                    {/* <BsThreeDots/> */}
                                </div>
                            </div>
                            <div className = 'card-body'>
                                <div className = 'card-title text-center'>
                                    <div className="vendor-name">
                                        {vendorInfo.name}
                                    </div>
                                    <div className="vendor-number">
                                        {vendorInfo.number}
                                    </div>
                                </div>
                                <div className="card-text text-center">
                                    <div className="vendor-date">
                                        {(new Date(vendorInfo.time)).toLocaleDateString()}
                                    </div>
                                    <div className="vendor-time">
                                        {(new Date(vendorInfo.time)).toLocaleTimeString()}
                                    </div>
                                    <div className="vendor-location">
                                        {vendorInfo.location}
                                    </div>
                                    <div className="vendor-additionalInfo mt-2 p-2">
                                        <div className="vendor-createdBy">
                                            Created by: {vendorInfo.createdByUsername}
                                        </div>
                                        <div className="vendor-description">
                                            {vendorInfo.description}
                                        </div>
                                    </div>

                                    {
                                        userStatus==="host"&&
                                        <div className="buttons d-flex justify-content-around mt-3">
                                            <button className="btn">Edit</button>
                                            <button className="enter-chat-btn btn" onClick={()=>enterChat()}>Enter chat</button>
                                        </div>
                                    }
                                    {
                                        userStatus ==="attendee"&&
                                        <div className="buttons d-flex justify-content-around mt-3">
                                            <button className="btn" onClick={()=>editVendor()}>Cancel</button>
                                            <button className="enter-chat-btn btn" onClick={()=>enterChat()}>Enter chat</button>
                                        </div>
                                    }
                                    {
                                        userStatus === "none"&&
                                        <div className="buttons d-flex justify-content-around mt-3">
                                            <button className="add-btn btn" onClick = {()=>editVendor()}>Add to attending vendors</button>
                                        </div>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                </div>
            }
        </div>
    )
}

export default VendorPage