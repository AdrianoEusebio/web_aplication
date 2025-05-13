from django.urls import path
from .views import UserDetailView,UserListView, UserRegisterView, UserUpdateView,UserDeleteView

urlpatterns = [
    path('users/<int:id>/', UserDetailView.as_view(), name='user-detail'),
    path('users/', UserListView.as_view(), name='user-detail'),
    path('users/register/', UserRegisterView.as_view(), name='user-register'),
    path('users/<int:id>/update/', UserUpdateView.as_view(), name='user-update'),
    path('users/delete/<int:id>', UserDeleteView.as_view(), name='user-delete')
]