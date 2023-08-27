import './app.css'
import Home from './featrues/home/Home'
import Playlist from './featrues/PlayList/PlayList'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Search from './featrues/Search/Search';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Playlist' element={<Playlist/>}/>
        <Route path='Search' element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
