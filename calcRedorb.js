function getKnowledgeBonus(knowledge){
    bonus = 1;
    if (knowledge >= 8767){
        bonus = 1.6;
    } 
    else if (knowledge >= 6727) {bonus = 1.5;}
    else if (knowledge >= 4727) {bonus = 1.4;}
    else if (knowledge >= 2977) {bonus = 1.3;}
    else if (knowledge >= 1277) {bonus = 1.2;}
    else if (knowledge >= 304) {bonus = 1.1;}
    else {bonus = 1;}
    return bonus;
}


function calcMagicDamage(skillBase, knowledge, reinforce, weakness, regist)
{
    bonus = getKnowledgeBonus(knowledge);
    damages = (skillBase * (200 + knowledge * bonus)*(100 + reinforce) / 20000) * (1+((weakness - regist)/100));
    return damages;
}


function tmpThunder(skill)
{
    let dama = 0;
    dama = skill*20+30;
    return dama;
}