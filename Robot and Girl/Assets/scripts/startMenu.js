#pragma strict

function Start () {

}

function Update () {
if (Input.GetKey ("enter") || Input.GetKey ("return"))
	{
		Application.LoadLevel ("starmap");
}
}