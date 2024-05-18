"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateNewPassword = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<>
			<main>
				<section className="auth signin-email create-pass">
					<div className="page-title text-center">
						<button
							onClick={handleBack}
							type="button"
							className="d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="Icon" />
						</button>
					</div>

					<div className="heading">
						<h2>Create a New Password</h2>
						<p>Enter your new password</p>
					</div>

					<div className="auth-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="d-flex flex-column gap-16">
								<div>
									<label htmlFor="cpass">Password</label>
									<div className="position-relative">
										<input
											type={`${showPassword ? "text" : "password"}`}
											id="cpass"
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
									<label htmlFor="ccpass">Confirm Password</label>
									<div className="position-relative">
										<input
											type={`${showConfirmPassword ? "text" : "password"}`}
											id="ccpass"
											data-pssws-shown="false"
											placeholder="Confirm your password"
											className="input-psswd input-field d-block"
										/>
										<button
											onClick={() =>
												setShowConfirmPassword(!showConfirmPassword)
											}
											type="button"
											className="eye-btn"
										>
											<span
												className={`eye-off ${
													showConfirmPassword ? "d-none" : ""
												}`}
											>
												<img src="/assets/svg/eye-off.svg" alt="Eye Off" />
											</span>
											<span
												className={`eye-on ${
													showConfirmPassword ? "" : "d-none"
												}`}
											>
												<img src="/assets/svg/eye-on.svg" alt="Eye Off" />
											</span>
										</button>
									</div>
								</div>
							</div>
							<Link href="/select-language" className="btn-primary">
								Continue
							</Link>
						</form>
					</div>
				</section>
			</main>
		</>
	);
};

export default CreateNewPassword;
