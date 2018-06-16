from pet import Pet, Dog, Cat

# creating Dog object
jack = Dog("jack", 4, "brown")
print(jack.__str__())

# changing the name through setter method
jack.set_name("yomba")
print(jack.__str__())

# creating Cat object
bob = Cat("bob", 4, "white")
print(bob.__str__())

# using setter method to change value
bob.set_species("bob cat")
print(bob.__str__())