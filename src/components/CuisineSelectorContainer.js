
import { connect } from 'react-redux';

import CuisineSelector from './CuisineSelector';

const mapStateToProps = ({ cuisines }) => ({
    options: cuisines
});

const CuisineSelectorContainer = connect(
    mapStateToProps
)(CuisineSelector);

export default CuisineSelectorContainer;
