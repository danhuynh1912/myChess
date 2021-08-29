import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/actions';
import Users from '../components/Users';
import {senRequestFriend} from '../redux/user/actions';
import { fetchFriend } from '../redux/friend/actions';
import { fetchListRequestFriends, fetchListReceivedFriends, addReceviedFriends } from '../redux/friend/actions';

const mapStateToProps = (state) => ({
    users: state.user.user,
    _user: state.user._user,
    listRequestFriends: state.listRequestFriends.listRequestFriends,
    friends:  state.listRequestFriends.friends,
    listReceivedFriends: state.listRequestFriends.listReceivedFriends,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
        dispatch(fetchUsers());
    },
    fetchFriend: () => {
        dispatch(fetchFriend());
    },
    fetchListRequestFriends: () => {
        dispatch(fetchListRequestFriends());
    },
    senRequestFriend: (requestId) => {
        dispatch(senRequestFriend(requestId))
    },
    addReceviedFriends: (item) => {
        dispatch(addReceviedFriends(item))
    },
    fecthListReceivedFriend: () => {
       dispatch(fetchListReceivedFriends())
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);