import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton'
import CardContent from '@material-ui/core/CardContent';
import { DeleteOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography'
import { Avatar, makeStyles } from '@material-ui/core';
import { brown, green, pink, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if(note.category == 'work'){
                return yellow[700]
            }
            if(note.category == 'money'){
                return green[500]
            }
            if(note.category == 'todos'){
                return pink[500]
            }
            
             return brown[700]
            
        }
    }
})

export default function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note)

    return (
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        <Avatar className={classes.avatar}>
                            { note.category[0].toUpperCase() }
                        </Avatar>
                    }
                     action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                          <DeleteOutlined />
                        </IconButton> } 
                        title={note.title}
                        subheader={note.category}
                        />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        { note.details}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
}