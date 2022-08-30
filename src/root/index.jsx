import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Generic from "../pages/Generic";
import { navbar } from "../utils/navbar";

const Root = () => {
	return (
		<Routes>
			<Route element={<Navbar />}>
				{navbar?.map((value) => {
					return (
						<Route key={value.id} path={value.path} element={value.element} />
					);
				})}
				<Route path="/career" element={<Generic />} />
			</Route>
		</Routes>
	);
};

export default Root;
