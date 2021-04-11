// PWA Fire Bundle
                      
        // after a service worker is installed and the user navigates to a different page or 
        // refreshes,the service worker will begin to receive fetch events
                          
        self.addEventListener('fetch', function(event) {
            event.respondWith(caches.open('cache').then(function(cache) {
            return cache.match(event.request).then(function(response) {
            console.log("cache request: " + event.request.url);
            var fetchPromise = fetch(event.request).then(function(networkResponse) {           
            // if we got a response from the cache, update the cache                   
            console.log("fetch completed: " + event.request.url, networkResponse);
            if (networkResponse) {
                console.debug("updated cached page: " + event.request.url, networkResponse);
                  cache.put(event.request, networkResponse.clone());}
                  return networkResponse;
                      }, function (event) {   
            // rejected promise - just ignore it, we're offline!   
                      console.log("Error in fetch()", event);
                      event.waitUntil(
                      caches.open('cache').then(function(cache) { 
            // our cache is named *cache* in the caches.open() above
                      return cache.addAll
                      ([            
            //cache.addAll(), takes a list of URLs, then fetches them from the server
            // and adds the response to the cache.           
            // add your entire site to the cache- as in the code below; for offline access
            // If you have some build process for your site, perhaps that could 
            // generate the list of possible URLs that a user might load.               
                    '/', // do not remove this
                    '/index.html', //default
                    '/buttonshtml.html', //default
                    '/chooselevelhtml.html', //default
                    '/helpscreenhtml.html',
                    '/infoscreenhtml.html',
                    '/leveltemplatehtml.html',
                    '/leveltemplatehtml.html?&level_id=1',
                    '/leveltemplatehtml.html?&level_id=2',
                    '/leveltemplatehtml.html?&level_id=3',
                    '/leveltemplatehtml.html?&level_id=4',
                    '/leveltemplatehtml.html?&level_id=5',
                    '/leveltemplatehtml.html?&level_id=6',
                    '/leveltemplatehtml.html?&level_id=7',
                    '/leveltemplatehtml.html?&level_id=8',
                    '/leveltemplatehtml.html?&level_id=9',
                    '/leveltemplatehtml.html?&level_id=10',
                    '/leveltemplatehtml.html?&level_id=11',
                    '/leveltemplatehtml.html?&level_id=12',
                    '/leveltemplatehtml.html?&level_id=13',
                    '/leveltemplatehtml.html?&level_id=14',
                    '/leveltemplatehtml.html?&level_id=15',
                    '/leveltemplatehtml.html?&level_id=16',
                    '/leveltemplatehtml.html?&level_id=17',
                    '/leveltemplatehtml.html?&level_id=18',
                    '/leveltemplatehtml.html?&level_id=19',
                    '/leveltemplatehtml.html?&level_id=20',
                    '/leveltemplatehtml.html?&level_id=21',
                    '/leveltemplatehtml.html?&level_id=22',
                    '/leveltemplatehtml.html?&level_id=23',
                    '/leveltemplatehtml.html?&level_id=24',
                    '/leveltemplatehtml.html?&level_id=25',
                    '/leveltemplatehtml.html?&level_id=26',
                    '/leveltemplatehtml.html?&level_id=27',
                    '/leveltemplatehtml.html?&level_id=28',
                    '/leveltemplatehtml.html?&level_id=29',
                    '/leveltemplatehtml.html?&level_id=30',
                    '/leveltemplatehtml.html?&level_id=31',
                    '/leveltemplatehtml.html?&level_id=32',
                    '/leveltemplatehtml.html?&level_id=33',
                    '/nametext.css',// configure as by your site ; just an example
                    '/images/favicon.ico',// choose images to keep offline; just an example
                    '/images/favicon.png',
                    '/images/pwalogo.png',
                    '/images/pwalogo72.png',
                    '/images/pwalogo96.png',
                    '/images/pwalogo128.png',
                    '/images/pwalogo144.png',
                    '/images/pwalogo152.png',
                    '/images/pwalogo192.png',
                    '/images/pwalogo384.png',
                    '/images/question-mark.png',
                    '/images/resized1suntzu.png',
                    '/images/resized2socrates.jpg',
                    '/images/resized3alexanderthegreat.png',
                    '/images/resized4juliusceasar.jpg',
                    '/images/resized5marcusaurelius.jpg',
                    '/images/resized6williamtheconqueror.jpg',
                    '/images/resized7saladdin.jpg',
                    '/images/resized8genghiskhan.jpg',
                    '/images/resized9akbar.jpg',
                    '/images/resized10olivercromwell.png',
                    '/images/resized11georgewashington.jpg',
                    '/images/resized12napoleonbonaparte.jpg',
                    '/images/resized13abrahamlincoln.jpg',
                    '/images/resized14winstonchurchill.jpg',
                    '/images/resized15franklindroosevelt.jpg',
                    '/images/resized16hochiminh.jpg',
                    '/images/resized17margaretthatcher.png',
                    '/images/resizedc1sargonofakkad.jpg',
                    '/images/resizedc2leonidas.jpg',
                    '/images/resizedc3hannibalbarca.jpg',
                    '/images/resizedc4scipioafricanus.jpg',
                    '/images/resizedc5sulla.jpeg',
                    '/images/resizedc6arminius.jpg',
                    '/images/resizedc7belisarius.jpg',
                    '/images/resizedc8GustavusAdolphus.jpg',
                    '/images/resizedc9frederickthegreat.jpg',
                    '/images/resizedc10shakazulu.jpg',
                    '/images/resizedc11cochise.jpg',
                    '/images/resizedc12paulvonlettowvorbeck.jpg',
                    '/images/resizedc13TELawrenceOfArabia.jpg',
                    '/images/resizedc14DwightDEisenhower.jpg',
                    '/images/resizedc15zhukov.jpg',
                    '/images/spaceshipimage.png',
                    '/sounds/clicksound358ms.mp3',
                    '/sounds/explosion2edited2sec.mp3',
                    '/sounds/helicopter3510ms.mp3',
                    '/sounds/shotedited25ms.mp3',
                    
            // Do not replace/delete/edit the manifest.js paths below
            //These are links to the extenal social media buttons that should be cached;
            // we have used twitter's as an example
                  //'https://platform.twitter.com/widgets.js',       
                    ]);
                    })
                    );
                    });
            // respond from the cache, or the network
              return response || fetchPromise;
            });
            }));
            });
            
            self.addEventListener('install', function(event) {
              // The promise that skipWaiting() returns can be safely ignored.
              self.skipWaiting();
              console.log("Latest version installed!");
            });