import Vendor from './Vendor'

const VendorList = ({vendors}) =>{
    const list = vendors.map((vendor, index)=>{
        return(
            <Vendor vendor = {vendor} key = {index}/>
        )
    })

    return (
        <div className="container">
            <div className='row g-3'>
                {list}
            </div>
        </div>
    )
}

export default VendorList