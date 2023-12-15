from django.db import models
from django.contrib.auth import models as auth_models

from cooking_manager.user_app.manager import UserAppManager


class BaseUser(auth_models.AbstractBaseUser, auth_models.PermissionsMixin):
    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
    )

    is_active = models.BooleanField(
        default=True,
    )

    date_joined = models.DateTimeField(
        auto_now_add=True,
    )

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'

    objects = UserAppManager()


class Person(BaseUser):
    first_name = models.CharField(max_length=55)
    last_name = models.CharField(max_length=55)
    recipes = models.ManyToManyField(
        Recipe, related_name='authors', blank=True)
    favorite_recipes = models.ManyToManyField(
        Recipe, related_name='favorited', blank=True)
    followers = models.ManyToManyField(
        'self', symmetrical=False, related_name='following', blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
