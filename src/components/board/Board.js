import React from "react";
import {Component} from "react";
import Square from '../square/Square';

import '../../index.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isTurnX: true,
        };
    }

    findWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
                return squares[a];
            }
        }

        return null;
    }

    handleSquareClick(i) {
        const { squares, isTurnX } = this.state;
        const squaresCopy = squares.slice();

        if (this.findWinner(squaresCopy) || squaresCopy[i]) {
            return;
        }

        squaresCopy[i] = isTurnX ? 'X' : 'O';
        this.setState({ 
            squares: squaresCopy,
            isTurnX: !this.state.isTurnX,
        });
    }
    
    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]} onSquareClick={() => this.handleSquareClick(i)}></Square>
        );
    }

    render() {
        let status;

        if (this.findWinner(this.state.squares)) {
            status = 'Winner: ' + this.findWinner(this.state.squares);
        } else {
            status = 'Next player: ' + (this.state.isTurnX ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;