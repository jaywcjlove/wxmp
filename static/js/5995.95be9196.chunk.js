"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5995],{5995:function(n,e,t){t.r(e),t.d(e,{ntriples:function(){return x}});var r=0,i=1,u=2,a=3,s=4,o=5,c=6,l=7,f=8,h=9,p=10,v=11,b=12;function k(n,e){var t,k=n.location;t=k==r&&"<"==e?i:k==r&&"_"==e?u:k==a&&"<"==e?s:k==o&&"<"==e?c:k==o&&"_"==e?l:k==o&&'"'==e?f:k==i&&">"==e||k==u&&" "==e?a:k==s&&">"==e?o:k==c&&">"==e||k==l&&" "==e||k==f&&'"'==e||k==h&&" "==e||k==p&&">"==e?v:k==f&&"@"==e?h:k==f&&"^"==e?p:" "!=e||k!=r&&k!=a&&k!=o&&k!=v?k==v&&"."==e?r:b:k,n.location=t}var x={startState:function(){return{location:r,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(n,e){var t=n.next();if("<"==t){k(e,t);var r="";return n.eatWhile((function(n){return"#"!=n&&">"!=n&&(r+=n,!0)})),e.uris.push(r),n.match("#",!1)?"variable":(n.next(),k(e,">"),"variable")}if("#"==t){var i="";return n.eatWhile((function(n){return">"!=n&&" "!=n&&(i+=n,!0)})),e.anchors.push(i),"url"}if(">"==t)return k(e,">"),"variable";if("_"==t){k(e,t);var u="";return n.eatWhile((function(n){return" "!=n&&(u+=n,!0)})),e.bnodes.push(u),n.next(),k(e," "),"builtin"}if('"'==t)return k(e,t),n.eatWhile((function(n){return'"'!=n})),n.next(),"@"!=n.peek()&&"^"!=n.peek()&&k(e,'"'),"string";if("@"==t){k(e,"@");var a="";return n.eatWhile((function(n){return" "!=n&&(a+=n,!0)})),e.langs.push(a),n.next(),k(e," "),"string.special"}if("^"==t){n.next(),k(e,"^");var s="";return n.eatWhile((function(n){return">"!=n&&(s+=n,!0)})),e.types.push(s),n.next(),k(e,">"),"variable"}" "==t&&k(e,t),"."==t&&k(e,t)}}}}]);
//# sourceMappingURL=5995.95be9196.chunk.js.map