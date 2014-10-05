#pragma strict

var robotTriggered;
var mouseIn;
var textString = "";
//var textArea = new Rect(400,1500,Screen.width,Screen.height);;
var showText = false;


function Start () {
robotTriggered = false;
mouseIn = false;
}

function OnGUI(){

    if(showText)
    {
     	GUI.color = Color.black;
        GUI.Box(new Rect( Screen.width*0.1, Screen.height*0.8, Screen.width*0.85,Screen.height*0.1), textString);
    }
}

//prints dialogue
function Say(text){
showText = true;
textString = text;
//print(text);
}

// checks if player object has collided with this object 
function OnTriggerEnter2D (other : Collider2D){
other.gameObject.GetComponent(typeof(girlScript)).SetMessage("Robot! Robot! Robot! Robot! Robot! Robot! Robot! Robot! Robot! Robot!");
robotTriggered = true;
}

// checks if player object has stopped colliding with this object 
function OnTriggerExit2D (other : Collider2D){
robotTriggered = false;
}

// checks mouse is on gameObject	
function OnMouseEnter () {
mouseIn = true;
}
// checks mouse is no longer on gameObject	
function OnMouseExit () {
mouseIn = false;	

}	
function Update () {
    if(mouseIn == true) //so that nothing shows up if the mouse is clicking something other than the object
    {
    if (Input.GetKeyDown ("mouse 0") && (robotTriggered == true)) //checks if item clicked when nearby
{
Say("Oh, what a saucy bot!");
//	other.gameObject.GetComponent(typeof(girlScript)).SetMessage("Robot! Robot! Robot! Robot! Robot! Robot! Robot! Robot! Robot! Robot!");
}
else if (Input.GetKeyDown ("mouse 0") && (robotTriggered == false)) //checks if item is clicked from far away
{
Say("I'm too far away to use that...");
}
    }
}