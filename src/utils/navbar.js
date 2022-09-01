import Products from "../components/Products";
import Generic from "../pages/Generic";

export const navbar = [
	{ id: 1, title: "Products", path: "/products", element: <Products /> },
	{ id: 2, title: "About us", path: "/about", element: <Generic /> },
	{ id: 3, title: "Contact", path: "/contact", element: <Generic /> },
];
