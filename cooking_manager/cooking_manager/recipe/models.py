from django.db import models


class RecipeCategory(models.Model):
    title = models.CharField(
        max_length=50,
        unique=True,
        null=False,
        blank=False,
    )

    parent_category = models.ForeignKey(
        'self',
        on_delete=models.RESTRICT,
        null=True,
        blank=True,
    )
