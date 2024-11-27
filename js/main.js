import { speedUpShield, slowDownShield, resetShieldSpeed, updateShieldRotation } from './shield.js';
import { depleteMana, regenerateMana } from './mana.js';
import { drawSpaceStation, drawShield } from './draw.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        speedUpShield();
    } else if (event.code === 'ArrowLeft') {
        slowDownShield();
    } else if (event.code === 'Space') {
        resetShieldSpeed();
    }
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSpaceStation(ctx, canvas);
    drawShield(ctx, canvas);
    updateShieldRotation();
    depleteMana();
    regenerateMana();
    requestAnimationFrame(gameLoop);
}

gameLoop();