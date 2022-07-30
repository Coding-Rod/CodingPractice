from django.contrib import admin
from .models import GeeksModel

@admin.register(GeeksModel)
class GeeksModelAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'img']
    list_display = ['title', 'description', 'last_modified', 'img']
    list_filter = ['last_modified']
    search_fields = ["title", "description"]


admin.site.site_header = "My admin dashboard"
# admin.site.register(GeeksModel, GeeksModelAdmin)