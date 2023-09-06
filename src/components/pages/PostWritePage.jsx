import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import TextinPut from '../ui/TextinPut';
import Button from '../ui/Button';

const Wrapper = styled.div`
	padding: 16px;
	width: calc(100% - 32px);
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
`;
const Container = styled.div`
	width: 100%;
	max-width: 720px;
	& {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;
const PostWritePage = (props) => {
	const navigte = useNavigate();

	const [title, setTilte] = useState('');
	const [content, setCotnent] = useState('');

	return (
		<Wrapper>
			<Container>
				<TextinPut
					height={20}
					value={title}
					onChange={(evt) => {
						setTilte(evt.target.value);
					}}
				/>
				<TextinPut
					height={480}
					value={content}
					onChange={(evt) => {
						setCotnent(evt.target.value);
					}}
				/>
				<Button
					title="글 작성하기"
					onClick={() => {
						navigte('/');
					}}
				/>
			</Container>
		</Wrapper>
	);
};

export default PostWritePage;
