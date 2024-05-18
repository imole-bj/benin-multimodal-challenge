"use client";

import Link from "next/link";
import React, { useState } from "react";

const TicketBooked = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<main className="ticket">
				<div className="page-title">
					<h3 className="main-title">My Booked</h3>
				</div>

				<section className="ticket-tab">
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item" role="presentation">
							<button
								className="nav-link active"
								id="booked-tab"
								data-bs-toggle="tab"
								data-bs-target="#booked-tab-pane"
								type="button"
								role="tab"
								aria-controls="booked-tab-pane"
								aria-selected="true"
							>
								Booked
							</button>
						</li>
						<li className="nav-item" role="presentation">
							<button
								className="nav-link"
								id="history-tab"
								data-bs-toggle="tab"
								data-bs-target="#history-tab-pane"
								type="button"
								role="tab"
								aria-controls="history-tab-pane"
								aria-selected="false"
							>
								History
							</button>
						</li>
					</ul>
					<div className="tab-content" id="myTabContent">
						<div
							className="tab-pane fade show active"
							id="booked-tab-pane"
							role="tabpanel"
							aria-labelledby="booked-tab"
							tabIndex={-1}
						>
							<div className="ticket-card radius-8">
								<div className="card-title d-flex align-items-center justify-content-between">
									<p>22 march 2022, Thu</p>
									<span>Will Come</span>
								</div>

								<div className="card-item d-flex align-items-center gap-16 w-100">
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/ticket/img-1.png"
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
											4.4 <span>(41 Reviews)</span>
										</p>
									</div>
								</div>

								<div className="card-footer d-flex align-items-center justify-content-between">
									<div>
										<p>Total Price</p>
										<h3>$320</h3>
									</div>

									<Link href="/ticket-detail">Detail</Link>
								</div>
							</div>

							<div className="ticket-card radius-8">
								<div className="card-title d-flex align-items-center justify-content-between">
									<p>22 march 2022, Thu</p>
									<span>Will Come</span>
								</div>

								<div className="card-item d-flex align-items-center gap-16 w-100">
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/ticket/img-3.png"
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
											4.4 <span>(41 Reviews)</span>
										</p>
									</div>
								</div>

								<div className="card-footer d-flex align-items-center justify-content-between">
									<div>
										<p>Total Price</p>
										<h3>$320</h3>
									</div>

									<Link href="/ticket-detail">Detail</Link>
								</div>
							</div>

							<div className="ticket-card radius-8">
								<div className="card-title d-flex align-items-center justify-content-between">
									<p>22 march 2022, Thu</p>
									<span>Will Come</span>
								</div>

								<div className="card-item d-flex align-items-center gap-16 w-100">
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/ticket/img-2.png"
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
											4.4 <span>(41 Reviews)</span>
										</p>
									</div>
								</div>

								<div className="card-footer d-flex align-items-center justify-content-between">
									<div>
										<p>Total Price</p>
										<h3>$320</h3>
									</div>

									<Link href="/ticket-detail">Detail</Link>
								</div>
							</div>
						</div>

						<div
							className="tab-pane fade"
							id="history-tab-pane"
							role="tabpanel"
							aria-labelledby="history-tab"
							tabIndex={-1}
						>
							<div className="ticket-card history radius-8">
								<div className="card-title d-flex align-items-center justify-content-between">
									<p>22 march 2022, Thu</p>
									<span>Finished</span>
								</div>

								<div className="card-item d-flex align-items-center gap-16 w-100">
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/ticket/img-4.png"
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
											4.4 <span>(41 Reviews)</span>
										</p>
									</div>
								</div>

								<div className="card-footer">
									<div className="top d-flex align-items-center justify-content-between">
										<div>
											<p>Total Price</p>
											<h3>$320</h3>
										</div>

										<button
											type="button"
											className="rating"
											data-bs-toggle="modal"
											data-bs-target="#reviewModal"
										>
											Rating
										</button>
									</div>
									<Link href="/ticket-detail">Detail</Link>
								</div>
							</div>

							<div className="ticket-card history radius-8">
								<div className="card-title d-flex align-items-center justify-content-between">
									<p>22 march 2022, Thu</p>
									<span>Finished</span>
								</div>

								<div className="card-item d-flex align-items-center gap-16 w-100">
									<div className="image shrink-0 overflow-hidden radius-8">
										<img
											src="/assets/images/ticket/img-2.png"
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
											4.4 <span>(41 Reviews)</span>
										</p>
									</div>
								</div>

								<div className="card-footer">
									<div className="top d-flex align-items-center justify-content-between">
										<div>
											<p>Total Price</p>
											<h3>$320</h3>
										</div>

										<button
											type="button"
											className="rating"
											data-bs-toggle="modal"
											data-bs-target="#reviewModal"
										>
											Rating
										</button>
									</div>
									<Link href="/ticket-detail">Detail</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="bottom-nav">
				<ul className="d-flex align-items-center justify-content-around w-100 h-100">
					<li>
						<Link href="/home">
							<img src="/assets/svg/bottom-nav/home.svg" alt="home" />
						</Link>
					</li>
					<li>
						<Link href="/explore">
							<img src="/assets/svg/bottom-nav/category.svg" alt="category" />
						</Link>
					</li>
					<li>
						<Link href="/ticket-booked">
							<img
								src="/assets/svg/bottom-nav/ticket-active.svg"
								alt="ticket"
							/>
						</Link>
					</li>
					<li>
						<Link href="/wishlist">
							<img src="/assets/svg/bottom-nav/heart.svg" alt="heart" />
						</Link>
					</li>
					<li>
						<Link href="/user-profile">
							<img src="/assets/svg/bottom-nav/profile.svg" alt="profile" />
						</Link>
					</li>
				</ul>
			</footer>

			<div
				className="modal fade reviewModal bottomModal"
				id="reviewModal"
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
							<h1 className="modal-title">Give a Review</h1>
						</div>
						<div className="modal-body">
							<ul className="ratingW d-flex align-items-center justify-content-center">
								<li className="on">
									<a href="javascript:void(0);">
										<img
											src="/assets/svg/star-yellow-big.svg"
											className="star-yellow"
											alt="Star"
										/>
										<img
											src="/assets/svg/star-gray.svg"
											className="star-gray"
											alt="Star"
										/>
									</a>
								</li>
								<li className="on">
									<a href="javascript:void(0);">
										<img
											src="/assets/svg/star-yellow-big.svg"
											className="star-yellow"
											alt="Star"
										/>
										<img
											src="/assets/svg/star-gray.svg"
											className="star-gray"
											alt="Star"
										/>
									</a>
								</li>
								<li className="on">
									<a href="javascript:void(0);">
										<img
											src="/assets/svg/star-yellow-big.svg"
											className="star-yellow"
											alt="Star"
										/>
										<img
											src="/assets/svg/star-gray.svg"
											className="star-gray"
											alt="Star"
										/>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);">
										<img
											src="/assets/svg/star-yellow-big.svg"
											className="star-yellow"
											alt="Star"
										/>
										<img
											src="/assets/svg/star-gray.svg"
											className="star-gray"
											alt="Star"
										/>
									</a>
								</li>
								<li>
									<a href="javascript:void(0);">
										<img
											src="/assets/svg/star-yellow-big.svg"
											className="star-yellow"
											alt="Star"
										/>
										<img
											src="/assets/svg/star-gray.svg"
											className="star-gray"
											alt="Star"
										/>
									</a>
								</li>
							</ul>

							<div className="msg">
								<h6>Detail Review</h6>
								<textarea placeholder="Give a Review"></textarea>
							</div>
							<button
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
								className="btn-primary"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TicketBooked;
