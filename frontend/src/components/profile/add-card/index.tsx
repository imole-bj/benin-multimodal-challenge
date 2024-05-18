"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AddCard = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="profile-main">
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Add New Card</h3>
				</div>

				<section className="add-card p-24 pt-0">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="mb-24">
							<label>Card Number</label>
							<input
								type="text"
								placeholder="Enter Card Number"
								className="input-field"
							/>
						</div>
						<div className="mb-24">
							<label>Card Holder Name</label>
							<input
								type="text"
								placeholder="Enter Holder Name"
								className="input-field"
							/>
						</div>
						<div className="grid">
							<div>
								<label>Expired</label>
								<input
									type="text"
									placeholder="MM/YY"
									className="input-field"
								/>
							</div>
							<div>
								<label>CVC Code</label>
								<input type="text" placeholder="CVC" className="input-field" />
							</div>
						</div>
					</form>
				</section>

				<div className="add-card-btn px-24 pt-24 pb-36 bottom-btn">
					<button type="button" className="btn-primary" disabled>
						Add Card
					</button>
				</div>
			</main>
		</>
	);
};

export default AddCard;
