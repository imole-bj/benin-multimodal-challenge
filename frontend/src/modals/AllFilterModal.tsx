import React from "react";

const AllFilterModal = ({ setFilter, filter }: any) => {
	if (typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	return (
		<>
			<div
				className={`modal fade serviceModal bottomModal modalBg ${
					filter ? "show" : ""
				}`}
				style={{ display: filter ? "block" : "none" }}
				id="serviceModal"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button
								onClick={() => setFilter(false)}
								type="button"
								className="modal-close rounded-full"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<img src="/assets/svg/close-black.svg" alt="Close" />
							</button>
							<h1 className="modal-title">All Facilities</h1>
						</div>
						<div className="modal-bodylll">
							<div className="facilities">
								<div className="grid gap-24">
									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/wind.svg" alt="icon" />
										</div>
										<p>Ac</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/building.svg" alt="icon" />
										</div>
										<p>Restaurant</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/water.svg" alt="icon" />
										</div>
										<p>Swimming Pool</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/24-support.svg" alt="icon" />
										</div>
										<p>24-Hours Front Desk</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/building.svg" alt="icon" />
										</div>
										<p>Modern Room</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/24-support.svg" alt="icon" />
										</div>
										<p>24-Hours Security</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/water.svg" alt="icon" />
										</div>
										<p>Beautiful View</p>
									</div>

									<div className="item text-center">
										<div className="icon d-flex align-items-center justify-content-center rounded-full">
											<img src="/assets/svg/wind.svg" alt="icon" />
										</div>
										<p>Open Space</p>
									</div>
								</div>

								{/* <div className="grid gap-24">

                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/wind.svg" alt="icon" />
                    </div>
                    <p>Ac</p>
                  </div>


                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/building.svg" alt="icon" />
                    </div>
                    <p>Restaurant</p>
                  </div>


                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/water.svg" alt="icon" />
                    </div>
                    <p>Swimming Pool</p>
                  </div>


                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/24-support.svg" alt="icon" />
                    </div>
                    <p>24-Hours Front Desk</p>
                  </div>


                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/building.svg" alt="icon" />
                    </div>
                    <p>Modern Room</p>
                  </div>


                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/24-support.svg" alt="icon" />
                    </div>
                    <p>24-Hours Security</p>
                  </div>


                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/water.svg" alt="icon" />
                    </div>
                    <p>Beautiful View</p>
                  </div>


                  <div className="item text-center">
                    <div className="icon d-flex align-items-center justify-content-center rounded-full">
                      <img src="/assets/svg/wind.svg" alt="icon" />
                    </div>
                    <p>Open Space</p>
                  </div>

                  
                </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AllFilterModal;
