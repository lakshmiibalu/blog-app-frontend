import React, { useState } from 'react'
import BlogNav from './BlogNav'
import axios from 'axios'

const Signin = () => {

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
        axios.post("http://localhost:3003/api/blog/signin",input).then(
            (response)=>{
                console.log(response.data)

                if (response.data.status == "success") {

                    alert("Signup successfull")
                    setInput({
                        
                        "email":"",
                        "password":""
                 })
                    
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

        <BlogNav/>

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

                            <button className="btn btn-info" onClick={readValues}>Signin</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Signin