# Generated by Django 3.2.11 on 2022-01-25 10:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Register',
            fields=[
                ('regid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=10)),
                ('mobile', models.CharField(max_length=10)),
                ('address', models.CharField(max_length=1000)),
                ('city', models.CharField(max_length=10)),
                ('gender', models.CharField(max_length=20)),
                ('info', models.CharField(max_length=1000)),
            ],
        ),
    ]
