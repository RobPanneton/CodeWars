def accum(s):
    mumble = ""
    for char_index, char in enumerate(s):
        for push_index, num in enumerate(range(char_index + 1)):
            if push_index == 0:
                mumble += char.upper()
            else:
                mumble += char.lower()
        if char_index < len(s) - 1:
            mumble += "-"

    return mumble


print(accum("ZpglnRxqenU"))
# print(accum("NyffsGeyylB"))
# print(accum("MjtkuBovqrU"))


# This time no story, no theory. The examples below show you how to write function accum:

# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.
