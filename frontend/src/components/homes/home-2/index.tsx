// @ts-ignore 
"use client";

import React, { useState } from "react";
import InfoArea from "./InfoArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Link from "next/link";
import ServiceModal from "@/modals/ServiceModal";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "@/layouts/footers/Footer";
import VideoModa from "./popup-video";
import VideoLinkModa from "./popup-link";

function displaySelectedImage(event: any, elementId: any) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
const Products = () => {
	const [showModal, setShowModal] = useState(false);
	const [videomodal, setShowvideomodal] = useState(false);
	const [videomodalLink, setShowvideomodalLink] = useState(false);

	if(typeof window !== "undefined") {
		require("bootstrap/dist/js/bootstrap");
	}

	
	return (
		<>
			<main className="home">
				<HeaderOne />
				

				<section className="search py-12">
					<form onSubmit={(e) => e.preventDefault()}>
						<div className="form-inner w-100 d-flex align-items-center gap-8 radius-24">
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
								<button
									type="button"
									className="d-flex align-items-center"
									data-bs-toggle="modal"
									data-bs-target="#filterModal"
								>
									<img src="/assets/svg/filter-black.svg" alt="filter" />
								</button>
							</div>
						</div>
					</form>
				</section>

				

				<section className="visited py-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">Nouvelle vidéo</h2>
						<div className="custom-pagination visited-pagination"></div>
					</div>

					<div className="card text-center">

								<div  className="card-body py-4">
								
									<span className=" text-bg-primary p-3 rounded-5">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
									</span>
								</div>
								<div className="card-footer d-flex gap-2">
								<span onClick={()=>setShowvideomodalLink(!videomodalLink)} className="btn btn-sm btn-dark w-50">Url</span>
								<span onClick={()=>setShowvideomodal(!videomodal)} className="btn btn-sm btn-secondary w-50">Fichier</span>

								</div>
								</div>
								<VideoLinkModa show={videomodalLink} setshow={setShowvideomodalLink} />
								<VideoModa show={videomodal} setshow={setShowvideomodal} />
{					/*<Swiper
						
						className="swiper visited-swiper"
					>
						<SwiperSlide className="swiper-slide place-card">
							<Link href="/vacation-details">
								
									
							<div className="card text-center">

								<div className="card-body">
								
									<a href="#" className=" text-bg-primary p-3 rounded-5">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
									</a>
								</div>
								<div className="card-footer text-muted">
									Ajouter une vidéo
								</div>
								</div>
								
							</Link>
						</SwiperSlide>

					
					
	</Swiper>*/}
				</section>

				

				<section className="budget pt-12">
					<div className="title d-flex align-items-center justify-content-between">
						<h2 className="shrink-0">Récents</h2>
						<Link href="/hotels" className="shrink-0 d-inline-block">
							Tout voir
						</Link>
					</div>

					<ul>
						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/budget-1.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Histoire de vie</h4>
										<h5>1à Janvier 2023</h5>
										<p className="d-flex align-items-center gap-8 location">
											
											Doublage
										</p>
									</div>
									<p className="price">
										<span>Doublage</span>
									</p>
								</div>
							</Link>
						</li>

						<li>
							<Link
								href="/hotel-details"
								className="d-flex align-items-center gap-12"
							>
								<div className="image shrink-0 overflow-hidden radius-8">
									<img
										src="/assets/images/home/budget-2.png"
										alt="Place"
										className="img-fluid w-100 h-100 object-fit-cover"
									/>
								</div>

								<div className="content shrink-0 d-flex align-items-center gap-12 justify-content-between flex-grow">
									<div>
										<h4>Projet Deux</h4>
										<h5>12 Juin 2022</h5>
										<p className="d-flex align-items-center gap-8 location">
											<img src="/assets/svg/map-marker.svg" alt="icon" />
											Sous-titre
										</p>
									</div>
									<p className="price">
										<span>Sous-Titrage</span>
									</p>
								</div>
							</Link>
						</li>
					</ul>
				</section>
				<Footer />
			</main>

			<ServiceModal setShowModal={setShowModal} showModal={showModal} />
		</>
	);
};

export default Products;
