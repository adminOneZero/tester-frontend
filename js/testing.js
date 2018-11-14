$(document).ready(function () {

//   $('.nav_links').on('click',function(e){
//   console.log(this.hash);
//   $('html, body').animate({ scrollTop: $(this.hash).height() }, 800);
// window.location.hash = hash;
//   });


  // $('.nav_links').on('click',function(e){
  //   $('html, body').animate({
  //     scrollTop: 0 }, 800, function() {
  //     //  window.location.hash = hash;
  //   });
  //
  //
  // })

// $(function() { $('.nav_links').on('click', function(){
//
// $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
//
//   });
// });

//   console.log(this.hash);
//   $('html, body').animate({ scrollTop: $(this.hash).height() }, 800);
// window.location.hash = hash;
  });






// // side bar hiding
// // start
// var element;
// $(document).ready(function () {
//     // controle showing side bar
//     $("[name='off_on']").on('click', function () {
//         $('#sidebar').toggleClass('active');
//         $('#width_nav').toggleClass('profile_nav_100');
//         // $('.profile_nav').toggleClass('profile_nav_100');
//     });
//
//     // hide side bar on tablate and mobiles by defol
//     $(window).width(function(){
//        if ($(window).width() <= 991 ) {
//          $('#sidebar').addClass('active');
//        }
//        if ($(window).width() >= 991 ) {
//          $('#sidebar').removeClass('active');
//        }
// // ckech during resizing window
// $(window).resize(function(){if ($(window).width() <= 991) {$('#sidebar').addClass('active');}if ($(window).width() >= 991) {$('#sidebar').removeClass('active');}});
//
//   });
//
//
//
//
//   // control numbers fo answers
//   var number_of_answers = 1;
//   function notify(){
//     if (number_of_answers == 4) {
//       number_of_answers =1;
//       console.log(number_of_answers);
//       return false;
//     }
//     number_of_answers++;
//     console.log(number_of_answers);
//     return number_of_answers;
//   }
//
//
//
//
//   $('#question_get_type').on('click',function(){
//     var type = $('#question_type').val();
//     if (type == 'Radio') {
//       var html = `
//       <div class="col mb-3 mt-2">
//           <div id="add_question" class="col mb-2">
//               <button id="add_question_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add</button>
//               <input id="add_question_val" type="text" name="" value="" placeholder="Enter question">
//           </div>
//
//           <div id="add_answers" class="col mb-2">
//               <button id="add_answers_btn" class="btn btn-success" type="button" name="save"> <span class="fa fa-floppy-o"></span> Add</button>
//               <input id="add_answers_val" type="text" name="" value="" placeholder="Enter radio Options">
//           </div>
//       `;
//       // console.log(html);
//       $('#inputs_Q').html(html);
//
//     }
//
//   });
//
//   // create Radio question
//   $('#add_question_btn').on('click',function(){
//     var question = $('#add_question_val').val();
//     var html1 = `<h3 class="text-center">`+question+`</h3>`;
//     $('#overView').append(html1);
//     $('#add_question_btn').remove();
//     $('#add_question_val').remove();
//
//   });
//
//   // `<input type="radio" value="1">`
//
//
//   $('element').on('click',function(){
//     // console.log('yes');
//     var answers = $('#add_answers_val').val();
//     var hr = '<hr>'
//     var html1 = `<span class="radios"><input type="radio" value="1">`+answers+` </span><br>`;
//     $('#overView').append(hr+html1);
//     if (notify() == false) {
//       $('#add_answers_btn').remove();
//       $('#add_answers_val').remove();
//     }
//
//   }
//
// // end
//
//
//
//
//
//
//
//
// });
// // end
//
//
//
// // $(document).ready(function (){
// //
// // });
//
//
//
$(document).ready(function (){

  $('#question_get_type').on('click',function(){
    var type = $('#question_type').val();
    if (type == 'Radio') {
      var html = `<p id="myP">some text</p>
<button id="clicks" class="btn btn-primary" type="button" name="type"> <span class="fa fa-plus"></span> clicks</button>
      `;
      // console.log(html);
      $('#inputs_Q').append(html);
    }
  });

  $('#myP').on('click','#myP',function(){
    // console.log(html);
    $('#myP').html('maxmos')

  })

});
