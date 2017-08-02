
import { connect } from 'react-redux';
import { selectCuisine } from '../actions';
import CuisineSelector from './CuisineSelector';

const mapStateToProps = ({ cuisines }) => ({
    options: cuisines
});

const mapDispatchToProps = (dispatch) => ({
    selectCuisine: (e) => {
        dispatch(selectCuisine(parseInt(e.currentTarget.value)));
    }
});

const CuisineSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CuisineSelector);

export default CuisineSelectorContainer;
