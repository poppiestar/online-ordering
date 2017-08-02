
import { connect } from 'react-redux';
import { addItemToMenu } from '../actions';
import Menu from './Menu';

const mapStateToProps = ({ menus, order }) => ({
    items: menus[order.cuisine]
});

const mapDispatchToProps = (dispatch) => ({
    addItemToMenu: (id) => {
        dispatch(addItemToMenu(id));
    }
});

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;
