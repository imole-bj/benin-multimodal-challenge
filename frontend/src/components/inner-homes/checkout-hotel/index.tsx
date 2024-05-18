"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CheckoutHotel = () => {
	const [showModal, setShowModal] = useState(false);
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="booking-main checkout-hotel">
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Checkout</h3>
				</div>

				<div className="details-body">
					<section className="order-info pb-12">
						<div className="item d-flex align-items-center gap-16 w-100">
							<div className="image shrink-0 overflow-hidden radius-8">
								<img
									src="/assets/images/booking/loc-2.png"
									alt="Place"
									className="img-fluid w-100 h-100 object-fit-cover"
								/>
							</div>

							<div className="content flex-grow">
								<h4>The Lalit New Delhi</h4>
								<p className="d-flex align-items-center gap-04 location mt-04">
									<img src="/assets/svg/map-marker.svg" alt="icon" />
									Uttar Pradesh, India
								</p>
								<p className="rating d-flex align-items-center gap-04 mt-16">
									<img src="/assets/svg/star-yellow.svg" alt="icon" />
									4.4 <span>(41)</span>
								</p>
							</div>
						</div>
					</section>

					<section className="customer-info py-12">
						<div className="title mb-16">
							<h4>Customer Info</h4>
						</div>

						<ul>
							<li className="d-flex align-items-center justify-content-between">
								<p>Name</p>
								<p>Andy Lexian</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Email</p>
								<p>example@mail.com</p>
							</li>
						</ul>
					</section>

					<section className="customer-info order-info py-12">
						<div className="title mb-16">
							<h4>Order Info</h4>
						</div>

						<ul className="pb-24">
							<li className="d-flex align-items-center justify-content-between">
								<p>length of stay</p>
								<p>3 days 2 nights</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Check In</p>
								<p>June 12, 2022</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Check Out</p>
								<p>June 14, 2022</p>
							</li>
							<li className="d-flex align-items-center justify-content-between">
								<p>Type Room</p>
								<p>Presidential Suite</p>
							</li>
						</ul>

						<div className="price border-t d-flex align-items-center justify-content-between pt-24">
							<p>Total</p>
							<p>
								<span>$320</span>
							</p>
						</div>

						<div className="promo-code pt-24 pb-16">
							<div className="sub-title mb-16">
								<h4>Promo Code</h4>
							</div>

							<div className="d-flex align-items-center gap-8 input-area">
								<input
									type="text"
									placeholder="Input code"
									className="flex-grow"
								/>
								<button type="button" className="shrink-0">
									Apply
								</button>
							</div>
						</div>

						<div className="price border-b pb-24 promo-price d-flex align-items-center justify-content-between">
							<p>Promo</p>
							<p>
								<span>-$20</span>
							</p>
						</div>

						<div className="price d-flex align-items-center justify-content-between pt-24">
							<p>Total Pay</p>
							<p>
								<span>$300</span>
							</p>
						</div>
					</section>

					<section className="payment-method pt-12">
						<div className="title mb-16">
							<h4>Payment Method</h4>
						</div>
						<ul>
							<li className="mb-16">
								<label
									htmlFor="visa"
									className="pay-card-container d-flex align-items-center gap-20"
								>
									<img src="/assets/images/booking/visa.png" alt="Visa" />
									<span>•••• •••• •••• 87652</span>
									<input type="radio" name="pay-card" id="visa" />
									<span className="checkmark"></span>
								</label>
							</li>
							<li>
								<label
									htmlFor="master"
									className="pay-card-container d-flex align-items-center gap-20"
								>
									<img src="/assets/images/booking/master.png" alt="master" />
									<span>•••• •••• •••• 87652</span>
									<input type="radio" name="pay-card" id="master" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>
					</section>

					<div className="pay-btn mt-64">
						<button
							onClick={() => setShowModal(true)}
							type="button"
							className="btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#orderSuccessModal"
						>
							Pay Now
						</button>
					</div>
				</div>
			</main>

			<div
				className={`modal fade orderSuccessModal modalBg ${
					showModal ? "show" : ""
				}`}
				id="orderSuccessModal"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body text-center">
							<img src="/assets/images/booking/thumsup.png" alt="" />
							<h3 className="pt-30">Order Successful</h3>
							<p className="pt-8 pb-30">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
							<Link href="/" className="btn-primary">
								Continue
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutHotel;
