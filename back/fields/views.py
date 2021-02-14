from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .fields import fields

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAll(request):
    return Response(fields)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getFields(request, pk):
    if not pk.upper().startswith('B') | len(pk) == 3:
        Response("Field search input needed")
    fields_search = []
    for i in fields:
        if pk in i['SHORT NAME']:
            fields_search.append(i)
    return Response(fields_search)