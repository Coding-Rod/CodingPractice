from django.http import HttpResponse

def hello_geek(request):
    return HttpResponse("Hello Geeks!")