import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import RandomContext from './context/RandomContext';
import { useEffect, useContext } from 'react';
import axios from 'axios';

const App = () => {
  const { setCount } = useContext(RandomContext)

  useEffect(() => {
    const getCount = async () => {
      try {
        const {data} = await axios.get('http://localhost:6001/')
        setCount(data.viewCount)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCount()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route path='/*' element={<h1>Error</h1>}/>
    </Routes>
  )
};

export default App;
