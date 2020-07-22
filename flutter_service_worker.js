'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "c93ea5d4a57cf0221665da65f64ca961",
"/": "c93ea5d4a57cf0221665da65f64ca961",
"manifest.json": "9a91b4a0edd1f19d88110bd6857a686a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "d354d8aa61e79a7fd7bc208c68cf9f2d",
"assets/static/Playball-Regular.ttf": "fd04853ba01cf00106df27a822ba99ec",
"assets/static/Comfortaa-VariableFont_wght.ttf": "f40889caa25956ef4d27c2aadc4fbe13",
"assets/static/DancingScript-VariableFont_wght.ttf": "d3bebba97d549436fd6137d05d55ae33",
"assets/static/SeaweedScript-Regular.ttf": "84f430003e43b0318718891745359522",
"assets/static/Courgette-Regular.ttf": "59c3685a73f0f1b7c302dd2d6dabd628",
"assets/static/Oxanium-Bold.ttf": "fae76ac58ccad3366598275f54f748b4",
"assets/static/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/static/Caladea-Regular.ttf": "6e54476872c84ad572f2f0fcd6172ea5",
"assets/FontManifest.json": "17a03adad3ad3fa1e5ef7c6d9351f0a9",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "5c8ab101a6f1e2926bcfc4bca21b551f",
"assets/LICENSE": "6212e26ec82873f4e3390d85ec9817e4",
"assets/assets/internship.png": "417314818192c696cc7267d7c2940035",
"assets/assets/youtube.jpg": "b44bf88bf695ca798d4b3176316afa22",
"assets/assets/mun.jpeg": "5dcb300dd2b64923ebd21e68eb3c18a1",
"assets/assets/dav.jpeg": "285160560e606bc88b0092406688c861",
"assets/assets/jiit.jpeg": "528fb0824e627e0b64e3a5787029d0da",
"assets/assets/converge.jpeg": "4afe212870b5b7370864829830d0d3dd",
"assets/assets/speech.jpg": "05cff8acf3ac91bc0ca62a31ad72f4e2",
"assets/assets/pioneer.png": "5299afbce468140bd1ba07b559f00187",
"assets/assets/B612-Regular.ttf": "e8ed14e1cdeed375c3c22bc1c4424b6f",
"assets/assets/baby.jpeg": "2222eb477a44c0c96e29a2fa92dbc9aa",
"assets/assets/silverzone.png": "ceee8fd33e62321a97585d4055d20867",
"assets/assets/hackathon.jpeg": "62d44f2d7935f20f3cb459b762cc3180",
"assets/assets/eloquence.png": "4631e71bf468aa824e8fdea2a5195dda",
"assets/assets/me.jpg": "799dc5130a686a2afce9353c2c09dea1",
"assets/assets/upwork.png": "e87a9a8e8f92d0a0fed81b7e1b428a5a",
"assets/assets/AlegreyaSans-Light.ttf": "15a542eabd31a51063376540597638b3",
"assets/assets/quiz.jpeg": "e802c76a3e36d1f0a4d05d64ad1196fe",
"assets/packages/slimy_card/assets/flare/bottomSlime.flr": "3a26ed39d3a9a9956105e9e6e4d5ad43",
"assets/packages/slimy_card/assets/flare/topSlime.flr": "9f381ee39c22b624c805f536b39171a6",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
