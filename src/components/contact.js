import React, { useState } from "react";


const AuthPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <section id="contact" className="container-fluid bg-light">
            <div className="row text-center mt-5">
                <div className="col-md-12">
                    <h2>Contact us</h2>
                </div>
            </div>
            <div className="auth-container" >
            
            <div className="auth-header">
                <button
                    className={`auth-toggle ${isSignIn ? "active" : ""}`}
                    onClick={() => setIsSignIn(true)}
                >
                    Sign In
                </button>
                <button
                    className={`auth-toggle ${!isSignIn ? "active" : ""}`}
                    onClick={() => setIsSignIn(false)}
                >
                    Sign Up
                </button>
            </div>

            <div className="auth-body">
                {isSignIn ? (
                    <SignInForm />
                ) : (
                    <SignUpForm />
                )}
            </div>
        </div>
        </section>
    );
};

const SignInForm = () => (
    <form className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
    </form>
);

const SignUpForm = () => (
    <form className="auth-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <a href="#sign">Don't have an account</a>
    </form>
);

export default AuthPage;
