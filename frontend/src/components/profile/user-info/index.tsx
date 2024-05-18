"use client";

import Link from "next/link";
import React, { useState } from "react";
import BirthModal from "@/modals/BirthModal";
import { useRouter } from "next/navigation";

const UserInfo = () => {
	const [showBirthModal, setShowBirthModal] = useState(false);
	const handleShowBirthModal = () => {
		setShowBirthModal(!showBirthModal);
	};

	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
			<main>
				<div>Bientôt disponible</div>
				{/* <div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Profile</h3>
				</div>

				<section className="profile-image py-16">
					<div className="image">
						<img
							src="/assets/images/profile/avatar.png"
							alt="avatar"
							className="w-100 h-100 object-fit-cover img-fluid rounded-full"
						/>
						<button
							type="button"
							className="d-flex align-items-center justify-content-center rounded-full"
							data-bs-toggle="modal"
							data-bs-target="#editImageModal"
						>
							<img src="/assets/svg/edit-white.svg" alt="icon" />
						</button>
					</div>
				</section>

				<section className="user-info px-24">
					<div className="mb-16">
						<label className="input-label">First Name</label>
						<input type="text" placeholder="First Name" className="input" />
					</div>
					<div className="mb-16">
						<label className="input-label">Last Name</label>
						<input type="text" placeholder="Last Name" className="input" />
					</div>
					<div className="mb-16">
						<label className="input-label">E-mail</label>
						<input type="email" placeholder="E-mail" className="input" />
					</div>
					<div className="mb-16">
						<label className="input-label">Date of Birth</label>
						<div className="dob position-relative d-flex align-items-center">
							<input
								type="text"
								placeholder="Date of Birth"
								className="input"
								id="dobdate"
							/>
							<button
								type="button"
								onClick={handleShowBirthModal}
								data-bs-toggle="modal"
								data-bs-target="#dateOfBirthModal"
							>
								<img src="/assets/svg/calendar-blue.svg" alt="icon" />
							</button>
						</div>
					</div>

					<div className="mb-16">
						<label className="input-label">Gender</label>
						<div className="grid">
							<label
								htmlFor="male"
								className="custom-check-container gender-container"
							>
								<input type="radio" name="gender" id="male" defaultChecked />
								Male
								<span className="checkmark"></span>
							</label>
							<label
								htmlFor="female"
								className="custom-check-container gender-container"
							>
								<input type="radio" name="gender" id="female" />
								Female
								<span className="checkmark"></span>
							</label>
						</div>
					</div>

					<div>
						<label className="input-label">Location</label>
						<textarea
							id="myTextarea"
							placeholder="Location"
							className="input"
						></textarea>
					</div>
				</section>

				<div className="save-btn mt-64 px-24 mb-32">
					<Link href="/user-profile" className="btn-primary">
						Save Changes
					</Link>
				</div> */}
			</main>

			<BirthModal
				showBirthModal={showBirthModal}
				handleShowBirthModal={handleShowBirthModal}
			/>
		</>
	);
};

export default UserInfo;
