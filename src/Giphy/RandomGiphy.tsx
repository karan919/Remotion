import {useState} from 'react';
import {IGif} from '@giphy/js-types';
import {useAsync} from 'react-async-hook';
import {GiphyFetch} from '@giphy/js-fetch-api';
import {Gif} from '@giphy/react-components';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 120px;
	font-weight: 700;
	text-align: center;
`;

const giphyFetch = new GiphyFetch('vO3zoX3VlpRFnwaxQwc2SQ5c4WTuGW0r');

function GifDemo() {
	const [gif, setGif] = useState<IGif | null>(null);
	useAsync(async () => {
		const {data} = await giphyFetch.gif('random');
		setGif(data);
	}, []);
	return gif && <Gif gif={gif} width={500} />;
}

export const RandomGiphy = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const translateY = interpolate(progress, [0, 1], [0, 600]);
	return (
		<Container
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					transform: `translateY(${translateY}px)`,
				}}
			>
				<GifDemo />
			</div>
		</Container>
	);
};
