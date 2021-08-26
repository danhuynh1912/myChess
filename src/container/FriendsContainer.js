import { connect } from 'react-redux';
import { fetchFriend } from '../redux/friend/actions';
import Friends from '../components/Friends';

const mapStateToProps = (state) => ({
    friends:  state.listRequestFriends.friends,
})

const mapDispatchToProps = (dispatch) => ({
    fetchFriend: () => {
        dispatch(fetchFriend());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Friends);