import { spanishAdjectives } from './adjectives.js';

let currentAdjective = null;
let showingTranslation = false;
let usedAdjectives = [];

const flashcard = document.getElementById('flashcard');
const spanishAdjectiveEl = document.getElementById('spanish-adjective');
const englishAdjectiveEl = document.getElementById('english-adjective');

function getRandomAdjective() {
    if (usedAdjectives.length >= spanishAdjectives.length) {
        usedAdjectives = [];
    }
    const availableAdjectives = spanishAdjectives.filter(adj => !usedAdjectives.includes(adj.spanish));
    const randomIndex = Math.floor(Math.random() * availableAdjectives.length);
    const adjective = availableAdjectives[randomIndex];
    usedAdjectives.push(adjective.spanish);
    return adjective;
}

function showSpanishAdjective(adjective) {
    spanishAdjectiveEl.textContent = adjective.spanish;
    englishAdjectiveEl.textContent = adjective.english;
    englishAdjectiveEl.classList.add('hidden');
    spanishAdjectiveEl.classList.remove('hidden');
}

function showEnglishAdjective(adjective) {
    englishAdjectiveEl.classList.remove('hidden');
}

function handleClick() {
    if (!showingTranslation) {
        showEnglishAdjective(currentAdjective);
        showingTranslation = true;
    } else {
        currentAdjective = getRandomAdjective();
        showSpanishAdjective(currentAdjective);
        showingTranslation = false;
    }
}

flashcard.addEventListener('click', handleClick);

currentAdjective = getRandomAdjective();
showSpanishAdjective(currentAdjective);
