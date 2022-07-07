import Vendor from './Vendor'

const VendorList = ({vendors}) =>{
    const list = vendors.map((vendor, index)=>{
        return(
            <Vendor vendor = {vendor} key = {index}/>
        )
    })

    return (
        <div className="container">
            {list}
        </div>
    )
}

export default VendorList