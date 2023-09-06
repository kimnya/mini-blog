import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import { styled } from 'styled-components';
import PostWritePage from './components/pages/PostWritePage';
import PostViewPage from './components/pages/PostViewPage';

const MainTitleText = styled.p`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`;

const App = () => {
	return (
		<BrowserRouter>
			<MainTitleText>인배의 미니블로그 </MainTitleText>
			<Routes>
				<Route path={`/mini-blog`} element={<MainPage />} />
				<Route path="post-write" element={<PostWritePage />} />
				<Route path="/post/:postId" element={<PostViewPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
