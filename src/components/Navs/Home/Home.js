import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CssBaseline, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grow } from '@material-ui/core';
import Content from '../../Content/Content'
import styles from './Home.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(8),
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <main className={classes.content}>
                <CssBaseline />
                <div className={styles.Cards}>
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(true ? { timeout: 2000 } : {})}
                    >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                            </Button>
                                <Button size="small" color="primary">
                                    Learn More
                            </Button>
                            </CardActions>
                        </Card>
                    </Grow>
                </div>
                <Content />
            </main>
        </>
    );
}
