# from ssl import VERIFY_ALLOW_PROXY_CERTS
from django.urls import path
from . import views

#register username: user password: djangouser

urlpatterns = [
    # path('', views.artist_list, name='artist_list'),
    path('songs/', views.song_list, name='song_list'),
    path('artists/<int:pk>',  views.artist_detail, name='artist_detail'),
    path('songs/<int:pk>',  views.song_detail, name='song_detail'),
    path('artists/new', views.artist_create, name='artist_create'),
    path('artists/<int:pk>/edit', views.artist_edit, name='artist_edit'),
    path('artist/<int:pk>/delete', views.artist_delete, name='artist_delete'),
    path('songs/new', views.song_create, name='song_create'),
    path('songs/<int:pk>/edit', views.song_edit, name='song_edit'),
    path('song/<int:pk>/delete', views.song_delete, name='song_delete'),
    path('', views.ArtistView.as_view(), name='artist_list'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
]