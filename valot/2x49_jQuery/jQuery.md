+++
Date = "2012-12-01T22:00:00.000Z"
Title = "jQuery"
Description = "jQuery on pieni ja kätevä kirjasto Javascript-sovellusten kirjoittamiseen."
Week = "2x49"
Number = "101"
Alustat = []
Tagit = ["Verkkoselaimet","Ohjelmointi"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo101-jquery.png"
+++


**jQuery on pieni ja kätevä kirjasto Javascript-sovellusten
kirjoittamiseen.**

![ ](/images/valo101-jquery.png "fig:valo101-jquery.png") Yksi suosituimmista
Javascript-kirjastoista on jQuery, joka helpottaa huomattavasti
Javascript-ohjelmien kirjoittamista. jQuery helpottaa erityisesti
html-sivun sisällön manipulointia. Sen keskeisenä ideana on, että
html-dokumentin sisällöstä muodostuvan solmuja, html-elementtejä, voi
valita css-tyylikielen valitsimia muistuttavista
[valitsimista](http://api.jquery.com/category/selectors/)
muodostettavilla hakulausekkeilla. Hakulausekkeilla löytyneiden
elementtien joukolle voidaan sitten suorittaa erilaisia toimintoja ja
manipulaatioita. Esimerkiksi kaikkien dokumentista löytyvien linkkien
piilottaminen tapahtuu komennolla:
```javascript
jQuery('a').hide()
```
Toinen jQueryn
kantava idea on mahdollisuus elementtijoukolle suoritettavien
toimintojen ketjuttamiseen. Esimerkiksi edellisellä komennolla
piilotetut linkit voidaan näyttää ja niille voidaan samalla lisätä
luokka "linkki" komennolla:
```javascript
jQuery('a').show().addClass('linkki')
```
Elementeille voidaan suorittaa myös erilaisia animoituja
[efektejä](http://api.jquery.com/category/effects/), kuten näyttäminen
ja piilottaminen häivytysefektillä tai ylhäältä alas "rullaamalla".

Html-sisällön manipuloinnin lisäksi jQuery sisältää useita muita
toimintoja, jotka helpottavat Javascript-ohjelmien tekoa. Näitä ovat
esimerkiksi [ajax-kutsujen](http://api.jquery.com/category/ajax/)
tekemiseen tarkoitetut funktiot, html-elementteihin liitettävien
[tapahtumakäsittelijöiden](http://api.jquery.com/category/events/)
lisäämiseen ja poistoon käytettävät funktiot sekä erilaiset
tietorakenteiden käsittelyyn käytettävät
[apufunktiot](http://api.jquery.com/category/utilities/), kuten
<tt>jQuery.extend()</tt>, <tt>jQuery.map()</tt> ja <tt>jQuery.merge()</tt>.

Yhtenä jQuery-kirjaston käytön etuna voidaan mainita selainriippumaton
ohjelmointi. Vaikka yleisimmät www-selaimet ovat alkaneet kunnioittaa
entistä enemmän standardeja, toimivat varsinkin niiden vanhempien
versioiden Javascript-toteutukset silti joissain tilanteissa hieman eri
tavoin. jQuery pyrkii piilottamaan näitä eroja ohjelmoijalta, jolloin
ohjelmoijan ei tarvitse kaikissa tilanteissa ottaa erikseen huomioon
poikkeavasti toimivia selaimia.

jQuery on toteutettu helposti laajennettavaksi ja sille onkin toteutettu
lukuisa joukko lisäosia,
[plugineja](http://archive.plugins.jquery.com/). Luultavasti kuuluisin
jQuery-lisäosa on käyttöliittymän rakentamiseen tarkoitettu
[jQuery-ui](http://jqueryui.com/), joka sisältää joukon
käyttöliittymäelementtejä (nappulat, dialogi-ikkunat, välilehdet,
liukusäätimet, raahattavat elementit, jne.), jotka ovat käytettävissä
helposti jQueryn filosofian mukaisesti. jQuery-lisäosina on toteutettu
muun muassa suuri joukko erilaisia web-sivulle laitettavia
kuvagalleriasovelluksia. Myös Viikon VALO -sivuston kuvakaappausten
näyttämiseen tehty [galleria](https://github.com/pesasa/psgallery) on
toteutettu jQuery-lisäosana.

Html5-pohjaisten mobiilisovellusten rakentamiseen on mahdollista käyttää
myös jQuery-pohjaista [jQuery Mobile](http://jquerymobile.com/)
-kirjastoa. Kirjasto sisältää valmiit välineet mobiililaitteisiin
optimoitujen valikoiden, nappuloiden, liukusäätimien sekä muiden
elementtien luomiseen.

Kotisivu
:   <http://jquery.com/>

Lisenssi
:   [MIT](https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt)

Toimii seuraavilla alustoilla
:   Selaimet

Asennus
:   Javascript-tiedosto on ladattavissa jQuery-projektin kotisivuilta.
    Sitä on mahdollista käyttää myös esimerkiksi [Googlen tarjoamana
    palveluna](https://developers.google.com/speed/libraries/devguide#jquery).

Kuvagallerialisäosia
:   <http://inspirationfeed.com/resources/tools/top-15-handy-jquery-image-gallery-plugins/>
:   <http://slodive.com/web-development/jquery-gallery/>
:   <http://ibrandstudio.com/inspiration/30-best-jquery-image-gallery-plugins-portfolio-website>

{{% wrapper class="psgallery" %}}
-   [Esimerkki jQueryn käytöstä html-sivun sisällön
    muokkaamiseen.](/images/jquery-1.png)
-   [Esimerkki häivytysefektin lisäämisestä click-tapahtuman
    yhteyteen.](/images/jquery-2.png)
-   [Esimerkki toimintojen lisäämisestä
    mousemove-tapahtumaan.](/images/jquery-3.png)
-   [Päivämäärävalitsin jQuery-ui-kirjastolla.](/images/jquery-4.png)
-   [jQuery-ui-kirjastolla toteutettu
    dialogi-ikkuna.](/images/jquery-5.png)
-   [jQuery-ui:n liukusäätimiä.](/images/jquery-6.png)
-   [jQuery Mobilen liukusäätimiä.](/images/jquery-7.png)
-   [jQuery Mobilen listaelementti
    esikatselukuvilla.](/images/jquery-8.png)
-   [jQuery Mobile ja kokoontaittuvat alilistat.](/images/jquery-9.png)
-   [jQuery Mobile ja dialogi-ikkuna.](/images/jquery-10.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

