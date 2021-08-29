import { connect } from 'react-redux';
import { fetchListRequestFriends } from '../redux/friend/actions';
import Requests from '../components/Requests';

const mapStateToProps = (state) => ({
    listRequestFriends: state.listRequestFriends.listRequestFriends,
})

const mapDispatchToProps = (dispatch) => ({
    fetchListRequestFriends: () => {
        dispatch(fetchListRequestFriends());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Requests);