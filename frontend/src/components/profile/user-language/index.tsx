"use client";

import { useRouter } from "next/navigation";
import React from "react";

const UserLanguage = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main>
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Language</h3>
				</div>

				<section className="suggested px-24 pb-24">
					<div className="border-box">
						<h5>Suggested Languages</h5>
						<ul>
							<li>
								<label
									htmlFor="l-uk"
									className="custom-check-container language-container"
								>
									<input
										type="radio"
										name="user-lang"
										id="l-uk"
										defaultChecked
									/>
									<span className="checkmark"></span>
									English (UK)
								</label>
							</li>
							<li>
								<label
									htmlFor="l-english"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-english" />
									<span className="checkmark"></span>
									English
								</label>
							</li>
							<li>
								<label
									htmlFor="l-indo"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-indo" />
									<span className="checkmark"></span>
									Bahasa Indonesia
								</label>
							</li>
						</ul>
					</div>
				</section>

				<section className="suggested px-24 pb-36">
					<div className="border-box">
						<h5>Other Languages</h5>
						<ul>
							<li>
								<label
									htmlFor="l-china"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-china" />
									<span className="checkmark"></span>
									Chineses
								</label>
							</li>
							<li>
								<label
									htmlFor="l-croatian"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-croatian" />
									<span className="checkmark"></span>
									Croatian
								</label>
							</li>
							<li>
								<label
									htmlFor="l-czech"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-czech" />
									<span className="checkmark"></span>
									Czech
								</label>
							</li>
							<li>
								<label
									htmlFor="l-danish"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-danish" />
									<span className="checkmark"></span>
									Danish
								</label>
							</li>
							<li>
								<label
									htmlFor="l-filipino"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-filipino" />
									<span className="checkmark"></span>
									Filipino
								</label>
							</li>
							<li>
								<label
									htmlFor="l-finland"
									className="custom-check-container language-container"
								>
									<input type="radio" name="user-lang" id="l-finland" />
									<span className="checkmark"></span>
									Finland
								</label>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
};

export default UserLanguage;
