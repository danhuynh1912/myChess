import { connect } from 'react-redux';
import { fetchLessons } from '../redux/lesson/actions';
import LessonAdmin from '../components/LessonAdmin';

const mapStateToProps = (state) => ({
    lessons: state.lessons.lessons,
})

const mapDispatchToProps = (dispatch) => ({
    fetchLessons: () => {
        dispatch(fetchLessons());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonAdmin);