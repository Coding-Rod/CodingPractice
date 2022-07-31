from django import forms
from .models import Todo

class TodoForm(forms.ModelForm):
    
    class Meta:
        model = Todo
        fields = "__all__"
        widgets = {
            "title": forms.TextInput(attrs={"type":"text", "class":"form-control", "id":"titleInput", "placeholder":"Title"}),
            "description": forms.Textarea(attrs={"type":"text", "class":"form-control", "id":"descriptionInput", "placeholder":"Description", "rows":"3"}),
        }