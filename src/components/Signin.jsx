import React, { useState } from 'react'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
const navigate = useNavigate()
    const [input,setInput] = useState(
        {
            
            "email":"",
            "password":""
     }
    )
    const inputHandler = (event)=>{
        setInput(
            {...input,[event.target.name]:event.target.value}
        )
    }
    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signin",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status == "success") {

                    console.log(response.data.userData._id)
                    sessionStorage.setItem("userId",response.data.userData._id)
                    navigate("/add")
                    
                    
                } else{
                if (response.data.status == "invalid user") {

                    alert("Invalid user")
                    
                }
                if (response.data.status == "incorrect password") {
                    alert("Invalid password")
                    
                }
            }
            }
        )
    }

  return (
    <div>

        <br />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-info" onClick={readValues}>Sign in</button>

                        </div>
                        <Link class="nav-link" to="/signup">New user register</Link>
        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signin