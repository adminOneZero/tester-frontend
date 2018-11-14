function flash(msg) {
alert(msg);
}


function maxmos() {
  var save = $("#ExPass").val().length;
  var Qnum = $('#overView').find('div').length;

  if (save < 6) {
    console.log(save);
    flash("password is so short")
    return false;
  }

  if (Qnum < 5) {
    flash("The questions must be more than 4 to save Exam")
    return false;
}


var Percentage_edit = $('#editcor').val()
console.log(Percentage_edit);
if (Percentage_edit > 100 || Percentage_edit < 0) {
  flash("number from 0 to 100");
  return false;

}

  return true;
}


function cor() {

var Percentage_edit = $('#editcor').val()
console.log(Percentage_edit);
if (Percentage_edit > 100 || Percentage_edit < 0) {
  flash("number from 0 to 100");
  return false;

}

  return true;
}
