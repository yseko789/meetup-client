import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

const VendorPage = ()=>{
    const {id} = useParams()

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

    return(
        <div>
            {
                !vendorInfo&&
                <h1>
                    Loading...
                </h1>
            }
            {
                vendorInfo &&
                <div className="vendor d-flex flex-column" onClick={()=>addVendor()}>
                    <h3>{vendorInfo._id}</h3>
                    <h3>{vendorInfo.time}</h3>
                    <h3>{vendorInfo.location}</h3>
                    <h2>{vendorInfo.name}</h2>
                    <h2>{vendorInfo.number}</h2>
                    <h3>{vendorInfo.peopleCurrent}/{vendorInfo.peopleNeeded}</h3>
                    <h2>{vendorInfo.description}</h2>
                </div>
            }
        </div>
    )
}

export default VendorPage