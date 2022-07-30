from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import GeeksForm
from .models import GeeksModel

def index(request):
    return HttpResponse("Hello Geeks")
 
# Create your views here.
def home_view(request):
    context ={}
    context['form']= GeeksForm()
    if request.method == 'POST':
        form = GeeksForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()      
            return HttpResponseRedirect('/')
        else:
            print(form.errors.as_data())
    return render(request, "projectApp/home.html", context)