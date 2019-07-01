import { connect } from 'react-redux';

// IMPORT ACTION
import { toggleBelanjaan } from '../actions';

// IMPORT COMPONENT THAT WE WANT TO DISPLAY INTO
import DaftarBelanjaan from '../components/DaftarBelanjaan'

const mapStateToProps = state => ({
    belanjaan: state.belanjaan
});

const mapDispatchToProps = dispatch => ({
    toggleBelanjaan: id => dispatch(toggleBelanjaan(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DaftarBelanjaan);