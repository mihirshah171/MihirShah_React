import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import style from './Footer.module.css'

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    }
}));

export default function BottomAppBar() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar className={style.Copyright}>
                    <small>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</small>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
