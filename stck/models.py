from django.db import models

# Create your models here.

class Artist(models.Model):
    name = models.CharField(max_length=100)
    current_country = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Song(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='songs')
    title = models.CharField(max_length=100, default='no song title')
    album = models.CharField(max_length=100, default='no song title')
    preview_url = models.TextField(default='No Image')

    def __str__(self):
        return self.title