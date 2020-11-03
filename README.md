# Hekatlon izziv Moje Delo

Kazalo vsebine
=================
- [Predpogoji](#predpogoji)
- [Inštalacija in poganjanje iz Visual Studio Code](#inštalacija-in-poganjanje-iz-visual-studio-code)
- [Uporabljene tehnologije](#uporabljene-tehnologije)


## Predpogoji

Pravilno poganjanje aplikacije preizkušeno s sledečimi razvijalskimi orodji:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js 12.x](https://nodejs.org/)


## Inštalacija in poganjanje iz Visual Studio Code

Ko imate pripravljena razvijalska okolja, zaženite sledeče ukaze:

- `cd WebApp/`
- `npm install`
- `npm start`


## Uporabljene tehnologije

- Angular 9.1.0

## Cilji izziva

Ko odpremo spletno aplikacijo, se nam prikaže stran, na kateri se nahaja vloga za delo. Vlogo oddamo s klikom na gumb »oddaj«. Ker aplikacija deluje samo na odjemalcu, se vloga ne odda na strežnik, ampak se shrani v lokalni pomnilnik. Pred oddajo je potrebno preveriti, da nobeno izmed polj ni ostalo neizpolnjeno. V kolikor je katero izmed polj ostalo prazno, o tem obvestimo uporabnika, ter vloge ne shranimo v lokalni pomnilnik.

Če je vloga uspešno shranjena v pomnilnik, to sporočimo uporabniku tako, da mu prikažemo komponento za uspešno opravljeno oddajo vloge. Ob kliku na gumb »nova oddaja« uporabniku ponovno prikažemo prvotno komponento.

Kot lahko vidimo na prototipu strani za oddajo vloge, se pod obrazcem nahaja tudi povezava z besedilom: »prijavi se kot administrator«. V kolikor uporabnik klikne to povezavo preverimo, če ima v lokalnem pomnilniku nastavljeno spremenljivko jeAdmin na resnično. Če je spremenljivka ustrezno nastavljena ga preusmerimo na pot /admin, ki vsebuje pregled vlog; če spremenljivke ni v pomnilniku, ga preusmerimo na pot /login, kjer se nahaja obrazec za vpis. Naloga poteka samo na odjemalcu, kar pomeni, da nimamo strežnika za avtentikacijo uporabnikov, ter se ob prijavi preveri samo, da vpisna polja niso prazna. Če je katero izmed polj ostalo prazno, o tem obvestimo uporabnika, prijava pa je neuspešna. V kolikor so polja zapolnjena, v lokalnem pomnilniku nastavimo spremenljivko jeAdmin na resnično, uporabnika pa preusmerimo na pot /admin. Administratorja je potrebno 24 ur po prijavi avtomatsko odjaviti, tako da se mora za ponovno uporabno strani znova prijaviti.

Ko smo preusmerjeni na pot /admin vidimo komponento »pregled vlog«. Administratorju se prikažejo vse vloge, ki so shranjene v lokalnem pomnilniku. Administrator lahko te vloge oceni z oceno od 1 do 5, s pomočjo zvezdic, kot je vidno na prototipu. Oceno je potrebno shraniti tudi v lokalni pomnilnik, da je ob naslednjem obisku strani še vedno vidna. Če je bilo oddanih več kot pet vlog, na strani dodamo tudi paginacijo, da se nam ne prikažejo vse vloge za delo naenkrat. V kolikor še ni bila oddana nobena vloga, namesto vlog administratorju prikažemo sporočilo, da še ni bila oddana nobena vloga.
