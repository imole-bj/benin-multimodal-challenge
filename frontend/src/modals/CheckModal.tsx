"use client";

import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap");
}

const CheckModal = ({ setCheckIn, checkIn }: any) => {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<>
			<div
				className={`modal fade checkInModal dateModal modalBg ${
					checkIn ? "show" : ""
				}`}
				id="checkInModal"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header justify-content-center">
							<h1 className="modal-title" id="checkInModalLabel">
								Date Check In
							</h1>
						</div>
						<div className="modal-body">
							{/* <input type="text" id="checkInDateInput" /> */}
							<div className="text-center">
								<Calendar onChange={onChange} value={value} />
							</div>

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
		</>
	);
};

export default CheckModal;
