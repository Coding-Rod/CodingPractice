import datetime

from django.test import TestCase
from django.utils import timezone

from .models import Question
# We Mainly test: (Models, Views)

class QuestionModelTests(TestCase):
    def test_was_published_recently_with_future_questions(self):
        """ Returns False for questions whose pub_date is in the future """
        time = timezone.now() + datetime.timedelta(days=30)
        future_question = Question(
            question_text="¿Quién es el mejor Course Director de Platzi?",
            pub_date=time
            )
        self.assertIs(future_question.was_published_recently(), False)
        
    def test_was_published_recently_with_past_question(self):
        """ Returns False for questions whose pub_date is in the past """
        time = timezone.now() - datetime.timedelta(days=1, seconds=1)
        past_question = Question(
            question_text="¿Quién es el mejor Course Director de Platzi?",
            pub_date=time
            )
        self.assertIs(past_question.was_published_recently(), False)
        
    def test_was_published_recently_with_same_moment_question(self):
        """ Returns True for questions whose pub_date is less than 1 day ago """
        time = timezone.now() - datetime.timedelta(days=0, hours=23)
        same_moment_question = Question(
            question_text="¿Quién es el mejor Course Director de Platzi?",
            pub_date=time
            )
        self.assertIs(same_moment_question.was_published_recently(), True)
        