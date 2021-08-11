import { connect } from "react-redux";
import { finishGame } from '../redux/aiGame/actions';
import TimeCount from "../components/TimeCount";

const mapStateToProps = (state) => ({
    aiGames: state.aiGame.aiGames
})

const mapDispatchToProps = (dispatch) => ({
    finishGame: (item) => {dispatch(finishGame(item))}
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeCount);