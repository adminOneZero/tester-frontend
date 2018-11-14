$(document).ready(function () {


/**************************************Global**************************************/

/*************************##responsive##*************************/
    // controle showing side bar to be responsive
    $("[name='off_on']").on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#width_nav').toggleClass('profile_nav_100');
        // $('.profile_nav').toggleClass('profile_nav_100');
    });

    // hide side bar on tablate and mobiles by defol
    $(window).width(function(){
       if ($(window).width() <= 991 ) {
         $('#sidebar').addClass('active');
       }
       if ($(window).width() >= 991 ) {
         $('#sidebar').removeClass('active');
       }
// ckech during resizing window
// $(window).resize(function(){if ($(window).width() <= 991) {$('#sidebar').addClass('active');}if ($(window).width() >= 991) {$('#sidebar').removeClass('active');}});

  });


/*************************##Functions##*************************/

function flash(MSG){
  return alert(MSG);
}

var get_random = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};



  // control numbers fo answers
  var checkbox_num = 1;
  var radio_num = 1;

  function limit(forHwo){

    // debugger;
    if (forHwo == 'checkbox_num') {
      if (checkbox_num == 4) {
        checkbox_num = 1
        return false;

      }
      checkbox_num++;
      return checkbox_num;
    }


    if (forHwo == 'radio_num') {
      if (radio_num == 4) {
        radio_num = 1;
        return false;

      }
      radio_num++
    }


  }

// generate numbers
var Q_num = 0;
function generate_num(){
  return Q_num++;
}




/*************************##Actions##*************************/

// track all clicks on page
  $(document).click(function(e) {

      var target = $(e.target);
      // get close btn
      if (target.attr('class') == 'closeColor') {
        var id = target.parent().parent().attr('id');
        $('#'+id).remove();
        $('#inputs_Q').find('div').remove();

      }
  })





/**************************************Questions Typs**************************************/
/*radio*/
  $('#question_get_type').on('click',function(){
    // get last question
    var last = $('#overView').find('div')[$('#overView').find('div').length -1];

      // check if in page Overview exam has question without answer
      if (typeof(last) == 'object') {
        // check if question hask answer option
        if ($(last).find('.bypass').length == 0) {
          flash("remove last question or add answers fields to last question");
          // just make error to stop executing
          throw new Error('just stop executing');
        }
    }


    var type = $('#question_type').val();
    if (type == 'Circle') {
      var html = `
      <div class="col mb-3 mt-2">

      <div id="add_question_radio" class="">
      <div class="workspace_text">Insert question to exam:</div>
      <div  class="col mb-2 text-center">
      <button id="add_question_radio_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add</button>
      <input id="add_question_val" type="text" name="" value="" placeholder="Enter question">
      </div>
      </div>

      <div id="add_answers_radio" class="hidden">
      <div class="workspace_text">Insert Radios options to exam:</div>
      <div  class="col mb-2  text-center">
      <button id="add_answers_radio_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add <span class="badge badge-light note"> 0</span></button>
      <input id="add_answers_val" type="text" name="" value="" placeholder="Enter radio Options">
      </div>
      </div>

      `;
      // reset ansers numbers
      radio_num = 1;
      // add question to workspace
      $('#inputs_Q').html(html);// });
    }




/*Big box*/
    if (type == 'Big Box') {

      var html = `
          <div id="Bigbox_id" class="col mb-3 mt-2">
              <div class="workspace_text">Insert question to exam:</div>
              <div class="col mb-2 text-center">
                    <button id="add_question_box_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add</button>
                    <input id="add_question_box_val" type="text" name="" value="" placeholder="Enter question">
              </div>
          </div>

      `;
      // add question to workspace
      $('#inputs_Q').html(html);// });

    }


/*Check box*/
    if (type == 'multi choices') {

      var html = `
    <div id="checkbox_inputs" class="col mb-3 mt-2">

    <div id="add_question_checkbox">
        <div class="workspace_text">Insert question to exam :</div>
        <div class="col mb-2 text-center">
                <button id="add_question_checkbox_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add</button>
                <input id="add_question_checkbox_val" type="text" name="" value="" placeholder="Enter question">
            </div>
        </div>
    </div>

        <div id="add_answers_checkbox" class="hidden">
            <div class="workspace_text">Insert Answers to Question :</div>
            <div class="col mb-2 text-center">
                  <button id="add_answers_checkbox_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add  <span class="badge badge-light note">0</span> </button>
                  <input id="add_answers_checkbox_val" type="text" name="" value="" placeholder="Enter question">
            </div>
        </div>

    </div>

      `;
      // reset ansers numbers
      checkbox_num = 1;
      // add question to workspace
      $('#inputs_Q').html(html);// });

    }

// One Line question
    if (type == 'One line') {

      var html = `
          <div id="oneLine_id" class="col mb-3 mt-2">
              <div class="workspace_text">Insert question to exam:</div>
              <div class="col mb-2 text-center">
                    <button id="add_question_onLine_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add</button>
                    <input id="add_question_oneLine_val" type="text" name="" value="" placeholder="Enter question">
              </div>
          </div>

      `;

      // add question to workspace
      $('#inputs_Q').html(html);

    }

  });


/*******************************Exam Generator in Over View******************************/

