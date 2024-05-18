"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface DataType {
	id: string;
	title: string;
	content: string;
}

const accordion_data: DataType[] = [
	{
		id: "One",
		title: "How do I reset my password?",
		content:
			"You can reset your password by clicking on the Forgot Password? link in the login page.",
	},
	{
		id: "Two",
		title: "I forgot my password, what should I do?",
		content:
			"You can reset your password by clicking on the Forgot Password? link in the login page.",
	},
	{
		id: "Three",
		title: "I forgot my password, what should I do?",
		content:
			"You can reset your password by clicking on the Forgot Password? link in the login page.",
	},
	{
		id: "Four",
		title: "I forgot my password, what should I do?",
		content:
			"You can reset your password by clicking on the Forgot Password? link in the login page.",
	},
	{
		id: "Five",
		title: "I forgot my password, what should I do?",
		content:
			"You can reset your password by clicking on the Forgot Password? link in the login page.",
	},
];

const Support = () => {
	const [active, setActive] = useState(0);
	const handleActive = (id: any) => {
		setActive(id);
	};

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
					<h3 className="main-title">Help and Support</h3>
				</div>

				<section className="help-main search px-24">
					<form action="#">
						<div className="help-search w-100 d-flex align-items-center gap-8 radius-24">
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

				<section className="faq px-24 py-32">
					<div className="accordion" id="accordionExample">
						{accordion_data.map((item, i) => (
							<div key={i} className="accordion-item">
								<h2
									className="accordion-header"
									onClick={() => handleActive(i)}
								>
									<button
										className={`accordion-button ${
											active === i ? "show" : "collapsed"
										}`}
										type="button"
										data-bs-toggle="collapse"
										data-bs-target={`#collapse${item.id}`}
										aria-expanded={active === i ? true : false}
										aria-controls={`collapse${item.id}`}
									>
										{item.title}
										<span className="accordion-btn"></span>
									</button>
								</h2>
								<div
									id={`collapse${item.id}`}
									className={`accordion-collapse collapse ${
										active === i ? "show" : ""
									}`}
									data-bs-parent="#accordionExample"
								>
									<div className="accordion-body">
										<p>{item.content}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default Support;
