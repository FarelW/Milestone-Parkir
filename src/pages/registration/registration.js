import React from "react";
import { Component } from "./Component";
import "./style.css";

export const AndroidLarge = () => {
    return (
        <div className="android-large">
            <div className="div">
                <div className="text-wrapper">OR</div>
                <div className="group">
                    <div className="text-wrapper-2">Already have an Account?</div>
                    <div className="text-wrapper-3">Log In</div>
                </div>
                <h1 className="h-1">Register</h1>
                <div className="text-wrapper-4">Create your new account</div>
                <p className="by-signing-up-you">
                    <span className="span">By signing up you agree to our</span>
                    <span className="text-wrapper-5"> Terms &amp; Conditions</span>
                    <span className="text-wrapper-6">&nbsp;</span>
                    <span className="span">and</span>
                    <span className="text-wrapper-5"> Privacy Policy</span>
                </p>
                <img className="account-link" alt="Account link" src="account-link.png" />
                <div className="input-box">
                    <div className="enter-email-or-phone-wrapper">
                        <input className="enter-email-or-phone" />
                    </div>
                    <div className="input-wrapper">
                        <input className="enter-email-or-phone" />
                    </div>
                    <div className="component-2">
                        <input className="enter-email-or-phone" />
                    </div>
                    <div className="component-3">
                        <input className="enter-email-or-phone" />
                    </div>
                </div>
                <Component className="component-5" property1="variant-2" text="Sign up" />
            </div>
        </div>
    );
};
