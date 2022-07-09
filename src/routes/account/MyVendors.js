import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import TopNav from "../Nav"
import VendorList from "../vendor/VendorList"

const MyVendors = ()=>{
    const [vendorsHost, setVendorsHost] = useState([])
    const [vendorsAttend, setVendorsAttend] = useState([])
    const [vendors, setVendors] = useState([])
    const navigate = useNavigate()

    const fetchMyVendors = async()=>{
        const response = await fetch('/account/vendor',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        const data = await response.json()
        
    }

    useEffect(()=>{
        fetchMyVendors()
    }, [])

    return(
        <div>
            <TopNav/>
            <div className="container">
                <div className="row">
                    {
                        vendors.length ===0&&
                        <h1>
                            Loading...
                        </h1>
                    }
                    {
                        vendors.length >0 &&
                        <div>
                            <VendorList vendors = {vendors}/>
                            <button onClick={()=>navigate(`${vendors[0]._id}/chat`)}>
                                <h3>Enter chat for first vendor</h3>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )


}

export default MyVendors