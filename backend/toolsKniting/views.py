from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import ItemsSerializer, GroupSerializer

class ItemAPIView(generics.ListAPIView):
	queryset = Tools.objects.all()
	serializer_class = ItemsSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Tools.objects.all()
	serializer_class = ItemsSerializer

class GroupAPIView(generics.ListAPIView):
	queryset = Brand.objects.all()
	serializer_class = GroupSerializer

class MaterialAPIView(generics.ListAPIView):
	queryset = Metarial.objects.all()
	serializer_class = GroupSerializer

def index(request):
	return render(request, 'index.html', {})