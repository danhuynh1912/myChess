import { connect } from 'react-redux';
import { addGame } from '../redux/aiGame/actions';
import ChoseLevelAi from '../components/ChoseLevelAi';

const mapStateToProps = (state) => ({
    aiGames: state.aiGame.aiGames
})

const mapDispatchToProps = (dispatch) => ({
    addGame: (item) => {dispatch(addGame(item))}
})

export default connect(mapStateToProps, mapDispatchToProps)(ChoseLevelAi);