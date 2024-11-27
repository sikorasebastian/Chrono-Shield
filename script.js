//const canvas = document.getElementById('gameCanvas');
//const ctx = canvas.getContext('2d');
//canvas.width = 800;
//canvas.height = 600;
//
//const baseShieldSpeed = 0.2;
//let shieldSpeed = baseShieldSpeed;
//let shieldAngle = 0;
//let mana = 100;
//const maxMana = 100;
//const manaRegenRate = 0.2;
//const manaDepletionFactor = 500; // Adjusted for better balance
//
//// Speed up the shield
//function speedUpShield() {
//    if (mana > 0) {
//        shieldSpeed += 0.05;
//    }
//}
//
//// Slow down the shield
//function slowDownShield() {
//    if (mana > 0 && shieldSpeed > 0) {
//        shieldSpeed -= 0.05;
//        if (shieldSpeed < 0) shieldSpeed = 0; // Ensure shieldSpeed doesn't go negative
//    }
//}
//
//// Regenerate mana over time
//function regenerateMana() {
//    if (mana < maxMana) {
//        mana += manaRegenRate;
//        if (mana > maxMana) mana = maxMana; // Ensure mana doesn't exceed max value
//    }
//    document.querySelector('.mana').style.width = `${(mana / maxMana) * 100}%`;
//}
//
//// Calculate and deplete mana based on shield speed
//function depleteMana() {
//    const speedDifference = Math.abs(shieldSpeed - baseShieldSpeed);
//    const manaDepletionRate = speedDifference * manaDepletionFactor; // Adjust rate as needed
//    if (mana > 0) {
//        mana -= manaDepletionRate / 120; // Deplete per frame (assuming 60 FPS)
//        if (mana < 0) mana = 0; // Ensure mana doesn't go negative
//    }
//
//    // Reset shield speed if mana is depleted
//    if (mana === 0) {
//        shieldSpeed = baseShieldSpeed;
//    }
//}
//
//// Draw the space station
//function drawSpaceStation() {
//    ctx.fillStyle = '#fff';
//    ctx.beginPath();
//    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
//    ctx.fill();
//}
//
//// Draw the rotating shield (eighth-circle)
//function drawShield() {
//    const shieldRadius = 100;
//    ctx.strokeStyle = '#0f0';
//    ctx.lineWidth = 5;
//    ctx.beginPath();
//    ctx.arc(canvas.width / 2, canvas.height / 2, shieldRadius, shieldAngle, shieldAngle + Math.PI / 4);
//    ctx.stroke();
//}
//
//// Update the shield rotation
//function updateShieldRotation() {
//    shieldAngle += shieldSpeed * 0.05;
//}
//
//// Handle keydown events for arrow keys
//document.addEventListener('keydown', (event) => {
//    if (event.code === 'ArrowRight') {
//        speedUpShield();
//    } else if (event.code === 'ArrowLeft') {
//        slowDownShield();
//    } else if (event.code === 'Space') {
//        resetShieldSpeed();
//    }
//});
//
//// Reset shield speed to baseShieldSpeed
//function resetShieldSpeed() {
//    shieldSpeed = baseShieldSpeed;
//}
//
//// Handle keydown events
//document.addEventListener('keydown', (event) => {
//    if (event.code === 'Space') {
//        resetShieldSpeed();
//    }
//});
//
//// Main game loop
//function gameLoop() {
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//    drawSpaceStation();
//    drawShield();
//    updateShieldRotation();
//    depleteMana();
//    regenerateMana();
//    requestAnimationFrame(gameLoop);
//}
//
//// Start the game loop
//gameLoop();
