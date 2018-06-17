class Pet():
    def __init__(self, name, leg, species):
        self.name = name
        self.leg = leg
        self.species = species

    # getter method
    def get_name(self):
        return self.name
    
    def get_leg(self):
        return self.leg

    def get_species(self):
        return self.species

    # setter method
    def set_name(self, name):
        self.name = name
    
    def set_leg(self, leg):
        self.leg = leg

    def set_species(self, species):
        self.species = species

    def __str__(self):
        return "%s has %s legs" % (self.name, self.leg)

# inheriting from Pet class
class Dog(Pet):
    def __init__(self, name, leg, color):
        Pet.__init__(self, name, leg, "Dog")
        self.color = color
        self.sound = "bark"

    def get_color(self):
        return self.color

    def __str__(self):
        return "%s has %s legs and is a %s colored %s" % (self.name, self.leg, self.color, self.species)

# cat class inherited from Pet
class Cat(Pet):
    def __init__(self, name, leg, color):
        Pet.__init__(self, name, leg, "Cat")
        self.color = color
        self.sound = "meow"

    def get_color(self):
        return self.color

    def __str__(self):
        return "%s has %s legs and is a %s colored %s" % (self.name, self.leg, self.color, self.species)

# Bird class
class Bird(Pet):
    def __init__(self, name, leg, color):
        Pet.__init__(self, name, leg, "Bird")
        self.color = color
    
    def get_color(self):
        return self.color

    def __str__(self):
        return "%s has %s legs and is a %s colored %s" % (self.name, self.leg, self.color, self.species)
 