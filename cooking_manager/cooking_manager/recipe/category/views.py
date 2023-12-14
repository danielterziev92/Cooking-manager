from rest_framework import generics as api_views, permissions

from cooking_manager.recipe.category.serializers import RecipeCategorySerializer
from cooking_manager.recipe.models import RecipeCategory


class RecipeCategoryListCreateView(api_views.ListCreateAPIView):
    queryset = RecipeCategory.objects.all()
    serializer_class = RecipeCategorySerializer
    permission_classes = (permissions.IsAuthenticated,)


class RecipeCategoryRetrieveUpdateDestroyView(api_views.RetrieveUpdateDestroyAPIView):
    queryset = RecipeCategory.objects.all()
    serializer_class = RecipeCategorySerializer
    permission_classes = (permissions.IsAuthenticated,)
