from article.models import Article
from .serializers import ArticleSerializer
from rest_framework import generics


class ListOfArticleView(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# class CreateArticleView(generics.CreateAPIView):  #Avoid this one
class CreateArticleView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailsView(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# class ArticleEditView(generics.RetrieveUpdateAPIView): #Avoid this one
class ArticleEditView(generics.RetrieveUpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# class ArticleDeleteView(generics.DestroyAPIView): #Avoid this one
class ArticleDeleteView(generics.RetrieveDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
