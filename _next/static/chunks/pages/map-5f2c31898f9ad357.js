(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{4284:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return e(9883)}])},9883:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return w}});var o=e(5893),l=e(9008),s=e.n(l),n=e(5725),i=e(7294),c=e(7054);let r={width:"100%",height:"800px"},m={lat:47.632168533272086,lng:-122.18786623583166};function u(t){let{teams:a}=t,[e,l]=(0,i.useState)([]),[s,n]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let t=async()=>{let t=await Promise.all(a.filter(t=>t.location&&""!==t.location.trim()).map(async t=>{let a=await fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(encodeURIComponent(t.location),"&key=").concat("AIzaSyBFjmHLNbjVQD0wjZkQyIxoLKD3fz15K4Q")),e=await a.json(),o=e.results[0].geometry.location;return{...t,lat:o.lat,lng:o.lng}}));l(t)};t()},[a]),(0,o.jsx)(c.KJ,{googleMapsApiKey:"AIzaSyBFjmHLNbjVQD0wjZkQyIxoLKD3fz15K4Q",children:(0,o.jsxs)(c.b6,{mapContainerStyle:r,center:m,zoom:10,children:[(0,o.jsx)(c.XL,{children:t=>e.map((a,e)=>(0,o.jsx)(c.Jx,{position:{lat:a.lat+(Math.random()-.5)*5e-4,lng:a.lng+(Math.random()-.5)*5e-4},title:a.name,onClick:()=>n(a),clusterer:t},e))}),s&&(0,o.jsx)(c.nx,{position:{lat:s.lat,lng:s.lng},onCloseClick:()=>n(null),children:(0,o.jsxs)("div",{style:{display:"flex",maxWidth:"250px",alignItems:"center"},children:[(0,o.jsx)("div",{style:{marginRight:"10px"},children:(0,o.jsx)("img",{src:s.logo,width:"80px",alt:s.name})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{style:{margin:"0",marginBottom:"10px"},children:(0,o.jsx)("a",{href:"/teams.html#".concat(s.id),children:s.name})}),(0,o.jsxs)("p",{style:{margin:"0",marginBottom:"10px"},children:["Location: ",s.location]}),(0,o.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,o.jsx)("a",{href:s.url,children:(0,o.jsx)("i",{className:"fas fa-globe"})}),s.instagram&&(0,o.jsx)("a",{href:s.instagram,children:(0,o.jsx)("i",{className:"fab fa-instagram"})}),s.facebook&&(0,o.jsx)("a",{href:s.facebook,children:(0,o.jsx)("i",{className:"fab fa-facebook"})}),s.twitter&&(0,o.jsx)("a",{href:s.twitter,children:(0,o.jsx)("i",{className:"fab fa-twitter"})})]})]})]})})]})})}function w(t){let{}=t;return(0,o.jsx)("section",{className:"w-full md:w-full flex flex-col items-center px-3 width",children:(0,o.jsxs)("article",{className:"flex flex-col shadow my-4 width",children:[(0,o.jsx)(s(),{children:(0,o.jsx)("title",{children:"Seattle Area Basketball Map"})}),(0,o.jsxs)("div",{className:"bg-white flex flex-col justify-start p-6 width",children:[(0,o.jsx)("a",{href:"#",className:"text-blue-700 text-sm font-bold uppercase pb-4",children:"Teams Map"}),(0,o.jsx)(u,{teams:n.Z})]})]})})}},9008:function(t,a,e){t.exports=e(2636)},5725:function(t,a){"use strict";a.Z=[{name:"Seattle Rotary Style",area:"Seattle",id:"rotary",url:"http://seattlerotarybasketball.com/",instagram:"https://www.instagram.com/rotaryhoops/",facebook:"https://www.facebook.com/pages/Seattle%20Rotary%20Style%20Basketball/122416917850084/",location:"201 19th Ave, Seattle, WA 98122",logo:"https://pbs.twimg.com/media/DarpgPdUwAAz2oA.jpg",tryouts:{link:null,dates:null,locations:null}},{name:"Seattle Select High Academic",area:"Seattle",id:"seattleselect",url:"https://www.seattleselectbasketball.org/",instagram:"https://www.instagram.com/seattleselecthighacademic/",facebook:null,location:"6801 Roosevelt Way NE Seattle, WA 98115",logo:"https://www.seattleselectbasketball.org/wp-content/themes/appply/images/logo.png",tryouts:{link:"https://seattleselectbasketball.leagueapps.com/events/3988821-fallwinter-aau-team-local-and-travel-try-outs---boys",dates:"Aug 7 – Aug 31, 2023",locations:"Calvary Church Gym, 6801 Roosevelt Way NE, Seattle, WA 98115"}},{name:"Tree of Hope",area:"Seattle",id:"toh",url:"https://www.tohgirlsbasketball.com/",instagram:"https://www.instagram.com/treeofhopebball/",facebook:"https://www.facebook.com/groups/TOHPRed2023/",location:"Seattle, WA, 98144",logo:"https://static.wixstatic.com/media/877219_1251b98807c742f5a2cb9d43685951ff~mv2.png/v1/fill/w_696,h_419,al_c,lg_1,q_85,enc_auto/T%20(1)_edited.png",tryouts:{link:null,dates:null,locations:null}},{name:"HoopLand",area:"Seattle",id:"hoopland",url:"http://www.hooplandwa.com/",instagram:"https://instagram.com/hoopland.wa",facebook:null,twitter:null,location:"927 N 128th St, Seattle, WA 98133",logo:"https://frontdesk.s3.amazonaws.com/828e8a7f-936a-4b9b-870e-90eda7c4ce52/logos/310d8a4f-b36d-4070-9093-d4d86004b06d.png",tryouts:{link:"http://hoopland.pike13.com/services",dates:"August 19-20, 26-27, 2023",locations:"927 N 128th St, Seattle, WA 98133"}},{name:"Emerald City Basketball Academy - Queen Anne (ECBA)",area:"Seattle",id:"ecbaqa",url:"https://allcityhoops.com/",instagram:"https://www.instagram.com/ecbahoops/",facebook:"https://www.facebook.com/people/Emerald-City-Basketball-Academy/100063597697169/",location:"Queen Anne High School, Seattle, WA",logo:"https://allcityhoops.com/wp-content/uploads/2019/03/ECBA-Circle.png",tryouts:{link:"https://allcityhoops.wufoo.com/forms/queen-anne-ecba-2023-fallwinter-team-tryouts/",dates:"August 21-23, 2023",locations:"Old Queen Anne High School, 215 Galer St., Seattle, WA, 98109"}},{name:"West Seattle Reign",area:"Seattle",id:"reign",url:"https://westseattlereign.com/",instagram:"https://www.instagram.com/westseattlereignsports",facebook:"https://www.facebook.com/Westseattlereign/",location:"4100 SW Genesee St, Seattle, WA 98116",logo:"https://img1.wsimg.com/isteam/ip/0065d8da-bed0-402f-b7f3-45b45ba08a28/Logo_West%20Seattle%20Regin-0001.png/:/cr=t:7.63%25,l:7.63%25,w:84.75%25,h:84.75%25",tryouts:{link:null,dates:null,locations:null}},{name:"Northwest Coastal",area:"Seattle",id:"nwcoastal",url:"https://www.instagram.com/northwestcoastal/",instagram:"https://www.instagram.com/northwestcoastal/",facebook:"https://www.facebook.com/Northwestcoastalsports/",location:"927 North 128th St, Seattle, WA 98133",logo:"/images/nwcoastal.jpg",tryouts:{link:null,dates:null,locations:null}},{name:"Ace Hoyas",area:"Seattle",id:"acehoyas",url:null,instagram:null,facebook:"https://www.facebook.com/groups/651198786443335/",location:"Seattle, WA 98126",logo:"/images/acehoyas.png",tryouts:{link:null,dates:null,locations:null}},{name:"Shoreline Sports Foundation",area:"Seattle",id:"shoreline",url:"https://www.shorelinesportsfoundation.org/",instagram:null,facebook:null,location:"Shoreline, WA, 98155",logo:"https://cdn1.sportngin.com/attachments/logo_graphic/8506/2835/shoreline_Sports_foundation_small.jpg",tryouts:{link:"https://www.shorelinesportsfoundation.org/page/show/3510100-teams-and-tryouts",dates:null,locations:null}},{name:"Seattle Legends",area:"Seattle",id:"legends",url:"https://www.facebook.com/206CityLegends/",twitter:null,instagram:null,facebook:"https://www.facebook.com/206CityLegends/",location:"Seattle, 98118",logo:"/images/legends.png",tryouts:{link:null,dates:null,locations:null}},{name:"Team Dean",area:"Seattle",id:"teamdean",url:"https://www.teamdeanseattle.com/",twitter:"https://twitter.com/TeamDeanHoops",instagram:"https://www.instagram.com/teamdeanhoops/",location:"Seattle, WA",logo:"https://images.squarespace-cdn.com/content/v1/5e2b4a885fb6a33e02706064/1581618700520-WQ7IJF0JKQW90TH50K4R/thumbnail_image-1.png?format=1500w",tryouts:{link:null,dates:null,locations:null}},{name:"Local Hoops",area:"Eastside",id:"localhoops",url:"https://www.localhoops.org/",instagram:"https://www.instagram.com/localhoops/",location:"Bellevue, WA 98007",logo:"https://uploads-ssl.webflow.com/61322c9d9ee572575b84adfd/6217ddf9a825e398d99a99a2_Menu%20-%20Home.jpg",levels:"beginner, development, competitive",tryouts:{link:"https://localhoops.sportngin.com/register/form/838813702",dates:"August 20-27, 2023",locations:"Bellevue College"}},{name:"(EBC) Eastside Basketball Club",area:"Eastside",id:"ebc",url:"https://www.ebconefamily.com/",instagram:"https://www.instagram.com/ebconefamily/",location:"6601 132nd Ave NE #1 Kirkland, WA 98033",logo:"https://cdn2-sr-application.sportsrecruits.com/images/basketballrecruits/2020/3/13_491414_new_ebc_logo_(2).jpg",levels:"beginner, development, competitive",tryouts:{link:"https://pbs.twimg.com/profile_images/1345396817349939200/umNEDjDN_400x400.jpg",dates:"August 19-20, 2023",locations:"6601 132nd Ave NE #1 Kirkland, WA 98033"}},{name:"Elite Sports Academy Basketball",area:"Eastside",id:"elite",url:"https://www.elitesportsnw.com",instagram:"https://www.instagram.com/elitesportswa/",location:"8174 304th Ave SE, Issaquah, WA 98027",logo:"https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-1/10467017_396822183807762_5722245706658519429_o.png?stp=c0.29.320.320a_dst-png_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=abbd80&_nc_ohc=6zmF3O9-3PoAX_wu6Wo&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCtiZPmaCne4lAy_2Sr3CqLlWiwvupZ7e1IExTJ6CF-cg&oe=64FEBBEB",tryouts:{link:"https://www.elitesportsnw.com/tryout-schedule",dates:"August 3, 19-20, 2023",locations:"8174 304th Ave SE, Issaquah, WA 98027"}},{name:"Friend of Hoop (FOH)",area:"Eastside",id:"foh",url:"https://www.fohseattle.com/",instagram:"https://www.instagram.com/fohseattle_/",facebook:"https://www.facebook.com/FOHSeattle/",location:"Bellevue College, Bellevue, WA 98007",logo:"/images/foh.jpg",tryouts:{link:"https://www.instagram.com/p/CvscyqqP71S/",dates:"August 28,30, 2023",locations:null}},{name:"Team Stuck",area:"Eastside",id:"teamstuck",url:"https://www.facebook.com/teamstuck360/",instagram:null,facebook:"https://www.facebook.com/teamstuck360/",twitter:"https://twitter.com/TeamStuck360",location:"10842 117th Pl NE, Kirkland, WA 98033",logo:"https://pbs.twimg.com/profile_images/1412588883078828038/fLehXGqY_400x400.jpg",tryouts:{link:null,dates:null,locations:null}},{name:"Global Basketball Club",area:"Eastside",id:"global",url:"https://www.globalbbc.com/",instagram:null,twitter:"https://twitter.com/GBCSeattle",location:"Sammamish, WA",levels:"competitive",logo:"https://pbs.twimg.com/profile_images/701482936399364097/5BqTaSHK_400x400.jpg",tryouts:{link:"https://www.globalbbc.com/home",dates:"August 23-25, 2023",locations:"Pine Lake Covenent Church, Sammamish, WA"}},{name:"Team Fuego",area:"Eastside",id:"fuego",url:"https://pacificbasketballcourts.com/fuego-teams/",instagram:"https://www.instagram.com/pacificcourts_00/",facebook:"https://www.facebook.com/FUEGOHOOPZ/",location:"Pacific Courts 7003 132nd PL SE Newcastle, WA 98059",logo:"https://pacificbasketballcourts.com/wp-content/uploads/2017/02/image2-338x400.jpg",tryouts:{link:"https://pacificbasketballcourts.com/fuego-teams/#contact",dates:"August 26-27, 2023",locations:"Pacific Courts 7003 132nd PL SE Newcastle, WA 98059."}},{name:"Renton Select",area:"Eastside",id:"rentonselect",url:"https://rentonbasketball.com/",instagram:"https://www.instagram.com/rentonselectbasketball/",facebook:"https://www.facebook.com/rentonselectbasketball/",location:"Renton, WA",logo:"https://img1.wsimg.com/isteam/ip/678d2073-dba9-419c-a3e0-93684de1bfbc/NewRLogo.jpg",tryouts:{link:"https://rentonbasketball.com/try-outs",dates:"September 5,6,11,13, 2023",locations:null}},{name:"Premier Basketball",area:"Eastside",id:"premier",url:"https://www.premierhoops.net/contact-us/",instagram:null,facebook:null,location:"Bellevue WA, 98007",logo:null,tryouts:{link:null,dates:null,locations:null}},{name:"Washington Premier",area:"Eastside",id:"wapremier",url:"https://fishersportsacademy.com/aau/",instagram:null,facebook:null,location:"1903 112th Ave NE, Bellevue, WA 98004",logo:"https://fishersportsacademy.com/wp-content/uploads/2018/10/cropped-logo_small-3.png",tryouts:{link:"https://fishersportsacademy.com/aau/",dates:"August 21, 24th; 28th and 30th, 2023",locations:"Hidden Valley Field House; Renton Highlands Neighborhood Center"}},{name:"Apollo Academy",area:"Seattle",id:"apollo",url:"https://apolloacademyhoops.wpcomstaging.com/",instagram:"https://twitter.com/apollo_hoops",facebook:"https://www.facebook.com/ApolloAcademyBasketball/",location:"Seattle, WA",logo:"https://pbs.twimg.com/profile_images/1148694801077788672/aIcgBolf_400x400.jpg",tryouts:{link:null,dates:null,locations:null}},{name:"NW Prodigy",id:"prodigy",area:"Tacoma, Auburn, Kent Area",url:"https://www.prodigybasketball.com/aboutus",instagram:"https://www.instagram.com/northwestprodigy/",facebook:"https://www.facebook.com/northwestprodigy/",location:"SeaTac, WA",logo:"/images/nwprodigy.jpg",tryouts:{link:"https://www.instagram.com/p/Cv9vK3KLgoT/?igshid=NTc4MTIwNjQ2YQ==",dates:"Sep 7-8, 2023",locations:null}},{name:"ThE cAMp",area:"Tacoma, Auburn, Kent Area",id:"thecamp",url:"https://www.instagram.com/THECAMPWA",instagram:"https://www.instagram.com/THECAMPWA",facebook:"https://www.facebook.com/p/ThE-cAMp-100065646572968/",location:"Tacoma, WA",logo:"/images/thecamp.jpg",tryouts:{link:null,dates:null,locations:null}},{name:"Kent Elite",id:"kent",area:"Tacoma, Auburn, Kent Area",url:"https://www.kentelitebasketball.com/",instagram:null,facebook:"https://www.facebook.com/p/Kent-Elite-Basketball-100057767433610/",location:"Kent, Washington",logo:"https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/308547344_532042142064696_6744696702319366120_n.jpg?stp=c135.0.450.450a_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=c7e18e&_nc_ohc=YuDcA1TTDsUAX_WbOHR&_nc_ht=scontent-sjc3-1.xx&oh=00_AfA-TO8RKcajqlxGiOGw9m2FZMtg6be-c1uf_OA5a3oDiA&oe=64DB62AF",tryouts:{link:"https://www.facebook.com/photo/?fbid=724657866136455&set=a.532042105398033",dates:null,locations:"Kent, Washington"}},{name:"World Class Renegades",area:"Tacoma, Auburn, Kent Area",id:"renegades",url:"https://www.instagram.com/worldclassrenegadesbasketball/",instagram:"https://www.instagram.com/worldclassrenegadesbasketball/",facebook:"https://www.facebook.com/people/World-Class-Renegades-Basketball/100085015121135/",location:"Tacoma, WA",logo:"https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/366559710_249774667866369_328120157699060462_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=hc9da4A_XAIAX_uinYq&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCtPvMVNHWgG7T0R7O5sRGuWY5HzqtHrOiqP7jQaT0RlQ&oe=64DC8B96",tryouts:{link:"https://www.instagram.com/p/Cvs8sX8vQ8K/",dates:"August 27th",locations:"Annie Wright High School, Tacoma, WA"}},{name:"Emerald City Basketball Academy (ECBA)",area:"Tacoma, Auburn, Kent Area",id:"ecba",url:"https://allcityhoops.com/",instagram:"https://www.instagram.com/ecbahoops/",facebook:"https://www.facebook.com/people/Emerald-City-Basketball-Academy/100063597697169/",location:"19441 66th Ave S, Kent, WA, 98032",logo:"https://allcityhoops.com/wp-content/uploads/2019/03/ECBA-Circle.png",tryouts:{link:"https://allcityhoops.wufoo.com/forms/ecba-2023-fallwinter-last-chance-tryouts/",dates:"August 26, 2023",locations:"19441 66th Ave S, Kent, WA, 98032"}},{name:"Tacoma Swish",area:"Tacoma, Auburn, Kent Area",id:"tacomaswish",url:"https://tacomaswish.net/",instagram:null,facebook:"https://www.facebook.com/people/Tacoma-Swish/100054647821353/",location:"Tacoma, WA",logo:"/images/tacomaswish.jpg",tryouts:{link:"https://tacomaswish.net/tryouts/",dates:null,locations:null}},{name:"Game Time",area:"Tacoma, Auburn, Kent Area",id:"gametime",url:"www.bygametime.com",instagram:"https://www.instagram.com/gametimeaaubasketball/",facebook:"https://www.facebook.com/people/Game-Time-Hoops-Basketball/100069750315551/",location:"Tacoma, WA",logo:"/images/gametime.jpg",tryouts:{link:null,dates:null,locations:null}},{name:"Team Wilder",area:"Tacoma, Auburn, Kent Area",id:"wilder",url:"https://www.q-timebasketball.com/",instagram:"https://www.instagram.com/quincy_wilder1/",facebook:"https://www.facebook.com/groups/TeamWilderHIWWT/",location:"Fife, WA 98424",logo:"https://static.wixstatic.com/media/581bc3_d6727129223e4fc49d33c6d29e91b9f4~mv2.png/v1/crop/x_4,y_0,w_2040,h_1445/fill/w_720,h_510,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG-7295_edited.png",tryouts:{link:"https://www.q-timebasketball.com/q-time-clinic-july-2023",dates:"August 27, 2023",locations:"Fife, 5616 20th St E, Fife, WA 98424, USA"}},{name:"Future Stars",area:"Tacoma, Auburn, Kent Area",id:"futurestars",url:"http://fsbaau.org/",instagram:null,facebook:null,location:"Federal Way, WA",logo:"https://lh3.googleusercontent.com/p/AF1QipMmZTMbNMTVFU7B3UmwD3mDBnzQb870p_FjyGsJ=w960-h960-n-o-v1",tryouts:{link:null,dates:null,locations:null}},{name:"Valley Hoops",area:"Tacoma, Auburn, Kent Area",id:"valleyhoops",url:"https://www.hudl.com/team/v2/653405/VALLEY-HOOPS",instagram:null,facebook:null,twitter:"https://twitter.com/ValleyHoops",location:"Lake Tapps, WA",logo:null,tryouts:{link:null,dates:null,locations:null}},{name:"Narrows Elite",area:"Kitsap",id:"narrows",url:"https://www.narrowselite.com/facilities",instagram:"https://www.instagram.com/narrowselite/",facebook:null,location:"9010 Prentice Ave, Gig Harbor, WA 98332",logo:"https://lh3.googleusercontent.com/p/AF1QipM9WmZWTlzQh2Iq_4DRKL_5vh43EOgjOvLQpuR9=s1360-w1360-h1020",tryouts:{link:"https://www.narrowselite.com/tryouts",dates:"August 18th, 2023",locations:"9644 Bujacich Rd Building C Suite F, Gig Harbor, WA 98332"}},{name:"Drive Basketball",area:"Kitsap",id:"drive",url:"https://www.drivebasketball.org/",instagram:null,facebook:"https://www.facebook.com/DRIVE.Basketball/",location:"Poulsbo, WA 98370",logo:"/images/drive.png",tryouts:{link:"https://www.drivebasketball.org/tryouts",dates:null,locations:null}},{name:"D Block",area:"Bellingham",id:"dblock",url:"https://www.dblocks.webs.com/",instagram:"https://www.instagram.com/dblockhoops/",facebook:"https://www.facebook.com/dblockhoopsaau/",location:"Bellingham, Washington",logo:"https://static.wixstatic.com/media/07c7db_530728e875ab4d86ac0bb8ea88eab89f~mv2.jpg/v1/fill/w_466,h_466,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/logo%20fade_JPG.jpg",tryouts:{link:"https://www.dblocks.webs.com/2023-springsummer-tryout-registration",dates:"August 21-24, 2023",locations:"Lynden WA, 98264"}},{name:"Northwest Greyhounds",area:"Tacoma, Auburn, Kent Area",id:"nwgreyhounds",url:"https://www.instagram.com/northwestgreyhounds/",instagram:"https://www.instagram.com/northwestgreyhounds/",facebook:"https://www.facebook.com/people/NW-Greyhounds-2024/100067458040503/",twitter:"https://twitter.com/NWGreyhounds",location:"Stadium HS, 111 N E St Tacoma, WA",logo:"/images/nwgreyhounds.jpg",tryouts:{link:null,dates:null,locations:null}},{name:"Jr Wildcats Basketball",area:"Everett Area",id:"jrwildcats",url:"http://jrwildcatsbasketball.com/",instagram:null,facebook:"https://www.facebook.com/jrwildcatsbasketball/",twitter:null,location:"Archbishop Murphy High School, Everett, WA, 98208",logo:"https://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/2688/2020/10/24161338/am_logo_outline.png",tryouts:{link:null,dates:null,locations:null}},{name:"Mill Creek Warriors",area:"Everett Area",id:"millcreekwarriors",url:"https://millcreekwarriorsbasketball.org/",instagram:null,facebook:null,twitter:null,location:"Mill Creek, WA",logo:"https://img1.wsimg.com/isteam/ip/982ae05e-7bab-421d-91d6-19b5727f5ede/MCW_LogoWeb-0001.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:500,cg:true",tryouts:{link:"https://millcreekwarriorsbasketball.org/tryouts",dates:"August 18, 19, 2023",locations:"5409 228th St. SW., Mountlake Terrace, WA 98043"}},{name:"North City Basketball",area:"Everett Area",id:"northcitybasketball",url:"http://northcityaau.com/",instagram:null,facebook:null,twitter:null,location:"23607 54th Ave W, Mountlake Terrace, WA 98043",logo:"http://northcityaau.com/wp-content/uploads/2017/01/nc_logo_on_white_sm.jpg",tryouts:{link:"http://northcityaau.com/tryouts/",dates:null,locations:null}},{name:"Profound Basketball Academy",area:"Everett Area",id:"profound",url:"https://www.profoundbasketballacademy.net/",instagram:null,facebook:"https://www.facebook.com/ProFound-Basketball-Academy-691308484618263/",twitter:"https://twitter.com/AcademyProfound",location:"Snohomish, WA",logo:"https://static.wixstatic.com/media/4b90b7_d50fa0f8356d481494cc26d59d457ffd~mv2.png/v1/fill/w_154,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/profound%20logo1.png",tryouts:{link:null,dates:null,locations:null}},{name:"Oly Basketball Academy",area:"Olympia, Centralia Area",id:"olybasket",url:"https://www.olybasketballacademy.com/",instagram:"https://www.instagram.com/olybasketballacademy/",facebook:null,twitter:null,location:null,logo:"https://static.wixstatic.com/media/e89a31_99c8cba6763d4b13b373988305978865~mv2.png/v1/fill/w_334,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FullLogo_Transparent_NoBuffer.png",tryouts:{link:"https://allcityhoops.wufoo.com/forms/oly-basketball-2023-fallwinter-team-tryouts/",dates:"August 20, 2023",locations:"Evergreen State College, WA"}}]}},function(t){t.O(0,[255,774,888,179],function(){return t(t.s=4284)}),_N_E=t.O()}]);