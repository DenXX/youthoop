(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{156:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gifts",function(){return i(8417)}])},8872:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let a=i(8754),r=i(1757),o=r._(i(7294)),s=i(3935),n=a._(i(2636)),l=i(5471),c=i(3735),d=i(3341);i(4210);let u=i(9955),h=a._(i(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,i,a,r,o){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let n="decode"in e?e.decode():Promise.resolve();n.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&r(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}})}function p(e){let[t,i]=o.version.split("."),a=parseInt(t,10),r=parseInt(i,10);return a>18||18===a&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,o.forwardRef)((e,t)=>{let{src:i,srcSet:a,sizes:r,height:s,width:n,decoding:l,className:c,style:d,fetchPriority:u,placeholder:h,loading:f,unoptimized:g,fill:b,onLoadRef:w,onLoadingCompleteRef:k,setBlurComplete:y,setShowAltText:v,onLoad:x,onError:j,..._}=e;return o.default.createElement("img",{..._,...p(u),loading:f,width:n,height:s,decoding:l,"data-nimg":b?"fill":"1",className:c,style:d,sizes:r,srcSet:a,src:i,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&m(e,h,w,k,y,g))},[i,h,w,k,y,j,g,t]),onLoad:e=>{let t=e.currentTarget;m(t,h,w,k,y,g)},onError:e=>{v(!0),"blur"===h&&y(!0),j&&j(e)}})});function b(e){let{isAppRouter:t,imgAttributes:i}=e,a={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...p(i.fetchPriority)};return t?((0,s.preload)(i.src,a),null):o.default.createElement(n.default,null,o.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...a}))}let w=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(u.RouterContext),a=(0,o.useContext)(d.ImageConfigContext),r=(0,o.useMemo)(()=>{let e=f||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[a]),{onLoad:s,onLoadingComplete:n}=e,m=(0,o.useRef)(s);(0,o.useEffect)(()=>{m.current=s},[s]);let p=(0,o.useRef)(n);(0,o.useEffect)(()=>{p.current=n},[n]);let[w,k]=(0,o.useState)(!1),[y,v]=(0,o.useState)(!1),{props:x,meta:j}=(0,l.getImgProps)(e,{defaultLoader:h.default,imgConf:r,blurComplete:w,showAltText:y});return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...x,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:p,setBlurComplete:k,setShowAltText:v,ref:t}),j.priority?o.default.createElement(b,{isAppRouter:!i,imgAttributes:x}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return n}}),i(4210);let a=i(7757),r=i(3735);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function n(e,t){var i;let n,l,c,{src:d,sizes:u,unoptimized:h=!1,priority:f=!1,loading:m,className:p,quality:g,width:b,height:w,fill:k=!1,style:y,onLoad:v,onLoadingComplete:x,placeholder:j="empty",blurDataURL:_,fetchPriority:S,layout:C,objectFit:B,objectPosition:P,lazyBoundary:E,lazyRoot:z,...I}=e,{imgConf:O,showAltText:L,blurComplete:M,defaultLoader:N}=t,T=O||r.imageConfigDefault;if("allSizes"in T)n=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);n={...T,allSizes:e,deviceSizes:t}}let U=I.loader||N;delete I.loader,delete I.srcSet;let R="__next_img_default"in U;if(R){if("custom"===n.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:i,...a}=t;return e(a)}}if(C){"fill"===C&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!u&&(u=t)}let A="",G=s(b),H=s(w);if("object"==typeof(i=d)&&(o(i)||void 0!==i.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,_=_||e.blurDataURL,A=e.src,!k){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let D=!f&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:A)||d.startsWith("data:")||d.startsWith("blob:"))&&(h=!0,D=!1),n.unoptimized&&(h=!0),R&&d.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(h=!0),f&&(S="high");let W=s(g),F=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:B,objectPosition:P}:{},L?{}:{color:"transparent"},y),q="blur"===j&&_&&!M?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:l,blurHeight:c,blurDataURL:_,objectFit:F.objectFit})+'")'}:{},K=function(e){let{config:t,src:i,unoptimized:a,width:r,quality:o,sizes:s,loader:n}=e;if(a)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:a,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(i);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let o=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:o,kind:"x"}}(t,r,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,a)=>n({config:t,src:i,quality:o,width:e})+" "+("w"===c?e:a+1)+c).join(", "),src:n({config:t,src:i,quality:o,width:l[d]})}}({config:n,src:d,unoptimized:h,width:G,quality:W,sizes:u,loader:U}),X={...I,loading:D?"lazy":m,fetchPriority:S,width:G,height:H,decoding:"async",className:p,style:{...F,...q},sizes:K.sizes,srcSet:K.srcSet,src:K.src},J={unoptimized:h,priority:f,placeholder:j,fill:k};return{props:X,meta:J}}},7757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:a,blurHeight:r,blurDataURL:o,objectFit:s}=e,n=a?40*a:t,l=r?40*r:i,c=n&&l?"viewBox='0 0 "+n+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},2555:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return c},unstable_getImgProps:function(){return l}});let a=i(8754),r=i(5471),o=i(4210),s=i(8872),n=a._(i(7746)),l=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,r.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},c=s.Image},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:a,quality:r}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+a+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),i.__next_img_default=!0;let a=i},8417:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var a=i(5893),r=i(9008),o=i.n(r),s=i(5675),n=i.n(s),l=[{title:"PUMA x LaMelo Ball MB.03 Hoops Sneakers",description:"Give your kid the edge on the court with these eye-catching shoes inspired by Melo’s flair. These sneakers are not just about style – their high-performance design is perfect for kids looking to up their game.",imageUrl:"https://www.kicksonfire.com/wp-content/uploads/2023/10/PUMA-MB-03-Toxic-Release-Date.jpg",buyLink:"https://us.puma.com/us/en/sport/basketball/mb"},{title:"DribbleUp Smart Basketball",description:"This isn't just a basketball – it's a personal coach. The DribbleUp Smart Basketball, combined with its interactive app, offers real-time feedback and custom training programs. It's the ideal at-home practice buddy for kids who dream of dribbling like the pros.",imageUrl:"https://du-cms.imgix.net/31074/1698168406-sbb-christmas-still-website.jpg",buyLink:"https://dribbleup.com/products/smart-basketball"},{title:"Overtime Performance Gear",description:"Overtime Gear isn’t just comfortable; it's built for performance. Choose from a range of shorts and T-shirts designed for the court. They're breathable, stylish, and perfect for kids who take their game seriously.",imageUrl:"https://shop.overtime.tv/cdn/shop/files/Overtime_02_9c64e199-ecce-45ea-9422-58d017b6721f_1440x.jpg",buyLink:"https://shop.overtime.tv/collections/shorts-1"},{title:"Inspirational Hoops Poster",description:"Inspire your young athlete with this striking poster. It features an action-packed basketball scene with a motivational quote, perfect for bedrooms or training spaces to keep the basketball dream alive and kicking.",imageUrl:"https://ikonick.com/cdn/shop/files/michaeljordannothingworthhavingcomeseasy_canvas_canvas-wide_800x800_b0d7fb04-e1fc-4304-b980-8bb03d746819_770x770_crop_center.jpg",buyLink:"https://ikonick.com/collections/sports"},{title:"Personalized Baden Basketball",description:"Make it personal with a Baden Custom Basketball. Add your kid's name for a special touch. It's a quality ball that stands out at practice and games – both durable and cool.",imageUrl:"/images/baden_custom_ball.png",buyLink:"https://www.badensports.com/collections/personalized-basketballs/products/elite-game-basketball"},{title:"Trashketball: Engineering Meets Hoops",description:"Combine basketball fun with a dash of engineering. Trashketball lets kids build their own hoop and explore science in a super cool way. Perfect for young inventors and basketball fans!",imageUrl:"https://images.kiwico.com/products/2669/4974-1000w.jpg",buyLink:"https://www.kiwico.com/eureka/trashketball"},{title:"Point3 ROAD TRIP 2.0 Hoops Backpack",description:"This isn’t just a backpack; it's a basketball player's dream. The Point3 ROAD TRIP 2.0 has specialized compartments for all game day essentials, including a spot for the ball. It’s durable, stylish, and perfect for players on the go.",imageUrl:"https://point3gear.com/cdn/shop/products/p3-product-rt2-01_5000x.jpg",buyLink:"https://point3gear.com/products/road-trip-2-0-basketball-backpack-personalizable"},{title:"Basketball Culture Hoodie",description:"The 'On His Head' Hoodie is more than just warm wear. It's a statement piece for kids who live and breathe basketball. Made from soft cotton, it’s comfortable and cool, a must-have for any young hoop fan.",imageUrl:"https://www.bucketculture.com/cdn/shop/products/onHisHead.hoodie.lb_c592261e-c360-481b-b6a9-9704d432ef46.jpg",buyLink:"https://www.bucketculture.com/products/on-his-head-hoodie"},{title:"Slam Dunk Coffee Mug",description:"Start the day with a basketball twist. This mug is perfect for hot chocolate or morning cereal, making every breakfast a slam dunk moment for young basketball fans.",imageUrl:"https://m.media-amazon.com/images/I/71E5OISOEkL._AC_SX522_.jpg",buyLink:"https://www.amazon.com/MAXIS-Creations-Chocolate-Birthday-Basketball/dp/B00KOQ560E/"},{title:"Basketball Shoe Charms",description:"Elevate your Crocs game with these Basketball Shoe Charms! Perfect for basketball fans, these charms add a sporty flair to any pair of Crocs. They're easy to attach and switch out, allowing for endless customization. Whether you're off the court or just chilling out, these charms are a great way to show off your love for the game in style.",imageUrl:"https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4cce43923da93b7b50de17cb979832ef.jpg",buyLink:"https://www.amazon.com/MAXIS-Creations-Chocolate-Birthday-Basketball/dp/B00KOQ560E/"},{title:"SKLZ Pro Mini Hoop",description:"Bring the court indoors with the SKLZ Pro Mini Basketball Hoop. It's perfect for bedrooms or offices, offering non-stop basketball action. Ideal for honing shooting skills or just having fun.",imageUrl:"https://m.media-amazon.com/images/I/61bLyTODRRL._AC_SX466_.jpg",buyLink:"https://www.amazon.com/SKLZ-Basketball-Shatter-Resistant-Backboard/dp/B001I912SQ/?th=1"},{title:"Youth Basketball Compression Leggings with Pads",description:"These leggings are a game-changer – offering protection with built-in knee pads and a comfortable fit. Perfect for young players who give their all on the court.",imageUrl:"https://m.media-amazon.com/images/I/71U+mr6+PtL._AC_SY741_.jpg",buyLink:"https://www.amazon.com/COOLOMG-Basketball-Pants-Compression-Tights/dp/B07M5W97B4"},{title:"Jordan NBA Elite Basketball Socks",description:"Elevate the game with these Jordan NBA League White Elite Crew Socks. They're not just socks – they’re a blend of comfort and style, perfect for any young baller looking to step up their game.",imageUrl:"https://dks.scene7.com/is/image/GolfGalaxy/18NIKUNBNBLGJRDNCNBAA?qlt=70&wid=1100&fmt=webp",buyLink:"https://www.dickssportinggoods.com/p/jordan-nba-league-white-elite-crew-socks-18nikunbnblgjrdncnbaa/18nikunbnblgjrdncnbaa"},{title:"Basketball Height Chart Sticker",description:"This Basketball Height Chart Sticker is not just a fun room decoration but also a practical way to track your young athlete's growth. Designed as a basketball court, it brings the excitement of the game right into their room. Easy to apply and remove, this sticker is perfect for keeping an eye on those growth spurts, adding a touch of basketball spirit to their space.",imageUrl:"https://img.kwcdn.com/product/enhanced_images/16d6ba64e9fd2fdeb0350161629b1252_enhanced.jpg",buyLink:"https://www.temu.com/1-sheet-basketball-height-sticker-height-measure-wall-sticker-kids-height-wall-chart-sticker-g-601099512167936.html"},{title:"Winter Hoops Training Camp",description:"This holiday, give the gift of skill development with a basketball training camp. It's a great way for kids to stay active, learn new techniques, and make friends on the court.",imageUrl:"/images/holiday_camps.webp",buyLink:"https://youthoop.org/camps.html"}];let c=e=>{let{title:t,description:i,imageUrl:r,buyLink:o,reverse:s}=e;return(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row ".concat(s?"sm:flex-row-reverse justify-end":"sm:flex-row"," my-8 items-center"),children:[(0,a.jsx)("div",{className:"relative w-full sm:w-[512px] h-36 sm:h-[288px] rounded-lg overflow-hidden",children:(0,a.jsx)(n(),{src:r,alt:t,layout:"fill",objectFit:"contain",className:"rounded-lg"})}),(0,a.jsxs)("div",{className:"px-4 sm:px-6 py-2",children:[(0,a.jsxs)("a",{href:o,className:"flex items-center hover:text-blue-800",children:[(0,a.jsx)("h2",{className:"text-xl sm:text-2xl font-bold mb-2 mr-2",children:t}),(0,a.jsx)("i",{className:"fas fa-shopping-cart text-blue-600 text-lg sm:text-xl"})]}),(0,a.jsx)("p",{className:"text-gray-700 mb-4",children:i})]})]})},d=e=>{let{gifts:t}=e;return(0,a.jsx)("div",{children:t.map((e,t)=>(0,a.jsx)(c,{title:e.title,description:e.description,imageUrl:e.imageUrl,buyLink:e.buyLink,reverse:t%2!=0},t))})};function u(e){let{}=e;return(0,a.jsx)("div",{className:"flex flex-wrap md:items-start",children:(0,a.jsx)("section",{className:"w-full flex flex-col items-center",children:(0,a.jsxs)("article",{className:"flex flex-col shadow my-4 p-4",children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"Best Holiday Gifts for Boys and Girls who loves basketball in 2023"})}),(0,a.jsx)("h1",{className:"text-3xl font-bold mb-6",children:"Best Holiday Gifts for Boys and Girls who loves basketball in 2023"}),(0,a.jsx)("div",{className:"w-full bg-white shadow my-4 p-6",children:(0,a.jsx)(d,{gifts:l})})]})})})}},9008:function(e,t,i){e.exports=i(2636)},5675:function(e,t,i){e.exports=i(2555)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=156)}),_N_E=e.O()}]);