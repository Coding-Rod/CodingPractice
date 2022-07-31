from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Todo
from .forms import TodoForm
# Create your views here.
def index(request):
    item_list = Todo.objects.all()

    form = TodoForm()
    
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            print("error")
            print(form.errors.as_data())    
    context = {
        "title": "TODO LIST",
        "item_list": item_list,
        "form": form
    }
    return render(request, 'todo/index.html', context)