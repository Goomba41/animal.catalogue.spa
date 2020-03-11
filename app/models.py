#! env/bin/python3.6
# -*- coding: utf8 -*-

"""Модели данных БД."""
from app import db

class DescriptionItem(db.EmbeddedDocument):
    title = db.StringField(required=True, max_length=25, min_length=1)
    value = db.StringField(required=True, max_length=50, min_length=1)
    position = db.IntField(required=True)

class ContactItem(db.EmbeddedDocument):
    title = db.StringField(required=True, max_length=25, min_length=1)
    value = db.StringField(required=True, max_length=50, min_length=1)

class Categories(db.Document):
    title = db.StringField(required=True, max_length=30, min_length=1)
    description = db.StringField(required=True, max_length=50, min_length=1)
    route = db.StringField(required=True, max_length=25, min_length=1)
    images = db.ListField()

class Animals(db.Document):
    title = db.StringField(required=True, max_length=30, min_length=1)
    route = db.StringField(required=True, max_length=25, min_length=1)
    categories = db.ReferenceField(Categories)
    description = db.MapField(db.EmbeddedDocumentField(DescriptionItem))
    descriptionExtended = db.MapField(db.EmbeddedDocumentField(DescriptionItem))
    contact = db.DictField()
    address = db.DictField()
    conditions = db.DictField()
    pageText = db.StringField(required=True, max_length=500, min_length=1)
    adjective = db.StringField(required=True, max_length=50, min_length=1)
    images = db.ListField()

# description: {
#   age: {
#     title: "Возраст",
#     value: "1,5 года"
#   },
#   weight: {
#     title: "Вес",
#     value: "25 кг"
#   },
#   height: {
#     title: "Рост",
#     value: "60 см в холке (выше колена)"
#   },
#   character: {
#     title: "Характер",
#     value: "Сангвиник и экстраверт"
#   },
#   talent: {
#     title: "Главный талант",
#     value: "Черная белка"
#   },
#   love: {
#     title: "Любит",
#     value: "Когда дома тихо"
#   },
#   hate: {
#     title: "Не любит",
#     value: "Одну из Ваших рубашек. Вы знаете какую."
#   }

# description_extended: {
#   leashAndWalking: {
#     title: "Поводок и выгул",
#     value: "приучен к поводку и выгулу"
#   },
#   health: {
#     title: "Здоровье",
#     value: "здоров и привит, аллергия на корм с курицей"
#   },
#   sterilizationCastration: {
#     title: "Стерилизация/кастрация",
#     value: "да"
#   },
#   commands: {
#     title: "Команды",
#     value: "не знает"
#   },
#   relationsWithChildren: {
#     title: "Отношения с детьми",
#     value: "ладит"
#   },
#   relationsWithDogs: {
#     title: "Отношения с собаками",
#     value: "ладит"
#   },
#   relationsWithCats: {
#     title: "Отношения с кошками",
#     value: "не встречался"
#   }
# }
