class Flight():

    counter = 1

    def __init__(self, origin, destination, duration):
        self.origin = origin
        self.destination = destination
        self.duration = duration

        # flight no/id
        self.id = Flight.counter
        Flight.counter += 1

        # keep track of passenger
        self.passenger = []

    def print_info(self):
        print(f'flight id: {self.id}')
        print(f'flight origin: {self.origin}')
        print(f'flight destination: {self.destination}')
        print(f'flight duration: {self.duration}')

        print(f'\ntotal passenger: {len(self.passenger)}')
        for passenger in self.passenger:
            print(passenger.first_name)

    def delay(self, amount):
        self.duration += amount

    def add_passenger(self, p):
        self.passenger.append(p)
        p.flight_id = self.id


class Passenger():

    def __init__(self, first_name, last_name, phone_no):
        self.first_name = first_name
        self.last_name = last_name
        self.phone_no = phone_no

    def print_info(self):
        print(f'{self.first_name}')
        print(f'{self.last_name}')
        print(f'{self.phone_no}')
        try:
            print(f'flight id: {self.flight_id}\n')
        except AttributeError:
            print(f'{self.first_name} is yet to book a flight.')

# main method


def main():
    # create a new flight
    f1 = Flight('melbourne', 'sydney', 1)

    # change duration
    f1.duration += 10

    # delay flight
    f1.delay(20)

    # create passenger
    alice = Passenger('Alice', 'Fisher', '034343433')
    bob = Passenger('Bob', 'Fisher', '0424324324')
    sandeep = Passenger('Sandeep', 'Mehta', '0421224324')

    f1.add_passenger(alice)
    f1.add_passenger(bob)

    # print all the values
    f1.print_info()
    bob.print_info()

    f1.add_passenger(sandeep)
    sandeep.print_info()


if __name__ == "__main__":
    main()
