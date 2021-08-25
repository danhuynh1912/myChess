import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/actions';
import Registation from '../components/Registation';

const mapStateToProps = (state) => ({
    users: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
        dispatch(fetchUsers());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Registation);