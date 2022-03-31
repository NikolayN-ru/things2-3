from django.urls import path
from .views import ItemAPIView, PostDetail, GroupAPIView, MaterialAPIView, index

urlpatterns = [
    path('next/', index),
    path('group/', GroupAPIView.as_view()),
    path('material/', MaterialAPIView.as_view()),
    path('<int:pk>/', PostDetail.as_view()),
    path('', ItemAPIView.as_view()),
]
