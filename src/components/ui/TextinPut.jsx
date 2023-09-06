import React from 'react';
import { styled } from 'styled-components';

const StyiledTexTarea = styled.textarea`
	width: calc(100% - 32px);
	${(props) =>
		props.height &&
		`
    height:${props.height}px
     `}
	padding:16px;
	font-size: 16px;
	line-height: 20px;
`;

const TextinPut = (props) => {
	const { height, value, onChange } = props;

	return <StyiledTexTarea height={height} value={value} onChange={onChange} />;
};

export default TextinPut;
