import { Link } from 'react-router-dom';
import './Home.css';
import {useContext} from "react";
import { Context } from '../Context';

function Home(){

    const {user, setUser} = useContext(Context);

    return(
        <div>
            <header className="header">
                <nav className="nav">
                    <Link to='/' className="nav_logo">Dhanaraj Hotel</Link>

                    <ul className="nav_items">
                        <li className="nav_item">
                            {/* <Link to='/' className="nav_link">Home</Link> */}
                            {user ? 
                            <>
                                <Link to='/products' className="nav_link">Product</Link>
                                <Link to='/' className="nav_link">Services</Link>
                                <Link to='/' className="nav_link">Contact</Link>
                            </> : <></>
                            }
                        </li>
                    </ul>
                    {
                        user ? <></> : <Link className="button" id="form-open" to='/login'>Login</Link>
                    }
                </nav>
            </header>

            <section className="home">
                <div className="form_container">
                    <i className="uil uil-times form_close"></i>
                    <div className="form login_form">
                        <form action="#">
                            <h2>Login</h2>
                            <div className="input_box">
                                <input type="email" placeholder="Enter your email" required />
                                <i className="uil uil-envelope-alt email"></i>
                            </div>
                            <div className="input_box">
                                <input type="password" placeholder="Enter your password" required />
                                <i className="uil uil-lock password"></i>
                                <i className="uil uil-eye-slash pw_hide"></i>
                            </div>

                            <div className="option_field">
                                <span className="checkbox">
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check">Remember me</label>
                                </span>
                                <a href="#" className="forgot_pw">Forgot password?</a>
                            </div>

                            <button className="button">Login Now</button>

                            <div className="login_signup">Don't have an account? <Link to='/' id="signup">Signup</Link></div>
                        </form>
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

                            <div className="login_signup">Already have an account? <Link to='/' id="login">Login</Link></div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;