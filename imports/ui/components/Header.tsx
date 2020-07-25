import React from 'react';
import FontAwesome from 'react-fontawesome'

import StyledHeader from '../elements/StyledHeader'

const Header = (props:any):JSX.Element => {

    const {icons, iconClass} = props
    const renderIcons = React.useCallback(():JSX.Element[] => {
        return icons.map((icon:string, i:number) => {
            console.log('name', icon)
            return (
                <FontAwesome key={i} className={iconClass} name={icon}/>
            )
        })
    }, [])

    return (
        <StyledHeader>
            {props.children}
            <div className={props.iconsWidthSamll ? "icons--left smal" : 'icons--left'}>
                {renderIcons()}
            </div>
        </StyledHeader>
    )
}

export default Header;