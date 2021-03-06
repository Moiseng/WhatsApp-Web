import React from 'react';
import StyledRightImg from '../elements/StyledRightImg'

const RightImg = (props:any): JSX.Element => {

    return (
        <StyledRightImg right={props.right}>
            <img src="./images/whatsapp-bg-1.jpg" alt="bg" className="rightImg--image"/>
            <h3 className="rightImg--title">
                Gardez votre Téléphone connecté
            </h3>
            <div className="rightImg--div">
                <p className="rightImg--p">
                    {props.messageText}
                </p>
                <div className="rightImg--divider" />
            </div>

            {props.children}
        </StyledRightImg>
    )
}

export default RightImg;