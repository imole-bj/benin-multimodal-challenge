"use client";

import SuccessModal from "@/modals/SuccessModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap");
}

const CheckoutVacation = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	const [success, setSuccess] = useState(false);
	const [showBirthModal, setShowBirthModal] = useState(false);
	const handleShowBirthModal = () => {
		setShowBirthModal(!showBirthModal);
	};
	const [value, onChange] = useState<Value>(new Date());

	return (
		<>
			<div className={`${success ? "modal-open" : ""}`}>
				<main className="booking-main checkout-vacation">
					<div className="page-title">
						<button
							onClick={handleBack}
							type="button"
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
						</button>
						<h3 className="main-title">Checkout Vacation </h3>
					</div>

					<section className="customer-info px-24 pb-12">
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

					<section className="order-info px-24 pt-12 pb-24">
						<div className="title mb-16">
							<h4>Order Info</h4>
						</div>

						<div className="item d-flex align-items-center gap-16 w-100">
							<div className="image shrink-0 overflow-hidden radius-8">
								<img
									src="/assets/images/booking/loc-1.png"
									alt="Place"
									className="img-fluid w-100 h-100 object-fit-cover"
								/>
							</div>

							<div className="content flex-grow">
								<h4>Taj Mahal</h4>
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

						<div className="search mt-16">
							<h6 className="mb-8">Date Visit</h6>
							<label
								htmlFor="vdate"
								className="w-100 d-flex align-items-center gap-8 radius-24"
								data-bs-toggle="modal"
								data-bs-target="#visitDateModal"
							>
								<input
									type="text"
									id="vdate"
									placeholder="Date"
									className="input-field"
								/>
								<span className="icon shrink-0">
									<img src="/assets/svg/calendar.svg" alt="calendar" />
								</span>
							</label>
						</div>

						<div className="mt-16">
							<h6 className="mb-8">Number of people</h6>
							<input
								type="text"
								placeholder="Number of people"
								className="input-field"
							/>
						</div>

						<div className="price border-b d-flex align-items-center justify-content-between pt-16 pb-24">
							<p>Price</p>
							<p>
								<span>$32</span> / Person
							</p>
						</div>

						<div className="price d-flex align-items-center justify-content-between pt-24">
							<p>Total</p>
							<p>
								<span>$160</span>
							</p>
						</div>

						<div className="promo-code py-24">
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
								<span>-$10</span>
							</p>
						</div>

						<div className="price d-flex align-items-center justify-content-between pt-24">
							<p>Total Pay</p>
							<p>
								<span>$150</span>
							</p>
						</div>

						<div className="payment-method pt-24">
							<div className="sub-title mb-16">
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
						</div>

						<div className="pay-btn mt-64">
							<button
								onClick={() => setSuccess(!success)}
								type="button"
								className="btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#orderSuccessModal"
							>
								Pay Now
							</button>
						</div>
					</section>
				</main>

				<div
					className="modal fade visitDateModal dateModal modalBg"
					id="visitDateModal"
					tabIndex={-1}
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header justify-content-center">
								<h1 className="modal-title" id="visitDateModalLabel">
									Date Visit
								</h1>
							</div>
							<div className="modal-body">
								<Calendar onChange={onChange} value={value} />

								<div className="btns d-flex align-items-center gap-16">
									<button
										type="button"
										className="radius-20 w-50 cancel-btn"
										data-bs-dismiss="modal"
										aria-label="Close"
									>
										Cancel
									</button>
									<button
										type="button"
										className="radius-20 w-50 apply-btn"
										data-bs-dismiss="modal"
										aria-label="Close"
									>
										Apply
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<SuccessModal success={success} setSuccess={setSuccess} />
		</>
	);
};

export default CheckoutVacation;
