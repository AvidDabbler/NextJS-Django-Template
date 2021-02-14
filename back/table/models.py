from django.db import models

# Create your models here.
class Table(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    year = models.IntegerField(null=True, blank=True, default=0)
    geo = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=2000, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name