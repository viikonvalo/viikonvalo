+++
date = "2019-06-08T8:30:00+03:00"
Title = "Jupyter Notebook"
Description = "Jupyter Notebook on muistiotyyppinen ohjelmointiympäristö datatieteilijöille"
Week = "9x01"
Number = 249
Alustat = ["Linux", "Mac OS X", "Windows", "FreeBSD"]
Tagit = ["ohjelmointi", "tiede", "tilastot"]
Type = "post"
Author = "Mikko Harhanen"
Pageimage = "valo249-jupyter_notebook.png"
+++

**Jupyter Notebook on datatieteilijöiden keskuudessa suosittu ohjelmointiympäristö, jolla luodaan tekstiä, kuvia ja ohjelmointikieltä yhdistäviä muistioita.**

![ ](/images/valo249-jupyter_notebook.png "fig:valo249-jupyter_notebook.png")

Tietotekniikan maailmassa on noussut trendikkääksi termiksi datatiede, jolla pyritään tilastollisin menetelmin ja koneoppimisen keinoin löytämään tietomassasta poikkeamia, toistuvia malleja ja sääntöjä. Esimerkiksi datatieteilijä voi selvittää asiakkaan ostohistorian perusteella, mitä tuotetta kannattaa seuraavaksi suositella. Tämän tyylisiä analyyseja voi tehdä useilla eri välineillä, mutta suosituiksi työkaluiksi ovat tulleet [Python-ohjelmointikieli](/python/) ja sen kehitysympäristö Jupyter Notebook.

Jupyter Notebook on selaimella käytettävä ohjelmointityökalu, jolla voi Pythonin lisäksi ohjelmoida useilla eri kielillä, kuten [R:llä](/r/), Julialla tai [Octavella](/gnu_octave/), kunhan asentaa tarvittavat ytimet. Monista muista kehitysympäristöistä poiketen Jupyter Notebook painottaa tekstin, kuvan ja koodin yhdistämistä, jotta lopputuloksesta tulee tarinamainen kirjoitus. Kun kirjoittaja haluaa jakaa tarinansa muille, voi hän muuttaa JSON-muotoisen muistion helposti esitettävään ja levitettävään HTML-, PDF- tai Markdown-muotoon. Jakajien yleiseksi tavaksi on muodostunut IPYNB-muotoisen muistion tallentaminen versionhallinnan verkkosivulle, kuten GitHubiin, joka esittää muistion ihmiselle luettavassa esitysasussa.

Asennus
-------

Käyttäjä voi asentaa Jupyter Notebookin omalle koneelleen tai palvelinkoneelle tai vaihtoehtoisesti hyödyntää analytiikan pilvipalveluun esiasennettua kehitysympäristöä. Yksinkertaisimmillaan ohjelman asentaja avaa komentokehotteen ja ajaa käskyn `python -m pip install jupyter`, joka asentaa Pythonin PIP-paketinhallintaohjelmalla Jupyter Notebook -editorin ja välttämättömät riippuvuudet. Käytännössä tämä ei vielä riitä, sillä data-analyysien tekeminen vaatii asennettavaksi analytiikan kirjastoja, joista yleisesti käytettyjä ovat matemaattisen laskennan *numpy-*, datankäsittelyn *pandas-*, visualisoinnin *matplotlib-* ja koneoppimisen *scikit-learn* -kirjasto.

