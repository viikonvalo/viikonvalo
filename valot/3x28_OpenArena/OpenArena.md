+++
Date = "2013-07-06T21:00:00.000Z"
Title = "OpenArena"
Description = "OpenArena on vapaa ensimmäisen persoonan ammuskelupeli ."
Week = "3x28"
Number = "132"
Alustat = ["Linux","Windows","Mac OS X","Android"]
Tagit = ["Peli"]
Type = "post"
Author = "Taleman"
Pageimage = "valo132-openarena.png"
+++


**OpenArena on vapaa ensimmäisen persoonan ammuskelupeli .**

![ ](/images/valo132-openarena.png "fig:valo132-openarena.png") OpenArena on
yhteisön tuottama GPL-lisensoitua idTech3:a pelimoottorina käyttävä
Quake 3 Areenaa vastaava peli. Netissä pelaaminen on mahdollista ja
pelimuotoja on useita, perusammuskelua, lipunryöstöä ynnä muita. Peliä
ei suositella alle 17-vuotiaille, toteaa
[webbi-sivu](http://openarena.wikia.com/wiki/Main_Page).

OpenArena on varsin samanlainen kuin Quake III Arena, se on tehty
samalla pelimoottorilla, mutta kentät, grafiikat ja äänet on tehty
uusiksi vapaalla lisenssillä. Esimerkiksi aseet ovat vaikutuksiltaan
suunnilleen samanlaisia kuin Quake III:ssa, mutta eri näköisiä.
Pelaamisen kannalta eroa ei paljoa ole, samat pikanäppäimet saa
määritettyä samoihin toimintoihin. Suurin ero tulee erilaisista
kentistä, ne pitää uudestaan opetella, jos pitää muistaa mistä nurkasta
löytyy tavoiteltu poweruppi.
[250px|right](Tiedosto:OpenArena-kuvituskuva.jpg "wikilink") Kenttiä on
noin sata, joista osa tosin on muunnelmia eikä kunnolla erilaisia
kenttiä. Mukana olevat kentät löytää Linuxissa komennolla

```bash
for i in /usr/lib/openarena/baseoa/*.pk3 ;
do unzip -t $i | grep maps | grep \.bsp ;
done
```

Komennon voi kirjoittaa kolmelle riville kuten yllä, tai yhdelle riville
yhteen pötköön, kumpikin tapa toimii.

Yksinpelinä OpenArenan voi pelata läpi voittamalla kenttiä. Kun on
voittanut neljä ensimmäistä kenttää, saa pelattavakseen neljä kenttää
lisää, ja ne voitettuaan samaan tapaan. Jo pelattuja kenttiä voi pelata
uudestaan. Ne löytyvät pelin valikosta.

Nettipeli on kattavasti toteutettu. Asennuksessa tulee mukana myös
pelipalvelin. Yksi pelaajista voi käynnistää OpenArenansa palvelimeksi
ja hän sekä muut liittyvät sen pyörittämään peliin. Internetistä löytyy
[pelipalvelimia](http://dpmaster.deathmask.net/?game=openarena) joihin
voi liittyä. Pitää vaan katsoa, että palvelimella on sama versio
OpenArenasta kuin itsellä. Moninpeliin liitytään pelin
Multiplayer-valikosta, samasta paikasta voi myös käynnistää
pelipalvelimen.

Saatavilla on myös erillinen palvelinversio. Debian GNU/Linuxissa se on
paketissa nimeltä openarena-server. Asentamalla tämä palvelinversio
erilliseen koneeseen ei kenenkään pelaajan tarvitse ajaa omalla
koneellaan OpenArenan asiakasohjelman lisäksi myös pelipalvelinta.

OpenArenan mukana tulee MissionPack. Se on modi ja vastaa Quake III:n
Team Arena -julkaisua. Suuri osa MissionPackin ominaisuuksista on
siirtynyt OpenArenan perusversion vakio-ominaisuudeksi.

Peli on varsin nopeatempoinen. Tarvitaan nopeat refleksit ja vikkelät
sormet, mutta tietokonepelaajia vastaan ei mikään estä käynnistämästä
kenttää devmap-komennolla, jolloin voi komennolla timescale hidastaa
pelin. Esimerkiksi
`timescale 0.33`
jälkeen peli toimii
kolmasosanopeudella. Tällöin voi myös antaa itselleen haluamiaan power
uppeja, esimerkiksi
`give speed`
tai
`give quad damage`
Tietokonepelaajat eli botit ovat varsin kelvollisia. Botteja vastaan
pelaamalla voi harjoitella tai pelata pelkästään botteja vastaan jos ei
pidä nettipeleistä. Botit osaavat muitakin pelimuotoja kuin vapaan
ammuskelun, ainakin lipunryöstö sujuu pelkkiä botteja sisältävällä
joukkueella. Botteja voi käyttää myös, jos ihmispelaajia ei ole
tarpeeksi. Loput joukkueen paikat voi täyttää boteilla.
[Webbisivun](http://openarena.wikia.com/wiki/Bots) mukaan uusin
OpenArena on täysin yhteensopiva Quake III:n bottitiedostojen kanssa.

Bottien osaamista voi säätää. Botti lisätään peliin komennolla addbot,
jolle annetaan parametrina botin nimi ja taitotaso kokonaislukuna yhden
ja viiden väliltä. Esimerkiksi `addbot neko 5` lisää hyvin taitavan
Neko-mallia käyttävän botin. Botin nimenä pitää käyttää peliin
määriteltyä bottia.

Projekti OpenArena käynnistettiin elokuun 19. 2005. Edellisenä päivänä
julkaistiin id Tech 3 lähdekoodi lisenssinä GPL. Uusin versio 0.8.8
julkaistiin helmikuun 20. 2012
(<http://openarena.ws/board/index.php?topic=4451.0>). Kehitys jatkuu,
uusia kenttiä tulee yhteisöltä ja pelin kehittäjät lupaavat uutta
versiotakin, joka julkaistaan kun se on valmis.

Kotisivu
:   <http://openarena.ws/>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Android, Linux, Mac, Windows

Asennus
:   Linux-jakeluissa tulee jakelun omista pakettivarastoista. Mac- ja
    Windows-käyttäjät joutunevat noutamaan [asennustiedoston
    kotisivulta](http://www.openarena.ws/download.php?list.61).
    Android-versio löytyy ilmaisena Google Playstä.

Käyttöohjeet
:   Pelille on Wikiassa englanninkielinen
    [käsikirja](http://openarena.wikia.com/wiki/Manual).

{{% wrapper class="psgallery" %}}
-   [Plasma-aseella ammuskelua](/images/OpenArena-01.jpg)
-   [Osui ja upposi](/images/OpenArena-02.jpg)
-   [K-17 on osaksi veriroiskeiden takia
    (asetuksissa ne on mahdollista poistaa käytöstä)](/images/OpenArena-03.jpg)
-   [Sinko kuuluu sinkohippapeleihin](/images/OpenArena-04.jpg)
-   [Singolla saa harvoin täysosumia](/images/OpenArena-05.jpg)
-   [Quad Damagen käyttäjä näkyy sinisenä
    hohteena (aseen teho kolminkertaistuu)](/images/OpenArena-06.jpg)
-   [Perusase on konekivääri, paremmat aseet
    pitää löytää](/images/OpenArena-07.jpg)
-   [Taas kovaa sinkohippaa](/images/OpenArena-08.jpg)
-   [Keltainen haarniska on 50 suojapistettä](/images/OpenArena-09.jpg)
-   [Plasma-ase quad damagen kera on tehokas](/images/OpenArena-10.jpg)
-   [Raidetykki on tehokas, mutta kestää
    kauan latautua seuraavaan laukaukseen](/images/OpenArena-11.jpg)
-   [Kannattaa muista mistä kentän sopesta
    löytyy quad damage](/images/OpenArena-12.jpg)
-   [Jos kuolo kohtaa, 2 sekunnin päästä
    pääsee takaisin peliin](/images/OpenArena-13.jpg)
-   [Singon ampumat raketit lentävät
    hitaahkosti, joskus ne ehtii väistämään](/images/OpenArena-14.jpg)
-   [Kaatuneen pelaajan powerupit tipahtavat
    uudelleenkäytettäviksi, löytäjä saa pitää](/images/OpenArena-15.jpg)
-   [Pelihahmoista Nekoyss on parhaiten
    häiveväritetty](/images/OpenArena-16.jpg)
-   [Kentät voivat olla korkeita](/images/OpenArena-17.jpg)
-   [Kentät voivat olla laajoja (tämä on
    lipunryöstöön tarkoitettu symmetrinen kenttä)](/images/OpenArena-18.jpg)
{{% /wrapper %}}

### Lisätietoja

-   [Englanninkielisen Wikipedian
    artikkeli](http://en.wikipedia.org/wiki/OpenArena)
-   [Esimerkkitiedostoja ja
    käynnistysscripti](http://taleman.fi/OpenArena/)
-   [Linux.fi artikkeli](http://linux.fi/wiki/OpenArena)
-   [Video uusimmasta versiosta
    Youtubessa](http://www.youtube.com/watch?v=5-ZHq1VOtuc)
-   [Openarena Android Tutorial
    Youtubessa](http://www.youtube.com/watch?v=XBcOPYkXvvo)

*Teksti: Taleman* <br />
*kuvakaappaukset: Taleman*

