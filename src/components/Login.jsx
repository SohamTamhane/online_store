import { Link } from 'react-router-dom';
import './Home.css';
import {BiArrowBack} from 'react-icons/bi';
import { useState } from 'react';
import { auth } from '../config/firebase';
import {signInWithEmailAndPassword} from "firebase/auth";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitFunc(){
        if(email==='' || password===''){
            alert('Please Enter Email or Password');
        }
        else{
            try{
                await signInWithEmailAndPassword(auth, email, password);
                alert('Login Successfully !!');
            }
            catch(error){
                console.log(error);
                alert(error.message);
            }
        }
    }

    return(
        <div>
            <header className="header">
                <nav className="nav">
                    <Link to='/' className="nav_logo">Dhanaraj Hotel</Link>

                    <ul className="nav_items">
                        <li className="nav_item">
                            <Link to='/' className="nav_link">Home</Link>
                            <Link to='/' className="nav_link">Product</Link>
                            <Link to='/' className="nav_link">Services</Link>
                            <Link to='/' className="nav_link">Contact</Link>
                        </li>
                    </ul>

                    <button className="button" id="form-open">Login</button>
                </nav>
            </header>

            <section className="home show">
                <div className="form_container">
                    <i className="uil uil-times form_close"></i>
                    <Link to='/'><BiArrowBack className="back-icon"/></Link>
                    <div className="form login_form">
                            <h2>Login</h2>
                            <div className="input_box">
                                <input type="email" placeholder="Enter your email" onChange={(event)=>setEmail(event.target.value)} required />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="Enter your password" onChange={(event)=>setPassword(event.target.value)} required />
                                <i className="uil uil-lock password"></i>
                                <i className="uil uil-eye-slash pw_hide"></i>
                            </div>

                            <div className="option_field">
                                <span className="checkbox">
                                    <input type="checkbox" id="check" />
                                    <label for="check">Remember me</label>
                                </span>
                                <Link href="/login" className="forgot_pw">Forgot password?</Link>
                            </div>

                            <button onClick={submitFunc} className="button">Login Now</button>

                            <div className="login_signup">Don't have an account? <Link to='/signup' id="signup">Signup</Link></div>
                    </div>

                    <div className="form signup_form">
                        <form action="#">
                            <h2>Signup</h2>

                            <div className="input_box">
                                <input type="email" placeholder="Enter your email" required />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="Create password" required />
                                <i className="uil uil-lock password"></i>
                                <i className="uil uil-eye-slash pw_hide"></i>
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="Confirm password" required />
                                <i className="uil uil-lock password"></i>
                                <i className="uil uil-eye-slash pw_hide"></i>
                            </div>

                            <button className="button">Signup Now</button>

                            <div className="login_signup">Already have an account? <Link to={'/login'} id="login">Login</Link></div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login;