import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Action_Type } from '../Redux/Auth_Reducer/Action'

const InitialState = {
  email: '',
  password: '',
}

function Login() {
  const [isInput, setIsInput] = useState(InitialState)
  const dispatch = useDispatch()

  const HandleChange = (e) => {
    const { name, value } = e.target
    setIsInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const HandleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch({
        type: Action_Type.Login_Request,
      })
      let url = 'http://127.0.0.1:5000/api/v1/auth/login'
      let Response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: isInput.email,
          password: isInput.password
        }),
      })

      let data = await Response.json();
      console.log(data);

    } catch (error) {
      dispatch({
        type: Action_Type.Login_Failure,
        payload: error.message,
      })
    }
  }

  return (
    <div>
      <form className="form" onSubmit={HandleSubmit}>
        <input
          type="text"
          name="email"
          value={isInput.email}
          placeholder="Enter Email"
          onChange={HandleChange}
        />
        <input
          type="text"
          name="password"
          value={isInput.password}
          placeholder="Enter Password"
          onChange={HandleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Login