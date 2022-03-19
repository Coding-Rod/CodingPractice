from datetime import datetime

def execution_time(func):
    def wrapper(*args, **kwargs):
        initial_time = datetime.now()
        x = func(*args, **kwargs)
        final_time = datetime.now()
        time_elapsed = final_time - initial_time
        print("Pasaron:"+ str(time_elapsed.total_seconds()) + " segundos")
        if (x is not None):
            return x
    return wrapper


@execution_time
def random_func():
    for _ in range(1,1000000):
        pass

@execution_time
def suma(a: int, b: int) -> int:
    return a + b

@execution_time
def saludo(nombre: str):
    print("Hola "+nombre)

random_func()
print(suma(1,2))
saludo('Facundo')