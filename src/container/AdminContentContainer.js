import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/actions';
import AdminContent from '../components/AdminContent';
import { fetchLessons } from '../redux/lesson/actions';
import { fetchArticles } from '../redux/articles/actions';

const mapStateToProps = (state) => ({
    users: state.user.user,
    _user: state.user._user,
    articles: state.articles.articles,
    lessons: state.lessons.lessons,
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
        dispatch(fetchUsers());
    },
    fetchLessons: () => {
        dispatch(fetchLessons());
    },
    fetchArticles: () => {
        dispatch(fetchArticles());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContent);