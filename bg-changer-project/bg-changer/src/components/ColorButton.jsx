import React, { useState } from 'react';

const ColorButton = (props) => {
    const [bgColor, setBgColor] = useState('');

    function handleBgColor() {
        setBgColor(props.color);
        document.body.style.backgroundColor = props.color;
    }

    return (
        <>
            <button className='btn' style={{ backgroundColor: props.color }} onClick={handleBgColor}>
                {props.color}
            </button>
        </>
    );
}

export default ColorButton;
