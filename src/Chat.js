import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import './Chat.css'
import db from './firebase';

function Chat() {

    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams(); 
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => 
                setRoomName(snapshot.data().name))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])
    
    const sendMessage = (e) => {
        e.preventDefault()
        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last Seen</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Pulkit Agarwal</span>
                    Hey Guys
                    <span className="chat__timestamp">10:00pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send Message</button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
