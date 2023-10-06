import React from 'react';

const ColorButton = (props) => {
    function handleBgColor() {
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
