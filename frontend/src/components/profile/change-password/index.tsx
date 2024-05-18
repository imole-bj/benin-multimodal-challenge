"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	const [active, setActive] = useState(false);
	const [show, setShow] = useState(false);

	const toggleActive = () => {
		setActive(!active);
	};
	const toggleShow = () => {
		setShow(!show);
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
					<h3 className="main-title">Change Password</h3>
				</div>

				<section className="change-password px-24">
					<h4 className="mb-24">
						The new password must be different from the current password
					</h4>
					<div className="mb-16">
						<label htmlFor="cpass">Password</label>
						<div className="position-relative">
							<input
								type={`${show ? "text" : "password"}`}
								id="cpass"
								data-pssws-shown="false"
								placeholder="Enter your password"
								className="input-psswd input-field d-block"
							/>
							<button type="button" className="eye-btn" onClick={toggleShow}>
								<span className={`eye-off ${show ? "d-none" : "d-block"}`}>
									<img src="/assets/svg/eye-off.svg" alt="Eye Off" />
								</span>
								<span className={`eye-on ${show ? "d-block" : "d-none"}`}>
									<img src="/assets/svg/eye-on.svg" alt="Eye Off" />
								</span>
							</button>
						</div>
					</div>
					<ul className="mb-16">
						<li className="d-flex gap-04">
							<img src="/assets/svg/check-green-outline.svg" alt="icon" />
							<p>There must be at least 8 characters</p>
						</li>
						<li className="d-flex gap-04">
							<img src="/assets/svg/check-green-outline.svg" alt="icon" />
							<p>There must be a unique code like @!#</p>
						</li>
					</ul>
					<div>
						<label htmlFor="ccpass">Confirm Password</label>
						<div className="position-relative">
							<input
								type={`${active ? "text" : "password"}`}
								id="ccpass"
								data-pssws-shown="false"
								placeholder="Confirm your password"
								className="input-psswd input-field d-block"
							/>
							<button type="button" className="eye-btn" onClick={toggleActive}>
								<span className={`eye-off ${active ? "d-none" : "d-block"}`}>
									<img src="/assets/svg/eye-off.svg" alt="Eye Off" />
								</span>
								<span className={`eye-on ${active ? "d-block" : "d-none"}`}>
									<img src="/assets/svg/eye-on.svg" alt="Eye Off" />
								</span>
							</button>
						</div>
					</div>
				</section>

				<div className="submit-btn px-24 pt-24 pb-36 bottom-btn">
					<button type="button" className="btn-primary">
						Submit
					</button>
				</div>
			</main>
		</>
	);
};

export default ChangePassword;
