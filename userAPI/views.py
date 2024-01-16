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
        user_data = request.data
        user_serializer = UserSerializer(data=user_data)
        
        if user_serializer.is_valid():
            user = user_serializer.save()
            
            # Access the token from the user_serializer
            token = user_serializer.get_token(user)
            
            # Add the token to the serialized data
            user_data['token'] = token
            
            return Response({"data": user_data}, status=201)
        else:
            errors = user_serializer.errors
            return Response({"error": errors}, status=400)
    def get(self, request, format=None):
        print(request.user.is_authenticated)
        if request.auth:
            user = request.user
            if user.is_authenticated and user.is_active:
                print(user)
                user_data = UserSerializer(user).data
                return Response(user_data, status=200)
            else:
                return Response("Invalid Credentials", status=403)
        else:
            return Response("Unauthorized", status=401)