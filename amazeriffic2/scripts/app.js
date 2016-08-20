var main = function() {
    "use strict";
    $(".tabs a span").toArray().forEach(function (element) {
    // создаем обработку щелчков для этого элемента
    $(element).on("click", function () {
      // поскольку мы используем версию элемента jQuery,
      // нужно создать временную переменную,
      // чтобы избежать постоянного обновления
      var $element = $(element);
      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();
      $("main .content").append("<ul></ul>");
      if ($element.parent().is(":nth-child(1)")) {
          for (var i = toDos.length - 1; i >= 0; i--) {
              $(".content ul").append($("<li>").text(toDos[i]));
          }
      } else if ($element.parent().is(":nth-child(2)")) {
          toDos.forEach( function(todo) {
              $(".content ul").append($("<li>").text(todo));
          });
      } else if ($element.parent().is(":nth-child(3)")) {
          $("main .content").append('<input type="text" name="task" value="" placeholder="Задача">');
          $("main .content").append('<button>+</button>');
          $(".content button").on("click", function() {
              addTask();
          });
          $(".content input").on("keypress", function(event) {
              if (event.keyCode === 13) {
                addTask();
                }
            });
        }
      var addTask = function() {
        var task_text = $(".content input").val(); //Получить значение поля ввода
        if (task_text !== "") {
            toDos.push(task_text);
            $(".content input").val(""); //Очистка поля ввода
        }
    };
      return false;
    });
    });
    $(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);

var toDos = [
       "Закончить писать книгу",
       "Вывести Грейси на прогулку в парк",
       "Ответить на электронные письма",
       "Подготовиться к лекции в понедельник",
       "Обновить несколько новых задач",
       "Купить продукты"
];

var data = [
    {
        "description" : "Купить продукты",
        "tags"  : [ "шопинг", "рутина" ]
    },
    {
        "tags"  : [ "писательство", "работа" ]
    },
    {
        "description" : "Подготовиться к лекции в понедельник",
        "tags"  : [ "работа", "преподавание" ]
    },
    {
        "tags"  : [ "работа" ]
    },
    {
        "description" : "Вывести Грейси на прогулку в парк",
        "tags"  : [ "рутина", "питомцы" ]
    },
    {
        "tags"  : [ "писательство", "работа" ]
    }
];
