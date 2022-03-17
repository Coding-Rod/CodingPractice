# Libreria para escoger una palabra al azar del archivo de texto
import random

# Función para quitar tildes
def normalize(s):
    replacements = (
        ("á", "a"),
        ("é", "e"),
        ("í", "i"),
        ("ó", "o"),
        ("ú", "u"),
    )
    for a, b in replacements:
        s = s.replace(a, b).replace(a.upper(), b.upper())
    return s

# Leer archivo de texto, lee todas las palabras
with open('word.txt') as f:
    lines = f.readlines()

# Selecciona una palabra del archivo de texto
word = lines[random.randint(0,len(lines)-1)].replace('\n', '')

print(word)

hidden = len(word)*'_' # Cadena de "_" del mismo tamaño de la palabra
tries = 3 #Número de intentos

# Este ciclo se ejecutará mientras se tenga intentos y no se haya cambiado hidden por completo
while(hidden != word and tries > 0):
    # Pregunta al usuario
    print(f"Adivina la palabra, te quedan {tries} intentos:\n{' '.join(hidden)}\n")
    letter = input("Inserte una letra\n")

    # Verifica si ya se dijo una letra
    if letter in hidden:
        print("Ya dijiste esa letra\n")
        continue

    # Utilizamos una lista en lugar de un string para llenarlo con indices
    aux = list(hidden)

    # Recorremos la lista enviando un indice y un valor
    for i,j in enumerate(word):
        # Comparamos si es que en hidden hay una letra o un "_", luego verificamos si la letra del usuario corrensponde a la letra en la posición de la palabra que se intenta adivinar, la letra está normalizada y se compara en upper
        aux[i] = aux[i] if aux[i] != '_' else (j if letter.upper()==normalize(j).upper() else '_')

    # Si no hubo cambios se reduce el número de intentos
    if hidden == ''.join(aux):
        tries -= 1
    
    # Se asigna la lista al string convirtiéndola en string
    hidden = ''.join(aux)

# Imprime si se ganó o no utilizando un ternario
print(f"{' '.join(hidden)}\n"+ ("Felicidades, ganaste!!" if tries > 0 else f'Perdiste :(, la palabra era: {word}'))
    