
function loadme()
{	
	console.log("loadme has been called");
}
    
function viewname()
{
    
    var locate = window.location + " ";
    //document.getElementById("hidme").value = locate +"";
    console.log("locate" + locate);
    //delineate(locate);    
    
    //var name = delineate(locate);
    var name = "laurenz";
    name = locate;
    name = delineate(name);
    document.getElementById("resultbox").value = "Hi " + name + "!";    
    if(name == "Cheska" || name == "cheska" || name == "raiza" || name == "Raiza" )
        {
            document.getElementById("maincontent").setAttribute("style", "background: pink;");
            document.getElementById("resultbox").setAttribute("style", "background: pink; color: #171717;");
        }
        if(name == "annachelle" || name == "Annachelle" || name == "gero" || name == "Gero" || name == "abie" || name == "Abie")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #ff4e00;");            
            document.getElementById("resultbox").setAttribute("style", "background: #ff4e00;");
        }
        if(name == "laurenz" || name == "Laurenz")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #db3f3f;");            
            document.getElementById("resultbox").setAttribute("style", "background: #db3f3f;");            
        }
        if(name == "ayami" || name == "Ayami" || name == "tim" || name == "Tim" || name == "Elisha" 
            || name == "elisha" || name == "Elisha")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #2a2860;");            
            document.getElementById("resultbox").setAttribute("style", "background: #2a2860; color: #fdf400;");            
        }
        if(name == "aram" || name == "Aram")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #a2ff5d;");            
            document.getElementById("resultbox").setAttribute("style", "background: #a2ff5d; color: black;");            
        }    
}

function delineate(str)
{
    console.log("Something");
    var param = location.search.substring(1).split("&");
    var temp  = param[0].split("=");
    var name = unescape(temp[1]) + "";
    console.log("name = " + name);
    return name;
    //theleft = str.indexOf("=") + 1;
    //theright = str.lastIndexOf("&");
    //return(str.substring(theleft, theright));
}
    function changepage(obj)
    {	
        console.log("pressed")
        var user;
        user = document.getElementById("namebox").value;
        console.log("change page: " + user);
        setcookie("userid", user);
        checkcookie();
        //window.location.href = "main.html";
    }
    
    function setcookie(cname, cvalue)
    {
            console.log("cvalue " + cname + " " +cvalue)
            document.cookie = cname + "=" + cvalue;
            //document.cookie = cvalue;	
            console.log("coookie: " + document.cookie);
    }

    function getcookie(cname)
    {
        console.log("cname = " + cname)
        var name = cname + "=";
        console.log("name = " + name)
        var ca = document.cookie.split(';');
        console.log("ca = " + ca)
        for(var i=0; i<ca.length; i++) 
        {
          var c = ca[i].trim();
          if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
    }

    function checkcookie()
    {	
        //alert("helloooo");
        var user = getcookie("userid");
        console.log("check = " + user);
        //alert("hello id" + user);
    }
    


    function loaduserid()
    {
        var name = getcookie("userid");
        document.getElementById("resultbox").value = "Hi " + getcookie("userid") + "!";        
        if(name == "Cheska" || name == "cheska" || name == "raiza" || name == "Raiza" )
        {
            document.getElementById("maincontent").setAttribute("style", "background: pink;");
            document.getElementById("resultbox").setAttribute("style", "background: pink; color: #171717;");
        }
        if(name == "annachelle" || name == "Annachelle" || name == "gero" || name == "Gero" || name == "abie" || name == "Abie")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #ff4e00;");            
            document.getElementById("resultbox").setAttribute("style", "background: #ff4e00;");
        }
        if(name == "laurenz" || name == "Laurenz")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #db3f3f;");            
            document.getElementById("resultbox").setAttribute("style", "background: #db3f3f;");            
        }
        if(name == "ayami" || name == "Ayami" || name == "tim" || name == "Tim" || name == "Elisha" || name == "elisha" || name == "Elisha")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #2a2860;");            
            document.getElementById("resultbox").setAttribute("style", "background: #2a2860; color: #fdf400;");            
        }
        if(name == "aram" || name == "Aram")
        {
            document.getElementById("maincontent").setAttribute("style", "background: #a2ff5d;");            
            document.getElementById("resultbox").setAttribute("style", "background: #a2ff5d; color: black;");            
        }
    }    

