class Pet():
    def __init__(self, name, leg, species):
        self.name = name
        self.leg = leg
        self.species = species

    def get_name(self):
        return self.name
    
    def get_leg(self):
        return self.leg

    def get_species(self):
        return self.species

    def set_name(self, name):
        self.name = name
    
    def set_leg(self, leg):
        self.leg = leg

    def set_species(self, species):
        self.species = species

    def __str__(self):
        return "%s has %s legs" % (self.name, self.leg)

class Dog(Pet):
    def __init__(self, name, leg, color):
        Pet.__init__(self, name, leg, "Dog")
        self.color = color
        self.sound = "bark"

    def get_color(self):
        return self.color

    def __str__(self):
        return "%s has %s legs and is %s" % (self.name, self.leg, self.color)