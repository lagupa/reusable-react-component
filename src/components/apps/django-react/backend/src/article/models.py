from django.db import models

# Create your models here.


class Article (models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    date_created = models.TimeField(auto_now=True)

    def __str__(self):
        return self.title
