import styled from "styled-components";

export const HomeMainContainer = styled.div`
	display: flex;
`;

HomeMainContainer.Info = styled.div`
	display: flex;
	flex-direction: column;
`;

HomeMainContainer.Title = styled.div`
	font-size: 48px;
	font-weight: 700;
	line-height: 129%;
	color: var(--primaryColor);
	margin-bottom: 32px;
`;

HomeMainContainer.Description = styled.div`
	font-size: 22px;
	font-weight: 400;
	line-height: 1.5;
	color: var(--secondaryColor);
	margin-bottom: 40px;
`;

HomeMainContainer.BtnWrapper = styled.div`
	display: flex;
	align-items: center;
`;

HomeMainContainer.Btn = styled.div`

`