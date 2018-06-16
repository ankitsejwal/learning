from pet import Pet, Dog

# creating new Dog object
jack = Dog("jack", 4, "brown")
print(jack.__str__())

# changing the name through setter method
jack.set_name("yomba")
print(jack.__str__())
