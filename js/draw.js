import { shieldAngle } from './shield.js';

export function drawSpaceStation(ctx, canvas) {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
    ctx.fill();
}

export function drawShield(ctx, canvas) {
    const shieldRadius = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    ctx.strokeStyle = '#0f0';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(centerX, centerY, shieldRadius, shieldAngle, shieldAngle + Math.PI / 4);
    ctx.stroke();
}