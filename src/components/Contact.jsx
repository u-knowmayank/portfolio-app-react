import { useState } from "react";
import React from 'react'

const Contact = () => {

  const [user, userRegister] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    userRegister({ ...user, [name]: value });
  };

  const [User, setUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { ...user, id: new Date().getTime().toString() }
    setUser([...User, newUser]);

    userRegister({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - mtmickymayank1@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' onChange={handleInput} value={user.name}
            id="name" />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' onChange={handleInput} value={user.email} id="email" />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' onChange={handleInput} value={user.message} id="message"></textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
      </div>
      <div className='pb-4 text-center bg-[#0a192f] '>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Subscribed Users</p>

      </div>
      <div className='w-full text-gray-300 bg-[#0a192f]  grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>

        {
          User.map((data) => {
            const { id, name, email, message } = data;
            return (
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' key={data.id}>
                <p className='text-2xl font-bold'>{name}</p>
                <p>{email}</p>
                <p>{message}</p>
              </div>
            )
          })
        }


      </div>

    </>
  )
}

export default Contact