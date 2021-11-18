function loadNavBar() {
  console.log(localStorage.getItem("role"));
  switch (localStorage.getItem("role")) {
    case "admin":
      $("#main-sidebar").load("../components/main-layout/sidebar-admin.html");
      break;
    case "teacher":
      $("#main-sidebar").load("../components/main-layout/sidebar-teacher.html");
      break;
    default:
      $("#main-sidebar").load("../components/main-layout/sidebar-student.html");
  }
  
  /*$(".card").css("background-color", "#96dacd");
    $("body").css("background-color", "#96dacd");
    $("*").css("color", "#212529");
    $("hr").css("color", "black");
    $(".card").css("background-color", "#96dacd");
    $("input").css("background-color", "#ffffff");
    $(".chiller-theme .sidebar-wrapper .sidebar-menu ul li a i").css("background-color", "#ffffff");
*/
}
