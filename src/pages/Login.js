import React from "react";
import './Login.css';
import {FaApple} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {
    return (
        <div className='container'>
            <div className='LoginForm'>
                <h1 className='login'> Login</h1>
                <div className='inputs'>
                    <div>
                        <h4>Username/ID</h4>
                        <input type='text' placeholder='yourmail@gmail.com' className='User'></input>
                    </div>
                    <div className='user'>
                        <h4>Password</h4>
                        <input type='password' placeholder='Password' className='User'>
                        </input>
                    </div>
                    <div className='socialmedia'>
                        <div className='Apple'>
                            <button className='btnn'>
                                <FaApple className='apple-icon' />
                            </button>
                        </div>
                        <div className='Facebook'>
                            <button className='btnn'>
                                <FaFacebook className='fb-icon' />
                            </button>
                        </div>
                        <div className='Google'>
                            <button className='btnn'>
                                <FcGoogle className='google-icon' />
                            </button>
                        </div>
                    </div>
                    <button className='btn-login'>Login</button>
                    <div className='createacc'>
                        Don't have account?
                        <a href='#'>Create Account <br /><br /></a>
                        If you are an admin, you can register yourself right away<br />. If you are a student, ask your admin to register
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;