import React, { useEffect, useState } from 'react'
import BlogNav from './BlogNav'
import axios from 'axios'

const ViewBlog = () => {

    const [data,setData] = useState([])
    const getData = ()=>{
        axios.get("http://localhost:3003/api/post/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])

  return (
    <div>

        <BlogNav/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">

                                    <div class="card border-success mb-3" >
                                    <div class="card-header bg-transparent border-success"></div>
                                    <div class="card-body text-success">
                                        
                                        <p class="card-text">Name : {value.userId.name}</p>
                                        <p class="card-text"> Age : {value.userId.age}</p>
                                        <p class="card-text">Address : {value.userId.address}</p>
                                        <p class="card-text">Post : {value.post}</p>
                                        
                                    </div>
                                    <div class="card-footer bg-transparent border-success"></div>
                                    </div>
            
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewBlog

