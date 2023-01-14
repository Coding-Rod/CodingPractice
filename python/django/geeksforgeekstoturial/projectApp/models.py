# import the standard Django Model
# from built-in library
from django.db import models
# declare a new model with a name "GeeksModel"
class GeeksModel(models.Model):
	""" Custom form example from geeksforgeeks
	Args:
		models (models.Model): the model to be renamed.
	"""	
	title = models.CharField(max_length = 200, help_text = "Enter the title of the post")
	description = models.TextField(help_text = "Enter the description of the post")
	last_modified = models.DateTimeField(auto_now_add = True)
	img = models.ImageField(upload_to = "images/", help_text = "Upload the image of the post")

	def __str__(self):
		return self.title

class InputModel(models.Model):
    first_name = models.CharField(max_length = 200)
    last_name = models.CharField(max_length = 200)
    email = models.EmailField(max_length = 200)
    
    roll_number = models.IntegerField(default=0)
    password = models.CharField(max_length = 200)
    
    student = models.BooleanField(default=False)
    subjects = models.CharField(
        choices = (("Math","Math"), ("Physics","Physics"), ("Chemistry","Chemistry"), ("Informatics","Informatics"), ("Speech","Speech")),
        default = "Math",
        max_length = 200
	)
    start_date = models.DateField(auto_now_add = True)
    
    def __str__(self):
        return self.first_name + " " + self.last_name
