import React from 'react';

import { Chat } from '../../api/models'
import StyledMessageView from '../elements/StyledMessageView';
import Header from './Header'
import Avatar from './Avatar'
import Footer from './Footer'

const icons:string[] = ["search", "paperclip", "ellipsis-v"]

const MessageView = (props:any):JSX.Element => {
    const selectedChat:Chat = props.selectedChat

    return (
        <StyledMessageView>
            <Header iconClass="greyIcon" icons={icons}>
                <Avatar avatar_url={selectedChat.picture}/>
                <div className="headerMsg--container">
                    <span className="headerMsg--title">
                        {selectedChat.title}
                    </span>
                    <span className="headerMsg--sbTitle">
                        en ligne
                    </span>
                </div>
            </Header>
            <Footer/>
        </StyledMessageView>
    )
}

export default MessageView;