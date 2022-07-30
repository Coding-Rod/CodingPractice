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
