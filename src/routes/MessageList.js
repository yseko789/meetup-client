import Message from './Message'
import '../style/chat.css'
import {useEffect, useRef} from 'react'

const MessageList = ({messages})=>{

    const bottomRef = useRef(null)

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: 'auto'})
    }, [messages])

    const list = messages.map((message, index)=>{
        return(
            <Message content = {message.content} isSender={message.createdByUsername} key = {index}/>
        )
    })
    
    return (
        <div className="card-body">
                {list}
                <div ref = {bottomRef}/>
        </div>
    )
}

export default MessageList