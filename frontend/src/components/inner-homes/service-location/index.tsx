"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ServiceLocation = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};


	return (
		<>
			<main className="service-loc">
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Airport</h3>
				</div>

				<div id="map" className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846588.5514550178!2d-118.35899906676545!3d34.01855672774309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1701149305360!5m2!1sen!2sbd"
						style={{ border: 0, width: "100%", height: "100%", zIndex: -1 }}
						allowFullScreen={true}						
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				


			</main>

			<div
				className="modal fade locationModal bottomModal"
				id="locationModal"
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
							<h1 className="modal-title">List Location</h1>
						</div>
						<div className="modal-body">
							<ul className="item-list">
								<li
									className="item d-flex align-items-center gap-12 w-100"
									data-bs-target="#locationModal2"
									data-bs-toggle="modal"
								>
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/service-loc/loc-1.png"
											alt="Place"
											className="img-fluid w-100 h-100 object-fit-cover"
										/>
									</div>

									<div className="content flex-grow">
										<h4>San Francisco International Airport</h4>
										<p className="rating d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(41)</span>
										</p>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-black.svg" alt="icon" />
											San Francisco, Amerika Serikat
										</p>
									</div>
								</li>

								<li
									className="item d-flex align-items-center gap-12 w-100"
									data-bs-target="#locationModal2"
									data-bs-toggle="modal"
								>
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/service-loc/loc-2.png"
											alt="Place"
											className="img-fluid w-100 h-100 object-fit-cover"
										/>
									</div>

									<div className="content flex-grow">
										<h4>Bandar Udara Internasional Oakland</h4>
										<p className="rating d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(41)</span>
										</p>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-black.svg" alt="icon" />
											Oakland, Amerika Serikat
										</p>
									</div>
								</li>

								<li
									className="item d-flex align-items-center gap-12 w-100"
									data-bs-target="#locationModal2"
									data-bs-toggle="modal"
								>
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/service-loc/loc-3.png"
											alt="Place"
											className="img-fluid w-100 h-100 object-fit-cover"
										/>
									</div>

									<div className="content flex-grow">
										<h4>Silicon Valley Airport shuttle & Taxi Service</h4>
										<p className="rating d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(41)</span>
										</p>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-black.svg" alt="icon" />
											San Francisco, Amerika Serikat
										</p>
									</div>
								</li>

								<li
									className="item d-flex align-items-center gap-12 w-100"
									data-bs-target="#locationModal2"
									data-bs-toggle="modal"
								>
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/service-loc/loc-2.png"
											alt="Place"
											className="img-fluid w-100 h-100 object-fit-cover"
										/>
									</div>

									<div className="content flex-grow">
										<h4>Bandar Udara Internasional Oakland</h4>
										<p className="rating d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(41)</span>
										</p>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-black.svg" alt="icon" />
											Oakland, Amerika Serikat
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade locationModal locationModal2"
				id="locationModal2"
				aria-hidden="true"
				tabIndex={-1}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<div className="item d-flex align-items-center gap-12 w-100">
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/service-loc/loc-2.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content flex-grow">
									<h4>San Francisco International Airport</h4>
									<p className="rating d-flex align-items-center gap-04">
										<img src="/assets/svg/star-yellow.svg" alt="icon" />
										4.4 <span>(41)</span>
									</p>
									<p className="d-flex align-items-center gap-8 location">
										<img src="/assets/svg/map-black.svg" alt="icon" />
										San Francisco
									</p>
								</div>
							</div>

							<ul className="btn-list d-flex align-items-center gap-24 mt-24">
								<li>
									<a
										href="#"
										className="active d-flex align-items-center justify-content-center rounded-full"
									>
										<img src="/assets/svg/world-black.svg" alt="icon" />
									</a>
								</li>
								<li>
									<a
										href="#"
										className="d-flex align-items-center justify-content-center rounded-full"
									>
										<img src="/assets/svg/subdirectory-black.svg" alt="icon" />
									</a>
								</li>
								<li>
									<a
										href="#"
										className="d-flex align-items-center justify-content-center rounded-full"
									>
										<img src="/assets/svg/heart-black.svg" alt="icon" />
									</a>
								</li>
								<li>
									<a
										href="#"
										className="d-flex align-items-center justify-content-center rounded-full"
									>
										<img src="/assets/svg/phone-black.svg" alt="icon" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default ServiceLocation;
