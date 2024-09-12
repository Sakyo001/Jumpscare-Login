document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('.sign-up-btn');
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    document.body.appendChild(overlay);

    // Create a new audio element
    const audio = new Audio('Jumpscare1.mp3');

    signUpButton.addEventListener('mouseover', () => {
        overlay.classList.add('active');
        audio.currentTime = 0; // Reset audio playback to the start
        audio.play(); // Play the sound on hover
    });

    signUpButton.addEventListener('mouseout', () => {
        overlay.classList.remove('active');
        audio.pause(); // Pause the audio
    });
});
