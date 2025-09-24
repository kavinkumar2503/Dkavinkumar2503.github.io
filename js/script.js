function checkSpam() {
    const emailText = document.getElementById('emailText').value.toLowerCase();
    const spamKeywords = [
        'win', 'free', 'lottery', 'prize', 'congratulations', 'cheap', 'get rich', 'scheme', 'meds', 'money', 'urgent', 'click', 'offer', 'now', 'limited', 'exclusive', 'act fast', 'guaranteed', 'risk free', 'credit', 'loan', 'easy', 'investment', 'miracle', 'deal', 'discount', 'buy', 'order', 'cash', 'gift', 'reward', 'selected', 'winner', 'claim', 'unsubscribe'
    ];
    let isSpam = false;
    for (let keyword of spamKeywords) {
        if (emailText.includes(keyword)) {
            isSpam = true;
            break;
        }
    }
    const result = isSpam ? 'Spam' : 'Not Spam';
    document.getElementById('result').innerText = 'Result: ' + result;
}
