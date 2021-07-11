import React, { Component } from 'react';
import Square from './Square';
import '../static/Board.css'
import { ROOK_B, KNIGHT_B, BISHOP_B, PAWN_B, QUEEN_B, KING_B } from '../Piece';
import { ROOK_W, KNIGHT_W, BISHOP_W, PAWN_W, QUEEN_W, KING_W } from '../Piece';
import { pieceMove } from '../howToPlay/howToPlay';

const WHITE_PIECE = 'WHITE_PIECE'
const BLACK_PIECE = 'BLACK_PIECE'

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSquare: [],
            willMove: { piece: '', position: '', ready: false, color: '', curX: '', curY: '' },
            whiteTurn: true
        }
    }

    componentDidMount() {
        const theFile = ["a", "b", 'c', "d", "e", "f", "g", "h"];
        const theRank = [1, 2, 3, 4, 5, 6, 7, 8];
        const squares = [];
        for (let i = 0; i < theRank.length; i++) {
            var positions = theFile.map((item, index) => {
                var position = item + (8 - i);
                var pieceDefault = '';
                var color = '';
                var row = 8 - i;

                switch (row) {
                    case 1:
                    case 2:
                        color = WHITE_PIECE;
                        break;
                    case 7:
                    case 8:
                        color = BLACK_PIECE;
                        break;
                    default: color = '';
                }

                switch (position) {
                    case 'a1':
                    case 'h1': {
                        pieceDefault = ROOK_W;
                        break;
                    }
                    case 'b1':
                    case 'g1': {
                        pieceDefault = KNIGHT_W;
                        break;
                    }
                    case 'c1':
                    case 'f1': {
                        pieceDefault = BISHOP_W;
                        break;
                    }
                    case 'e1': {
                        pieceDefault = KING_W;
                        break;
                    }
                    case 'd1': {
                        pieceDefault = QUEEN_W;
                        break;
                    }
                    case 'a2':
                    case 'b2':
                    case 'c2':
                    case 'd2':
                    case 'e2':
                    case 'f2':
                    case 'g2':
                    case 'h2': {
                        pieceDefault = PAWN_W;
                        break;
                    }
                    case 'a8':
                    case 'h8': {
                        pieceDefault = ROOK_B;
                        break;
                    }
                    case 'b8':
                    case 'g8': {
                        pieceDefault = KNIGHT_B;
                        break;
                    }
                    case 'c8':
                    case 'f8': {
                        pieceDefault = BISHOP_B;
                        break;
                    }
                    case 'e8': {
                        pieceDefault = KING_B;
                        break;
                    }
                    case 'd8': {
                        pieceDefault = QUEEN_B;
                        break;
                    }
                    case 'a7':
                    case 'b7':
                    case 'c7':
                    case 'd7':
                    case 'e7':
                    case 'f7':
                    case 'g7':
                    case 'h7': {
                        pieceDefault = PAWN_B;
                        break;
                    }
                    default: pieceDefault = '';
                }
                return { position: position, currentPiece: pieceDefault, pieceColor: color, possibleToMove: false, x: i, y: index }
            })
            squares.push(positions);
        }
        this.setState({
            allSquare: squares
        })
    }

    defaultPossibleToMove() {
        const { allSquare } = this.state;
        allSquare.forEach((item, xSquare) => {
            allSquare[xSquare].forEach((item2, ySquare) => {
                if (allSquare[xSquare][ySquare].possibleToMove) {
                    allSquare[xSquare][ySquare].possibleToMove = false
                }
            })
        })
    }

    // aiMoveRandom() {
    //     const { willMove, allSquare, whiteTurn } = this.state;

    // }

    choosePieceToMove(pos, pie, pieColor, x, y) {
        const { willMove, allSquare, whiteTurn } = this.state;
        console.log("COLOR: " + pos);
        if ((!willMove.ready && pie !== '')
            || (pieColor === willMove.color && pos !== willMove.position && pieColor !== '')) {
            this.defaultPossibleToMove();
            allSquare.forEach((item, xSquare) => {
                allSquare[xSquare].forEach((item2, ySquare) => {
                    if ((pieceMove(xSquare, ySquare, x, y, pie, allSquare) && pie !== KNIGHT_B && pie !== KNIGHT_W)
                        || (pieceMove(xSquare, ySquare, x, y, pie, allSquare) && (pie === KNIGHT_B || pie === KNIGHT_W) && pieColor !== item2.pieceColor)) {
                        allSquare[xSquare][ySquare].possibleToMove = true;
                    }
                })
            })
            this.setState({
                willMove: { piece: pie, position: pos, ready: true, color: pieColor, curX: x, curY: y }
            })
        }
        else {
            if (willMove.ready && allSquare[x][y].possibleToMove) {
                this.defaultPossibleToMove();
                allSquare[x][y].currentPiece = willMove.piece;
                allSquare[x][y].pieceColor = willMove.color;
                allSquare[willMove.curX][willMove.curY].currentPiece = '';
                allSquare[willMove.curX][willMove.curY].pieceColor = '';
                willMove.ready = false;
                this.setState({
                    allSquare: allSquare,
                    whiteTurn: !whiteTurn
                })
            }
        }

    }



    render() {
        const { allSquare, willMove, whiteTurn } = this.state;
        console.log(willMove)
        return (
            <div className={whiteTurn? "board":"board rotate"}>
                {allSquare.length > 0 && allSquare.map((item, x) => (
                    <div key={x} className="thefile">
                        {allSquare[x].map((item2, y) => {
                            return <Square
                                key={item2.positions}
                                item={item2}
                                choosing={willMove}
                                whiteTurn={whiteTurn}
                                choosePieceToMove={() => this.choosePieceToMove(item2.position, item2.currentPiece, item2.pieceColor, x, y)}
                                color={(x % 2 === 0 && y % 2 === 0) || (x % 2 !== 0 && y % 2 !== 0) ? "white" : "black"}
                            />
                        })}
                    </div>

                ))}
            </div>
        )
    }
}