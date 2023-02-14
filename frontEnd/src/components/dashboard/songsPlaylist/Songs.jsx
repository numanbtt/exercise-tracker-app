const Songs = () => {
	return (
		<div className="custom-scrollbar my-2 h-[72vh] overflow-y-scroll">
			<div className="glassmorphism mt-10 flex h-64 items-center justify-center rounded-lg p-10">
				<div className="w-full max-w-sm">
					<div className="h-52 w-full rounded-lg bg-[url('/athlete.jpg')] bg-cover bg-center shadow-lg"></div>
					<h1 className="my-2 text-center text-xl font-semibold italic text-white drop-shadow-lg">
						Just Do it - Workout Song
					</h1>
					<audio
						src="/songPlaylist/audio1.mp3"
						controls
						type="audio/mp3"
						className="w-full"
					/>
				</div>
			</div>
			<div className="glassmorphism mt-24 flex h-64 items-center justify-center rounded-lg p-10">
				<div className="w-full max-w-sm">
					<div className="h-52 w-full rounded-lg bg-[url('https://cdn.pixabay.com/photo/2017/06/30/21/02/muscle-2459720_1280.jpg')] bg-cover bg-center shadow-lg"></div>
					<h1 className="my-2 text-center text-xl font-semibold italic text-white">
						Fearless - Workout Song
					</h1>
					<audio
						src="/songPlaylist/audio2.mp3"
						controls
						type="audio/mp3"
						className="w-full"
					/>
				</div>
			</div>
			<div className="glassmorphism mt-24 flex h-64 items-center justify-center rounded-lg p-10">
				<div className="w-full max-w-sm">
					<div className="h-52 w-full rounded-lg bg-[url('https://cdn.pixabay.com/photo/2017/06/21/14/40/weightlifting-2427461_1280.jpg')] bg-cover bg-center shadow-lg"></div>
					<h1 className="my-2 text-center text-xl font-semibold italic text-white">
						I am Alone
					</h1>
					<audio
						src="/songPlaylist/audio3.mp3"
						controls
						type="audio/mp3"
						className="w-full"
					/>
				</div>
			</div>
			<div className="glassmorphism mt-24 flex h-64 items-center justify-center rounded-lg p-10">
				<div className="w-full max-w-sm">
					<div className="h-52 w-full rounded-lg bg-[url('/athlete.jpg')] bg-cover bg-center shadow-lg"></div>
					<h1 className="my-2 text-center text-xl font-semibold italic text-white">
						Fitness Gym Workout
					</h1>
					<audio
						src="/songPlaylist/audio4.mp3"
						controls
						type="audio/mp3"
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Songs;
