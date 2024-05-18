"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AudioCall = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main>
				<section className="audio-call position-relative">
					<img
						src="/assets/images/chat/person-3.png"
						alt="person"
						className="h-100 w-100 object-fit-cover img-fluid"
					/>

					<div className="page-title">
						<button
							type="button"
							onClick={handleBack}
							className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
						>
							<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
						</button>
					</div>

					<div className="call-info">
						<div className="text-center">
							<Link
								href="/chat"
								className="call d-flex align-items-center justify-content-center rounded-full"
							>
								<img src="/assets/svg/call-white-big.svg" alt="icon" />
							</Link>
						</div>

						<div className="d-flex align-items-center justify-content-between btns">
							<button
								type="button"
								className="d-flex align-items-center justify-content-center rounded-full"
							>
								<img src="/assets/svg/voice-black-big.svg" alt="icon" />
							</button>
							<button
								type="button"
								className="d-flex align-items-center justify-content-center rounded-full"
							>
								<img src="/assets/svg/video-black-big.svg" alt="icon" />
							</button>
						</div>

						<div className="call-info-main d-flex align-items-center justify-content-between">
							<div className="d-flex align-items-center gap-8">
								<div className="rounded-full overflow-hidden image shrink-0">
									<img
										src="/assets/images/chat/img-1.png"
										alt="person"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>
								<div>
									<h5>Richar Kandowen</h5>
									<p>Richar Kandowen</p>
								</div>
							</div>

							<div className="d-flex align-items-center gap-8">
								<span className="dot d-inline-block rounded-full"></span>
								<p className="time">07.23</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default AudioCall;
