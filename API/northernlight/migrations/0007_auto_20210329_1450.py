# Generated by Django 3.1.7 on 2021-03-29 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('northernlight', '0006_usercontrol_state'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserControl',
            new_name='Devices',
        ),
    ]
