function loadNavBar() {
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
}
