import { connect } from 'react-redux';
import { fetchFriend, unfriend } from '../redux/friend/actions';
import Friends from '../components/Friends';

const mapStateToProps = (state) => ({
    friends:  state.listRequestFriends.friends,
})

const mapDispatchToProps = (dispatch) => ({
    fetchFriend: () => {
        dispatch(fetchFriend());
    },
    unfriend: (id) => {
        dispatch(unfriend(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Friends);