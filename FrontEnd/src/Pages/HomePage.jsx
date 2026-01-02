import React, { useEffect, useState } from 'react'

//components
import Home from '../components/Home/Home'
import Card from '../components/Blogs-component/Card'
import Line from '../components/controllers/Line'

//hooks
import { useSelector } from 'react-redux'

function HomePage() {
  
  const [blogs,setBlogs] = useState([])
  const data = useSelector((state) => state.auth.userData)

  useEffect(()=>{
     if(data.length>0)setBlogs(data)
  },[data])

  return (
    <>
    <Home blogs = {blogs}/>
    <Line />
    <Card blogs = {blogs}/>
    </>
  )
}

export default HomePage