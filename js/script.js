const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.addEventListener("click", function() {
    navIcon.classList.toggle("nav-icon--active");
    nav.classList.toggle("header__top-row--mobile");
    document.body.classList.toggle("no-scroll");
});

// Yandex API

ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.943543, 30.338928],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
        });

        var myPlacemark = new ymaps.Placemark([59.943543, 30.338928], {}, {
            preset: 'islands#redIcon'
        });

        // map.controls.remove("geolocationControl");
        myMap.controls.remove("searchControl");
        myMap.controls.remove("trafficControl");
        myMap.controls.remove("typeSelectior");
        myMap.controls.remove("rulerControl");
        myMap.controls.remove("scrollZoom");

        myMap.geoObjects.add(myPlacemark);
    }