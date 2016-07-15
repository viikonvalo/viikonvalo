+++
Date = "2013-06-08T21:00:00.000Z"
Title = "Semantik"
Description = "Semantik on vapaa ohjelma käsitekarttojen, eli mind mapien tekemiseen."
Week = "3x24"
Number = "128"
Alustat = ["Linux","Unixit"]
Tagit = ["Toimisto","Opiskelu","Opetus"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo128-semantik.png"
+++


**Semantik on vapaa ohjelma käsitekarttojen, eli mind mapien
tekemiseen.**

![ ](/images/valo128-semantik.png "fig:valo128-semantik.png") Semantik on helppo
työkalu, jolla voi tehdä visuaalisia käsitekarttoja, jotka helpottavat
asioiden, käsitteiden ja niiden välisten suhteiden jäsentämistä.
Ohjelmassa voi luoda toisiinsa puumaisia hierarkioita luomalla solmuja
ja niiden välisiä kytkentöjä. Ohjelmaa voi käyttää esimerkiksi
muistiinpanojen tekemiseen, ideointiin, käsitteiden jäsentämiseen ja
raporttien sekä esitysten tekemiseen.

Uusien solmujen luominen karttaan on helppoa ja tapahtuu
kaksoisklikkaamalla piirtoaluetta. Kaksoisklikkaamalla jo olemassa
olevaa solmua voi luoda sille lapsisolmun, joka on kytketty suunnatulla
viivalla vanhempaansa. Jo olemassa olevien solmujen välille voi luoda
hierarkiasuhteen raahaamalla hiirellä valitun solmun pluskuvakkeesta
kytkennän haluttuun lapsisolmuun. Olemassa olevan kytkennän voi
puolestaan poistaa kaksoisklikkaamalla sitä. Tekstin kirjoittaminen
solmuun tapahtuu valitsemalla solmu aktiiviseksi ja painamalla
enter-näppäintä. Tekstin muokkaaminen päätetään samoin
enter-näppäimellä. Solmuille voi tekstin lisäksi määrätä erilaisia
värejä sekä joukon erilaisia kuvakkeita. Kuvakkeilla voi solmuille
merkitä erilaisia asioita, kuten "idea", "lounas", "raha", "puhelin" ja
"aika".

Solmujen muodostaman puun voi sijoitella piirtoalueelle itse solmuja
hiirellä raahaamalla taikka pyytää ohjelmaa asettelemaan solmut
mahdollisimman optimaalisesti. Solmujen muodostama kokonaisuus näytetään
myös ikkunan vasemman reunan lineaarisessa näkymässä puumaisena
järjestettynä listana. Tässä listassa solmuja ja alipuita voi
järjestellä raahaamalla. Käsitekartan voi tallentaa kuvatiedostoksi
edit-valikosta löytyvällä "Export the map..."-toiminnolla.

Solmuille voi lisäksi määritellä myöskin datasisältöä, joka voi olla
tekstiä, kuva, taulukko taikka kaavio. Solmun sisältämän datan tyypin
voi valita valikosta, joka tulee esiin klikkaamalla solmua hiiren
kakkosnapilla. Itse data syötetään ikkunan alalaidassa olevaan osioon.
Esimerkiksi kaavion piirtäminen onnistuu melko vaivatta valitsemalla
lisättäviä komponentteja hiiren oikean näppäimen takaa saatavasta
valikosta.

Käsitekartasta voidaan automaattisesti generoida erityyppisiä
diaesityksiä sekä raportteja. Vaihtoehtoina ovat html-muotoinen
S5-esitys, LaTeX-tekstidokumentti, OpenDocument-tekstitiedosto ja
-esitys, joita voi muokata esimerkiksi LibreOfficella, selaimella
katseltava Java-sovellus, html-sivu sekä LaTeX-pohjainen Beamer-esitys.
Diaesityksiin ohjelma luo automaattisesti käsitekartan solmuista joukon
dioja ja niihin sisällöiksi solmuista ja alisolmuista luotuja
"palluralistoja". Ohjelma pyrkii valitsemaan älykkäästi, mitkä solmut
näytetään omina dioinaan ja mitkä vain luettelon kohtina. Solmut, jotka
sisältävät datana kuvan, taulukon tai kaavion, saavat oman dian, jossa
data näytetään. LaTeX-dokumenttiin käsitekartan solmuista luodaan
otsikkorakenne ja otsikoiden alle sisällöksi tulee kunkin solmun data.
Näin on mahdollista luoda Semantikilla esimerkiksi kokonainen raportti
sekä sen esittelemiseen käytettävä diaesitys.

Html-muotoisen S5-diaesityksen Semantik luo pyydettyyn hakemistoon ja
esikatselun se osaa näyttää suoraan käsitekartan oikealla puolella
olevassa alueessa. Esikatselun voi näyttää myös kokoruututilassa,
jolloin Semantikia itseään voi käyttää myös esityksen esittämiseen.
LaTeX-dokumentin sekä Beamer-esityksen Semantik luo pyydettyyn
hakemistoon LaTeX-tiedostoina, kuvina sekä ne lopulliseksi
pdf-tiedostoksi kääntävänä run.sh-tiedostona. LaTeX-muotoisten
tiedostojen käyttö tarvitsee luonnollisesti asennetun LaTeX-ympäristön.
OpenDocument-tiedostot Semantik tallentaa myöskin pyydettyyn hakemistoon
ja sieltä niitä voidaan käsitellä ja näyttää edelleen [LibreOffice
Writer](LibreOffice Writer "wikilink")- ja [LibreOffice
Impress](LibreOffice Impress "wikilink") -ohjelmilla.

Käsitekartan osille voidaan datan lisäksi määrittää myös erilaisia
muuttujia avain-arvo -pareina. Koko käsitekarttaa koskevat muuttujat,
kuten esityksen tai raportin otsikko, tekijätieto sekä päivämäärä,
syötetään ikkunan alaosan "variables"-välilehdelle, kun piirtoalueen
tausta on valittuna. Tähän tarvittavat muuttujat ovat "doc\_"-alkuisia,
esimerkiksi "doc\_title", "doc\_author" ja "doc\_date", ja ohjelma
ehdottaa muuttujan nimeä täydennyksenä, kun sen alkua kirjoittaa jonkin
matkaa. Samoin kaikille käsitekartan solmuille on mahdollisa syöttää
muuttujia, jotka muokkaavat käsitekartasta generoitavaa tulostetta
esimkerkiksi jättämällä kyseisen solmun käyttämättä tai kertomalla
kuvalle käytettävän koon.

Ohjelma on [KDE](KDE)-pohjainen ja se on saatavilla
Linux-jakeluille sekä monille muille UNIX-tyyppisille alustoille. Siitä
ei ole Windows-versiota ja sitä ei valitettavasti ole käännetty suomen
kielelle.

Kotisivu
:   <http://code.google.com/p/semantik/>

Lisenssi
:   [GNU GPL](GNU_GPL) v.3

Toimii seuraavilla alustoilla
:   Linux ja muut UNIX-tyyppiset järjestelmät, joihin
    [KDE-ympäristö](KDE "wikilink") on saatavilla.

Asennus
:   Ohjelma löytyy useimpien Linux-jakeluiden pakettivarastosta sekä sen
    kotisivuilta.

{{% wrapper class="psgallery" %}}
-   [Käynnistettäessä Semantik tarjoaa muutamia käyttövihjeitä, jotka
    kannattaa lukea läpi. Käyttöliittymä koostuu vasemman reunan
    lineaarisesta näkymästä, piirtoalueesta, S5-esityksen
    esikatselunäkymästä sekä alareunan "data"- ja
    "variables"-syöttötilasta.](/images/semantik-1.jpg)
-   [Käsitekartan puurakenne muodostetaan luomalla solmuja ja niiden
    välisiä yhteyksiä. Enter-näppäin vaihtaa aktiivisen solmun
    muokkaustilaan ja pois.](/images/semantik-2.jpg)
-   [Solmuille voi määrätä värejä ja kuvaavia kuvakkeita oikean reunan
    väri- ja kuvakepalkista.](/images/semantik-3.jpg)
-   [Solmuja ja alipuita voi järjestellä raahaamalla taikka käskemällä
    ohjelman järjestää ne automaattisesti.](/images/semantik-4.jpg)
-   [Käsitekarttadokumentille voi antaa otsikon, tekijän nimen sekä
    muutamia muita tietoja muuttujina aktivoimalla piirtoalueen taustan
    sitä klikkaamalla ja syöttämällä muuttujat alareunan
    "variables"-välilehdelle. Syöttötila ehdottaa täydennyksiä
    muuttujien nimille kirjoittamisen myötä. Muuttujia käytetään
    esimerkiksi esitystä luotaessa.](/images/semantik-5.jpg)
-   [Käsitekartasta voidaan luoda usean muotoisia esityksiä ja
    raportteja automaattisesti.](/images/semantik-6.jpg)
-   [S5-esitys näytetään esikatseluna suoraan Semantikin
    esikatseluruudussa. Html-muotoisena sen voi esittää myös erillisellä
    selaimella.](/images/semantik-7.jpg)
-   [Käsitekartasta luotu pdf-muotoinen Beamer-esitys. Beamer-tuloste on
    LaTeX-kielinen ja sen kääntämiseen pdf-tiedostoksi tarvitaan
    LaTeX-ympäristö.](/images/semantik-8.jpg)
-   [Solmuihin voi syöttää myös datasisältöä. Kuvassa tekstimuotoista
    dataa, jota käytetään LaTeX-dokumentissa solmujen mukaan
    otsikoitujen kappaleiden tekstisisältönä.](/images/semantik-9.jpg)
-   [Data voi olla myöskin kaavio, jonka voi piirtää suoraan dataosioon,
    kun solmun tyypiksi on valittu "diagram". Oikean reunan palkin
    värivalinnat toimivat myös kaavion osille. Muita solmun datatyyppejä
    ovat kuva ja taulukko.](/images/semantik-10.jpg)
-   [Solmuun syötetyt taulukot, kuvat ja diagrammit näkyvät
    S5-esityksissä sekä Beamer-esityksissä omina
    dioinaan.](/images/semantik-11.jpg)
-   [Käsitekartasta generoitu LaTeX-dokumentti, jossa solmuille syötetyt
    datasisällöt ovat kappaleiden sisältöinä.](/images/semantik-12.jpg)
-   [Automaattisesti luotu OpenDocument-esitys on varsin yksinkertainen
    runko ja vaatii todennäköisesti jatkomuokkausta ennen
    esittämistä.](/images/semantik-13.jpg)
-   [Käsitekartta kuvatiedostoksi
    tallennettuna.](/images/semantik-14.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


