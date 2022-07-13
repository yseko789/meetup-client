
import TopNav from './Nav'
import VendorList from './vendor/VendorList'

import {useEffect, useState} from 'react'
import { AiOutlinePlus } from "react-icons/ai"

function Home(){

    const [vendors, setVendors] = useState([])
    const [vendorsHost, setVendorsHost] = useState([])
    const [vendorsAttend, setVendorsAttend] = useState([])

    const fetchMyVendors = async()=>{
        const response = await fetch('/account/vendor',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        const data = await response.json()
        setVendors(data)
        data.forEach(vendor=>{
            if(vendor.createdById == localStorage.getItem('userId')){
                setVendorsHost(vendors =>[...vendors, vendor])
            }else{
                setVendorsAttend(vendors=>[...vendors,vendor])
            }
        })
    }

    const [vendorData, setVendorData] = useState({
        name: "",
        number: "",
        peopleCurrent: 0,
        peopleNeeded: 0,
        time: "",
        location:"",
        description: ""
    })

    const changeHandler = (e)=>{
        setVendorData({...vendorData, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const createMyVendor = async()=>{
        const response = await fetch('/account/vendor',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(vendorData)
        })
        const data = await response.json()
        console.log(data)
    }

    useEffect(()=>{
        fetchMyVendors()
    }, [])

    const submitHandler = (e)=>{
        // vendorData.peopleCurrent = Number(vendorData.peopleCurrent)
        // vendorData.peopleNeeded = Number(vendorData.peopleNeeded)
        e.preventDefault()
        if(Number(vendorData.peopleCurrent) < Number(vendorData.peopleNeeded)){
            createMyVendor()
            document.getElementById('addForm').submit()
        }else{
            console.log("error")
        }
        
    }


    return(
        <div>
            <TopNav location = {"home"}/>
            <div className='container p-3'>
                <div className='row'>
                    <h1 className='col-7'>
                        Hosted by me:
                    </h1>
                    <div className='col-5 d-flex justify-content-end'>
                        <AiOutlinePlus 
                        size='30px'
                        data-bs-toggle='modal'
                        data-bs-target='#add-modal'
                    />
                         
                    </div>
                </div>
            </div>
            <VendorList vendors = {vendorsHost}/>

            <div className='container p-3'>
                <div className='row'>
                    <h1 className='col-7'>
                        Attending:
                    </h1>
                </div>
            </div>
            <VendorList vendors = {vendorsAttend}/>

            <div className='modal fade' id='add-modal' tabIndex={-1} aaria-labelledby='modal-title' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='modal-title'>
                                Enter Vendor Info
                            </h5>
                            <button type='button' className='btn-close' data-bs-dismiss = 'modal' aria-label = 'Close'></button>
                        </div>
                        <div className='modal-body'>
                            <form id = 'addForm' onSubmit={submitHandler}>
                                <div className="input-group mb-3">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Name</span>
                                    </div>
                                    <input type = 'text' name = 'name' className="form-control" onChange={changeHandler} required/>
                                </div>

                                <div className="input-group mb-3">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Number</span>
                                    </div>
                                    <input type = 'text' name = 'number' className="form-control" onChange={changeHandler}/>
                                </div>

                                <div className="input-group mb-3">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Current Number of People</span>
                                    </div>
                                    <input type = 'number' name = 'peopleCurrent' className="form-control" onChange={changeHandler} required/>
                                </div>

                                <div className="input-group mb-3">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Number of People Needed</span>
                                    </div>
                                    <input type = 'number' name = 'peopleNeeded' className="form-control" onChange={changeHandler} required/>
                                </div>

                                <div className="input-group mb-3">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Date and Time</span>
                                    </div>
                                    <input type = 'datetime-local' name = 'time' className="form-control" onChange={changeHandler} required/>
                                </div>

                                

                                <div className="input-group mb-3">
                                    <div className = "input-group-prepend">
                                        <span className="input-group-text">Location</span>
                                    </div>
                                    <input type = 'text' name = 'location' className="form-control" onChange={changeHandler} required/>
                                </div>

                                <label htmlFor = 'modal-description' className='form-label'>Description</label>
                                <input type = 'text' className='form-control' id='modal-description' name = 'description'onChange={changeHandler} required/>

                                
                            
                                <div className='modal-footer'>
                                    <button className='btn' type = 'submit'>
                                        Create
                                    </button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
            

        </div>

    )
}

export default Home