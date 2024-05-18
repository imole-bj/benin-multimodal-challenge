"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SelectLanguage = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<main>
				<section className="auth signin-email select-lang">
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
						<h2>Select your Language</h2>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
					</div>

					<div className="auth-form">
						<form onSubmit={(e) => e.preventDefault()}>
							<div>
								<label htmlFor="languange">Languange</label>
								<div className="position-relative">
									<input
										type="text"
										id="languange"
										placeholder="Select languange"
										readOnly
										className="input-field"
										data-bs-toggle="modal"
										data-bs-target="#languageModal"
									/>
									<img
										src="/assets/svg/arrow-ios-downward.svg"
										alt="Arrow"
										className="arrow"
									/>
								</div>
							</div>
							<Link href="/home" className="btn-primary">
								Continue
							</Link>
						</form>
					</div>
				</section>
			</main>

			<div
				className="modal fade languageModal"
				id="languageModal"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-fullscreen">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="back-btn modal-close rounded-full"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<img src="/assets/svg/close-black.svg" alt="Close" />
							</button>
							<h1 className="modal-title">Select a Language</h1>
						</div>
						<div className="modal-body">
							<ul>
								<li>
									<label htmlFor="englishuk" className="lang-container">
										<input
											type="radio"
											id="englishuk"
											name="language"
											defaultChecked
										/>
										English (UK)
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="english" className="lang-container">
										<input type="radio" name="language" id="english" />
										English
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="bahasa" className="lang-container">
										<input type="radio" name="language" id="bahasa" />
										Bahasa Indonesia
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="chineses" className="lang-container">
										<input type="radio" name="language" id="chineses" />
										Chineses
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="croatian" className="lang-container">
										<input type="radio" name="language" id="croatian" />
										Croatian
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="czech" className="lang-container">
										<input type="radio" name="language" id="czech" />
										Czech
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="danish" className="lang-container">
										<input type="radio" name="language" id="danish" />
										Danish
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="filipino" className="lang-container">
										<input type="radio" name="language" id="filipino" />
										Filipino
										<span className="checkmark"></span>
									</label>
								</li>
								<li>
									<label htmlFor="finland" className="lang-container">
										<input type="radio" name="language" id="finland" />
										Finland
										<span className="checkmark"></span>
									</label>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SelectLanguage;
