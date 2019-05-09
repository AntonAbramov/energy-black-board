import React, { Component, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './spinner.css';

class Spinner extends Component {
  renderSpinnerWithChildren = (children, size, color, className) => (
    <div className={`spinner spinner--with-children ${className}`}>
      <CircularProgress className="spinner__progress spinner__progress--vertical-aligned" size={size} color={color} />
      {children}
    </div>
  );

  renderSpinner = (size, color, className) => (
    <div className={`spinner ${className}`}>
      <CircularProgress className="spinner__progress" size={size} color={color} />
    </div>
  );

  renderChildren = children => <Fragment>{children}</Fragment>;

  renderEmptySpinner = children => {
    // eslint-disable-next-line no-console
    console.warn(`You are using Spinner without 'loading' property.\n Check if you need really it...`);
    return <Fragment>{children}</Fragment>;
  };

  render() {
    const { loading, children, size, color, className } = this.props;

    const isLoadingParamExists = typeof loading === 'boolean';

    if (isLoadingParamExists) {
      if (loading && children) {
        return this.renderSpinnerWithChildren(children, size, color, className);
      }
      if (!loading && children) {
        return this.renderChildren(children);
      }
      if (loading && !children) {
        return this.renderSpinner(size, color, className);
      }
    } else if (!isLoadingParamExists && children) {
      return this.renderEmptySpinner(children);
    }
    return null;
  }
}

Spinner.defaultProps = {
  size: 25,
  color: 'primary',
  children: null,
  className: '',
};

export default Spinner;
