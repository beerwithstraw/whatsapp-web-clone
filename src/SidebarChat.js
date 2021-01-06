import { Avatar } from '@material-ui/core'
import React from 'react'

import './SidebarChat.css'
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://avatars.dicebear.com/4.5/api/male/.svg"/>
            <div className="sidebarChat__info">
                <h2>Entity Name</h2>
                <p>Latest Message</p>
            </div>
        </div>
    )
}

export default SidebarChat
