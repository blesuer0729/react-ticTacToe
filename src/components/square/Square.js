import React from "react";

import '../../index.css';

function Square(props) {
    const { value, onSquareClick } = props;
    return (
        <button className="square" onClick={ onSquareClick }>
            {value}
        </button>
    );
}

export default Square;