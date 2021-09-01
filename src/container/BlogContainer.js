import { connect } from 'react-redux';
import { addBlog } from '../redux/blog/actions';
import { fetchUsers } from '../redux/user/actions';
import { likeBlog, fetchBlog} from '../redux/blog/actions';
import { disLikeBlog } from '../redux/blog/actions';
import Blog from '../components/Blog';
import { fetchFriend } from '../redux/friend/actions';

const mapStateToProps = (state) => ({
    blogList: state.blog.blogs,
    liked: state.blog.liked,
    users: state.user.user,
    friends:  state.listRequestFriends.friends,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
        dispatch(fetchUsers());
    },
    fetchFriend: () => {
        dispatch(fetchFriend());
    },
    addBlog: (item) => {dispatch(addBlog(item))},
    disLikeBlog: (index) => {dispatch(disLikeBlog(index))},
    likeBlog: (item) => {dispatch(likeBlog(item))},
    fetchBlog: () => {
        debugger;
        dispatch(fetchBlog())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);