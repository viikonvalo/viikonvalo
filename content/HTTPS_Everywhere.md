+++
Date = "2013-05-18T21:00:00.000Z"
Title = "HTTPS Everywhere"
Description = "HTTPS Everywhere on selaimen lisäosa, joka suojelee Webissä salakuuntelijoilta. Nimensä mukaisesti lisäosa yhdistää verkkosivuun suojatulla HTTPS-yhteydellä, jos sivuston ylläpitäjä sen sallii."
Week = "3x21"
Number = "125"
Alustat = ["www-selain","www-selain"]
Tagit = ["Verkko","Tietoturva"]
Type = "post"
Author = ""
Pageimage = "valo125-https_everywhere.png"
+++


**HTTPS Everywhere on selaimen lisäosa, joka suojelee Webissä
salakuuntelijoilta. Nimensä mukaisesti lisäosa yhdistää verkkosivuun
suojatulla HTTPS-yhteydellä, jos sivuston ylläpitäjä sen sallii.**

![ ](/images/valo125-https_everywhere.png "fig:valo125-https_everywhere.png")
HTTPS Everywhere on Electronic Frontier Foundationin ohjelma, jolla
pyritään parantamaan ihmisten yksityisyyttä ja turvallisuutta verkossa.
Lisäosalla pyritään vähentämään tilanteita, joissa käyttäjän
arkaluontoista tietoa joutuu ulkopuolisille tai käyttäjää johdetaan
harhaan. Tällaisia tilanteita ovat esimerkiksi salasanan paljastuminen
salakuuntelijalle tai epärehellisen välittäjän hyökkäykset (engl.
man-in-the-middle attack). Lisäosa on tarkoitettu erityisesti niille
henkilöille, jotka joutuvat käyttämään suojaamatonta langatonta tai
muuten epäluotettavaa verkkoa.

Käytännössä HTTPS Everywherella on kaksi tehtävää: Ensimmäisenä
tehtävänä verkkosivuun yhdistetään suojatulla yhteydellä, jos sivuston
ylläpitäjä sen sallii. Käyttäjälle tämä näkyy osoiterivin lukon kuvasta
ja osoitteen https-alkuosasta, jotka kuvastavat SSL- ja TLS-suojausta
(Secure Sockets Layer ja Transport Layer Security). Toisena tehtävänä
verkkosivun varmennetta verrataan HTTPS Everywheren tietokantaan, jotta
väärennökset tunnistettaisiin. Jos varmenteessa huomataan jotakin
poikkeavaa, käyttäjää varoitetaan mahdollisesta uhkasta. Tämä SSL
Observatoryksi nimetty toiminto on käytössä vain HTTPS-Everywheren
Firefox-lisäosassa.

HTTPS Everywheren yksi lisätoiminnoista on evästeiden muuttaminen
turvallisiksi. Webin selaajan ongelmana on, että useat verkkosivun
ylläpitäjät eivät suojaa evästeitään. Tällöin suojatun yhteyden kautta
saatu eväste voi paljastua ulkopuoliselle, jos jokin sivuston osa ei ole
täysin suojattu. Käyttäjän eväste paljastaa suojaamattoman yhteyden
kautta sivustolle sisältönsä, jolloin verkoliikennettä salakuunteleva
ulkopuolinen voi pahimmillaan napata tiedot ja kirjautua käyttäjänä
sisään. HTTPS Everywhere osaa muokata evästeitä siten, että evästeet
eivät jaa sisältöään muuta kuin suojatuilla yhteyksillä.

Käyttäjän on mahdollista hallita HTTPS Everywhere -lisäosaa
osoiterivillä olevasta painikkeesta. Kun painiketta napsauttaa,
käyttäjälle näytetään, mitkä sivustot lisäosa suojaa. Sivuston nimeä
napsauttamalla käyttäjä voi poistaa salauksen käytöstä. Tämä on
hyödyllistä silloin, kun jokin sivu ei toimi lisäosan takia odotetulla
tavalla. Halutessaan käyttäjä voi ottaa myös koko lisäosan pois
käytöstä.

Lisäosan kattavuudessa on rajoitteensa. Suojattu HTTPS-yhteys
muodostetaan vain niihin sivustoihin, jotka on erikseen määritelty
lisäosan sääntölistalla. Toisaalta menettelyn etuna on, että
monimutkaiset uudelleenohjaukset ovat mahdollisia. Lisäksi voidaan
välttää yllättäviä sisällön rikkoutumisia, joita voi syntyä
automaattisesti salausta ehdottavilla ratkaisuilla. Listaa täydennetään
jatkuvasti uusilla säännöillä, ja tällä hetkellä sääntöjä on [muutamia
tuhansia](https://www.eff.org/https-everywhere/atlas/). Säännöllisiä
lausekkeita ymmärtävän käyttäjän on mahdollista kirjoittaa omia
sääntöjään ja lisätä ne lisäosan sääntökansioon.

On muistettava, että HTTPS-suojaus ei piilota verkkoselailijaa täysin
muiden katseilta. Ulkopuolisten on edelleen mahdollista seurata, millä
verkkosivustolla kävijä käy ja kuinka paljon hän siirtää dataa
verkkosivustolta. Tarkkailijalle ei kuitenkaan selviä, mitä tietoa
osapuolten välillä liikkuu ja millä verkkosivuston eri sivuilla käydään.

Kotisivu
:   <https://www.eff.org/https-everywhere>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   Firefox, Chrome

Asennus
:   Lisäosan voi ladata [EFFin
    kotisivuilta](https://www.eff.org/https-everywhere) tai [Chrome Web
    Storesta](https://chrome.google.com/webstore/detail/https-everywhere/gcbommkclmclpchllfjekcdonpmejbdp)

{{% wrapper class="psgallery" %}}
-   [FSFE.org-säännön vihreä teksti
    kertoo, että sääntö on käytössä. Suluissa oleva "partial"
    tarkoittaa, että sivuston kaikkea sisältöä ei voida salata.](/images/HTTPS-Everywhere-1.png)
-   [Chromessa HTTPS Everywheren
    toiminnot ovat rajalliset: lisäasetuksia tai SSL Observatorya ei
    ole.](/images/HTTPS-Everywhere-2.png)
-   [Vaikka Viikonvalo.fi ei tue
    HTTPS-yhteyttä, HTTPS Everywhere osaa suojata sivun ulkopuolelta
    tulevat yhteydet.](/images/HTTPS-Everywhere-3.png)
-   [Lisäosan Firefox-versiossa
    sääntölistaa voidaan tutkia ja muokata.](/images/HTTPS-Everywhere-4.png)
-   [Oikealla napsautuksella on
    mahdollista tutkia säännön rakennetta.](/images/HTTPS-Everywhere-5.png)
-   [HTTPS Everywheren XML-muotoinen
    sääntö sisältää säännöllisiä lausekkeita, jolla osoite muutetaan
    HTTPS-muotoiseksi.](/images/HTTPS-Everywhere-6.png)
-   [Firefox-lisäosan SSL Observatory,
    joka tarkkailee varmenteiden aitoutta.](/images/HTTPS-Everywhere-7.png)
{{% /wrapper %}}

*Teksti ja kuvakaappaukset: Mikko Harhanen*

