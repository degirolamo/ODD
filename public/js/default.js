$(document).ready(function () {
  $('.collapsible').collapsible();
  var elem = document.querySelectorAll('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {
    accordion: false
  });
});

/**
 * Fonction pour sauver le nouveau pourcentage après modification et créer les nouveaux objets
 */

function savePercent() {
  var result = [];
  $(".pourcentage").each(function () {

    var temp = {
      odd: 0,
      mesure: 0,
      pourcentage: 0
    }
    var res = this.id.replace("pourcentage", "").split("_");

    temp.odd = Number(res[1]);
    temp.mesure = Number(res[0]);
    temp.pourcentage = Number(this.value);

    result.push(temp);
  });

  changePercent(result);
}

/**
 * Fonction AJAX pour rafraîchir uniquement les 2 graphiques et non toute la vue
 */

function changePercent(result) {
  let obj = {
    array: result
  };
  $.ajax({
    url: "DB/objectifDB",
    data: obj,
    type: "POST",
    success: function (result) {
      vegaEmbed('#view', '/graphiques/graphMesure.json');
      vegaEmbed('#view1', '/graphiques/graphOdd.json');
    }
  })
}

