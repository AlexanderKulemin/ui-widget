import React, { useState, useContext } from 'react';
import SwithBtn from './SwithBtn';
import Widget from './Widget';
import useDark from '../custom-hooks/useDark';
import { WidgetContext } from '../context/widgetContext';
function Root() {
    const { widgetState: { accessibilityMenu, isOpenWidget, isLeftWidgetPosition }, dispatch } = useContext(WidgetContext);
    const [enabledDark, setDarkMode] = useDark();

    return <React.Fragment>
        <SwithBtn text={'DarkMode'} isChecked={enabledDark} handleChecked={(e) => setDarkMode(e)}></SwithBtn>
        <SwithBtn text={'Choose Side'} isChecked={isLeftWidgetPosition} handleChecked={() => { dispatch({ type: 'TOGGLE_WIDGET_POSITION' }) }}></SwithBtn>
        <SwithBtn text={isOpenWidget ? 'Hide' : 'Show Widget'} isChecked={isOpenWidget} handleChecked={() => { dispatch({ type: 'TOGGLE_WIDGET' }) }}></SwithBtn>
        {isOpenWidget && <Widget></Widget>}
    </React.Fragment>

}

export default Root