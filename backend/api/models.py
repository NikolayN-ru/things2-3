from django.db import models

class Category(models.Model):
	title = models.CharField(max_length=50, verbose_name='имя категории')

	def __str__(self):
		return self.title

class Composition(models.Model):
	title = models.CharField(max_length=50, verbose_name='имя тега')

	def __str__(self):
		return self.title


class Items(models.Model):
	title = models.CharField(max_length=255, verbose_name='заголовок')
	content = models.TextField(verbose_name='описание')
	price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name='цена')
	category = models.ForeignKey(Category, on_delete=models.PROTECT, verbose_name='категория')
	quantity = models.PositiveIntegerField(verbose_name='количество')
	image_one = models.ImageField(upload_to='', null=True, blank=True)
	image_too = models.ImageField(upload_to='', null=True, blank=True)
	image_free = models.ImageField(upload_to='', null=True, blank=True)
	is_active = models.BooleanField(default=False, verbose_name='активно')
	composition = models.ManyToManyField(Composition, blank=True, null=True, related_name='composition')
	keywords = models.CharField(max_length=255)
	description = models.TextField(verbose_name='SEO')
	vendorCode = models.CharField(max_length=255, verbose_name='код поставщика')

	def __str__(self):
		return self.title
