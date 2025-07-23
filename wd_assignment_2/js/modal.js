function finderror() {
    var error = "";
    var result = true;

    var amount = document.getElementById("amount").value;
    var deliaddress = document.getElementById("deliaddress").value;
    var billaddress = document.getElementById("billaddress").value;
    var postcode = document.getElementById("postc").value;
    var phonenum = document.getElementById("num").value;
    var mail = document.getElementById("mail").value;
    var lastname = document.getElementById("lastname").value; 
    var firstname = document.getElementById("firstname").value; 
    
    var flavour = document.getElementById("optiontoorder").value;
    var pickup = document.getElementById("pickup").checked;
    var delivery = document.getElementById("delivery").checked;
   
    
    if (lastname ==""){
      error+="Enter your Last name\n"
    }
    if (firstname ==""){
      error+="Enter your First name\n"
    }
    if (amount ==""){
      error+="Please choose your amount\n"
    }
    if (deliaddress ==""){
      error+="Enter delivery address\n"
    }
    if (billaddress == "") {
      error += "Enter the billing address\n";
    }
    if (postcode == "") {
      error += "Enter the postcode\n";
    }
    if (phonenum == "") {
      error += "Enter your phone number\n";
    }
    if (mail == "") {
      error += "Enter your email\n";
    }

    if ((pickup== "") && (delivery== "")) {
      error += "Enter pickup method\n";
    }

    if (flavour == "") {
      error += "Choose a flavour\n";
    }

    if (error !== "") {
      alert(error);
      result=false;
    }
     else {
      alert("Your order is placed. Thank you!");
    }
    return result;
  }
  
  //show delivery address
  function showdeliaddress() {
    var deliaddress = document.getElementById("cal");
    var delivery = document.getElementById('delivery');
    var pickup = document.getElementById("pickup");
  
    delivery.addEventListener('change', function() {
      if (this.checked) {
        deliaddress.style.display = 'block';
      } else {
        deliaddress.style.display = 'none';
      }
    });
    pickup.addEventListener('change', function() {
      if (this.checked) {
        deliaddress.style.display = 'none';
      } 
    });
  }

  function sameDeliveryCheckBoxClicked(event) {
    var checkBox = document.getElementById("check");
    if (checkBox.checked) {
      document.getElementById("billaddress").value = document.getElementById("deliaddress").value;
      if (document.getElementById("deliaddress").value == "") {
        alert("You need to put in the delivery address first")
      }
    }
  }
  //show card information
  function showCardinformation() {
    var cardinformation = document.getElementById("cardinf");
    var PayOnline = document.getElementById("PayOnline");
    var PayOnPick = document.getElementById("PayOnPick")
    PayOnline.addEventListener('change', function() {
      if (this.checked) {
        cardinformation.style.display = 'block';
      } else {
        cardinformation.style.display = 'none';
      }
    });
    PayOnPick.addEventListener('change', function() {
      if (this.checked) {
        cardinformation.style.display = 'none';
      }
    });
  }
  function maxCardNumber() {
    const cardNumber = document.getElementById('cardnumber');
    const cardTypeRadios = document.querySelectorAll('input[name="cardtype"]');
    
    cardTypeRadios.forEach(function(radio) {
      radio.addEventListener('change', function() {
        if (this.value === 'visa' || this.value === 'mastercard') {
          cardNumber.maxLength = 16;
        } else if (this.value === 'american express') {
          cardNumber.maxLength = 15;
        } else {
          cardNumber.maxLength = 0;
        }
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    maxCardNumber();
  });
  
  
  function init() {
    var orderform = document.getElementById("order");
    orderform.onsubmit = finderror;
  
    var check = document.getElementById("check");
    check.onclick = sameDeliveryCheckBoxClicked;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    showdeliaddress();
    showCardinformation();
    init();
    maxCardNumber();
  });
  