import React from 'react';
function AccessibilityMenuItem({ item: { id, name, selected }, handleSelect }) {

    return <li onClick={() => handleSelect(id)}>{name}</li>
}
export default AccessibilityMenuItem;