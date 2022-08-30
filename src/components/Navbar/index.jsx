import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav, Navigation } from "./style";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/icons/logo.svg";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="container">
				<Nav>
					{/* <Nav.Logo> */}
					<Nav.LogoLink to="/">
						<img className="nav__img" src={logo} alt="logo" />
					</Nav.LogoLink>
					{/* </Nav.Logo> */}
					<Navigation className={`navigation__default ${isOpen ? "open" : ""}`}>
						<Navigation.NavList>
							{navbar?.map((value) => {
								return (
									<Navigation.NavItem key={value.id}>
										<Navigation.NavLinkHref
											onClick={() => setIsOpen(!isOpen)}
											to={value.path}
										>
											{value.title}
										</Navigation.NavLinkHref>
									</Navigation.NavItem>
								);
							})}
							<Navigation.NavBtn to="/career" className="btn">
								We're hiring
							</Navigation.NavBtn>
						</Navigation.NavList>
						<FaTimes
							className="nav__menu--close"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</Navigation>
					<FaBars
						className="nav__menu--open"
						onClick={() => setIsOpen(!isOpen)}
					/>
				</Nav>
			</div>
			<Outlet />
		</>
	);
};

export default Navbar;
