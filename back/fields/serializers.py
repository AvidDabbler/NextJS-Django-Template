from django.db.models import fields
from rest_framework import serializers
from .models import CensusFields

class CensusFieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CensusFields
        fields = '__all__'