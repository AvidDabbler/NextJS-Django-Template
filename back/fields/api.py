from .models import CensusFields
from rest_framework import viewsets
from .serializers import CensusFieldsSerializer

# Lead Viewset

class CensusFieldsViewSet(request):
    serializer_class = CensusFieldsSerializer
    def get_fields(self):
        return self.request.text