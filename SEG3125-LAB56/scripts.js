

function addMaryDate(){
    $("#date").empty();
    $("#date").append('<input type="text" id="datepicker" placeholder="           click on icon --->"></input>'+'<script>$( function(){$( "#datepicker" ).datepicker({showOn: "button",buttonImage: "https://img.icons8.com/ios/40/000000/calendar--v1.png",buttonImageOnly: true,buttonText: "Select date",beforeShowDay: function(date) {var day = date.getDay(); return [(day != 6 && day != 0)]; }})} );</script>'
    )
}

function addJackDate(){
    $("#date").empty();
    $("#date").append('<input type="text" id="datepicker" placeholder="           click on icon --->"></input>'+'<script>$( function(){$( "#datepicker" ).datepicker({showOn: "button",buttonImage: "https://img.icons8.com/ios/40/000000/calendar--v1.png",buttonImageOnly: true,buttonText: "Select date",beforeShowDay: function(date) {var day = date.getDay(); return [(day != 1 && day != 0)]; }})} );</script>'
    )
}


function addGeorgeDate(){
    $("#date").empty();
    $("#date").append('<input type="text" id="datepicker" placeholder="           click on icon --->"></input>'+'<script>$( function(){$( "#datepicker" ).datepicker({showOn: "button",buttonImage: "https://img.icons8.com/ios/40/000000/calendar--v1.png",buttonImageOnly: true,buttonText: "Select date",beforeShowDay: function(date) {var day = date.getDay(); return [(day != 6 && day != 5)]; }})} );</script>'
    )
}


  function addAlert(message) {
    $("#alerts").append(
        '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
        '<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>'+ message
        + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
        
        );
}


function addAlert1(message) {
    $('#alerts1').append(
        '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
        '<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>'+ message
        + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
        
        );
}




function click(){

    $('#alerts1').append('<div id="fail" title="Booking Failed">You did not fill in all the required information properly</div>' + '<script>$( function() {$( "#fail" ).dialog();} );</script>'
    )
}

function sub(){
    $('#alerts1').append('<div id="fail" title="Booking Sucessful">Please check in with our receptionist at the front 5 minutes before your scheduled appointment</div>' + '<script>$( function() {$( "#fail" ).dialog();} );</script>'
    )
}

function onBlank() {
  addAlert("Please enter the name on the credit card");
}

function onF() {
    addAlert1("Please enter a first name");
  }

function onL() {
    addAlert1("Please enter a last name");
  }

function onCC() {
    addAlert("Please enter a proper credit card number. You may not leave this section blank.");
  }

function onCVC() {
    addAlert("Please enter a proper CVC number. You may not leave this section blank.");
  }

function onExpiryDate() {
    addAlert("Please enter the expiry date");
  }

function onPhone() {
    addAlert1("Please enter a proper phone number");
  }

function onEmail() {
    addAlert1("Please enter a proper email address");
  }



$(document).ready(function(){

    $("#cardName").tooltip({

    });

    $("#cardNum").tooltip({
    });


    $("#CVC").tooltip({

    });

    $("#datepickerCC").tooltip({

    });

    $("#staff").tooltip({

    });


    $('#num-form').mask('(000) 000-0000');

    $('#datepickerCC').mask('00/00');

    $('#cardNum').mask('0000 0000 0000 0000');
    
    $('#CVC').mask('000');
    
    $("#staff").change(function () {
        if ($(this).val() == "1"){
            addMaryDate()
        }
        else if($(this).val() == "2"){
            addJackDate()
        }
        else if($(this).val() == "3"){
            addGeorgeDate()
        }
    })



    
    $("#cardName").blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
            onBlank();

        }
         else{
            $(this).removeClass("error");
        }
    })

    $("#cardNum").blur(function(){
        if(!$(this).val().match(/^(\s*[0-9]+\s*)+$/)){
            $(this).addClass("error");
            onCC();

        } 
        else{
            $(this).removeClass("error");
        }
    })

    $("#CVC").blur(function(){


        if(!$(this).val().match(/^-?\d+$/)){
            $(this).addClass("error");
            onCVC();

        } 
        else{
            $(this).removeClass("error");
        }
    })

    $("#datepickerCC").blur(function(){
         if(!$(this).val().match(/^\d{2}[/]\d{2}$/)){
            $(this).addClass("error");
            onExpiryDate()

        }
         else{
            $(this).removeClass("error");
        }
    })

    
    $("#num-form").blur(function(){
        if(!$(this).val().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
            $(this).addClass("error");
            onPhone();

        } 
        else{
            $(this).removeClass("error");
        }
    })


    $("#email-form").blur(function(){


        if(!$(this).val().match(/^[^\s@]+@[^\s@]+$/)){
            $(this).addClass("error");
            onEmail();

        } 
        else{
            $(this).removeClass("error");
        }
    })

    $("#first-form").blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
            onF();

        }
         else{
            $(this).removeClass("error");
        }
    })

    $("#last-form").blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
            onL();

        }
         else{
            $(this).removeClass("error");
        }
    })

    $("#but").on("click",function(event){

        var flag = false

        if(!$("#cardName").val()){
                onBlank();
                $("#cardName").addClass("error");
                flag = true
    
        }
    
        if(!$("#cardNum").val().match(/^(\s*[0-9]+\s*)+$/)){
            $("#cardNum").addClass("error");
                onCC();    
                flag = true
            } 
    
       
    
        if(!$("#CVC").val().match(/^-?\d+$/)){
                onCVC();
                $("#CVC").addClass("error");
                flag = true
    
        } 

        if(!$("#datepickerCC").val().match(/^\d{2}[/]\d{2}$/)){
                $("#datepickerCC").addClass("error");
                onExpiryDate()
                flag = true
        }
        

    
        if(!$("#num-form").val().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
                onPhone();
                $("#num-form").addClass("error");
                flag = true
    
            }
    
    
    
         if(!$("#email-form").val().match(/^[^\s@]+@[^\s@]+$/)){
                $("#email-form").addClass("error");
                onEmail();
                flag = true
    
            } 

        if(!$("#first-form").val()){
                $("#first-form").addClass("error");
                onF();
                flag = true
            }

            if(!$("#last-form").val()){
                $("#last-form").addClass("error");
                onL();
                flag = true
            }

    if (flag == true){
        click();
    }

    else{
        sub()
    }

    })



})
