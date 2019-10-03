
/*
 *************** RJS library v1.0****************
 * Auther : Ruchira Ruwan Gunarathna
 * Email  : uarruwan(AT)gmail(DOT)com
 * Description: This a light-weight JavaScript library to support following functionalities.
 *              1. Higlight the search text in the current page
 *              2. Display the meaning of the selected word
 *              3. Password strength indicator
 *             
 *              All the functionalities can be integrated easily.
 * License: 
 */
 
 var foundCount = 0;
 
 // RJS : Higlight search word in the current page
 var handleSearchBtnAction = function(){
	var searchText = document.getElementById("rjs-search-text").value;
    foundCount = 0;
	
	// reset the resut section
	document.getElementById("rjs-search-result").innerHTML = '';
	document.body.classList.remove("rjs-highlight");
	if (searchText.length > 0) {
	    var contentTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'];
		for(var i = 0; i < contentTags.length ; i++) {			
			// Will return a NodeList even if there is only one element found
			var contents = document.querySelectorAll(contentTags[i]);
			if (contents.length > 0) {
				for (var j=0; j < contents.length; j++) {
					contents[j].innerHTML = contents[j].innerHTML.replace(new RegExp(searchText, 'g'),function(){ foundCount += 1 ; return "<span class='rjs-highlight'>"+searchText+"</span>";});
				}
			}
		}	
		document.getElementById("rjs-search-result").innerHTML = "(Found: "+foundCount/2+")";
	} else {
		document.getElementById("rjs-search-result").innerHTML = "<span class='rjs-error'>Search text cannot be empty</span>";
	}
	return;
 };
 
 document.getElementById("rjs-search-text").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
		foundCount = 0;
        document.getElementById("rjs-search-btn").click();
		event.preventDefault();
    }
 });
 
 document.getElementById("rjs-search-btn").addEventListener("click", handleSearchBtnAction);