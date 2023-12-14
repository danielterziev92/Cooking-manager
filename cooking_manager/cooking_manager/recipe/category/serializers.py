from rest_framework import serializers

from cooking_manager.recipe.models import RecipeCategory


class RecipeCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeCategory
        fields = ['id', 'title', 'parent_category']
