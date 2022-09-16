
from django import forms 
from .models import Artist, Song

class ArtistForm(forms.ModelForm):

    class Meta:
        model=Artist
        fields=('name','photo_url', 'current_country')

class SongForm(forms.ModelForm):

    class Meta:
        model=Song
        fields=('artist','title','preview_url', 'album')

class TickerForm(forms.Form):
    ticker = forms.CharField(label='Ticker', max_length=5)