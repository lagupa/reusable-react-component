from django.urls import path
from .views import (
    ListOfArticleView,
    CreateArticleView,
    ArticleEditView,
    ArticleDeleteView,
    ArticleDetailsView,
)

urlpatterns = [
    path('', ListOfArticleView.as_view()),
    path('create', CreateArticleView.as_view()),
    path('<pk>', ArticleDetailsView.as_view()),
    path('update/<pk>', ArticleEditView.as_view()),
    path('delete/<pk>', ArticleDeleteView.as_view()),
]
