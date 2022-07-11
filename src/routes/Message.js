const Message = ({content, isSender})=>{

    return(
        // <div className="d-flex  align-items-baseline mb-4">
        <div className={`d-flex align-items-baseline mb-4 ${isSender? "": "justify-content-end"}`}>
            <div className="position-relative avatar">

            </div>
            <div className="pe-2">
                <div className="card d-inline-block">{content}</div>
            </div>
        </div>
        
    )
}

export default Message