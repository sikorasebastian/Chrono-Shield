import { shieldSpeed, baseShieldSpeed } from './shield.js';

export let mana = 100;
const maxMana = 100;
const manaRegenRate = 0.2;
const manaDepletionFactor = 500;

export function regenerateMana() {
    if (mana < maxMana) {
        mana += manaRegenRate;
        if (mana > maxMana) mana = maxMana;
    }
    document.querySelector('.mana').style.width = `${(mana / maxMana) * 100}%`;
}

export function depleteMana() {
    const speedDifference = Math.abs(shieldSpeed - baseShieldSpeed);
    const manaDepletionRate = speedDifference * manaDepletionFactor;
    if (mana > 0) {
        mana -= manaDepletionRate / 120;
        if (mana < 0) mana = 0;
    }

    if (mana === 0) {
        shieldSpeed = baseShieldSpeed;
    }
}