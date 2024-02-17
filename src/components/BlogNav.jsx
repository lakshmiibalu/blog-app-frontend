import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BlogNav = () => {
  let navigate = useNavigate()
  useEffect(()=>{
    let userId = sessionStorage.getItem("userId")
    if (userId === null || userId == undefined) {

      navigate("/")
      
    }
  })

  const logOutAction = ()=>{
    sessionStorage.clear()
    navigate("/")
  }
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/signin">Blog App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        <Link class="nav-link" to="/add">Add Blog</Link>
        <Link class="nav-link" to="/view">View Blogs</Link>
        <Link class="nav-link" to="/myblog">View My Blogs</Link>
        <span class="nav-link" onClick={logOutAction}>Log Out</span>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default BlogNav