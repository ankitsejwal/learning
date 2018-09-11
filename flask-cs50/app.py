import os
from flask import Flask, render_template, request
from models import db, Flight, Passenger

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('AIRLINE_DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)


@app.route('/flights')
def flights():
    flights = Flight.query.all()
    return render_template("flights.html", flights=flights)


@app.route('/flight/<int:flight_id>')
def flight(flight_id):
    flight = Flight.query.get(flight_id)
    passengers = Passenger.query.filter_by(flight_id=flight_id).all()
    return render_template("flight.html", flight=flight, passengers=passengers)


@app.route('/book', methods=['POST', 'GET'])
def book():
    flights = Flight.query.all()

    if request.method == 'POST':
        name = request.form.get("passenger")
        flight_id = request.form.get("flight_id")
        # passenger = Passenger(name=name, flight_id=flight_id)
        # db.session.add(passenger)
        # db.session.commit()
        flight = Flight.query.get(flight_id)
        flight.add_passenger(name)
        return("Successfully entered")

    else:
        return render_template('book.html', flights=flights)


@app.route('/passengers/<int:flight_id>')
def passengers(flight_id):
    flight = Flight.query.get(flight_id)
    # passengers = Passenger.query.filter_by(flight_id=flight_id).all()
    passengers = flight.passengers
    return render_template("passengers.html", flight=flight, passengers=passengers)


app.run(port=5002, debug=True)

# if __name__ == "__main__":
#     with app.app_context():
#         main()
