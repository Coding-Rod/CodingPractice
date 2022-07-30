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
        form = GeeksForm(request.POST)
        GeeksModel.objects.create(
            title=request.POST['title'], description=request.POST['description'], img=request.POST['img']
        )
        return HttpResponseRedirect('/')
    return render(request, "projectApp/home.html", context)