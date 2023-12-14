from django.urls import path, include

from cooking_manager.recipe.category.views import RecipeCategoryListView, RecipeCategoryCreateView, \
    RecipeCategoryRetrieveUpdateDestroyView

urlpatterns = (
    path('categories/', RecipeCategoryListView.as_view(), name='recipe_category_list'),
    path('category/', include([
        path('create/', RecipeCategoryCreateView.as_view(), name='recipe_category_create'),
        path('<int:pk>/', RecipeCategoryRetrieveUpdateDestroyView.as_view(),
             name='recipe_category_retrieve_update_delete')
    ])),
)
