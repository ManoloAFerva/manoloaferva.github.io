
document.querySelectorAll('.test-cell').forEach(test_cell => {
	test_cell.addEventListener('click', function() {
		const videoId = this.getAttribute("data-video-id");
		const overlay = document.getElementById('video-overlay');
		const player = document.getElementById('video-player');

		player.src = videoId
		// console.log(videoId);
		overlay.style.display = 'flex';
	});
});

