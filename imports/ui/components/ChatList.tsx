import React from 'react';

import StyledChatList from '../elements/StyledChatList'
import { Chat } from '../../api/models'
import ChatItem from './ChatItem'

const ChatList = (props:any):JSX.Element => {

    const { chats, onChatClick, selectedChat } = props
    const renderChats = ():JSX.Element[] => {
        return chats.map((chat:Chat) => {
            const active:boolean = selectedChat._id === chat._id
            // {...chat} renvoie toutes les proprietes du chat
            return (
                <ChatItem
                    key={chat._id}
                    {...chat}
                    onChatClick={onChatClick}
                    active={active}
                />
            )
        })}

    return (
        <StyledChatList>
            {renderChats()}
        </StyledChatList>
    )
}

export default ChatList;