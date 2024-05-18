"use client";

import Footer from "@/layouts/footers/Footer";
import LogOutModal from "@/modals/LogOutModal";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const UserProfile = () => {
	useEffect(() => {
		const chk: HTMLInputElement | null = document.getElementById(
			"check-mode"
		) as HTMLInputElement;
		const modeChk: HTMLInputElement | null = document.getElementById(
			"mode-change"
		) as HTMLInputElement;

		const toggleDarkMode = (darkModeStatus: boolean): void => {
			document.body.classList.toggle("dark-mode", darkModeStatus);
		};

		const changeHandler = (event: Event) => {
			const target = event.target as HTMLInputElement;
			const darkModeStatus = target.checked;
			toggleDarkMode(darkModeStatus);
			localStorage.setItem("darkModeStatus", darkModeStatus.toString());
			modeChk.checked = darkModeStatus;
		};

		if (chk) {
			chk.addEventListener("change", changeHandler);

			const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
			if (storedDarkModeStatus === "true") {
				toggleDarkMode(true);
				chk.checked = true;
			}
		}

		if (modeChk) {
			modeChk.addEventListener("change", changeHandler);

			const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
			if (storedDarkModeStatus === "true") {
				toggleDarkMode(true);
				modeChk.checked = true;
			}
		}

		// Clean-up
		return () => {
			if (chk) chk.removeEventListener("change", changeHandler);
			if (modeChk) modeChk.removeEventListener("change", changeHandler);
		};
	}, []);

	const [showModal, setShowModal] = useState(false);
	const handleLogout = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<main className="user-profile">
			<div>Bientôt disponible</div>
				{/* <section className="user-profile-heading d-flex align-items-center justify-content-between">
					<div className="d-flex align-items-center gap-12">
						<div className="image rounded-full overflow-hidden shrink-0">
							<img
								src="/assets/images/profile/avatar.png"
								alt="avatar"
								className="img-fluid w-100 h-100 object-fit-cover"
							/>
						</div>
						<div>
							<h3>Andy Lexsian</h3>
							<p className="d-flex align-items-center gap-04 location mt-04">
								<img src="/assets/svg/map-marker.svg" alt="icon" />
								Uttar Pradesh, India
							</p>
						</div>
					</div>

					<Link href="/user-info" className="edit-info">
						<img src="/assets/svg/edit.svg" alt="icon" />
					</Link>
				</section>

				<section className="user-personal">
					<div className="mt-32">
						<h4 className="mb-16">Personal Info</h4>
						<ul className="setting-list">
							<li>
								<Link
									href="/user-address"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/location.svg" alt="icon" />
										<p>My Address</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
							<li>
								<Link
									href="/user-payment"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/work.svg" alt="icon" />
										<p>Payment Method</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
						</ul>
					</div>

					<div className="mt-32">
						<h4 className="mb-16">Security</h4>
						<ul className="setting-list">
							<li>
								<Link
									href="/change-password"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/lock-close.svg" alt="icon" />
										<p>Change Password</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
							<li>
								<Link
									href="/forgot-password"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/lock-open.svg" alt="icon" />
										<p>Forgot Password</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
							<li>
								<Link
									href="/security"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/shield.svg" alt="icon" />
										<p>Security</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
							<li>
								<Link
									href="/notifications"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/bell-black.svg" alt="icon" />
										<p>Notifications</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
						</ul>
					</div>

					<div className="mt-32">
						<h4 className="mb-16">General</h4>
						<ul className="setting-list">
							<li>
								<Link
									href="/language"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/globe.svg" alt="icon" />
										<p>Language</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
							<li>
								<a
									href="#"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/trash.svg" alt="icon" />
										<p>Clear Cache</p>
									</div>

									<small>88 MB</small>
								</a>
							</li>
						</ul>
					</div>

					<div className="mt-32">
						<h4 className="mb-16">About</h4>
						<ul className="setting-list">
							<li>
								<Link
									href="/policy"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/shield-round.svg" alt="icon" />
										<p>Legal and Policies</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
							<li>
								<Link
									href="/support"
									className="d-flex align-items-center justify-content-between"
								>
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/question.svg" alt="icon" />
										<p>Help & Support</p>
									</div>

									<img src="/assets/svg/chevron-right.svg" alt="Icon" />
								</Link>
							</li>
							<li>
								<div className="d-flex align-items-center justify-content-between">
									<div className="d-flex align-items-center gap-12 shrink-0">
										<img src="/assets/svg/activity.svg" alt="icon" />
										<p className="mode-text">Dark Mode</p>
									</div>

									<label className="toggle-switch">
										<input
											type="checkbox"
											id="mode-change"
											className="mode-switch"
										/>
										<span className="slider"></span>
									</label>
								</div>
							</li>
						</ul>
					</div>
				</section>

				<div className="py-32">
					<button
						type="button"
						onClick={handleLogout}
						className="btn-primary-outline"
						data-bs-toggle="modal"
						data-bs-target="#logOutModal"
					>
						Log Out
					</button>
				</div> */}
			</main>

			<Footer />

			{/* <LogOutModal handleLogout={handleLogout} showModal={showModal} /> */}
		</>
	);
};

export default UserProfile;
