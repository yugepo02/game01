let cvs;// キャンバス
let player;//プレイヤースプライト
let player2;//プレイヤースプライト
let ball;//球
let wall;
let wall2;
let wall3;
let wall4;


function setup(){

	// キャンバスの準備
	cvs = new Canvas(800, 500);
	world.gravity.x = 0; //x重力
	world.gravity.y = 5;//y重力
	frameRate(60);// フレームレート 
	//スプライトを作る
	player = new Sprite(100,100);
	player.width=32;
	player.height=32;
	player.color="pink"
	player.collider="dynamic";//物理演算有効
	player.vel.y=-4;

	player2 = new Sprite(700,100);
	player2.width=32;
	player2.height=32;
	player2.color="blue"
	player2.collider="dynamic";//物理演算有効
	player2.vel.y=-4;
	//球
	ball=new Sprite(400,100 ,25)
	//floor=  ellipse(50, 50);
	ball.width=50
	ball.height=50;
	ball.color="brown";
	//floor.collider="static";
	ball.collider="dynamic";//物理演算無効
	//壁　下
	wall=new Sprite(0,1000)
	wall.width=5000;
	wall.height=1000;
	wall.color="pink"
	wall.collider="static"
	//壁　左
	wall2=new Sprite(0,500)
	wall2.width=10;
	wall2.height=1000;
	wall2.color="red"
	wall2.collider="static"
	//壁　右
	wall3=new Sprite(800,0)
	wall3.width=10;
	wall3.height=1000;
	wall3.color="red"
	wall3.collider="static"
	//壁　上
	wall4=new Sprite(0,0)
	wall4.width=5000;
	wall4.height=0;
	wall4.color="blue"
	wall4.collider="static"
if (ball.vel.x>=300){
	player.width=32
	player.height=32
	player2.width=32
	player2.height=32
}
}

function draw(){
	background("silver");// 背景色

	//　キーボード入力でジャンプ
	if(kb.presses("up")){
		
		player.vel.y=-10;
		player2.vel.y=-10
	}
	if(kb.presses("down")){
	
		player.vel.y=10;
		player2.vel.y=10
	}
	if(kb.presses("left")){
		player.vel.x=-10
		player.vel.y=10;

		player2.vel.x=10
		player2.vel.y=10
	}
	if(kb.presses("right")){
		player.vel.x=10
		player.vel.y=10;

		player2.vel.x=-10
		player2.vel.y=10
	}

	
}


