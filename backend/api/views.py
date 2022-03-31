from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import ItemsSerializer, CategorySerializer

class ItemAPIView(generics.ListAPIView):
	queryset = Items.objects.all()
	serializer_class = ItemsSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Items.objects.all()
	serializer_class = ItemsSerializer

class CategoryAPIView(generics.ListAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer

def index(request):
	return render(request, 'index.html', {})