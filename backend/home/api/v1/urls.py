from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    NewmoViewSet,
    RojoViewSet,
    Newmo2ViewSet,
    NewmoViewSet,
    Newmo2ViewSet,
    RojoViewSet,
    NewmoViewSet,
    Newmo2ViewSet,
    RojoViewSet,
    NewmoViewSet,
    Newmo2ViewSet,
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
router.register("newmo2", Newmo2ViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
