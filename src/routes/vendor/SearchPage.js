import React, { useEffect, useState } from "react";
import TopNav from '../Nav'
import VendorList from './VendorList'


function SearchPage(){
    const [vendorSearch, setVendorSearch] = useState('')
    const [vendorResult, setVendorResult] = useState([])

    const fetchVendors = async()=>{
        const response = await fetch('/vendor',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        const data = await response.json();
        console.log(data)
        setVendorResult(data.vendors)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>fetchVendors(), 500)
        return (()=>clearTimeout(timer))
    }, [vendorSearch])

    return(
        <div className="screen-search">
            <div className="sticky-top">
                <TopNav location = "search"/>
                <div className="container mb-3">
                    <div className = 'row'>
                        <div className='input-group '>
                            <input 
                                className = 'form-control'
                                type="search" 
                                placeholder= 'Search Vendor...'
                                aria-label="Search"
                                value = {vendorSearch}
                                onChange = {(e)=>setVendorSearch(e.target.value)}
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-primary btn-custom" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        vendorResult.length ===0&&
                        <h1>
                            Loading...
                        </h1>
                    }
                    {
                        vendorResult.length >0 &&
                        <VendorList vendors = {vendorResult}/>
                    }
                </div>
            </div>
      </div>
    )



}

export default SearchPage