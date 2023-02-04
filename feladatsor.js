// 1. feladat név kiíratás
function keszito(){
    document.write(" Kis Péter, frontend, team12 <br>");
    }
    keszito();
    document.write("<hr>");
    // 2. feladat hatványozás
    function hatvanyozo(szam,hatvany){
        osszeg=Math.pow(szam,hatvany)
        return osszeg;
     }
    let hatvanyozoFuggveny= hatvanyozo(5,3);
     document.write(hatvanyozoFuggveny);
     document.write("<hr>");
    // 3. feladat páros szám
    function parosLetrehoz(also, felso){
        let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
    if(generaltParosSzam%2==0){
        return generaltParosSzam;
    }    
        else if(generaltParosSzam!=felso){
        return generaltParosSzam+1;
        }
        else{
        return generaltParosSzam-1;
       }
       }
    let parosszam=parosLetrehoz(1,10);
    document.write(parosszam);
    document.write("<hr>");
    //4. feladat
    function testTomegIndex(suly,magassag){
        let tti= suly/(magassag*magassag);
    if(tti<16){
         document.write("sulyosSovanysag ");
         return tti;
        }
    else if (tti<16.99){
        document.write("mersekeltSovanysag ");
        return tti;
    }
    else if(tti<18.49){
        document.write("enyheSovanysag ");
        return tti;
    }
    else if(tti<24.99){
        document.write("normalisTestsuly ");
        return tti;
    }
    else if(tti<29.99){
        document.write("tulsulyos ");
        return tti;
    }
    else if(tti<34.99){
        document.write("IfokuElhizas ");
        return tti;
    }
    else if(tti<39.99){
        document.write("IIfokuElhizas ");
        return tti;
    }
    else{
        document.write("IIIfokuSulyosElhizas ");
        return tti;
    }
    }
    document.write("A saját testtömeg indexem szerint a kategóriám: ");
    let ttiIndex=testTomegIndex(88,1.87);
    document.write("("+ttiIndex+")");
    document.write("<hr>");
    //5. feladat
    function egeszOsztoE(szam,oszto){
        if(szam%oszto==0){
        return true;
        }
        else{
        return false;
        }
        }
    let osztoE=egeszOsztoE(23,5);
    document.write(osztoE);