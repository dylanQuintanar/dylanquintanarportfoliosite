<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Dylan Quintanar</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-98947286-1', 'auto');
      ga('send', 'pageview');

    </script>
  </head>

  <body>
    <div id="wrapper">
    <header>
      <nav>
        <div class="row navbar-fixed-top">
              <div class="col-xs-3">
                <button onclick="loadMain('home', '#abbfd1')"><a href="./home"><span class="link home">Home</span></a></button>
              </div>
              <div class="col-xs-3">
                <button onclick="loadMain('resume', '#e5e5c9')"><a href="./resume"><span class="link resume">Resume</span></a></button>
              </div>
              <div class="col-xs-3">
                <button onclick="loadMain('projects', '#c4fca4')"><a href="./projects"><span class="link projects">Projects</span></a></button>
              </div>
              <div class="col-xs-3">
                <button onclick="loadMain('contact', '#eaeced')"><a href="./contact"><span class="link contact">Contact Me</span></a></button>
              </div>
        </div>
      </nav>
    </header>
    <div class="divider"></div>
