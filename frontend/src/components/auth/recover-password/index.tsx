"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const RecoverPassword = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main>
				<section className="auth signin-email forgot-pass">
					<div className="page-title">
						<button
							onClick={handleBack}
							type="button"
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="Icon" />
						</button>
					</div>

					<div className="heading">
						<h2>Forgot Password</h2>
						<p>Recover your account password</p>
					</div>

					<div className="auth-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<div>
								<label htmlFor="femail">Email</label>
								<input
									type="email"
									id="femail"
									placeholder="Enter your email"
									className="input-field"
								/>
							</div>
							<Link href="/create-new-password" className="btn-primary">
								Continue
							</Link>
						</form>
					</div>
				</section>
			</main>
		</>
	);
};

export default RecoverPassword;
