from django.urls import path
from base.views import order_views

urlpatterns = [
    path('add/',order_views.addOrderItem,name="orders-add"),
]