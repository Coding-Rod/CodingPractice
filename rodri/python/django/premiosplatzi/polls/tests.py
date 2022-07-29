#! We Mainly test: (Models, Views)

# Imports
import datetime

from django.test import TestCase
from django.urls.base import reverse
from django.utils import timezone

from .models import Question, Choice

# Functions
def create_question(question_text, days):
    """
    Create a question with the given `question_text` and published the
    given number of `days` offset to now (negative for questions published
    in the past, positive for questions that have yet to be published).
    """
    time = timezone.now() + datetime.timedelta(days=days)
    return Question.objects.create(question_text=question_text, pub_date=time)


# Classes

## Models
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
        
class ChoiceModelTests(TestCase):
    def every_question_has_choices(self):
        """ Returns False if the question has no choices"""
        question = create_question(question_text="Question without choices", days=0)
        self.assertQuerysetEqual(question.choice_set.all, [])               

## Views
class QuestionIndexViewTests(TestCase):
    def test_no_question(self):
        """ If no question exist, an appropiate message is displayed"""
        response = self.client.get(reverse('polls:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "No polls are available.")
        self.assertQuerysetEqual(response.context['latest_question_list'], [])
        
    def test_future_question(self):
        """
        Questions with a pub_date in the future aren't displayed on
        the index page.
        """
        create_question(question_text="¿Quién es el mejor Course Director de Platzi?", days=30)
        response = self.client.get(reverse('polls:index'))
        self.assertContains(response, "No polls are available.")
        self.assertQuerysetEqual(response.context['latest_question_list'], [])
        
    def test_past_question(self):
        """ 
        Questions with a pub_date in the past are displayed on the
        index page.
        """
        question = create_question(question_text="¿Quién es el mejor Course Director de Platzi?", days=-30)
        response = self.client.get(reverse('polls:index'))
        self.assertQuerysetEqual(
            response.context['latest_question_list'],
            [question]
        )
        
    def test_future_question_and_past_question(self):
        """
        Even if both past and future question exist, only past questions are displayed
        """
        past_question = create_question(question_text="Past Question", days=-30)
        future_question = create_question(question_text="Future Question", days=30)
        response = self.client.get(reverse('polls:index'))
        self.assertQuerysetEqual(
            response.context['latest_question_list'],
            [past_question]
        )

    def test_two_past_questions(self):
        past_question1 = create_question(question_text="Past Question 1", days=-30)
        past_question2 = create_question(question_text="Past Question 2", days=-30)
        response = self.client.get(reverse('polls:index'))
        self.assertQuerysetEqual(response.context['latest_question_list'], [past_question2, past_question1])
        
    def test_two_future_questions(self):
        future_question1 = create_question(question_text="Future Question 1", days=30)
        future_question2 = create_question(question_text="Future Question 2", days=30)
        response = self.client.get(reverse('polls:index'))
        self.assertQuerysetEqual(response.context['latest_question_list'], [])
        
class QuestionDetailViewTests(TestCase):
    def test_future_question(self):
        """
        The detail view of a question with pub_date in the future
        returns a 404 error not found
        """
        future_question = create_question(question_text="Future Question", days=30)
        url = reverse('polls:detail', args=(future_question.id,))
        response = self.client.get(url)
        self.assertEqual(response.status_code, 404)
    
    def test_past_question(self):
        """
        The detail view of a question with pub_date in the past
        displats the question_text
        """
        past_question = create_question(question_text="Past Question", days=-30)
        url = reverse('polls:detail', args=(past_question.id,))
        response = self.client.get(url)
        self.assertContains(response, past_question.question_text)

