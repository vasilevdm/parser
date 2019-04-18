let domain = 'https://inaka-fasad.ru';
let urls = [
'/product/cl3401/',
'/product/cl3791/',
'/product/cl3801/',
'/product/cl3811/',
'/product/cl3891/',
'/product/cl3911/',
'/product/cl3921/',
'/product/cl3931/',
'/product/cl4101/',
'/product/cl4171/',
'/product/cl4181/',
'/product/cl4191/',
'/product/cl4461/',
'/product/cl4481/',
'/product/cl4551/',
'/product/cl4681/',
'/product/cl5101/',
'/product/cw1111/',
'/product/cw1134/',
'/product/cw1207/',
'/product/cw1251/',
'/product/cw1548/',
'/product/cw1582/',
'/product/cw1621/',
'/product/cw1811/',
'/product/cw1821/',
'/product/cw1831/',
'/product/cw1841/',
'/product/cw1891/',
'/product/cw1961/',
'/product/cw2031/',
'/product/cw2051/',
'/product/cw2121/',
'/product/cw2131/',
'/product/cw2161/',
'/product/cw2191/',
'/product/cw2201/',
'/product/cw2211/',
'/product/cw2251/',
'/product/nh3121/',
'/product/nh3293/',
'/product/nh3341/',
'/product/nh3641/',
'/product/nh3751/',
'/product/nh3831/',
'/product/nh3841/',
'/product/nh3851/',
'/product/nh3981/',
'/product/nh4051/',
'/product/nh4061/',
'/product/nh4151/',
'/product/nh4311/',
'/product/nh4331/',
'/product/nh4341/',
'/product/nh4431/',
'/product/nh4441/',
'/product/nh4451/',
'/product/nh4524/',
'/product/nh4531/',
'/product/nh4693/',
'/product/nh4711/',
'/product/nh4721/',
'/product/nh4731/',
'/product/nh4741/',
'/product/nh4751/',
'/product/nh5121/',
'/product/nh5134/',
'/product/nh5142/',
'/product/nh5153/',
'/product/nh5201/',
'/product/nh5211/',
'/product/nh5221/',
'/product/nh5231/',
'/product/nh5271/',
'/product/nh5281/',
'/product/nh5291/',
'/product/nw3121/',
'/product/nw3641/',
'/product/nw3751/',
'/product/nw3832/',
'/product/nw3841/',
'/product/nw3852/',
'/product/nw4051/',
'/product/nw4521/',
'/product/nw4531/',
'/product/nw4541/',
'/product/nw4691/'
]

const request = require("request-promise"),
    cheerio = require("cheerio");
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

						  // console.log('start');
						  // console.log($);
						  // console.log();
						  // console.log('end');

						  let art = $(".fart").html()

				    	if (!fs.existsSync('download2/'+art+'/')){
				  	    fs.mkdirSync('download2/'+art+'/');
				    	}

						  let props = []
						  $(".good-prop__item").each(function(){
						  	let label = $(this).find('.good-prop__label').text()
						  	let value = $(this).find('.good-prop__value').text()
						  	props.push({
						  		label: label.trim(),
						  		value: value.replace('\n','').replace(/\t/g,' ').replace(/  /g,' ').replace(/  /g,' ').trim().replace(' мм','').replace(' кг','')
						  	})
						  })
						  let price = $('.good__price').text().replace('руб./м2','').replace(' ','').trim()
						  let photos = []
						  $(".catalogTopSlider1 li").each(function(){
						  	let download_image_url = domain+$(this).find('img').attr('src')
						  	let name = download_image_url.match(/\/([^\/]+)$/)[1]
						  	let local_image_url = 'download2/'+art+'/photo_'+name

						  	if(!fs.existsSync(local_image_url))
						  		download(download_image_url, local_image_url, function(){ console.log('done ' + local_image_url); })

						  	photos.push(local_image_url)
						  })
						  let examples = []
						  $(".seeSlider li").each(function(){
						  	let download_image_url = domain+$(this).find('a').attr('href')
						  	let name = download_image_url.match(/\/([^\/]+)$/)[1]
						  	let dir = download_image_url.match(/\/([^\/]+)\/[^\/]+$/)[1]
						  	let local_image_url = 'download2/examples/'+dir+'/'+name
				  	  	if (!fs.existsSync('download2/examples/'))
				  		    fs.mkdirSync('download2/examples/')
				  	  	if (!fs.existsSync('download2/examples/'+dir+'/'))
				  		    fs.mkdirSync('download2/examples/'+dir+'/')
						  	// console.log(download_image_url)
						  	// console.log(name)
						  	// console.log(dir)
						  	// return false

						  	if(!fs.existsSync(local_image_url))
						  		download(download_image_url, local_image_url, function(){ console.log('done ' + local_image_url); })

						  	examples.push(local_image_url)
						  })

						  let obj = {
						  	art: art,
						  	props: props,
						  	price: price,
						  	photos: photos,
						  	examples: examples
						  }

/*

		        	if (!fs.existsSync('download2/'+art+'/')){
		      	    fs.mkdirSync('download2/'+art+'/');
		        	}
						  photos.forEach(function(el){
		          	let download_image_url = domain+$(this).attr('href');
		          	let download_thumb_url = domain+$(this).children().attr('src');
		          	let name = download_image_url.match(/\/([^\/]+)$/)[1];
		          	let local_image_url = 'download2/'+id+'/'+name;
		          	let local_thumb_url = 'download2/'+id+'/thumb_'+name;

		          	if(!fs.existsSync(local_image_url))
		          		download(download_image_url, local_image_url, function(){ console.log('done'); });
		          	if(!fs.existsSync(local_thumb_url))
		          		download(download_thumb_url, local_thumb_url, function(){ console.log('done'); });

		          	screenshot_movie.push(local_image_url);
		          	screenshot_movie_thumbs.push(local_thumb_url);
		          });

						  let obj = {
						  	art: art,
						  	props: props,
						  	price: price,
						  	photos: photos,
						  	examples: examples
						  }
						  console.log(obj)

			        let id = url.match(/^\/([^\-]+).+/)[1];
		          let title_movie = $(".title_movie").contents().filter(function() { return this.type === 'text'; }).text().trim();
		          let alt_name = $(".alt_name").html();

		        	if (!fs.existsSync('download2/'+id+'/')){
		      	    fs.mkdirSync('download2/'+id+'/');
		        	}
		          let download_poster_movie = domain+$(".poster_movie img").attr('src');
		        	let name = download_poster_movie.match(/\/([^\/]+)$/)[1];
		          let local_poster_movie = 'download2/'+id+'/poster_'+name;
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
		          	let local_image_url = 'download2/'+id+'/'+name;
		          	let local_thumb_url = 'download2/'+id+'/thumb_'+name;

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
*/
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

						  // console.log('start');
						  // console.log(data);
						  // console.log(obj);
						  // console.log('end');

							let input;
							fs.readFile("input.json", 'utf8', function (err, data) {
							  if (err) throw err;
							  input = JSON.parse(data);
							  input = input.concat(obj);
							  fs.writeFile("input.json", JSON.stringify(input), function(err) {
							      if(err) {
							          return console.log(err);
							      }
							      console.log("The file was saved! input.json");
							  }); 
							});

			    } else {
			        console.log("Произошла ошибка: " + error);
			    }
			});

	}, 5000 * i);


// console.log('asdas');
// return false;

});

// console.log(out);
console.log(obj);


