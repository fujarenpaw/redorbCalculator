class physicalSkill{
    getSkillName()
    {
        return "";
    }

    skillDamage(slv)
    {
        return 0;
    }

}
class bit extends physicalSkill{
    getSkillName()
    {
        return "ビット";
    }
    skillDamage(slv)
    {
        return slv*3;
    }
}

class para extends physicalSkill{
    getSkillName()
    {
        return "パラ";
    }
    skillDamage(slv)
    {
        return slv * 6 - 50;
    }
}

class doubleThrow extends physicalSkill{
    getSkillName()
    {
        return "ダブスロ";
    }
    skillDamage(slv)
    {
        return slv*2;
    }
}


class entra extends physicalSkill{
    getSkillName()
    {
        return "エントラ";
    }
    skillDamage(slv)
    {
        return slv*6-33;
    }
}

class comet extends physicalSkill{
    getSkillName()
    {
        return "コメット";
    }
    skillDamage(slv)
    {
        return slv*4+30;
    }
}


function getphysicalSkill(character){
    if(character == "アーチャー"){ return new bit() ;}
    else if(character == "剣士"){ return new para() ;}
    else if(character == "シーフ"){ return new doubleThrow() ;}
    else if(character == "ランサー"){ return new entra() ;}
    else if(character == "リトルウィッチ"){ return new comet() ;}
}