import { connect } from 'react-redux';
import { fetchLessons } from '../redux/lesson/actions';
import Lessons from '../components/Lesson';

const mapStateToProps = (state) => ({
    lessons: state.lessons.lessons,
})

const mapDispatchToProps = (dispatch) => ({
    fetchLessons: () => {
        dispatch(fetchLessons());
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Lessons);