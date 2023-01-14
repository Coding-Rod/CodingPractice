from django.db import models

# Create your models here.
class Todo(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField(max_length=255, blank=True, null=True)
    deadline = models.DateTimeField(blank=True, null=True)

    # class Meta:
    #     verbose_name = _("Todo")
    #     verbose_name_plural = _("Todos")

    # def __str__(self):
    #     return self.title

    # def get_absolute_url(self):
    #     return reverse("Todo_detail", kwargs={"pk": self.pk})
