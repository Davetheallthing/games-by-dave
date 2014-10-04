#pragma strict


var speed = 0.5;
var anim: Animator;


function Start () {
	anim = GetComponent("Animator");
}

function Update () {
	if (Input.GetKey ("a") || Input.GetKey ("left"))
	{
		anim.SetTrigger("shipLeft");
		transform.Translate(Vector2(-10,0) * Time.deltaTime * speed);
}

	if (Input.GetKey ("d") || Input.GetKey ("right"))
	{
		anim.SetTrigger("shipRight");
		transform.Translate(Vector2(10,0) * Time.deltaTime * speed);
	}

	if (Input.GetKey ("w") || Input.GetKey ("up"))
	{
		anim.SetTrigger("shipUp");
		transform.Translate(Vector2(0,10) * Time.deltaTime * speed);
	}
		
			if (Input.GetKey ("s") || Input.GetKey ("down"))
	{
		anim.SetTrigger("shipDown");
		transform.Translate(Vector2(0,-10) * Time.deltaTime * speed);
}
}

