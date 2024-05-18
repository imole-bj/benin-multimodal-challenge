"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Message = () => {
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
					<h3 className="main-title">Message</h3>
				</div>

				<section className="message-main search px-24">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="message-search w-100 d-flex align-items-center gap-8 radius-24">
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
								<button type="button" className="d-flex align-items-center">
									<img src="/assets/svg/filter-black.svg" alt="filter" />
								</button>
							</div>
						</div>
					</form>
				</section>

				<section className="message mt-24">
					<div className="single-chat position-relative">
						<Link
							href="/chat"
							className="single-main d-flex align-items-center justify-content-between gap-04 radius-12"
						>
							<div className="shrink-0 d-flex align-items-center gap-12">
								<div className="image shrink-0 position-relative">
									<img
										src="/assets/images/chat/img-1.png"
										alt="Avatar"
										className="img-fluid w-100 h-100 object-fit-cover rounded-full"
									/>
									<small className="active-dot"></small>
								</div>

								<div>
									<h4>Richar Kandowen</h4>
									<p>Adipisicing elit. Asperiores, laboriosam...</p>
								</div>
							</div>

							<div className="text-end">
								<h5 className="pb-8">10:20</h5>
								<span className="d-inline-block rounded-full text-center">
									2
								</span>
							</div>
						</Link>

						<button type="button" className="trash">
							<img src="/assets/svg/trash-red.svg" alt="trash" />
						</button>
					</div>

					<div className="single-chat position-relative">
						<Link
							href="/chat"
							className="single-main d-flex align-items-center justify-content-between gap-04 radius-12"
						>
							<div className="shrink-0 d-flex align-items-center gap-12">
								<div className="image shrink-0 position-relative">
									<img
										src="/assets/images/chat/img-2.png"
										alt="Avatar"
										className="img-fluid w-100 h-100 object-fit-cover rounded-full"
									/>
								</div>

								<div>
									<h4>Jeden Murred</h4>
									<p>Adipisicing elit. Asperiores, laboriosam...</p>
								</div>
							</div>

							<div className="text-end">
								<h5 className="pb-8">10:20</h5>
								<span className="d-inline-block rounded-full text-center">
									2
								</span>
							</div>
						</Link>

						<button type="button" className="trash">
							<img src="/assets/svg/trash-red.svg" alt="trash" />
						</button>
					</div>

					<div className="single-chat position-relative">
						<Link
							href="/chat"
							className="single-main d-flex align-items-center justify-content-between gap-04 radius-12"
						>
							<div className="shrink-0 d-flex align-items-center gap-12">
								<div className="image shrink-0 position-relative">
									<img
										src="/assets/images/chat/img-3.png"
										alt="Avatar"
										className="img-fluid w-100 h-100 object-fit-cover rounded-full"
									/>
									<small className="active-dot"></small>
								</div>

								<div>
									<h4>Chris Offile</h4>
									<p>Adipisicing elit. Asperiores, laboriosam...</p>
								</div>
							</div>

							<div className="text-end">
								<h5 className="pb-8">10:20</h5>
								<span className="d-inline-block rounded-full text-center">
									2
								</span>
							</div>
						</Link>

						<button type="button" className="trash">
							<img src="/assets/svg/trash-red.svg" alt="trash" />
						</button>
					</div>

					<div className="single-chat position-relative">
						<Link
							href="/chat"
							className="single-main d-flex align-items-center justify-content-between gap-04 radius-12"
						>
							<div className="shrink-0 d-flex align-items-center gap-12">
								<div className="image shrink-0 position-relative">
									<img
										src="/assets/images/chat/img-4.png"
										alt="Avatar"
										className="img-fluid w-100 h-100 object-fit-cover rounded-full"
									/>
								</div>

								<div>
									<h4>Jemmy Fox</h4>
									<p>Adipisicing elit. Asperiores, laboriosam...</p>
								</div>
							</div>

							<div className="text-end">
								<h5 className="pb-8">10:20</h5>
								<span className="d-inline-block rounded-full text-center">
									2
								</span>
							</div>
						</Link>

						<button type="button" className="trash">
							<img src="/assets/svg/trash-red.svg" alt="trash" />
						</button>
					</div>
				</section>

				<button
					type="button"
					className="add-chat d-flex align-items-center justify-content-center rounded-full"
				>
					<img src="/assets/svg/plus-white.svg" alt="plus" />
				</button>
			</main>
		</>
	);
};

export default Message;
