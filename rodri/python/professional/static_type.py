a: int = 5
print(a)

b: str = "Hola"
print(b)

c: bool = True
print(c)

def suma(a: int, b: int) -> int:
    return a + b

print(suma(1, 2))

from typing import Tuple, Dict, List

CoordinateType = List[Dict[str, Tuple[int, int]]]

coordinates: CoordinateType = [
    {
        'coord1': (1,2),
        'coord2': (3,5),
    },
    {
        'coord1': (0,1),
        'coord2': (2,5),
    }
]