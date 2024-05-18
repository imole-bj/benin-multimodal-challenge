"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Otp = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	const [otp, setOtp] = useState(false);
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<main>
				<section className="auth signin-email enter-otp">
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
						<h2>Enter OTP</h2>
						<p>
							We have just sent you 4 digit code via your email{" "}
							<span>example@mail.com</span>
						</p>
					</div>

					<div className="auth-form">
						<div className="digit-group">
							<input
								type="text"
								id="digit-1"
								name="digit-1"
								data-next="digit-2"
								autoFocus
							/>
							<input
								type="text"
								id="digit-2"
								name="digit-2"
								data-next="digit-3"
								data-previous="digit-1"
							/>
							<input
								type="text"
								id="digit-3"
								name="digit-3"
								data-next="digit-4"
								data-previous="digit-2"
							/>
							<input
								type="text"
								id="digit-4"
								name="digit-4"
								data-previous="digit-3"
							/>
						</div>
						<button
							onClick={() => setOtp(!otp)}
							type="button"
							className="btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#loginSuccess"
						>
							Continue
						</button>
						<h6>
							Did not receive code? <button type="button">Resend Code</button>
						</h6>
					</div>
				</section>
			</main>

			<div
				className={`modal fade loginSuccessModal modalBg ${otp ? "show" : ""} ${
					otp ? "d-block" : "d-none"
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

export default Otp;
