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
                var pieceValue = 0;
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
                        pieceValue = 5;
                        break;
                    }
                    case 'b1':
                    case 'g1': {
                        pieceDefault = KNIGHT_W;
                        pieceValue = 3;
                        break;
                    }
                    case 'c1':
                    case 'f1': {
                        pieceDefault = BISHOP_W;
                        pieceValue = 3;
                        break;
                    }
                    case 'e1': {
                        pieceDefault = KING_W;
                        pieceValue = 100;
                        break;
                    }
                    case 'd1': {
                        pieceDefault = QUEEN_W;
                        pieceValue = 9;
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
                        pieceValue = 1;
                        break;
                    }
                    case 'a8':
                    case 'h8': {
                        pieceDefault = ROOK_B;
                        pieceValue = -5;
                        break;
                    }
                    case 'b8':
                    case 'g8': {
                        pieceDefault = KNIGHT_B;
                        pieceValue = -3;
                        break;
                    }
                    case 'c8':
                    case 'f8': {
                        pieceDefault = BISHOP_B;
                        pieceValue = -3;
                        break;
                    }
                    case 'e8': {
                        pieceDefault = KING_B;
                        pieceValue = -100;
                        break;
                    }
                    case 'd8': {
                        pieceDefault = QUEEN_B;
                        pieceValue = -9;
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
                        pieceValue = -1;
                        break;
                    }
                    default: {
                        pieceDefault = '';
                        pieceValue = 0;
                    }
                }
                return { position: position, currentPiece: pieceDefault, pieceColor: color, pieceValue: pieceValue, possibleToMove: false, x: i, y: index }
            })
            squares.push(positions);
        }
        this.setState({
            allSquare: squares
        })
    }

    // componentDidUpdate() {
    //     const { allSquare, whiteTurn } = this.state;
    //     const check = this.checkIfCheckKing(allSquare, whiteTurn);
    //     switch (check) {
    //         case 'You': {
    //             alert("Mày bị chiếu tướng!");
    //             break;
    //         }
    //         case 'Com': {
    //             alert("Máy bị chiếu tướng!");
    //             break;
    //         }
    //     }
    // }

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
        return count !== 0 ? true : false
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
        const { allSquare, whiteTurn } = this.state;
        allSquare.forEach((item, index) => {
            allSquare[index].forEach((item2, index2) => {
                if (((item2.pieceColor === BLACK_PIECE && !whiteTurn) || (item2.pieceColor === WHITE_PIECE && whiteTurn)) && this.checkIfAiPieceHasPossibleMove(item2)) {
                    AIPieces.push(item2);
                }
            })
        })
    }

    allMoveOfAI() {
        const { allSquare } = this.state;
        let _allSquare = JSON.parse(JSON.stringify(allSquare));
        let possibleMovesRandomPiece = [];
        let AIPieces = [];

        this.getAllPossibleAiPieces(AIPieces);
        let _AIPieces = JSON.parse(JSON.stringify(AIPieces));
        for (let n = 0; n < _AIPieces.length; n++) {
            for (let i = 0; i < _allSquare.length; i++) {
                for (let j = 0; j < _allSquare[i].length; j++) {
                    if (pieceMove(i, j, _AIPieces[n].x, _AIPieces[n].y, _AIPieces[n].currentPiece, _allSquare)) {
                        this.movePieceForAI(i, j, _AIPieces[n].x, _AIPieces[n].y, _AIPieces[n].currentPiece, _AIPieces[n].pieceColor, _AIPieces[n].pieceValue, _allSquare);
                        if (this.checkIfMovePossibleToEscape(_allSquare)) {
                            let _allSquare_ = JSON.parse(JSON.stringify(_allSquare));
                            possibleMovesRandomPiece.push({
                                pieceToMove: AIPieces[n],
                                move: allSquare[i][j],
                                board: _allSquare_
                            })
                        }
                        _allSquare[i][j].currentPiece = allSquare[i][j].currentPiece;
                        _allSquare[i][j].pieceColor = allSquare[i][j].pieceColor;
                        _allSquare[i][j].pieceValue = allSquare[i][j].pieceValue;

                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].currentPiece = AIPieces[n].currentPiece;
                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].pieceColor = AIPieces[n].pieceColor;
                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].pieceValue = AIPieces[n].pieceValue;
                    }
                }
            }
        }
        return possibleMovesRandomPiece;
    }

    totalValueBoard(allSquare) {
        let total = 0;
        for (let i = 0; i < allSquare.length; i++) {
            for (let j = 0; j < allSquare[i].length; j++) {
                total += allSquare[i][j].pieceValue;
            }
        }
        return total;
    }

    minValue() {
        let allMoveOfAI = this.allMoveOfAI();
        let minBoard = this.totalValueBoard(allMoveOfAI[0].board);
        let min = allMoveOfAI[0];
        for (let i = 0; i < allMoveOfAI.length; i++) {
            if (this.totalValueBoard(allMoveOfAI[i].board) < minBoard) {
                minBoard = this.totalValueBoard(allMoveOfAI[i].board);
                min = allMoveOfAI[i];
            }
        }
        if (allMoveOfAI.length >= 2) {
            if (this.totalValueBoard(allMoveOfAI[0].board) === this.totalValueBoard(allMoveOfAI[1].board) && this.totalValueBoard(allMoveOfAI[0].board) === minBoard) {
                let randomMove = allMoveOfAI[Math.floor(Math.random() * allMoveOfAI.length)];
                return randomMove
            }
            else {
                return min;
            }
        }
        else {
            return min
        }

    }

    randomAI() {
        const { whiteTurn } = this.state;
        let allMoveOfAI = this.allMoveOfAI2();
        if (!allMoveOfAI.length) {
            alert("Checkmate!!!");
        }
        else {
            // let randomMove = allMoveOfAI[Math.floor(Math.random() * allMoveOfAI.length)];
            let randomMove = this.getBestMove(allMoveOfAI);
            this.movePiece(randomMove.move.x, randomMove.move.y, randomMove.pieceToMove.x, randomMove.pieceToMove.y, randomMove.pieceToMove.currentPiece, randomMove.pieceToMove.pieceColor, randomMove.pieceToMove.pieceValue);
            // this.props.runTime(whiteTurn);
        }
    }

    movePiece(xNew, yNew, xOld, yOld, newPiece, newColor, newValue) {
        const { willMove, allSquare, whiteTurn } = this.state;
        allSquare[xNew][yNew].currentPiece = newPiece;
        allSquare[xNew][yNew].pieceColor = newColor;
        allSquare[xNew][yNew].pieceValue = newValue;
        allSquare[xOld][yOld].currentPiece = '';
        allSquare[xOld][yOld].pieceColor = '';
        allSquare[xOld][yOld].pieceValue = 0;
        willMove.ready = false;
        this.setState({
            allSquare: allSquare,
            whiteTurn: !whiteTurn
        })
        this.props.runTime(whiteTurn);
    }

    movePieceForAI(xNew, yNew, xOld, yOld, newPiece, newColor, newValue, _allSquare) {
        _allSquare[xNew][yNew].currentPiece = newPiece;
        _allSquare[xNew][yNew].pieceColor = newColor;
        _allSquare[xNew][yNew].pieceValue = newValue;
        _allSquare[xOld][yOld].currentPiece = '';
        _allSquare[xOld][yOld].pieceColor = '';
        _allSquare[xOld][yOld].pieceValue = 0;
    }

    controlledSquaresList(_allSquare) {
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

    checkIfItemControlled(king, allSquare) {
        for (let i = 0; i < this.controlledSquaresList(allSquare).length; i++) {
            for (let j = 0; j < this.controlledSquaresList(allSquare)[i].controlledSquares.length; j++) {
                if (king.x === this.controlledSquaresList(allSquare)[i].controlledSquares[j].x && king.y === this.controlledSquaresList(allSquare)[i].controlledSquares[j].y) {
                    return true;
                }
            }
        }

        return false;
    }

    checkIfCheckKing(allSquare, whiteTurn) {
        for (let i = 0; i < allSquare.length; i++) {
            for (let j = 0; j < allSquare[i].length; j++) {
                if (allSquare[i][j].currentPiece === KING_W && whiteTurn && this.checkIfItemControlled(allSquare[i][j], allSquare)) {
                    return "You";
                }
                else {
                    if (allSquare[i][j].currentPiece === KING_B && !whiteTurn && this.checkIfItemControlled(allSquare[i][j], allSquare)) {

                        return "Com";
                    }
                }
            }
        }
        return "Not";
    }

    checkIfMovePossibleToEscape(_allSquare) {                   //check xem có đang bị chiếu tướng ko 
        const { whiteTurn } = this.state;

        let result = false;
        for (let i = 0; i < _allSquare.length; i++) {
            for (let j = 0; j < _allSquare[i].length; j++) {
                if ((_allSquare[i][j].pieceColor === BLACK_PIECE && !whiteTurn) || (_allSquare[i][j].pieceColor === WHITE_PIECE && whiteTurn)) {
                    if (_allSquare[i][j].currentPiece.indexOf("KING") !== -1 && !this.checkIfItemControlled(_allSquare[i][j], _allSquare)) {
                        result = true;
                    }
                }
            }
        }
        return result;
    }

    choosePieceToMove(pos, pie, pieColor, x, y, value) {
        const { willMove, allSquare, whiteTurn } = this.state;
        const { runTime } = this.props
        if (((!willMove.ready && pie !== '')
            || (pieColor === willMove.color && pos !== willMove.position && pieColor !== ''))
        ) {
            let allMove = this.allMoveOfAI();
            this.defaultPossibleToMove();
            this.setState({
                willMove: { piece: pie, position: pos, ready: true, color: pieColor, value: value, curX: x, curY: y }
            })

            allMove.forEach((move) => {
                if (whiteTurn && pos === move.pieceToMove.position) {
                    allSquare.forEach((item, xSquare) => {
                        allSquare[xSquare].forEach((item2, ySquare) => {
                            if (item2.position === move.move.position) {
                                allSquare[xSquare][ySquare].possibleToMove = true;
                            }
                        })
                    })
                }

            })
            this.setState({
                allSquare: allSquare
            })
        }
        else {
            if (willMove.ready && allSquare[x][y].possibleToMove) {
                this.defaultPossibleToMove();
                this.movePiece(x, y, willMove.curX, willMove.curY, willMove.piece, willMove.color, willMove.value);
                
                if (whiteTurn) {
                    setTimeout(() => {
                        this.randomAI();
                    }, 50)
                }
            }

        }

    }

    // minimax
    getBestMove(possibleMovesRandomPiece) {
        let min = possibleMovesRandomPiece[0].maxPlayerMovesValue;
        let results = [];
        let count = 0;
        for (let i = 0; i < possibleMovesRandomPiece.length; i++) {
            if (possibleMovesRandomPiece[i].maxPlayerMovesValue < min) {
                min = possibleMovesRandomPiece[i].maxPlayerMovesValue;
                count++;
            }
        }
        for (let i = 0; i < possibleMovesRandomPiece.length; i++) {
            if (possibleMovesRandomPiece[i].maxPlayerMovesValue === min) {
                results.push(possibleMovesRandomPiece[i]);
            }
        }
        let randomMove = results[Math.floor(Math.random() * results.length)];
        return randomMove;

    }

    allMoveOfAI2() {
        const { allSquare } = this.state;
        let _allSquare = JSON.parse(JSON.stringify(allSquare));
        let possibleMovesRandomPiece = [];
        let AIPieces = [];

        let alphaBeta = [];

        this.getAllPossibleAiPieces(AIPieces);
        let _AIPieces = JSON.parse(JSON.stringify(AIPieces));
        for (let n = 0; n < _AIPieces.length; n++) {
            for (let i = 0; i < _allSquare.length; i++) {
                for (let j = 0; j < _allSquare[i].length; j++) {
                    if (pieceMove(i, j, _AIPieces[n].x, _AIPieces[n].y, _AIPieces[n].currentPiece, _allSquare)) {
                        this.movePieceForAI(i, j, _AIPieces[n].x, _AIPieces[n].y, _AIPieces[n].currentPiece, _AIPieces[n].pieceColor, _AIPieces[n].pieceValue, _allSquare);
                        let _allSquare_ = JSON.parse(JSON.stringify(_allSquare));
                        if (this.checkIfMovePossibleToEscape(_allSquare)) {
                            let a = this.maxValuePlayerMove(this.allPlayerMoves(_allSquare_, alphaBeta));
                            if(a !== false) {
                                alphaBeta.push(a.maxBoard);
                                possibleMovesRandomPiece.push({
                                    pieceToMove: AIPieces[n],
                                    move: allSquare[i][j],
                                    board: _allSquare_,
                                    maxPlayerMovesValue: a.maxBoard,
                                    bestPlayerMove: a.max
                                })
                            }
                        }
                        _allSquare[i][j].currentPiece = allSquare[i][j].currentPiece;
                        _allSquare[i][j].pieceColor = allSquare[i][j].pieceColor;
                        _allSquare[i][j].pieceValue = allSquare[i][j].pieceValue;

                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].currentPiece = AIPieces[n].currentPiece;
                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].pieceColor = AIPieces[n].pieceColor;
                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].pieceValue = AIPieces[n].pieceValue;
                    }
                }
            }
        }
        console.log(possibleMovesRandomPiece);
        return possibleMovesRandomPiece;
    }

    getAllPossiblePlayerPieces(AIPieces, allSquare) {
        allSquare.forEach((item, index) => {
            allSquare[index].forEach((item2, index2) => {
                if (item2.pieceColor === WHITE_PIECE && this.checkIfAiPieceHasPossibleMove(item2)) {
                    AIPieces.push(item2);
                }
            })
        })
    }

    allPlayerMoves(allSquareList, alphaBeta) {
        let _allSquare = JSON.parse(JSON.stringify(allSquareList));
        let possibleMovesPlayerPiece = [];
        let AIPieces = [];

        // console.log(alphaBeta);

        this.getAllPossiblePlayerPieces(AIPieces, allSquareList);
        let _AIPieces = JSON.parse(JSON.stringify(AIPieces));
        for (let n = 0; n < _AIPieces.length; n++) {
            for (let i = 0; i < _allSquare.length; i++) {
                for (let j = 0; j < _allSquare[i].length; j++) {
                    if (pieceMove(i, j, _AIPieces[n].x, _AIPieces[n].y, _AIPieces[n].currentPiece, _allSquare)) {
                        this.movePieceForAI(i, j, _AIPieces[n].x, _AIPieces[n].y, _AIPieces[n].currentPiece, _AIPieces[n].pieceColor, _AIPieces[n].pieceValue, _allSquare);
                        if (this.checkIfMovePossibleToEscape2(_allSquare)) {
                            let _allSquare_ = JSON.parse(JSON.stringify(_allSquare));
                            if(alphaBeta.length >= 1 && this.totalValueBoard(_allSquare_) > alphaBeta[0]) {
                                possibleMovesPlayerPiece = [];
                                break;
                            }
                            else {
                                possibleMovesPlayerPiece.push({
                                    pieceToMove: AIPieces[n],
                                    move: allSquareList[i][j],
                                    board: _allSquare_
                                })
                            }
                        }
                        _allSquare[i][j].currentPiece = allSquareList[i][j].currentPiece;
                        _allSquare[i][j].pieceColor = allSquareList[i][j].pieceColor;
                        _allSquare[i][j].pieceValue = allSquareList[i][j].pieceValue;

                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].currentPiece = AIPieces[n].currentPiece;
                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].pieceColor = AIPieces[n].pieceColor;
                        _allSquare[_AIPieces[n].x][_AIPieces[n].y].pieceValue = AIPieces[n].pieceValue;
                    }
                }
            }
        }
        // console.log('====');
        // console.log(possibleMovesPlayerPiece);
        return possibleMovesPlayerPiece;
    }

    maxValuePlayerMove(allPlayerMoves) {
        if(allPlayerMoves.length === 0) return false;
        else {
            let maxBoard = this.totalValueBoard(allPlayerMoves[0].board);
            let max = allPlayerMoves[0];
            for (let i = 0; i < allPlayerMoves.length; i++) {
                if (this.totalValueBoard(allPlayerMoves[i].board) > maxBoard) {
                    maxBoard = this.totalValueBoard(allPlayerMoves[i].board);
                    max = allPlayerMoves[i];
                }
            }
            return {
                maxBoard: maxBoard,
                max: max
            };
        }
    }

    minValuePlayerMove(values) {
        let min = values[0];
        for (let i = 0; i < values.length; i++) {
            if (values[i] < min) {
                min = values[i];
            }
        }
        return min;
    }

    controlledSquaresList2(_allSquare) {
        const { whiteTurn } = this.state;
        let allControlledSquares = [];
        for (let i = 0; i < _allSquare.length; i++) {
            for (let j = 0; j < _allSquare[i].length; j++) {
                if (_allSquare[i][j].pieceColor === WHITE_PIECE) {
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

    checkIfItemControlled2(king, allSquare) {
        for (let i = 0; i < this.controlledSquaresList2(allSquare).length; i++) {
            for (let j = 0; j < this.controlledSquaresList2(allSquare)[i].controlledSquares.length; j++) {
                if (king.x === this.controlledSquaresList2(allSquare)[i].controlledSquares[j].x && king.y === this.controlledSquaresList(allSquare)[i].controlledSquares[j].y) {
                    return true;
                }
            }
        }

        return false;
    }

    checkIfMovePossibleToEscape2(_allSquare) {
        const { whiteTurn } = this.state;

        let result = false;
        for (let i = 0; i < _allSquare.length; i++) {
            for (let j = 0; j < _allSquare[i].length; j++) {
                if (_allSquare[i][j].pieceColor === WHITE_PIECE) {
                    if (_allSquare[i][j].currentPiece.indexOf("KING") !== -1 && !this.checkIfItemControlled2(_allSquare[i][j], _allSquare)) {
                        result = true;
                    }
                }
            }
        }
        return result;
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
                                check={() => this.checkIfCheckKing(allSquare, whiteTurn)}
                                choosing={willMove}
                                whiteTurn={whiteTurn}
                                choosePieceToMove={() => this.choosePieceToMove(item2.position, item2.currentPiece, item2.pieceColor, x, y, item2.pieceValue)}
                                color={(x % 2 === 0 && y % 2 === 0) || (x % 2 !== 0 && y % 2 !== 0) ? "white" : "black"}
                            />
                        })}
                    </div>

                ))}
            </div>
        )
    }
}