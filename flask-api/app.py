from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

stores = [
    {
        'name': 'store1',
        'items': [
            {
                'name': 'item1',
                'price': 15.99
            }
        ]
    },
    {
        'name': 'store2',
        'items': [
            {
                'name': 'item2',
                'price': 12
            }
        ]
    }
]

@app.route('/')
def home():
    return render_template('index.html')

# GET store with store numbers
@app.route('/store/no/<int:number>')
def store_number(number):
    store_length = len(stores)
    if number < store_length:
        return jsonify(stores[number])
    return jsonify({'error': 'The number exceeded store length'})

# POST /store data: {name:}
@app.route('/store', methods=['POST'])
def create_store():
    request_data = request.get_json()
    new_store = {
        "name": request_data["name"],
        "item": []
    }
    stores.append(new_store)
    return jsonify(new_store)

# GET /store/<string:name>
@app.route('/store/<string:name>')
def get_store(name):
    for store in stores:
        if store['name'] == name:
            return jsonify(store)
        else:
            return jsonify({'message': 'store not found!'})

# GET /store
@app.route('/stores')
def get_stores():
    return jsonify({'stores': stores})

@app.route('/store/<string:name>/item', methods=['POST'])
def create_item_in_store(name):
    request_data = request.get_json()
    new_item = {
        "name": request_data["name"],
        "price": request_data["price"]
    }
    for store in stores:
        if store["name"] == name:
            store["items"].append(new_item)
            return jsonify(new_item)
    return jsonify({"message": "Store not found!"})
    

@app.route('/store/<string:name>/item')
def get_item_in_store(name):
    for store in stores:
        if store["name"] == name:
            return jsonify({"items": store.items})
    return jsonify({"message": "store not found"})

app.run(port = 5000, debug=True)
