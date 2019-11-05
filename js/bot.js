    var bubbleControl = function() {
	
	if(window._botName){
		var name = window._botName;
	}else{
		var name = "Chat with me";
	}
	
    var username = window._botUsername;
    
    var botChatContainer = document.getElementById('chatWindow')


   
        var bubble = document.getElementById('bot'),
            mainCnt = document.getElementById('chatWindow');
       
        if (!document.getElementById('_botChatFrame')) {
            var botChatFrame = document.createElement("iframe");
            botChatFrame.setAttribute("id", "_botChatFrame");
            botChatFrame.setAttribute("src", "https://rebot.me/bubblechat/chat?username=" + username);
            botChatFrame.setAttribute("scrolling", "no");
            botChatFrame.setAttribute("frameborder", "0");
            botChatFrame.style.width = "100%";
            botChatFrame.style.height = "100%";
            botChatFrame.style.overflow = "hidden";
            botChatFrame.style.border = "none";
            botChatFrame.style.backgroundColor = "transparent";
            botChatFrame.style.border = "solid";
            botChatFrame.style.borderRadius = "5px";
            botChatFrame.style.borderColor = "rgba(255, 255, 255, 0)";
            botChatFrame.style.borderWidth = "2px";
            mainCnt.appendChild(botChatFrame);
        }
        mainCnt.style.display = 'block';
    


    function _createElements(_chtml, callback) {
        var cBody = document.getElementsByTagName("body")[0];
        var botChatObj = document.createElement('div');

        botChatObj.innerHTML = _chtml;
        cBody.appendChild(botChatObj);
        if (callback) {
            callback();
        };
    };

    
    
    function _bindElements() {
        var _cBubble = document.getElementById('botao');
        _cBubble.onclick = function() {
            _openChatWindow();
            document.getElementById("botao").style.display = "none";
        };
    

       
    };

    _createElements(botChatContainer, function() {
        _bindElements();
    })



    var popupOpen = getQueryVariable("popupOpen");
    if (popupOpen == true)
        _openChatWindow();
}


window.onload = bubbleControl;

