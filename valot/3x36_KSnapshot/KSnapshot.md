+++
Date = "2013-08-31T21:00:00.000Z"
Title = "KSnapshot"
Description = "KSnapshot on yksinkertainen ja erittäin kätevä kuvakaappausohjelma Linux- ja Unix-alustoille."
Week = "3x36"
Number = "140"
Alustat = ["Linux","FreeBSD","OpenBSD","NetBSD","Solaris"]
Tagit = ["Kuvat","Apuohjelma"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo140-ksnapshot.png"
+++


**KSnapshot on yksinkertainen ja erittäin kätevä kuvakaappausohjelma
Linux- ja Unix-alustoille.**

![ ](/images/valo140-ksnapshot.png "fig:valo140-ksnapshot.png") KSnapshot on
[KDE](KDE)-työpöytäympäristön mukana tuleva
kuvakaappaustyökalu, jota voi toki käyttää myös muiden
työpöytäympäristöjen kanssa. KSnapshot on käyttöliittymältään selkeä ja
helppokäyttöinen, mutta silti riittävän monipuolinen ja luonteva
toistuvaankin käyttöön. KDE:ssä ohjelman käynnistys on sidottu
PrintScreen-näppäimeen, jolla saa nopeasti otettua kuvakaappauksen
ruudulla olevasta näkymästä.

KSnapshotin käyttöliittymä on selkeä. Näkyvissä on viimeisin otettu
kuvakaappaus, nappula uuden kuvakaappauksen ottamiseen, käyttötilan
valinta, kuvakaappauksen viiveen valinta sekä rastiruudut sille,
halutaanko ikkunoiden reunusten ja hiiren osoittimen näkyvän
kuvakaappauksissa. Lisäksi ikkunan alareunassa ovat nappulat
kuvakaappauksen tallentamiselle, lähettämiselle erilaisiin paikkoihin
sekä sen kopioimiselle leikepöydälle.

Toimintatiloja ohjelmassa on viisi, joilla kuvakaappauksia voi ottaa
joko koko ruudusta, yksittäisestä hiiren osoittimella valitusta
ikkunasta, suorakaiteen muotoisesta alueesta, hiirellä vapaasti
piirretystä mielivaltaisen muotoisesta alueesta taikka jonkin ikkunan
osa-alueesta. Koko ruudun kaappaus on suoraviivaista, mutta kaikkiin
muihin toimintoihin tarvitaan käyttäjältä hiirellä annettavaa syötettä.
Ikkunan valinnassa käyttäjän syötteeksi riittää hiiren pitäminen ikkunan
päällä. Lopuissa kolmessa tilassa KSnapshot ottaa ensin kuvakaappauksen
koko ruudusta ja jää sen jälkeen odottamaan käyttäjän toimia.
Suorakaiteen tai vapaasti piirrettävän valinnan tapauksissa käyttäjä
merkitsee hiirellä näytöllä näkyvästä kuvakaappauksesta haluamansa
alueen, minkä jälkeen enter-näppäimen painalluksella tai hiiren
kaksoisklikkauksella hyväksyy tämän alueen. Kuvakaappauksen voi perua
tässä vaiheessa esc-näppäimellä. Vapaasti valitun alueen ulkopuolelle
jäävä osuus on kuvakaappauksessa läpinäkyvä, jos kuva tallennetaan
johonkin läpinäkyvyyttä tukevaan tiedostomuotoon, esimerkiksi png:ksi.
Ikkunan osan valinta puolestaan tapahtuu niin, että ensin hiirtä
pidetään halutun ikkuna päällä kuvakaappauksen ottamisen ajan ja sen
jälkeen siirtämällä hiirtä kaapatunkuvan päällä valitaan ikkunasta osa,
joka halutaan varsinaiseen kuvakaappaukseen. Ikkunan osa voi olla
esimerkiksi ikkunan valikko, työkalupalkki, työskentelyalue tai muu
ikkunan osa, joka osataan tunnistaa. Hiiren liikkuessa ikkunan päällä
valittavissa olevat osat korostetaan punaisella reunuksella.

Kuvakaappauksen ottamiselle valittavissa oleva viive mahdollistaa
esimerkiksi valikkojen avaamisen ja esiteltävien työkalujen käytön
aloittamisen ennen kuvakaappauksen syntymistä. Kun kuvakaappauksen
ottaminen aloitetaan, KSnapshot piilottaa oman ikkunansa näkyvistä ja
myös ohjelmaluetteloista, jotta se ei itse näy kuvakaappauksessa.
Toimintatilasta riippuen voi puolestaan valita, näkyvätkö ikkunoiden
kehykset tai hiiren osoitin kuvakaappauksissa.

Kaapatun kuvan voi kopioida leikepöydälle, lähettää erilaisiin
kohteisiin tai yksinkertaisesti tallentaa levylle useissa eri
kuvatiedostomuodoissa. Tallennustoiminnossa on pieni, mutta sitäkin
hyödyllisempi toiminto, joka auttaa, kun otetaan useita kuvakaappauksia
samasta aiheesta. Jos kuvakaappaustiedoston nimen lopussa on numero,
osaa ohjelma ehdottaa seuraavan kuvakaappauksen tiedostonimeksi samaa
nimeä, mutta yhtä suuremmalla numerolla. Tämä toiminto on ollut erittäin
hyödyllinen esimerkiksi Viikon VALOn kuvakaappauksia tehdessä.

Ohjelman "Send To..."- eli "Lähetä..."-toiminnolla otetun
kuvakaappauksen voi lähettää suoraan jollekin ohjelmalle, esimerkiksi
[Gimpille](GIMP) tai [Firefoxille](Firefox),
käsiteltäväksi tai näytettäväksi. Kuvan voi valita myös lähetettäväksi
sähköpostilla, jolloin esiin tulevassa ikkunassa voi valita käytettävän
sähköpostiohjelman ja mahdolliset kuvalle tehtävät pienennysoperaatiot.
Lisäksi kuva on mahdollista lähettää suoraan useisiin eri
verkkopalveluihin, kuten Flickr, Picasa ja Facebook tai vaikka [Debianin
screenshots-sivustolle](http://screenshots.debian.net/).

Suurin osa Viikon VALO -projektin kuvakaappauksista on otettu
KSnapshotilla ja tässä käytössä ehkä suurimmaksi puutteeksi on havaittu
se, että tämän artikkelin kuvakaappauksia KSnapshotin käytöstä ei voitu
ottaa KSnapshotilla vaan niiden ottamiseen piti käyttää
[Gimpiä](GIMP).

Kotisivu
:   <http://www.kde.org/applications/graphics/ksnapshot/>

Lisenssi
:   [GNU GPL](GNU_GPL) v.2

Toimii seuraavilla alustoilla
:   Linux ja muut Unixit, joihin on saatavilla KDE-ympäristö.

Asennus
:   KSnapshot on asennettavissa Linux-jakeluihin paketinhallinnan kautta
    ja muihinkin järjestelmiin samaa kautta kuin
    [KDE](KDE)-työpöytäympäristö.

Käyttöohjeet
:   [KSnapshotin
    ohjekirja](http://docs.kde.org/development/en/kdegraphics/ksnapshot/)

{{% wrapper class="psgallery" %}}
-   [KSnapshot ja koko ruudun kuvakaappaus.](/images/ksnapshot-1.jpg)
-   [Kuvakaappauksen vaihtoehtoina valittavissa "Koko näyttö", "Hiiren
    alla oleva ikkuna", "Suorakaiteen muotoinen alue", "Vapaalla kädellä
    piirretty alue" ja "Ikkunan osa"](/images/ksnapshot-2.jpg)
-   [Kuvakaappaus yksittäisestä ikkunasta.](/images/ksnapshot-3.jpg)
-   [Valitaan suorakaiteen muotoinen alue
    kuvakaappaukselle.](/images/ksnapshot-4.jpg)
-   [Suorakaiteen muotoinen kuvakaappaus.](/images/ksnapshot-5.jpg)
-   [Valitaan vapaasti piirretty alue, josta halutaan
    kuvakaappaus.](/images/ksnapshot-6.jpg)
-   [Vapaasti valitun alueen kuvakaappauksessa valitun alueen
    ulkopuolinen tausta on läpinäkyvä.](/images/ksnapshot-7.png)
-   [Gimpillä otettu kuvakaappaus KSnapshotista ottamassa kuvakaappausta
    KSnapshotista kuvakaappausta ottavan Gimpin ikkunan osasta.
    :-)](/images/ksnapshot-8.jpg)
-   [Kuvakaappaus Gimp-ikkkunan osasta.](/images/ksnapshot-9.jpg)
-   [KSnapshotin "Send To..."-toiminnolla kuvan voi lähettää monelle eri
    ohjelmalle käsiteltäväksi, sähköpostilla lähetettäväksi tai suoraan
    erilaisiin verkkopalveluihin.](/images/ksnapshot-10.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


