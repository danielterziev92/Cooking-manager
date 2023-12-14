from django.contrib import admin

from cooking_manager.recipe.models import RecipeCategory


@admin.register(RecipeCategory)
class RecipeAdmin(admin.ModelAdmin):
    pass
