import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Covers from './Components/Covers';
import axios from 'axios';

function App() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [latest, setLatest] = useState([])

  function updateIsExpanded(state){
    setIsExpanded(state)
  }

  useEffect(() =>{
        axios.get('/api/latest')
        .then(res =>{
            setLatest(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
  
  return (
    <>
      <div className={`grid ${isExpanded ? "grid-cols-[240px_2fr]": "grid-cols-[86px_2fr]"} transition-all ease-in-out delay-50  grid-rows-[80px_1fr] font-Nunito h-[100vh] bg-[#F5F6FA] overflow-y-scroll`}>
        <div className='row-span-2'>
          <Sidebar
            isExpanded={isExpanded}
            updateState={updateIsExpanded}
          />
        </div>
        <div className='w-full col-start-2 row-start-1'>
          <Navbar />
        </div>
        <div className='col-start-2 row-start-2 m-[20px]'>
          <h2 className='text-[32px] font-bold mb-[23px]'>Popular</h2>
          <Carousel />
          <div>
            <h2 className='text-[32px] font-bold mb-[23px]'>Latest</h2>
            <div className={`flex flex-wrap ${isExpanded ? "gap-[70px]" : "gap-[120px]"}`}>
              { latest.map((book) =>{
                return (<Covers 
                    key={book.id}
                    id={book.id}
                    cover={book.cover}
                    name={book.name}
                    genre={book.genre}
                />)
              }) }
            </div>
          </div>
        </div>
      </div>      
    </>
  )
}

export default App
