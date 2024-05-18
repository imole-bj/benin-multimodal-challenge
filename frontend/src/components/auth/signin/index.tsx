"use client";

import React, { useState } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Link from "next/link";

const Signin = () => {
	const [loginModal, setLoginModal] = useState(false);
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<main className="auth-main">
				<HeaderOne />
				<section className="auth signin">
					<div className="heading">
						<h2>Hi, Welcome Back!</h2>
						<p>Lorem ipsum dolor sit amet</p>
					</div>

					<div className="form-area auth-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<div>
								<label htmlFor="lemail1">Email</label>
								<input
									type="email"
									id="lemail1"
									placeholder="Enter your email address"
									className="input-field"
								/>
							</div>
							<Link href="/signin-email" className="btn-primary">
								Continue with Email
							</Link>
						</form>

						<div className="divider d-flex align-items-center justify-content-center gap-12">
							<span className="d-inline-block"></span>
							<small className="d-inline-block">Or continue with</small>
							<span className="d-inline-block"></span>
						</div>

						<div className="d-flex flex-column gap-16">
							<button
								onClick={() => setLoginModal(!loginModal)}
								type="button"
								className="social-btn"
								data-bs-toggle="modal"
								data-bs-target="#loginSuccess"
							>
								<img src="/assets/svg/icon-google.svg" alt="Google" />
								Continue with Google
							</button>
							<button
								onClick={() => setLoginModal(!loginModal)}
								type="button"
								className="social-btn apple"
								data-bs-toggle="modal"
								data-bs-target="#loginSuccess"
							>
								<img src="/assets/svg/icon-apple.svg" alt="Apple" />
								Continue with Apple
							</button>
						</div>

						<h6>
							Do not have an account? <Link href="/signup">Sign Up</Link>
						</h6>
					</div>
				</section>
			</main>

			<div
				className={`modal fade loginSuccessModal modalBg ${
					loginModal ? "show" : ""
				}`}
				id="loginSuccess"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body text-center">
							<img src="/assets/svg/check-green.svg" alt="Check" />
							<h3>You have logged in successfully</h3>
							<p className="mb-32">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
							<Link href="/home" className="btn-primary">
								Continue
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signin;