Joissain tapauksissa tarvittavien pakettien hallinta voi muodostua ongelmaksi, etenkin jos käyttäjällä ei ole pääkäyttäjän oikeuksia, koneelle ei ole asennettu ajantasaista Pythonia tai kirjastojen riippuvuuksissa on ristiriitaisuuksia. Silloin voi turvautua BSD-lisensoituun [Anaconda-jakeluun](https://www.anaconda.com/distribution/), joka yrittää yksinkertaistaa data-analyysiin tarvittavien pakettien asentamista. Alustariippumaton Anaconda sisältää Python-tulkin ja data-analyysiin tarvittavat keskeisimmät kirjastot, joten asennuksen jälkeen käyttäjä pääsee heti ratkomaan datatieteen pulmia.

Käyttö
------

Kehitystyö aloitetaan pikakuvakkeen klikkauksella tai komentokehotteen käskyllä `jupyter notebook`, joka avaa selaimeen kehitysympäristön varaaman osoitteen *localhost:8080*. Selaimessa avautuva välilehti on yksi Jupyter Notebookin muistio, jota hallitaan sivun yläreunassa olevalla valikolla ja tehtäväpalkilla. Ohjelma sisältää perinteiset kehitysympäristön ominaisuudet kuten koodin värityksen, sisennyksen ja täydennyksen sekä monipuoliset näppäinoikotiet. Lisäksi muistioissa voidaan käyttää HTML-notaatiota, kuvia ja matemaattista LaTeX-syntaksia.

Muistio koostuu soluista, joilla sisältö pilkotaan pieniin kokonaisuuksiin. Ensimmäisessä solussa voi olla vaikka Markdown-syntaksilla kirjoitettu kuvaus analyysin työvaiheesta ja seuraavassa työvaiheen sisältämä koodinpätkä. Jos koodisolu kutsuu visualisoinnin *matplotlib*-kirjastoa, Jupyter Notebook piirtää koodisolun alle kuvaajan. Solujen avulla kehittäjä saa helposti yhdistettyä muotoiltua tekstiä, videokuvaa ja koodia samaan muistioon. Kun koodi on pilkottu pieniin soluihin, on lukijan helppo seurata datan muotoutumista ja analyysin kehittymistä.

Jupyter Notebookissa on erikoisuuksia, jotka voivat kummastuttaa muihin ohjelmointiympäristöihin tottuneita kehittäjiä, sillä muistioiden tavoite eroaa tuotanto-ohjelmoinnista: tarkoituksena on, että kehittäjät pääsevät nopeasti kokeilemaan ideoitaan ja esittämään löydöksensä tyylikkäästi muotoillussa dokumentissa. Jos ohjelmoinnin fokus siirtyy prototyypittelystä tuotantotasoiseen ohjelmointiin, tulevat Jupyter Notebookin rajat vastaan. Tuotanto saattaa kaivata lopputuotokseksi Python-moduulia, joka funktioiden kautta käsittelee datan ja antaa oikean vastauksen. Vaikka moduulien teko on mahdollista, Jupyter Notebookin soluihin sidottu, paikasta toiseen poukkoileva työskentelytapa tekee hankalaksi koodin jäsentelyn ja testitapausten luomisen. Lisäksi versionhallinta on vaikeaa, sillä pienikin muokkaus muistiossa voi tarkoittaa jättimäisiä muutoksia tiedostotasolla. Syynä on JSON-tyyppiset muistiotiedostot, jotka yhdistelevät tekstiä ja versionhallintaan huonosti istuvaa koodisolujen tulosteiden binääridataa. Poikkeavan ohjelmointitavan lopputuloksena voi olla huonosti toimiva muistio, jota lukijat eivät pysty ajamaan tai hyödyntämään uudelleen.

Parhaimmillaan Jupyter Notebook on ohjelmoinnin opetuskäytössä ja data-analyysin työvaiheiden sekä löydösten esittelyssä, sillä muistio on kaunis luettavaksi ja helppo jakaa lukijoille. Julkaistuja muistioita on olemassa suuri määrä ja niihin voi tutustua Jupyterin [nbviewer-verkkosivulla](https://nbviewer.jupyter.org/), joka renderöi verkossa julkaistut IPYNB-tiedostot HTML-muodossa.

Kotisivu
:   <https://jupyter.org/>

Lisenssi
:   [BSD](https://opensource.org/licenses/BSD-3-Clause)

Toimii seuraavilla alustoilla
:   Windows, Linux, Mac OS X, FreeBSD

Asennus
:   Voidaan asentaa Pythonin [PIP-paketinhallintaohjelmalla](https://pypi.org/project/jupyter/)
:   tai erillisellä datatieteeseen erikoistuneella [Anaconda-jakelulla](https://www.anaconda.com/distribution/)

{{% wrapper class="psgallery" %}}
-   [Selaimessa avattu Jupter Notebook -muistio](/images/jupyter_notebook-1.png)
-   [Matplotlib-kirjastolla voi piirtää kuvaajia muistioon](/images/jupyter_notebook-2.png)
-   [Tekstit kirjoitetaan Markdown-syntaksilla](/images/jupyter_notebook-3.png)
-   [Jupyterin tiedostoselaimella voi avata tai luoda uusia muistioita](/images/jupyter_notebook-4.png)
{{% /wrapper %}}

*Teksti ja kuvakaappaukset: Mikko Harhanen*
