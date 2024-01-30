from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    NewmoViewSet,
    RojoViewSet,
    NewmoViewSet,
    RojoViewSet,
    NewmoViewSet,
    RojoViewSet,
    NewmoViewSet,
    RojoViewSet,
)

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("newmo", NewmoViewSet)
router.register("rojo", RojoViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
