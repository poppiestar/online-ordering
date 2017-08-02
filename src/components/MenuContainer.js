
import { connect } from 'react-redux';
import { addItemToOrder } from '../actions';
import Menu from './Menu';

const mapStateToProps = ({ menus, order }) => ({
    items: menus[order.cuisine]
});

const mapDispatchToProps = (dispatch) => ({
    addItemToOrder: (id) => {
        dispatch(addItemToOrder(id));
    }
});

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuContainer;
