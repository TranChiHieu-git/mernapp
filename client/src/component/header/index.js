import React from 'react';
import {Typography} from "@material-ui/core";
import useStyle from "./style";

function Header(props) {
    const classes = useStyle();
    return (
        <Typography variant="h4" align="center" className={classes.container}>
            Blog
        </Typography>
    );
}

export default Header;