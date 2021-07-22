import React, { Component } from 'react';
import Square from './Square';
import '../static/Board.css'
import { ROOK_B, KNIGHT_B, BISHOP_B, PAWN_B, QUEEN_B, KING_B } from '../Piece';
import { ROOK_W, KNIGHT_W, BISHOP_W, PAWN_W, QUEEN_W, KING_W } from '../Piece';
import { pieceMove } from '../howToPlay/howToPlay';

const WHITE_PIECE = 'WHITE_PIECE';
const BLACK_PIECE = 'BLACK_PIECE';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSquare: [],
            willMove: { piece: '', position: '', ready: false, color: '', curX: '', curY: '' },
            whiteTurn: true,
            check: '',
            attackingPieces: [],
            kingControlledSquares: [],

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

    checkCount(count) {
        return count != 0 ? true : false
    }

    checkIfAiPieceHasPossibleMove(itemChecking) {
        const { allSquare } = this.state;
        for (let i = 0; i < allSquare.length; i++) {
            for (let j = 0; j < allSquare[i].length; j++) {
                if (pieceMove(i, j, itemChecking.x, itemChecking.y, itemChecking.currentPiece, allSquare)) return true
            }
        }
        return false
    }

    getAllPossibleAiPieces(AIPieces) {
        const { willMove, allSquare, whiteTurn } = this.state;
        allSquare.map((item, index) => {
            allSquare[index].map((item2, index2) => {
                if (item2.pieceColor === BLACK_PIECE && this.checkIfAiPieceHasPossibleMove(item2)) {
                    AIPieces.push(item2);
                }
            })
        })
    }

    filterAIPossiblePiecesToMove(AIPieces, AIPossiblePiecesToMove) {
        const { willMove, allSquare, whiteTurn } = this.state;
        AIPieces.forEach((item, index) => {
            allSquare.forEach((item1, index1) => {
                allSquare[index1].forEach((item3, index2) => {
                    if (pieceMove(index1, index2, item.x, item.y, item.currentPiece, allSquare)) {
                        AIPossiblePiecesToMove.push(item);
                    }
                })
            })

        })
    }

    randomAI() {
        const { allSquare } = this.state;
        let possibleMovesRandomPiece = [];
        let AIPieces = [];
        let AIPossiblePiecesToMove = [];
        let randomPiece = '';
        let randomMove = '';
        if (this.checkIfCheckKing() === "Not") {
            this.getAllPossibleAiPieces(AIPieces);
            this.filterAIPossiblePiecesToMove(AIPieces, AIPossiblePiecesToMove);
            randomPiece = AIPossiblePiecesToMove[Math.floor(Math.random() * AIPossiblePiecesToMove.length)];
            for (let i = 0; i < allSquare.length; i++) {
                for (let j = 0; j < allSquare[i].length; j++) {
                    if (pieceMove(i, j, randomPiece.x, randomPiece.y, randomPiece.currentPiece, allSquare) && allSquare[i][j].pieceColor !== BLACK_PIECE) {
                        possibleMovesRandomPiece.push(allSquare[i][j]);
                    }
                }
            }
            randomMove = possibleMovesRandomPiece[Math.floor(Math.random() * possibleMovesRandomPiece.length)];
            this.movePiece(randomMove.x, randomMove.y, randomPiece.x, randomPiece.y, randomPiece.currentPiece, randomPiece.pieceColor);
        }
        else {
            this.kingEscape();
        }

    }

    movePiece(xNew, yNew, xOld, yOld, newPiece, newColor) {
        const { willMove, allSquare, whiteTurn } = this.state;
        allSquare[xNew][yNew].currentPiece = newPiece;
        allSquare[xNew][yNew].pieceColor = newColor;
        allSquare[xOld][yOld].currentPiece = '';
        allSquare[xOld][yOld].pieceColor = '';
        willMove.ready = false;
        this.setState({
            allSquare: allSquare,
            whiteTurn: !whiteTurn
        })
    }

    controlledSquaresList() {
        const { willMove, allSquare, whiteTurn } = this.state;
        let allControlledSquares = [];
        for (let i = 0; i < allSquare.length; i++) {
            for (let j = 0; j < allSquare[i].length; j++) {
                if ((allSquare[i][j].pieceColor === WHITE_PIECE && !whiteTurn) || (allSquare[i][j].pieceColor === BLACK_PIECE && whiteTurn)) {
                    let attackPiece = allSquare[i][j];
                    let controlledSquares = [];
                    for (let _i = 0; _i < allSquare.length; _i++) {
                        for (let _j = 0; _j < allSquare[_i].length; _j++) {
                            if (pieceMove(_i, _j, allSquare[i][j].x, allSquare[i][j].y, allSquare[i][j].currentPiece, allSquare)) {
                                controlledSquares.push(allSquare[_i][_j]);
                            }
                        }
                    }
                    allControlledSquares.push({
                        attackPiece: attackPiece,
                        controlledSquares: controlledSquares
                    })
                }
            }
        }
        return allControlledSquares;
    }

    changeAttackingPieces(pieces) {
        this.setState({
            attackingPieces: pieces
        })
    }

    emptyAttackingPiecesAndKingControlledSquares() {
        const { attackingPieces, kingControlledSquares } = this.state;
        for (let i = 0; i < attackingPieces.length; i++) {
            attackingPieces.pop(0);
        }
        for (let i = 0; i < kingControlledSquares.length; i++) {
            kingControlledSquares.pop(0);
        }
    }

    checkIfItemControlled(king) {
        const { attackingPieces } = this.state;
        this.emptyAttackingPiecesAndKingControlledSquares();
        for (let i = 0; i < this.controlledSquaresList().length; i++) {
            for (let j = 0; j < this.controlledSquaresList()[i].controlledSquares.length; j++) {
                if (king.x === this.controlledSquaresList()[i].controlledSquares[j].x && king.y === this.controlledSquaresList()[i].controlledSquares[j].y) {
                    attackingPieces.push(this.controlledSquaresList()[i].attackPiece);
                    this.changeAttackingPieces(attackingPieces);
                    this.getDistanceFromAttackToKing(king, attackingPieces);
                    return true;
                }
            }
        }

        return false;
    }

    checkIfCheckKing() {
        const { allSquare, whiteTurn, attackingPieces } = this.state;
        for (let i = 0; i < allSquare.length; i++) {
            for (let j = 0; j < allSquare[i].length; j++) {
                if (allSquare[i][j].currentPiece === KING_W && whiteTurn && this.checkIfItemControlled(allSquare[i][j])) {
                    return "You";
                }
                else {
                    if (allSquare[i][j].currentPiece === KING_B && !whiteTurn && this.checkIfItemControlled(allSquare[i][j])) {

                        return "Com";
                    }
                }
            }
        }
        return "Not";
    }

    //test
    allAIMove(_allSquare) {
        const { whiteTurn } = this.state;
        let allAIMove = [];
        for (let i = 0; i < _allSquare.length; i++) {
            for (let j = 0; j < _allSquare[i].length; j++) {

                if ((_allSquare[i][j].pieceColor === BLACK_PIECE && !whiteTurn) || (_allSquare[i][j].pieceColor === WHITE_PIECE && whiteTurn)) {
                    let pieceToBlock = _allSquare[i][j];
                    for (let _i = 0; _i < _allSquare.length; _i++) {
                        for (let _j = 0; _j < _allSquare[_i].length; _j++) {
                            if (pieceMove(_i, _j, _allSquare[i][j].x, _allSquare[i][j].y, _allSquare[i][j].currentPiece, _allSquare)) {
                                allAIMove.push({
                                    pieceToBlock: pieceToBlock,
                                    move: _allSquare[_i][_j]
                                })
                            }
                        }
                    }
                }
            }
        }
        return allAIMove;
    }

    controlledSquaresList_2(_allSquare) {
        const { whiteTurn } = this.state;
        let allControlledSquares = [];
        for (let i = 0; i < _allSquare.length; i++) {
            for (let j = 0; j < _allSquare[i].length; j++) {
                if ((_allSquare[i][j].pieceColor === WHITE_PIECE && !whiteTurn) || (_allSquare[i][j].pieceColor === BLACK_PIECE && whiteTurn)) {
                    let attackPiece = _allSquare[i][j];
                    let controlledSquares = [];
                    for (let _i = 0; _i < _allSquare.length; _i++) {
                        for (let _j = 0; _j < _allSquare[_i].length; _j++) {
                            if (pieceMove(_i, _j, _allSquare[i][j].x, _allSquare[i][j].y, _allSquare[i][j].currentPiece, _allSquare)) {
                                controlledSquares.push(_allSquare[_i][_j]);
                            }
                        }
                    }
                    allControlledSquares.push({
                        attackPiece: attackPiece,
                        controlledSquares: controlledSquares
                    })
                }
            }
        }
        return allControlledSquares;
    }

    checkIfItemControlled_2(king, _allSquare) {
        const { attackingPieces } = this.state;
        this.emptyAttackingPiecesAndKingControlledSquares();
        const controlledSquaresList_2 = this.controlledSquaresList_2(_allSquare)
        for (let i = 0; i < controlledSquaresList_2.length; i++) {
            for (let j = 0; j < controlledSquaresList_2[i].controlledSquares.length; j++) {
                if (king.x === controlledSquaresList_2[i].controlledSquares[j].x && king.y === controlledSquaresList_2[i].controlledSquares[j].y) {
                    return true;
                }
            }
        }

        return false;
    }

    movePieceForAI(xNew, yNew, xOld, yOld, newPiece, newColor, _allSquare) {
        _allSquare[xNew][yNew].currentPiece = newPiece;
        _allSquare[xNew][yNew].pieceColor = newColor;
        _allSquare[xOld][yOld].currentPiece = '';
        _allSquare[xOld][yOld].pieceColor = '';
    }

    checkIfMovePossibleToEscape(_allSquare) {
        const { allSquare } = this.state;
        const { whiteTurn } = this.state;
        
        let result = false;
        for (let i = 0; i < _allSquare.length; i++) {
            for (let j = 0; j < _allSquare[i].length; j++) {
                if ((_allSquare[i][j].pieceColor === BLACK_PIECE && !whiteTurn) || (_allSquare[i][j].pieceColor === WHITE_PIECE && whiteTurn)) {
                    if (_allSquare[i][j].currentPiece.indexOf("KING") !== -1 && !this.checkIfItemControlled_2(_allSquare[i][j], _allSquare)) {
                        result = true;
                    }
                }
            }
        }
        return result;
    }

    allMoveToEscape_3() {
        const { allSquare } = this.state;
        let _allSquare = JSON.parse(JSON.stringify(allSquare));
        let allMoveToEscape = [];
        const allAIMove = this.allAIMove(allSquare);
        let _allAIMove = JSON.parse(JSON.stringify(allAIMove));
        for (let i = 0; i < _allAIMove.length; i++) {
            this.movePieceForAI(_allAIMove[i].move.x, _allAIMove[i].move.y, _allAIMove[i].pieceToBlock.x, _allAIMove[i].pieceToBlock.y, _allAIMove[i].pieceToBlock.currentPiece, _allAIMove[i].pieceToBlock.pieceColor, _allSquare);
            if (this.checkIfMovePossibleToEscape(_allSquare)) {
                let _a = _allAIMove[i]
                allMoveToEscape.push(_a);
            }
            _allSquare[_allAIMove[i].pieceToBlock.x][_allAIMove[i].pieceToBlock.y].currentPiece = allAIMove[i].pieceToBlock.currentPiece;
            _allSquare[_allAIMove[i].pieceToBlock.x][_allAIMove[i].pieceToBlock.y].pieceColor = allAIMove[i].pieceToBlock.pieceColor;

            _allSquare[_allAIMove[i].move.x][_allAIMove[i].move.y].currentPiece = allAIMove[i].move.currentPiece;
            _allSquare[_allAIMove[i].move.x][_allAIMove[i].move.y].pieceColor = allAIMove[i].move.pieceColor;
        }
        if(allMoveToEscape.length) {
            let randomMove = allMoveToEscape[Math.floor(Math.random() * allMoveToEscape.length)];
            this.movePiece(randomMove.move.x, randomMove.move.y, randomMove.pieceToBlock.x, randomMove.pieceToBlock.y, randomMove.pieceToBlock.currentPiece, randomMove.pieceToBlock.pieceColor);
            this.setState({
                check: "Not"
            })
        }
        else alert("Checkmate!!!")
        return allMoveToEscape;
    }

    kingEscape() {
        this.allMoveToEscape_3();

    }

    choosePieceToMove(pos, pie, pieColor, x, y) {
        const { willMove, allSquare, whiteTurn } = this.state;
        let counts = [1000, 2000, 3000];
        if (((!willMove.ready && pie !== '')
            || (pieColor === willMove.color && pos !== willMove.position && pieColor !== ''))
        ) {
            if (this.checkIfCheckKing() !== "Not") {
                this.defaultPossibleToMove();
                allSquare.forEach((item, xSquare) => {
                    allSquare[xSquare].forEach((item2, ySquare) => {
                        if (pieceMove(xSquare, ySquare, x, y, pie, allSquare) && (pie === KING_W || pie === KING_B)) {
                            allSquare[xSquare][ySquare].possibleToMove = true;
                        }
                    })
                })
            }
            else {
                this.defaultPossibleToMove();
                allSquare.forEach((item, xSquare) => {
                    allSquare[xSquare].forEach((item2, ySquare) => {
                        if (pieceMove(xSquare, ySquare, x, y, pie, allSquare) && pieColor !== item2.pieceColor) {
                            allSquare[xSquare][ySquare].possibleToMove = true;
                        }
                    })
                })
            }
            this.setState({
                willMove: { piece: pie, position: pos, ready: true, color: pieColor, curX: x, curY: y }
            })
        }
        else {
            if (willMove.ready && allSquare[x][y].possibleToMove) {
                this.defaultPossibleToMove();
                this.movePiece(x, y, willMove.curX, willMove.curY, willMove.piece, willMove.color);
                if (whiteTurn) {
                    setTimeout(() => {
                        this.randomAI();
                    }, 1000)
                }
            }

        }

    }


    render() {
        const { allSquare, willMove, whiteTurn } = this.state;
        return (
            <div className="board">
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