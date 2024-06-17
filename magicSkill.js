class baseSkill{
    constructor(skillName){
        this.name = skillName;
    }
    getSkillName()
    {
        return this.name;
    }
    min(slv)
    {
        return 0;
    }
    max(slv)
    {
        return 0;
    }
    median(slv)
    {
        return (this.max(slv) + this.min(slv)) / 2;
    }
    // ルート後倍率
    rateAfterRoot(slv)
    {
        return 1;
    }

    // ルート前倍率
    rateBeforeRoot(slv)
    {
        return 1;
    }
}

// Wizスキル
class Meteor extends baseSkill {
    min(slv)
    {
        return 10 * slv + 45;
    }
    max(slv)
    {
        return 10 * slv + 105;
    }
    rateBeforeRoot(slv)
    {
        return 2;
    }
}

class WaterCanon extends baseSkill {
    min(slv)
    {
        return 5.7 * slv + 50;
    }
    max(slv)
    {
        return 6.3 * slv + 50;
    }
    rateBeforeRoot(slv)
    {
        return 1 + (slv * 0.09);
    }
}

class EarthQuake extends baseSkill {
    min(slv)
    {
        return 7 * slv + 35;
    }
    max(slv)
    {
        return 9 * slv + 35;
    }
}

class LightningThunder extends baseSkill {
    min(slv)
    {
        return 17 * slv + 30;
    }
    max(slv)
    {
        return 23 * slv + 30;
    }
}

// 剣士
class Tower extends baseSkill {
    min(slv)
    {
        return 2.5 * slv + 40;
    }
    max(slv)
    {
        return 5.5 * slv + 40;
    }
}

class Warcry extends baseSkill {
    min(slv)
    {
        return 8 * slv + 75;
    }
    max(slv)
    {
        return 12 * slv + 75;
    }
}
// 戦士
class Dratwi extends baseSkill {
    min(slv)
    {
        return 4 * slv + 80;
    }
    max(slv)
    {
        return 4 * slv + 120;
    }
}

// アーチャー
class Firerain extends baseSkill {
    min(slv)
    {
        return 3.5 * slv + 20;
    }
    max(slv)
    {
        return 3.5 * slv + 40;
    }
}


class Waterfall extends baseSkill {
    min(slv)
    {
        return 2.5 * slv + 10;
    }
    max(slv)
    {
        return 2.5 * slv + 30;
    }
}

// ランサー
class Rasial_W extends baseSkill {
    min(slv)
    {
        return 3.4 * slv + 36;
    }
    max(slv)
    {
        return 8.4 * slv + 36;
    }
}


class Rasial_L extends baseSkill {
    min(slv)
    {
        return 1
    }
    max(slv)
    {
        return 11.8 * slv + 1;
    }
}

class FireAndIce_F extends baseSkill {
    min(slv)
    {
        return 5.2 * slv + 12;
    }
    max(slv)
    {
        return 5.2 * slv + 60;
    }
}


class FireAndIce_I extends baseSkill {
    min(slv)
    {
        return 5.2 * slv + 32;
    }
    max(slv)
    {
        return 5.2 * slv + 40;
    }
}


class Gardian_W extends baseSkill {
    min(slv)
    {
        return 1 * slv + 20;
    }
    max(slv)
    {
        return 7 * slv + 20;
    }
}

class Gardian_L extends baseSkill {
    min(slv)
    {
        return 1;
    }
    max(slv)
    {
        return 4 * slv + 1;
    }
}
// シーフ
class explosionTrap extends baseSkill {
    min(slv)
    {
        return slv * 100 + 15;
    }
    max(slv)
    {
        return slv * 100 + 45;
    }
}
class poisonousTrap extends baseSkill {
    min(slv)
    {
        return slv * 15;
    }
    max(slv)
    {
        return slv * 15;
    }
}

// リトル
class LightningWinder extends baseSkill {
    min(slv)
    {
        return 15;
    }
    max(slv)
    {
        return 5 * slv + 15;
    }
}


class Flower extends baseSkill {
    min(slv)
    {
        return 45;
    }
    max(slv)
    {
        return 16 * slv + 45;
    }
}

// ネクロ
class Conspiracy extends baseSkill {
    min(slv)
    {
        return 15 * slv;
    }
    max(slv)
    {
        return 15 * slv;
    }
}

class needle extends baseSkill {
    min(slv)
    {
        return 25 * slv + 30;
    }
    max(slv)
    {
        return 25 * slv + 30;
    }
}

class curse extends baseSkill {
    min(slv)
    {
        return 15 * slv + 20;
    }
    max(slv)
    {
        return 15 * slv + 20;
    }
}

// 霊術
class Vacuum extends baseSkill {
    min(slv)
    {
        return 3 * slv + 35;
    }
    max(slv)
    {
        return 7 * slv + 35;
    }
}

// 光奏師
class Crimson extends baseSkill {
    max(slv)
    {
        return 15 * slv + 55;
    }
    min(slv)
    {
        return this.max(slv) * 0.8;
    }

}


class Opticalhole extends baseSkill {
    max(slv)
    {
        return 13 * slv + 65;
    }
    min(slv)
    {
        return this.max(slv) * 0.8;
    }
    rateBeforeRoot(slv)
    {
        return 2;
    }
}


function getSkill(skillName)
{
    if(skillName == "メテオシャワー"){ return new Meteor(skillName) ;}
    else if(skillName == "ウォーターキャノン"){ return new WaterCanon(skillName) ;}
    else if(skillName == "ライトニングサンダー"){ return new LightningThunder(skillName) ;}
    else if(skillName == "アースクエイク"){ return new EarthQuake(skillName) ;}
    else if(skillName == "トワーリングプロテクター"){ return new Tower(skillName) ;}
    else if(skillName == "ウォークライ"){ return new Warcry(skillName) ;}
    else if(skillName == "ドラゴンツイスター"){ return new Dratwi(skillName) ;}
    else if(skillName == "グライディングファイアー"){ return new Firerain(skillName) ;}
    else if(skillName == "ウォーターフォール"){ return new Waterfall(skillName) ;}
    else if(skillName == "ラジアルアーク(風)"){ return new Rasial_W(skillName) ;}
    else if(skillName == "ラジアルアーク(光)"){ return new Rasial_L(skillName) ;}
    else if(skillName == "ファイアー・アンド・アイス(火)"){ return new FireAndIce_F(skillName) ;}
    else if(skillName == "ファイアー・アンド・アイス(水)"){ return new FireAndIce_I(skillName) ;}
    else if(skillName == "ガーディアンポスト(風)"){ return new Gardian_W(skillName) ;}
    else if(skillName == "ガーディアンポスト(光)"){ return new Gardian_L(skillName) ;}
    else if(skillName == "ライトニングワインダー"){ return new LightningWinder(skillName) ;}
    else if(skillName == "エクスプロージョントラップ"){ return new explosionTrap(skillName) ;}
    else if(skillName == "ポイズントラップ"){ return new poisonousTrap(skillName) ;}
    else if(skillName == "花の乙女スペシャル"){ return new Flower(skillName) ;}
    else if(skillName == "陰謀の影"){ return new Conspiracy(skillName) ;}
    else if(skillName == "針のむしろ"){ return new needle(skillName) ;}
    else if(skillName == "ミラーカーズ"){ return new curse(skillName) ;}
    else if(skillName == "真空斬り"){ return new Vacuum(skillName) ;}
    else if(skillName == "クリムゾン・アイ"){ return new Crimson(skillName) ;}
    else if(skillName == "オプティカルホール"){ return new Opticalhole(skillName) ;}
}