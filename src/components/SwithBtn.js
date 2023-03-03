import React from 'react';
function SwitchBtn ({isChecked, handleChecked, text}) {
    return <div onClick={()=> handleChecked(!isChecked)}> {text} {isChecked ? 'true' : 'false'}</div>
}

export default SwitchBtn;