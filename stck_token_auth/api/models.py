from django.db import models

# Create your models here.


class Artist(models.Model):
    name = models.CharField(max_length=100)
    current_country = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name