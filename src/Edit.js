import React from 'react'
import { Link } from 'react-router-dom'

const Edit = ({objPass,toggleFunc,submitHandler,editFunc}) => {
  return (
    <>
        <div className="table">
                    <div className="tablecontent">
                        <div className='name' >Name</div>
                        <div className='age'>Age</div>
                        <div className='course'>Course</div>
                        <div className='batch'>Batch</div>
                        <span>Change</span>
                    </div>
              {objPass.map((ele)=>{
                return(
                    <div className="tablecontent" key={ele.id}>
                        <div className='name' >{ele.name}</div>
                        <div className=' age'>{ele.age}</div>
                        <div className='course'>{ele.course}</div>
                        <div className='batch'>{ele.batch}</div>
                        <Link to={`/students-list/${ele.id}`}>
                        <button onClick={()=>editFunc(ele.id)} className='editbtn'>Edit</button>
                        </Link>
                    </div>
                )
              })}
        </div>
    </>
  )
}

export default Edit