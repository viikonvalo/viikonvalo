+++
Date = "2014-09-27T21:00:00.000Z"
Title = "Reveal.js"
Description = "Reveal.js on JavaScript-työkalu näyttävien html5-pohjaisten esitysten tekemiseen."
Week = "4x40"
Number = "196"
Alustat = []
Tagit = ["Verkkoselaimet","Esitys","Toimisto"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo196-revealjs.png"
+++


**Reveal.js on JavaScript-työkalu näyttävien html5-pohjaisten esitysten
tekemiseen.**

![ ](/images/valo196-revealjs.png "fig:valo196-revealjs.png") Reveal.js on
JavaScript-kirjasto, joka muodostaa html5-tiedostona luodusta
esitysmateriaalista näyttävän esityksen. Esitys on näytettävissä ja
selattavissa nykyaikaisella www-selaimella. Reveal.js sisältää muun
muassa hienot esityskalvojen väliset siirtymät, alasivut sekä esittäjän
muistiinpanot. Järjestelmä on laajennettavissa lisäosilla, jotka
mahdollistavat esimerkiksi matematiikan sekä syntaksikorostetun
ohjelmakoodin näyttämisen. Html5-sovelluksena esitykseen voi sisällyttää
myös esimerkiksi ääntä ja videoita `audio`- ja `video`-elementeillä.
Paketti sisältää muutaman valmiin teeman ja omia voi tehdä osaamisen
mukaan.

Reveal.js:n käyttäminen suoraan html-tiedostoa muokkaamalla vaatii
käyttäjältä hieman uskallusta lähteä muokkaamaan valmista html-pohjaa.
Yksittäiset kalvot järjestelmässä kirjoitetaan html5:n
`section`-elementteinä ja kalvojen sisältö on myös html-kieltä.
Halutessaan käyttäjä voi kuitenkin käyttää myös yksinkertaisempaa
[Markdown](http://en.wikipedia.org/wiki/Markdown)-merkintäkieltä
sisällön kirjoittamiseen.

Perusasennuksena ohjelman Github-sivulta ladataan zip-paketti, jonka
sisältämää index.html-tiedostoa voi muokata haluamansa kaltaiseksi.
Täydessä asennuksessa käytetään lisäksi
[Node.js](Node.js)-ohjelmistoa toimimaan paikallisena
palvelimena, johon www-selaimella otetaan yhteys. Täyden asennuksen
etuna perusasennukseen ovat muutamat lisäominaisuudet, joita voidaan
käyttää vain palvelinyhteyden kautta. Näitä ovat muun muassa
Markdown-muotoisen sisällön käyttäminen ulkoisista tiedostoista sekä
puhujan muistiinpanonäkymä. Muistiinpanonäkymä on erillinen ikkuna, joka
voi olla näkyvissä puhujan käyttämän tietokoneen omalla näytöllä
pääikkunan ollessa näkyvissä valkokankaalla. Palvelinasennusta
käytettäessä puhujan muistiinpanot saadaan näkyviin pop-up-ikkunana
painamalla 's'-näppäintä. Puhujan muistiinpanonäkymässä näkyy
pääikkunassa näkyvä kalvo ja siihen liittyvät muistiinpanot sekä
esikatselunäkymä seuraavasta kalvosta. Lisäksi näkymässä on näkyvissä
kello ja kulunutta aikaa näyttävä laskuri.

Reveal.js-esitykset ovat katsottavissa myös mobiililaitteilla ja
esimerkiksi kalvon vaihtaminen iPadilla hoituu pyyhkäisemällä
kosketusnäyttöä.

Reveal.js sisältää oletuksena lisäosat ainakin Markdown-sisällölle,
matematiikan näyttämiseen MathJax-työkalulla, esiintyjän
muistiinpanonäkymän sekä ohjelmakoodin esittämisen
syntaksikorostuksella.

Niille, jotka eivät halua rakentaa esityksiään kirjoittamalla
html-kieltä tekstieditorilla, on tarjolla visuaalinen käyttöliittymä
verkkopalveluna osoitteessa <http://slides.com> . Palvelu tarjoaa eri
hintaisia ja erilaisia tallennusmahdollisuuksia antavia paketteja.
Ilmainen paketti sisältää hieman levytilaa ja mahdollistaa vain
julkisesti näkyvien esitysten tekemisen. Työkalulla tehdyt esitykset
(html-tiedostot) ovat kuitenkin ladattavissa sivustolta myös omalle
koneelle ja käytettävissä normaalin reveal.js-paketin kanssa.

Kotisivu
:   <https://github.com/hakimel/reveal.js> (Lataus ja ohjeet)
:   <http://lab.hakim.se/reveal-js> (Demo-esitys)

Lisenssi
:   [MIT](MIT)

Toimii seuraavilla alustoilla
:   www-selaimet

Asennus
:   Tarvittavat paketit löytyvät Reveal.js:n Github-sivulta. Työkalua
    voi käyttää joko perusasennuksella html-tiedostosta tai täydellä
    asennuksella Node.js-palvelimen kautta.

Käyttöohjeet
:   [Reveal.js:n omat ohjeet](https://github.com/hakimel/reveal.js)
    Githubissa.
:   [Tutoriaali
    aloittelijoille](http://htmlcheats.com/reveal-js/reveal-js-tutorial-reveal-js-for-beginners/)
:   [Esimerkkiesityksiä](https://github.com/hakimel/reveal.js/wiki/Example-Presentations)

{{% wrapper class="psgallery" %}}
-   [Reveal.js:n esimerkkiesityksen etusivu.](/images/revealjs-1.jpg)
-   [Hienoja siirtymäanimaatioita.](/images/revealjs-2.jpg)
-   [Valmiita tyylikkäitä teemoja.](/images/revealjs-3.jpg)
-   [Muokkaaminen html-tiedostona.](/images/revealjs-4.jpg)
-   [Pääikkuna ja esittäjän muistiinpanonäkymä.](/images/revealjs-5.jpg)
-   [Visuaalinen muokkain verkkopalveluna.](/images/revealjs-6.jpg)
-   [Etusivun muokkaaminen visuaalisella
    muokkaimella.](/images/revealjs-7.jpg)
-   [Visuaalisessa muokkaimessa on muutamia valmiita
    asetteluita.](/images/revealjs-8.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


