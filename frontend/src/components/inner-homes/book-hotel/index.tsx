"use client";

import AllFilterModal from "@/modals/AllFilterModal";
import CheckModal from "@/modals/CheckModal";
import CheckOutModal from "@/modals/CheckOutModal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BookHotel = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	const [checkIn, setCheckIn] = useState(false);
	const [checkOut, setCheckOut] = useState(false);
	const [filter, setFilter] = useState(false);

	return (
		<>
			<main className="booking-main book-hotel">
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Book Hotel</h3>
				</div>

				<div className="details-body">
					<section className="customer-info pb-12">
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

					<section className="order-info py-12">
						<div className="title mb-16">
							<h4>Order Info</h4>
						</div>

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

						<div className="room-type mt-16 d-flex align-items-center justify-content-between">
							<p>Type Room</p>
							<p>Presidential Suite</p>
						</div>
					</section>

					<section className="facilities py-12">
						<div className="title d-flex align-items-center justify-content-between">
							<h4 className="shrink-0">Common Facilities</h4>
							<button
								onClick={() => setFilter(!filter)}
								type="button"
								className="shrink-0 d-inline-block"
								data-bs-toggle="modal"
								data-bs-target="#serviceModal"
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

					<section className="search pt-12">
						<div className="title d-flex align-items-center justify-content-between">
							<h4 className="shrink-0">Stay time</h4>
						</div>

						<form onSubmit={(e) => e.preventDefault()}>
							<div className="grid">
								<div>
									<p className="pb-8">Check in</p>
									<label
										htmlFor="hcindate"
										className="w-100 d-flex align-items-center gap-8 radius-24"
										data-bs-toggle="modal"
										data-bs-target="#checkInModal"
									>
										<input
											type="text"
											id="hcindate"
											placeholder="Date"
											className="input-field"
										/>
										<span
											onClick={() => setCheckIn(!checkIn)}
											className="icon shrink-0"
										>
											<img src="/assets/svg/calendar.svg" alt="calendar" />
										</span>
									</label>
								</div>

								<div>
									<p className="pb-8">Check Out</p>
									<label
										htmlFor="hcoutdate"
										className="w-100 d-flex align-items-center gap-8 radius-24"
										data-bs-toggle="modal"
										data-bs-target="#checkOutModal"
									>
										<input
											type="text"
											id="hcoutdate"
											placeholder="Date"
											className="input-field"
										/>
										<span
											onClick={() => setCheckOut(!checkOut)}
											className="icon shrink-0"
										>
											<img src="/assets/svg/calendar.svg" alt="calendar" />
										</span>
									</label>
								</div>
							</div>
						</form>
					</section>

					<div className="pay-btn mt-64">
						<Link href="/checkout-hotel" className="btn-primary">
							Continue
						</Link>
					</div>
				</div>
			</main>

			<CheckModal setCheckIn={setCheckIn} checkIn={checkIn} />
			<CheckOutModal setCheckOut={setCheckOut} checkOut={checkOut} />
			<AllFilterModal setFilter={setFilter} filter={filter} />
		</>
	);
};

export default BookHotel;
