import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import TopNav from "../Nav";
import {BsThreeDots} from 'react-icons/bs'

const VendorPage = ()=>{
    const {id} = useParams()
    const navigate = useNavigate();

    const [vendorInfo, setVendorInfo] = useState()

    const fetchVendorInfo = async()=>{
        const response = await fetch(`/vendor/${id}`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        const data = await response.json();
        setVendorInfo(data)
    }

    useEffect(()=>{
        fetchVendorInfo()
    }, [])

    const addVendor = async()=>{
        vendorInfo.peopleCurrent += 1
        const response = await fetch(`/vendor/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body:JSON.stringify(vendorInfo)
        })
        const data = await response.json()
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
                // <div className="vendor d-flex flex-column" onClick={()=>addVendor()}>
                //     <h3>{vendorInfo._id}</h3>
                //     <h3>{vendorInfo.time}</h3>
                //     <h3>{vendorInfo.location}</h3>
                //     <h2>{vendorInfo.name}</h2>
                //     <h2>{vendorInfo.number}</h2>
                //     <h3>{vendorInfo.peopleCurrent}/{vendorInfo.peopleNeeded}</h3>
                //     <h2>{vendorInfo.description}</h2>
                //     <button>Enter chat</button>
                // </div>
                <div className="container p-4">
                    
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between ">
                                <h1>{vendorInfo.name}</h1>
                                <BsThreeDots size={'20px'}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <h4>Created by: {vendorInfo.createdBy}</h4>
                        </div>
                        <div className="col-12">
                            <h1>{vendorInfo.number}</h1>
                        </div>
                        <div className="col-12">
                            <h2>{vendorInfo.time}</h2>
                        </div>
                        <div className="col-12">
                            <h2>{vendorInfo.location}</h2>
                        </div>
                        <div className="col-12">
                            <h1>{`${vendorInfo.peopleCurrent}/${vendorInfo.peopleNeeded}`}</h1>
                        </div>
                        <div className="col-12">
                            <h3>{vendorInfo.description}</h3>
                        </div>
                    </div>
                    <button className="btn" onClick = {()=>addVendor()}>Add to attending vendors</button>
                    <button className="btn" onClick={()=>enterChat()}>Enter chat</button>

                </div>
            }
        </div>
    )
}

export default VendorPage