const Message = ({createdByUsername, content, isSender})=>{

    return(
        <div>
            {
                isSender&&
                <div className="d-flex align-items-baseline mb-1 justify-content-end">                        
                        
                    <div className="card d-inline-block px-3 rounded-pill message">
                        {content}
                    </div>
                        
                </div>
                
    
            }
            {
                !isSender&&
                <div className=" mb-1">

                    <div className="d-flex flex-row align-items-end">
                        <div className="message-avatar rounded-circle text-center ">
                                {createdByUsername[0]}
                        </div>
                        <div className="d-flex flex-column ps-2 ">
                            <div className="message-user">
                                {createdByUsername}
                            </div>
                            <div className="card d-inline-block px-3 rounded-pill message">
                                {content}
                            </div>
                        </div>
                    </div>

                    {/* <div className="d-flex flex-column align-items-start">
                        <div className="message-user">
                            {createdByUsername}
                        </div>
                        <div className="d-flex flex-row">
                            
                            <div >
                                <div className="card d-inline-block px-3 rounded-pill">
                                    {}
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
    
            }
        </div>
        
    )
}

export default Message