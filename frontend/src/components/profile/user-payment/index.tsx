"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UserPayment = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="profile-main user-payment">
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">My Payment</h3>
					<Link
						href="/add-card"
						className="plus-btn d-flex align-items-center justify-content-center ms-auto rounded-full"
					>
						<img src="/assets/svg/plus-outline.svg" alt="icon" />
					</Link>
				</div>

				<section className="payment-method px-24">
					<label
						htmlFor="visa-card"
						className="custom-check-container payment-container pt-16"
					>
						<input type="radio" name="payment" id="visa-card" defaultChecked />
						<span className="checkmark"></span>
						<span className="d-flex gap-12">
							<span className="icon shrink-0 rounded-full d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/profile/visa.png"
									alt="card"
									className="img-fluid"
								/>
							</span>
							<span className="d-block text flex-grow pb-16">
								<small className="d-block payment-method-card-title">
									BCA (Bank Central Asia)
								</small>
								<small className="d-block pt-04 pb-8 payment-method-card-num">
									•••• •••• •••• 12345
								</small>
								<small className="d-block payment-method-card-num">
									Brooklyn Simmons
								</small>
							</span>
						</span>
					</label>

					<label
						htmlFor="master-card"
						className="custom-check-container payment-container pt-16"
					>
						<input type="radio" name="payment" id="master-card" />
						<span className="checkmark"></span>
						<span className="d-flex gap-12">
							<span className="icon shrink-0 rounded-full d-flex align-items-center justify-content-center">
								<img
									src="/assets/images/profile/master.png"
									alt="card"
									className="img-fluid"
								/>
							</span>
							<span className="d-block text flex-grow pb-16">
								<small className="d-block payment-method-card-title">
									BCA (Bank Central Asia)
								</small>
								<small className="d-block pt-04 pb-8 payment-method-card-num">
									•••• •••• •••• 12345
								</small>
								<small className="d-block payment-method-card-num">
									Brooklyn Simmons
								</small>
							</span>
						</span>
					</label>
				</section>

				<div className="select-btn bottom-btn px-24 pt-24 pb-36">
					<button type="button" className="btn-primary">
						Select Payment
					</button>
				</div>
			</main>
		</>
	);
};

export default UserPayment;
