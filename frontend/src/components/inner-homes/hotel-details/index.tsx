"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HotelDetails = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="details hotel-details">
				<section className="banner position-relative">
					<img
						src="/assets/images/details/banner-2.png"
						alt="Banner"
						className="w-100 img-fluid"
					/>

					<div className="page-title">
						<button
							onClick={handleBack}
							type="button"
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
						</button>
						<h3 className="main-title">Hotel Details</h3>
					</div>
				</section>

				<section className="details-body">
					<section className="d-flex align-items-center gap-8 details-title">
						<div className="flex-grow">
							<h3>The Lalit New Delhi</h3>
							<ul className="d-flex align-items-center gap-8">
								<li className="d-flex align-items-center gap-04">
									<img src="/assets/svg/map-marker.svg" alt="icon" />
									<p>Uttar Pradesh, India</p>
								</li>
								<li className="d-flex align-items-center gap-04">
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
									<p>
										<span>4.4</span> (41 Reviews)
									</p>
								</li>
							</ul>
						</div>
						<span className="d-flex align-items-center justify-content-center rounded-full shrink-0">
							<img src="/assets/svg/heart-red-light.svg" alt="" />
						</span>
					</section>

					<section className="facilities pt-32 pb-16">
						<div className="title d-flex align-items-center justify-content-between">
							<h4 className="shrink-0">Common Facilities</h4>
							<button
								type="button"
								data-bs-toggle="modal"
								data-bs-target="#serviceModal"
								className="shrink-0 d-inline-block"
							>
								See All
							</button>
						</div>

						<div className="grid gap-24">
							<div className="item text-center">
								<div className="icon d-flex align-items-center justify-content-center rounded-full">
									<img src="/assets/svg/wind.svg" alt="icon" />
								</div>
								<p>Ac</p>
							</div>

							<div className="item text-center">
								<div className="icon d-flex align-items-center justify-content-center rounded-full">
									<img src="/assets/svg/building.svg" alt="icon" />
								</div>
								<p>Restaurant</p>
							</div>

							<div className="item text-center">
								<div className="icon d-flex align-items-center justify-content-center rounded-full">
									<img src="/assets/svg/water.svg" alt="icon" />
								</div>
								<p>Swimming Pool</p>
							</div>

							<div className="item text-center">
								<div className="icon d-flex align-items-center justify-content-center rounded-full">
									<img src="/assets/svg/24-support.svg" alt="icon" />
								</div>
								<p>24-Hours Front Desk</p>
							</div>
						</div>
					</section>

					<section className="details-info py-16">
						<div className="title">
							<h4>Details</h4>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac
							leo lorem nisl. Viverra vulputate sodales quis et dui, lacus.
							Iaculis eu egestas leo egestas vel.
							<button type="button">More Details</button>
						</p>
					</section>

					<section className="reviews py-16">
						<div className="title d-flex align-items-center justify-content-between">
							<h4 className="shrink-0">Reviews</h4>
							<Link href="/review" className="shrink-0 d-inline-block">
								See All
							</Link>
						</div>

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
							</div>
						</div>
					</section>

					<section className="details-location pt-16">
						<div className="title">
							<h4>Location</h4>
						</div>

						<div className="overflow-hidden radius-16 map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846588.5514550178!2d-118.35899906676545!3d34.01855672774309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1701149305360!5m2!1sen!2sbd"
								style={{ border: 0 }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</section>
				</section>

				<section className="details-footer d-flex align-items-center justify-content-between gap-8 w-100">
					<p>
						$32 <span>$312</span>
					</p>
					<Link href="/book-hotel">Book Now</Link>
				</section>
			</main>

			<div
				className="modal fade serviceModal bottomModal modalBg"
				id="serviceModal"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="modal-close rounded-full"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<img src="/assets/svg/close-black.svg" alt="Close" />
							</button>
							<h1 className="modal-title">All Facilities</h1>
						</div>
						<div className="modal-body">
							<div className="facilities">
								<div className="grid gap-24">
									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/wind.svg" alt="icon" />
										</div>
										<p>Ac</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/building.svg" alt="icon" />
										</div>
										<p>Restaurant</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/water.svg" alt="icon" />
										</div>
										<p>Swimming Pool</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/24-support.svg" alt="icon" />
										</div>
										<p>24-Hours Front Desk</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/building.svg" alt="icon" />
										</div>
										<p>Modern Room</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/24-support.svg" alt="icon" />
										</div>
										<p>24-Hours Security</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/water.svg" alt="icon" />
										</div>
										<p>Beautiful View</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/wind.svg" alt="icon" />
										</div>
										<p>Open Space</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HotelDetails;
