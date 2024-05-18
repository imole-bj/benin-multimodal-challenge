"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Hotels = () => {
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

					<h3 className="main-title">Hotels</h3>
				</div>

				<section className="budget px-24 pb-24">
					<ul>
						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/budget-1.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Ledadu Beach</h4>
										<h5>3 days 2 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											Australia
										</p>
									</div>
									<p className="price">
										<span>$20</span>/Person
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/budget-2.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Endigada Beach</h4>
										<h5>5 days 4 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											India
										</p>
									</div>
									<p className="price">
										<span>$18</span>/Person
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/item-3.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Doreen Tower</h4>
										<h5>5 days 4 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											USA
										</p>
									</div>
									<p className="price">
										<span>$14</span>/Person
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/item-7.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Royal Palace</h4>
										<h5>5 days 4 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											India
										</p>
									</div>
									<p className="price">
										<span>$21</span>/Person
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/item-6.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Ignition Mall</h4>
										<h5>5 days 4 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											China
										</p>
									</div>
									<p className="price">
										<span>$17</span>/Person
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/item-11.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Endigada Hotel</h4>
										<h5>5 days 4 nights</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											Australia
										</p>
									</div>
									<p className="price">
										<span>$20</span>/Person
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

export default Hotels;
