# Spanish Flashcards

A web application for learning the most common Spanish words using interactive flashcards. Practice verbs, nouns, adjectives, and adverbs!

## Features

- Practice with Spanish verbs, nouns, adjectives, and adverbs
- Over 100 of the most common words in each category, with English translations
- Verbs include full conjugations for all six pronouns and tenses
- Interactive flashcard interface
- Random word selection to aid learning
- Click/tap anywhere on the card to reveal the answer or get a new word
- Mobile-responsive design
- Beautiful gradient UI

## How to Use

1. Open `index.html` in a web browser
2. Choose the type of words you want to practice: verbs, nouns, adjectives, or adverbs
3. On the flashcard page, click the card to reveal the English translation (or conjugations for verbs)
4. Click again to get a new randomly-selected word
5. Continue learning!

## Running Locally

Simply open the `index.html` file in any modern web browser. No server or build process required.

Only verbs are supported for this method as the other types need to import their word lists as a javascript module.

Alternatively, you can serve it locally with a simple HTTP server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8080
```

Then visit `http://localhost:8080` in your browser.

## Published location

The system is available online at [https://spanish.iainfm.co.uk](https://spanish.iainfm.co.uk). There is no login/registration required and ther are no cookies or other tracking on the site.

## Files

- `index.html` - Main menu to choose word type
- `verbs.html`, `nouns.html`, `adjectives.html`, `adverbs.html` - Flashcard pages for each word type
- `verbs-script.js`, `nouns-script.js`, `adjectives-script.js`, `adverbs-script.js` - JavaScript logic for each category
- `verbs.js`, `nouns.js`, `adjectives.js`, `adverbs.js` - Word data for each category
- `styles.css` - CSS styling and responsive design

## Screenshots

### Main Menu
<img width="108" height="219" alt="Screenshot_20260211-133433" src="https://github.com/user-attachments/assets/f9cd5f34-6f3b-4aee-9144-e5081f8eac59" />


### Example Flashcard
<img width="108" height="195" alt="Screenshot_20260211-133459" src="https://github.com/user-attachments/assets/5bc7d942-894f-4e93-adff-9b07fae0b15c" />


### Verb Conjugations View
<img width="108" height="220" alt="Screenshot_20260211-133442" src="https://github.com/user-attachments/assets/6b97e6f1-8fa8-4cff-ad56-35591037ddb1" />


