from django.contrib import admin
from django.contrib.auth import admin as auth_admin, get_user_model
from django.utils.translation import gettext_lazy as _

UserModel = get_user_model()


@admin.register(UserModel)
class UserAppAdmin(auth_admin.UserAdmin):
    change_user_password_template = None
    ordering = ('email',)
    list_display = ('email', 'is_active', 'date_joined')
    fieldsets = (
        (None, {'fields': ('email',)}),
        (
            _('Permissions'),
            {
                'fields': (
                    'is_active',
                    'is_staff',
                    'is_superuser',
                    'groups',
                    'user_permissions',
                ),
            },
        ),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ('wide',),
                "fields": ('email', 'password1', 'password2'),
            },
        ),
    )
