+++
Date = "2013-06-15T21:00:00.000Z"
Title = "Graph.tk"
Description = "Graph.tk on vapaa websovellus matemaattisten kuvaajien piirtämiseen."
Week = "3x25"
Number = "129"
Alustat = []
Tagit = ["Verkkoselaimet","Matematiikka","Opiskelu","Opetus"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo129-graph.tk.png"
+++


**Graph.tk on vapaa websovellus matemaattisten kuvaajien piirtämiseen.**

![ ](/images/valo129-graph.tk.png "fig:valo129-graph.tk.png") Graph.tk piirtää
matemaattisten kaavojen graafisia esityksiä www-selaimella käyttäen
hyvin yksinkertaista käyttöliittymää. Sovelluksen oleellisin osa on koko
selainruudun täyttävä koordinaatisto, jossa voi siirtyä paikasta toiseen
hiirellä raahaamalla sekä zoomata hiiren rullaa käyttäen. Toinen
oleellinen osa on näkymän oikeassa yläkulmassa oleva lista esitettävistä
kaavoista. Listan alareunassa on plusnappula, jota painamalla listaan
lisätään uusi kaava. Ohjelma lisää listaan valmiita esimerkkikaavoja,
jotka voi korvata omilla kaavoilla. Kaavojen esittämä kuvaaja piirretään
koordinaatistoon automaattisesti. Kukin uusi kaava saa uuden, selkeän ja
toisistaan erottuvan värin. Kunkin kaavan kuvaajan piirtämisen voi
kytkeä päälle ja pois rastiruudulla. Lisäksi kaavan voi poistaa
napsauttamalla poistorastista.

Matemaattisten kaavojen syöttäminen on toteutettu
[Mathquill](http://mathquill.com)-kirjastolla, jolla matematiikan
kirjoittaminen on varsin suoraviivaista ja helppoa. Syöttötila tunnistaa
suoraan '\*'-merkin kertomerkiksi, jonka se näyttää normaaliin
matemaattiseen tapaan pisteenä, ja jakoviivan '/', jonka se ymmärtää
jakolaskuksi ja osaa muuttaa vaakasuoraksi osoittajaa ja nimittäjää
käyttäväksi jakolaskuksi. Lisäksi syöttötilaan voi kirjoittaa
LaTeX-komentoja, jotka aloitetaan takakenolla '\\' ja päätetään
välilyöntiin. Esimerkiksi neliöjuuri luvusta 2 saadaan kirjoittamalla
ensin '\\sqrt ', jonka jälkeen neliöjuurimerkin alle syntyneeseen
korostettuun ruutuun kirjoitetaan luku '2'.

Syötettävät kaavat voivat olla montaa eri muotoa ja parhaimman
käsityksen erilaisista tyypeistä saakin painelemalla plusnappulaa ja
katsomalla läpi esimerkkikaavat. Yksinkertaisimmillaan kaava voi olla
vain lauseke, vaikka polynomi *3x+1*, jota vastaava kuvaaja piirretään.
Kaavan voi antaa myös yksinkertaisesti ratkaistavana muuttujia *x* ja
*y* sisältävänä yhtälönä, kuten *2y=3x+1*. Kaavaksi voi myös syöttää
epäyhtälön, esimerkiksi *y<-x^2*, jolloin Graph.tk piirtää
epäyhtälössä esiintyvän lausekkeen kuvaajan ja värittää tasosta
epäyhtälön toteuttavan osan. Normaalin karteesisen koordinaatiston
lisäksi kuvaajia voi piirtää käyttämällä napakoordinaatistoa. Tämä
tehdään käyttämällä muuttujien *x* ja *y* sijasta muuttujia *r* ja
*\\theta*. Muuttuja *r* tarkoittaa pisteen etäisyyttä keskipisteestä ja
kreikkalainen kirjain *\\theta* puolestaan kulmaa vastapäivään
positiivisesta *x*-akselista. Lisäksi kaavarivillä voi määritellä
muuttujia, esimerkiksi *a=5* ja käyttää näitä muuttujia muissa
kaavoissa.

Piirto-ominaisuuksien lisäksi Graph.tk sisältää myös hyvin
yksinkertaisen ja rajoittuneen javascript-pohjaisen cas-järjestelmän,
jolla se osaa esimerkiksi suorittaa muodossa *d/dx(2x+4)* annettuja
derivointeja sekä yksinkertaisia integrointeja. Näitä ominaisuuksia voi
käyttää joko suoraan kaavarivillä taikka omasta napistaan esiin
tulevassa erillisessä cas-näkymässä. Graph.tk:n cas-ominaisuudet eivät
kuitenkaan ole kovinkaan monipuoliset vaan ne ovat lähinnä pieni lisä
ohjelman piirtotoiminnallisuuden ohella.

Piirretyn kuvan voi tallentaa png-kuvaksi klikkaamalla käyttöliittymän
kameraikonia. Tällöin piirretystä kuvaajasta muodostetaan png-kuva, joka
avataan selaimeen ja jonka voi tämän jälkeen tallentaa normaaliin tapaan
hiiren oikealla näppäimellä saatavasta valikosta.

Ohjelman lähdekoodit ovat saatavilla sen
[Github-sivulta](https://github.com/aantthony/graph.tk). Kuvaajien
piirtäminen on toteutettu ohjelmassa html5:n canvas-elementtiä käyttäen.
Javascriptillä toteutettuna kuvaajien piirtäminen tapahtuu kokonaan
käyttäjän selaimessa, joten verkkoyhteyttä tarvitaan vain sovelluksen
avaamiseen. Graph.tk:lla piirrettyjä kuvaajia voi myös upottaa muille
sivuille käyttäen tarjolla olevaa
[API](http://graph.tk/about/api.html):a.

Kotisivu
:   <http://graph.tk>
:   [About-sivu](http://graph.tk/about/)
:   [API](http://graph.tk/about/api.html)

Lisenssi
:   [GNU LGPL](GNU_LGPL)

Toimii seuraavilla alustoilla
:   Selaimet

Asennus
:   Ohjelma ei selaimella käytettävänä tarvitse erillistä asennusta. Sen
    voi kuitenkin halutessaan asentaa
    [Chrome-sovellukseksi](https://chrome.google.com/webstore/detail/graphtk/nkhkaamdeplibnmodcgodlkghphdbahk?hl=en)
    Chrome-selaimeen. Ohjelman voi myös asentaa omalle palvelimelle, jos
    ei halua käyttää sitä alkuperäiseltä sivustolta.

{{% wrapper class="psgallery" %}}
-   [Graph.tk:n käyttöliittymä on hyvin yksinkertainen ja selkeä. Vain
    koordinaatisto ja piirrettävät kaavat.](/images/graph.tk-1.png)
-   [Uudella kaavarivillä on ohjelmaa esittelevä esimerkkikaava, jonka
    voi korvata omalla. Halutut kaavat voi piilottaa ottamalla rastin
    pois kyseisestä ruudusta.](/images/graph.tk-2.png)
-   [Yhtälöiden ja lausekkeiden kuvaajien lisäksi voidaan esittää myös
    epäyhtälöitä väritettyinä pintoina.](/images/graph.tk-3.png)
-   [Myös napakoordinaatistoa voi käyttää.](/images/graph.tk-4.png)
-   [Kaavojen syöttäminen tapahtuu Mathquill-syöttökentillä, jotka
    näyttävät kaavat matemaattisessa muodossa ja joilla matematiikan
    syöttäminen on helppoa.](/images/graph.tk-5.png)
-   [Mathquill-kenttään voi syöttää myös LaTeX-syntaksin mukaisia
    komentoja ja symboleja.](/images/graph.tk-6.png)
-   [Graph.tk:n sisäänrakennettu kevyt cas-toiminnallisuus osaa
    suorittaan jonkin verran muun muassa derivointeja ja
    integrointeja.](/images/graph.tk-7.png)
-   [Kaavariveillä voi myös nimetä uusia muuttuja, joita voi käyttää
    muissa kaavoissa.](/images/graph.tk-8.png)
-   [Myös kertoma ja Gamma-funktio löytyvät.](/images/graph.tk-9.png)
-   [Graph.tk:n cas-näkymässä voi suorittaa joitain hyvin yksinkertaisia
    laskutoimituksia...](/images/graph.tk-10.png)
-   [... Esimerkiksi derivointia.](/images/graph.tk-11.png)
-   [Graph.tk antaa piirrettyjen kuvaajien bittikarttakuvan käyttäjälle
    avaamalla selaimeen base64-koodatun png-kuvan, jonka käyttäjä voi
    tallentaa normaalina png-tiedostona.](/images/graph.tk-12.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


