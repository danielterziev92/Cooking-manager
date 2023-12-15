from django.contrib.auth import logout
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RegisterSerializer, MyTokenObtainPairSerializer
from rest_framework import permissions, status, generics

from rest_framework_simplejwt.views import TokenObtainPairView
from ..models import BaseUser


class UserRegister(generics.CreateAPIView):
    queryset = BaseUser.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        return user

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response(data={'message': 'User registered successfully.'}, status=status.HTTP_201_CREATED)


class UserLogin(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        return Response(data={'message': 'User logged in successfully.'}, status=status.HTTP_200_OK)


class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        logout(request)
        return Response(data={'message': 'User logged out successfully.'}, status=status.HTTP_200_OK)
