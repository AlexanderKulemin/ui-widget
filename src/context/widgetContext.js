import React, { createContext, useReducer } from 'react';
import widgetReducer from '../reducers/widgetReducer';
export const WidgetContext = createContext();
const initialaccessibilityMenu = [
    { id: 1, name: 'Keyboard Nav', selected: false },
    { id: 2, name: 'Read Page', selected: false },
    { id: 3, name: 'Contrast', selected: false },
    { id: 4, name: 'Stop Animations', selected: false },
    { id: 5, name: 'Bigger name', selected: false },
    { id: 6, name: 'Legible Fonts', selected: false },
    { id: 7, name: 'Big Cursor', selected: false },
    { id: 8, name: 'ToolTips', selected: false },
    { id: 9, name: 'Highlight Links', selected: false },
    { id: 10, name: 'Page Structure', selected: false }
];

const initialState = {
    accessibilityMenu: initialaccessibilityMenu,
    isLeftWidgetPosition: false,
    isOpenWidget: false
};
export function WidgetProvider(props) {
    const [widgetState, dispatch] = useReducer(widgetReducer, initialState);
    return <WidgetContext.Provider value={{ widgetState, dispatch }}>
        {props.children}
    </WidgetContext.Provider>
}



