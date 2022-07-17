import Message from './Message'
import '../style/chat.css'
import {useEffect, useRef} from 'react'

const MessageList = ({messages})=>{

    const bottomRef = useRef(null)

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: 'auto'})
    }, [messages])

    const list = messages.map((message, index)=>{
        const isSender = message.createdByUsername===localStorage.getItem('username')
        return(
            <Message createdByUsername = {message.createdByUsername}content = {message.content} isSender={isSender} key = {index}/>
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