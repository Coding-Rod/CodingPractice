import re


# la funcion la podemos definir en el notebook y usar directamente
def get_text(file):
    '''Read Text from file'''
    text = open(file).read()

    # This regex means: remove HTML tags
    text = re.sub(r'<.*?>', ' ', text)

    # This regex means: replace multiple whitespace characters with a " "
    text = re.sub(r'\s+', ' ', text)
    return text
