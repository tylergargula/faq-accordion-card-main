// $("button").on("click", function() {
//   $(this).css({"border-bottom-width": "0", "font-weight": "700"});
// });





// const accordionBars = document.getElementsByTagName("button");
//
// for (let accordionBars of accordionBars) {
//
//   accordionBar.onclick = e => {
//     var thisEl = e.target;
//     if(thisEl.classList.contains("click-button")) {
//       thisEl.classList.remove("click-button");
//     } else {
//       thisEl.classList.add("click-button");
//       for (activeAccordionBars of accordionBars) {
//         if (activeAccordionBars != thisEl) {
//           activeAccordionBars.classList.remove("click-button");
//         }
//       }
//     }
//   }
// }

$("button").on("click", function() {
  if ($(this).hasClass("click-button")) {
    $(this).removeClass("click-button");
  } else {
    $(this).css("border-bottom-width", "0").addClass("click-button");
  }

});
