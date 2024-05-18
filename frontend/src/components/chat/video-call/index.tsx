import Link from "next/link";
import React from "react";

const VideoCall = () => {
	return (
		<>
			<main>
				<section className="video-call d-flex flex-column justify-content-between">
					<div className="img-main">
						<img
							src="/assets/images/chat/person-1.png"
							alt="person"
							className="h-100 w-100 object-fit-cover"
						/>
					</div>
					<div className="img-main">
						<img
							src="/assets/images/chat/person-2.png"
							alt="person"
							className="h-100 w-100 object-fit-cover"
						/>
					</div>

					<div className="call-info">
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

				<section className="action">
					<ul className="d-flex align-items-center justify-content-between">
						<li>
							<button
								type="button"
								className="d-flex align-items-center justify-content-center rounded-full"
							>
								<img src="/assets/svg/voice-black.svg" alt="icon" />
							</button>
						</li>
						<li>
							<button
								type="button"
								className="d-flex align-items-center justify-content-center rounded-full"
							>
								<img src="/assets/svg/volume-up-black.svg" alt="icon" />
							</button>
						</li>
						<li>
							<button
								type="button"
								className="d-flex align-items-center justify-content-center rounded-full"
							>
								<img src="/assets/svg/video-black.svg" alt="icon" />
							</button>
						</li>
						<li>
							<Link
								href="/chat"
								className="call d-flex align-items-center justify-content-center rounded-full"
							>
								<img src="/assets/svg/call-white.svg" alt="icon" />
							</Link>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
};

export default VideoCall;
