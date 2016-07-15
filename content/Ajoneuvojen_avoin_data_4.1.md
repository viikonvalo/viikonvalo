+++
Date = "2015-06-05T21:00:00.000Z"
Title = "Ajoneuvojen avoin data 4.1"
Description = "Ajoneuvojen avoin data 4.1 on Liikenteen turvallisuusviraston (Trafi) julkaisema tietokanta suomalaisista ajoneuvoista."
Week = "5x23"
Number = "231"
Alustat = ["Kaikki alustat"]
Tagit = ["Materiaali","Tietokanta"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo231-ajoneuvojen_avoin_data.png"
+++


**Ajoneuvojen avoin data 4.1 on Liikenteen turvallisuusviraston (Trafi)
julkaisema tietokanta suomalaisista ajoneuvoista.**

![ ](/images/valo231-ajoneuvojen_avoin_data.png "fig:valo231-ajoneuvojen_avoin_data.png")
Liikenteen turvallisuusvirasto, Trafi, on julkaissut avoimena datana tiedot kaikista
liikennekäytössä olevista suomalaisista ajoneuvoista. Aineisto sisältää ajoneuvojen
rekisteröinti-, hyväksyntä- ja teknisiä tietoja Trafin ylläpitämästä ajoneuvoliikennerekisteristä.
Aineisto ei luonnollisestikaan sisällä yksilöiviä henkilötietoja vaan vain ajoneuvoon liittyvää
tietoa. Aineisto on lisensoitu [Creative Commons Nimeä 4.0 Kansainvälinen] -lisenssillä.

Aineisto koostuu ZIP-pakatusta CSV-tiedostosta (comma separated values), jossa on
yhtensä 5 088 354 riviä aineistoa. Kokoa aineistolla on purettuna 836 megatavua ja
pakattuna 255 megatavua. Suuren kokonsa takia aineistoa ei kannata koettaa yrittää avata
esimerkiksi [LibreOffice Calc](LibreOffice_Calc)-taulukkolaskentaohjelmalla tai tekstieditorilla.
Parempi vaihtoehto on tuoda aineisto johonkin tietokantajärjestelmään, kuten [SQLite](SQLite),
jolla siihen on helppoa suorittaa hakuja tai selata esimerkiksi
[graafisella käyttöliittymällä](DB_Browser_for_SQLite). Aineisto on mahdollista lukea
käsiteltäväksi myös johonkin tilasto-ohjelmaan, kuten [R](R).

Itse aineiston lisäksi ladattavissa on Excel-muotoinen taulukko,
joka sisältää tarvittavat tiedot itse aineiston tulkitsemiseen. Taulukossa on muun muassa lueteltu
ja selitetty aineiston sarakkeina käytetyt muuttujat sekä niiden arvoina olevien koodien merkitykset ja muodot. Esimerkiksi ajoneuvoryhmän koodi 105 tarkoittaa lumiaura-harjapuhallinta.

Materiaalin versio 4.1 on päivätty 31.5.2015 ja julkaistu 5.6.2015. Aineistoa käytettäessä
lisenssin mukaisen julkaisijan mainitsemisen Trafi pyytää tekemään mainitsemalla julkaisija,
aineiston nimi ja ajankohta. (esimerkiksi: sisältää Trafin ajoneuvojen avoin data 4.1 aineistoa)

Aineiston aiemmat versiot 1.0 ja 2.0 julkaistiin Trafin aiemmalla omalla lisenssillä.

Kotisivu
:   <http://www.trafi.fi/tietopalvelut/avoin_data>

Twitter
:   [@Trafi_Finland](https://twitter.com/Trafi_Finland)

Lisenssi
:   [CC-by 4.0](https://creativecommons.org/licenses/by/4.0/deed.fi)

{{% wrapper class="psgallery" %}}
-   [Muuttujaluettelo Excel-tiedostossa. Muuttujien tyyppien kuvaus ja koodistot erillisissä tauluissa](/images/ajoneuvojen_avoin_data-1.jpg)
-   [Aineiston tuonti SQLite-kantaan ja pieni kysely.](/images/ajoneuvojen_avoin_data-2.jpg)
-   [Kysely SQLite-kantaan graafisella käyttöliittymällä.](/images/ajoneuvojen_avoin_data-3.jpg)
-   [Koko kanta yhtenä tauluna selattavissa SQLiten graafisella käyttöliittymällä](/images/ajoneuvojen_avoin_data-4.jpg)
-   [CSV-tiedoston 40 ensimmäistä riviä](/images/ajoneuvojen_avoin_data-5.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*



[Creative Commons Nimeä 4.0 Kansainvälinen]: http://creativecommons.org/licenses/by/4.0/deed.fi (CC-by 4.0)
