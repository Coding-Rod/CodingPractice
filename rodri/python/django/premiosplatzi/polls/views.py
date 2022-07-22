from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from .models import Question, Choice

def index(request):
    latest_question_list = Question.objects.all()
    return render(request, 'polls/index.html', {'latest_question_list': latest_question_list})
    # return HttpResponse(Question.objects.all())

def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)