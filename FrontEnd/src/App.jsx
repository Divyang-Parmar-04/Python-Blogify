
import { useEffect, useState } from "react"
import Navbar from "./components/Navigation/Navbar"
import Welcome from "./components/Home/Welcome"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"
import Footer from "./components/Navigation/Footer"
import api from "./utils/api"
import { setData } from "./features/authSlice"

function App() {

  const { user, isAuthenticated } = useAuth0()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   alert("Please wait somtime it take more than 1 Minute to load content ")
  // }, [])

  useEffect(() => {
    if (isAuthenticated && user) {
     
      api.get("/api/auth/getblogs")
        .then((res) => {
          // console.log(res, "response ")
          const data = res.data.blogs
          if (!data) {
            alert("somthing went wrong ")
          }
          else {
            dispatch(setData(data))
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [isAuthenticated,user, dispatch])

  return (
    <>
      <Navbar />
      {user? (<Outlet />) : (<Welcome />)}
      <Footer />
    </>
  )
}

export default App
