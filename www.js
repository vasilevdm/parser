let domain = 'https://xxx.xxx';
let urls = [
'/100-a-zori-zdes-tihie.html',
'/101-pro-lyubov.html',
'/102-irracionalnyy-chelovek.html',
'/103-bez-granic.html',
'/104-stiv-dzhobs.html',
'/105-shef-adam-dzhons.html',
'/106-otel-merigold-zaselenie-prodolzhaetsya.html',
'/107-vdali-ot-obezumevshey-tolpy.html',
'/108-spasenie.html',
'/109-vne-sebya.html',
'/110-narkotik.html',
'/111-chernaya-messa.html',
'/112-33.html',
'/113-idealnyy-muzhchina.html',
'/114-strana-oz.html',
'/115-maks.html',
'/116-shafer-naprokat.html',
'/117-vyhoda-net.html',
'/118-tayna-v-ih-glazah.html',
'/119-mister-holms.html',
'/120-pen-puteshestvie-v-netlandiyu.html',
'/121-edinichka.html',
'/122-duhless-2.html',
'/123-schaste-eto.html',
'/124-ovechka-dolli-byla-zlaya-i-rano-umerla.html',
'/125-mech-drakona.html',
'/126-strogo-na-zapad.html',
'/127-eshbi.html',
'/128-syurpriz.html',
'/129-lyubite-kuperov.html',
'/130-sindrom-petrushki.html',
'/131-nochnoy-beglec.html',
'/132-kostyanoy-tomagavk.html',
'/133-prostushka.html',
'/134-anturazh.html',
'/135-uchilka.html',
'/136-strashnye-skazki.html',
'/137-etot-nelovkiy-moment.html',
'/138-pereprava-2.html',
'/139-barmen.html',
'/140-policeyskaya-tachka.html',
'/141-razlom-san-andreas.html',
'/142-orlean.html',
'/143-minony.html',
'/144-zelenaya-kareta.html',
'/145-posledniy-ohotnik-na-vedm.html',
'/146-divergent-glava-2-insurgent.html',
'/147-ultraamerikancy.html',
'/148-bumazhnye-goroda.html',
'/149-doroga-na-berlin.html',
'/15-interstellar.html',
'/150-8-novyh-svidaniy.html',
'/151-temnye-tayny.html',
'/152-paren-s-nashego-kladbischa.html',
'/153-ups-noy-uplyl.html',
'/154-pravdivaya-istoriya.html',
'/155-pod-elektricheskimi-oblakami.html',
'/156-rodina.html',
'/157-vse-mogu.html',
'/158-aloha.html',
'/159-skauty-protiv-zombi.html',
'/16-gravitaciya.html',
'/160-omerzitelnaya-vosmerka.html',
'/161-kung-fu-panda-3.html',
'/162-dedpul.html',
'/163-samyy-luchshiy-den.html',
'/164-snupi-i-meloch-puzataya-v-kino.html',
'/165-spasenie.html',
'/166-rozhdestvenskaya-noch-v-barselone.html',
'/167-srochno-vyydu-zamuzh.html',
'/168-mafiya-igra-na-vyzhivanie.html',
'/169-strana-chudes.html',
'/17-luna-2112.html',
'/171-mlechnyy-put.html',
'/172-zdravstvuy-papa-novyy-god.html',
'/173-les-prizrakov.html',
'/174-sestry.html',
'/175-5-ya-volna.html',
'/176-igra-na-ponizhenie.html',
'/177-posledniy-obryad.html',
'/178-dedushka-legkogo-povedeniya.html',
'/179-devushka-iz-danii.html',
'/18-zemlya-buduschego.html',
'/180-doch-boga.html',
'/181-zachetnyy-prepod-2.html',
'/182-13-chasov-taynye-soldaty-bengazi.html',
'/183-i-gryanul-shtorm.html',
'/184-betmen-protiv-supermena-na-zare-spravedlivosti.html',
'/185-uboynyy-ogonek.html',
'/186-telohranitel.html',
'/187-dzhoy.html',
'/188-kukla.html',
'/189-zatmenie.html',
'/19-gran-buduschego.html',
'/190-v-centre-vnimaniya.html',
'/191-antigang.html',
'/192-trambo.html',
'/193-30-svidaniy.html',
'/194-muchenicy.html',
'/195-nahodka.html',
'/196-45-let.html',
'/197-pobeg-za-mechtoy.html',
'/198-lazurnyy-bereg.html',
'/199-gordost-i-predubezhdenie-i-zombi.html',
'/200-v-aktivnom-poiske.html',
'/201-tronutye.html',
'/202-otryad-samoubiyc.html',
'/203-novye-priklyucheniya-aladdina.html',
'/204-teatr-prizrakov.html',
'/205-sedmoy-syn.html',
'/206-ishod-cari-i-bogi.html',
'/207-dzhon-uik.html',
'/208-tri-bogatyrya-hod-konem.html',
'/209-chto-tvoryat-muzhchiny-2.html',
'/210-snezhnaya-koroleva-2-perezamorozka.html',
'/211-vot-tak-podruzhka.html',
'/212-bolshie-glaza.html',
'/213-noch-v-muzee-sekret-grobnicy.html',
'/214-neslomlennyy.html',
'/215-zalozhnica-3.html',
'/216-dikie-istorii.html',
'/217-zhenschina-v-chernom-2-angel-smerti.html',
'/218-golye-percy.html',
'/219-medvedi-sosedi-zimnie-kanikuly.html',
'/220-berdmen.html',
'/221-tupoy-i-esche-tupee-2.html',
'/222-ograblenie-po-amerikanski.html',
'/223-priklyucheniya-paddingtona.html',
'/224-igrok.html',
'/225-dve-zhenschiny.html',
'/226-ya-dyshu.html',
'/227-ohotnik-na-lis.html',
'/228-kontinuum.html',
'/229-chernoe-more.html',
'/23-bezumnyy-maks-doroga-yarosti.html',
'/230-babaduk.html',
'/231-elki-lohmatye.html',
'/232-zverinyy-otryad.html',
'/233-voshozhdenie-yupiter.html',
'/234-leviafan.html',
'/235-loft.html',
'/236-razvod-po-francuzski.html',
'/237-pyatdesyat-ottenkov-serogo.html',
'/238-gubka-bob-v-3d.html',
'/239-everest-dostigaya-nevozmozhnogo.html',
'/24-agenty-ankl.html',
'/240-domik-v-serdce.html',
'/241-ubit-gonca.html',
'/242-shram.html',
'/243-12-mesyacev-novaya-skazka.html',
'/244-volshebnaya-strana.html',
'/245-plemya.html',
'/246-unizhenie.html',
'/247-batalon.html',
'/248-fokus.html',
'/249-krovavaya-ledi-batori.html',
'/25-v-serdce-morya.html',
'/250-kniga-zhizni.html',
'/251-everli.html',
'/252-cena-cheloveka.html',
'/253-mezhdu-delom.html',
'/254-carstvo-krasoty.html',
'/255-snezhnye-priklyucheniya-solana-i-lyudviga.html',
'/256-zelenaya-planeta.html',
'/257-superforsazh.html',
'/258-gnev.html',
'/259-da-i-da.html',
'/26-007-spektr.html',
'/260-holodnoe-torzhestvo.html',
'/261-na-pauze.html',
'/262-dom.html',
'/263-enni.html',
'/264-samba.html',
'/265-ledyanoy-les.html',
'/266-poklonnik.html',
'/267-neulovimye.html',
'/268-barashek-shon.html',
'/269-mashina-vremeni-v-dzhakuzi-2.html',
'/27-chelovek-muravey.html',
'/270-modnaya-shtuchka.html',
'/271-pacienty.html',
'/272-charodey-ravnovesiya-tayna-suharevoy-bashni.html',
'/273-gazeli.html',
'/274-zhenschiny-protiv-muzhchin.html',
'/275-bitva-za-sevastopol.html',
'/276-iskatel-vody.html',
'/277-poslednie-rycari.html',
'/278-oz-nashestvie-letuchih-obezyan.html',
'/279-dikaya.html',
'/28-robot-po-imeni-chappi.html',
'/280-kak-poymat-monstra.html',
'/281-effekt-lazarya.html',
'/282-gnezdo-drakona.html',
'/283-poslednie-pyat-let.html',
'/284-territoriya.html',
'/285-realnye-upyri.html',
'/286-dobro-pozhalovat-v-ray.html',
'/287-bolshaya-igra.html',
'/288-mama-daragaya.html',
'/289-ne-vidat-nam-parizh-kak-svoih-ushey.html',
'/29-voyna-foyla.html',
'/290-doroga-bez-konca.html',
'/291-iz-temnoty.html',
'/292-lyubov-ili-seks.html',
'/293-pyatyy-nomer.html',
'/294-fors-mazhor.html',
'/295-superkomanda.html',
'/296-prilichnye-lyudi.html',
'/297-vtoroy-shans.html',
'/298-opasnoe-pogruzhenie.html',
'/299-izlechit-strah.html',
'/30-vikingi.html',
'/300-miss-perepoloh.html',
'/301-odnoy-levoy.html',
'/302-osobo-opasna.html',
'/303-doktor-strendzh.html',
'/304-snouden-2016.html',
'/305-svet-v-okeane.html',
'/306-velikolepnaya-semerka.html',
'/307-glubokovodnyy-gorizont.html',
'/309-duelyant.html',
'/31-fort-bliss.html',
'/310-bridzhit-dzhons-3.html',
'/311-zhenih.html',
'/312-nerv.html',
'/313-31-prazdnik-smerti.html',
'/314-ona.html',
'/315-peterburg-tolko-po-lyubvi.html',
'/316-dizlayk.html',
'/317-impuls.html',
'/318-kreyser.html',
'/319-molodost-po-strahovke.html',
'/32-snayper.html',
'/320-zachinschiki.html',
'/321-polnyy-raskolbas.html',
'/322-pribytie.html',
'/323-taksa.html',
'/324-iskusstvennyy-intellekt-dostup-neogranichen.html',
'/325-duelyant.html',
'/326-koroleva-pustyni-2015.html',
'/327-dom-strannyh-detey-miss-peregrin.html',
'/328-derzhi-udar-detka.html',
'/33-ganmen.html',
'/330-vedma-iz-bler-novaya-glava.html',
'/331-inferno.html',
'/332-uchenik.html',
'/333-superplohie.html',
'/334-bremenskie-razboyniki.html',
'/335-dzhek-richer-2-nikogda-ne-vozvraschaysya.html',
'/336-ledokol.html',
'/337-eto-vsego-lish-konec-sveta.html',
'/338-golos-monstra.html',
'/339-trolli.html',
'/34-dusha-shpiona.html',
'/340-odisseya.html',
'/341-voyna-protiv-vseh.html',
'/342-komnata-razocharovaniy.html',
'/343-tancovschica.html',
'/344-shpiony-po-sosedstvu.html',
'/345-bolshoy-sobachiy-pobeg.html',
'/346-horoshiy-malchik.html',
'/347-mamenkin-synok.html',
'/348-fantasticheskie-tvari-i-gde-oni-obitayut.html',
'/349-passazhiry.html',
'/35-kiber.html',
'/350-pod-pokrovom-nochi.html',
'/351-planetarium.html',
'/352-soyuzniki.html',
'/354-nepobedimyy-menni-pakyao.html',
'/355-uidzhi-proklyatie-doski-dyavola.html',
'/356-super-bris.html',
'/358-virus.html',
'/359-po-soobrazheniyam-sovesti.html',
'/36-podarok.html',
'/360-dama-pik.html',
'/361-beguschaya-ot-realnosti.html',
'/362-neizvestnaya.html',
'/363-izgoy-odin-zvezdnye-voyny-istorii.html',
'/364-kredo-ubiycy.html',
'/365-na-pyatdesyat-ottenkov-temnee.html',
'/366-tri-iksa-mirovoe-gospodstvo.html',
'/367-dzhon-uik-2.html',
'/368-obitel-zla-poslednyaya-glava.html',
'/369-zemletryasenie.html',
'/37-v-serdce-morya.html',
'/370-plohoy-santa-2.html',
'/371-ded-moroz-bitva-magov.html',
'/372-naydi-menya-esli-smozhesh.html',
'/373-gibbi.html',
'/374-zoloto.html',
'/375-lekarstvo-ot-zdorovya.html',
'/376-prizrak-v-dospehah-2017.html',
'/377-lego-film-betmen.html',
'/378-strazhi-galaktiki-chast-2.html',
'/379-valerian-i-gorod-tysyachi-planet.html',
'/38-shpionskiy-most.html',
'/380-t2-treynspotting.html',
'/381-krasavica-i-chudovische.html',
'/382-forsazh-8.html',
'/383-mech-korolya-artura.html',
'/384-chuzhoy-zavet.html',
'/385-piraty-karibskogo-morya-mertvecy-ne-rasskazyvayut-skazki.html',
'/386-liga-spravedlivosti-chast-1.html',
'/387-kong-ostrov-cherepa.html',
'/388-zateryannyy-gorod-z.html',
'/389-vremya-pervyh-2017.html',
'/39-viktor-frankenshteyn.html',
'/390-puteshestvie-vremeni.html',
'/391-smurfiki-zateryannaya-derevnya-2017.html',
'/392-transformery-posledniy-rycar.html',
'/393-chelovek-pauk-vozvraschenie-domoy.html',
'/394-obeschanie.html',
'/395-spasateli-malibu.html',
'/396-odarennaya.html',
'/397-nelyubov.html',
'/398-ubiystvo-v-vostochnom-ekspresse.html',
'/399-telohranitel-killera.html',
'/400-matrica-vremeni.html',
'/401-malysh-na-drayve.html',
'/402-ono.html',
'/403-tvoe-imya.html',
'/404-matilda.html',
'/405-liga-spravedlivosti.html',
'/406-inostranec.html',
'/407-mezhdu-nami-gory.html',
'/408-krym.html',
'/409-skaylayn-2.html',
'/41-makbet.html',
'/410-dzhipers-kripers-3.html',
'/411-snegovik.html',
'/412-dikar.html',
'/413-oskolki.html',
'/414-mify.html',
'/415-molodoy-godar.html',
'/416-zdravstvuy-papa-novyy-god-2.html',
'/417-moskovskiy-kinofestival-perenesli-s-iyunya-na-aprel.html',
'/418-studiya-universal-planiruet-perestroit-temnuyu-vselennuyu.html',
'/419-avtor-mira-yurskogo-perioda-napishet-scenariy-ekranizacii-metal-gear-solid.html',
'/42-vyzhivshiy.html',
'/420-cerial-gilermo-del-toro-poluchit-dva-spin-offa.html',
'/421-sluh-nedeli-dueyn-dzhonson-poyavitsya-v-otryade-samoubiyc-2.html',
'/422-zvezda-hodyachih-mertvecov-snimetsya-v-ostrosyuzhetnom-trillere-22-ya-milya.html',
'/423-obet-molchaniya.html',
'/424-komatozniki.html',
'/427-legenda-o-kolovrate.html',
'/428-proschay-kristofer-robin.html',
'/429-detki-naprokat.html',
'/43-stazher.html',
'/430-selfi.html',
'/431-zhgi.html',
'/432-karp-otmorozhennyy.html',
'/433-astral-4-posledniy-klyuch.html',
'/434-elki-novye.html',
'/435-dvizhenie-vverh.html',
'/436-forma-vody.html',
'/437-beguschiy-v-labirinte-lekarstvo-ot-smerti.html',
'/438-tonya-protiv-vseh.html',
'/439-tomb-raider-lara-kroft.html',
'/44-eshbi.html',
'/440-za-granyu-realnosti.html',
'/441-pogruzhenie-2017.html',
'/445-mstiteli-voyna-beskonechnosti.html',
'/446-krasnyy-vorobey.html',
'/447-taksi-5.html',
'/448-han-solo-zvezdnye-voyny-istorii.html',
'/449-chernovik.html',
'/45-kanikuly.html',
'/450-sadko.html',
'/451-plan-pobega-2.html',
'/452-rasprekrasnyy-princ.html',
'/453-missiya-nevypolnima-posledstviya.html',
'/454-opasnaya-igra-sloun.html',
'/455-velikiy-uravnitel-2.html',
'/456-londonskie-polya.html',
'/457-professional.html',
'/458-fantasticheskie-tvari-prestupleniya-grin-de-valda.html',
'/459-prishelec.html',
'/46-uzhastiki.html',
'/460-sonata.html',
'/47-ubey-svoih-druzey.html',
'/48-bud-muzhchinoy.html',
'/49-shpion.html',
'/50-vse-mogu.html',
'/51-viktoriya.html',
'/52-zagnannye-loshadi.html',
'/53-bagrovyy-pik.html',
'/54-krampus.html',
'/55-astral-3.html',
'/56-vatikanskie-zapisi.html',
'/57-paranormalnoe-yavlenie-5-prizraki-v-3d.html',
'/58-vizit.html',
'/59-bratya.html',
'/60-trener.html',
'/62-zaschitnik.html',
'/63-mstiteli.html',
'/64-sinister-2.html',
'/66-007-spektr.html',
'/68-golodnye-igry-soyka-peresmeshnica-chast-ii.html',
'/69-skorost-avtobus-657.html',
'/70-hitmen-agent-47.html',
'/71-marsianin.html',
'/72-krid-nasledie-rokki.html',
'/73-mir-yurskogo-perioda.html',
'/74-legenda.html',
'/75-beguschiy-v-labirinte-ispytanie-ognem.html',
'/76-monstry-na-kanikulah-2.html',
'/77-progulka.html',
'/78-levsha.html',
'/79-terminator-genezis.html',
'/80-ya-plyuyu-na-vashi-mogily-3.html',
'/81-perevodchik.html',
'/83-malenkiy-princ.html',
'/84-golovolomka.html',
'/85-kingsman-sekretnaya-sluzhba.html',
'/86-supernyan-2.html',
'/87-vek-adalin.html',
'/88-horoshiy-dinozavr.html',
'/89-ubiyca.html',
'/90-molodost.html',
'/91-dalnyaya-doroga.html',
'/92-mstiteli-era-altrona.html',
'/93-krepost-schitom-i-mechom.html',
'/94-everest.html',
'/95-zhenschina-v-zolotom.html',
'/96-prizrak.html',
'/97-zolushka.html',
'/98-forsazh-7.html',
'/99-on-drakon.html'
]

