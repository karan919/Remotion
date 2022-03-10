import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {RandomGiphy} from "./Giphy/RandomGiphy";
import {TenGiphy} from "./Giphy/TenGiphy";
import {SpeedyGiphy} from "./Giphy/SpeedyGiphy";

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={12000}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Random Giphy Video!!',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="RandomGiphy"
				component={RandomGiphy}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="TenGiphy"
				component={TenGiphy}
				durationInFrames={1200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="SpeedyGiphy"
				component={SpeedyGiphy}
				durationInFrames={1200}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
