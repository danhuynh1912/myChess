import { connect } from 'react-redux';
import { fetchArticles } from '../redux/articles/actions';
import ArticleAdmin from '../components/ArticleAdmin';

const mapStateToProps = (state) => ({
    articles: state.articles.articles,
})

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: () => {
        dispatch(fetchArticles());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAdmin);