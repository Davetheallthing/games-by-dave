#pragma strict


var speed = 0.5;
var anim: Animator;
var MyFont: Font;
var msg : String = "";


function Start () {
	anim = GetComponent("Animator");
}

function OnGUI(){
	GUI.color = Color.black;
    GUI.skin.font = MyFont;
	var point = Camera.main.WorldToScreenPoint(transform.position);
	GUI.Label (Rect (point.x - 25, (point.y * -1) + 500, 10, 10), msg, GUIStyle.none);	
	}

function SetMessage(msg : String)
{
this.msg = msg;
}

function Update () {
	if (Input.GetKey ("a") || Input.GetKey ("left"))
	{
//		print ("left arrow key is held down");
		transform.Translate(Vector2(-10,0) * Time.deltaTime * speed);
		anim.SetTrigger("girlWalkLeft");	
	}

	if (Input.GetKey ("d") || Input.GetKey ("right"))
	{
//	print ("right arrow key is held down");
		transform.Translate(Vector2(10,0) * Time.deltaTime * speed);
		anim.SetTrigger("girlWalkRight");
	}

    if(Input.anyKey == false)
    {
    	anim.SetTrigger("girlIdle");
    }
}