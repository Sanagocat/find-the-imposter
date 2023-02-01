var remain_chance = document.getElementById("remain_chance");
remain_chance.value = 5;

var start_button = document.getElementById("start_button");
var title_image = document.getElementById("title_img");
var youwin_image = document.getElementById("youwin_img");
var gameover_image = document.getElementById("gameover_img");

var monster_number = Math.floor(Math.random() * 12) + 1;
var user_win = false;
var game_over = false;
var is_start_game = false;

//Game END  :  1. User Win   2. GameOver
//0. After remain chance = 0 -> GameOver -> Click X
//1. After find imposter, -> Game Win -> Click X

function reset() {
  start_button.style.visibility = 'hidden';
  title_image.style.visibility = 'hidden';
  youwin_image.style.visibility = 'hidden';
  gameover_image.style.visibility = 'hidden';
  user_win = false;
  game_over = false;
  remain_chance.value = 5;
  for (let i = 0; i < 12; i++) {
    temp_id = 'imposter_' + (i + 1)
    document.getElementById(temp_id).style = 'background-image:url("imposter.png");';
  }

}

function start_function() {
  reset();
  is_start_game = true;
  console.log("GAME START!!!");
  start_button.style.visibility = 'hidden';
  title_image.style.visibility = 'hidden';
}


function buttonFunction(input_id) {

  if (is_start_game == false) {
    console.log("GAME NOT STARTED");
  }
  else if (remain_chance.value == 0) //Game Over
  {
    game_over = true;
    console.log("GAME OVER");
    gameover_image.style.visibility = 'visible';
  }
  else if (user_win == true) //User Win Condition
  {
    console.log("USER WIN")
    youwin_image.style.visibility = 'visible';
  }
  else //Button Click -> Image Change
  {
    console.log(input_id + "::PUSH button Function");
    select_button = document.getElementById(input_id);

    // substring - 문자 잘라내기 9번째부터 끝까지
    let sliced_num = input_id.substring(9); //"imposter_3"
    console.log(sliced_num);

    //if button number == monster_number -> imposter_monster.png
    //else -> imposter_2.png
    if (sliced_num == monster_number) {
      console.log(sliced_num + "::" + monster_number);
      select_button.style = 'background-image:url("imposter_monster.png");';
      user_win = true; //User WIN!!
    }
    else {
      console.log("ELSE " + sliced_num + "::" + monster_number);
      select_button.style = 'background-image:url("imposter2.png");';
    }

    remain_chance.value = remain_chance.value - 1

    if (remain_chance.value == 0) //Game Over
    {
      game_over = true;
      gameover_image.style.visibility = 'visible';
      start_button.style = 'background-image:url("restart.png");';
      start_button.style.visibility = 'visible';
    }
    else if (user_win == true) //User Win Condition
    {
      console.log("USER WIN")
      youwin_image.style.visibility = 'visible';
      start_button.style = 'background-image:url("restart.png");';
      start_button.style.visibility = 'visible';
    }
  }

}




