var config = {
  
  // 菜谱大全
  query: "https://apis.juhe.cn/cook/query.php",
  category: "https://apis.juhe.cn/cook/category?key=",
  AppKey: "36aeaf585dfb772e6ce2d751182dc6f7",
  index: "https://apis.juhe.cn/cook/index",
  SetTheme: function() {
    if (localStorage.getItem("theme") == null) {
    } else {
      $("body").addClass("theme-dark");
    }

    $(".model-change").on("click", function() {
      if (localStorage.getItem("theme") == "true") {
        $("body").removeClass("theme-dark");
        localStorage.removeItem("theme");
        $.toast("开启白天模式");
      } else {
        $("body").addClass("theme-dark");
        localStorage.setItem("theme", true);
        $.toast("开启黑夜模式");
      }
    });
  }
};
