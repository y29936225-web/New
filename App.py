from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    dragon = data["dragon"]
    tiger = data["tiger"]

    if dragon > tiger:
        winner = "dragon"
    elif tiger > dragon:
        winner = "tiger"
    else:
        winner = "tie"

    return jsonify({"winner": winner})

if __name__ == "__main__":
    app.run()
