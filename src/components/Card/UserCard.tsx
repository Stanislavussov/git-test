import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Avatar, Box} from "@material-ui/core";

import {ItemsType} from "../../App";

type PropsType = {
    users: ItemsType[]
}

const useStyles = makeStyles({
    root: {
        minWidth: 500,
        margin: 10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const UserCard = (props: PropsType) => {

    const classes = useStyles();

    return (
        <>
            {
                props.users.map((u) => {
                    return (
                        <Card className={classes.root}>
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            {u.name}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                            <Button color="secondary">Open</Button>
                                    </CardActions>
                                </Box>
                                <CardContent>
                                    <Avatar alt="Remy Sharp"
                                            src={!u.photos.small ? "https://abakuweb.azurewebsites.net/images/profile_placeholder.png" : u.photos.small}/>
                                </CardContent>
                            </Box>
                        </Card>
                    )
                })
            }
        </>
    );
};


export {
    UserCard
}

