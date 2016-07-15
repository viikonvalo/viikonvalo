+++
Date = "2013-04-06T21:00:00.000Z"
Title = "Walma"
Description = "Walma on vapaa web-pohjainen yhteiskäyttöinen valkotaulusovellus."
Week = "3x15"
Number = "119"
Alustat = ["Kaikki alustat","Linux","Mac OS X","Windows"]
Tagit = ["Palvelinohjelma","Opetus"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo119-walma.png"
+++


**Walma on vapaa web-pohjainen yhteiskäyttöinen valkotaulusovellus.**

![ ](/images/valo119-walma.png "fig:valo119-walma.png") Walma Whiteboard on
suomalaisen [Opinsys Oy](http://www.opinsys.fi/):n tekemä erityisesti
opetuskäyttöön suunniteltu sähköinen valkotaulu, jolla opettaja ja
opiskelija voivat yhdessä piirtää samalle piirtoalustalle erilaisilla
laitteilla. Opettaja voi esimerkiksi käyttää luokan edessä
interaktiivista kosketustaulua ja opiskelijat heille jaettuja
tablettilaitteita. Walmaa voi toki käyttää myös muussa yhteistä
piirtämistä tarvitsevassa käytössä. Walma on alustariippumaton ja toimii
moderneilla selaimilla, kuten Mozillan Firefoxilla ja Googlen
Chrome-/Chromium-selaimilla. Tablettilaitteissa sovellus toimii ainakin
Firefox-selaimella Androidissa ja Safari-selaimella iPadissa.

Walma on käyttöliittymältään hyvin yksinkertainen ja pelkistetty.
Varsinaisia työkaluja on kolme: vapaa piirtäminen, suora viiva sekä
pyyhekumi. Piirtojäljen värin voi valita kahdestatoista ja työkalun
paksuuden viidestä eri vaihtoehdosta. Verkkopalveluna Walman
toimintaidea on samantapainen kuin [Etherpadin](Etherpad).
Uuden piirroksen luominen avaa selaimen uuteen yksilölliseen
url-osoitteeseen, jonka jakamalla voi kutsua muita osallistumaan
yhteisen piirroksen tekemiseen. Piirrosten osoitteet ovat oletuksena
voimassa tunnin, jonka jälkeen osoite vapautetaan käytettäväksi
uudelleen. Piirretyn kuvan voi kuitenkin merkitä pysyväksi, jolloin se
säilyy käytettävissä pidempäänkin. Piirtoalustalle voi ladata
taustakuvan, jonka päälle piirtäminen tapahtuu. Piirrosjälki tulee
taustakuvan päälle kuin omalle kalvolleen, eli piirtäminen ja
piirrosjäljen pyyhkiminen eivät vaikuta taustakuvaan. Tämä on
hyödyllinen ominaisuus esimerkiksi, jos opetuksessa halutaan jostain
kuvasta korostaa asioita piirtämällä sen päälle. Valmis kuva on
mahdollista julkaista ladattavaksi ja tallennettavaksi png-muodossa.

Walma on toteutettu asiakaspäässä html5:n canvas- ja
websocket-tekniikoilla ja palvelinosuuden toteutus on tehty
[Node.js](http://nodejs.org/):llä ja
[CoffeeScript](http://coffeescript.org/)-kielellä. Walman lähdekoodi on
ladattavissa [Github](https://github.com/opinsys/walma)-palvelusta,
josta löytyvät myös asennusohjeet.

Walman hyödyllisimpiä ominaisuuksia ovat yksinkertainen käyttöliittymä,
helppo jakaminen sekä yhteismuokkaaminen.

Kotisivu
:   <http://walma.opinsys.fi/>

Lisenssi
:   [GNU GPLv](GNU_GPL)2+

Toimii seuraavilla alustoilla
:   Selaimet

Asennus
:   Walma on palvelimelle asennettava ohjelmisto, jonka asennettava
    lähdekoodi löytyy [Githubista](https://github.com/opinsys/walma).

Demo
:   <http://walmademo.opinsys.fi>

Esimerkkipirros
:   <http://walmademo.opinsys.fi/Ld>

{{% wrapper class="psgallery" %}}
-   [Walma vasta avattuna.](/images/walma-1.png)
-   [Sama Walma-osoite vasemmalla Firefoxilla ja oikealla
    Chromium-selaimella avattuna. Piirtotyökalulle on valittavissa viisi
    eri paksuutta ja kaksitoista eri väriä.](/images/walma-2.png)
-   [Piirretyt kuviot välittyvät saman tien piirtotapahtuman päätyttyä
    palvelimen kautta kaikille piirtämiseen osallistuville selaimille.
    Suoran viivan piirtämiseen tarkoitetulla työkalulla ovat käytössä
    samat valinnat kuin piirtotyökalulla.](/images/walma-3.png)
-   [Myös pyyhekumityökalun paksuus on valittavissa samoin kuin
    piirtotyökaluilla.](/images/walma-4.png)
-   [Pyyhekumi käytössä.](/images/walma-5.png)
-   [Siirtotyökalulla voi siirtää piirtoalustaa, jos se on suurempi kuin
    selainikkuna. Asetusvalikosta voi muuttaa piirroksen pysyväksi,
    tyhjentää sen, laittaa piirtoalustalle taustakuvan tai julkaista
    piirroksen. Kuvan piirros ei ole vielä pysyvä vaan poistuu tunnin
    epäaktiivisuuden jälkeen automaattisesti.](/images/walma-6.png)
-   [Pysyväksi merkityt kuvat säilyvät palvelimella käytettävissä
    pidempään.](/images/walma-7.png)
-   [Omalta koneelta voi ladata Walmaan taustakuvan, jonka päälle
    piirtäminen tapahtuu.](/images/walma-8.png)
-   [Piirretyn kuvan voi julkaista ladattavaksi
    png-muodossa.](/images/walma-9.png)
-   [Walma antaa linkin julkaistuun kuvaan.](/images/walma-10.png)
-   [Julkaistu png-kuva.](/images/walma-published.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


