import React, { Component } from 'react';
import '../static/Square.css';
import { ROOK_B, KNIGHT_B, BISHOP_B, PAWN_B, QUEEN_B, KING_B } from '../Piece';
import { ROOK_W, KNIGHT_W, BISHOP_W, PAWN_W, QUEEN_W, KING_W } from '../Piece';
import possibleMove from '../static/images/possibleMove.svg';
import r_b from '../static/pieceImg/r_b.png';
import n_b from '../static/pieceImg/n_b.png';
import b_b from '../static/pieceImg/b_b.png';
import p_b from '../static/pieceImg/p_b.png';
import q_b from '../static/pieceImg/q_b.png';
import k_b from '../static/pieceImg/k_b.png';
import r_w from '../static/pieceImg/r_w.png';
import n_w from '../static/pieceImg/n_w.png';
import b_w from '../static/pieceImg/b_w.png';
import p_w from '../static/pieceImg/p_w.png';
import q_w from '../static/pieceImg/q_w.png';
import k_w from '../static/pieceImg/k_w.png';

export default class Square extends Component {
    render() {
        const { color, choosePieceToMove, choosing, item, whiteTurn } = this.props;
        let empty = '';
        let pieceImg = '';
        let buttonClass = 'square';
        switch (item.currentPiece) {
            case ROOK_B: {
                pieceImg = r_b;
                break;
            }
            case KNIGHT_B: {
                pieceImg = n_b;
                break;
            }
            case BISHOP_B: {
                pieceImg = b_b;
                break;
            }
            case PAWN_B: {
                pieceImg = p_b;
                break;
            }
            case QUEEN_B: {
                pieceImg = q_b;
                break;
            }
            case KING_B: {
                pieceImg = k_b;
                break;
            }

            case ROOK_W: {
                pieceImg = r_w;
                break;
            }
            case KNIGHT_W: {
                pieceImg = n_w;
                break;
            }
            case BISHOP_W: {
                pieceImg = b_w;
                break;
            }
            case PAWN_W: {
                pieceImg = p_w;
                break;
            }
            case QUEEN_W: {
                pieceImg = q_w;
                break;
            }
            case KING_W: {
                pieceImg = k_w;
                break;
            }
            case '': {
                empty = "empty";
                break;
            }
            default: pieceImg = '';
        }

        if (color === "black") buttonClass += ' black';
        else buttonClass += ' white';

        if (choosing.ready && choosing.piece !== '' && choosing.position === item.position) buttonClass += ' choosing';
        if (item.possibleToMove && item.currentPiece) buttonClass += ' possibletomove'

        return (
            <button onClick={choosePieceToMove} className={buttonClass}>
                {empty ? '' : <img className={whiteTurn? "imgButton":"imgButton rotate"} src={pieceImg} alt="square" />}
                { item.possibleToMove && !item.currentPiece && <img className='possible' src={possibleMove} width='23px' height='100%' alt='possible' /> }
            </button>
        )
    }
}