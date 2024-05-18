import React from "react";
import Onboarding from "./Onboarding";
import HeaderOne from "@/layouts/headers/HeaderOne";

const MainHome = () => {
	return (
		<>
			<HeaderOne />
			<main>
				<Onboarding />
			</main>
		</>
	);
};

export default MainHome;
