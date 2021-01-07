import { Avatar, IconButton } from '@material-ui/core'
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'

import db from './firebase'

import './Sidebar.css'
import SidebarChat from './SidebarChat'
function Sidebar() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
            setRooms(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
         );

         return () => {
             unsubscribe();
         }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton>
                    <Avatar />
                </IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"/>
                </div>           
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>

                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}

            </div>
        </div>  
    )
}

export default Sidebar
