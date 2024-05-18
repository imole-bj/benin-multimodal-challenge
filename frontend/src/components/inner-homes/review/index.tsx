"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Review = () => {
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
					<h3 className="main-title">Review</h3>
				</div>

				<section className="reviews px-24 pb-24">
					<div className="review-card d-flex gap-16">
						<div className="shrink-0 image overflow-hidden rounded-full">
							<img
								src="/assets/images/details/avatar-2.png"
								alt="Avatar"
								className="img-fluid w-100"
							/>
						</div>

						<div className="flex-grow">
							<div className="d-flex align-items-center justify-content-between">
								<h4>Jhone Kenoady</h4>
								<span className="d-inline-block">23 Nov 2022</span>
							</div>
							<ul className="d-flex align-items-center gap-8">
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
							</ul>
							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
							<ul className="d-flex flex-wrap gap-8 mt-16">
								<li>
									<div className="review-image overflow-hidden radius-8">
										<img src="/assets/images/details/img-1.png" alt="Review" />
									</div>
								</li>
								<li>
									<div className="review-image overflow-hidden radius-8">
										<img src="/assets/images/details/img-2.png" alt="Review" />
									</div>
								</li>
								<li>
									<div className="review-image overflow-hidden radius-8">
										<img src="/assets/images/details/img-3.png" alt="Review" />
									</div>
								</li>
							</ul>
						</div>
					</div>

					<div className="review-card d-flex gap-16">
						<div className="shrink-0 image overflow-hidden rounded-full">
							<img
								src="/assets/images/details/avatar-3.png"
								alt="Avatar"
								className="img-fluid w-100"
							/>
						</div>

						<div className="flex-grow">
							<div className="d-flex align-items-center justify-content-between">
								<h4>Jhone Kenoady</h4>
								<span className="d-inline-block">23 Nov 2022</span>
							</div>
							<ul className="d-flex align-items-center gap-8">
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
							</ul>
							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
						</div>
					</div>

					<div className="review-card d-flex gap-16">
						<div className="shrink-0 image overflow-hidden rounded-full">
							<img
								src="/assets/images/details/avatar-4.png"
								alt="Avatar"
								className="img-fluid w-100"
							/>
						</div>

						<div className="flex-grow">
							<div className="d-flex align-items-center justify-content-between">
								<h4>Jhone Kenoady</h4>
								<span className="d-inline-block">23 Nov 2022</span>
							</div>
							<ul className="d-flex align-items-center gap-8">
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
							</ul>
							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
						</div>
					</div>

					<div className="review-card d-flex gap-16">
						<div className="shrink-0 image overflow-hidden rounded-full">
							<img
								src="/assets/images/details/avatar-5.png"
								alt="Avatar"
								className="img-fluid w-100"
							/>
						</div>

						<div className="flex-grow">
							<div className="d-flex align-items-center justify-content-between">
								<h4>Jhone Kenoady</h4>
								<span className="d-inline-block">23 Nov 2022</span>
							</div>
							<ul className="d-flex align-items-center gap-8">
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
								<li>
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
								</li>
							</ul>
							<p>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
							</p>
							<ul className="d-flex flex-wrap gap-8 mt-16">
								<li>
									<div className="review-image overflow-hidden radius-8">
										<img src="/assets/images/details/img-4.png" alt="Review" />
									</div>
								</li>
								<li>
									<div className="review-image overflow-hidden radius-8">
										<img src="/assets/images/details/img-5.png" alt="Review" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Review;
