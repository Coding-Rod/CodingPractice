from django.contrib import admin
from .models import GeeksModel, InputModel

@admin.register(GeeksModel)
class GeeksModelAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'img']
    list_display = ['title', 'description', 'last_modified', 'img']
    list_filter = ['last_modified']
    search_fields = ["title", "description"]

@admin.register(InputModel)
class GeeksModelAdmin(admin.ModelAdmin):
    fields = ['first_name', 'last_name', 'roll_number', 'email', 'password', 'student', 'subjects']
    list_display = ['roll_number', 'first_name', 'last_name', 'student', 'subjects']
    list_filter = ['roll_number', 'start_date']
    search_fields = ["first_name", "last_name"]


admin.site.site_header = "My admin dashboard"
# admin.site.register(GeeksModel, GeeksModelAdmin)