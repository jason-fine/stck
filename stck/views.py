from django.shortcuts import render, redirect
from .models import Artist, Song
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ArtistSerializer
from .serializers import SongSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from stck import serializers
from django.http import HttpResponseRedirect
from .forms import TickerForm
from .tiingo import get_meta_data, get_price_data


User = get_user_model()

from .forms import ArtistForm
from .forms import SongForm
# Create your views here.



# def artist_list(request):
#     artists = Artist.objects.all()
#     return render(request, 'stck/artist_list.html',{'artists':artists})

# @api_view(('GET',))
# def artist_list(request):
#     artists = Artist.objects.all()
#     serializer = ArtistSerializer(artists, many = True)
#     return Response(serializer.data)

class ArtistView(APIView):
    def get(self, request):
        artists = Artist.objects.all()
        serializer = ArtistSerializer(artists, many=True)
        return Response(serializer.data)

def index(request):
    if request.method == 'POST':
        form = TickerForm(request.POST)
        if form.is_valid():
            ticker=request.POST('ticker')
            return HttpResponseRedirect(ticker)
    else:
        form = TickerForm()
    return render(request, 'index.html', {'form': form})

def ticker(request, tid):
    context = {}
    context['ticker'] = tid
    context['meta'] = get_meta_data(tid)
    context['price'] = get_price_data(tid)
    return render(request, 'ticker.html',context)

def song_list(request):
    songs = Song.objects.all()
    return render(request, 'stck/song_list.html', {'songs':songs})

def artist_detail(request, pk):
    artist = Artist.objects.get(id=pk)
    return render(request, 'stck/artist_detail.html', {'artist':artist})

def song_detail(request, pk):
    song = Song.objects.get(id=pk)
    return render(request, 'stck/song_detail.html', {'song':song})

def artist_create(request):
    if request.method == 'POST':
        form = ArtistForm(request.POST)
        if form.is_valid():
            artist=form.save()
            return redirect('artist_detail', pk=artist.pk)
    else:
        form = ArtistForm()
    return render(request, 'stck/artist_form.html', {'form': form})

def artist_edit(request, pk):
    artist = Artist.objects.get(pk=pk)
    if request.method == 'POST':
        form = ArtistForm(request.POST, instance=artist)
        if form.is_valid():
            artist=form.save()
            return redirect('artist_detail', pk=artist.pk)
    else:
        form = ArtistForm(instance=artist)
    return render(request, 'stck/artist_form.html', {'form': form})

def artist_delete(request, pk):
    Artist.objects.get(id=pk).delete()
    return redirect('artist_list')

def song_create(request):
    if request.method == 'POST':
        form = SongForm(request.POST)
        if form.is_valid():
            song=form.save()
            return redirect('song_detail', pk=song.pk)
    else:
        form = SongForm()
    return render(request, 'stck/song_form.html', {'form': form})

def song_edit(request, pk):
    song = Song.objects.get(pk=pk)
    if request.method == 'POST':
        form = SongForm(request.POST, instance=song)
        if form.is_valid():
            song=form.save()
            return redirect('song_detail', pk=song.pk)
    else:
        form = SongForm(instance=song)
    return render(request, 'stck/song_form.html', {'form': form})

def song_delete(request, pk):
    Song.objects.get(id=pk).delete()
    return redirect('song_list')

class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=422)


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
            # return User.objects.get(username=username)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):

        email = request.data.get('email')
        # username = request.data.get('username')
        password = request.data.get('password')

        user = self.get_user(email)
        # user = self.get_user(username)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})