import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './components/Layout'
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

const theme = unstable_createMuiStrictModeTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
      
    </Router>
    </ThemeProvider>
    
  );
}

export default App;
