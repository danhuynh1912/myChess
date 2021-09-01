import { connect } from 'react-redux';
import { fetchListRequestFriends, acceptFriend } from '../redux/friend/actions';
import Requests from '../components/Requests';

const mapStateToProps = (state) => ({
    listRequestFriends: state.listRequestFriends.listRequestFriends,
})

const mapDispatchToProps = (dispatch) => ({
    fetchListRequestFriends: () => {
        dispatch(fetchListRequestFriends());
    },
    acceptFriend: (id) => {
        debugger;
        dispatch(acceptFriend(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Requests);