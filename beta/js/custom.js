$(document).ready(function () {
  // $('body').click(function(e){
  //     if(!$(e.target).closest('.modalParent').length){
  //         var clickedOnMenuItem = $(e.target).closest('.menu_item.clickable');
  //         if(clickedOnMenuItem.length){
  //             var targetModal = clickedOnMenuItem.attr('href').replace('#','');
  //             $('.modalParent.rotateInUpLeft:not([id="'+targetModal+'"])').find('.modalClose').click();
  //             if(targetModal == $('.modalParent.rotateInUpLeft').attr('id')){
  //                 return;
  //             }
  //         }
  //         $('.modalParent.rotateInUpLeft .modalClose').click();
  //     }
  // });
  // $("#works").animatedModal({
  //     animatedIn:'rotateInUpLeft',
  //     animatedOut:'rotateOutDownRight'
  // });
  // $("#skills").animatedModal({
  //     animatedIn:'rotateInUpLeft',
  //     animatedOut:'rotateOutDownRight'
  // });
  // $("#contact").animatedModal({
  //     animatedIn:'rotateInUpLeft',
  //     animatedOut:'rotateOutDownRight'
  // });

  let skillsScroll = -1;
  $("#skills").click(() => {
    skillsScroll = 0;
    debug.showSkills();
    $("body").addClass("has-modal");
  });

  $("canvas").click(() => {
    if (skillsScroll == 0) {
      {
        skillsScroll++;
        debug.scrollSkills(1);
      }
    } else if (skillsScroll === 1) {
      debug.showSkills(false);
      $("body").removeClass("has-modal");
    }
  });
});
