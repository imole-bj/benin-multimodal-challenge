"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import VideoPreview from "./test"
const VideoPrev = () => {
	return (
	  <video width="640" height="360" controls>
		<source src="/path/to/video.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	  </video>
	);
  };
  

const VideoLinkModa = ({ show, setshow }) => {
	const [link, setLink] = useState()
	const handleChange = (event) => {
		setLink(event.target.value);
	  };
	return (
		<>
			<div
				className={`modal fade loginSuccessModal modalBg ${
					show ? "show" : ""
				}`}
				style={{ display: show ? "block" : "none" }}
				id="loginSuccess"
				tabIndex={-1}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body text-center">
							{/*<img src="/assets/svg/check-green.svg" alt="Check" />*/}
							<h3>Entrez le lien {link} </h3>
							
							<div className="row">
								<div class="mb-3">
								<input type="email" value={link} onChange={handleChange} class="form-control p-3 border border-2 mt-2" id="exampleFormControlInput1" placeholder="https://www.youtube.com/"/>
								</div>
							</div>
							<span
								onClick={() => setshow(false)}
								className="btn-primary"
							>
								Continue
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoLinkModa;
