import React from "react";

if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap");
}

const LogOutModal = ({ handleLogout, showModal }: any) => {
	return (
		<>
			<div
				className={`modal fade logOutModal modalBg ${showModal ? "show" : ""}`}
				style={{ display: showModal ? "block" : "none" }}
				id="logOutModal"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header justify-content-end">
							<button
								type="button"
								onClick={handleLogout}
								className="close-btn d-flex align-items-center justify-content-center rounded-full"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<img src="/assets/svg/close-black.svg" alt="icon" />
							</button>
						</div>
						<div className="modal-body text-center">
							<h4 className="mb-32">Are you sure you want to logout?</h4>
							<ul>
								<li className="mb-04">
									<button
										type="button"
										data-bs-dismiss="modal"
										aria-label="Close"
										onClick={handleLogout}
									>
										Cancel
									</button>
								</li>
								<li>
									<button
										type="button"
										className="log-out"
										data-bs-dismiss="modal"
										aria-label="Close"
										onClick={handleLogout}
									>
										Log Out
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LogOutModal;
