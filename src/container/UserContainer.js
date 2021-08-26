import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/actions';
import Users from '../components/Users';

const mapStateToProps = (state) => ({
    users: state.user.user,
    _user: state.user._user,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
        dispatch(fetchUsers());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);