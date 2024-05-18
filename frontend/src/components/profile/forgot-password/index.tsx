"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ForgotPassword = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="profile-main">
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Forgot Password</h3>
				</div>

				<section className="user-info forgot-password px-24">
					<blockquote className="d-flex align-items-center gap-16 p-16 radius-8">
						<img src="/assets/svg/i.svg" alt="icon" />
						<p>
							We will send the OTP code to your email for security in forgetting
							your password
						</p>
					</blockquote>

					<form onSubmit={(e) => e.preventDefault()}>
						<div className="mt-24">
							<label className="input-label">E-mail</label>
							<input
								type="email"
								placeholder="E-mail"
								value="example@mail.com"
								className="input"
							/>
						</div>

						<div className="submit-btn px-24 pt-24 pb-36 bottom-btn">
							<button type="button" className="btn-primary">
								Submit
							</button>
						</div>
					</form>
				</section>
			</main>
		</>
	);
};

export default ForgotPassword;
