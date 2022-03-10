import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {TenGiphy} from './Giphy/TenGiphy';
import { SpeedyGiphy } from './Giphy/SpeedyGiphy';

export const HelloWorld: React.FC<{}> = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={15} durationInFrames={videoConfig.durationInFrames}>
				{/* <Sequence from={5} durationInFrames={300}> */}
					<TenGiphy />
					<SpeedyGiphy />
				</Sequence>
			</div>
		</div>
	);
};
