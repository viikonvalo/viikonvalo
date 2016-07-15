+++
Date = "2013-07-20T21:00:00.000Z"
Title = "SMS Backup+"
Description = "SMS Backup+ on avoimen lähdekoodin ohjelma tekstiviestien varmuuskopiointiin Android-laitteelta."
Week = "3x30"
Number = "134"
Alustat = ["Android"]
Tagit = ["Viestintä"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo134-smsbackupplus.png"
+++


**SMS Backup+ on avoimen lähdekoodin ohjelma tekstiviestien
varmuuskopiointiin Android-laitteelta.**

![ ](/images/valo134-smsbackupplus.png "fig:valo134-smsbackupplus.png") SMS
Backup+ on ohjelma, jolla Android-puhelimen käyttäjä voi varmuuskopioida
tekstiviestinsä, multimediaviestinsä ja puheluhistoriansa
sähköpostipalvelimelle. Tekstiviestien ja puhelinhistorian palautus
takaisin puhelimeen onnistuu myös. Multimediaviestejä voi
varmuuskopioida vain Android 2.x-laitteilla ja niitä ei voida ainakaan
vielä palauttaa takaisin puhelimeen. Tiedot kopioidaan palvelimelle
sähköpostiviestien muodossa, jolloin niitä voidaan tarkastella myös
sähköpostiohjelmalla. Ohjelma sisältää myös asetukset automaattiseen
varmuuskopiointiin.

Oletuksena ohjelma käyttää sähköpostipalveluna Googlen Gmailia, johon se
osaa kirjautua puhelimeen jo syötettyä Google-tiliä käyttäen, kun
käyttäjä antaa siihen luvan. Koska ohjelma siirtää tietoa
sähköpostipalvelimelle IMAP-protokollan avulla, täytyy IMAP-tuki olla
päällä Gmailin asetuksista. Vaihtoehtoisesti sähköpostipalveluna voi
käyttää mitä tahansa IMAP-tiedonsiirtoa tukevaa sähköpostipalvelua.
Tällöin ohjelman asetuksiin pitää syöttää palvelimen tiedot sekä
käyttäjän tunnus ja salasana.

Oletuksena teksti- ja multimediaviestit kopioidaan Gmail-palveluun
tunnisteella (label) "SMS" ja puheluhistoria tunnisteella "Call log",
mutta nämä voi käyttäjä halutessaan vaihtaa haluamikseen. Muissa
sähköpostipalveluissa tunnisteita vastaavat IMAP-palvelun kansiot.
Teksti- ja multimediaviestit kopioidaan palvelimelle
sähköpostiviesteinä, joiden otsikko on muotoa "SMS with Vilho Valo" tai
"SMS with +358..." riippuen siitä, ovatko viestien toisten osapuolten
yhteystiedot tallennettuina puhelimeen. Samoin sähköpostiviestin
lähettäjä- ja vastaanottajakenttiin merkitään osapuolten oikeat
sähköpostiosoitteet, jos sellaiset on yhteystietoihin tallennettu. Näin
sähköpostiohjelmasta käsin on siis mahdollista vastata viesteihin
suoraan. Multimediaviestien liitteet näkyvät sähköpostiviestien
liitteinä. Puheluhistoria talletetaan niin ikään sähköpostiviesteinä,
joiden otsikosta ja lähettäjä- sekä vastaanottajatiedoista käy ilmi
puhelun osapuolet. Viestien sisältöinä on tieto puhelun kestosta,
puhelinnumero sekä tieto siitä, oliko kyseessä lähtevä, tuleva vai
vastaamaton puhelu. Vaihtoehtoisesti puheluhistorian voi valita myös
tallentumaan valittuun Google-kalenteriin tapahtumina.

Ohjelmasta on mahdollista valita esimerkiksi vain johonkin
yhteystietoryhmään kuuluvien henkilöiden kanssa käydyt keskustelut
varmuuskopioitavaksi. Luotavien sähköpostiviestien otsikkoon voi
halutessaan lisätä oman alkuosan, jolloin ne on helpompi erotella
muista. Viesteistä on myös mahdollista valita, merkitäänkö ne
automaattisesti luetuiksi vai näkyvätkö ne uusina viesteinä.

Varmuuskopiointi on mahdollista myös automatisoida tapahtumaan joko
säännöllisin väliajoin, esimerkiksi kahden tunnin välein, tai vaikka
saapuvien viestien yhteydessä. Automaattinen kopiointi voidaan myös
rajoittaa tapahtumaan vain langattoman lähiverkon kautta.

Kotisivu
:   <https://github.com/jberkel/sms-backup-plus>
:   [F-Droid-sivu](https://f-droid.org/repository/browse/?fdfilter=sms%20backup&fdid=com.zegoggles.smssync)
:   [Google Play
    -sivu](https://play.google.com/store/apps/details?id=com.zegoggles.smssync)

Lisenssi
:   [Apache2](http://directory.fsf.org/wiki/License:Apache2.0)

Toimii seuraavilla alustoilla
:   Android

Asennus
:   Ohjelma löytyy sekä [F-Droid](F-Droid)-palvelusta että
    Googlen omasta Play-kaupasta.

{{% wrapper class="psgallery" %}}
-   [SMS Backup+ osaa varmuuskopioida ja palauttaa tekstiviestit ja
    puheluhistorian sekä varmuuskopioida multimediaviestit Android
    2.x-laitteista.](/images/smsbackupplus-1.png)
-   [Asetuksista voi valita, mitä varmuuskopioidaan, millä tunnisteilla
    ja kuinka paljon kerrallaan.](/images/smsbackupplus-2.png)
-   [Puheluhistoriasta voi valita kopioitavaksi vain tietyn tyyppiset
    puhelut.](/images/smsbackupplus-3.png)
-   [Oletuksena käytettävän Gmail-tilin sijasta voi käyttää mitä tahansa
    IMAP-palvelinta.](/images/smsbackupplus-4.png)
-   [Palautusasetukset.](/images/smsbackupplus-5.png)
-   [Automaattisen varmuuskopioinnin asetukset. Säännöllisesti,
    saapuneiden jälkeen, vain langattomassa lähiverkossa, muiden
    ohjelmien laukaisemana.](/images/smsbackupplus-6.png)
-   [Ensimmäisen varmuuskopioinnin aloitus.](/images/smsbackupplus-7.png)
-   [Varmuuskopiointi alkaa.](/images/smsbackupplus-8.png)
-   [Varmuuskopiointi käynnissä.](/images/smsbackupplus-9.png)
-   [Viestit tallentuvat
    sähköpostiviesteinä.](/images/smsbackupplus-10.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


