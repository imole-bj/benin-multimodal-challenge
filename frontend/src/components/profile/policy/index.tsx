"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Policy = () => {
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
					<h3 className="main-title">Legal and Policies</h3>
				</div>

				<section className="terms-policies px-24">
					<div className="mb-16">
						<h3 className="mb-8">Terms</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
							ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
							Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
							ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
							tincidunt fames.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
							ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
							Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
							ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
							tincidunt fames.
						</p>
					</div>

					<div className="mb-16">
						<h3 className="mb-8">Changes to the Service and/or Terms:</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
							ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
							Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
							ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
							tincidunt fames.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
							ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
							Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
							ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
							tincidunt fames.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
							ornare quam vel facilisis feugiat amet sagittis arcu, tortor.
							Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor
							ut etiam est, amet aliquet ut vivamus. Odio vulputate est id
							tincidunt fames.
						</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default Policy;
