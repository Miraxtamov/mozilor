import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Generic from "../pages/Generic";
import { navbar } from "../utils/navbar";

const Root = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
				<Route path="/" element={<Navigate to={"/products"} />} />
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
	);
};

export default Root;
