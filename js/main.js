const panorama = new PANOLENS.ImagePanorama( 'image/22.jpg' );
const panorama2 = new PANOLENS.ImagePanorama('image/ace.jpg');
let imageContainer = document.querySelector('.image-container')


const infospotPositions = [
    new THREE.Vector3(-2136.06, 16.30, 890.14),
    new THREE.Vector3(-3136.06, 296.30, -4290.14),

];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

panorama.link( panorama2, infospotPositions[0]);
panorama2.link( panorama, infospotPositions[1]);

viewer.add( panorama,panorama2 );
/*buton mute*/
const backgroundSound = document.getElementById('backgroundSound');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');
const muteText = document.getElementById('muteText');

let isMuted = false;

function toggleMute() {
    if (isMuted) {
        backgroundSound.play();
        isMuted = false;
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up');
        muteText.textContent = 'Mute';
    } else {
        backgroundSound.pause();
        isMuted = true;
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute');
        muteText.textContent = 'Unmute';
    }
}