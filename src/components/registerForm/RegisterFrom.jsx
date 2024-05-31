import React from 'react'

const RegisterFrom = () => {
  return (
    <section className='register-section'>
        <div className="container">
            <div className="cl">

            <form>
                <h2>Account</h2>
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Confirm password'/>
                <button>Save</button>
            </form>
            </div>
        </div>
    </section>
  )
}

export default RegisterFrom