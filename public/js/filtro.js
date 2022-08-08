console.log("llegue al filtro")

$(document).ready(function () {
  $("#gfg").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#geeks div").filter(function () {
      $(this).toggle($(this).text()
        .toLowerCase().indexOf(value) > -1)
    });
  });
});