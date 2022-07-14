import { Navigate, useNavigate } from "react-router-dom"
import '../../style/vendor.css'


const Vendor = ({vendor})=>{

    const navigate = useNavigate()

    const vendorData = {
        id: vendor._id,
        name: vendor.name,
        number: vendor.number,
        peopleCurrent: vendor.peopleCurrent,
        peopleNeeded: vendor.peopleNeeded,
        time: new Date(vendor.time),
        location: vendor.location
    }

    const clickHandler = ()=>{
        navigate(
            `/vendor/${vendorData.id}`, 
            // {
            //     state: {
            //         host
            //     }
            // }
        )

        
    }

    return(
        <div className="col-6 col-md-4 col-lg-3" onClick = {()=>clickHandler()}>
            <div className="card vendor">
                <div className = 'card-body'>
                    <div className = 'card-title text-center'>
                        <div className="vendor-name">
                            {vendorData.name}
                        </div>
                        <div className="vendor-number">
                            {vendorData.number}
                        </div>
                    </div>
                    <div className="card-text text-center">
                        <div className="vendor-date">
                            {vendorData.time.toLocaleDateString()}
                        </div>
                        <div className="vendor-time">
                            {vendorData.time.toLocaleTimeString()}
                        </div>
                        <div className="vendor-location">
                            {vendorData.location}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendor