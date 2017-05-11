<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "dylangq95@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

include("inc/header.php"); ?>

    <main>
      <div id="main">
        <div class="center">
          <br>
          <br>
          <h1>Thank you for contacting me!</h1>

        </div>
      </div>
    </main>

<?php include("inc/footer.php"); ?>
