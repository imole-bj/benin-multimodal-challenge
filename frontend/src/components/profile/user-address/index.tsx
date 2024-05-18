"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const UserAddress = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="profile-main user-address">
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">My Address</h3>
					<Link
						href="/add-address"
						className="plus-btn d-flex align-items-center justify-content-center ms-auto"
					>
						<img src="/assets/svg/plus-square.svg" alt="icon" />
					</Link>
				</div>

				<section className="all-address p-24">
					<div className="address-card">
						<label
							htmlFor="address-1"
							className="custom-check-container address-container"
						>
							<input
								type="radio"
								name="address"
								id="address-1"
								defaultChecked
							/>
							<span className="checkmark"></span>
							<small className="text d-block">
								<small className="address-card-title d-block">
									Andy Andrew
								</small>
								<small className="address-card-phn pt-04 pb-8 d-block">
									+1 234 567 890
								</small>
								<small className="address-card-phn d-block">
									1234 Your Road No #6789 <br /> Your City, Country
								</small>
							</small>
						</label>
						<button type="button" className="change-add">
							Change Address
						</button>
					</div>

					<div className="address-card mt-16">
						<label
							htmlFor="address-2"
							className="custom-check-container address-container"
						>
							<input type="radio" name="address" id="address-2" />
							<span className="checkmark"></span>
							<small className="text d-block">
								<small className="address-card-title d-block">
									Elevenia Kalia
								</small>
								<small className="address-card-phn pt-04 pb-8 d-block">
									+1 234 567 890
								</small>
								<small className="address-card-phn d-block">
									1234 Your Road No #6789 <br /> Your City, Country
								</small>
							</small>
						</label>
						<button type="button" className="change-add">
							Change Address
						</button>
					</div>
				</section>

				<div className="select-btn bottom-btn px-24 pt-24 pb-36">
					<button type="button" className="btn-primary">
						Select Address
					</button>
				</div>
			</main>
		</>
	);
};

export default UserAddress;
