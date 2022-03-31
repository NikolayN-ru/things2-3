from django.urls import path
from .views import ItemAPIView, PostDetail, CategoryAPIView, index

urlpatterns = [
	path('next/', index),
	path('category/', CategoryAPIView.as_view()),
	path('<int:pk>/', PostDetail.as_view()),
	path('', ItemAPIView.as_view()),
]