from pet import Pet, Dog

jack = Dog("jack", 4, "brown")
print(jack.__str__())

jack.set_name("yomba")
print(jack.__str__())