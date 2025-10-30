const quotes = {
	aurelius: [
		{
			text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
			author: "Marcus Aurelius"
		},
		{
			text: "The happiness of your life depends upon the quality of your thoughts.",
			author: "Marcus Aurelius"
		},
		{
			text: "Waste no more time arguing about what a good man should be. Be one.",
			author: "Marcus Aurelius"
		},
		{
			text: "If it is not right, do not do it; if it is not true, do not say it.",
			author: "Marcus Aurelius"
		},
		{
			text: "The best revenge is not to be like your enemy.",
			author: "Marcus Aurelius"
		},
		{
			text: "Life is neither good nor evil, but only a place for good and evil.",
			author: "Marcus Aurelius"
		},
		{
			text: "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
			author: "Marcus Aurelius"
		},
		{
			text: "When you arise in the morning, think of what a privilege it is to be alive.",
			author: "Marcus Aurelius"
		},
		{
			text: "Look well into yourself; there is a source of strength which will always spring up if you will always look.",
			author: "Marcus Aurelius"
		},
		{
			text: "It is not death that a man should fear, but he should fear never beginning to live.",
			author: "Marcus Aurelius"
		},
		{
			text: "Our anger and annoyance are more detrimental to us than the things themselves which anger or annoy us.",
			author: "Marcus Aurelius"
		},
		{
			text: "Confine yourself to the present.",
			author: "Marcus Aurelius"
		},
		{
			text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
			author: "Marcus Aurelius"
		},
		{
			text: "Because your own strength is unequal to the task, do not assume that it is beyond the powers of man.",
			author: "Marcus Aurelius"
		},
		{
			text: "Perfection of character is this: to live each day as if it were your last, without frenzy, without apathy, without pretense.",
			author: "Marcus Aurelius"
		},
		{
			text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
			author: "Marcus Aurelius"
		}
	],
	seneca: [
		{
			text: "We suffer more often in imagination than in reality.",
			author: "Seneca"
		},
		{
			text: "Luck is what happens when preparation meets opportunity.",
			author: "Seneca"
		},
		{
			text: "Difficulties strengthen the mind, as labor does the body.",
			author: "Seneca"
		},
		{
			text: "He who is brave is free.",
			author: "Seneca"
		},
		{
			text: "Sometimes even to live is an act of courage.",
			author: "Seneca"
		},
		{
			text: "True happiness is to enjoy the present, without anxious dependence upon the future.",
			author: "Seneca"
		},
		{
			text: "Associate with people who are likely to improve you.",
			author: "Seneca"
		},
		{
			text: "It is not that we have a short time to live, but that we waste much of it.",
			author: "Seneca"
		},
		{
			text: "No person has the power to have everything they want, but it is in their power not to want what they do not have.",
			author: "Seneca"
		},
		{
			text: "To wish to be well is a part of becoming well.",
			author: "Seneca"
		},
		{
			text: "Wherever there is a human being, there is an opportunity for kindness.",
			author: "Seneca"
		},
		{
			text: "If a man knows not to which port he sails, no wind is favorable.",
			author: "Seneca"
		},
		{
			text: "Wealth is the slave of a wise man and the master of a fool.",
			author: "Seneca"
		},
		{
			text: "The whole future lies in uncertainty: live immediately.",
			author: "Seneca"
		},
		{
			text: "A gem cannot be polished without friction, nor a man perfected without trials.",
			author: "Seneca"
		},
		{
			text: "Begin at once to live, and count each separate day as a separate life.",
			author: "Seneca"
		}
	],
	epictetus: [
		{
			text: "It is not what happens to you, but how you react to it that matters.",
			author: "Epictetus"
		},
		{
			text: "No man is free who is not master of himself.",
			author: "Epictetus"
		},
		{
			text: "First say to yourself what you would be; and then do what you have to do.",
			author: "Epictetus"
		},
		{
			text: "Wealth consists not in having great possessions, but in having few wants.",
			author: "Epictetus"
		},
		{
			text: "Don't explain your philosophy. Embody it.",
			author: "Epictetus"
		},
		{
			text: "Circumstances don't make the man, they only reveal him to himself.",
			author: "Epictetus"
		},
		{
			text: "People are disturbed not by things, but by the views they take of them.",
			author: "Epictetus"
		},
		{
			text: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
			author: "Epictetus"
		},
		{
			text: "Make the best use of what is in your power, and take the rest as it happens.",
			author: "Epictetus"
		},
		{
			text: "If you want to improve, be content to be thought foolish and stupid.",
			author: "Epictetus"
		},
		{
			text: "He who laughs at himself never runs out of things to laugh at.",
			author: "Epictetus"
		},
		{
			text: "First learn the meaning of what you say, and then speak.",
			author: "Epictetus"
		},
		{
			text: "The key is to keep company only with people who uplift you.",
			author: "Epictetus"
		},
		{
			text: "Seek not that the things which happen should happen as you wish; but wish the things which happen to be as they are.",
			author: "Epictetus"
		},
		{
			text: "Remember, it is not enough to be hit or insulted to be harmed; you must believe that you are being harmed.",
			author: "Epictetus"
		},
		{
			text: "Attach yourself to what is spiritually superior, regardless of what other people think or do.",
			author: "Epictetus"
		}
	]
};

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const shuffleButton = document.getElementById("shuffle");
const filterButtons = Array.from(document.querySelectorAll(".filter"));

let activePhilosopher = "aurelius";
const lastIndices = {
	aurelius: -1,
	seneca: -1,
	epictetus: -1
};

function getRandomQuote(key) {
	const pool = quotes[key];
	if (!pool || pool.length === 0) {
		return null;
	}

	let index = Math.floor(Math.random() * pool.length);
	if (pool.length > 1) {
		while (index === lastIndices[key]) {
			index = Math.floor(Math.random() * pool.length);
		}
	}

	lastIndices[key] = index;
	return pool[index];
}

function renderQuote(quote) {
	if (!quote) {
		return;
	}

	quoteEl.textContent = `“${quote.text}”`;
	authorEl.textContent = `— ${quote.author}`;
}

function setActiveButton(key) {
	filterButtons.forEach((button) => {
		const isActive = button.dataset.philosopher === key;
		button.setAttribute("aria-pressed", String(isActive));
	});
}

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const philosopher = button.dataset.philosopher;
		if (!philosopher) {
			return;
		}

		activePhilosopher = philosopher;
		setActiveButton(philosopher);
		renderQuote(getRandomQuote(philosopher));
	});
});

shuffleButton.addEventListener("click", () => {
	renderQuote(getRandomQuote(activePhilosopher));
});

// Initialize with a fresh quote so the starting view matches the active filter.
renderQuote(getRandomQuote(activePhilosopher));
