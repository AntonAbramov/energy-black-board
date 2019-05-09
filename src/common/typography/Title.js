import React from "react";
import Typography from "@material-ui/core/Typography";

export const Title = ({ color, children, ...rest }) => (
  <Typography variant="h3" color={color} {...rest}>
    {children}
  </Typography>
);

Title.defaultProps = {
  color: "inherit"
};

export default Title;
