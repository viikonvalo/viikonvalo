+++
Date = "2012-08-25T21:00:00.000Z"
Title = "TiddlyWiki"
Description = "TiddlyWiki on henkilökohtainen verkoton wiki esimerkiksi muistiinpanojen tekoon."
Week = "2x35"
Number = "87"
Alustat = ["www-selain","www-selain","www-selain","Internet Explorer","www-selain","www-selain"]
Tagit = ["Muistiinpanot","Wiki"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo87-tiddlywiki.png"
+++


**TiddlyWiki on henkilökohtainen verkoton wiki esimerkiksi
muistiinpanojen tekoon.**

![ ](/images/valo87-tiddlywiki.png "fig:valo87-tiddlywiki.png") TiddlyWiki on
yhtenä html-tiedostona toteutettu selaimella käytettävä wiki, jonka
käyttöön ei tarvita palvelinta eikä verkkoyhteyttä. Tiddlywikillä
esimerkiksi luentomuistiinpanojen tai kokousmuistioiden kirjaaminen
onnistuu helposti ja muistiinpanot saa pidettyä siististi järjestyksessä
tekemällä linkityksiä toisiinsa liittyvien asioiden välille.

Muistiinpanojen tekeminen sähköisesti on usein hankalampaa kuin ensin
uskoisi. Yksittäisten muistiinpanojen kirjaaminen samaan
tekstitiedostoon tai tekstinkäsittelyohjelman asiakirjaan ei ole
käytännöllistä, sillä tietopalasten järjestely ja etsiminen
lineaarisesta (yhteen pötköön kirjoitetusta) tiedostosta on työlästä
selaamista edestakaisin. Jos taas suuri joukko muistiinpanoja
tallennetaan kukin erillisiin tiedostoihin, käy niiden hallinta pian
hankalaksi. Niiden järkevään ylläpitoon pitää rakentaa kansiohierarkia,
jonka käyttö voi sekin osoittautua työlääksi ja josta tietojen
löytäminen ei välttämättä myöskään ole helppoa. Hypertekstisivut, kuten
www-sivut, ovat käytännöllinen ratkaisu tähän ongelmaan. Niissä kukin
tieto tai muistiinpano talletetaan omaksi sivukseen ja sivujen välille
voi luoda linkityksiä, jolloin päästään lineaarisuuden ja
hierarkkisuuden kahleista. Minkään tiedon ei tarvitse olla täsmälleen
jonkin toisen jälkeen tai hierarkkisesti jossain lokerossa vaan tiedot
voivat vapaasti linkittyä toisiinsa ja muodostaa verkon.
**Wiki-järjestelmät** ovat yksi tapa tehdä tällaisten linkitettyjen
sivujen tekeminen helpoksi ja linkittäminen luontevaksi. Tyypilliset
wiki-järjestelmät, kuten [Mediawiki](Mediawiki) tarvitsevat
kuitenkin toimiakseen palvelimen sekä verkkoyhteyden eivätkä siksi
sovellu kovin helposti yksittäisen käyttäjän henkilökohtaiseen käyttöön.

TiddlyWiki ratkaisee tämän ongelman tuomalla wikin verkosta käyttäjän
omalle koneelle tai vaikka mukana kannettavalle muistitikulle.
TiddlyWikä voi käyttää myös DropBoxin, Google-driven ja Ubuntu Onen
kaltaisten pilvipalveluiden kanssa. TiddlyWiki koostuu vähimmillään
pelkästään yhdestä selaimella avattavasta html-tiedostosta, joka
sisältää kaiken wiki-toiminnallisuuden JavaScript-kielellä.
TiddlyWikissä käyttäjä voi luoda yksittäisiä tietopalasia,
**tiddlereitä**, kuten wiki-sivuja, ja avata niitä näkyviin yhden tai
useamman kerrallaan. Tiddlerien tekstisisältö kirjoitetaan
yksinkertaisella
[wiki-kielellä](http://oldwiki.tiddlywiki.org/wiki/TiddlyWiki_Markup),
jossa esimerkiksi otsikot ja väliotsikot merkitään kirjoittamalla rivin
alkuun yksi tai useampi huutomerkki ja numeroimattomat listat merkitään
rivin aloittavalla tähtimerkillä (\*). Esimerkiksi:

```
!Yläotsikko
Tekstiä
* luettelo
* parilla
* kohdalla
Taas tekstiä.
!!Alaotsikko
Lisää tekstiä ja
# numeroitu
# luettelo
```

Linkitys tiddlereiden välillä hoidetaan kirjoittamalla tekstiin
viitattavan tiddlerin nimi ympäröitynä kaksinkertaisilla hakasulkeilla,
esimerkiksi:

```
Muista lukea [[muistiinpanot]].
```

Kullekin tiddlerille voi myös merkitä tageja, eli eräänlaisia
asiasanoja, joiden mukaan niitä on myöhemmin helppo hakea ja luokitella.
TiddlyWikissä on myös sisäänrakennettu hakukenttä, joka etsii esiin
kaikki hakusanan sisältävät tiddlerit.

TiddlyWikiin tehtyjen muokkausten tallentaminen hoituu Firefox- ja
Internet Explorer -selaimissa suoraan selaimen omilla menetelmillä.
Käyttäjältä toki kysytään lupa tallennukseen, sillä selaimet eivät
tietoturvan vuoksi voi omin luvin tallennella käyttäjän koneelle
tiedostoja. Tallennuksen yhteydessä kannattaa rastia vaihtoehto, ettei
lupaa kysytä jokaisella tallennuksella. Tämä rastilla annettu lupa on
istunto- ja tiedostokohtainen. Muilla selaimilla tallennusta varten
tarvitaan TiddlyWikin sisältävän html-tiedoston lisäksi
*TiddlySaver.jar*-tiedosto ja selaimeen Java-lisäosa. TiddlyWikin oikean
reunan sivupalkista löytyy "Options"-kohdasta mahdollisuus kytkeä päälle
"AutoSave"-toiminto, jolloin tallennus tapahtuu jokaisen muutoksen
jälkeen automaattisesti ilman erillistä "Save"-linkin painamista. Jos
päättää käyttää automaattista tallennusta, voi kannattaa kytkeä pois
päältä automaattiset varmuuskopiot valinnasta "SaveBackups", sillä
muuten tallennuskansio täyttyy hyvin pian päivämäärällä ja kellonajalla
varustetuista varmuuskopioista.

TiddlyWiki on helposti ja laajasti muokattavissa omiin tarpeisiin.
Käytännössä kaikki muokaaminen tapahtuu muokkaamalla sopivia
tiddlereitä. Wikin otsikkoa voi muokata muuttamalla tiddlerien
*SiteTitle* ja *SiteSubtitle* sisältöä, vasemman reunan valikon sisältö
löytyy tiddleristä *MainMenu* ja luettelo oletuksena esiin avattavista
tiddlereistä on tiddlerissä *DefaultTiddlers*. Myös TiddlyWikin asettelu
ja ulkoasu on muunnettavissa muokkaamalla sivupohjaa tiddlerissä
*PageTemplate* tai omia css-tyylisääntöjä tiddleriin *StyleSheet*.

Myös wikin toiminnallisuuden muokkaaminen on hyvin helppoa, jos osaa
JavaScript-kieltä. TiddlyWikin toiminnallisuus on rakennettu helposti
lisäosilla laajennettavaksi. Lisäosa on käytännössä tiddleri, jonka
sisältö on ajettavaa JavaScript-ohjelmakoodia ja jolle on annettu tagi
*systemConfig*. Kaikki tällä tagilla merkityt tiddlerit suoritetaan
sivun lataamisen yhteydessä. Lisäosina voidaan toteuttaa esimerkiksi
laajennoksia TiddlyWikin käyttämään wiki-kieleen tai erilaisia makroja,
joita voidaan käyttää wiki-tekstin seassa. Hyvä esimerkki tällaisesta
makrosta on *CalendarPlugin*-lisäosan tuoma * <br /><\<calendar\>\>*-makro,
joka wiki-tekstin sekaan kirjoitettuna korvataan tiddleriä näytettäessä
interaktiivisella kalenterilla. Toinen esimerkki hyödyllisestä
lisäosasta on *AttachFilePlugin*, joka mahdollistaa kuvien upottamisen
wikiin. Tämän lisäosan avulla kuvatiedosto voidaan joko upottaa suoraan
html-tiedoston sisään yhtenä tiddlerinä tai vaihtoehtoisesti käyttää
viittausta ulkoiseen kuvatiedostoon. Wiki-tekstissä ja jopa
css-säännöissä voidaan näin liitettyä kuvaa käyttää viittaamalla siihen
tiddlerin nimellä.

TiddlyWikin päälle on rakennettu erilaisiin käyttöihin muokattuja
sovelluksia. Hieman vanhempaan TiddlyWikin versioon perustuvaan
matemaattiselle tekstille suunnattuun
[ASciencePad](http://math.chapman.edu/~jipsen/asciencepad/asciencepad.html)iin
on sisällytetty matemaattisia kaavoja MathML-muotoon muuttava
[ASCIIMathML](http://www1.chapman.edu/~jipsen/mathml/asciimath.html)-paketti
sekä graafien ja muiden kuvioiden piirtämiseen käytettävä
[ASCIIsvg](http://www1.chapman.edu/~jipsen/svg/asciisvg.html).
[TiddlyFolio](http://tiddlyfolio.tiddlyspot.com/) puolestaan on
TiddlyWikin versio, johon on lisätty mahdollisuus kryptata tiddlereitä.
TiddlyFoliota käyttämällä esimerkiksi muistitikulle tallennetut tiedot
voi pitää salakirjoitettuina ja turvassa vaikka muistitikku katoaisikin.
TiddlyWikiä on mahdollista käyttää myös kurssimateriaalin jakamiseen,
kuten esimerkiksi professori Russel Herman:
[LaTeX](http://people.uncw.edu/hermanr/LaTeX/),
[MathLab](http://people.uncw.edu/hermanr/Wiki/MatlabWiki.html).
Tällaisessa käytössä TiddlyWikin etuna tavallisen verkkosivustoon
verrattuna on se, että koko materiaalin voi halutessaan antaa
opiskelijoiden ladattavaksi yhtenä tiedostona.

TiddlyWikiä on toki mahdollista käyttää myös verkon yli.
Yksinkertaisimmillaan muokkaukset tehdään omalla koneella ja
html-tiedosto kopioidaan palvelimelle vain lukemista varten.
Vaihtoehtoisesti voi käyttää [TiddlySpace](http://tiddlyspace.com/)- tai
[tiddlyspot](http://tiddlyspot.com/)-palvelua, jotka hoitavat wikin
tallettamisen palvelimen puolella ja mahdollistavat wikin editoinnin
suoraan verkossa.

Kotisivu
:   <http://tiddlywiki.com/>

Lisenssi
:   [BSD](http://en.wikipedia.org/wiki/BSD_licenses)

Toimii seuraavilla alustoilla
:   Firefox, Internet Explorer, Chrome/Chromium, Safari, Opera, (mikä
    tahansa moderni selain)

Asennus
:   TiddlyWiki on ladattavissa sen kotisivuilta. Firefoxilla ja Internet
    Explorerilla sen käyttöön riittää pelkkä html-tiedosto. Muilla
    selaimilla käyttöön tarvitaan lisäksi sivuilta ladattava
    jar-tiedosto sekä selaimeen Java-plugin.

Linkkejä
:   [Why every programmer should have a
    Tiddlywiki](http://eriwen.com/tools/wikify-yourself/)
:   [Tiddlywiki
    cheatsheet](http://www.virtuniv.cz/images/e/ed/Tiddlywiki_cheatsheet.pdf)
    (pdf) — Tiivistetty TiddlyWiki-opas.
:   [TiddlyTools](http://www.tiddlytools.com/) - lisäosavarasto

{{% wrapper class="psgallery" %}}
-   [Tyhjä, vasta aloitettu TiddlyWiki.](/images/tiddlywiki-1.png)
-   [Tiddlereitä voi tuoda toisista tiedostoista ja sivustoilta. Kuvassa
    haetaan lisäosia TiddlyTools-sivustolta.](/images/tiddlywiki-2.png)
-   [Valitaan tuotavat tiddlerit saatavilla olevien
    listasta.](/images/tiddlywiki-3.png)
-   [Tiddlerin sisällön muokkaus tapahtuu yksinkertaisella
    wiki-syntaksilla. Mukana kalenterimakro.](/images/tiddlywiki-4.png)
-   [Tiddlerin sisältö näyttötilassa. Makron kohdalla on
    kalenteri.](/images/tiddlywiki-5.png)
-   [Sivun asettelua voi räätälöidä muuttamalla sivupohjaa tiddlerissä
    "PageTemplate".](/images/tiddlywiki-6.png)
-   [Muuta ulkoasua voi muokata css-säännöillä, jotka kirjoitetaan myös
    omaan tiddleriinsä.](/images/tiddlywiki-7.png)
-   [AttachFilePlugin-lisäosa mahdollistaa esimerkiksi kuvien
    upottamisen wikiin. Upottamisen sijaan kuvat voi sisällyttää myös
    ulkoisina linkkeinä.](/images/tiddlywiki-8.png)
-   [Upotettu kuva tallennetaan omaan tiddleriinsä, johon voi viitata
    sekä sisältötiddlereistä että
    css-säännöissä.](/images/tiddlywiki-9.png)
-   [Kuva sijoitettuna tiddleriin tekstin
    oheen.](/images/tiddlywiki-10.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*

