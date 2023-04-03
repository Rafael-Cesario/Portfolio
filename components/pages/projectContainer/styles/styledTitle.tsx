import styled from 'styled-components';

export const StyledTitle = styled.div`
	margin: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 60rem;

	.title {
    margin: 0.5rem;
		font-size: 1.5rem;
		font-weight: bold;
		color: #ddd;
		position: relative;

		:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			background-color: #101010;
			width: 5rem;
			height: 0.5rem;
			padding: 1rem;
			animation: typing 1s both;
		}

		@keyframes typing {
			to {
				transform: translate(10rem, 0);
				display: none;
			}
		}
	}

	p {
		color: #aaa;
		line-height: 1.5rem;
		text-align: justify;
		margin: 0.5rem 0;
	}
`;
