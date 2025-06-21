let honey = 0;
let tokens = 0;
let beeLevel = 1;
let hiveLevel = 1;
let beeCost = 10;
let hiveCost = 50;

const honeyEl = document.getElementById('honey');
const tokenEl = document.getElementById('token');
const beeCostEl = document.getElementById('beeCost');
const hiveCostEl = document.getElementById('hiveCost');
const notif = document.getElementById('notification');

function updateDisplay() {
  honeyEl.textContent = honey;
  tokenEl.textContent = tokens;
  beeCostEl.textContent = beeCost;
  hiveCostEl.textContent = hiveCost;
}

document.getElementById('collect').addEventListener('click', () => {
  const gain = beeLevel * hiveLevel;
  honey += gain;
  updateDisplay();
});

document.getElementById('sell').addEventListener('click', () => {
  const earned = Math.floor(honey / 10);
  tokens += earned;
  honey -= earned * 10;
  updateDisplay();
});

document.getElementById('upgradeBee').addEventListener('click', () => {
  if (honey >= beeCost) {
    honey -= beeCost;
    beeLevel++;
    beeCost = Math.floor(beeCost * 1.5);
    updateDisplay();
  }
});

document.getElementById('upgradeHive').addEventListener('click', () => {
  if (honey >= hiveCost) {
    honey -= hiveCost;
    hiveLevel++;
    hiveCost = Math.floor(hiveCost * 1.7);
    updateDisplay();
  }
});

function showNotification() {
  notif.classList.remove('hidden');
  setTimeout(() => notif.classList.add('hidden'), 8000);
}

setInterval(showNotification, 30000);

updateDisplay();
