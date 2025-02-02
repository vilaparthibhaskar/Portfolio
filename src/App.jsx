import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/header'
import {About} from './components/About'
import {Education} from './components/Education'
import { Home } from './components/Home'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

function App() {
  const [page, setPage] = useState('Home');
  const [hgt, setHgt] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      let baseHeight = page === 'projects' ? 140 : 100;
      setHgt(window.innerWidth < 1200 ? `${baseHeight * 2}vh` : `${baseHeight}vh`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [page]);

  let display;

  if (page === 'About') {
    display = <About />;
  } else if (page === 'Education') {
    display = <Education />;
  } else if (page === 'Home') {
    display = <Home />;
  } else if (page === 'skills') {
    display = <Skills />;
  } else if (page === 'projects') {
    display = <Projects />;
  } else {
    display = <Home />;
  }

  return (
    <div className='border text-center' style={{backgroundColor:'#1d2d44', height:hgt, width:"100vw"}}>
      <Header setPage={setPage}></Header>
      <div style={{paddingTop:'100px'}}>
        {
          display
        }
      </div>
    </div>
  )
}

export default App
