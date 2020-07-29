import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import _ from 'lodash';

import StyledMain from '../elements/StyledMain'
import Left from './Left'
import Right from './Right'
import { ChatsCollection } from '../../api/chats'
import { Chat } from '../../api/models'
import { findChats } from '../../api/helpers'

const Main = (props:any):JSX.Element => {
    Tracker.autorun(() => {
        Meteor.subscribe('chats.mine');
        //console.log('chats', findChats())
    })
    const [messageVisible, setMessageVisible] = React.useState<boolean>(false)
    const [selectedChat, setSelectedChat] = React.useState<Chat>({})

    const handleChatClick = React.useCallback((_id:string): void => {
        //console.log('selected chat before', selectedChat)
        if (!messageVisible) {
            setMessageVisible(true)
        }
        // le nouveau chat selectionné
        const newChat:Chat = _.find(findChats(), {_id: _id});
        //console.log('selected chat after', newChat)
        setSelectedChat(newChat)
    }, [])

    return (
        <StyledMain>
            <Left
                chats={findChats()}
                onChatClick={handleChatClick}
                selectedChat={selectedChat}
            />
            <Right
                right
                messageVisible={messageVisible}
                selectedChat={selectedChat}
            />
        </StyledMain>
    )
}

export default Main;