const data = [
    {
        name: "mortal kombat 11",
        header: "NetherRealm завершает поддержку Mortal Kombat 11 и переходит к новому проекту",
        date: function() {
            const myDate = new Date(2021, 0, 12, 17, 45);
            return myDate;
        }
    },
    {
        name: "prince of persia",
        header: "Создатель Prince of Persia стремится вернуть серию к жизни",
        date: function() {
            const myDate = new Date(2021, 2, 9, 8, 31);
            return myDate;
        }
    },
    {
        name: "rise of the tomb raider",
        header: "Эксклюзивность Rise of the Tomb Raider обошлась Microsoft в 100 миллионов долларов",
        date: function() {
            const myDate = new Date(2021, 3, 2, 11, 41);
            return myDate;
        }
    },
    {
        name: "mafia 2",
        header: "Новое обновление для Mafia 2 Definitive Edition обещает улучшенную производительность на PS4",
        date: function() {
            const myDate = new Date(2021, 3, 14, 14, 21);
            return myDate;
        }
    },
    {
        name: "assassin's creed unity",
        header: "Спустя целых 7 лет Assassin's Creed Unity остается визуально впечатляющей игрой для ПК",
        date: function() {
            const myDate = new Date(2021, 4, 15, 19, 27);
            return myDate;
        }
    },
    {
        name: "tomb raider legend",
        header: "Фанат Tomb Raider и один из разработчиков ремейка TR: The Angel of Darkness создал альтернативную обложку TR: Legend",
        date: function() {
            const myDate = new Date(2021, 5, 27, 17, 30);
            return myDate;
        }
    },
    {
        name: "assassin's creed black flag",
        header: "Assassin's Creed 4 Black Flag - Сравнение SWITCH vs. PS4 (Candyland)",
        date: function() {
            const myDate = new Date(2021, 5, 30, 16, 30);
            return myDate;
        }
    },
    {
        name: "forza horizon 4",
        header: "Playground Games готовится к релизу новой части - Forza Horizon 4 больше не будет получать новый контент",
        date: function() {
            const myDate = new Date(2021, 6, 3, 19, 56);
            return myDate;
        }
    },
    {
        name: "nfs heat",
        header: "Российский стритрейсер потрясающе воссоздал гонку из Need for Speed Heat",
        date: function() {
            const myDate = new Date(2021, 6, 19, 13, 6);
            return myDate;
        }
    },
    {
        name: "battlefield 4",
        header: "Раздача дополнений для Battlefield 1 и Battlefield 4 в Origin и PlayStationStore",
        date: function() {
            const myDate = new Date(2021, 7, 8, 9, 49);
            return myDate;
        }
    },
    {
        name: "mafia",
        header: "Mafia Definitive Edition выглядит невероятно реалистично с Beyond All Limits Ray Tracing в новом видео",
        date: function() {
            const myDate = new Date(2021, 7, 27, 15, 42);
            return myDate;
        }
    },
    {
        name: "assassin's creed valhalla",
        header: "Утечка: стала известна точная дата выхода крупнейшего дополнения к Assassin's Creed: Valhalla",
        date: function() {
            const myDate = new Date(2021, 8, 13, 17, 22);
            return myDate;
        }
    },
    {
        name: "corsairs legacy",
        header: "Новый трейлер пиратской RPG в открытом мире Corsairs Legacy",
        date: function() {
            const myDate = new Date(2021, 9, 7, 8, 32);
            return myDate;
        }
    },
    {
        name: "tomb raider anniversary",
        header: "В честь скорого 25-летия Tomb Raider анонсирована новая фигурка Лары Крофт",
        date: function() {
            const myDate = new Date(2021, 10, 21, 10, 39);
            return myDate;
        }
    },
    {
        name: "uncharted 4",
        header: "И где разница?: Графическую составляющую Uncharted: Legacy of Thieves Collection сравнили с оригинальными играми",
        date: function() {
            const myDate = new Date(2021, 11, 11, 16, 14);
            return myDate;
        }
    },
    {
        name: "matrix awakens",
        header: "The Matrix Awakens: An Unreal Engine 5 Experience уже доступна",
        date: function() {
            const myDate = new Date(2021, 11, 15, 21, 44);
            return myDate;
        }
    },
    {
        name: "cod mw",
        header: "Из Call of Duty: Modern Warfare убрали две недавно добавленные карты",
        date: function() {
            const myDate = new Date(2021, 11, 17, 19, 12);
            return myDate;
        }
    },
    {
        name: "forza horizon 5",
        header: "Новый патч для Forza Horizon 5 улучшает стабильность сетевого режима и исправляет разнообразные баги",
        date: function() {
            const myDate = new Date(2021, 11, 18, 18, 15);
            return myDate;
        }
    },
    {
        name: "slippery slope",
        header: "Новый патч для Forza Horizon 5 улучшает стабильность сетевого режима и исправляет разнообразные баги",
        date: function() {
            const myDate = new Date(2021, 11, 19, 20, 19);
            return myDate;
        }
    },
    {getAccuratedDate: function(myDate) {
        const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        const day = days[myDate.getDay()]
        const month = months[myDate.getMonth()]
        const today = new Date();
        const diff = Math.floor(today.getTime() - myDate.getTime());
        const dayRound = 1000 * 60 * 60 * 24;
        const daysCalc = Math.floor(diff/dayRound);
        // return `${myDate.getDate()} - ${myDate.getMonth() + 1} - ${myDate.getFullYear()} at ${myDate.getHours()} : ${myDate.getMinutes()}`
        return `${myDate.getDate()} ${month} ${myDate.getFullYear()} года в ${myDate.getHours()} : ${myDate.getMinutes()}<span>${daysCalc} дней назад</span>`
    }}
]

export default data;


// console.log(data[data.length-1].getAccuratedDate(new Date(2021, 7, 27, 15, 42)));