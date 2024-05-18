"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import arrow_circle from "@/assets/svg/arrow-circle.svg";
import onboarding_img_1 from "@/assets/images/onboarding/c1.png";
import onboarding_img_2 from "@/assets/images/onboarding/slide-2.png";
import onboarding_img_3 from "@/assets/images/onboarding/slide-3.png";
import onboarding_img_4 from "@/assets/images/onboarding/welcome.png";

const onboarding_data = [
	{
		id: 1,
		image: onboarding_img_1,
		title: "Totché gbé",
		description:
			"Communiquez beaucoup plus facilement et n'importe où avec Totché gbé. Suivez vos vidéos dans toutes les langues",
	},
	
];

const Onboarding = () => {
	return (
		<>
			<section className="onboarding">
				<Swiper className=" onboarding-swiper">
					{onboarding_data.map((item, i) => (
						<SwiperSlide key={i} className="swiper-slide">
							<div className="image position-relative mt-12">
								<Image
									src={item.image}
									alt="Slide"
									className="w-100 h-1/2 object-fit-cover mt-32"
								/>
							</div>
							<div className="content text-center ">
								<h1>{item.title}</h1>
								
									<>
										<Link
											href="/home"
											className="btn-primary btn-get-started"
										>
											Commencer
										</Link>
										
									</>
								
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				
			</section>
		</>
	);
};

export default Onboarding;
