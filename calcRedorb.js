function getKnowledgeBonus(knowledge){
    bonus = 1;
    if (knowledge >= 8767){
        bonus = 1.6;
    } 
    else if (knowledge >= 6727) {bonus = 1.5;}
    else if (knowledge >= 6327) {bonus = 1.48;}
    else if (knowledge >= 5927) {bonus = 1.46;}
    else if (knowledge >= 5527) {bonus = 1.44;}
    else if (knowledge >= 5127) {bonus = 1.42;}
    else if (knowledge >= 4727) {bonus = 1.4;}
    else if (knowledge >= 4377) {bonus = 1.38;}
    else if (knowledge >= 4027) {bonus = 1.36;}
    else if (knowledge >= 3677) {bonus = 1.34;}
    else if (knowledge >= 3327) {bonus = 1.32;}
    else if (knowledge >= 2977) {bonus = 1.3;}
    else if (knowledge >= 2627) {bonus = 1.28;}
    else if (knowledge >= 2277) {bonus = 1.26;}
    else if (knowledge >= 1927) {bonus = 1.24;}
    else if (knowledge >= 1577) {bonus = 1.22;}
    else if (knowledge >= 1277) {bonus = 1.2;}
    else if (knowledge >= 928) {bonus = 1.18;}
    else if (knowledge >= 702) {bonus = 1.16;}
    else if (knowledge >= 531) {bonus = 1.14;}
    else if (knowledge >= 402) {bonus = 1.12;}
    else if (knowledge >= 304) {bonus = 1.1;}
    else if (knowledge >= 230) {bonus = 1.08;}
    else if (knowledge >= 174) {bonus = 1.06;}
    else if (knowledge >= 132) {bonus = 1.04;}
    else if (knowledge >= 100) {bonus = 1.02;}
    else {bonus = 1;}
    return bonus;
}


function calcMagicDamage(skillBase, knowledge, reinforce, weakness, regist)
{
    bonus = getKnowledgeBonus(knowledge);
    damages = (skillBase * (200 + knowledge * bonus)*(100 + reinforce) / 20000) * (1+((weakness - regist)/100));
    return damages;
}

function calcPhysicalDamage(weapon, power, damage, skillDamage)
{
    return (1+weapon)*(1+power/200)*(100+damage+skillDamage) / 100;
}


function tmpThunder(skill)
{
    let dama = 0;
    dama = skill*20+30;
    return dama;
}