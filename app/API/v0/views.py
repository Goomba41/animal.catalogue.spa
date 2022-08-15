#! env/bin/python3.6
# -*- coding: utf8 -*-
import os, uuid, traceback

from flask import current_app, Blueprint, Response, json, request
from app.models import Categories, Animals, DescriptionItem, ContactItem

API0 = Blueprint('API0', __name__)

# Генерация ответа сервера при ошибке
def server_error(http_status=500, dbg=None, message="Something wrong!"):
    if dbg is not None:
        message += " (%i)\n\n%s"%(http_status, traceback.format_exc())
    else:
        message += " (%i)"%(http_status)

    response = Response(
        response=json.dumps({"code": http_status, "title": "Error!", "message": message}),
        status=http_status,
        mimetype='application/json'
    )

    return response

# Получить все категории
@API0.route('/categories/', methods=['GET'])
def get_categories():

    # categoryMale = Categories()
    # categoryMale.title = 'Пёсели'
    # categoryMale.description = 'Выбрать собаку!'
    # categoryMale.route = 'males'
    # categoryMale.save()
    
    # categoryFemale = Categories()
    # categoryFemale.title = 'Собачули'
    # categoryFemale.description = 'Выбрать собаку!'
    # categoryFemale.route = 'females'
    # categoryFemale.save()

    # categoryPups = Categories()
    # categoryPups.title = 'Малыши'
    # categoryPups.description = 'Выбрать щеночка!'
    # categoryPups.route = 'pups'
    # categoryPups.save()

    # category = Categories.objects.get(route="males")
    # age = DescriptionItem(title="Возраст", value="5 лет")

    # animal = Animals(title="Босс", route="boss", categories=category, description={"age": age} )
    # animal.save()
    # animal = Animals(title="Тай", route="tai", categories=category, description={"age": age} )
    # animal.save()
    # animal = Animals(title="Элвис", route="elvis", categories=category, description={"age": age} )
    # animal.save()
    # animal = Animals(title="Мишка", route="mishka", categories=category, description={"age": age} )
    # animal.save()
    # animal = Animals(title="Зевс", route="zeus", categories=category, description={"age": age} )
    # animal.save()
    # animal = Animals(title="Бруно", route="bruno", categories=category, description={"age": age} )
    # animal.save()

    response = Response(
        response=json.dumps(Categories.objects),
        status=200,
        mimetype='application/json'
    )

    return response

# Получить одну категорию по маршруту
@API0.route('/categories/<string:route>', methods=['GET'])
def get_one_categories(route):

    # category = Categories.objects.get(route=route)
    # photo = 'dc50b71f-84a4-4e51-807c-9f5a7702f1e2'
    # category.images.append(photo)
    # category.save()

    response = Response(
        response=json.dumps(Categories.objects.get(route=route)),
        status=200,
        mimetype='application/json'
    )

    return response

# Получить всех животных
@API0.route('/animals', methods=['GET'])
def get_animals():

    # category = Categories.objects.get(route="females")
    # animal = Animals.objects.get(route="rosa")
    # animal.categories = category
    # animal.save()

    response = Response(
        response=json.dumps(Animals.objects),
        status=200,
        mimetype='application/json'
    )

    return response

