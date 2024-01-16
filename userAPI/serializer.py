from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.validators import UniqueValidator

from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    
    username = serializers.CharField(  # Change from EmailField to CharField
        required=True,
        max_length=32,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    
    first_name = serializers.CharField(
        required=True,
        max_length=32
    )
    
    last_name = serializers.CharField(
        required=True,
        max_length=32
    )
    
    password = serializers.CharField(
        required=True,
        min_length=8,  # Correcting the minimum length
        write_only=True
    )
    
    def create(self, validated_data): 
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
    def get_token(self, obj):
        refresh = RefreshToken.for_user(obj)
        access_token = str(refresh.access_token)
        return access_token

        
    class Meta:
        model = User 
        fields = (
            'token',
            'username',
            'password',
            'first_name',
            'last_name',
            'email',
            'id'
        )
