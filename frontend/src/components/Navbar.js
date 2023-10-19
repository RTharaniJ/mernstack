import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {

const {tasksList,error} =useSelector((state) => state.tasks)

  return (
    <div> 
    <h1 className="text-primary my-4 text-center">Project Management</h1>
    <p className="text-center lead"> {`Currently ${tasksList.length} task(s) pending`}</p>
{
  (error !== '') ? <h5 className='text-center text-danger'>{error}</h5> :null
}

  </div>
  )
}

export default Navbar
