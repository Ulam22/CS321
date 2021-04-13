$('#humor').load("humorList.html", () => {
    alert("The Humor List has popped up");
});

$('#humorExtra').load("humorContentsExtra.html", () => {
    alert("The Humor Contents snippet has popped up");
});


function loadURL() {
     var newContent = "humorContents.html #" + .id;
     
     $('li').on('click', ()=> {
   //alert("It works");         
    $('#links').load(newContent);
    })
};

  