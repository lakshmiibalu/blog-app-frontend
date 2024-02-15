import React, { useEffect, useState } from 'react'
import BlogNav from './BlogNav'
import axios from 'axios'

const ViewMyblog = () => {

    const [data,setData] = useState([])
    const [input,setInput] = useState(
        {
            "userId":sessionStorage.getItem("userId")
        }
    )

    const readValues = ()=>{
        console.log(input)
        axios.post("http://localhost:3003/api/post/mypost",input).then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{readValues()},[])

  return (
    <div>

        <BlogNav/>

        <br />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {
                            data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                    <div class="card border-success mb-3">
                                    <div class="card-header bg-transparent border-success"></div>
                                    <div class="card-body text-success">
                                        
                                        <p class="card-text">Post : {value.post}</p>
                                        <p class="card-text">Date : {value.postedDate}</p>
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

export default ViewMyblog