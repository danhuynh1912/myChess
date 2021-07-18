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

    componentDidUpdate() {
        // switch(this.checkIfCheckKing()) {
        //     case "You": {
        //         setTimeout(() => {
        //             alert("You are checked");
        //         }, 1000);
        //         break
        //     }
        //     case "Com": {
        //         setTimeout(() => {
        //             alert("Computer are checked");
        //         }, 1000);
        //         break;
        //     }
        // }
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
        const { willMove, allSquare, whiteTurn, attackingPieces, kingControlledSquares } = this.state;
        let possibleMovesRandomPiece = [];
        let AIPieces = [];
        let AIPossiblePiecesToMove = [];
        let randomPiece = '';
        let randomMove = '';
        if(this.checkIfCheckKing() === "Not") {
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
            console.log("ATTACKKKKKK");
            console.log(attackingPieces);
            console.log("DISTANCE");
            console.log(kingControlledSquares);
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
        console.log("<><><>><>><><><><");
        console.log(allControlledSquares);
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
        const { attackingPieces, kingControlledSquares } = this.state;
        this.emptyAttackingPiecesAndKingControlledSquares();
        for (let i = 0; i < this.controlledSquaresList().length; i++) {
            for(let j = 0; j < this.controlledSquaresList()[i].controlledSquares.length; j++) {
                if(king.x === this.controlledSquaresList()[i].controlledSquares[j].x && king.y === this.controlledSquaresList()[i].controlledSquares[j].y) {
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
                    if(allSquare[i][j].currentPiece === KING_B && !whiteTurn && this.checkIfItemControlled(allSquare[i][j])) {
                        
                        return "Com";
                    }
                }
            }
        }
        return "Not";
    }

    getDistanceFromAttackToKing(king, attack) {
        const { allSquare, kingControlledSquares } = this.state;
        for(let j=0; j<attack.length; j++) {
            if(attack[j].currentPiece.indexOf("ROOK") !== -1) {
                if(king.x === attack[j].x) {
                    if(king.y > attack[j].y) {
                        for(let i=attack[j].y; i<=7; i++) {
                            kingControlledSquares.push({
                                attack: attack[j],
                                item: allSquare[king.x][i]
                            })
                        }
                    }
                    else {
                        for(let i=attack[j].y; i>=0; i--) {
                            kingControlledSquares.push({
                                attack: attack[j],
                                item: allSquare[king.x][i]
                            })
                        }
                    }
                }
                if(king.y === attack[j].y) {
                    if(king.x > attack[j].x) {
                        for(let i=attack[j].x; i<=7; i++) {
                            kingControlledSquares.push({
                                attack: attack[j],
                                item: allSquare[i][king.y]
                            })
                        }
                    }
                    else {
                        for(let i=attack[j].x; i>=0; i--) {
                            kingControlledSquares.push({
                                attack: attack[j],
                                item: allSquare[i][king.y]
                            })
                        }
                    }
                }
            }
        }
        this.setState({
            kingControlledSquares: kingControlledSquares
        })
    }

    moveToBlock() {
        const { allSquare, whiteTurn, check, kingControlledSquares } = this.state;
        let allMoveToBlock = [];
        if(check !== "Not" && !whiteTurn) {
            for (let i = 0; i < allSquare.length; i++) {
                for (let j = 0; j < allSquare[i].length; j++) {
                    if ((allSquare[i][j].pieceColor === BLACK_PIECE && !whiteTurn) || (allSquare[i][j].pieceColor === WHITE_PIECE && whiteTurn)) {
                        if(allSquare[i][j].currentPiece.indexOf("KING") === -1) {
                            let pieceToBlock = allSquare[i][j];
                            for (let _i = 0; _i < allSquare.length; _i++) {
                                for (let _j = 0; _j < allSquare[_i].length; _j++) {
                                    if (pieceMove(_i, _j, allSquare[i][j].x, allSquare[i][j].y, allSquare[i][j].currentPiece, allSquare)) {
                                        for(let k = 0; k<kingControlledSquares.length; k++) {
                                            if(kingControlledSquares[k].item.currentPiece.indexOf("KING") !== -1) break;
                                            else {
                                                if(_i === kingControlledSquares[k].item.x && _j === kingControlledSquares[k].item.y) {
                                                    console.log("TESTTTTTTTTT123 " + _i + ", " + _j);
                                                    allMoveToBlock.push({
                                                        pieceToBlock: pieceToBlock,
                                                        move: allSquare[_i][_j]
                                                    })
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            let pieceToBlock = allSquare[i][j];
                            for (let _i = 0; _i < allSquare.length; _i++) {
                                for (let _j = 0; _j < allSquare[_i].length; _j++) {
                                    if (pieceMove(_i, _j, allSquare[i][j].x, allSquare[i][j].y, allSquare[i][j].currentPiece, allSquare)) {
                                        let count = 0;
                                        for(let k = 0; k<kingControlledSquares.length; k++) {
                                            if(_i === kingControlledSquares[k].item.x && _j === kingControlledSquares[k].item.y) {
                                                count++;
                                            }
                                        }
                                        if(count === 0) {
                                            allMoveToBlock.push({
                                                pieceToBlock: pieceToBlock,
                                                move: allSquare[_i][_j]
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log("TESTTTTTTTTT");
        console.log(allMoveToBlock);
        console.log(allMoveToBlock[Math.floor(Math.random() * allMoveToBlock.length)]);
        return allMoveToBlock;
        // return allMoveToBlock[Math.floor(Math.random() * allMoveToBlock.length)];
    }

    kingEscape() {
        let actionToBlock = this.moveToBlock()[Math.floor(Math.random() * this.moveToBlock().length)];
        this.movePiece(actionToBlock.move.x, actionToBlock.move.y, actionToBlock.pieceToBlock.x, actionToBlock.pieceToBlock.y, actionToBlock.pieceToBlock.currentPiece, actionToBlock.pieceToBlock.pieceColor);
    }

    choosePieceToMove(pos, pie, pieColor, x, y) {
        const { willMove, allSquare, whiteTurn } = this.state;
        let counts = [1000, 2000, 3000];
        if (((!willMove.ready && pie !== '')
        || (pieColor === willMove.color && pos !== willMove.position && pieColor !== ''))
        ) {
            if(this.checkIfCheckKing() !== "Not") {
                // alert("You are checked");
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
                allSquare.forEach((item, xSquare) => {
                    allSquare[xSquare].forEach((item2, ySquare) => {
                        if ((pieceMove(xSquare, ySquare, x, y, pie, allSquare) && pie !== KNIGHT_B && pie !== KNIGHT_W)
                            || (pieceMove(xSquare, ySquare, x, y, pie, allSquare) && (pie === KNIGHT_B || pie === KNIGHT_W) && pieColor !== item2.pieceColor)) {
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
                if(whiteTurn) {
                    setTimeout(() => {
                        this.randomAI();
                    // }, counts[Math.floor(Math.random() * counts.length)])
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