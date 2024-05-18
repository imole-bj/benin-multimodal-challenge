import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="bottom-nav">
				<ul className="d-flex align-items-center justify-content-around w-100 h-100">
					<li>
						<Link href="/home">
							<img src="/assets/svg/bottom-nav/home-active.svg" alt="home" />
						</Link>
					</li>
					<li>
						<Link href="/chat">
							<img src="/assets/svg/bottom-nav/category.svg" alt="category" />
						</Link>
					</li>
					{/* <li>
						<Link href="/ticket-booked">
							<img src="/assets/svg/bottom-nav/ticket.svg" alt="ticket" />
						</Link>
					</li>
					<li>
						<Link href="/wishlist">
							<img src="/assets/svg/bottom-nav/heart.svg" alt="heart" />
						</Link>
					</li> */}
					<li>
						<Link href="/user-profile">
							<img
								src="/assets/svg/bottom-nav/profile.svg"
								alt="profile"
							/>
						</Link>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
