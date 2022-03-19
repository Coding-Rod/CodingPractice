# Crear un algoritmo que sume 2 números solo si ambos son capícuas

def is_capicua(func):
    def verify(n: int) -> bool:
        s = str(n)
        return s == s[::-1]
    
    def wrapper(a: int,b:int) -> int:
        if verify(a) and verify(b):
            return func(a,b)
        else:
            raise ValueError("Ambos números deben ser capícuas")
    return wrapper

@is_capicua
def sum(a: int,b: int) -> int:
    return a + b

if __name__ == "__main__":
    print(sum(121,212))
    print(sum(121,213))