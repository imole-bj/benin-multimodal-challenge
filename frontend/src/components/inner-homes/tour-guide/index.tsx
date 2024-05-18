"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TourGuide = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="tour-guide">
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Tour Guide</h3>
				</div>

				<section className="guide px-24 pb-24">
					<ul>
						<li>
							<Link
								href="/guide-profile"
								className="d-flex gap-16 item w-fit shrink-0"
							>
								<div className="image position-relative shrink-0">
									<img
										src="/assets/images/home/guide-1.png"
										alt="guide"
										className="guide-img object-fit-cover img-fluid radius-12"
									/>
									<div className="rating d-flex align-items-center gap-04 w-fit">
										<img src="/assets/svg/star-yellow.svg" alt="Star" />
										<span className="d-inline-block">4.0</span>
									</div>
								</div>

								<div className="content">
									<h4>Alenzo Endera</h4>
									<h5>$25 (1 Day)</h5>
									<p className="d-flex align-items-center gap-8 location">
										<img src="/assets/svg/map-black.svg" alt="icon" />
										Polynesia, French
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/guide-profile"
								className="d-flex gap-16 item w-fit shrink-0"
							>
								<div className="image position-relative shrink-0">
									<img
										src="/assets/images/home/guide-2.png"
										alt="guide"
										className="guide-img object-fit-cover img-fluid radius-12"
									/>
									<div className="rating d-flex align-items-center gap-04 w-fit">
										<img src="/assets/svg/star-yellow.svg" alt="Star" />
										<span className="d-inline-block">4.0</span>
									</div>
								</div>

								<div className="content">
									<h4>Jhone Kenoady</h4>
									<h5>$25 (1 Day)</h5>
									<p className="d-flex align-items-center gap-8 location">
										<img src="/assets/svg/map-black.svg" alt="icon" />
										Polynesia, French
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/guide-profile"
								className="d-flex gap-16 item w-fit shrink-0"
							>
								<div className="image position-relative shrink-0">
									<img
										src="/assets/images/home/guide-3.png"
										alt="guide"
										className="guide-img object-fit-cover img-fluid radius-12"
									/>
									<div className="rating d-flex align-items-center gap-04 w-fit">
										<img src="/assets/svg/star-yellow.svg" alt="Star" />
										<span className="d-inline-block">4.0</span>
									</div>
								</div>

								<div className="content">
									<h4>Emilia Ricardo</h4>
									<h5>$25 (1 Day)</h5>
									<p className="d-flex align-items-center gap-8 location">
										<img src="/assets/svg/map-black.svg" alt="icon" />
										Polynesia, French
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/guide-profile"
								className="d-flex gap-16 item w-fit shrink-0"
							>
								<div className="image position-relative shrink-0">
									<img
										src="/assets/images/home/guide-4.png"
										alt="guide"
										className="guide-img object-fit-cover img-fluid radius-12"
									/>
									<div className="rating d-flex align-items-center gap-04 w-fit">
										<img src="/assets/svg/star-yellow.svg" alt="Star" />
										<span className="d-inline-block">4.0</span>
									</div>
								</div>

								<div className="content">
									<h4>Alexa Bigford</h4>
									<h5>$25 (1 Day)</h5>
									<p className="d-flex align-items-center gap-8 location">
										<img src="/assets/svg/map-black.svg" alt="icon" />
										Polynesia, French
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/guide-profile"
								className="d-flex gap-16 item w-fit shrink-0"
							>
								<div className="image position-relative shrink-0">
									<img
										src="/assets/images/home/guide-1.png"
										alt="guide"
										className="guide-img object-fit-cover img-fluid radius-12"
									/>
									<div className="rating d-flex align-items-center gap-04 w-fit">
										<img src="/assets/svg/star-yellow.svg" alt="Star" />
										<span className="d-inline-block">4.0</span>
									</div>
								</div>

								<div className="content">
									<h4>Alenzo Endera</h4>
									<h5>$25 (1 Day)</h5>
									<p className="d-flex align-items-center gap-8 location">
										<img src="/assets/svg/map-black.svg" alt="icon" />
										Polynesia, French
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/guide-profile"
								className="d-flex gap-16 item w-fit shrink-0"
							>
								<div className="image position-relative shrink-0">
									<img
										src="/assets/images/home/guide-2.png"
										alt="guide"
										className="guide-img object-fit-cover img-fluid radius-12"
									/>
									<div className="rating d-flex align-items-center gap-04 w-fit">
										<img src="/assets/svg/star-yellow.svg" alt="Star" />
										<span className="d-inline-block">4.0</span>
									</div>
								</div>

								<div className="content">
									<h4>Jhone Kenoady</h4>
									<h5>$25 (1 Day)</h5>
									<p className="d-flex align-items-center gap-8 location">
										<img src="/assets/svg/map-black.svg" alt="icon" />
										Polynesia, French
									</p>
								</div>
							</Link>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
};

export default TourGuide;
