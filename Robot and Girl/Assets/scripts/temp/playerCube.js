#pragma strict

var speed = 0.5;

function Start () {

}

function Update () {

if (Input.GetKey ("a"))
{
	//		print ("left arrow key is held down");
			transform.Translate(Vector2(-10,0) * Time.deltaTime * speed);


}

if (Input.GetKey ("d"))
{
//			print ("right arrow key is held down");
			transform.Translate(Vector2(10,0) * Time.deltaTime * speed);

			}


}