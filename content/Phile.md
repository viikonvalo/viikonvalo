+++
Date = "2015-04-23T21:00:00.000Z"
Title = "Phile"
Description = "Phile on kevyt tietokannaton sisällönhallintajärjestelmä www-sivustojen ylläpitoon."
Week = "5x16"
Number = "224"
Alustat = []
Tagit = ["PHP","www"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo224-phile.png"
+++


**Phile on kevyt tietokannaton sisällönhallintajärjestelmä
www-sivustojen ylläpitoon.**

![ ](/images/valo224-phile.png "fig:valo224-phile.png") Phile on
[PicoCMS](PicoCMS):n tapaan tekstitiedostoilla, ilman
tietokantaa, toimiva websisällönhallintajärjestelmä. Sivut kirjoitetaan
Markdown-kielellä ja tallennetaan palvelimelle tiedostoina. Phile onkin
PicoCMS:stä haarautettu, eli forkattu, ohjelmisto. Philen kehitys alkoi,
kun osa käyttäjistä halusi osallistua PicoCMS:n kehitykseen ja nopeuttaa
sen jo pysähtynyttä kehitysprosessia. Phile muistuttaa PicoCMS:ää
toimintaperiaatteeltaan, hakemistorakenteeltaan ja lisäosien käytöltään.
Philen toteutus on kuitenkin tehty jossain määrin uusiksi ja tekijöiden
omien mittausten mukaan se on jonkin verran PicoCMS:ää nopeampi.

PicoCMS:ään verrattuna uutta Philessä on muun muassa käytetty
oliopohjainen ohjelmointityyli ja tapahtumia (event) käyttävä toteutus.
Lisäksi PicoCMS:ssä sisäänrakennettuina olleet Markdown-kielen parseri
ja Twig-sivupohjakoneisto on siirretty oletuksena käytössä oleviksi
lisäosiksi. Näiden siirtäminen lisäosiksi mahdollistaa muiden
vaihtoehtoisten toteutusten käyttämisen helposti näiden sijasta.
Markdownin tilalle voi halutessaan vaihtaa esimerkiksi
[Tekstile](https://en.wikipedia.org/wiki/Textile_%28markup_language%29)-kielen
tai Twig-sivupohjat voi korvata vaikka
[Smarty](http://www.smarty.net/docs/en/)-pohjilla.

Erilaisen toteutuksen takia PicoCMS:n lisäosat eivät sovi suoraan
Phileen, mutta Phileen löytyy melko kattava kokoelma omia
[lisäosia](https://github.com/PhileCMS/Phile/wiki/%5BCOMMUNITY%5D-Plugins),
kuten PhileUsers (käyttäjänhallinta), PhileMarkdownEditor (selaimella
tapahtuvaan sisällön muokkaukseen), PhileTags (asiasanojen lisäämiseen
sivuille), PhilePaginator (artikkelien blogimaiseen sivutukseen), sekä
useita muita.

Kotisivu
:   <http://philecms.com/>

Lisenssi
:   [MIT](MIT)

Toimii seuraavilla alustoilla
:   PHP

Asennus
:   Ohjelmisto on ladattavissa ohjelman kotisivuilta tai
    GitHub-palvelusta ja sen voi asentaa www-palvelimelle, jolla voi
    käyttää PHP-kieltä (Versio 5.4 tai uudempi). Philen voi asentaa joko
    lataamalla sen zip-pakettina tai käyttämällä
    [composer](https://getcomposer.org/)-ohjelmistoa.

{{% wrapper class="psgallery" %}}
-   [Philen kotisivu](/images/phile-1.jpg)
-   [Philen ensimmäinen lataus](/images/phile-2.jpg)
-   [Asennetun Philen oletusetusivu opastaa sen käyttöön.](/images/phile-3.jpg)
-   [PhileMarkdownEditor on yksinkertainen web-käyttöliittymä sivujen muokkaamiseen ja uusien luomiseen.](/images/phile-4.jpg)
-   [Viikon VALO -sivusto Philellä toteutettuna. Mukana mm. RSS-, tags- ja haku-lisäosat.](/images/phile-5.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


