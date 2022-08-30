import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
	display: flex;
	align-items: center;
	padding-top: 24px;
	padding-bottom: 24px;
	-webkit-touch-callout: none; // iOS Safari
	-webkit-user-select: none; // Safari
	-khtml-user-select: none; // Konqueror HTML
	-moz-user-select: none; // Old versions of Firefox
	-ms-user-select: none; // Internet Explorer/Edge
	user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

	.nav__menu--open {
		margin-left: auto;
		font-size: 24px;
		display: none;
		cursor: pointer;
		flex-shrink: 0;

		@media (max-width: 800px) {
			display: block;
		}
	}
`;

Nav.Logo = styled.div``;

Nav.LogoLink = styled(NavLink)`
	.nav__img {
		@media (max-width: 970px) {
			width: 170px;
		}

		@media (max-width: 520px) {
			width: 150px;
		}

		@media (max-width: 350px) {
			width: 130px;
		}
	}
`;

export const Navigation = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;

	.nav__menu--close {
		position: absolute;
		top: 28px;
		right: 28px;
		font-size: 24px;
		display: none;
		cursor: pointer;
		flex-shrink: 0;
		color: var(--defaultColor);
	}

	@media (max-width: 800px) {
		&.navigation__default {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			flex-direction: column;
			padding: 30px;
			padding-top: 50px;
			transform: translateX(-100%);
			background-color: #000000;
		}

		&.open {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			flex-direction: column;
			padding: 30px;
			padding-top: 50px;
			transform: translateX(0);
			background-color: #000000;
		}

		.nav__menu--close {
			display: block;
		}
	}
`;

Navigation.NavList = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

Navigation.NavItem = styled.div`
	margin-left: 60px;

	&:first-of-type {
		margin-left: 0;
	}

	@media (max-width: 900px) {
		margin-left: 40px;
	}

	@media (max-width: 800px) {
		margin: 0;
		margin-bottom: 40px;
	}
`;

Navigation.NavLinkHref = styled(NavLink)`
	font-size: 18px;
	color: var(--nav-link);
	font-weight: 400;
	line-height: 24px;
	white-space: nowrap;

	&.active {
		color: var(--btn-span);
	}
`;

Navigation.NavBtn = styled(NavLink)`
	margin-left: 30px;

	@media (max-width: 800px) {
		margin: 0;
		padding: 0;
		background-color: transparent;

		&.active {
			color: var(--btn-span);
		}
	}
`;
