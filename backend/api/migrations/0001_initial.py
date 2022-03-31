# Generated by Django 4.0.2 on 2022-02-06 16:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='имя категории')),
            ],
        ),
        migrations.CreateModel(
            name='Composition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='имя тега')),
            ],
        ),
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='заголовок')),
                ('content', models.TextField(verbose_name='описание')),
                ('price', models.DecimalField(decimal_places=2, max_digits=6, verbose_name='цена')),
                ('quantity', models.PositiveIntegerField(verbose_name='количество')),
                ('image_one', models.ImageField(blank=True, null=True, upload_to='')),
                ('image_too', models.ImageField(blank=True, null=True, upload_to='')),
                ('image_free', models.ImageField(blank=True, null=True, upload_to='')),
                ('is_active', models.BooleanField(default=False, verbose_name='активно')),
                ('keywords', models.CharField(max_length=255)),
                ('description', models.TextField(verbose_name='SEO')),
                ('vendorCode', models.CharField(max_length=255, verbose_name='код поставщика')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.category', verbose_name='категория')),
                ('composition', models.ManyToManyField(blank=True, null=True, related_name='composition', to='api.Composition')),
            ],
        ),
    ]