def is_prime(n: int) -> bool:
    if n == 0 or n == 4: return False
    for i in range(2,int(n/2)):
        if(n % i == 0): return False
    return True

def run(num: int):
    print({True:"The number is prime", False: "The number is not prime"}[is_prime(num)])
    
if __name__ == "__main__":
    run(int(input()))