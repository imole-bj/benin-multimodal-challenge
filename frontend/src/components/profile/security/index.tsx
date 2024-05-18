"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Security = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main>
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Security</h3>
				</div>

				<section className="msg-notifications px-24">
					<div className="border-box">
						<h5>Messages Notifications</h5>
						<ul>
							<li className="d-flex align-items-center justify-content-between">
								<p>Face ID</p>
								<label className="toggle-switch">
									<input
										type="checkbox"
										className="mode-switch"
										defaultChecked
									/>
									<span className="slider"></span>
								</label>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Remember Password</p>
								<label className="toggle-switch">
									<input
										type="checkbox"
										className="mode-switch"
										defaultChecked
									/>
									<span className="slider"></span>
								</label>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Touch ID</p>
								<label className="toggle-switch">
									<input
										type="checkbox"
										className="mode-switch"
										defaultChecked
									/>
									<span className="slider"></span>
								</label>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
};

export default Security;
