"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HelpSupport = () => {
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
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Help and Support</h3>
				</div>

				<section className="help-main search px-24">
					<form action="#">
						<div className="help-search w-100 d-flex align-items-center gap-8 radius-24">
							<img
								src="/assets/svg/search.svg"
								alt="search"
								className="shrink-0"
							/>
							<input
								type="search"
								className="input-search input-field"
								placeholder="Search..."
							/>
							<div className="filter shrink-0">
								<button type="button" className="d-flex align-items-center">
									<img src="/assets/svg/filter-black.svg" alt="filter" />
								</button>
							</div>
						</div>
					</form>
				</section>

				<section className="faq px-24 py-32">
					<div className="accordion" id="accordionExample">
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									What is porem ipsum dolor sit amet
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse show"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<p>
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									What is porem ipsum dolor sit amet
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<p>
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									What is porem ipsum dolor sit amet
								</button>
							</h2>
							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<p>
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									What is porem ipsum dolor sit amet
								</button>
							</h2>
							<div
								id="collapseFour"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<p>
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFive"
									aria-expanded="false"
									aria-controls="collapseFive"
								>
									What is porem ipsum dolor sit amet
								</button>
							</h2>
							<div
								id="collapseFive"
								className="accordion-collapse collapse"
								data-bs-parent="#accordionExample"
							>
								<div className="accordion-body">
									<p>
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit. Exercitation veniam consequat sunt nostrud amet.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default HelpSupport;
