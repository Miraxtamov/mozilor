import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Generic from "../pages/Generic";
import { navbar } from "../utils/navbar";
import DotLoader from "react-spinners/DotLoader";

const Root = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			{loading ? (
				<div className="loader">
					<DotLoader size={60} color={"#bf0830"} loading={loading} />
				</div>
			) : (
				<Routes>
					<Route element={<Navbar />}>
						<Route path="/" element={<Home />} />
						{navbar?.map((value) => {
							return (
								<Route
									key={value?.id}
									path={value?.path}
									element={value?.element}
								/>
							);
						})}
						<Route path="/career" element={<Generic />} />
					</Route>
				</Routes>
			)}
		</>
	);
};

export default Root;
