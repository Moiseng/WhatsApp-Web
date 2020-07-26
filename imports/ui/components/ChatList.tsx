import React from 'react';

import StyledChatList from '../elements/StyledChatList'
import { Chat } from '../../api/models'
import ChatItem from './ChatItem'

const ChatList = (props:any):JSX.Element => {

    const { chats } = props
    const renderChats = ():JSX.Element[] => {
        return chats.map((chat:Chat) => {
            // {...chat} renvoie toutes les proprietes du chat
            return (
                <ChatItem key={chat._id} {...chat}/>
            )
        })}

    return (
        <StyledChatList>
            {renderChats()}
        </StyledChatList>
    )
}

export default ChatList;