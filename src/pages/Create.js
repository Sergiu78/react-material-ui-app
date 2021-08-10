import { Button, Container, FormControl, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core'
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  },
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: 'block'
  }
})

export default function Create() {

  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title == '') {
      setTitleError(true)
    }
    if(details == '') {
      setDetailsError(true)
    }
    if(title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }
    ).then(() => history.push('/'))

    }
  } 

  return (
    <Container>
      <Typography
      className={classes.title}
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom>
         Create page
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
        onChange={(e) => setTitle(e.target.value)}
        className={classes.field}
        label="Note Title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}/>

         <TextField 
         onChange={(e) => setDetails(e.target.value)}
        className={classes.field}
        label="Details"
        variant="outlined"
        color="secondary"
        multiline
        rows={4}
        fullWidth
        required
        error={detailsError}/>

      <FormControl className={classes.field}>
      <FormLabel>Note More</FormLabel>
       <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value="money" control={<Radio />} label="Money" />
        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
       </RadioGroup>
      </FormControl>
        
       

      <Button 
      className={classes.btn}
      type="submit" 
      color="secondary"
      variant="contained"
      endIcon={<ArrowForwardIosIcon />}
      >
          Submit
      </Button>
      </form>

     
      
    </Container>
  )
}
