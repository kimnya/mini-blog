import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import data from '../../data.json';

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

const MainPage = (props) => {
	const {} = props;

	const navigte = useNavigate();

	return (
		<Wrapper>
			<Container>
				<Button
					title="글 작성하기"
					onClick={() => {
						navigte('/post-write');
					}}
				/>

				<PostList
					posts={data}
					onClickItem={(item) => {
						navigte(`/post/${item.id}`);
					}}
				/>
			</Container>
		</Wrapper>
	);
};

export default MainPage;
