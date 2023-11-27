let words = [
    {
        original: "winter",
        translation: "зима"
    },
    {
        original: "spring",
        translation: "весна"
    },
    {
        original: "summer",
        translation: "лето"
    },
    {
        original: "autumn",
        translation: "осень"
    },
    {
        original: "catalog",
        translation: "каталог"
    },
    {
        original: "car",
        translation: "машина"
    },
    {
        original: "hello",
        translation: "привет"
    }
]

const testTranslation = {
    settings: {
        percentageCorrectMinAnswers: 50
    },
    messages: {
        start: "Good luck on the test",
        final: {
            passed: "Congratulations, test passed!",
            unPassed: "Sorry, test unpassed!"
        }
    },
    result: {
        numberCorrectAnswers: 0
    }
}


alert(testTranslation.messages.start);


for (let i = 0; i < words.length; i++) {
    let answerWord = prompt(words[i].original);
    alert(answerWord === words[i].translation);
    if (answerWord === words[i].translation) {
        testTranslation.result.numberCorrectAnswers = testTranslation.result.numberCorrectAnswers + 1;
    }
};



const percentageCorrectAnswers = testTranslation.result.numberCorrectAnswers / words.length * 100;
if (percentageCorrectAnswers > testTranslation.settings.percentageCorrectMinAnswers) {
    alert(testTranslation.messages.final.passed);
} else {
    alert(testTranslation.messages.final.unPassed);
}



