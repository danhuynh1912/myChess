import { ROOK_B, KNIGHT_B, BISHOP_B, PAWN_B, QUEEN_B, KING_B } from '../Piece';
import { ROOK_W, KNIGHT_W, BISHOP_W, PAWN_W, QUEEN_W, KING_W } from '../Piece';

export const pieceMove = (x, y, curX, curY, pie, allSquare) => {
    let possiblePoints = [];
    switch (pie) {
        case ROOK_W:
        case ROOK_B: {
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX + i] === undefined 
                || (allSquare[curX + i][curY].currentPiece && allSquare[curX + i][curY].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX + i - 1][curY].currentPiece && allSquare[curX + i - 1][curY].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX + i, b: curY });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX - i] === undefined 
                || (allSquare[curX - i][curY].currentPiece && allSquare[curX - i][curY].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX - i + 1][curY].currentPiece && allSquare[curX - i + 1][curY].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX - i, b: curY });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX][curY + i] === undefined 
                || (allSquare[curX][curY + i].currentPiece && allSquare[curX][curY + i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX][curY + i - 1].currentPiece && allSquare[curX][curY + i - 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX, b: curY + i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX][curY - i] === undefined 
                || (allSquare[curX][curY - i].currentPiece && allSquare[curX][curY - i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX][curY - i + 1].currentPiece && allSquare[curX][curY - i + 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX, b: curY - i });
            }
            break;
        }
        case KNIGHT_B:
        case KNIGHT_W: {
            possiblePoints.push({ a: curX + 2, b: curY + 1 });
            possiblePoints.push({ a: curX + 2, b: curY - 1 });
            possiblePoints.push({ a: curX - 2, b: curY + 1 });
            possiblePoints.push({ a: curX - 2, b: curY - 1 });
            possiblePoints.push({ a: curX + 1, b: curY + 2 });
            possiblePoints.push({ a: curX - 1, b: curY + 2 });
            possiblePoints.push({ a: curX + 1, b: curY - 2 });
            possiblePoints.push({ a: curX - 1, b: curY - 2 });
            break;
        }
        case BISHOP_B:
        case BISHOP_W: {
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX + i] === undefined 
                || allSquare[curX + i][curY + i] === undefined 
                || (allSquare[curX + i][curY + i].currentPiece && allSquare[curX + i][curY + i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX + i - 1][curY + i - 1].currentPiece && allSquare[curX + i - 1][curY + i - 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX + i, b: curY + i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX - i] === undefined 
                || allSquare[curX - i][curY - i] === undefined 
                || (allSquare[curX - i][curY - i].currentPiece && allSquare[curX - i][curY - i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX - i + 1][curY - i + 1].currentPiece && allSquare[curX - i + 1][curY - i + 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX - i, b: curY - i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX + i] === undefined 
                || allSquare[curX + i][curY - i] === undefined 
                || (allSquare[curX + i][curY - i].currentPiece && allSquare[curX + i][curY - i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX + i - 1][curY - i + 1].currentPiece && allSquare[curX + i - 1][curY - i + 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX + i, b: curY - i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX - i] === undefined 
                || allSquare[curX - i][curY + i] === undefined 
                || (allSquare[curX - i][curY + i].currentPiece && allSquare[curX - i][curY + i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX - i + 1][curY + i - 1].currentPiece && allSquare[curX - i + 1][curY + i - 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX - i, b: curY + i });
            }
            break;
        }
        case PAWN_W: {
            if (!(allSquare[curX - 1] === undefined || allSquare[curX - 1][curY].currentPiece)) {
                if (curX === 6 && !(allSquare[curX - 2][curY].currentPiece)) {
                    possiblePoints.push({ a: curX - 2, b: curY });
                }
                possiblePoints.push({ a: curX - 1, b: curY });
            }
            if (!(allSquare[curX - 1] === undefined
                || allSquare[curX - 1][curY - 1] === undefined
                || !allSquare[curX - 1][curY - 1].currentPiece
                || allSquare[curX - 1][curY - 1].pieceColor === allSquare[curX][curY].pieceColor)) possiblePoints.push({ a: curX - 1, b: curY - 1 });

            if (!(allSquare[curX - 1] === undefined
                || allSquare[curX - 1][curY + 1] === undefined
                || !allSquare[curX - 1][curY + 1].currentPiece
                || allSquare[curX - 1][curY + 1].pieceColor === allSquare[curX][curY].pieceColor)) possiblePoints.push({ a: curX - 1, b: curY + 1 });

            break;
        }
        case PAWN_B: {
            if (!(allSquare[curX + 1] === undefined || allSquare[curX + 1][curY].currentPiece)) {
                if (curX === 1 && !(allSquare[curX + 2][curY].currentPiece)) {
                    possiblePoints.push({ a: curX + 2, b: curY });
                }
                possiblePoints.push({ a: curX + 1, b: curY });
            }

            if (!(allSquare[curX + 1] === undefined
                || allSquare[curX + 1][curY + 1] === undefined
                || !allSquare[curX + 1][curY + 1].currentPiece
                || allSquare[curX + 1][curY + 1].pieceColor === allSquare[curX][curY].pieceColor)) possiblePoints.push({ a: curX + 1, b: curY + 1 });

            if (!(allSquare[curX + 1] === undefined
                || allSquare[curX + 1][curY - 1] === undefined
                || !allSquare[curX + 1][curY - 1].currentPiece
                || allSquare[curX + 1][curY - 1].pieceColor === allSquare[curX][curY].pieceColor)) possiblePoints.push({ a: curX + 1, b: curY - 1 });
            break;
        }
        case QUEEN_B:
        case QUEEN_W: {
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX + i] === undefined 
                || (allSquare[curX + i][curY].currentPiece && allSquare[curX + i][curY].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX + i - 1][curY].currentPiece && allSquare[curX + i - 1][curY].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX + i, b: curY });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX - i] === undefined 
                || (allSquare[curX - i][curY].currentPiece && allSquare[curX - i][curY].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX - i + 1][curY].currentPiece && allSquare[curX - i + 1][curY].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX - i, b: curY });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX][curY + i] === undefined 
                || (allSquare[curX][curY + i].currentPiece && allSquare[curX][curY + i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX][curY + i - 1].currentPiece && allSquare[curX][curY + i - 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX, b: curY + i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX][curY - i] === undefined 
                || (allSquare[curX][curY - i].currentPiece && allSquare[curX][curY - i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX][curY - i + 1].currentPiece && allSquare[curX][curY - i + 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX, b: curY - i });
            }


            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX + i] === undefined 
                || allSquare[curX + i][curY + i] === undefined 
                || (allSquare[curX + i][curY + i].currentPiece && allSquare[curX + i][curY + i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX + i - 1][curY + i - 1].currentPiece && allSquare[curX + i - 1][curY + i - 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX + i, b: curY + i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX - i] === undefined 
                || allSquare[curX - i][curY - i] === undefined 
                || (allSquare[curX - i][curY - i].currentPiece && allSquare[curX - i][curY - i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX - i + 1][curY - i + 1].currentPiece && allSquare[curX - i + 1][curY - i + 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX - i, b: curY - i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX + i] === undefined 
                || allSquare[curX + i][curY - i] === undefined 
                || (allSquare[curX + i][curY - i].currentPiece && allSquare[curX + i][curY - i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX + i - 1][curY - i + 1].currentPiece && allSquare[curX + i - 1][curY - i + 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX + i, b: curY - i });

            }
            for (let i = 1; i <= 7; i++) {
                if (allSquare[curX - i] === undefined 
                || allSquare[curX - i][curY + i] === undefined 
                || (allSquare[curX - i][curY + i].currentPiece && allSquare[curX - i][curY + i].pieceColor === allSquare[curX][curY].pieceColor)
                || (allSquare[curX - i + 1][curY + i - 1].currentPiece && allSquare[curX - i + 1][curY + i - 1].pieceColor !== allSquare[curX][curY].pieceColor)) break;
                else possiblePoints.push({ a: curX - i, b: curY + i });
            }

            break;
        }
        case KING_B:
        case KING_W: {
            if (!(allSquare[curX + 1] === undefined 
                || (allSquare[curX + 1][curY].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX + 1, b: curY });
            if (!(allSquare[curX - 1] === undefined 
                || (allSquare[curX - 1][curY].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX - 1, b: curY });
            if (!(allSquare[curX][curY + 1] === undefined 
                || (allSquare[curX][curY + 1].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX, b: curY + 1 });
            if (!(allSquare[curX][curY - 1] === undefined 
                || (allSquare[curX][curY - 1].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX, b: curY - 1 });

            if (!(allSquare[curX + 1] === undefined 
                || allSquare[curX + 1][curY + 1] === undefined 
                || (allSquare[curX + 1][curY + 1].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX + 1, b: curY + 1 });
            if (!(allSquare[curX - 1] === undefined 
                || allSquare[curX - 1][curY - 1] === undefined 
                || (allSquare[curX - 1][curY - 1].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX - 1, b: curY - 1 });
            if (!(allSquare[curX + 1] === undefined 
                || allSquare[curX + 1][curY - 1] === undefined 
                || (allSquare[curX + 1][curY - 1].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX + 1, b: curY - 1 });
            if (!(allSquare[curX - 1] === undefined 
                || allSquare[curX - 1][curY + 1] === undefined 
                || (allSquare[curX - 1][curY + 1].pieceColor === allSquare[curX][curY].pieceColor))) possiblePoints.push({ a: curX - 1, b: curY + 1 });

            break;
        }
        default: break;
    }
    for (let i = 0; i < possiblePoints.length; i++) {
        if (possiblePoints[i].a === x && possiblePoints[i].b === y) return true
    }
    return false
}