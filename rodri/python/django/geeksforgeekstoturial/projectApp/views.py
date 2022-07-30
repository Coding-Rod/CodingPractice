from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import GeeksForm, InputForm
from .models import GeeksModel, InputModel

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

def input_view(request):
    context ={}
    context['form']= InputForm()
    if request.method == 'POST':
        form = InputForm(request.POST)
        if form.is_valid():
            InputModel.objects.create(first_name = form.cleaned_data['first_name'], last_name = form.cleaned_data['last_name'], roll_number = form.cleaned_data['roll_number'], password = form.cleaned_data['password'])
            return HttpResponseRedirect('/')
        else:
            print(form.errors.as_data())
    return render(request, "projectApp/form1.html", context)