# js-timer
Ich wollte alles bisher gelernte mit einbeziehen.
1.) habe ich bootstrap mit einbezogen und einen Container erstellt => 4 cards a Column 3 (Tag, Stunde, Minute, Sekunde)
    Bootstrap habe ich mich dafür entschieden, da es relativ simpel ist auch die Cards responsiv zu bekommen.
2.) Per Zufall bin ich dann auf das Format mit dem Kalender gestossen.
3.) Die zeitangaben hab ich mir von W3School geholt .
4.) Nun kam die herausforderung die Funktionen zu definieren und die nötigen werte in die Cards zu bekommen.
5.) Es gelang mir mit Hilfe von teils google und chatgpt die richtigen Befehle zu holen, jedoch wollte ich selber
    auf die Lösung kommen und hing sehr lange fest an countdownTime = new Date(document.getElementById("countdownTime").value).getTime();
    Ray und Ari gaben mir dann den Tip, dass die Werte nicht übereinstimmen......Erfolglos nach unzähligen Versuchen und des lesens.
    Sodass ich mich ans css machte um auf andere Gedanken zu kommen.
6.) Nun lief alles , aber negative Werte und neue Daten wurden nicht übernommen.
7,) Nach mehreren Versuchen eine schleife und if else Funktionen zu schreiben, welche mir das eingabefeld reseten kam ich auf die einfache
    Idee den negativen Timer(distance <0) mit einem Alert und reload zu umgehen.
    
