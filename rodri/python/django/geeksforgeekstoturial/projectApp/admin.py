from django.contrib import admin
from .models import GeeksModel

class GeeksModelAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'img']
    list_display = ['title', 'description', 'last_modified', 'img']
    list_filter = ['last_modified']
    search_fields = ["title", "description"]

admin.site.register(GeeksModel, GeeksModelAdmin)