# Получить животного по маршруту
@API0.route('/animals/<string:route>', methods=['GET'])
def get_one_animal(route):

    # print(Animals.objects.get(route=route))

    # age = DescriptionItem(title="Возраст", value="5 лет")
    # animal = Animals.objects.get(route=route)
    # animal.description.update({"age": age})
    # animal.description = "5 лет"
    # animal.save()

    # animal = Animals.objects.get(route=route)
    # print(animal.id)

    # photo = open('/home/goomba/dogsmile/client/src/assets/animals/rosa-1.jpg', 'rb')
    # photo = animal.images.read()
    # print(photo)
    # animal.images.put(photo, content_type = 'image/jpeg')

    # animal.adjective = "компанейский"
    # animal.pageText = "Главный Кореш всех собак района не просто так носит своё имя! В четвероногой команде он всегда заводила и вожак. Никакие игрушки и лакомства не могут заменить Корешку общение с верными дружбанами, а в одиночестве он и вовсе грустит. Конечно, с людьми Кор тоже не против потусить, особенно с детьми – они активнее поддерживают его игры :) А вот с обучением у него складывается не так успешно, ведь скучно сидеть на уроках, когда вокруг столько интересного!"

    # age = DescriptionItem(title="Возраст", value="5 лет", position=1)
    # weight = DescriptionItem(title="Вес", value="25 кг", position=2)
    # height = DescriptionItem(title="Рост", value="60 см в холке (выше колена)", position=3)
    # character = DescriptionItem(title="Характер", value="Сангвиник и экстраверт", position=4)
    # talent = DescriptionItem(title="Главный талант", value="Черная белка", position=5)
    # love = DescriptionItem(title="Любит", value="Когда дома тихо", position=6)
    # hate = DescriptionItem(title="Не любит", value="Одну из Ваших рубашек. Вы знаете какую.", position=7)
    # contact = ContactItem(name="Наталья", phone="+7 (926) 600-70-39")

    # leashAndWalking = DescriptionItem(title="Поводок и выгул", value="приучен к поводку и выгулу", position=1)
    # health = DescriptionItem(title="Здоровье", value="здоров и привит, аллергия на корм с курицей", position=2)
    # sterilizationCastration = DescriptionItem(title="Стерилизация/кастрация", value="да", position=3)
    # commands = DescriptionItem(title="Команды", value="не знает", position=4)
    # relationsWithChildren = DescriptionItem(title="Отношения с детьми", value="ладит", position=5)
    # relationsWithDogs = DescriptionItem(title="Отношения с собаками", value="ладит", position=6)
    # relationsWithCats = DescriptionItem(title="Отношения с кошками", value="не встречался", position=7)

    # animal.address = {"value": "Киров, район Исторический Центр, Собачья площадка", "description": "Передержка «Улыбка собаки» (заезд с улицы Володарского)", "coordinates": "[[58.615650269738055,49.66596101328708],[58.61697546161589,49.67111085459568]]"}
    # animal.contact = {"name": "Наталья", "phone": "+7 (926) 600-70-39"}
    # animal.conditions = {"region": "Киров и КО", "keepIn": "в квартиру или частный дом (возможно в отапливаемый вольер, но не на цепь)"}
    # animal.descriptionExtended = {"leashAndWalking": leashAndWalking, "health": health, "sterilizationCastration": sterilizationCastration, "commands": commands, "relationsWithChildren": relationsWithChildren, "relationsWithDogs": relationsWithDogs, "relationsWithCats": relationsWithCats}
    # animal.description = {"age": age, "weight": weight, "height": height, "character": character, "talent": talent, "love": love, "hate": hate}
    # animal.save()

    # animal = Animals.objects.get(route=route)

    # photo = [
    #     'bc691769-c6e2-48bf-8c2b-dab75a221bb8',
    #     '81886c07-4735-4a3a-94e2-31ce3c48424d',
    #     '32d988a2-9bdb-4516-abc0-7e8e294ba9c9'
    #     ]

    # {
    #     "description":
    #         {
    #             "age": {"title": "Возраст", "value": "5 лет", "position": 1},
    #             "character": {"title": "Характер", "value": "Сангвиник и экстраверт", "position": 4},
    #             "hate": {"title": "Не любит", "value": "Одну из Ваших рубашек. Вы знаете какую.", "position": 7},
    #             "height": {"title": "Рост", "value": "60 см в холке (выше колена)", "position": 3},
    #             "love": {"title": "Любит", "value": "Когда дома тихо", "position": 6},
    #             "talent": {"title": "Главный талант", "value": "Черная белка", "position": 5},
    #             "weight": {"title": "Вес", "value": "25 кг", "position": 2}
    #         },
    #     "descriptionExtended":
    #         {
    #             "commands": {"title": "Команды", "value": "не знает", "position": 4},
    #             "health": {"title": "Здоровье", "value": "здоров и привит, аллергия на корм с курицей", "position": 2},
    #             "leashAndWalking": {"title": "Поводок и выгул", "value": "приучен к поводку и выгулу", "position": 1},
    #             "relationsWithCats": {"title": "Отношения с кошками", "value": "не встречался", "position": 7},
    #             "relationsWithChildren": {"title": "Отношения с детьми", "value": "ладит", "position": 5},
    #             "relationsWithDogs": {"title": "Отношения с собаками", "value": "ладит", "position": 6},
    #             "sterilizationCastration": {"title": "Стерилизация/кастрация", "value": "да", "position": 3}
    #         },
    # }

    # animal.images.append(photo)
    # animal.update(set__images=photo)
    # animal.save()

    # Отработка ошибок:
    try:
        np_amount = int(request.args.get('npa', 1))
    except ValueError:
        return Response(
            response=json.dumps({"code" : 400, "message": "One of the parameters is of the wrong type"}),
            status=400,
            mimetype='application/json'
        )
    else:
        if (np_amount < 0):
            return Response(
                response=json.dumps({"code" : 400, "message": "One of the parameters has an incorrect value"}),
                status=400,
                mimetype='application/json'
            )

    animal = Animals.objects.get(route=route)
    prev = Animals.objects(id__gt=animal.id, categories=animal.categories).only('route').order_by('+id')[:np_amount]
    next = Animals.objects(id__lt=animal.id, categories=animal.categories).only('route').order_by('-id')[:np_amount]

    response = Response(
        response=json.dumps({'current': animal, 'previous': prev, 'next': next}),
        status=200,
        mimetype='application/json'
    )

    return response

# Получить животных по категории
@API0.route('categories/<string:route>/animals', methods=['GET'])
def get_category_animals(route):

    # Отработка ошибок:
    try:
        limit = int(request.args.get('limit', 5))
        offset = int(request.args.get('offset', 0))
    except ValueError:
        return Response(
            response=json.dumps({"code" : 400, "message": "One of the parameters is of the wrong type"}),
            status=400,
            mimetype='application/json'
        )
    else:
        if ((limit < 0) or (offset < 0)):
            return Response(
                response=json.dumps({"code" : 400, "message": "One of the parameters has an incorrect value"}),
                status=400,
                mimetype='application/json'
            )
    # ------------------

    category = Categories.objects.get(route=route)
    animals = Animals.objects(categories=category).order_by('-id').skip(offset).limit(limit)

    response = Response(
        response=json.dumps(animals),
        status=200,
        mimetype='application/json'
    )

    return response

# Регистрация сообщений из обратной связи и рассылка по адресам
@API0.route('feedback', methods=['POST'])
def post_feedback():

    # Отработка ошибок:
    try:
        print("Got feedback!")
    except ValueError:
        response = server_error(http_status=400, dbg=request.args.get("dbg"), message="Something wrong with feedback sending!")
    except Exception:
        response = server_error(dbg=request.args.get("dbg"), message="Something wrong with feedback sending!")
    else:
        response = Response(
            response=json.dumps({"code" : 200, "title": "Success!", "message": "Feedback successfully sended!"}),
            status=200,
            mimetype='application/json'
        )

    return response