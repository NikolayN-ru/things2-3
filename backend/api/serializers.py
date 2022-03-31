from rest_framework import serializers

from .models import *

class ItemsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Items
		fields = ('id', 'title', 'content', 'price', 'category', 'quantity',
		'image_one', 'image_too', 'image_free', 'is_active', 'composition',
		'keywords', 'description')

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ('id', 'title',)

# class ItemAPIViewsCotegory(serializers.ModelSerializer):

# 	blog_category = CategorySerializer()

# 	class Meta:
# 		model = Items
# 		fields = '__all__'