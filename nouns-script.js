import { spanishNouns } from './nouns.js';

let currentNoun = null;
let showingTranslation = false;
let usedNouns = [];

const flashcard = document.getElementById('flashcard');
const spanishNounEl = document.getElementById('spanish-noun');
const englishNounEl = document.getElementById('english-noun');

function getRandomNoun() {
    if (usedNouns.length >= spanishNouns.length) {
        usedNouns = [];
    }
    const availableNouns = spanishNouns.filter(noun => !usedNouns.includes(noun.spanish));
    const randomIndex = Math.floor(Math.random() * availableNouns.length);
    const noun = availableNouns[randomIndex];
    usedNouns.push(noun.spanish);
    return noun;
}

function showSpanishNoun(noun) {
    spanishNounEl.textContent = noun.spanish;
    englishNounEl.textContent = noun.english;
    englishNounEl.classList.add('hidden');
    spanishNounEl.classList.remove('hidden');
}

function showEnglishNoun(noun) {
    englishNounEl.classList.remove('hidden');
}

function handleClick() {
    if (!showingTranslation) {
        showEnglishNoun(currentNoun);
        showingTranslation = true;
    } else {
        currentNoun = getRandomNoun();
        showSpanishNoun(currentNoun);
        showingTranslation = false;
    }
}

flashcard.addEventListener('click', handleClick);

currentNoun = getRandomNoun();
showSpanishNoun(currentNoun);
