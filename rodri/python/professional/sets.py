# [1,1,2,2,4] -> [1, 2, 4]

def remove_duplicates(func):
    def wrapper(l: list) -> list:
        l = list(set(l))
        l.sort()
        l = func(l)
        return l
    return wrapper

@remove_duplicates
def square_list(l: list) -> list:
   return [x**2 for x in l] 

if __name__ == "__main__":
    l = [1,5,7,8,5,5,1,7,8,9]
    print(square_list(l))