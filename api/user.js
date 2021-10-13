var url = "http://127.0.0.1/itp4506/Attendance-Online-Server";

async function Login(id, password) {
  await $.ajax({
    type: "post",
    url: url + "/login.php",
    data: {
      id: this.id,
      password: this.password,
    },
    success: function (data, status, xhr) {
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("role", data.role);
      window.location.href =
        "http://127.0.0.1/itp4506/Attendance-Online-Web/home.html";
        $.toast({
            heading: 'Success',
            text: 'Login Success! Wellcom!',
            icon: 'success',
            loader: true,        // Change it to false to disable loader
            loaderBg: '#9EC600'  // To change the background
        })
    },
    error: function (jqXhr, textStatus, errorMessage) {
        $.toast({
            heading: 'Error',
            text: 'Loaders are enabled by default. Use `loader`, `loaderBg` to change the default behavior',
            icon: 'info',
            loader: true,        // Change it to false to disable loader
            loaderBg: '#9EC600'  // To change the background
        })
      return errorMessage;
    },
  });
}
