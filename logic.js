function ageCheck() {
    let currentYear = 2022;
    var birthYear = Number(document.getElementById("year").value);
    var yearChecked = currentYear - birthYear;

    if (yearChecked > 18) {                                          
        alert('Concluido!');
        window.location.href = "https://www.youtube.com/";
    }
    else {
        alert('VOCÊ NÃO TEM 18 ANOS!');
    }

}