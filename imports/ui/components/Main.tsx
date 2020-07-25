import React from 'react';

import StyledMain from '../elements/StyledMain'
import Left from './Left'
import Right from './Right'

const Main = (props:any):JSX.Element => {
    return (
        <StyledMain>
            <Left />
            <Right right/>
        </StyledMain>
    )
}

export default Main;