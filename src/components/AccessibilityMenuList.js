import React, { useContext } from 'react';
import { WidgetContext } from '../context/widgetContext';
import AccessibilityMenuItem from './AccessibilityMenuItem';
function AccessibilityMenuList() {
    const { widgetState: { accessibilityMenu }, dispatch } = useContext(WidgetContext);

    const handleSelect = (id => { dispatch({ type: 'TOGGLE_MENU_ACCESSIBILITY', id: id }) });
    const getBody = () => {
        return <ul>
            {accessibilityMenu.map(item => <AccessibilityMenuItem key={item.id} item={item} handleSelect={handleSelect} />)}
        </ul>
    }
    return getBody();
}

export default AccessibilityMenuList;