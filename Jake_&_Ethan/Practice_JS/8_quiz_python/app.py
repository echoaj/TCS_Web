from flask import Flask, render_template, request, json, jsonify


app = Flask(__name__)
result = None

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/', methods=['POST'])
def finished():
    global result
    result = request.form
    return render_template('finished.html')


@app.route('/answers')
def answers():
    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True, port=5000)