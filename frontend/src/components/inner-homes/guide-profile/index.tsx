"use client";

import React from "react";
import { useRouter } from "next/navigation";

const GuideProfile = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main className="guide-profile">
				<section className="banner position-relative">
					<img
						src="/assets/images/profile/guide-profile-banner.png"
						alt="Banner"
						className="w-100 img-fluid"
					/>

					<div className="page-title">
						<button
							onClick={handleBack}
							type="button"
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
						</button>
						<h3 className="main-title">Profile</h3>
					</div>
				</section>

				<section className="profile-info px-24">
					<div className="image overflow-hidden radius-10">
						<img
							src="/assets/images/profile/profile.png"
							alt="profile"
							className="img-fluid w-100"
						/>
					</div>

					<h3>Jonsky Alexia</h3>
					<p>
						International tour guide in <span>india</span> <br /> Travel and
						food vlogger
					</p>
					<div className="d-flex align-items-center gap-16">
						<a href="#" className="msg-btn flex-grow d-inline-block radius-12">
							Send Message
						</a>
						<a href="#" className="call-btn shrink-0 d-inline-block radius-12">
							Call Now
						</a>
					</div>
				</section>

				<section className="summary d-flex align-items-center justify-content-between px-24 py-24">
					<div className="text-center">
						<p>Guide</p>
						<h5>700+</h5>
					</div>
					<div className="divider"></div>
					<div className="text-center">
						<p>Experience</p>
						<h5>3 Years</h5>
					</div>
					<div className="divider"></div>
					<div className="text-center">
						<p>Rate</p>
						<h5>
							4.0<span>/5</span>
						</h5>
					</div>
				</section>

				<section className="profile-about px-24 pb-24">
					<div className="title mb-8">
						<h4>About Us</h4>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac
						leo lorem nisl. Viverra vulputate sodales quis et dui, lacus.
						Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla facilisi
						commodo enim, orci feugiat pharetra. Id sagittis, ullamcorper turpis
						ultrices platea pharetra.
					</p>
				</section>

				<section className="profile-location px-24 pb-24">
					<div className="title mb-8">
						<h4>Location</h4>
					</div>

					<div className="overflow-hidden radius-8 map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d846588.5514550178!2d-118.35899906676545!3d34.01855672774309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1701149305360!5m2!1sen!2sbd"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</section>
			</main>
		</>
	);
};

export default GuideProfile;
