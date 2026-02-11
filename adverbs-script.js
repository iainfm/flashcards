import { spanishAdverbs } from './adverbs.js';

let currentAdverb = null;
let showingTranslation = false;
let usedAdverbs = [];

const flashcard = document.getElementById('flashcard');
const spanishAdverbEl = document.getElementById('spanish-adverb');
const englishAdverbEl = document.getElementById('english-adverb');

function getRandomAdverb() {
    if (usedAdverbs.length >= spanishAdverbs.length) {
        usedAdverbs = [];
    }
    const availableAdverbs = spanishAdverbs.filter(adv => !usedAdverbs.includes(adv.spanish));
    const randomIndex = Math.floor(Math.random() * availableAdverbs.length);
    const adverb = availableAdverbs[randomIndex];
    usedAdverbs.push(adverb.spanish);
    return adverb;
}

function showSpanishAdverb(adverb) {
    spanishAdverbEl.textContent = adverb.spanish;
    englishAdverbEl.textContent = adverb.english;
    englishAdverbEl.classList.add('hidden');
    spanishAdverbEl.classList.remove('hidden');
}

function showEnglishAdverb(adverb) {
    englishAdverbEl.classList.remove('hidden');
}

function handleClick() {
    if (!showingTranslation) {
        showEnglishAdverb(currentAdverb);
        showingTranslation = true;
    } else {
        currentAdverb = getRandomAdverb();
        showSpanishAdverb(currentAdverb);
        showingTranslation = false;
    }
}

flashcard.addEventListener('click', handleClick);

currentAdverb = getRandomAdverb();
showSpanishAdverb(currentAdverb);
