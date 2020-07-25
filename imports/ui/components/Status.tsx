import React from 'react';
import FontAwesome from 'react-fontawesome'
import StyledStatus from '../elements/StyledStatus'
import StyledAavatar from '../elements/StyledAvatar'


const Status = (props:any):JSX.Element => {

    return (
        <StyledStatus color="blue">
            <StyledAavatar>
                <FontAwesome name="bell-slash" size="2x" className="icon--color"/>
            </StyledAavatar>
            <div className="status--textContainer">
                <div className="text--big">
                    Etre Averti(e) de nouveaux messages.
                </div>
                <span className="text--small">
                    Afficher les notifications sur le bureau >
                </span>
            </div>
        </StyledStatus>
    )
}

export default Status;