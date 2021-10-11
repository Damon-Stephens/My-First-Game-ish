var wrapper=document.body.querySelector(".wrapper");

var total_damage=0

var dragon_health=50

var damage_taken=0

var player_health=10

var condition=false

wrapper.innerHTML=`Dragon Health: 50/50 </br>Player health 10/10`

function attack(type,damage){
    if(type==="fire"){
        damage=damage-(Math.floor(Math.random()*8))
        if(damage<0){
            damage=0
        }
        total_damage=(total_damage+damage)
        dragon_health=(50-total_damage)
        if(dragon_health<0) {
            dragon_health = 0
        }
        wrapper.innerHTML=`Dragon Health: ${dragon_health}/50`
    }
    if(type==="ice"){
        damage=damage+(Math.floor(Math.random()*5))
        total_damage=(total_damage+damage)
        dragon_health=(50-total_damage)
        if(dragon_health<0) {
            dragon_health = 0
        }
        wrapper.innerHTML=`Dragon Health: ${dragon_health}/50`
    }
    if(type==="poison"){
        damage=damage+(Math.floor(Math.random()*25))
        total_damage = (total_damage + damage)
        dragon_health=(50-total_damage)
        if(dragon_health<0) {
            dragon_health = 0
        }
    }
    damage_taken=(damage_taken+((Math.floor(Math.random()*2)+1)))
    player_health=(10-damage_taken)
    if (player_health<0){
        player_health=0
    }

    wrapper.innerHTML=`Dragon Health: ${dragon_health}/50
                  <br> Player health: ${player_health}/10`

    damage_check(dragon_health,player_health)
}

function damage_check(dragon_health,player_health){
    if(dragon_health===0 && player_health===0){
        var tele=document.createElement("div");
        tele.innerHTML="Thou hath slain the dragon, but at what cost. The almighty sun rises once again on a peaceful world grateful for thine protective grace. Hymns shalt be written about thine legendary conquest and of how thou where slain as thou dealt a mighty final blow. Rest now great hero for thou art one with the stars.";
        wrapper.appendChild(tele);
        document.getElementById("flash").style.borderColor = "rgba(0, 0, 0, 0)";
        document.getElementById("flash").style.backgroundImage = "url(\"../images/what fun.jpg\")"
        die;
    }else if(dragon_health===0){
        var ele=document.createElement("div");
        ele.innerHTML="Thou hath slain the dragon. Once thou art done admiring thine handiwork, return from whence thy came, to collect thine reward and pay remembrance to the mighty battle thou hath fought today.";
        wrapper.appendChild(ele);
        document.getElementById("flash").style.borderColor = "rgba(0, 0, 0, 0)";
        document.getElementById("flash").style.backgroundImage = "url(\"../images/please.jpg\")"
    }else if(player_health===0){
        var dele=document.createElement("div");
        dele.innerHTML="Thou hath been slain the dragon. Once thou soul departest thine corporeal form the dragon shalt movest on to reek havoc upon thine world. Thou must now pass into thine final resting place and pray that thou art far enough now to avoid the same torture thine people face.";
        wrapper.appendChild(dele);
        document.getElementById("flash").style.borderColor = "rgba(0, 0, 0, 0)";
        document.getElementById("flash").style.backgroundImage = "url(\"../images/dargon bad.jpg\")"
        die;
    }
}

document.body.querySelector(".fire").addEventListener("click",function(){
    var type="fire"
    var damage=Math.floor(Math.random()*11);
    if(player_health===0||dragon_health===0){
        die;
    }
    damage_check(dragon_health,player_health)
    document.getElementById("flash").style.borderColor = "rgba(255, 69, 0, 0.50)";
    attack(type,damage)
})
document.body.querySelector(".ice").addEventListener("click",function(){
    var type="ice"
    var damage=Math.floor((Math.random()*5)+1)
    if(player_health===0||dragon_health===0){
        die;
    }
    damage_check(dragon_health,player_health)
    document.getElementById("flash").style.borderColor = "rgba(105, 160, 171, 0.5)";
    attack(type,damage)
})
document.body.querySelector(".poison").addEventListener("click",function(){
    var type="poison"
    var damage=Math.floor(Math.random()*20)+5
    if(condition===true){
        die;
    }
    if(player_health===0||dragon_health===0){
        die;
    }
    damage_check(dragon_health,player_health)
    document.getElementById("flash").style.borderColor = "rgba(154, 205, 50, 0.5)";
    attack(type,damage)
    condition=true
})


