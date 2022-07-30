# import form class from django
from django import forms

# import GeeksModel from models.py
from .models import GeeksModel, InputModel

# create a ModelForm
class GeeksForm(forms.ModelForm):
	# specify the name of model to use
	class Meta:
		model = GeeksModel
		fields = "__all__"

class InputForm(forms.ModelForm):
	class Meta:
		model = InputModel
		fields = "__all__"
		widgets = {
			'first_name': forms.TextInput(attrs={"class":"form-control", "id":"floatingInput", 'placeholder':'First Name'}),
			'last_name': forms.TextInput(attrs={'class': 'form-control', "id":"floatingInput", 'placeholder':'Last Name'}),
			'email': forms.EmailInput(attrs={"class":"form-control", "id":"floatingInput", 'placeholder':'Email'}),
   
			'roll_number': forms.NumberInput(attrs={'class': 'form-control', "id":"floatingInput", 'placeholder':'Roll number'}),
			'password': forms.PasswordInput(attrs={'class': 'form-control', "id":"floatingInput", 'placeholder':'Password'}),
   
			'student': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
			'subjects': forms.Select(attrs={'class': 'form-select mb-3'}),
   
			
		}
		
    # first_name = forms.CharField(max_length = 200)
    # last_name = forms.CharField(max_length = 200)
    # email = forms.EmailField(max_length=200, required=False)
    
    # roll_number = forms.IntegerField(
    #                  help_text = "Enter 6 digit roll number"
    #                  )
    # password = forms.CharField(widget = forms.PasswordInput())
    # # subjects = forms.ChoiceField(widget = forms.ChoiceField(label = "Select your subject"), choices = [])
    # subjects = forms.CharField(
    #     widget = forms.Select(choices=((1,"Math"), (2,"Physics"), (3,"Chemistry"), (4,"Informatics"), (5,"Speech"))), 
    #     max_length=200
	# )
    # start_date = forms.DateField(widget = forms.DateInput(attrs = {'type':'date'})) 