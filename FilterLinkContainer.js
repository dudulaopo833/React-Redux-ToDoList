import {connect} from 'react-redux';
import LinkComponent from '../compoents/LinkComponent';
import {setFilterAction} from '../actions';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setFilterAction(ownProps.filter));
		}
	}
};

const FilterLinkContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LinkComponent);