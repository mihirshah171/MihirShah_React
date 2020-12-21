import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Divider, Toolbar, IconButton, Typography, Badge, MenuItem, Menu } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter, NavLink } from "react-router-dom";
import styles from './Header.module.css';
import API from '../../Util/API';

const useStyles = makeStyles((theme) => ({
    title: {
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Header = (props) => {
    console.log(props)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const HandleLogout = () => {
        // let token = localStorage.getItem("access_token")
        // API.post("users/logout", { headers: { "Authorization": `Bearer ${token}` } })
        //     .then((res) => {
        localStorage.clear("access_token");
        localStorage.clear("access_userId");
        API.defaults.headers.common['Authorization'] = "";
        handleMenuClose()
        props.history.push("/login");
        // })
        // .catch((err) => alert(err));
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <NavLink to={{ pathname: props.match.url + 'u' }} className={styles.Nav}>
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            </NavLink>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={HandleLogout}>Log Out</MenuItem>
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {
                localStorage.getItem("access_token") ?
                    <div>
                        <NavLink to={{ pathname: props.match.url + 'inbox' }} className={styles.Nav}>
                            <MenuItem>
                                <IconButton aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <p>Messages</p>
                            </MenuItem>
                        </NavLink>
                        <Divider />
                        <MenuItem onClick={handleProfileMenuOpen}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <p>Profile</p>
                        </MenuItem>
                    </div>
                    :
                    <div>
                        <>
                            <MenuItem>
                                <NavLink to={{ pathname: props.match.url + 'signup' }} className={styles.Nav}>
                                    SIGNUP
                                </NavLink>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <NavLink to={{ pathname: props.match.url + 'login' }} className={styles.Nav}>
                                    LOGIN
                                </NavLink>
                            </MenuItem>
                        </>
                    </div>
            }
        </Menu>
    );

    return (
        <div className={styles.Grow}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <NavLink to={{ pathname: props.match.url }} className={styles.Nav}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            React-Material-UI-Demo
                        </Typography>
                    </NavLink>
                    <div className={styles.Grow} />
                    <div className={classes.sectionDesktop}>
                        {
                            localStorage.getItem("access_token") ?
                                <div>
                                    <NavLink to={{ pathname: props.match.url + 'inbox' }} className={styles.Nav}>
                                        <IconButton aria-label="show 4 new mails" color="inherit">
                                            <Badge badgeContent={4} color="secondary">
                                                <MailIcon />
                                            </Badge>
                                        </IconButton>
                                    </NavLink>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </div>
                                :
                                <div>
                                    <Typography>
                                        <NavLink to={{ pathname: props.match.url + 'signup' }} className={styles.Nav}>
                                            SIGNUP
                                        </NavLink>
                                            &nbsp;/&nbsp;
                                        <NavLink to={{ pathname: props.match.url + 'login' }} className={styles.Nav}>
                                            LOGIN
                                        </NavLink>
                                    </Typography>
                                </div>
                        }
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

export default withRouter(Header);