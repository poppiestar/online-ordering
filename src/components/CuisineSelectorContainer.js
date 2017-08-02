
import { connect } from 'react-redux';

import CuisineSelector from './CuisineSelector';

const mapStateToProps = ({ cuisines }) => ({
    options: cuisines
});

const mapDispatchToProps = (dispatch) => ({
    selectCuisine: (e) => {
        console.log('have selected something: ', e.currentTarget.value);
    }
});

const CuisineSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CuisineSelector);

export default CuisineSelectorContainer;
