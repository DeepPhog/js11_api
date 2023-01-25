
var btn = document.getElementById("btn")
var cont = document.getElementById("cont2")
btn.onclick = async function btn() {
    var type = document.querySelector('input[name="oppgaveType"]:checked').value;
    var num = document.getElementById("num").value
    var oppgave = type + num
    cont.innerHTML = ""
    // console.log(oppgave);

    //tekst
    //Oppgave 1
    if (oppgave == "tekst1") {
        fetch("assets/textFile.txt")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.name == "Clementine Bauch") {
                    cont.innerHTML = list.address.street + " " + list.address.suite + " " + list.address.city + " " + list.address.zipcode
                }
            }))
    }
    //Oppgave 2
    if (oppgave == "tekst2") {
        fetch("assets/textFile.txt")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.name == "Leanne Graham") {
                    cont.innerHTML = "Gammelt " + list.phone
                    list.phone = 111
                    cont.innerHTML = cont.innerHTML + "<br><br> Nytt " + list.phone
                }
            }))
    }
    //Oppgave 3
    if (oppgave == "tekst3") {
        fetch("assets/textFile.txt")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.email == "Sherwood@rosamond.me") {
                    cont.innerHTML = "Navn: " + list.name + "<br><br> Username: " + list.username
                }
            }))
    }

    //Json
    //Oppgave1
    if (oppgave == "json1") {
        var bilder = 0
        await fetch("assets/fotograf.json")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                bilder++
            }))
        cont.innerHTML = bilder + " bilder"
    }
    //Oppgave2
    if (oppgave == "json2") {
        var album = 0
        await fetch("assets/fotograf.json")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.albumId == album + 1) {
                    album++
                }
            }))
        cont.innerHTML = album + " albumer"
    }
    //Oppgave3
    if (oppgave == "json3") {
        fetch("assets/fotograf.json")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.id == "238") {
                    cont.innerHTML = list.title
                }
            }))

    }
    //Oppgave4
    if (oppgave == "json4") {
        fetch("assets/fotograf.json")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.id == "555") {
                    cont.innerHTML = '<img src="' + list.url + '"></img>'

                }
            }))

    }
    //API
    //Oppgave1
    if (oppgave == "api1") {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.id == "95") {
                    cont.innerHTML = list.title
                }
            }))
    }
    //Oppgave2
    if (oppgave == "api2") {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => data.forEach(list => {
                if (list.userId == "5") {
                    list.body = "Test"
                    cont.innerHTML = cont.innerHTML + "<br><br>" + list.body
                }
            }))
    }
}