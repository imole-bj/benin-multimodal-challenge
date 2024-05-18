"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Notification = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main>
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Notification</h3>
				</div>

				<section className="notification">
					<div>
						<h3 className="mb-32">Today</h3>
						<ul>
							<li className="d-flex gap-12">
								<div className="image d-flex align-items-center justify-content-center rounded-full overflow-hidden shrink-0">
									<img
										src="/assets/images/chat/img-2.png"
										alt="person"
										className="img-fluid h-100 w-100 object-fit-cover"
									/>
								</div>
								<div>
									<p className="pb-8">
										Ther is an incoming message from Richard Mandowen
									</p>
									<small className="d-block">2 hours Ago</small>
								</div>
							</li>
							<li className="d-flex gap-12">
								<div className="image d-flex align-items-center justify-content-center rounded-full overflow-hidden shrink-0">
									<img
										src="/assets/images/chat/img-4.png"
										alt="person"
										className="img-fluid h-100 w-100 object-fit-cover"
									/>
								</div>
								<div>
									<p className="pb-8">Outgoing call from Richar Kandowen</p>
									<small className="d-block">3 hours Ago</small>
								</div>
							</li>

							<li className="d-flex gap-12">
								<div className="image d-flex align-items-center justify-content-center rounded-full overflow-hidden shrink-0">
									<img src="/assets/svg/calendar-blue.svg" alt="icon" />
								</div>
								<div>
									<p className="pb-8">
										Do not forget to schedule your vacation to the Taj Mahal,{" "}
										<span>August 25, 2022</span>
									</p>
									<small className="d-block">4 hours Ago</small>
								</div>
							</li>
						</ul>
					</div>
					<div className="mt-24">
						<h3 className="mb-32">Yesterday</h3>

						<ul>
							<li className="d-flex gap-12">
								<div className="image d-flex align-items-center justify-content-center rounded-full overflow-hidden shrink-0">
									<img src="/assets/svg/wallet-blue.svg" alt="icon" />
								</div>
								<div>
									<p className="pb-8">
										Your payment for the holiday ticket to the taj mahal was
										successful
									</p>
									<small className="d-block">1 day Ago</small>
								</div>
							</li>
							<li className="d-flex gap-12">
								<div className="image d-flex align-items-center justify-content-center rounded-full overflow-hidden shrink-0">
									<img src="/assets/svg/wallet-blue.svg" alt="icon" />
								</div>
								<div>
									<p className="pb-8">
										Your payment for booking The Lalit New Delhi hotel was
										successful
									</p>
									<small className="d-block">1 day Ago</small>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
};

export default Notification;
