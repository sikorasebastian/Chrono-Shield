import { mana } from './mana.js';

export const baseShieldSpeed = 0.2;
export let shieldSpeed = baseShieldSpeed;
export let shieldAngle = 0;

export function speedUpShield() {
    if (mana > 0) {
        shieldSpeed += 0.05;
    }
}

export function slowDownShield() {
    if (mana > 0 && shieldSpeed > 0) {
        shieldSpeed -= 0.05;
        if (shieldSpeed < 0) shieldSpeed = 0;
    }
}

export function resetShieldSpeed() {
    shieldSpeed = baseShieldSpeed;
}

export function updateShieldRotation() {
    shieldAngle += shieldSpeed * 0.05;
}