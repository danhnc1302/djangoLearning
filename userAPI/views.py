from django.shortcuts import render

# Create your views here.


from rest_framework.views import APIView
from rest_framework.response import Response

from .serializer import UserSerializer

# Create your views here.

class TestView(APIView):
    def get(self, request, format=None):
        print("API Was Called")
        return Response("You Made It", status=200)
    
    
class UserView(APIView): 
    def post(self, request, format=None):
        print("Creating a user")
        user_data = request.data
        user_serializer = UserSerializer(data=user_data)
        
        if user_serializer.is_valid():
            user_serializer.save()
            return Response({"data": user_serializer.data}, status=201)  # 201 Created for successful creation
        else:
            errors = user_serializer.errors
            return Response({"error": errors}, status=400)

