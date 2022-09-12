import {BrowserRouter, Switch, Route} from 'react-router-dom'


//page components
import Navbar from './pages/Components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import ThemeSelector from './pages/Components/ThemeSelector';


// styles
import './App.css'
import { useTheme } from './hooks/useTheme';


function App() {

  const {mode}= useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>

      <Navbar />
      <ThemeSelector/>
      
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>

        <Route exact path="/create">
        <Create/>
        </Route>

        <Route exact path="/search">
        <Search/>
        </Route>


        <Route exact path="/recipes/:id">
        <Recipe/>
        </Route>


      </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App
