from django.db import models
from django.db.models.fields import BLANK_CHOICE_DASH

# Create your models here.
class CensusFields(models.Model):
    shortName = models.CharField(max_length=10)
    description = models.CharField(max_length=2000)