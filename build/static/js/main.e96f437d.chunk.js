(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Eve","image":"/friendtiles/eve.jpg","clicked":false},{"id":2,"name":"Villanelle","image":"/friendtiles/villanelle1.jpg","clicked":false},{"id":3,"name":"Carolyn","image":"/friendtiles/carolyn.jpg","clicked":false},{"id":4,"name":"Villanelle 2","image":"/friendtiles/villanelle2.jpg","clicked":false},{"id":5,"name":"Konstantin","image":"/friendtiles/konstantin.jpg","clicked":false},{"id":6,"name":"Villanelle 3","image":"/friendtiles/villanelle3.jpg","clicked":false},{"id":7,"name":"Kenny","image":"/friendtiles/kenny.jpg","clicked":false},{"id":8,"name":"Villanelle 4","image":"/friendtiles/villanelle4.jpg","clicked":false},{"id":9,"name":"Geraldine","image":"/friendtiles/geraldine.jpg","clicked":false},{"id":10,"name":"Villanelle 5","image":"/friendtiles/villanelle5.jpg"},{"id":11,"name":"Frank","image":"/friendtiles/frank.jpg","clicked":false},{"id":12,"name":"Villanelle 6","image":"/friendtiles/villanelle6.jpg","clicked":false}]')},,,function(e,a,n){e.exports=n(17)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),i=n(2),c=n.n(i),r=n(3),s=n(4),m=n(7),o=n(6),d=(n(13),function(e){return l.a.createElement("div",{className:"tiles",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},l.a.createElement("img",{className:"tilesimg",id:e.name,src:"/memory-game"+e.image,alt:e.name}))}),f=n(5),u=(n(14),function(e){Object(m.a)(n,e);var a=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={friends:f,message:"Click a tile to begin",score:0,topScore:0},e.handleClick=function(a,n){var t=e.state.friends;if(n)return t.forEach((function(e,a){t[a].clicked=!1})),e.setState({image:t.sort((function(){return Math.random()-.5})),message:"You guessed incorrectly!",score:0});t.forEach((function(e,n){a===e.id&&(t[n].clicked=!0)}));var l=e.state,i=l.topScore,c=l.score+1,r=c>i?c:i;return e.setState({image:t.sort((function(){return Math.random()-.5})),message:"You guessed correctly!",score:c,topScore:r})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid mainCardContainer"},l.a.createElement("div",{className:"message text-center"},l.a.createElement("p",null,this.state.message)),l.a.createElement("div",{className:"scores text-center"},l.a.createElement("p",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore)),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},this.state.friends.map((function(a){return l.a.createElement("div",{className:"col-sm-3"},l.a.createElement(d,{key:a.id,id:a.id,name:a.name,clicked:a.clicked,image:a.image,handleClick:e.handleClick}))})))))}}]),n}(t.Component)),g=(n(15),function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("h1",{className:"display-4"},"Killing Eve"),l.a.createElement("h2",{className:"display-4"},"Memory Game"),l.a.createElement("p",{className:"lead"},"Click on a tile to earn points, but don't click on any more than once!")))}),p=(n(16),function(){return l.a.createElement("div",{className:"container-fluid mainCardContainer"},l.a.createElement(g,null),l.a.createElement(u,null))});c.a.render(l.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.e96f437d.chunk.js.map