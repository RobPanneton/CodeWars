import math

def square_sum(numbers):
    sum = 0
    for n in numbers:
        sum += math.pow(n,2)
    return sum


print(square_sum([1,2,3]))