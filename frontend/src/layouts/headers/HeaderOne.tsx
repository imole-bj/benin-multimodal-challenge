"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const HeaderOne = () => {

	useEffect(() => {
		const chk: HTMLInputElement | null = document.getElementById(
			"check-mode"
		) as HTMLInputElement;
		const modeChk: HTMLInputElement | null = document.getElementById(
			"mode-change"
		) as HTMLInputElement;
		const enableMode: HTMLInputElement | null = document.getElementById(
			"enableMode"
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
			enableMode.checked = darkModeStatus;
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

		if (enableMode) {
			enableMode.addEventListener("change", changeHandler);

			const storedDarkModeStatus = localStorage.getItem("darkModeStatus");
			if (storedDarkModeStatus === "true") {
				toggleDarkMode(true);
				enableMode.checked = true;
			}
		}

		// Clean-up
		return () => {
			if (chk) chk.removeEventListener("change", changeHandler);
			if (modeChk) modeChk.removeEventListener("change", changeHandler);
			if (enableMode) enableMode.removeEventListener("change", changeHandler);
		};
	}, []);

	const [show, setShow] = React.useState(false);
	const toggleShow = () => {
		setShow(!show);
	};

	return (
		<>
			<section className="wrapper dz-mode">
				<div className="menu">
					{/* <button onClick={toggleShow} className="toggle-btn">
						<img
							src="assets/svg/menu/burger-white.svg"
							alt=""
							className="icon"
						/>
					</button> */}
					<h2 className="text-white"
					
				>DOKUN </h2>
					{/* <Link href="/user-profile">
							<img src="assets/svg/menu/profile-white.svg" alt="icon" />
						</Link> */}



					<div className="btn-grp d-flex align-items-center gap-16">
						<label
							htmlFor="mode-change"
							className="mode-change d-flex align-items-center justify-content-center"
						>
							<input type="checkbox" id="mode-change" />
							<img
								src="assets/svg/menu/sun-white.svg"
								alt="icon"
								className="sun"
							/>
							<img
								src="assets/svg/menu/moon-white.svg"
								alt="icon"
								className="moon"
							/>
						</label>
						
					</div>
				</div>
				<div
					className={`m-menu__overlay ${show ? "show" : ""}`}
					onClick={toggleShow}
				></div>

				<div className={`m-menu ${show ? "show" : ""}`}>
					<div className="m-menu__header">
						<button onClick={toggleShow} className="m-menu__close">
							<img src="assets/svg/menu/close-white.svg" alt="icon" />
						</button>
						<div className="menu-user">
							<img src="assets/images/profile/avatar.png" alt="avatar" />
							<div>
								<a href="#!">angela mayer</a>
								<h3>Verified user · Membership</h3>
							</div>
						</div>
					</div>
					<ul>
						<li>
							<h2 className="menu-title">menu</h2>
						</li>

						<li>
							<Link href="/home" onClick={toggleShow}>
								<div className="d-flex align-items-center gap-16">
									<span className="icon">
										<img src="assets/svg/menu/pie-white.svg" alt="image-here" />
									</span>
									overview
								</div>
								<img
									src="assets/svg/menu/chevron-right-black.svg"
									alt="image-here"
								/>
							</Link>
						</li>
						<li>
							<Link href="/all-pages">
								<div className="d-flex align-items-center gap-16">
									<span className="icon">
										<img
											src="assets/svg/menu/page-white.svg"
											alt="image-here"
										/>
									</span>
									pages
								</div>
								<img
									src="assets/svg/menu/chevron-right-black.svg"
									alt="image-here"
								/>
							</Link>
						</li>
						<li>
							<h2 className="menu-title">others</h2>
						</li>

						<li>
							<label className="a-label__chevron" htmlFor="item-4">
								<span className="d-flex align-items-center gap-16">
									<span className="icon">
										<img
											src="assets/svg/menu/grid-white.svg"
											alt="image-here"
										/>
									</span>
									components
								</span>
								<img
									src="assets/svg/menu/chevron-right-black.svg"
									alt="image-here"
								/>
							</label>
							<input
								type="checkbox"
								id="item-4"
								name="item-4"
								className="m-menu__checkbox"
							/>
							<div className="m-menu">
								<div className="m-menu__header">
									<label className="m-menu__toggle" htmlFor="item-4">
										<img
											src="assets/svg/menu/back-white.svg"
											alt="image-here"
										/>
									</label>
									<span className="m-menu__header-title">components</span>
								</div>
								<ul>
									<li>
										<Link href="/splash-screen">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												splash screen
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<label className="a-label__chevron" htmlFor="item-5">
								<span className="d-flex align-items-center gap-16">
									<span className="icon">
										<img
											src="assets/svg/menu/gear-white.svg"
											alt="image-here"
										/>
									</span>
									settings
								</span>
								<img
									src="assets/svg/menu/chevron-right-black.svg"
									alt="image-here"
								/>
							</label>
							<input
								type="checkbox"
								id="item-5"
								name="item-5"
								className="m-menu__checkbox"
							/>
							<div className="m-menu">
								<div className="m-menu__header">
									<label className="m-menu__toggle" htmlFor="item-5">
										<img
											src="assets/svg/menu/back-white.svg"
											alt="image-here"
										/>
									</label>
									<span className="m-menu__header-title">settings</span>
								</div>
								<ul>
									<li>
										<Link href="/user-address">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												My Address
											</div>
										</Link>
									</li>
									<li>
										<Link href="/user-payment">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												Payment Method
											</div>
										</Link>
									</li>
									<li>
										<Link href="/change-password">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												Change Password
											</div>
										</Link>
									</li>
									<li>
										<Link href="/forgot-password">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												Forgot Password
											</div>
										</Link>
									</li>
									<li>
										<Link href="/security">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												Security
											</div>
										</Link>
									</li>
									<li>
										<Link href="/user-language">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												Language
											</div>
										</Link>
									</li>
									<li>
										<Link href="/notifications">
											<div className="d-flex align-items-center gap-16">
												<span className="icon">
													<img src="assets/svg/menu/box-white.svg" alt="icon" />
												</span>
												Notifications
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className="dz-switch">
							<div className="a-label__chevron">
								<div className="d-flex align-items-center gap-16">
									<span className="icon">
										<img
											src="assets/svg/menu/moon-white.svg"
											alt="image-here"
										/>
									</span>
									switch to dark mode
								</div>
								<label className="toggle-switch" htmlFor="enableMode">
									<input
										type="checkbox"
										id="enableMode"
										className="mode-switch"
									/>
									<span className="slider"></span>
								</label>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default HeaderOne;
