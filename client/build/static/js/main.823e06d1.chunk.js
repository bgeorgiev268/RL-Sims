(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,a,t){e.exports=t(72)},39:function(e,a,t){},40:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(19),l=t.n(r),o=(t(39),t(5)),i=t(6),c=t(2),m=t(8),u=t(7),d=t(9),p=t(13),h=(t(40),t(11)),g=t.n(h);t(58);var v=function(e){return s.a.createElement("h1",{className:"title"},e.children)},f=(t(59),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).addFav=n.addFav.bind(Object(c.a)(n)),n}return Object(i.a)(t,[{key:"addFav",value:function(e){e.preventDefault(),g.a.post("/favorites",{user:this.props.username,name:this.props.name,location:this.props.location,star:this.props.star,url:this.props.url,image:this.props.image}).then((function(e){return console.log("success!")})).catch((function(e){console.log("login error: "),console.log(e)})),console.log({Favorites:{user:this.props.username,name:this.props.name,location:this.props.location,star:this.props.star,url:this.props.url}})}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.image,n=e.location,r=e.star,l=e.url;return s.a.createElement("div",{className:"card hoverable z-depth-4 center-align"},s.a.createElement("div",{className:"card-image"},s.a.createElement("img",{src:t,alt:a}),s.a.createElement("button",{className:"btn-floating btn-small waves-effect waves-light blue",id:"btn"},s.a.createElement("i",{onClick:this.addFav,className:"material-icons right"},"add"))),s.a.createElement("div",{className:"card-content"},s.a.createElement("a",{rel:"noopener noreferrer",href:l,target:"_blank",className:"card-title"},a),s.a.createElement("p",null,n),s.a.createElement("p",null,"Star Rating: ",r)))}}]),t}(n.Component)),E=t(16),b=t.n(E);t(62),t(63),t(64),t(65);var N=function(e){return s.a.createElement("footer",{className:"footer-".concat(e.url)},s.a.createElement("span",{className:"spanElement johnCena"},"\xa9 Copyright Team Liquid Productions"))},k={items:5,nav:!0,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:3500,loop:!0,margin:0,responsive:{0:{items:1,nav:!0},800:{items:2,nav:!0},1e3:{items:3,nav:!0},1200:{items:4,nav:!0},1600:{items:5,nav:!0}}},y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={hiking:[],riding:[],climbing:[],skiing:[],lat:"",lon:"",username:n.props.username},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.ipRequest(),this.apiCall()}},{key:"componentDidUpdate",value:function(e,a){this.state.lat===a.lat&&this.state.lon===a.lon||this.apiCall()}},{key:"ipRequest",value:function(){var e=this;fetch("http://api.ipstack.com/check?access_key=e55e719d784f412d8c8f7507c8ac815c&format=1").then((function(e){return e.json()})).then((function(a){console.log("IP results"),console.log(a.latitude+" "+a.longitude),e.setState({lat:a.latitude,lon:a.longitude})}))}},{key:"apiCall",value:function(){var e=this,a=this.state.lat?this.state.lat:"40.0274",t=this.state.lon?this.state.lon:"-105.2519",n="200734128-f28df197b25c568ae8f8d080e196f6f4";fetch("https://www.hikingproject.com/data/get-trails?lat="+a+"&lon="+t+"&maxDistance=50&maxResults=16&key="+n).then((function(e){return e.json()})).then((function(a){for(var t=[],n=0;n<a.trails.length;n++)t.push({name:a.trails[n].name,location:a.trails[n].location,star:a.trails[n].stars,url:a.trails[n].url,image:a.trails[n].imgMedium,id:n+1,activity:"hiking"});e.setState({hiking:t})})),fetch("https://www.mtbproject.com/data/get-trails?lat="+a+"&lon="+t+"&maxDistance=50&maxResults=16&key="+n).then((function(e){return e.json()})).then((function(a){for(var t=[],n=0;n<a.trails.length;n++)t.push({name:a.trails[n].name,location:a.trails[n].location,star:a.trails[n].stars,url:a.trails[n].url,image:a.trails[n].imgMedium,id:n+1,activity:"riding"});e.setState({riding:t})})),fetch("https://www.mountainproject.com/data/get-routes-for-lat-lon?lat="+a+"&lon="+t+"&maxDistance=50&minDiff=5.6&maxDiff=5.10&maxResults=16&key=200734128-d1406dd362d69ba4d097a47e42427bd8").then((function(e){return e.json()})).then((function(a){console.log("STUFF@@!#$!@"),console.log(a.routes);for(var t=[],n=0;n<a.routes.length;n++)t.push({name:a.routes[n].name,location:a.routes[n].location[2]+", "+a.routes[n].location[0],star:a.routes[n].stars,url:a.routes[n].url,image:a.routes[n].imgMedium,id:n+1,activity:"climbing"});e.setState({climbing:t})})),fetch("https://www.powderproject.com/data/get-trails?lat="+a+"&lon="+t+"&maxDistance=200&maxResults=16&key="+n).then((function(e){return e.json()})).then((function(a){for(var t=[],n=0;n<a.trails.length;n++)t.push({name:a.trails[n].name,location:a.trails[n].location,star:a.trails[n].stars,url:a.trails[n].url,image:a.trails[n].imgMedium,id:n+1,activity:"skiing"});console.log("ski trails: ",t),e.setState({skiing:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"pimg1"},s.a.createElement("h1",{className:"project text-center"},"RL Sims")),s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"row",id:"section"},s.a.createElement(v,null,"Hiking"),s.a.createElement(b.a,{ref:"car",options:k},this.state.hiking.map((function(a){return s.a.createElement(f,{username:e.props.username,id:a.id,key:a.id,name:a.name,image:a.image,url:a.url,location:a.location,star:a.star})}))))),s.a.createElement("div",{className:"pimg2"},s.a.createElement("div",{className:"ptext"})),s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"row",id:"section"},s.a.createElement(v,null,"Mountain Biking"),s.a.createElement(b.a,{ref:"car",options:k},this.state.riding.map((function(a){return s.a.createElement(f,{username:e.props.username,id:a.id,key:a.id,name:a.name,image:a.image,url:a.url,location:a.location,star:a.star})}))))),s.a.createElement("div",{className:"pimg3"},s.a.createElement("div",{className:"ptext"})),s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"row",id:"section"},s.a.createElement(v,null,"Climbing"),s.a.createElement(b.a,{ref:"car",options:k},this.state.climbing.map((function(a){return s.a.createElement(f,{username:e.props.username,id:a.id,key:a.id,name:a.name,image:a.image,url:a.url,location:a.location,star:a.star})}))))),s.a.createElement("div",{className:"pimg4"},s.a.createElement("div",{className:"ptext"})),s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"row",id:"section"},s.a.createElement(v,null,"Powder"),this.state.skiing.length?s.a.createElement(b.a,{ref:"car",options:k},this.state.skiing.map((function(a){return s.a.createElement(f,{username:e.props.username,id:a.id,key:a.id,name:a.name,image:a.image,url:a.url,location:a.location,star:a.star})})),";"):s.a.createElement("h3",null,"No results in your area."))),s.a.createElement("div",{className:"pimg5"},s.a.createElement("div",{className:"ptext"})),s.a.createElement(N,{url:"home"}))}}]),t}(n.Component),j=t(17),w=(t(66),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={username:"",password:"",confirmPassword:""},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e.handleChange=e.handleChange.bind(Object(c.a)(e)),e}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var a=this;console.log("sign-up handleSubmit, username: "),console.log(this.state.username),e.preventDefault(),g.a.post("/user/",{username:this.state.username,password:this.state.password}).then((function(e){console.log(e),e.data.errmsg?console.log("username already taken"):(console.log("successful signup"),a.setState({username:"",password:"",redirectTo:"/login"}))})).catch((function(e){console.log("signup error: "),console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"userDiv2"},s.a.createElement("div",{className:"SignupForm userContainer"},s.a.createElement("h4",null,"Sign up"),s.a.createElement("form",{className:"form-horizontal"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-1 col-ml-auto"},s.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),s.a.createElement("div",{className:"col-3 col-mr-auto"},s.a.createElement("input",{className:"form-input",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-1 col-ml-auto"},s.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password: ")),s.a.createElement("div",{className:"col-3 col-mr-auto"},s.a.createElement("input",{className:"form-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),s.a.createElement("div",{className:"form-group "},s.a.createElement("div",{className:"col-7"}),s.a.createElement("button",{className:"btn btn-primary col-1 col-mr-auto jumanji",onClick:this.handleSubmit,type:"submit"},"Sign up")))),s.a.createElement(N,{url:"user"}))}}]),t}(n.Component)),O=(t(67),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e.handleChange=e.handleChange.bind(Object(c.a)(e)),e}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),console.log("handleSubmit"),g.a.post("/user/login",{username:this.state.username,password:this.state.password}).then((function(e){console.log("login response: "),console.log(e),200===e.status&&(a.props.updateUser({loggedIn:!0,username:e.data.username}),a.setState({username:"",password:"",redirectTo:"/"}))})).catch((function(e){console.log("login error: "),console.log(e)}))}},{key:"render",value:function(){return this.state.redirectTo?s.a.createElement(p.a,{to:{pathname:this.state.redirectTo}}):s.a.createElement("div",{className:"userDiv"},s.a.createElement("div",{className:"userContainer"},s.a.createElement("h4",null,"Login"),s.a.createElement("form",{className:"form-horizontal"},s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-1 col-ml-auto"},s.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username")),s.a.createElement("div",{className:"col-3 col-mr-auto"},s.a.createElement("input",{className:"form-input",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-1 col-ml-auto"},s.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password: ")),s.a.createElement("div",{className:"col-3 col-mr-auto"},s.a.createElement("input",{className:"form-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),s.a.createElement("div",{className:"form-group "},s.a.createElement("div",{className:"col-7"}),s.a.createElement("button",{className:"btn btn-primary col-1 col-mr-auto jumanji",onClick:this.handleSubmit,type:"submit"},"Login")))),s.a.createElement(N,{url:"user"}))}}]),t}(n.Component)),C=(t(71),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).logout=n.logout.bind(Object(c.a)(n)),n.state={username:""},n}return Object(i.a)(t,[{key:"logout",value:function(e){var a=this;e.preventDefault(),console.log("logging out"),g.a.post("/user/logout").then((function(e){console.log(e.data),200===e.status&&a.props.updateUser({loggedIn:!1,username:null})})).catch((function(e){console.log("Logout error")}))}},{key:"render",value:function(){var e=this.props.loggedIn;return console.log("navbar render, props: "),console.log(this.props.username,"AIHF)IHA)IHD)IH)F*UA)SU)U)*U!#)*U)AHSD)AHJ"),s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar ",id:"nav-container"},s.a.createElement("div",{className:"col-4"},e?s.a.createElement("div",{className:"align"},s.a.createElement("section",{className:"navbar-section"},s.a.createElement(d.b,{to:"/",className:"btn btn-link text-secondary"},s.a.createElement("span",{className:"text-secondary spanElement"},"Home")),s.a.createElement(d.b,{to:"/favorites",className:"btn btn-link"},s.a.createElement("span",{className:"text-secondary spanElement"},s.a.createElement("span",{className:"spanElement"},this.props.username,"'s")," Favorites")),s.a.createElement(d.b,{to:"#",className:"btn btn-link text-secondary",onClick:this.logout},s.a.createElement("span",{className:"text-secondary spanElement"},"logout")))):s.a.createElement("section",{className:"navbar-section"},s.a.createElement(d.b,{to:"/",className:"btn btn-link text-secondary"},s.a.createElement("span",{className:"text-secondary spanElement"},"Home")),s.a.createElement(d.b,{to:"/login",className:"btn btn-link text-secondary"},s.a.createElement("span",{className:"text-secondary spanElement"},"Login")),s.a.createElement(d.b,{to:"/signup",className:"btn btn-link"},s.a.createElement("span",{className:"text-secondary spanElement"},"Sign Up"))))))}}]),t}(n.Component)),S=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={loggedIn:!1,username:null},e.getUser=e.getUser.bind(Object(c.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(c.a)(e)),e.updateUser=e.updateUser.bind(Object(c.a)(e)),e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"updateUser",value:function(e){this.setState(e)}},{key:"getUser",value:function(){var e=this;g.a.get("/user/").then((function(a){if(console.log("Get user response: "),console.log(a.data),a.data.user){console.log("Get User: There is a user saved in the server session: "+a.data.user.username);var t=a.data.user.username;e.setState({loggedIn:!0,username:t})}else console.log("Get user: no user"),e.setState({loggedIn:!1,username:null})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(d.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(C,{username:this.state.username,updateUser:this.updateUser,loggedIn:this.state.loggedIn}),this.state.loggedIn,s.a.createElement(p.b,{exact:!0,path:"/",render:function(){return s.a.createElement(y,{username:e.state.username})}}),s.a.createElement(p.b,{path:"/login",render:function(){return s.a.createElement(O,{updateUser:e.updateUser})}}),s.a.createElement(p.b,{path:"/signup",render:function(){return s.a.createElement(w,{signup:e.signup})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(d.a,null,s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.823e06d1.chunk.js.map