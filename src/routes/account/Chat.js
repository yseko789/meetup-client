import {io} from 'socket.io-client'
import { useEffect } from 'react'
const socket = io('http://localhost:3001')


const Chat = ()=>{

    useEffect(()=>{
        socket.on("receive_message", (data)=>{
            alert(data.message)
        })
    },[socket])
    
    const sendMessage = ()=>{
        socket.emit("send_message", {message: "helllo"})
    }

    return (
        <div>
            <input/>
            <button onClick={()=>sendMessage()}>Send message</button>
        </div>
    )
}

export default Chat