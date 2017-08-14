import {connect} from 'react-redux';
import LinkComponent from '../components/LinkComponent';
import {setFilterAction} from '../actions';
import React from 'react';

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

export default FilterLinkContainer;