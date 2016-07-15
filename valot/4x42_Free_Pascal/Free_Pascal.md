+++
Date = "2014-10-11T21:00:00.000Z"
Title = "Free Pascal"
Description = "Free Pascal on avoimeen lähdekoodiin perustuva Pascal-ohjelmointikielen käännin. Free Pascal toimii useissa eri käyttöjärjestelmissä ja eri suorittimilla."
Week = "4x42"
Number = "198"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","Haiku","iOS","MorphOS","Nintendo DS","Nintendo GBA","Nintendo Wii","OS/2","WinCE"]
Tagit = ["DOS","Ohjelmointi"]
Type = "post"
Author = "Taleman"
Pageimage = "valo198-free_pascal.png"
+++


**Free Pascal on avoimeen lähdekoodiin perustuva
Pascal-ohjelmointikielen käännin. Free Pascal toimii useissa eri
käyttöjärjestelmissä ja eri suorittimilla.**

![ ](/images/valo198-free_pascal.png "fig:valo198-free_pascal.png") Free Pascal
kääntää Object Pascalia ja muutamia Pascalin murteita, muun muassa Turbo
Pascalia, Delphiä ja Mac Pascalia.

Pascal oli alun perin proseduraalinen ohjelmointikieli. [Niklaus
Wirth](https://fi.wikipedia.org/wiki/Niklaus_Wirth) kehitti sen 1960- ja
1970-lukujen vaihteessa Algol-kielen pohjalta erityisesti opetuskäyttöä
ajatellen. Ohjelmointikieli on nimetty matemaatikko [Blaise
Pascalin](https://fi.wikipedia.org/wiki/Blaise_Pascal) mukaan. Pascalia
hyvin lähellä ovat Wirthin myöhemmin kehittämät ohjelmointikielet
Modula-2 ja Oberon, joita voidaan pitää Pascalin "jälkeläisinä". Pascal
oli suosittu kieli opetuskäytössä 1970-luvulta 1990-luvun alkupuolelle
asti kunnes C-kieli syrjäytti sen.

Pakollinen esimerkki, eli Hello World Pascalilla. Tässä tosin sanotaan
"Goodbye, World!", mutta [tämä koodi löytyi Rosetta
Codesta](http://rosettacode.org/wiki/Hello_world/Text#Pascal) enkä
halunnut muokata.

```
program byeworld;
begin
  writeln('Goodbye, World!');
end.
```

{{% wrapper class="rightimage" %}}
![Blaise Pascalin kehittämä ensimmäinen
mekaaninen laskin](/images/FreePascal-Arts_et_Metiers_Pascaline_dsc03869.jpg
"fig:Blaise Pascalin kehittämä ensimmäinen mekaaninen laskin ")
{{% /wrapper %}}
Jos kokeilet tuota ohjelma graafisessa työpöytäympäristössä saattaa
ohjelman ikkuna sulkeutua välittömästi ohjelman suorituksen päätyttyä,
jolloin ei ehdi näkemään mitä ohjelma tulosti ruudulle. Tähän auttaa
ennen `end.` -riviä lisätty `readln;` -komento. Tällöin ohjelma jää
odottamaan Enter-näppäimen painallusta, ja
loppuu vasta sitten.

Ammattikäyttöön Pascal-kieli tuli Borlandin Turbo Pascal -kielen
ansiosta 1980-luvulla. Silloiset Turbo Pascalin ylivoimaiset
ominaisuudet aiheuttivat sen, että muut ohjelmointikieliä tekevät
ohjelmistotalot luopuivat vähitellen omista Pascal-kääntäjistään.

Pascal-kielen pohjalta on kehitetty Object Pascal lisäämällä Pascaliin
olio-ohjelmointiin liittyviä ominaisuuksia. Lisäksi siihen kuuluvat
poikkeukset ja niiden hallinta. Ohjelman voi jakaa käännösyksiköihin
helpottamaan isojen ohjelmistoprojektien koostamista. Alkuperäinen
Pascal oli tarkoitettu ohjelmoinnin opetukseen, eikä siinä ollut mukana
ammattiohjelmoijien tarvitsemia ominaisuuksia. Free Pascalissa ei tätä
puutetta ole, sillä voi koodata pelejäkin, esimerkiksi [Slot Cars: The
Video
Game](http://wiki.freepascal.org/Projects_using_Lazarus#Slot_Cars_-_The_Video_Game),
josta on [<http://www.youtube.com/watch?v>=-m8v2txY2Ck video traileri].

Kuten Turbo Pascal on Free Pascalkin hyvin nopea käännin.
Kuvakaappauksissa oleva pidempi testiohjelma kääntyi viidessä
sadasosasekunnissa. Laajemmat ohjelmat vievät enemmän aikaa, mutta ne
taas voi jakaa pienempiin käännösyksiköihin ja useimmiten muutetaan vain
yhtä käännösyksikköä käännöskertojen välillä, jolloin vain se yksi
käännösyksikkö on käännettävä uudestaan ja linkattava suorituskelpoinen
ohjelma siitä ja muista jo valmiiksi käännetyistä osista.

Mukana tulee ohjelmankehitysympäristö eli IDE, joka käynnistyy
komennolla `fp`. IDE on melko samanlainen kuin Turbo Pascalin vastaava
oli aikoinaan. Semmoinen parannus on, että hiiri toimii, eli ei tarvita
niin paljoa pikanäppäinten käyttöä.

Free Pascalille pitää kertoa mitä murretta käännettävän ohjelman on
tarkoitus olla. Tämä tehdään komentorivillä tarkentimella `-M` tai
IDE:ssä valikossa `Options | Compiler | Compiler Mode`.

Free Pascal osasi kääntää vuonna 1995 Turbo Pascal 7:lla tekemäni
ohjelman. Silloin oli käytössä DOS, nyt ohjelmaa sai ajettua Linuxissa.
Aika ei ole syönyt koodiani piloille. Sen verran piti säätää, että
disketiltä Linuxiin lukemieni tiedostojen nimet oli kaikki isoilla
kirjaimilla. Ohjelmakoodissa taas käännösyksiköt oli pienellä paitsi iso
alkukirjain. Koska Linuxissa tiedostojen nimissä isoilla kirjaimilla on
väliä, piti tiedostojen nimet korjata.

Free Pascalia hyödyntävä ja Free Pascalilla toteutettu graafinen
kehitysympäristö on [Lazarus](http://lazarus.freepascal.org).

Kotisivu
:   <http://freepascal.org>

Lisenssi
:   [GNU GPL](GNU_GPL)

Toimii seuraavilla alustoilla
:   DOS, FreeBSD, Haiku, Linux, Mac OS X/iOS/Darwin, MorphOS, Nintendo
    GBA, Nintendo DS, Nintendo Wii, OS/2, WinCE, Win32, Win64.

Asennus
:   Linux-jakeluissa tulee jakelun omista pakettivarastoista. Muille
    käyttöjärjestelmille löytyy asennustiedosto Free Pascalin
    webbisivuilta.

Käyttöohjeet
:   Webbisivuilla on paljon ohjeita:
    <http://www.freepascal.org/docs.var>.
:   Free Pascalin wikissä on suomenkielisiäkin sivuja:
    <http://wiki.freepascal.org/Main_Page/fi>
:   Tietoa Pascal-kielestä suomeksi Webissä:
    <http://www.cs.tut.fi/~jkorpela/Pascal.html>
:   Ohjelmointiputkan Pascal-ohjelmointi:
    <http://www.ohjelmointiputka.net/oppaat/opas.php?tunnus=pascal01>
:   SchoolFreewaren opetusmateriaalia ja videoita:
    <http://www.schoolfreeware.com/Free_Pascal_Tutorials.html>
:   Youtubesta löytyy opetusvideoita.

{{% wrapper class="psgallery" %}}
-   [Hello World käännetään ja suoritetaan](/images/FreePascal-02.png)
-   [Käännettävä ohjelma
    http://rosettacode.org/wiki/Roman_numerals/Decode#Delphi.2FPascal,
    käännösaika 5 sadasosasekuntia](/images/FreePascal-01.png)
-   [Mukana on pääteikkunassa tai konsolilla toimiva
    IDE](/images/FreePascal-03.png)
-   [Ohjelmakoodia vuodelta 1995, toimii Free
    Pascalissa](/images/FreePascal-04.png)
{{% /wrapper %}}

Lisätietoja

*Teksti: Taleman* <br />
*Kuvakaappaukset: Taleman* <br />
*Kuvituskuva: David Monniaux* <br />
(CC-BY-SA, <https://commons.wikimedia.org/wiki/File:Arts_et_Metiers_Pascaline_dsc03869.jpg>)


