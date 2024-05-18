import explore_img_1 from "@/assets/images/home/item-2.png";
import explore_img_2 from "@/assets/images/home/item-1.png";
import explore_img_3 from "@/assets/images/home/item-3.png";
import explore_img_4 from "@/assets/images/home/item-4.png";
import explore_img_5 from "@/assets/images/home/item-5.png";
import explore_img_6 from "@/assets/images/home/item-6.png";

import heart_red from "@/assets/svg/heart-red.svg";
import heart_black from "@/assets/svg/heart-black.svg";
import { StaticImageData } from "next/image";

interface DataType {
	category: string;
	img: StaticImageData;
	wishlist: StaticImageData;
	title: string;
	location: string;
	price: number;
	rating: number;
	totalRating: number;
}

const explore_data: DataType[] = [
	{
		category: "Popular",
		img: explore_img_1,
		wishlist: heart_red,
		title: "Tahiti Beach",
		location: "Polynesia, French",
		price: 235,
		rating: 4.8,
		totalRating: 67,
	},
	{
		category: "Recommendation",
		img: explore_img_2,
		wishlist: heart_black,
		title: "St. Lucia Mountain",
		location: "South America",
		price: 453,
		rating: 4.8,
		totalRating: 102,
	},
	{
		category: "Frequently visited",
		img: explore_img_3,
		wishlist: heart_black,
		title: "Cappadocia",
		location: "Turki",
		price: 423,
		rating: 4.6,
		totalRating: 213,
	},
	{
		category: "Popular",
		img: explore_img_4,
		wishlist: heart_red,
		title: "Hanalei Bay",
		location: "Hawaii",
		price: 235,
		rating: 4.8,
		totalRating: 67,
	},
	{
		category: "Recommendation",
		img: explore_img_5,
		wishlist: heart_black,
		title: "Tahiti Beach",
		location: "Polynesia, French",
		price: 434,
		rating: 4.8,
		totalRating: 324,
	},
	{
		category: "Frequently visited",
		img: explore_img_6,
		wishlist: heart_red,
		title: "St. Lucia Mountain",
		location: "Polynesia, French",
		price: 543,
		rating: 4.8,
		totalRating: 123,
	},
  // repit data
  {
		category: "Recommendation",
		img: explore_img_1,
		wishlist: heart_red,
		title: "Tahiti Beach",
		location: "Polynesia, French",
		price: 235,
		rating: 4.8,
		totalRating: 67,
	},
	{
		category: "Popular",
		img: explore_img_2,
		wishlist: heart_black,
		title: "St. Lucia Mountain",
		location: "South America",
		price: 453,
		rating: 4.8,
		totalRating: 102,
	},
	{
		category: "Popular",
		img: explore_img_3,
		wishlist: heart_black,
		title: "Cappadocia",
		location: "Turki",
		price: 423,
		rating: 4.6,
		totalRating: 213,
	},
	{
		category: "Frequently visited",
		img: explore_img_4,
		wishlist: heart_red,
		title: "Hanalei Bay",
		location: "Hawaii",
		price: 235,
		rating: 4.8,
		totalRating: 67,
	},
	{
		category: "Frequently visited",
		img: explore_img_5,
		wishlist: heart_black,
		title: "Tahiti Beach",
		location: "Polynesia, French",
		price: 434,
		rating: 4.8,
		totalRating: 324,
	},
	{
		category: "Recommendation",
		img: explore_img_6,
		wishlist: heart_red,
		title: "St. Lucia Mountain",
		location: "Polynesia, French",
		price: 543,
		rating: 4.8,
		totalRating: 123,
	},
];
export default explore_data;