const request = require("request-promise"),
    cheerio = require("cheerio"),
    fs = require('fs');

fs.writeFile("input.json", '[]'); 

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

// let out = [];
let obj;
let i = 0;
urls.forEach(function(url){
	i++
	setTimeout( function(i){

			request(domain+url, function (error, response, body) {
			    if (!error) {
			        let $ = cheerio.load(body);
			        let id = url.match(/^\/([^\-]+).+/)[1];
		          let title_movie = $(".title_movie").contents().filter(function() { return this.type === 'text'; }).text().trim();
		          let alt_name = $(".alt_name").html();

		        	if (!fs.existsSync('download/'+id+'/')){
		      	    fs.mkdirSync('download/'+id+'/');
		        	}
		          let download_poster_movie = domain+$(".poster_movie img").attr('src');
		        	let name = download_poster_movie.match(/\/([^\/]+)$/)[1];
		          let local_poster_movie = 'download/'+id+'/poster_'+name;
		          if(!fs.existsSync(local_poster_movie))
		          	download(download_poster_movie, local_poster_movie, function(){ console.log('done'); });
		          let poster_movie = local_poster_movie;

		          let file = '';
		          let file_match = $(".sub_right script:last-child").html();
		          if(file_match){
		          	file_match = file_match.match(/file:"\/\/([^"]+)/);
		          	if(file_match)
		          		file = file_match[1]
		          }

		          let info_rating_movie = $(".info_rating_movie li").text().replace('Рейтинг: ','');
		          let info_movie_list = $(".info_movie .info_movie_list").text().trim().replace(/\t\t/g,'').replace(/\n\t\n\t/g,'\n\t');

		          let text_movie = $(".text_movie p").text().trim();
		          let screenshot_movie = [];
		          let screenshot_movie_thumbs = [];

		          $(".screenshot_movie a").each(function(){
		          	let download_image_url = domain+$(this).attr('href');
		          	let download_thumb_url = domain+$(this).children().attr('src');
		          	let name = download_image_url.match(/\/([^\/]+)$/)[1];
		          	let local_image_url = 'download/'+id+'/'+name;
		          	let local_thumb_url = 'download/'+id+'/thumb_'+name;

		          	if(!fs.existsSync(local_image_url))
		          		download(download_image_url, local_image_url, function(){ console.log('done'); });
		          	if(!fs.existsSync(local_thumb_url))
		          		download(download_thumb_url, local_thumb_url, function(){ console.log('done'); });

		          	screenshot_movie.push(local_image_url);
		          	screenshot_movie_thumbs.push(local_thumb_url);
		          });

		          let movie_similar = [];
		          $(".movie_similar a").each(function() {
		          	movie_similar.push($(this).attr('href'));
		          });

							let obj = {
								id: id,
								url: domain+url,
								title_movie: title_movie,
								alt_name: alt_name,
								poster_movie: poster_movie,
								file: file,
								info_rating_movie: info_rating_movie,
								info_movie_list: info_movie_list,
								text_movie: text_movie,
								screenshot_movie: screenshot_movie,
								screenshot_movie_thumbs: screenshot_movie_thumbs,
								movie_similar: movie_similar
							}

			        // console.log('id >'+id+'<');
			        // console.log('title_movie >'+title_movie+'<');
			        // console.log('alt_name >'+alt_name+'<');
			        // console.log('poster_movie >'+poster_movie+'<');
			        // console.log('file >'+file+'<');
			        // console.log('info_rating_movie >'+info_rating_movie+'<');
			        // console.log('info_movie_list >'+info_movie_list+'<');
			        // console.log('text_movie >'+text_movie+'<');
			        // console.log(screenshot_movie);
			        // console.log(screenshot_movie_thumbs);
			        // console.log(movie_similar);

							// out.push(obj);
							// return obj;

							let input;
							fs.readFile("input.json", 'utf8', function (err, data) {
							  if (err) throw err;
							  input = JSON.parse(data);
							  input = input.concat(obj);
							  fs.writeFile("input.json", JSON.stringify(input), function(err) {
							      if(err) {
							          return console.log(err);
							      }
							      console.log("The file was saved!");
							  }); 
							});

			    } else {
			        console.log("Произошла ошибка: " + error);
			    }
			});

	}, 5000 * i);
});

// console.log(out);
console.log(obj);


