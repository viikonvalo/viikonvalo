+++
Date = "2013-09-14T21:00:00.000Z"
Title = "MariaDB"
Description = "MariaDB on avoimen lähdekoodin relaatiotietokannan hallintajärjestelmä, joka pohjautuu MySQL-järjestelmään, ja jolla voi korvata MySQL-tietokannan."
Week = "3x38"
Number = "142"
Alustat = ["Linux","Windows","Mac OS X","FreeBSD","OpenBSD","NetBSD","Solaris"]
Tagit = ["Palvelin","Tietokanta"]
Type = "post"
Author = "Pesasa"
Pageimage = "valo142-mariadb.png"
+++


**MariaDB on avoimen lähdekoodin relaatiotietokannan
hallintajärjestelmä, joka pohjautuu MySQL-järjestelmään, ja jolla voi
korvata MySQL-tietokannan.**

![ ](/images/valo142-mariadb.png "fig:valo142-mariadb.png") MariaDB on
SQL-kyselykieleen perustuva relaatiotietokannan hallintajärjestelmä,
joka taustaltaan pohjautuu laajalti käytettyyn avoimen lähdekoodin
MySQL-tietokantajärjestelmään. MariaDB toimii asiakas-palvelin-mallilla,
se voi hallita useaa yhtäaikaista tietokantaa ja palvella useita
yhtäaikaisia käyttäjiä.

