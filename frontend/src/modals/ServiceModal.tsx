import Link from "next/link";
import React from "react";

const ServiceModal = ({ setShowModal, showModal }: any) => {
	return (
		<>
			<div
				className={`modal fade serviceModal bottomModal modalBg ${
					showModal ? "show" : ""
				}`}
				id="serviceModal"
				tabIndex={-1}
				aria-hidden="true"
				style={{ display: showModal ? "block" : "none" }}
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
							<h1 className="modal-title">All Services</h1>
						</div>
						<div className="modal-body">
							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/airport.png"
											alt="airport"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Airport</figcaption>
								</figure>
							</Link>

							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/car.png"
											alt="car"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Taxi</figcaption>
								</figure>
							</Link>

							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/hotel.png"
											alt="hotel"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Hotel</figcaption>
								</figure>
							</Link>

							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/villa.png"
											alt="airport"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Villa</figcaption>
								</figure>
							</Link>

							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/cafe.png"
											alt="car"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Cafe</figcaption>
								</figure>
							</Link>

							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/luggage.png"
											alt="hotel"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Luggage</figcaption>
								</figure>
							</Link>

							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/boat.png"
											alt="car"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Ship</figcaption>
								</figure>
							</Link>

							<Link href="/service-location">
								<figure className="item text-center">
									<div className="image rounded-full d-flex align-items-center justify-content-center m-auto">
										<img
											src="/assets/images/home/camera.png"
											alt="hotel"
											className="img-fluid backface-hidden"
										/>
									</div>
									<figcaption>Camera </figcaption>
								</figure>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceModal;
