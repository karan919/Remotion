import {useEffect, useState} from 'react';
import {IGif} from '@giphy/js-types';
import {useAsync} from 'react-async-hook';
import {GiphyFetch} from '@giphy/js-fetch-api';
import $ from 'jquery';

function makeNewPosition() {
	// Get viewport dimensions (remove the dimension of the div)
	var h = 2200;
	var w = 1400;

	var nh = Math.floor(Math.random() * h);
	var nw = Math.floor(Math.random() * w);

	return [nh, nw];
}
function animateDiv(myclass: any) {
	var newq = makeNewPosition();
	// let  e = document.getElementsByClassName(myclass);
	$(myclass).animate({top: newq[0], left: newq[1]}, 3000, function () {
		animateDiv(myclass);
	});
}

const giphyFetch = new GiphyFetch('vO3zoX3VlpRFnwaxQwc2SQ5c4WTuGW0r');

function GifDemo() {
	const [gif, setGif] = useState<IGif[]>([]);
	useAsync(async () => {
		const x = await giphyFetch.trending({limit: 40, offset:100});
		console.log(x.data[0].images);
		setGif(x.data);
	}, []);
	
	return (
		<div style={{width: '100%', height: '100%', backgroundColor: 'black', right:0}}>
			{gif &&
				gif.map((item, index) => {
					return (
						<img
							key={item.id}
							className={`gif-${index}`}
							style={{position: 'fixed', right:0}}
							src={item.images.original.url}
						/>
					);
				})}
		</div>
	);
}

export const SpeedyGiphy = () => {
	useEffect(() => {
		setTimeout(() => {
			for (let i = 0; i < 40; i++) {
				animateDiv(`.gif-${i}`);
			}
	}, 10000);	
	});
	return (
		<div style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
			<GifDemo />
		</div>
	);
};
