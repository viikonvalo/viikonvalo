+++
Date = "2013-11-30T22:00:00.000Z"
Title = "JSXGraph"
Description = "JSXGraph on JavaScript-kirjasto interaktiivisten geometristen konstruktioiden tekemiseen www-sivuille."
Week = "3x49"
Number = "153"
Alustat = []
Tagit = ["Verkkoselaimet","JavaScript","Ohjelmointi","Piirto","Opetus","Opiskelu","Matematiikka"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo153-jsxgraph.png"
+++


**JSXGraph on JavaScript-kirjasto interaktiivisten geometristen
konstruktioiden tekemiseen www-sivuille.**

![ ](/images/valo153-jsxgraph.png "fig:valo153-jsxgraph.png") JSXGraph on
monipuolinen geometriakirjasto JavaScript-kielelle. Sillä on mahdollista
piirtää erilaisia geometrisia konstruktioita ja tehdä niistä
interaktiivisia. Kuvien eri elementit voiva riippua toisistaan, jolloin
esimerkiksi ympyrän keskipisteen siirtäminen vaikuttaa ympyrään ja
kaikkiin muihin siitä riippuviin kuvioihin. JSXGraphilla voidaan siis
tehdä vastaavia kuvia kuin esimerkiksi
[GeoGebralla](GeoGebra). Toisin kuin GeoGebrassa,
JSXGraphilla ei ole graafista käyttöliittymää kuvien piirtämiseen, mutta
toisaalta ohjelmointikirjastona sen käyttömahdollisuudet eivät rajoitu
vain käyttäjän tekemään piirtämiseen vaan sitä voidaan käyttää vaikka
verkon kautta tulevan tilastodatan havainnollistamiseen.

JSXGraphissa on käytettävissä lukuisia geometrisia elementtejä, kuten
pisteitä, suoria, janoja, ympyröitä, leikkauspisteitä, kulmia,
normaaleja ja niin edelleen. Konstruktioiden rakentaminen näitä
käyttämällä onnistuu pienen harjoittelun jälkeen melko vaivattomasti.
JSXGraphin kotisivuilla on sen käytöstä useita eritasoisia kokeiltavissa
olevia [esimerkkejä](http://jsxgraph.uni-bayreuth.de/wp/examples/)
lähdekoodeineen. Kuvien piirtämiseen JSXGraph käyttää oletuksena
SVG-piirtoa, jota käytännössä kaikki ajantasaiset www-selaimet tukevat
jo luonnostaan. Vaihtoehtoisina renderöintikoneistoina ovat käytössä
canvas ja vml.

Samankaltaisuus GeoGebran piirto-ominaisuuksien kanssa näkyy myös siinä,
että JSXGraphille löytyy GeogebraReader.js, jolla onnistuu monien
GeoGebran ggb-tiedostojen näyttäminen suoraan selaimessa ilman GeoGebran
muuten käyttämää Java-lisäosaa. Hieman jo vanha
[esimerkkisivu](http://jsxgraph.uni-bayreuth.de/talks/cadgme10/talk/jsx_ggb.html)
näyttää rinnakkain saman ggb-tiedoston sekä JSXGraphilla että aidolla
GeoGebralla. GeoGebran lisäksi JSXGraphilla on mahdollista näyttää mytös
GEONExTin, Intergeon sekä Cinderellan tiedostomuotoja tarvittavilla
lisäosilla. JSXGraph sekä sen lisäosat ovat ladattavissa [JSXGraphin
kotisivuilta](http://jsxgraph.uni-bayreuth.de/wp/download/). Niitä voi
linkittää käytettäväksi www-sivuilla suoraan myös
[cdnjs.com](http://cdnjs.com/libraries/jsxgraph/)-palvelusta.

Geometristen kuvioiden piirtämistä on mahdollista tehdä JSXGraphin
kanssa käyttäen
[JessieScript-kieltä](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Geometric_constructions_with_JessieScript),
jolla geometrinen konstruktio on melko intuitiivista kuvata tekstinä.
Tuki JessieScriptin käytölle on ladattava [erillisellä
js-tiedostolla](https://raw.github.com/jsxgraph/jsxgraph/master/src/parser/jessiescript.js).

Geometristen piirtoelementtien lisäksi JSXGraphilla on mahdollista
piirtää myös esimerkiksi erilaisia funktioiden kuvaajia ja vaikka niiden
Riemann-summien porraskuvioita. Myös kilpikonnagrafiikan piirtämiseen
JSXGraph sisältää valmiit työkalut. Ohjelmointitaitoiselle JSXGraph on
erittäin monipuolinen piirtokirjasto, jolla on helppoa tehdä vaikka
matematiikan, fysiikan ja ohjelmoinnin opetuskäyttöön erilaisia
sovelluksia.

<div id="jsxgbox" style="width: 500px; height: 500px; background-color: white; margin: 1em auto;"></div>
Esimerkki GeoGebralla piirretystä ja JSXGraphilla näytetystä
interaktiivisesta [kuvasta](http://viikonvalo.fi/files/something.ggb).
<script type="text/javascript" src="../files/jsxgraphcore.js"></script>
<script type="text/javascript" src="../files/GeogebraReader.min.js"></script>
<script type="text/javascript" src="../files/jsxgraph-esimerkki.js"></script>

Kotisivu
:   <http://jsxgraph.uni-bayreuth.de/wp/>
:   <https://github.com/jsxgraph/jsxgraph>

Lisenssi
:   [GNU LGPL](GNU_LGPL) tai [MIT](MIT)

Toimii seuraavilla alustoilla
:   Selaimet

Asennus
:   Kirjasto koostuu JavaScript-tiedostosta sekä css-tiedostosta, jotka
    voi ladata itselleen JSXGraphin kotisivuilta. Vaihtoehtoisesti
    kirjastoa voi käyttää verkosta ladattavana palveluna esimerkiksi
    osoitteesta: <http://cdnjs.com/libraries/jsxgraph/>

Käyttöohjeet
:   [Esimerkkejä](http://jsxgraph.uni-bayreuth.de/wp/examples/)
:   [Referenssikortti](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraph_refcard.pdf)
    (pdf)
:   [JessieScriptin
    ohjeet](http://jsxgraph.uni-bayreuth.de/distrib/jessiescript_ref_en.pdf)

{{% wrapper class="psgallery" %}}
-   [Esimerkki: Viisi hiirellä raahattavaa pistettä ja niiden kautta
    piirretty käyrä.](/images/jsxgraph-1.png)
-   [Eulerin suora havainnollistettuna JSXGraphilla
    interaktiivisesti.](/images/jsxgraph-2.png)
-   [Interaktiivinen geometrinen kuva.](/images/jsxgraph-3.png)
-   [JSXGraphilla voi lukea GEONExT-muotoisen tiedoston ja näyttää
    sen.](/images/jsxgraph-4.png)
-   [Myös GeoGebra-tiedostojen näyttäminen onnistuu tiettyyn rajaan
    saakka.](/images/jsxgraph-5.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


