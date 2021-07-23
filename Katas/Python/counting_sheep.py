def count_sheeps(sheep):
    present = 0
    for count in sheep:
        if count == True:
            present += 1
    return present
