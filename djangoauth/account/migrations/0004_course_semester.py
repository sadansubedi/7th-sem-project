# Generated by Django 3.2.4 on 2024-01-08 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0003_auto_20240108_1953'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='semester',
            field=models.IntegerField(null=True),
        ),
    ]
