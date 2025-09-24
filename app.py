from flask import Flask, request, jsonify, send_file
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle

app = Flask(__name__)

# Sample training data (for demonstration)
emails = [
    'Win a free iPhone now',
    'Congratulations, you have won a lottery',
    'Meeting at 10am tomorrow',
    'Your invoice is attached',
    'Cheap meds available',
    'Let’s catch up for lunch',
    'Get rich quick scheme',
    'Project update attached',
]
labels = [1, 1, 0, 0, 1, 0, 1, 0]  # 1: spam, 0: not spam


vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)
model = MultinomialNB()
model.fit(X, labels)

@app.route('/')
def home():
    return send_file('index.html')

@app.route('/check_spam', methods=['POST'])
def check_spam():
    data = request.get_json()
    email_text = data.get('email', '')
    X_new = vectorizer.transform([email_text])
    prediction = model.predict(X_new)[0]
    result = 'Spam' if prediction == 1 else 'Not Spam'
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
