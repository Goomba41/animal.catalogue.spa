<template>
  <b-row class="mb-5">
    <b-col class="text-justify">
      <h1 class="mb-5 text-center">Как разместить животное в каталоге?</h1>
      <h2 id="условия">Условия размещения на сайте</h2>
      <ul>
        <li>
          Заявки на размещение принимаются
          <u class="text-warning font-weight-bold"
            >только напрямую от кураторов</u
          >.
        </li>
        <li>
          Заявки на размещение принимаются
          <u class="text-warning font-weight-bold"
            >только на животных, имеющих куратора</u
          >, а также находящиеся в приютах или на передержках. <br /><u
            class="text-danger font-weight-bold"
            >Уличные животные не размещаются!</u
          >
        </li>
        <li>
          Заявляемое животное должно пройти ветеринарный осмотр и антипаразитную
          обработку, получить все необходимые прививки (или быть готовым к их
          получению) и ветпаспорт с печатями ветеринарного учреждения.
        </li>
        <li>
          Животные старше 6 месяцев принимаются к размещению
          <u class="text-warning font-weight-bold">только стерилизованными</u>!
        </li>
        <li>
          Животные младше 6 месяцев принимаются к размещению
          <u class="text-warning font-weight-bold"
            >только при заключении с новым хозяином договора об обязательной
            стерилизации/кастрации</u
          >
          по достижению возраста 6 месяцев.
        </li>
        <li>
          Заявка на животное, предположительно потерянное/бывшедомашнее,
          принимается при условии принятия куратором
          <b-link :to="{ name: 'foundling' }" class="text-warning attention"
            >всех необходимых мер</b-link
          >
          по поиску прежних хозяев.
        </li>
      </ul>
      <h2 id="обязанности">Обязанности куратора</h2>
      <p>Присылая заявку на размещение животного Вы обязуетесь:</p>
      <ul>
        <li>
          Своевременно, любым доступным способом связи с нами,
          <u class="text-warning font-weight-bold"
            >уведомлять обо всех изменениях, связанных с размещенным животным</u
          >
          (изменение физиологических параметров, смена передержки, новые
          фотографии, снятие с размещения и пр.).
        </li>
        <li>
          Своевременно, независимо от давности размещения, любым доступным
          способом связи,
          <u class="text-warning font-weight-bold"
            >уведомить нас о пристроистве животного</u
          >, а также если животное вернули куратору.
        </li>
        <li>
          Сообщить контактные данные новых хозяев и источник, откуда они узнали
          о животном.
        </li>
        <li>
          Присылать информацию от пристроенного животного (текст и фотографии).
        </li>
      </ul>
      <h2 id="фото">Требования к фотографиям</h2>
      <ul>
        <li>
          Необходимо предоставить ссылку на
          <u class="text-warning font-weight-bold">профессиональные</u> фото
          животного (не менее 15 кадров для собак и не менее 8 кадров для
          кошек), загруженные на облачное хранилище или файлообменник.
        </li>
        <li>
          Фотографии должны быть четкими, с хорошим освещением, в разных
          ракурсах (сидя, стоя, портрет, в движении и т.д.).
        </li>
        <li>
          Размер фотографий –
          <u class="text-warning font-weight-bold"
            >не менее 1000 пикселей по короткой стороне</u
          >.
        </li>
      </ul>
      <p class="text-danger font-weight-bold">Нe принимаются фото:</p>
      <ul>
        <li>
          с любого вида одеждой на животном (за исключением случаев, когда это
          необходимо по показанию ветеринарного врача);
        </li>
        <li>
          за решетками, на фоне заборов, вольеров, в потрепанной амуниции;
        </li>
        <li>на ярких, кислотных или грязных фонах;</li>
        <li>коллажи;</li>
        <li>сделанные на телефон и/или со вспышкой.</li>
      </ul>
      <p>
        Удачные примеры хороших фотосессий:
        <a href="#" class="text-warning attention">пример 1</a>,
        <a href="#" class="text-warning attention">пример 2</a>,
        <a href="#" class="text-warning attention">пример 3</a>,
        <a href="#" class="text-warning attention">пример для котиков</a>.
      </p>
      <h2 id="профиль">Данные о животном</h2>
      <p>
        Куратор должен заранее, по аналогии с уже размещенными на сайте
        профилями, подготовить анкетные данные животного, а также
        текст-описание, в котором будет подробно и четко описан характер и
        особенности поведения курируемого животного и его отличительные черты.
        Старайтесь избегать общих, размытых формулировок и характеристик, не
        описывайте историю животного (как он попал в приют или как его подобрали
        на улице), не пишите ваших домыслов о прошлом и/или будущем животного.
        Постарайтесь объективно и беспристрастно описать уникальность каждого
        конкретного животного. Объем текста для собак должен быть не менее 120
        слов (1000 знаков), для кошек – 60 слов (500 знаков).
      </p>
      <p>
        Заранее подумайте, куда отдается животное: в квартиру и/или частный дом,
        отдается ли животное в вольер/кошкариум или в другой город.
      </p>
      <h2>Размещение объявления</h2>
      <p>
        После заполнения заявки, на указанную вами электронную почту Вы получите
        автоматическое письмо. Ваша заявка будет проверена и в течение 10
        рабочих дней Вам будет дан ответ.
      </p>
      <ul>
        <li>
          если вы не получили автоматическое письмо и не нашли его в спаме –
          возможно Вы что-то сделали не так, попробуйте заполнить анкету ещё раз
          или
          <b-link
            :to="{ name: 'feedback' }"
            class="text-warning ml-1 attention"
          >
            свяжитесь с нами</b-link
          >;
        </li>
        <li>
          мы можем попросить дополнительные данные – пожалуйста, не затягивайте
          с ответом;
        </li>
        <li>
          Вам может быть отказано в размещении без объяснения причин.
        </li>
      </ul>
      <hr class="border-custom-white-top mt-5 mb-5" />
      <p>
        Если вы согласны с
        <a href="#условия" class="text-warning attention"
          >условиями размещения</a
        >
        объявлений и
        <a href="#обязанности" class="text-warning attention">обязанностями</a>
        куратора, готовы предоставить
        <a href="#фото" class="text-warning attention">подходящие фотографии</a>
        и все необходимые
        <a href="#профиль" class="text-warning attention">данные о животном</a>,
        то заполните анкету на размещение животного:
      </p>
      <ul>
        <li>
          <a
            href="https://forms.yandex.ru/u/5e6d380ca8d67d05844103c0/"
            class="text-warning attention"
            >анкета для собаки</a
          >
        </li>
        <li>
          <a
            href="https://forms.yandex.ru/u/5e6d381ea8d67d05844103c5/"
            class="text-warning attention"
            >анкета для кошки</a
          >
        </li>
      </ul>
      <p>
        Заполнив заявку,
        <u class="text-warning font-weight-bold">проверьте данные</u>! После
        отправки изменить заявку
        <u class="text-warning font-weight-bold">невозможно</u>!
      </p>
      <p class="line-height-normal">
        <small
          >* Присылая заявку на размещение, вы соглашаетесь с тем, что ------
          оставляет за собой право модерировать и использовать присланные
          текстовые и графические материалы по собственному усмотрению, включая
          использование в рекламных целях. ------ не несет ответственности за
          копирование и распространение опубликованных материалов третьими
          лицами.</small
        >
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Publication"
};
</script>
