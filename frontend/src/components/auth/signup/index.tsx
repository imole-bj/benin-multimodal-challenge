"use client";

import HeaderOne from "@/layouts/headers/HeaderOne";
import LoginModa from "@/modals/LoginModa";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	const [loginModal, setLoginModal] = useState(false);

	return (
		<>
			<main className="auth-main">
				<HeaderOne />

				<section className="auth signin">
					<div className="heading">
						<h2>Create account</h2>
						<p>Lorem ipsum dolor sit amet</p>
					</div>

					<div className="form-area auth-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<div>
								<label htmlFor="remail1">Email</label>
								<input
									type="email"
									id="remail1"
									placeholder="Enter your email address"
									className="input-field"
								/>
							</div>
							<Link href="/signup-email" className="btn-primary">
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
								data-bs-toggle="modal"
								data-bs-target="#loginSuccess"
								className="social-btn"
							>
								<img src="/assets/svg/icon-google.svg" alt="Google" />
								Continue with Google
							</button>
							<button
								onClick={() => setLoginModal(!loginModal)}
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#loginSuccess"
								className="social-btn apple"
							>
								<img src="/assets/svg/icon-apple.svg" alt="Apple" />
								Continue with Apple
							</button>
						</div>

						<h6>
							Already have an account? <Link href="/signin">Login</Link>
						</h6>
					</div>
				</section>
			</main>

			<LoginModa loginModal={loginModal} setLoginModal={setLoginModal} />
		</>
	);
};

export default Signup;
