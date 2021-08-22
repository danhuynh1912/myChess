import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/actions';
import { getUser } from '../redux/user/actions';
import Login from '../components/Login';

const mapStateToProps = (state) => ({
    users: state.user.user,
    _user: state.user._user,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
        dispatch(fetchUsers());
    },
    getUser: (item) => {
        dispatch(getUser(item));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);