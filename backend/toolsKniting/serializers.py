from rest_framework import serializers

from .models import *

class ItemsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Tools
		fields = ('id', 'groupItems', 'title', 'imageTool', 'quantity', 'price', 'description',
		'seoDescription', 'is_active', 'Tags', 'brand', 'typeTool',
		'material', 'sizeСable', 'sizeNeedle', 'sizeDiameter')

class GroupSerializer(serializers.ModelSerializer):
	class Meta:
		model = Brand
		fields = ('id', 'title',)

class MaterialSerializer(serializers.ModelSerializer):
	class Meta:
		model = Metarial
		fields = ('id', 'title',)

# class ItemAPIViewsCotegory(serializers.ModelSerializer):

# 	blog_category = CategorySerializer()

# 	class Meta:
# 		model = Items
# 		fields = '__all__'