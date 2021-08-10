import React from 'react'
import { AppBar, Avatar, Drawer, Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { List } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router'
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
    
    
})

export default function Layout({ children }) {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>

        <AppBar 
        className={classes.appbar}
        elevation={0}>
            <Toolbar>
                <Typography className={classes.date}>
                  Today is the { format(new Date(), 'do MMMM Y') }
                </Typography>
                <Typography>
                    Mario
                </Typography>
                <Avatar src='/mario.png' className={classes.avatar} />
            </Toolbar>
        </AppBar>

            <Drawer 
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}>
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Material App
                    </Typography>
                </div>
                <List>
                { menuItems.map(item => (
                    <ListItem
                    button 
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    className={location.pathname == item.path ? classes.active : null}>
                        <ListItemIcon>{ item.icon }</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
                
            </List>
            </Drawer>

            

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
              { children }
            </div>
            
        </div>
    )
}