from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic
from .forms import GeeksForm, InputForm
from .models import GeeksModel, InputModel

import logging

class index(generic.ListView):
    template_name = 'projectApp/index.html'
    context_object_name = 'form_responses'

    def get_queryset(self):
        """Return the form responses."""
        return InputModel.objects.all()
 
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
            InputModel.objects.create(
                first_name = form.cleaned_data['first_name'], 
                last_name = form.cleaned_data['last_name'], 
                email = form.cleaned_data['email'],
                roll_number = form.cleaned_data['roll_number'], 
                password = form.cleaned_data['password'],
                subjects = ("Math", "Physics", "Chemistry", "Informatics", "Speech")[int(form.cleaned_data['subjects'])-1],
                student = form.cleaned_data['student'],
            )
            return HttpResponseRedirect('/')
        else:
            print(form.errors.as_data())
    return render(request, "projectApp/form1.html", context)