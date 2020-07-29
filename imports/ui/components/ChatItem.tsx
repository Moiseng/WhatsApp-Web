import React from 'react';
import Moment from 'react-moment'
import moment from 'moment'

import StyledChatItem from '../elements/StyledChatItem';
import Avatar from './Avatar'

const ChatItem = (props:any):JSX.Element => {


    const {title, picture, lastMessage, onChatClick, _id, active} = props
    const {content, createdAt} = lastMessage
    const now:string = moment().format('D/MM/YYYY')
    const today:boolean = now === moment(createdAt).format("DD/MM/YYYY")
    //console.log('now', now)
    //console.log('createdAt format', moment(createdAt).format("DD/MM/YYYY"))
    //console.log('createdAt format', createdAt)

    return (
        <StyledChatItem onClick={() => onChatClick(_id)} active={active}>
            <Avatar large avatar_url={picture}/>
            <div className="chat--contentContainer">
                <div className="content--line1">
                    <span className="content--line1__title">
                        {title}
                    </span>
                    <div className="content--line1__date">
                        {today ? (
                            <Moment format="HH:mm" locale="fr-FR">
                                {createdAt}
                            </Moment>
                        ) : (
                            <Moment format="D/MM/YYYY">
                                {createdAt}
                            </Moment>
                        )}
                    </div>
                </div>
                <div className="content--line1">
                    <span className="content--message">
                        {content}
                    </span>
                    <div className="chat--badge">4</div>
                </div>
            </div>
        </StyledChatItem>
    )
}

export default ChatItem;