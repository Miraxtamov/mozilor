import About from "../components/About";
import Contact from "../components/Contact";
import Products from "../components/Products";

export const navbar = [
	{ id: 1, title: "Products", path: "/products", element: <Products /> },
	{ id: 2, title: "About us", path: "/about", element: <About /> },
	{ id: 3, title: "Contact", path: "/contact", element: <Contact /> },
];
