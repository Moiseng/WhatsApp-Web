import React from 'react';
import { Meteor } from 'meteor/meteor'

import StyledLeft from "../elements/StyledLeft"
import Header from './Header'
import Avatar from './Avatar'
import Status from './Status'
import SearchBar from './SearchBar'

// la constante des icones
const icons:string[] = ["circle-notch", "comment-alt", "ellipsis-v"];

const Left = (props:any): JSX.Element => {
    // la photo de profile
    const avatar_url:string = Meteor.user().profile.picture
    
    return (
        <StyledLeft>
            <Header icons={icons} iconClass="greyIcon">
                <Avatar avatar_url={avatar_url}/>
            </Header>
            <Status />
            <SearchBar/>
        </StyledLeft>
    )
}

export default Left;