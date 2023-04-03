import styled from 'styled-components';

export const StyledCarousel = styled.div`
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;

	.imgs {
		width: 80vw;
		max-width: 900px;
		display: flex;
		transition: 0.3s ease-in-out;
		cursor: pointer;
		transform: translateX(0);

		img {
			max-width: 900px;
			width: 80vw;
			height: auto;
			border: 5px solid #222;
		}
	}

	.buttons {
		button {
			cursor: pointer;
			border: none;
			outline: none;
			padding: 10px 1rem;
			margin: 1rem;
			font-weight: bold;
			background-color: #202020;
			color: #ddd;
			transition: 0.2s;

			:hover {
				transform: scale(1.05);
			}

			:active {
				transform: scale(1);
			}
		}
	}
`;
