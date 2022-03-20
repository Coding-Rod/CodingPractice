import time

def fibo_gen(max: int):
    a, b, counter = 0, 1, 0
    while counter < max:
        yield a
        a, b = b, a+b
        counter += 1
    
if __name__ == "__main__":
    fibonacci = fibo_gen(10)
    for i,j in enumerate(fibonacci):
        print(f"{i}: {j}")
        time.sleep(1)