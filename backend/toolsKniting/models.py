from django.db import models

class GroupItems(models.Model):
	title = models.CharField(max_length=50, verbose_name='группа товара')
	imageGroup = models.ImageField(upload_to='', null=True, blank=True)

	def __str__(self):
		return self.title

class Tags(models.Model):
	title = models.ManyToManyField('Tools', max_length=50, verbose_name='имя тега')

	def __str__(self):
		return self.title

class Brand(models.Model):
	title = models.CharField(max_length=50, verbose_name='имя бренда')

	def __str__(self):
		return self.title

class TypeTool(models.Model):
	title = models.CharField(max_length=50, verbose_name='тип инструмента')

	def __str__(self):
		return self.title

class Metarial(models.Model):
	title = models.CharField(max_length=50, verbose_name='материал')

	def __str__(self):
		return self.title

class SizeСable(models.Model):
	title = models.CharField(max_length=50, verbose_name='размер лески')

	def __str__(self):
		return self.title

class SizeNeedle(models.Model):
	title = models.CharField(max_length=50, verbose_name='размер спицы')

	def __str__(self):
		return self.title

class SizeDiameter(models.Model):
	title = models.CharField(max_length=50, verbose_name='диаметр спиц')

	def __str__(self):
		return self.title



class Tools(models.Model):
	groupItems = models.ForeignKey(GroupItems, on_delete=models.PROTECT, null=True, blank=True, verbose_name='группа товара')
	title = models.CharField(max_length=50, verbose_name='название')
	imageTool = models.ImageField(upload_to='', null=True, blank=True)
	quantity = models.IntegerField(null=True, blank=True, verbose_name='количество')
	price = models.IntegerField(null=True, blank=True, verbose_name='цена')
	description = models.TextField(blank=True, verbose_name='описание')
	seoDescription = models.TextField(blank=True, verbose_name='SEO text')
	is_active = models.BooleanField(blank=True, verbose_name='активно', default=True)
	Tags = models.ManyToManyField(Tags, blank=True, null=True, related_name='теги')
	brand = models.ForeignKey(Brand, on_delete=models.PROTECT, verbose_name='бренд')
	typeTool = models.ForeignKey(TypeTool, on_delete=models.PROTECT, verbose_name='тип инструмента')
	material = models.ForeignKey(Metarial, on_delete=models.PROTECT, verbose_name='материал')
	sizeСable = models.ForeignKey(SizeСable, on_delete=models.PROTECT, verbose_name='размер лески')
	sizeNeedle = models.ForeignKey(SizeNeedle, on_delete=models.PROTECT, verbose_name='размер спицы')
	sizeDiameter = models.ForeignKey(SizeDiameter, on_delete=models.PROTECT, verbose_name='диаметр спиц')

	def __str__(self):
		return self.title