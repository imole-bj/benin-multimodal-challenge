"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ChatBox from './chatBox';
const ChatArea = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};

	const [audio, setAudio] = useState([])
	let audioRef = useRef(null);

	return (
		<>
			<main className="chat">
				<div className="page-title">
					<button
						type="button"
						onClick={handleBack}
						className="back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full"
					>
						<img src="/assets/svg/arrow-left-black.svg" alt="arrow" />
					</button>
					<h3 className="main-title">Discussion Instantanée</h3>
					<div className="dropdown">
						<button
							type="button"
							onClick={() => handleOpen()}
							className={`more-btn d-flex align-items-center justify-content-center rounded-full ${
								open ? "show" : ""
							}`}
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img src="/assets/svg/more.svg" alt="arrow" />
						</button>

						<ul
							className={`dropdown-menu ${open ? "show" : ""}`}
							style={{
								position: "absolute",
								inset: "0px 0px auto auto",
								margin: "0px",
								transform: "translate(-35px, 50px)",
							}}
						>
							<li>
								<Link className="dropdown-item" href="/audio-call">
									
									Fon
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="/video-call">
									
									Dendi
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="/audio-call">
									
									Yoruba
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="/video-call">
									
									Francais
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="/video-call">
									
									Anglais
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<section className="inbox px-24">
					<ul>
						{audio.map((item, index) => (
							item.from == "user" ?
							<li className='right d-flex flex-row-reverse gap-12' key={index}>
							  
							  <div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
								<audio className='w-100' ref={audioRef} src={item.url} controls>
								Your browser does not support the audio element.
							  </audio>
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
							</li>
							
							:
							item.from == "system" && <li className='left d-flex gap-12' key={index}>
							<div className="avatar position-relative">
								<img
									src="/assets/images/chat/img-1.png"
									alt="Avatar"
									className="w-100 img-fluid h-100 object-fit-cover rounded-full"
								/>
								<span className="active-dot rounded-full d-inline-block"></span>
							</div>

							<div className="text">
								<p className="msg">
								<audio className='w-100' ref={audioRef} src={item.url} controls>
								Your browser does not support the audio element.
							  </audio>
								</p>
								<p className="time pt-04">15:42 PM</p>
							</div>
							  
							</li>

							
						
						
						  ))}
					</ul>
				</section>

				<section className="d-flex justify-content-center type-msg">
				<ChatBox audiox={audio} setAudiox={setAudio}/>
				</section>
			</main>
		</>
	);
};

export default ChatArea;