/**************************************Radio**************************************/
// radio
  // create Radio question
  $(document).on('click','#add_question_radio_btn',function(){
    if ($('#add_question_val').val() != '' & ($('#add_question_val').val()).length > 5) {
      var question = $('#add_question_val').val();
      var Q_id = get_random();
      var html1 = `

      <div id="`+Q_id+`" class="mt-3">
      <input type="hidden" name="the_type" value="radio">
      <button type="button" class="close"  aria-label="Close">
          <span aria-hidden="true" class="closeColor">&times;</span>
      </button>

      <h3 class="text-center">`+question+`</h3>
      <input type="hidden" name="Q__`+Q_id+`__`+generate_num()+`" value="`+question+`">
      </div>

      `;
      $('#overView').append(html1);
      $('#add_question_radio').remove();
      // $('#add_question_val').remove();
      // display answers answers
      $('#add_answers_radio').toggleClass('hidden')
    }else{
      flash('The length of question is very short');
    }


  });

  // create Radio answers
  $(document).on('click','#add_answers_radio_btn',function(){

    if ($('#add_answers_val').val() != '') {
      var answers = $('#add_answers_val').val();
      var id = $('#overView').find('div')[$('#overView').find('div').length -1];

      var hr = '<hr>';
      var html1 = `
      <spaan class="radios"><input type="radio" name="A__`+$(id).attr('id')+`" value="`+(answers)+`">`+(answers)+`</spaan>
      <input class="bypass" type="hidden" name="" value="">

      `;

      $(id).append(hr+html1);
      $('.note').html(radio_num);
      if (limit('radio_num') == false) {
          $('#add_answers_radio').remove();
      }
      }else{
        // MSG
      flash('The length of answer is very short');
    }

});

/**************************************Radio**************************************/

/**************************************Big Box**************************************/

// Big Box
  // create Big Box (textarea) to user
  $(document).on('click','#add_question_box_btn',function(){
    if ($('#add_question_box_val').val() != '' & ($('#add_question_box_val').val()).length > 5) {
      var question = $('#add_question_box_val').val();
      var Q_id = get_random();
      var html = `
      <div id="`+Q_id+`" class="mt-3">
          <button type="button" class="close"  aria-label="Close">
              <span aria-hidden="true" class="closeColor">&times;</span>
          </button>

          <h3 class="text-left">`+question+`</h3>
            <span class="bigBox"><textarea placeholder="" name="name" rows="4" cols="80"></textarea></span>
          <input type="hidden" name="the_type__`+Q_id+`" value="BigBox">
          <input class="bypass" type="hidden" name="" value="">
      </div>
      `;

      $('#overView').append(html);
      $('#Bigbox_id').remove();
      // $('#add_question_box_val').remove();
    }else{
      flash('The length of question or options is very short');
    }


  });
/**************************************Big Box**************************************/


/**************************************Check Box**************************************/

// Check Box
    // create Check Box question
    $(document).on('click','#add_question_checkbox_btn',function(){
      if ($('#add_question_checkbox_val').val() != '' & ($('#add_question_checkbox_val').val()).length > 5) {
        var question = $('#add_question_checkbox_val').val();
        var Q_id = get_random();
        var html1 = `

        <div id="`+Q_id+`" class="mt-3">

        <input type="hidden" name="the_type" value="checkbox">

            <button type="button" class="close"  aria-label="Close">
                <span aria-hidden="true" class="closeColor">&times;</span>
            </button>

        <h3 class="text-center">`+question+`</h3>
        <input type="hidden" name="Q__`+Q_id+`__`+generate_num()+`" value="`+question+`">
        </div>

        `;
        $('#overView').append(html1);
        $('#add_question_checkbox').remove();
        // display answers input
        $('#add_answers_checkbox').toggleClass('hidden')
      }else{
        flash('The length of question is very short');
      }


    });

    // create checkbox answers
    $(document).on('click','#add_answers_checkbox_btn',function(){

      if ($('#add_answers_checkbox_val').val() != '') {
        var answers = $('#add_answers_checkbox_val').val();
        var id = $('#overView').find('div')[$('#overView').find('div').length -1];

        var hr = '<hr>';
        var html = `

        <div id="" class="checkbox">
          <span><input type="checkbox" name="A__`+$(id).attr('id')+`__`+generate_num()+`" value="">  `+(answers)+`  </span><br>
          <input type="hidden" name="" value="`+(answers)+`">
          <input class="bypass" type="hidden" name="" value="">
        </div>
        `;

        $(id).append(hr+html);
        $('.note').html(checkbox_num);
        if (limit('checkbox_num') == false) {

            $('#add_answers_checkbox').remove();
        }
        }else{
          // MSG
        flash('The length of answer is very short');
      }

  });


  /**************************************One Line**************************************/

  // One Line
    // create One Line (text input) into workspace
    $(document).on('click','#add_question_onLine_btn',function(){
      if ($('#add_question_oneLine_val').val() != '' & ($('#add_question_oneLine_val').val()).length > 5) {
        var question = $('#add_question_oneLine_val').val();
        var Q_id = get_random();
        var html = `
        <div id="`+Q_id+`" class="mt-3">
            <button type="button" class="close"  aria-label="Close">
                <span aria-hidden="true" class="closeColor">&times;</span>
            </button>

            <h3 class="text-left">`+question+`</h3>
              <span class="oneline"><input type="text" name="" value=""></span>
            <input type="hidden" name="the_type__`+Q_id+`" value="OneLine">
            <input class="bypass" type="hidden" name="" value="">
        </div>
        `;

        $('#overView').append(html);
        $('#oneLine_id').remove();
      }else{
        flash('The length of question or options is very short');
      }


    });
  /**************************************One Line**************************************/




});
// ready end
