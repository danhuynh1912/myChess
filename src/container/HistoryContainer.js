import { connect } from 'react-redux';
import { fetchHistory } from '../redux/history/actions';
import HistoryPage from '../components/HistoryPage';

const mapStateToProps = (state) => ({
    history: state.history.history,
})

const mapDispatchToProps = (dispatch) => ({
    fetchHistory: () => {
        dispatch(fetchHistory());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);