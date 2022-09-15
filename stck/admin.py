from django.contrib import admin
from .models import Artist, Song

# Register your models here.
#username: admin
#email: jasonfine94@gmail.com
#password: admin

admin.site.register(Artist)
admin.site.register(Song)
