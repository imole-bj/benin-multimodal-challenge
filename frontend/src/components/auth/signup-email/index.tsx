"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignupEmail = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	const [showPassword, setShowPassword] = React.useState(false);
	const [showPassword2, setShowPassword2] = React.useState(false);

	return (
		<>
			<main>
				<section className="auth signin-email">
					<div className="page-title">
						<button
							onClick={handleBack}
							type="button"
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="Icon" />
						</button>
						<h3 className="main-title">Sign Up</h3>
					</div>

					<div className="heading">
						<h2>Complet your account</h2>
						<p>Lorem ipsum dolor sit amet</p>
					</div>
					<div className="auth-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="d-flex flex-column gap-16">
								<div>
									<label htmlFor="fname">First Name</label>
									<input
										type="text"
										id="fname"
										placeholder="Enter your first name"
										className="input-field d-block"
									/>
								</div>
								<div>
									<label htmlFor="lname">Last Name</label>
									<input
										type="text"
										id="lname"
										placeholder="Enter your last name"
										className="input-field d-block"
									/>
								</div>
								<div>
									<label htmlFor="remail2">Email Address</label>
									<input
										type="email"
										id="remail2"
										placeholder="Enter your email address"
										className="input-field d-block"
									/>
								</div>
								<div>
									<label htmlFor="rpass">Password</label>
									<div className="position-relative">
										<input
											type={`${showPassword ? "text" : "password"}`}
											id="rpass"
											data-pssws-shown="false"
											placeholder="Enter your password"
											className="input-psswd input-field d-block"
										/>
										<button
											type="button"
											className="eye-btn"
											onClick={() => setShowPassword(!showPassword)}
										>
											<span
												className={`eye-off ${showPassword ? "d-none" : ""}`}
											>
												<img src="/assets/svg/eye-off.svg" alt="Eye Off" />
											</span>
											<span
												className={`eye-on ${showPassword ? "" : "d-none"}`}
											>
												<img src="/assets/svg/eye-on.svg" alt="Eye Off" />
											</span>
										</button>
									</div>
								</div>
								<div>
									<label htmlFor="rcpass">Confirm Password</label>
									<div className="position-relative">
										<input
											type={`${showPassword2 ? "text" : "password"}`}
											id="rcpass"
											data-pssws-shown="false"
											placeholder="Confirm your password"
											className="input-psswd input-field d-block"
										/>
										<button
											type="button"
											className="eye-btn"
											onClick={() => setShowPassword2(!showPassword2)}
										>
											<span
												className={`eye-off ${showPassword2 ? "d-none" : ""}`}
											>
												<img src="/assets/svg/eye-off.svg" alt="Eye Off" />
											</span>
											<span
												className={`eye-on ${showPassword2 ? "" : "d-none"}`}
											>
												<img src="/assets/svg/eye-on.svg" alt="Eye Off" />
											</span>
										</button>
									</div>
								</div>
							</div>
							<Link href="/otp" className="btn-primary">
								Sign Up
							</Link>
						</form>

						<h6>
							Already have an account? <Link href="/signin">Login</Link>
						</h6>
					</div>
				</section>
			</main>
		</>
	);
};

export default SignupEmail;
