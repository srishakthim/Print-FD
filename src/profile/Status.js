import React from 'react';
import { Grid, Card, CardMedia } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import print from "../assets/img1.png";
import status from "../assets/img2.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: theme.spacing(2),
    },
    card: {
        height: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    statusCard: {
        backgroundColor: '#CDCDCD', // Set your desired color for the status card
    },
    printCard: {
        backgroundColor: '#014550', // Set your desired color for the print card
    },
}));

const Status = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleStatusClick = () => {
        navigate('/dashboard-copy');
    }

    const handlePrintClick = () => {
      navigate('/');
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                <Card className={`${classes.card} ${classes.statusCard}`}>
                        <CardMedia
                            component="img"
                            alt="Status Image"
                            height={200}
                            style={{ width: 200 }}
                            image={status}
                            title="Status Image"
                            onClick={handleStatusClick}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                <Card className={`${classes.card} ${classes.printCard}`}>
                        <CardMedia
                            component="img"
                            alt="Print Image"
                            height={200}
                            style={{ width: 200 }}
                            image={print}
                            title="Print Image"
                            onClick={handlePrintClick}
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Status;
