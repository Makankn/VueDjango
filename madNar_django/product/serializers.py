from rest_framework import serializers

from .models import Category, Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id",
                  "name",
                  "get_absoulute_url",
                  "description",
                  "price",
                  "get_image",
                  "get_thumbnail"
                  )
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("id",
                  "name"
                  )
        