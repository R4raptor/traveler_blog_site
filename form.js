<!DOCTYPE html>
<html>
  <head>
    <title>Contact Us</title>
    <style>
      /* Body styles */
      body {
        background-color: #f7f7f7;
        font-family: 'Open Sans', sans-serif;
      }

      /* Header styles */
      h1 {
        text-align: center;
        color: #333;
        text-shadow: 1px 1px #fff;
        margin-top: 50px;
      }

      /* Form styles */
      form {
        background-color: #fff;
        padding: 30px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        max-width: 500px;
        margin: 0 auto;
        border-radius: 10px;
        background-image: url('https://www.transparenttextures.com/patterns/giftly.png');
      }

      label {
        display: block;
        margin-bottom: 10px;
        color: #333;
      }

      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 4px;
        resize: none;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        transition: border-color 0.3s ease-in-out;
      }

      input[type="text"]:hover,
      input[type="email"]:hover,
      textarea:hover {
        border-color: #555;
      }

      input[type="text"]:focus,
      input[type="email"]:focus,
      textarea:focus {
        border-color: #333;
        outline: none;
      }

      input[type="text"]::placeholder,
      input[type="email"]::placeholder,
      textarea::placeholder {
        color: #999;
      }

      input[type="submit"] {
        background-color: #37B34A;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        margin-top: 20px;
        transition: background-color 0.3s ease-in-out;
      }

      input[type="submit"]:hover {
        background-color: #228B22;
      }

      /* Responsive styles */
      @media screen and (max-width: 600px) {
        form {
          padding: 20px;
        }

        input[type="submit"] {
          font-size: 14px;
        }
      }
    </style>
  </head>
  <body>
    <h1>Contact Us</h1>
    <form action="submit-form.php" method="POST">
      <label for="name">Name:</label>
