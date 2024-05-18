"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/layouts/footers/Footer";
import React from "react";

const VacationDetails = () => {
	const router = useRouter();
	const handleBack = () => {
		router.back();
	};

	return (
		<>
		<main className= "details vacation-details" >
		<section className="banner position-relative" >
			<img src="/assets/images/details/banner-1.png" alt = "Banner" style={{height: "90px"}} className = "w-100  img-fluid" />

			<div className="page-title" >
				<button onClick={ handleBack }
					type = "button"
					className = "back-btn back-page-btn d-flex align-items-center justify-content-center rounded-full">
					<img src="/assets/svg/arrow-left-black.svg" alt = "arrow" />
				</button>
				<h3 className="main-title"> Vidéo </h3>
			</div>
		</section>



				<section className = " details-footer  d-flex flex-column align-items-center justify-content-between w-100">
					<VideoBox/>
					<div className="d-flex w-100 justify-content-center mt-3">
					 Exporter 
					</div>
				</section>
				</main>
				< Footer />
</>
	);
};

export default VacationDetails;


export function VideoBox() {
	return (
		<video className= "w-100" height ='300' autoPlay = { true} controls  preload = "true" >
			<source src="/eda.mp4" type = "video/mp4" />
				<track src="/path/to/captions.vtt" kind = "subtitles" srcLang = "en"label = "English"/>
				Your browser does not support the video tag.
      	</video>
    )
}