MariaDBn syntyhistoria on hyvä esimerkki avoimen lähdekoodin
vahvuudesta: säilyvyydestä ja vapaudesta jatkaa ohjelmistoprojektia
uuteen suuntaan virallisen projektin suunnasta huolimatta. MariaDB:tä
edeltänyt MySQL on suomalaisen [Michael "Monty"
Wideniuksen](http://fi.wikipedia.org/wiki/Michael_Widenius) yhdessä
ruotsalaisen [David Axmarkin](http://fi.wikipedia.org/wiki/David_Axmark)
kanssa vuonna 1995 alulle panema tietokantajärjestelmä. MySQL nimettiin
Wideniuksen tyttären, Myn mukaan. [Sun
Microsystems](http://fi.wikipedia.org/wiki/Sun_Microsystems) osti
MySQL-tietokantaa kehittäneen ruotsalaisen yrityksen, [MySQL
AB](http://www.mysql.com/):n, vuonna 2008 ja vuonna 2010 tietokantajätti
[Oracle](http://www.oracle.com/) osti puolestaan Sun Microsystemsin.
Tätä kautta oikeudet käytetyimpään avoimen lähdekoodin
tietokantapalvelinjärjestelmään päätyivät kilpailevan kaupallisen
tietokantayrityksen käsiin. Tämä käänne aiheutti avoimen lähdekoodin
yhteisöissä pientä huolestumista MySQL:n avoimen kehityksen jatkumisesta
ja harmitti selvästi myös MySQL:n alkuperäistä kehittäjää, Monty
Wideniusta. Tämän seurauksena Widenius päätti lähteä kehittämään
tietokantajärjestelmää haluamaansa suuntaan yhteisövetoisesti. Tämä oli
täysin mahdollista MySQL:n avoimen lähdekoodin ansiosta. Widenius nimesi
oman haaransa, eli
[forkin](http://en.wikipedia.org/wiki/Fork_%28software_development%29),
toisen tyttärensä mukaan MariaDB:ksi ja sen kehityksestä vastaa sitä
varten perustettu säätiö, MariaDB Foundation.

MariaDB on pyrkinyt ainakin kehityksensä alkuvaiheessa pysymään
yhteensopivana alkuperäisen MySQL:n kanssa, jotta siirtyminen siihen
olisi mahdollisimman vaivatonta. Myös sen versionumerot ovat seuranneet
MySQL:n vastaavien versioiden numeroita, mutta jatkossa [versionumerot
lähtevät liikkeelle versiosta
10.0](https://www.digitalocean.com/community/articles/switching-to-mariadb-from-mysql)
samalla kun MariaDB alkaa erottua ominaisuuksiltaan edeltäjästään.
Ainakin MariaDB-säätiön oman mainonnan mukaan MariaDB on "An enhanced,
drop-in replacement for MySQL", eli paranneltu versio, jonka voi suoraan
vaihtaa MySQL:n tilalle. MariaDB käyttää samoja portteja ja samoja
tiedostonimiä kuin edeltäjänsä ja muutenkin ulospäin MariaDB näkyy aivan
samanlaisena kuin MySQL, eli esimerkiksi
[PhpMyAdmin](http://www.phpmyadmin.net/) toimii myös MariaDB:n kanssa.
Moni
[Linux-jakelu](https://mariadb.com/kb/en/distributions-which-include-mariadb/)
onkin joko ottanut MariaDB:n vaihtoehdoksi MySQL:n rinnalle
pakettivalikoimiinsa taikka vaihtanut sen MySQL:n tilalle oletuksena
käytettäväksi "MySQL-tietokannaksi". Muun muassa
[Gentoo](http://packages.gentoo.org/package/dev-db/mariadb),
[openSUSE](http://en.opensuse.org/Portal:MySQL),
[Slackware](http://slackbuilds.org/apps/mariadb/), [Arch
Linux](https://www.archlinux.org/news/mariadb-replaces-mysql-in-repositories/),
[Fedora](http://fedoraproject.org/) ja [Red Hat Enterprise
Linux](http://www.redhat.com/products/enterprise-linux/) ovat jo tehneet
tämän siirtymän.
[Ubuntuun](http://www.phoronix.com/scan.php?page=news_item&px=MTM3Mjc)
ja
[Debianiin](http://lists.debian.org/debian-devel/2013/05/msg00195.html)
MariaDB on nähtävästi tulossa seuraaviin versioihin. Muihin
järjestelmiin MariaDB on asennettavissa MariaDB-säätiön tarjoamista
[lähteistä](https://downloads.mariadb.org/mariadb/repositories/).

MariaDB:n suosio on nousussa myös suurilla, tähän asti MySQL:ää
käyttäneillä, palveluilla. [Wikimedia
ilmoitti](http://blog.wikimedia.org/2013/04/22/wikipedia-adopts-mariadb/)
huhtikuussa 2013 siirtävänsä Wikipedian palvelimia vähitellen
MySQL-tietokantojen käytöstä MariaDB:n käyttöön. Syyskuussa 2013
puolestaan [Google
ilmoitti](http://www.theregister.co.uk/2013/09/12/google_mariadb_mysql_migration/)
siirtyvänsä käyttämään MariaDB:tä.

Nähtäväksi jää, kuinka pian www-palvelimien yhteydessä yleisesti
käytetyssä lyhenteessä LAMP (**L**inux, **A**pache, **M**ySQL ja **P**HP
(tai Perl tai Python)) kirjaimen M merkitys korvautuu MariaDB:llä.

Kotisivu
:   <https://mariadb.org/>

Lisenssi
:   [GNU GPL](GNU_GPL) v.2 ja [GNU LGPL](GNU_LGPL)

Toimii seuraavilla alustoilla
:   Linux, Windows, Mac OS X, FreeBSD, OpenBSD, NetBSD, Solaris

Asennus
:   Tarvittavat ohjelmistopaketit ovat ladattavissa MariaDB:n
    kotisivujen kautta. Osaan Linux-jakeluista MariaDB löytyy jo suoraan
    paketinhallinnan kautta. Osaan MariaDB on tulossa vasta
    tulevaisuudessa ja toistaiseksi se täytyy asentaa MariaDB-säätiön
    tarjoamista
    [lähteistä](https://downloads.mariadb.org/mariadb/repositories/).

Muuta
:   ["MariaDB: The new M in
    LAMP"](http://www.slideshare.net/bytebot/mariadb-the-new-m-in-lamp)

Muita avoimen lähdekoodin tietokantajärjestelmiä
:   [MySQL](http://www.mysql.com/)
:   [PostgreSQL](http://www.postgresql.org/)
:   [MongoDB](http://www.mongodb.org/) (NoSQL)
:   [CouchDB](http://couchdb.apache.org/) (NoSQL)

{{% wrapper class="psgallery" %}}
-   [MariaDB:n komentorivikäyttöliittymä on samanlainen ja käynnistyy
    samalla nimellä kuin MySQL:n vastaava.](/images/mariadb-1.png)
-   [MariaDB:n komentorivikäyttöliittymä: taulujen
    luontia.](/images/mariadb-2.png)
-   [MariaDB:n komentorivikäyttöliittymä: lisätään rivejä
    tauluun](/images/mariadb-3.png)
-   [MariaDB:n komentorivikäyttöliittymä: lisää
    tauluja](/images/mariadb-4.png)
-   [MariaDB:n komentorivikäyttöliittymä: hakuja
    tietokannasta](/images/mariadb-5.png)
-   [PhpMyAdminia voi käyttää suoraan MariaDB:n
    kanssa.](/images/mariadb-6.png)
-   [PhpMyAdmin](/images/mariadb-7.png)
-   [PhpMyAdmin](/images/mariadb-8.png)
{{% /wrapper %}}

*Teksti: Pesasa* <br />
*Kuvakaappaukset: Pesasa*


