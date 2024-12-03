import React from 'react'

const SignIn = () => {
  return (
    <div className='vh-100 vw-100 d-flex align-items-center justify-content-center'>
        <div className='d-flex align-items-center justify-content-centre flex-column gap-2'>
            <h1 className='d-flex align-items-center justify-content-centre font-weight-bold'>SignIn</h1>
            <label className='w-100 justify-content-centre' htmlFor="email"><h3>Email</h3></label>
            <input type="email" className='p-2 rounded'/>
            <label  className='w-100 justify-content-centre' htmlFor="password"><h3>Password</h3></label>
            <input type="password" className='p-2 rounded' />
            <button type="button" class="btn btn-primary btn-block w-100 mt-3">SignIn</button>
        </div>
    </div>
  )
}

export default SignIn