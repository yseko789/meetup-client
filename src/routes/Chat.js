import {io} from 'socket.io-client'
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import '../style/chat.css'
import TopNav from './Nav'
import {BiArrowBack} from 'react-icons/bi'
import MessageList from './MessageList'
const socket = io('http://localhost:3001')


const Chat = ()=>{
    
    const {id} = useParams()

    
    socket.on('connect', function(){
        console.log('connect')
        socket.emit('join-room', id)
    })
    
    const [message, setMessage] = useState("")

    const [messages, setMessages] = useState([])

    const changeHandler = (e)=>{
        setMessage(e.target.value)
    }


    useEffect(()=>{

        socket.on("past-messages",(data)=>{
            setMessages(data)
            
            
        })
        socket.on("receive-message", (data)=>{
            setMessages(messages=>[...messages, data])

        })
    },[socket])
    
    
    const sendMessage = ()=>{
        socket.emit("send-message", 
            {
                room: id,
                message:{
                    content: message,
                    createdByUsername: localStorage.getItem('username'),
                    createdById: localStorage.getItem('userId')
                }
            }
        )
        setMessage("")
    }

    return (
        <div>
            <TopNav/>
            <div className='container' >
                <div className='card mx-auto cardContainer'>
                    <div className = 'card-header bg-transparent'>
                        <div className='navbar navbar-expand p-0'>
                            <ul className='navbar-nav me-auto'>
                                <li className='nav-item me-5'>
                                    <Link to="/">
                                        <BiArrowBack/>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    Vendor
                                </li>
                            
                            </ul>
                            
                        </div>
                    </div>
                    <MessageList messages = {messages}/>
                    <div className='card-footer bg-transparent  bottom-0 '>
                        <div className='input-group'>
                            <input type = 'text' className='form-control border-0' placeholder='message'
                            onChange = {changeHandler}
                            value = {message}
                            />
                            <button type = 'button' className='btn btn-light' onClick={sendMessage}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat