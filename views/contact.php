<div class="white contactform">
  <span class="center textborder"><h1>Contact Me:</h1></span>

  <form action="mail.php" method="POST" class="form-horizontal">
    <div class="form-group">
      <label class="control-label col-sm-2 textborder" for="email">Name:</label>
      <div class="col-sm-10">
            <input type="text" name="name" class="form-control forminput" required autofocus>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2 textborder" for="email">Email:</label>
      <div class="col-sm-10">
            <input type="email" name="email" class="form-control forminput" required>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2 textborder" for="email">Message:</label>
      <div class="col-sm-10"><textarea name="message" rows="6" cols="25" class="form-control forminput" required></textarea><br /></div>
    </div>
    <div class="center">
        <span class="black>"><input type="submit" value="Send" class="inputbutton"><input type="reset" value="Clear" class="inputbutton"></span>
    </div>

  </form>
</div>
