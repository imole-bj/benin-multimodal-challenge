import Link from "next/link";
import React from "react";

const Wishlist = () => {
	return (
		<>
			<main className="explore wishlist">
				<div className="page-title">
					<h3 className="main-title">My Wishlist</h3>
				</div>

				<section className="all-place">
					<div className="grid">
						
						<div className="place-card">
							<Link href="/vacation-details">
								<div className="image position-relative">
									<img
										src="/assets/images/home/item-11.png"
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
										src="/assets/images/home/item-12.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-red.svg" alt="icon" />
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
										src="/assets/images/home/item-13.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-red.svg" alt="icon" />
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
										src="/assets/images/home/item-14.png"
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
										src="/assets/images/home/item-15.png"
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
										src="/assets/images/home/item-16.png"
										alt="desert"
										className="img-fluid w-100 overflow-hidden radius-8"
									/>
									<span className="d-flex align-items-center justify-content-center rounded-full">
										<img src="/assets/svg/heart-red.svg" alt="icon" />
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
							<img src="/assets/svg/bottom-nav/ticket.svg" alt="ticket" />
						</Link>
					</li>
					<li>
						<Link href="/wishlist">
							<img src="/assets/svg/bottom-nav/heart-active.svg" alt="heart" />
						</Link>
					</li>
					<li>
						<Link href="/user-profile">
							<img src="/assets/svg/bottom-nav/profile.svg" alt="profile" />
						</Link>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Wishlist;
