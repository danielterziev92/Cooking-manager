from django.contrib import admin
from django.urls import path, include

urlpatterns = (
    path('admin/', admin.site.urls),
    path('recipe/', include('cooking_manager.recipe.urls')),
)
