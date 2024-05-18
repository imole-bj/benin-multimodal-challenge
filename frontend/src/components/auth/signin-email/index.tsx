"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SigninEmail = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			<main>
				<section className="auth signin-email">
					<div className="page-title text-center">
						<button
							onClick={handleBack}
							type="button"
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="Icon" />
						</button>
						<h3 className="main-title">Sign In</h3>
					</div>
					<div className="auth-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="d-flex flex-column gap-16">
								<div>
									<label htmlFor="lemail2">Email Address</label>
									<input
										type="email"
										id="lemail2"
										placeholder="Enter your email address"
										className="input-field d-block"
									/>
								</div>
								<div>
									<label htmlFor="lpass">Password</label>
									<div className="position-relative">
										<input
											type={`${showPassword ? "text" : "password"}`}
											id="lpass"
											data-pssws-shown="false"
											placeholder="Enter your password"
											className="input-psswd input-field d-block"
										/>
										<button
											onClick={() => setShowPassword(!showPassword)}
											type="button"
											className="eye-btn"
										>
											<span
												className={`eye-off ${
													showPassword ? "d-none" : "d-block"
												}`}
											>
												<img src="/assets/svg/eye-off.svg" alt="Eye Off" />
											</span>
											<span
												className={`eye-on ${
													showPassword ? "d-block" : "d-none"
												}`}
											>
												<img src="/assets/svg/eye-on.svg" alt="Eye Off" />
											</span>
										</button>
									</div>
								</div>
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center gap-8">
										<input
											type="checkbox"
											id="lremember"
											className="input-field-checkbox d-block"
										/>
										<label htmlFor="lremember" className="checkbox-label">
											Remember Me
										</label>
									</div>
									<Link
										href="/recover-password"
										className="fs-14 fw-600 forgot-pass d-inline-block"
									>
										Forgot Password
									</Link>
								</div>
							</div>
							<Link href="/otp" className="btn-primary">
								Sign In
							</Link>
						</form>

						<div className="divider d-flex align-items-center justify-content-center gap-12">
							<span className="d-inline-block"></span>
							<small className="d-inline-block">Or continue with</small>
							<span className="d-inline-block"></span>
						</div>

						<div className="d-flex flex-column gap-16">
							<button
								type="button"
								className="social-btn"
								data-bs-toggle="modal"
								data-bs-target="#loginSuccess"
							>
								<img src="/assets/svg/icon-google.svg" alt="Google" />
								Continue with Google
							</button>
							<button
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
				className="modal fade loginSuccessModal modalBg"
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

export default SigninEmail;
