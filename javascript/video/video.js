document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('video');

    video.addEventListener('click', () => {
        video.paused? video.play(): video.pause(); 
    })
})