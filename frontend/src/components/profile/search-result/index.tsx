"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const SearchResult = () => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	const router = useRouter();
	const handleBack = () => {
		router.back();
	};
	const [value, onChange] = useState<Value>(new Date());

	return (
		<>
			<main className="search-result">
				<div className="page-title">
					<button
						onClick={handleBack}
						type="button"
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Search Destination</h3>
				</div>

				<section className="search pb-12">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="search pb-24">
							<div className="form-inner w-100 d-flex align-items-center gap-8 radius-24">
								<img
									src="/assets/svg/search.svg"
									alt="search"
									className="shrink-0"
								/>
								<input
									type="search"
									className="input-search input-field"
									placeholder="Search..."
								/>
								<div className="filter shrink-0">
									<button
										type="button"
										className="d-flex align-items-center"
										data-bs-toggle="modal"
										data-bs-target="#filterModal"
									>
										<img src="/assets/svg/filter-black.svg" alt="filter" />
									</button>
								</div>
							</div>
						</div>

						<div className="grid">
							<label
								htmlFor="sdate"
								className="w-100 d-flex align-items-center gap-8 radius-24"
								data-bs-toggle="modal"
								data-bs-target="#selectDateModal"
							>
								<input
									type="text"
									id="sdate"
									placeholder="Date"
									className="input-field"
								/>
								<span className="icon shrink-0">
									<img src="/assets/svg/calendar.svg" alt="calendar" />
								</span>
							</label>

							<label
								htmlFor="slocation"
								className="w-100 d-flex align-items-center gap-8 radius-24"
								data-bs-toggle="modal"
								data-bs-target="#selectLocationModal"
							>
								<input
									type="text"
									id="slocation"
									placeholder="Location"
									className="input-field"
								/>
								<span className="icon shrink-0">
									<img src="/assets/svg/map-marker.svg" alt="calendar" />
								</span>
							</label>
						</div>
					</form>
				</section>

				<section className="recommended py-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">Recommendation</h2>
						<Link href="/explore" className="shrink-0 d-inline-block">
							See All
						</Link>
					</div>

					<div className="grid">
						<div className="place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-7.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-red.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>Tahiti Beach</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										Polynesia, French
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</div>

						<div className="place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-8.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-black.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>St. Lucia Mountain</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										South America
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</div>

						<div className="place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-9.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-black.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>Cappadocia</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										Turki
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</div>

						<div className="place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-10.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-red.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>Hanalei Bay</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										Hawaii
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</div>

						<div className="place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-4.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-black.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>Tahiti Beach</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										Polynesia, French
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</div>

						<div className="place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-6.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-black.svg" alt="icon" />
									</span>
								</div>
								<div className="content">
									<h4>St. Lucia Mountain</h4>
									<p className="d-flex align-items-center gap-04 location">
										<img src="/assets/svg/map-marker.svg" alt="icon" />
										Polynesia, French
									</p>
									<div className="price d-flex align-items-center justify-content-between">
										<h3>$235</h3>
										<p className="d-flex align-items-center gap-04">
											<img src="/assets/svg/star-yellow.svg" alt="icon" />
											4.4 <span>(32)</span>
										</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</section>
			</main>

			<div
				className="modal fade selectLocationModal modalBg"
				id="selectLocationModal"
				aria-hidden="true"
				tabIndex={-1}
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
								className="d-flex align-items-center justify-content-center"
							>
								<img src="/assets/svg/close-black.svg" alt="close" />
							</button>
							<h1 className="modal-title" id="selectLocationModalLabel">
								Location
							</h1>
						</div>
						<div className="modal-body">
							<form onSubmit={(e) => e.preventDefault()}>
								<div className="grid">
									<label
										htmlFor="locSearch"
										className="d-flex align-items-center gap-8 radius-24"
									>
										<img
											src="/assets/svg/search.svg"
											alt="search"
											className="shrink-0"
										/>
										<input
											type="text"
											placeholder="Search location"
											className="flex-grow"
											id="locSearch"
										/>
									</label>
									<button type="button" className="radius-20">
										Send
									</button>
								</div>
							</form>

							<ul className="loc-list scrollbar-hidden">
								<li className="d-flex align-items-center gap-12">
									<span className="d-flex align-items-center justify-content-center shrink-0 rounded-full">
										<img src="/assets/svg/map-black.svg" alt="icon" />
									</span>
									<div>
										<h5>Encinitas</h5>
										<p>260-C North El Camino Real</p>
									</div>
								</li>
								<li className="d-flex align-items-center gap-12">
									<span className="d-flex align-items-center justify-content-center shrink-0 rounded-full">
										<img src="/assets/svg/map-black.svg" alt="icon" />
									</span>
									<div>
										<h5>San Marcos</h5>
										<p>591 Grand Avenue </p>
									</div>
								</li>
								<li className="d-flex align-items-center gap-12">
									<span className="d-flex align-items-center justify-content-center shrink-0 rounded-full">
										<img src="/assets/svg/map-black.svg" alt="icon" />
									</span>
									<div>
										<h5>Roseville</h5>
										<p>1186 Roseville Pkwy</p>
									</div>
								</li>
								<li className="d-flex align-items-center gap-12">
									<span className="d-flex align-items-center justify-content-center shrink-0 rounded-full">
										<img src="/assets/svg/map-black.svg" alt="icon" />
									</span>
									<div>
										<h5>San Ramon</h5>
										<p>3141 Crow Canyon Place</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade selectDateModal dateModal modalBg"
				id="selectDateModal"
				tabIndex={-1}
				aria-labelledby="selectDateModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header justify-content-center">
							<h1 className="modal-title" id="selectDateModalLabel">
								Date
							</h1>
						</div>
						<div className="modal-body">
							{/* <input type="text" id="selectDateInput" /> */}
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

			<div
				className="modal fade filterModal bottomModal"
				id="filterModal"
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
							<h1 className="modal-title">Filter</h1>
						</div>
						<div className="modal-body">
							<div className="pb-12">
								<h4 className="content-title">Price Range</h4>
								<div className="filter-range">
									<div id="price-slider-range"></div>
									<div className="price-range w-100 d-flex align-items-center justify-content-between">
										<input type="text" id="amount1" />
										<input type="text" id="amount2" />
									</div>
								</div>
							</div>

							<div className="py-12">
								<h4 className="content-title">Popular Filters</h4>
								<ul className="popular-filters">
									<li>
										<label htmlFor="hotel" className="filter-label">
											<input type="checkbox" id="hotel" />
											Hotels (340)
										</label>
									</li>
									<li>
										<label htmlFor="pool" className="filter-label">
											<input type="checkbox" id="pool" defaultChecked />
											Swimming Pool (340)
										</label>
									</li>
									<li>
										<label htmlFor="stars" className="filter-label">
											<input type="checkbox" id="stars" />5 stars (100)
										</label>
									</li>
									<li>
										<label htmlFor="bathroom" className="filter-label">
											<input type="checkbox" id="bathroom" />
											Private Bathroom (200)
										</label>
									</li>
									<li>
										<label htmlFor="breakfast" className="filter-label">
											<input type="checkbox" id="breakfast" />
											Breakfast Included (115)
										</label>
									</li>
									<li>
										<label htmlFor="kitchen" className="filter-label">
											<input type="checkbox" id="kitchen" />
											Kitchen (10)
										</label>
									</li>
								</ul>
							</div>

							<div className="py-12">
								<h4 className="content-title">Star Rating</h4>
								<ul className="star-rating">
									<li>
										<label htmlFor="star1" className="filter-label">
											<input type="radio" name="star" id="star1" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
										</label>
									</li>
									<li>
										<label htmlFor="star2" className="filter-label">
											<input type="radio" name="star" id="star2" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
										</label>
									</li>
									<li>
										<label htmlFor="star3" className="filter-label">
											<input type="radio" name="star" id="star3" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
										</label>
									</li>
									<li>
										<label htmlFor="star4" className="filter-label">
											<input
												type="radio"
												name="star"
												id="star4"
												defaultChecked
											/>
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
										</label>
									</li>
									<li>
										<label htmlFor="star5" className="filter-label">
											<input type="radio" name="star" id="star5" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
											<img src="/assets/svg/star-yellow.svg" alt="star" />
										</label>
									</li>
								</ul>
							</div>

							<div className="py-12">
								<Link
									href="/search-result"
									className="btn-primary apply-filter-btn"
								>
									Apply Filter
								</Link>
							</div>

							<div className="pt-12">
								<button
									type="button"
									className="clear-all-btn"
									data-bs-dismiss="modal"
									aria-label="Close"
								>
									Clear All
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchResult;
