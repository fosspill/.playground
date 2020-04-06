from flask import Flask, jsonify, render_template, request
from random import randint
from collections import OrderedDict



app = Flask(__name__)

od = {}
gm = ""

@app.route("/", methods=['GET'])
def home():
    search = request.args.get("user")
    return render_template('dieroller.html')
    
@app.route("/rolldie", methods=['GET'])
def rolldie():
    dice = request.args.get("dice")
    user = request.args.get("user")
    
    if(dice and user):
        od.clear()
        dierolls = [str(randint(1, 6)) for x in range(1, int(dice) + 1)]
        dierollstring = ', '.join(dierolls)
        od[user] = dierollstring
        return ', '.join(dierolls)
    return "Something went wrong"
    
@app.route("/rolldie-gm", methods=['GET'])
def rolldiegm():
    global gm
    dice = request.args.get("dice")
    dierolls = [str(randint(1, 6)) for x in range(1, int(dice) + 1)]
    dierollstring = ', '.join(dierolls)
    gm = dierollstring
    return ', '.join(dierolls)
    
@app.route("/rolls", methods=['GET'])
def rolls():
    return jsonify(od)
    
@app.route("/rolls-gm", methods=['GET'])
def rollsgm():
    return jsonify(gm)
    
if __name__ == "__main__":
    app.run(debug=True)
