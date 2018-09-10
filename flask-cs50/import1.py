import csv
import os
from flask import Flask, render_template, request
from models import db, Flight, Passenger

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('AIRLINE_DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)


def main():
    f = open('./csv/flights.csv')
    reader = csv.reader(f)
    for origin, destination, duration in reader:
        flight = Flight(origin=origin, destination=destination, duration=duration)
        db.session.add(flight)
        print(f'Added flight from {origin} to {destination} lasting {duration}')
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        main()
