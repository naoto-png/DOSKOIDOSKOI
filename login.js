$('.target').click(function() {
    const email = document.getElementById('email');
    // POST先
    var url = "https://manji.dosukoi.tk/account.php";
  
    // パラメータを付与する場合
    var inputs = email.value;
    var params = [["id", this.id]];
    for(var i = 0, n = params.length; i < n; i++) {
      inputs += '<input type="hidden" name="' + params[i][0] + '" value="' + params[i][1] + '" />';
    }
  
    // POST遷移
    $("body").append('<form action="'+url+'" method="post" id="post">'+inputs+'</form>');
    $("#post").submit();
  
  });