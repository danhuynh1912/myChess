import { connect } from 'react-redux';
import { addBlog } from '../redux/blog/actions';
import { likeBlog } from '../redux/blog/actions';
import { disLikeBlog } from '../redux/blog/actions';
import Blog from '../components/Blog';

const mapStateToProps = (state) => ({
    blogList: state.blog.blogs,
    liked: state.blog.liked
})

const mapDispatchToProps = (dispatch) => ({
    addBlog: (item) => {dispatch(addBlog(item))},
    disLikeBlog: (index) => {dispatch(disLikeBlog(index))},
    likeBlog: (item) => {dispatch(likeBlog(item))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);