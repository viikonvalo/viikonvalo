+++
Date = "2014-10-25T21:00:00.000Z"
Title = "Bitcoin"
Description = "Bitcoin on avoimeen lähdekoodiin perustuva digitaalinen valuutta."
Week = "4x44"
Number = "200"
Alustat = ["Kaikki alustat"]
Tagit = ["Internet","Raha"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo200-bitcoin.png"
+++


**Bitcoin on avoimeen lähdekoodiin perustuva digitaalinen valuutta.**

![ ](/images/valo200-bitcoin.png "fig:valo200-bitcoin.png") Bitcoin on
matemaattisin kryptografisin algoritmein toteutettu avoimen lähdekoodin
ohjelmilla ja periaatteilla toimiva digitaalinen valuutta. Bitcoinit
eivät ole minkään keskuspankin liikkeelle laskemia eikä niillä
suoritettavia maksuja välitetä minkään pankin kautta vaan suoraan
käyttäjien välillä vertaisverkkoperiaatteella. Bitcoin on kryptografisen
toteutuksensa ansiosta luonteeltaan turvallinen ja
[pseudonyymi](https://en.bitcoin.it/wiki/Anonymity). Bitcoineilla on
helppoa suorittaa maksuja kansainvälisesti ja nopeasti. Bitcoineilla on
mahdollista toteuttaa helppo maksaminen verkkopalveluiden yhteydessä ja
vaikka pienten tippien antaminen. Sen heikkoja puolia ovat esimerkiksi
sen vaihtokurssien vaihtelevuus sekä verotukselliset ongelmat.

Bitcoinin kehitti nimimerkillä Satoshi Nakamoto toiminut henkilö tai
tahon vuonna 2008. Yksi bitcoin, lyhenne (BTC), jakautuu tuhanteen
millibitcoiniin (mBTC) ja se voidaan jakaa myös 100 miljoonaan
pienempään satoshiksi kutsuttuun yksikköön. Bitcoineja tullaan laskemaan
liikkeelle yhteensä enintään 21 miljoonaa kappaletta ja niitä on tällä
hetkellä liikkeellä noin 13 miljoonaa. Bitcoinien liikkeellelasku
tapahtuu geometrisena sarjana ja se tulee hidastumaan ajan mittaa. Tätä
kirjoitettaessa yhden bitcoinin kurssi on noin 327 dollaria, eli noin
269 euroa.

Bitcoinin idea perustuu siihen, että kaikki niillä suoritetut maksut,
eli transaktiot
("[transaction](https://en.bitcoin.it/wiki/Transaction)"), ovat julkisia
ja niitä säilytetään vertaisverkossa hajautetusti ylläpidetyssä
julkisessa kirjanpidossa. Yksittäiset hyväksytyt transaktiot niputetaan
lohkoiksi ("[block](https://en.bitcoin.it/wiki/Block)"), joista
aikajärjestyksessä rakennettu lohkojen ketju ("[block
chain](https://en.bitcoin.it/wiki/Block_chain)") muodostaa bitcoinien
julkisen kirjanpidon. Kukin lohko sisältää tarkistussumman, joka on
laskettu sen omasta sisällöstä sekä ketjun edellisen lohkon
tarkistussummasta. Hyväksyttävien tarkistussummien laskeminen lohkoille
on tehty tarkoituksella työlääksi kryptografisin menetelmin. Näin
varmistetaan kirjanpidon muuttumattomuus, sillä yksittäisen transaktion
muuttaminen vaatisi sen sisältämän lohkon tarkistussumman laskemisen
uudestaan. Jotta ketju pysyisi ehjänä, pitäisi laskea uudet
tarkistussummat myös kaikille ketjun seuraaville lohkoille, sillä ne
sisältävät tiedon edellisen lohkon tarkistussummasta. Lisäksi, koska
käsitys oikeaksi hyväksytystä lohkoketjusta perustuu
bitcoinvertaisverkossa siihen, mikä lohkoketjun versio on yleisimmin
käytössä eli kasvanut pisimmäksi, pitäisi transaktioita väärentävän
tahon saada käytännössä hallintaansa yli puolet transaktioiden
vahvistuksia laskevasta laskentakapasiteetista. Tämä on varsin
epätodennäköistä.

Uusien bitcoinyksiköiden luominen, louhiminen eli mainaus
("[mining](https://en.bitcoin.it/wiki/Mining)"), liittyy suoraan siihen,
miten uudet bitcoineilla tapahtuvat maksut, transaktiot, hyväksytään ja
liitetään osaksi lohkoketjua. Kun uusi transaktio suoritetaan, alkavat
louhintaa suorittavat vertaisverkon koneet laskea sen
[vahvistamiseen](https://en.bitcoin.it/wiki/Confirmation) tarvittavia
tarkistussummia. Uuden lohkon ketjuun lisäämiseen tarvittava laskenta
kestää noin 10 minuuttia ja tyypillisesti transaktio katsotaan
varmistetuksi, kun ketjussa on transaktion oma lohko mukaan lukien
vähintään kuusi uutta lohkoa. Tällöin transaktio on jo niin syvällä
kirjanpidon historiassa, että sen muuttaminen, eli jo käytetyn rahan
uudelleen käyttäminen
("[double-spending](https://en.bitcoin.it/wiki/Double-spending)"),
katsotaan mahdottomaksi.

Maksujen lähettämiseen ja vastaanottamiseen bitcoinien käyttäjät
käyttävät erilaisia bitcoinsovelluksia ja -lompakoita. Sovellukset
voivat olla web-palveluihin pohjautuvia, jolloin lompakko on
tallennettuna palvelun palvelimelle salasanalla suojattuna, taikka
käyttäjän paikallisella tietokoneella tai mobiililaitteella olevia
sovelluksia. Sovelluksen hallitsema lompakko on käytännössä luettelo
julkisen avaimen kryptografiaan liittyviä salaisia avaimia. Näiden
salaisten avainten hallussa pitäminen valtuuttaa käyttäjän käyttämään
julkisessa kirjanpidossa näkyviä vielä käyttämättömiä
("[unspent](https://en.bitcoin.it/wiki/Change)") varoja. Jokaista
bitcointransaktiota varten vastaanottajalle luodaan uusi bitcoinosoite
("[address](https://en.bitcoin.it/wiki/Address)"), johon maksu
lähetetään ja jonka käytön vastaanottajan salainen avain oikeuttaa.
Osoite on 26-34 merkkiä pitkä merkkijono, esimerkiksi:
[1HUbRagBn18Qo5b7eS72H8WJJD2ByCcGFw](http://blockchain.info/address/1HUbRagBn18Qo5b7eS72H8WJJD2ByCcGFw).
Lompakon saldo koostuu käytännössä kaikista julkisesta lohkoketjusta
löytyvistä transaktioista yhteenlasketuista käyttämättömistä varoista,
joiden käyttöön lompakossa olevilla avaimilla on oikeus.

Käyttämättömien varojen käyttämistä voidaan verrata tavallisesta
lompakosta löytyvien rahojen käyttämiseen. Kun henkilön tavallisessa
lompakossa on kaksi viiden euron seteliä, ovat ne tulleet hänelle
tuloksena jostain aiemmasta maksutapahtumasta, esimerkiksi vaihtorahana
jostain isommasta maksusta. Jos henkilö haluaa maksaa kuuden euron
maksun, hän maksaa sen noilla kahdella viiden euron setelillä ja saa
vaihtorahana esimerkiksi kaksi kahden euron kolikkoa. Vastaavasti
bitcoineilla maksettaessa käytettävissä olevat varat ovat tulleet
jostain aiemmasta maksutapahtumasta eli transaktiosta. Tällaisia varoja
sanotaan transaktioiden käyttämättömiksi ulostuloiksi ("unspent
output"). Käytetty ohjelma valitsee uuteen transaktioon sisääntuloksi
("input") automaattisesti käyttämättömiä ulostuloja riittävän
bitcoinmäärän verran ja ulostuloksi kohdeosoitteen. Jos maksusta jää
rahaa yli, loput rahat ohjataan
[vaihtorahana](https://en.bitcoin.it/wiki/Change) ulostuloon, jonka
osoite on käyttäjän itse omistaman salaisen avaimen hallittavissa. Näin
käytetyt ulostulot merkitään kirjanpitoon käytetyiksi ("spent output")
ja transaktion vahvistamisen jälkeen lohkoketju estää niiden käytön
uudelleen. Esimerkki bitcointransaktiosta:
[0a1c0b1ec0ac55a45b1555202daf2e08419648096f5bcc4267898d420dffef87](http://blockchain.info/tx/0a1c0b1ec0ac55a45b1555202daf2e08419648096f5bcc4267898d420dffef87).

Lompakoita hallitsevia sovelluksia on lueteltu
[bitcoin.org](https://bitcoin.org/en/choose-your-wallet)-sivuston
ohjeissa. Sovelluksia löytyy mobiililaitteille ja tietokoneille sekä
palveluina verkossa. Lisäksi lompakkona voi käyttää erillisiä sitä
varten suunniteltuja laitteita. Esimerkki tietokoneella toimivasta on
alkuperäinen [Bitcoin Core](https://bitcoin.org/en/download) eli
Bitcoin-qt. Android-laitteella helppokäyttöinen sovellus on [Bitcoin
Wallet](http://wallet.schildbach.de/), joka löytyy myös
[F-Droidista](https://f-droid.org/repository/browse/?fdfilter=bitcoin&fdid=de.schildbach.wallet)
nimellä "Bitcoin". Yksinkertaisimmillaan bitcointransaktio tapahtuu
lukemalla mobiilisovelluksella vastaanottajan esittämä QR-koodi, joka
sisältää vastaanottajan osoitteen sekä summan. Verkkopalveluina
käytettävät lompakkopalvelut ovat myös käyttökelpoisia ja helppoja
käyttää useammalta laitteelta, mutta niiden käytöstä peritään
tyypillisesti hyvin pieni välityspalkkio.

Koska bitcoinvarojen käyttöoikeus perustuu sähköiseen lompakkoon
taltioituihin salaisiin avaimiin, on sanomattakin selvää, että
lompakosta on pidettävä hyvää huolta. Lompakon katoaminen tarkoittaa,
että kaikki sillä hallittavat varat ovat auttamattomasti menetettyjä ja
kukaan ei pääse niihin enää käsiksi. Siksi onkin tärkeää varmuuskopioida
säännöllisesti esimerkiksi puhelimeen asennetun bitcoinohjelman käyttämä
lompakko ja säilyttää hyvässä tallessa jossain muussa paikassa kuin
puhelimessa. Varmuuskopiota tehdessä lompakko tyypillisesti salataan,
jolloin on tärkeää muistaa käytetty salauksen purkava salasana.
Bitcoineja voi tarvittaessa tallettaa myös niin sanottuun
[paperilompakkoon](https://en.bitcoin.it/wiki/Paper_wallet), joka on
fyysinen offline-dokumentti, jonka voi pitää tallessa kuin tavallisen
käteisen rahan. Paperilompakko sisältää sisällään tiedon julkisesta
osoitteesta ja salaisesta avaimesta, jolla on pääsy kyseiseen
osoitteeseen lähetettyihin rahoihin. Paperisen lompakon sisältämät rahat
voidaan "pyyhkäistä" takaisin sähköiseen muotoon esimerkiksi lukemalla
paperille tulostettu QR-koodi. Käytännössä tämä tarkoittaa uutta
transaktiota sähköisen lompakon hallinnoimaan osoitteeseen.

Bitcoineja hankitaan tyypillisesti joko vaihtamalla tavallista rahaa
virtuaalivaluutaksi jossain vaihtopalvelussa tai ansaitsemalla niitä
myymällä jotain taikka louhimalla. Vaihtopalvelut joko vaihtavat rahat
itse tai toimivat ostajien ja myyjien välissä välittäjinä. Maksun voi
suorittaa myyjästä riippuen erilaisilla keinoilla, mukaan lukien
käteinen raha, pankkisiirto sekä PayPal-maksu. Helsingin asematunneliin
avattiin vuonna 2013 Levykauppa Äxän tiloihin [Euroopan ensimmäinen
Bitcoin-automaatti](http://www.levykauppax.fi/blog/2013/12/levykauppa_ax_ottaa_asematunnelin_tiloihin_euroopan_ensimmaisen_bitcoin_automaatin_jolla_voi_vaihtaa_kateista_rahaa_bitcoineiksi_samalla_kokeillaan_tuotteiden_myyntia_bitcoineilla/),
jolla voi vaihtaa käteistä rahaa Bitcoineiksi.

Koska bitcoineilla maksut tapahtuvat transaktiokohtaisilla osoitteilla,
ovat maksutapahtumat pseudonyymejä. Tämän nimettömyyden ansiosta bitcoin
on positiivisten käyttötarkoitustensa lisäksi kerännyt suosiota myös
rikollisessa toiminnassa, kuten rahanpesussa ja huumekaupassa.
Nimettömästi tapahtuva valvomaton rahaliikenne aiheuttaa päänvaivaa myös
verotuksellisesti, sekä verottajalle että rehelliselle veronmaksajalle.
Esimerkiksi Suomen lainsäädännössä bitcoinilla ei ole virallisen
valuutan asemaa ja verojen maksamisesta voi aiheutua monimutkaisia
kiemuroita. Verohallitus on julkaissut vuonna 2013 ohjeen
[virtuaalivaluuttojen
tuloverotuksesta](http://www.vero.fi/fi-FI/Syventavat_veroohjeet/Verohallinnon_ohjeet/Virtuaalivaluuttojen_tuloverotus%2828450%29).
Ohje sisältää muutamia esimerkkitilanteita.

Bitcoinin rinnalle on noussut myös muita, yleensä samankaltaisiin
algoritmeihin perustuvia, virtuaalivaluuttoja, kuten
[Litecoin](https://litecoin.org/), [Dogecoin](http://dogecoin.com/) ja
[Namecoin](http://namecoin.info/).

Kotisivu
:   <http://bitcoin.org>

Bitcoin Core -ohjelman lisenssi
:   [MIT](MIT)

Toimii seuraavilla alustoilla
:   Kaikki

Asennus
:   Bitcoineja voi käyttää www-pohjaisina palveluina toimivilla
    lompakoilla tai omalle laitteelle asennetuilla lompakko-ohjelmilla.
    Ohjelmia voi etsiä
    [bitcoin.org](https://bitcoin.org/en/choose-your-wallet) sivustolta.

Linkkejä
:   [Bittiraha.fi](https://bittiraha.fi/)
:   [Verohallinnon
    ohje](http://www.vero.fi/fi-FI/Syventavat_veroohjeet/Verohallinnon_ohjeet/Virtuaalivaluuttojen_tuloverotus%2828450%29)
:   [How Bitcoin Works in 5 Minutes
    (Technical)](https://www.youtube.com/watch?v=l9jOJk30eQs) (Youtube)
:   [How Bitcoin Works Under the
    Hood](https://www.youtube.com/watch?v=Lx9zgZCMqXE) (Youtube)

{{% wrapper class="psgallery" %}}
-   [Android-sovelluksen päänäkymässä näkyy kyseisen lompakon saldo
    (mBTC), luettelo lähetetyistä ja vastaanotetuista transaktioista
    sekä vastaanottavaa bitcoinosoitetta edustava
    QR-koodi.](/images/bitcoin-1.jpg)
-   [Bitcoinosoite merkkijonona ja QR-koodina.](/images/bitcoin-2.jpg)
-   [Ohjelma luo QR-koodin, jolla voi lähettää sen hallinnoimaan
    osoitteeseen ennalta määrätyn summan
    bitcoineja.](/images/bitcoin-3.jpg)
-   [Bitcoinien lähettäminen tapahtuu syöttämällä vastaanottajan osoite
    ja lähetettävä summa. Osoitteen voi skannata QR-koodina valitsemalla
    oikean ylänurkan kameratoiminnon.](/images/bitcoin-4.jpg)
-   [Bitcoinin vaihtokurssi tällä hetkellä sekä lompakon nykyinen saldo
    eri valuutoissa.](/images/bitcoin-5.jpg)
-   [Bitcoinsovelluksen voi asentaa Android-laitteisiin
    F-Droidilla.](/images/bitcoin-6.jpg)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


