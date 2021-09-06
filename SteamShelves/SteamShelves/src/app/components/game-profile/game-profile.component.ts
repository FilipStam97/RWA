import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.scss']
})
export class GameProfileComponent implements OnInit {
    game = {
    
          "type":"game",
          "name":"DARK SOULS™: REMASTERED",
          "steam_appid":570940,
          "required_age":0,
          "is_free":false,
          "controller_support":"full",
          "detailed_description":"Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps. <br \/>\r\nDark Souls Remastered includes the main game plus the Artorias of the Abyss DLC.<br \/>\r\n<br \/>\r\nKey features:<br \/>\r\n• Deep and Dark Universe <br \/>\r\n• Each End is a New Beginning<br \/>\r\n• Gameplay Richness and Possibilities<br \/>\r\n• Sense of Learning, Mastering and Accomplishment<br \/>\r\n• The Way of the Multiplayer (up to 6 players with dedicated servers)",
          "about_the_game":"Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps. <br \/>\r\nDark Souls Remastered includes the main game plus the Artorias of the Abyss DLC.<br \/>\r\n<br \/>\r\nKey features:<br \/>\r\n• Deep and Dark Universe <br \/>\r\n• Each End is a New Beginning<br \/>\r\n• Gameplay Richness and Possibilities<br \/>\r\n• Sense of Learning, Mastering and Accomplishment<br \/>\r\n• The Way of the Multiplayer (up to 6 players with dedicated servers)",
          "short_description":"Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.",
          "supported_languages":"English<strong>*<\/strong>, French, Italian, German, Spanish - Spain, Japanese, Korean, Polish, Portuguese - Brazil, Russian, Simplified Chinese, Traditional Chinese<br><strong>*<\/strong>languages with full audio support",
          "header_image":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/header.jpg?t=1605604948",
          "website":null,
          "pc_requirements":{
              "minimum":"<strong>Minimum:<\/strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br><\/li><li><strong>OS:<\/strong> Windows 7 64-bit, Service Pack 1<br><\/li><li><strong>Processor:<\/strong> Intel Core i5-2300 2.8 GHz \/ AMD FX-6300, 3.5 GHz<br><\/li><li><strong>Memory:<\/strong> 6 GB RAM<br><\/li><li><strong>Graphics:<\/strong> GeForce GTX 460, 1 GB \/ Radeon HD 6870, 1 GB<br><\/li><li><strong>DirectX:<\/strong> Version 11<br><\/li><li><strong>Storage:<\/strong> 8 GB available space<br><\/li><li><strong>Sound Card:<\/strong> DirectX 11 sound device<br><\/li><li><strong>Additional Notes:<\/strong> Low Settings, 60 FPS @ 1080p<\/li><\/ul>",
              "recommended":"<strong>Recommended:<\/strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br><\/li><li><strong>OS:<\/strong> Windows 10 64-bit<br><\/li><li><strong>Processor:<\/strong> Intel Core i5-4570 3.2 GHz \/ AMD FX-8350 4.2 GHz<br><\/li><li><strong>Memory:<\/strong> 8 GB RAM<br><\/li><li><strong>Graphics:<\/strong> GeForce GTX 660, 2 GB \/ Radeon HD 7870, 2 GB<br><\/li><li><strong>DirectX:<\/strong> Version 11<br><\/li><li><strong>Storage:<\/strong> 8 GB available space<br><\/li><li><strong>Sound Card:<\/strong> DirectX 11 sound device<br><\/li><li><strong>Additional Notes:<\/strong> High Settings, 60 FPS @ 1080p<\/li><\/ul>"
          },
          "mac_requirements":{
              "minimum":"<strong>Minimum:<\/strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<\/li><\/ul>",
              "recommended":"<strong>Recommended:<\/strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<\/li><\/ul>"
          },
          "linux_requirements":{
              "minimum":"<strong>Minimum:<\/strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<\/li><\/ul>",
              "recommended":"<strong>Recommended:<\/strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<\/li><\/ul>"
          },
          "legal_notice":"Dark Souls™: Remastered & ©BANDAI NAMCO Entertainment Inc. \/ ©2011-2018 FromSoftware, Inc.",
          "developers":["QLOC"],
          "publishers":["FromSoftware, Inc","BANDAI NAMCO Entertainment"],
          "price_overview":{
              "currency":"EUR",
              "initial":3999,
              "final":3999,
              "discount_percent":0,
              "initial_formatted":"",
              "final_formatted":"39,99€"
          },
          "packages":[262430],
          "package_groups":[
              {
                  "name":"default",
                  "title":"Buy DARK SOULS™: REMASTERED",
                  "description":"",
                  "selection_text":"Select a purchase option",
                  "save_text":"",
                  "display_type":0,
                  "is_recurring_subscription":"false",
                  "subs":[
                      {
                          "packageid":262430,
                          "percent_savings_text":" ",
                          "percent_savings":0,
                          "option_text":"DARK SOULS: REMASTERED - 39,99€",
                          "option_description":"",
                          "can_get_free_license":"0",
                          "is_free_license":false,
                          "price_in_cents_with_discount":3999
                      }
                  ]
              }
          ],
          "platforms":{
              "windows":true,
              "mac":false,
              "linux":false
          },
          "categories":[
              {"id":2,"description":"Single-player"},
              {"id":1,"description":"Multi-player"},
              {"id":22,"description":"Steam Achievements"},
              {"id":28,"description":"Full controller support"},
              {"id":41,"description":"Remote Play on Phone"},
              {"id":42,"description":"Remote Play on Tablet"},
              {"id":43,"description":"Remote Play on TV"}
          ],
          "genres":[
              {"id":"1","description":"Action"}
          ],
          "screenshots":[
              {
                  "id":0,
                  "path_thumbnail":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.600x338.jpg?t=1605604948",
                  "path_full":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_3a71463e4ccaf28c5c27f6cf8d32a3a125f45404.1920x1080.jpg?t=1605604948"
              },
                  {
                      "id":1,
                      "path_thumbnail":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_92b2ba470cbfdb8839b649b3f478e5531dd81a17.600x338.jpg?t=1605604948",
                      "path_full":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_92b2ba470cbfdb8839b649b3f478e5531dd81a17.1920x1080.jpg?t=1605604948"
                  },
                  {
                      "id":2,
                      "path_thumbnail":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.600x338.jpg?t=1605604948",
                      "path_full":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_626cc310dc9ac7fb146011582c864a35e5f3e381.1920x1080.jpg?t=1605604948"
                  },
                  {
                      "id":3,
                      "path_thumbnail":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_f1617a419eb3b0cd877ec71230c59aa2672b62dc.600x338.jpg?t=1605604948",
                      "path_full":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_f1617a419eb3b0cd877ec71230c59aa2672b62dc.1920x1080.jpg?t=1605604948"
                  },
                  {
                      "id":4,
                      "path_thumbnail":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_f60f54e58b13d0744853672ccd35810397e3fa26.600x338.jpg?t=1605604948",
                      "path_full":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_f60f54e58b13d0744853672ccd35810397e3fa26.1920x1080.jpg?t=1605604948"
                  },
                  {
                      "id":5,
                      "path_thumbnail":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_b4a80bd6e828a81db09ecbef5694e5d0cddb2caf.600x338.jpg?t=1605604948",
                      "path_full":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/ss_b4a80bd6e828a81db09ecbef5694e5d0cddb2caf.1920x1080.jpg?t=1605604948"
                  }
              ],
              "movies":[
                  {
                      "id":256717563,
                      "name":"LAUNCH TRAILER PEGI",
                      "thumbnail":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256717563\/movie.293x165.jpg?t=1605604934",
                      "webm":{
                          "480":"http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256717563\/movie480.webm?t=1605604934",
                          "max":"http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256717563\/movie_max.webm?t=1605604934"
                      },
                      "mp4":{
                          "480":"http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256717563\/movie480.mp4?t=1605604934",
                          "max":"http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256717563\/movie_max.mp4?t=1605604934"
                      },
                      "highlight":true
                  }
              ],
              "recommendations":{
                  "total":29794
              },
              "achievements":{
                  "total":41,
                  "highlighted":[
                      {
                          "name":"The Dark Soul",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/22067071ea9eeb92edb952b2d65abce16e973fc7.jpg"
                      },
                      {
                          "name":"To Link the Fire",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/fde13ddfbeb188d4e83ca5e581deb69dea09c615.jpg"
                      },
                      {
                          "name":"Dark Lord",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/638c52abf0711ffcabc273473dd247b071cd3734.jpg"
                      },
                      {
                          "name":"Knight's Honor",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/62149815daa726018b21bcabdf215c593f0b3d7b.jpg"
                      },
                      {
                          "name":"Wisdom of a Sage",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/cecb76c38356f44712e304ef2463e55e7a0dcf1e.jpg"
                      },
                      {
                          "name":"Bond of a Pyromancer",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/3ba9afc8fbfeaaafcd19cbb09f30a63d164e5412.jpg"
                      },
                      {
                          "name":"Prayer of a Maiden",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/2ab79f60b52940c674b2c18782c67a7ccdd623e0.jpg"
                      },
                      {
                          "name":"Covenant: Way of White",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/c028fb1af748399ebf2888267634e22d87e8632e.jpg"
                      },
                      {
                          "name":"Covenant: Princess's Guard",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/c250e7b039ead972bec8ff3bbbc5f4dd13292e2a.jpg"
                      },
                      {
                          "name":"Covenant: Blade of the Darkmoon",
                          "path":"https:\/\/cdn.akamai.steamstatic.com\/steamcommunity\/public\/images\/apps\/570940\/8ff13be8b0113347950fdcad91ff764db8f6e02f.jpg"
                      }
                  ]
              },
              "release_date":{
                  "coming_soon":false,
                  "date":"24 May, 2018"
              },
              "support_info":{
                  "url":"https:\/\/www.bandainamcoent.com",
                  "email":""
              },
              "background":"https:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/570940\/page_bg_generated_v6b.jpg?t=1605604948",
              "content_descriptors":{
                  "ids":[],
                  "notes":null
              }
          }
      
  constructor() { }

  ngOnInit(): void {
      
  }

}
