class Flight():
  
    def __init__(self, origin, destination, duration):
        self.origin = origin
        self.destination = destination
        self.duration = duration

    def print_info(self):
        print(f'flight origin {self.origin}')
        print(f'flight destination {self.destination}')
        print(f'flight duration {self.duration}')
    
    def delay(self, amount):
        self.duration += amount

# main method
def main():
  # create a new flight
  f1 = Flight('melbourne', 'sydney', 1)

  # change duration
  f1.duration += 10

  # delay flight
  f1.delay(20)

  # print all the values
  f1.print_info()

if __name__ == "__main__" :
  main()