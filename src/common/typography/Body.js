import React from 'react';
import Typography from '@material-ui/core/Typography';

export const Body = ({ children, color, newlineToBr, ...rest }) => (
  <Typography component="span" color={color} {...rest}>
    {newlineToBr
      ? children
          .toString()
          .split('\n')
          .map((item, key) => (
            <React.Fragment key={key}>
              {item}
              <br />
            </React.Fragment>
          ))
      : children}
  </Typography>
);

Body.defaultProps = {
  color: 'inherit',
};

export default Body;
