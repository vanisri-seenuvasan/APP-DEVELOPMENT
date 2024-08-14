from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, RequestViewSet , PropertyViewSet, PaymentViewSet, PropertyActionViewSet, CartViewSet
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'requests', RequestViewSet)
router.register(r'properties', PropertyViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'property-action', PropertyActionViewSet)
router.register(r'cart', CartViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
