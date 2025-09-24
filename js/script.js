function checkSpam() {
    const emailText = document.getElementById('emailText').value;
    const lowerText = emailText.toLowerCase();
    const spamKeywords = [
        'win', 'free', 'lottery', 'prize', 'congratulations', 'cheap', 'get rich', 'scheme', 'meds', 'money', 'urgent', 'click', 'offer', 'now', 'limited', 'exclusive', 'act fast', 'guaranteed', 'risk free', 'credit', 'loan', 'easy', 'investment', 'miracle', 'deal', 'discount', 'buy', 'order', 'cash', 'gift', 'reward', 'selected', 'winner', 'claim', 'unsubscribe'
    ];
    document.getElementById('spinner').style.display = 'block';
    setTimeout(() => {
        let foundKeywords = [];
        for (let keyword of spamKeywords) {
            if (lowerText.includes(keyword)) {
                foundKeywords.push(keyword);
            }
        }
        let confidence = foundKeywords.length > 0 ? Math.min(100, foundKeywords.length * 15 + 40) : 5;
        let isSpam = foundKeywords.length > 0;
        let highlighted = emailText;
        foundKeywords.forEach(kw => {
            const regex = new RegExp(`(${kw})`, 'gi');
            highlighted = highlighted.replace(regex, '<span class="spam-keyword">$1</span>');
        });
        let resultHtml = `<div>Result: <strong>${isSpam ? 'Spam' : 'Not Spam'}</strong></div>`;
        resultHtml += `<div>Confidence: <strong>${confidence}%</strong></div>`;
        if (foundKeywords.length > 0) {
            resultHtml += `<div>Spam keywords detected:</div><div>${highlighted}</div>`;
        } else {
            resultHtml += `<div>No spam keywords detected.</div>`;
        }
        document.getElementById('result').innerHTML = resultHtml;
        document.getElementById('spinner').style.display = 'none';
    }, 700);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('darkIcon');
    icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
