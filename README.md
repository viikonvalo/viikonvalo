Viikon VALO
===========

**Viikon VALO -sivusto on siirretty Hugo-alustalle.** Tämä repository on uuden sivuston
mukainen tiedostovarasto.

[Viikonvalo.fi]-sivuston materiaali.

Viikon VALO -projekti esittelee viikoittain jonkin vapaan avoimen lähdekoodin ohjelman (VALOn), vapaan materiaalilähteen taikka muun näihin läheisesti liittyvän asian. Projekti alkoi vuoden 2011 alussa.

Lisenssi
--------
Esittelyiden lisenssinä on mahdollisimman laajan uudelleenkäytettävyyden takaamiseksi
pääsääntöisesti [CC-by], ellei artikkelissa ole toisin mainittu. Esimerkiksi osassa
kuvituksista saattaa olla käytössä jokin toinen lisenssi, joka on mainittu artikkelin yhteydessä.

CC-by-lisenssi, eli Creative Commons Nimeä 4.0, tarkoittaa, että voit vapaasti:
-  **Jakaa** — kopioida aineistoa ja levittää sitä edelleen missä tahansa välineessä ja
   muodossa
-  **Muunnella** — remiksata ja muokata aineistoa sekä luoda sen pohjalta uusia aineistoja
   missä tahansa tarkoituksessa, myös kaupallisesti.

Lisenssinantaja ei voi peruuttaa näitä oikeuksia niin kauan kuin noudatat lisenssin ehtoja.


Projektiin osallistuminen
-------------------------
Projektiin voi osallistua monella tapaa:

1.  **Ehdottamalla ohjelmaa** Viikon VALOksi  
    Voit lisätä VALO-toiveesi GitHubiin uutena issuena. Kirjoita issuen otsikoksi ohjelman
    tai esiteltävän projektin nimi, tekstisisältöön pieni kuvaus ohjelmasta sekä mielellään
    linkki ohjelman tai projektin kotisivulle.
    Voit myös esittää toiveen esiteltävästä viikosta, jos jokin viikko on mielestäsi erityisen sopiva.
2.  **Kirjoittamalla** VALOlle esittely  
    Esittelyitä voi kirjoittaa useammalla tavalla:
    - Kirjoita esittely ja lähetä sähköpostilla osoitteeseen <valo@viikonvalo.fi>.
      Sivuston ylläpito tekee julkaisua varten tarvittavat muokkaukset.
    - Kloonaa tämä repository, kopioi esittelypohjakansio esiteltävän VALOn mukaiselle
    nimelle, kirjoita esittely ja lisää haluamasi kuvakaappaukset, muista lisätä nimesi tai
    nimimerkkisi, lähetä *pull request*.  
    Ylläpito voi tarvittaessa tehdä julkaisemista varten tarvittavia muokkauksia ja
    esimerkiksi lisäillä kuvakaappauksia.
3.  **Oikolukemalla** ja **korjaamalla** virheitä tai epätarkkuuksia esittelyissä.  
    Joko lisäämällä uusi issue sopivalla labelilla tai lähettämällä *pull request*
    korjatusta versiosta.
4.  **Levittämällä** tietoa Viikon VALOista omaan sosiaaliseen ympäristöösi.

Kansiorakenne
-------------

Viikon VALOa julkaistaan käyttämällä staattisia www-sivuja generoivaa [Hugo-ohjelmistoa](http://gohugo.io/).
Tämän repositoryn kansiorakenne vastaa Hugo-projektin rakennetta. Sen lisäksi on kansio(t) materiaalin
muokkaamiselle.

### config.toml
Sivuston asetukset Hugoa varten.

### valot/

Viikon VALO -artikkelit ja niiden materiaalit viikoittain järjestettyinä.
Jokaisen viikon kansiossa ovat seuraavat tiedostot ja alikansiot:
- *.md (markdown, Hugo-metatiedoilla),
- images/ (kuvat),
- svg/ (alkuperäiset svg-muotoiset bannerikuvat)

### static/
Sivuston staattiset tiedostot, kuten kuvat ja ladattavat tiedostot.
- images/ (kuvat)
- files/ (muut tiedostot (pdf, ggb,...))

### content/
Julkaistut sivut, eli artikkelit kopioituina viikkokansioista sekä muut staattiset sivut.
- *.md

### layouts/
Hugon ulkoasutiedostot.
- shortcodes/ (Hugon "makroja")

### themes/
Hugon teemoitus, Viikon VALOn oma teema.

### tools/
Viikon VALOn omia työkaluja.

### svg/
Kuvituksen alkuperäiset svg-muotoiset kuvat.

[Viikonvalo.fi]: http://viikonvalo.fi (Viikon VALO)
[CC-by]: https://creativecommons.org/licenses/by/4.0/deed.fi (CC-by)
