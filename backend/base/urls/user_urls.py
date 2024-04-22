from django.urls import path
from base.views import user_views

urlpatterns = [
    path('login/',user_views.MyTokenObtainPariView.as_view(), name='token_obtain_pair'),
    path('register/',user_views.register_user, name="register"),
    path('', user_views.get_users, name="users"),
    path('profile/',user_views.get_user_profile, name = 'user-profile'),
    path('profile/update/',user_views.update_user_profile, name = "update-userProfile"),
]