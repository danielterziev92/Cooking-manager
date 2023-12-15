from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import BaseUser


class CustomUserAdmin(UserAdmin):
    model = BaseUser
    list_display = ('email', 'is_active', 'is_staff', 'date_joined')
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(BaseUser, CustomUserAdmin)
