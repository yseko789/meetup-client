import { Navigate, useNavigate } from "react-router-dom"

const Vendor = ({vendor})=>{

    const navigate = useNavigate()

    const vendorData = {
        id: vendor._id,
        name: vendor.name,
        number: vendor.number,
        peopleCurrent: vendor.peopleCurrent,
        peopleNeeded: vendor.peopleNeeded,
        time: vendor.time,
        location: vendor.location
    }

    const clickHandler = ()=>{
       navigate(`/vendor/${vendorData.id}`)
    }

    return(
        <div className="vendor d-flex flex-column" onClick={()=>clickHandler()}>
            <h3>{vendorData.id}</h3>
            <h3>{vendorData.time}</h3>
            <h3>{vendorData.location}</h3>
            <h2>{vendorData.name}</h2>
            <h2>{vendorData.number}</h2>
            <h3>`{vendorData.peopleCurrent}/{vendorData.peopleNeeded}`</h3>
        </div>
    )
}

export default Vendor