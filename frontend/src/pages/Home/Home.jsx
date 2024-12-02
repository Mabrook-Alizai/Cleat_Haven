import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import CleatDisplay from '../../components/CleatDisplay/CleatDisplay'

const Home = () => {
  
  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <CleatDisplay category={category}/>
    </div>
  )
}

export default Home
