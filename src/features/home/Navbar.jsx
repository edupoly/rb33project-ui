import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoginStatus } from '../login/loginSlice'

function Navbar() {
    var dispatch = useDispatch();
    var {user}=useSelector(state=>state.loginReducer)
    console.log(user)
    function logout(){
        window.localStorage.removeItem("token")
        dispatch(updateLoginStatus(false))
    }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Edupoly</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to={`/${user?.role}`}>My DashBoard</Link>
                    </li>
                    <li class="nav-item active">
                            <button onClick={()=>{logout()}}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar