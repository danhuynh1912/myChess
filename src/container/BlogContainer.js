import { connect } from 'react-redux';
import { addBlog } from '../redux/blog/actions';
import Blog from '../components/Blog';

const mapStateToProps = (state) => ({
    blogList: state.blog.blogs
})

const mapDispatchToProps = (dispatch) => ({
    addBlog: (item) => {dispatch(addBlog(item))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);