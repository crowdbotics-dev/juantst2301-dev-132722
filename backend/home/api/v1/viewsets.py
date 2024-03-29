from rest_framework import viewsets
from home.models import Newmo, Rojo, Newmo2, Newmo3, Newmo3, Newmo3
from .serializers import (
    NewmoSerializer,
    RojoSerializer,
    Newmo2Serializer,
    Newmo3Serializer,
    Newmo3Serializer,
    Newmo3Serializer,
)
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class NewmoViewSet(viewsets.ModelViewSet):
    serializer_class = NewmoSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Newmo.objects.all()


class RojoViewSet(viewsets.ModelViewSet):
    serializer_class = RojoSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Rojo.objects.all()


class Newmo2ViewSet(viewsets.ModelViewSet):
    serializer_class = Newmo2Serializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Newmo2.objects.all()


class Newmo3ViewSet(viewsets.ModelViewSet):
    serializer_class = Newmo3Serializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Newmo3.objects.all()
