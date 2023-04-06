
$(document).ready(function() {
     var quizBox = $("#quiz-box");
     var questions =
                    [    "Q1. Which year NU was founded?", 
                         "Q2. What is the capital city of Kazakhstan?", 
                         "Q3. What is my name?", 
                         "Q4. Where is NU located?",
                         "Q5. Who is my favorite singer?",
                         "Q6. My favorite song these days?",
                         "Q7. My favorite actor/actress?",
                         "Q8. NOT my favorite food?",
                    ];
     var choice_options = 
                    [    ["2009", "2010", "2011", "2012"],
                         ["Bishkek", "Paris", "Manila", "Astana"],
                         ["Adiya", "Aliya", "Aloe", "Ivy"],
                         ["Almaty", "Shymkent", "Astana", "Los Angeles"],
                         ["Frank Ocean", "Bazzi", "Celine Dion", "Chet Baker"],
                         ["CAG - K.", "Frank Ocean - Ivy", "SZA - Gone Girl", "NCT - Ay-Yo"],
                         ["Meryl Streep", "Han So Hee", "Robert Pattinson", "Tom Holland"],
                         ["Jellies", "Greek yoghurt", "Buckwheat", "Pears"],

                    ];
     var correct =
                    [    "2009", 
                         "Astana", 
                         "Aliya",
                         "Astana",
                         "Frank Ocean",
                         "NCT - Ay-Yo",
                         "Han So Hee",
                         "Pears"
                    ];
   
     for (var i = 0; i < questions.length; i++) {
       quizBox.append("<div class='question'></div>");
       $('.question').last().append("<p class='d'>"+questions[i]+"</p>");
   
       for (var j = 0; j < choice_options[i].length; j++) {
         var label = $("<label></label>");
         var radio = $("<input type='radio' name='q"+(i+1)+"' value='"+choice_options[i][j]+"'>"+choice_options[i][j]+"</input>");
         label.append(radio);
         $('.question').last().append(label);
       }
     }
   
     var countCorrect = 0;
     var reset = false;
   
     $("button").click(function(event) {
       $("input[type=radio]:checked").each(function(index) {
         var choice = $(this).parent().text();
         if ($(this).val() == correct[index]) {
           countCorrect++;
         }
       });
       $("#quiz-box").append("<h2>Result of the quiz is: "+countCorrect+"</h2>");
     });
   });

   












  