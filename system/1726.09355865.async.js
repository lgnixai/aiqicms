"use strict";(self.webpackChunkAnQiCMS=self.webpackChunkAnQiCMS||[]).push([[1726],{81726:function(Pe,zt,N){N.d(zt,{diagram:function(){return Le}});var Ut=N(91088),L=N(16483),jt=N(78881),Kt=N(30156),Xt=N(79771),D=N(82725),T=N(15525),Oe=N(90795),mt=function(){var t=function(g,n,u,d){for(u=u||{},d=g.length;d--;u[g[d]]=n);return u},s=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],i=[1,25],r=[1,26],a=[1,27],h=[1,28],f=[1,29],P=[1,30],R=[1,31],W=[1,9],S=[1,10],M=[1,11],U=[1,12],O=[1,13],V=[1,14],_=[1,15],rt=[1,16],at=[1,18],ct=[1,19],lt=[1,20],ot=[1,21],ut=[1,22],dt=[1,24],ft=[1,32],k={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(n,u,d,c,m,e,I){var o=e.length-1;switch(m){case 1:return e[o-1];case 2:this.$=[];break;case 3:e[o-1].push(e[o]),this.$=e[o-1];break;case 4:case 5:this.$=e[o];break;case 6:case 7:this.$=[];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setDateFormat(e[o].substr(11)),this.$=e[o].substr(11);break;case 16:c.enableInclusiveEndDates(),this.$=e[o].substr(18);break;case 17:c.TopAxis(),this.$=e[o].substr(8);break;case 18:c.setAxisFormat(e[o].substr(11)),this.$=e[o].substr(11);break;case 19:c.setTickInterval(e[o].substr(13)),this.$=e[o].substr(13);break;case 20:c.setExcludes(e[o].substr(9)),this.$=e[o].substr(9);break;case 21:c.setIncludes(e[o].substr(9)),this.$=e[o].substr(9);break;case 22:c.setTodayMarker(e[o].substr(12)),this.$=e[o].substr(12);break;case 24:c.setDiagramTitle(e[o].substr(6)),this.$=e[o].substr(6);break;case 25:this.$=e[o].trim(),c.setAccTitle(this.$);break;case 26:case 27:this.$=e[o].trim(),c.setAccDescription(this.$);break;case 28:c.addSection(e[o].substr(8)),this.$=e[o].substr(8);break;case 30:c.addTask(e[o-1],e[o]),this.$="task";break;case 31:this.$=e[o-1],c.setClickEvent(e[o-1],e[o],null);break;case 32:this.$=e[o-2],c.setClickEvent(e[o-2],e[o-1],e[o]);break;case 33:this.$=e[o-2],c.setClickEvent(e[o-2],e[o-1],null),c.setLink(e[o-2],e[o]);break;case 34:this.$=e[o-3],c.setClickEvent(e[o-3],e[o-2],e[o-1]),c.setLink(e[o-3],e[o]);break;case 35:this.$=e[o-2],c.setClickEvent(e[o-2],e[o],null),c.setLink(e[o-2],e[o-1]);break;case 36:this.$=e[o-3],c.setClickEvent(e[o-3],e[o-1],e[o]),c.setLink(e[o-3],e[o-2]);break;case 37:this.$=e[o-1],c.setLink(e[o-1],e[o]);break;case 38:case 44:this.$=e[o-1]+" "+e[o];break;case 39:case 40:case 42:this.$=e[o-2]+" "+e[o-1]+" "+e[o];break;case 41:case 43:this.$=e[o-3]+" "+e[o-2]+" "+e[o-1]+" "+e[o];break}},table:[{3:1,4:[1,2]},{1:[3]},t(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:r,14:a,15:h,16:f,17:P,18:R,19:W,20:S,21:M,22:U,23:O,24:V,25:_,26:rt,27:at,28:ct,30:lt,32:ot,33:ut,34:23,35:dt,37:ft},t(s,[2,7],{1:[2,1]}),t(s,[2,3]),{9:33,11:17,12:i,13:r,14:a,15:h,16:f,17:P,18:R,19:W,20:S,21:M,22:U,23:O,24:V,25:_,26:rt,27:at,28:ct,30:lt,32:ot,33:ut,34:23,35:dt,37:ft},t(s,[2,5]),t(s,[2,6]),t(s,[2,15]),t(s,[2,16]),t(s,[2,17]),t(s,[2,18]),t(s,[2,19]),t(s,[2,20]),t(s,[2,21]),t(s,[2,22]),t(s,[2,23]),t(s,[2,24]),{29:[1,34]},{31:[1,35]},t(s,[2,27]),t(s,[2,28]),t(s,[2,29]),{36:[1,36]},t(s,[2,8]),t(s,[2,9]),t(s,[2,10]),t(s,[2,11]),t(s,[2,12]),t(s,[2,13]),t(s,[2,14]),{38:[1,37],40:[1,38]},t(s,[2,4]),t(s,[2,25]),t(s,[2,26]),t(s,[2,30]),t(s,[2,31],{39:[1,39],40:[1,40]}),t(s,[2,37],{38:[1,41]}),t(s,[2,32],{40:[1,42]}),t(s,[2,33]),t(s,[2,35],{39:[1,43]}),t(s,[2,34]),t(s,[2,36])],defaultActions:{},parseError:function(n,u){if(u.recoverable)this.trace(n);else{var d=new Error(n);throw d.hash=u,d}},parse:function(n){var u=this,d=[0],c=[],m=[null],e=[],I=this.table,o="",l=0,y=0,C=2,v=1,w=e.slice.call(arguments,1),x=Object.create(this.lexer),E={yy:{}};for(var tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,tt)&&(E.yy[tt]=this.yy[tt]);x.setInput(n,E.yy),E.yy.lexer=x,E.yy.parser=this,typeof x.yylloc=="undefined"&&(x.yylloc={});var et=x.yylloc;e.push(et);var Me=x.options&&x.options.ranges;typeof E.yy.parseError=="function"?this.parseError=E.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Fe(){var K;return K=c.pop()||x.lex()||v,typeof K!="number"&&(K instanceof Array&&(c=K,K=c.pop()),K=u.symbols_[K]||K),K}for(var F,Z,B,St,G={},ht,j,Nt,kt;;){if(Z=d[d.length-1],this.defaultActions[Z]?B=this.defaultActions[Z]:((F===null||typeof F=="undefined")&&(F=Fe()),B=I[Z]&&I[Z][F]),typeof B=="undefined"||!B.length||!B[0]){var At="";kt=[];for(ht in I[Z])this.terminals_[ht]&&ht>C&&kt.push("'"+this.terminals_[ht]+"'");x.showPosition?At="Parse error on line "+(l+1)+`:
`+x.showPosition()+`
Expecting `+kt.join(", ")+", got '"+(this.terminals_[F]||F)+"'":At="Parse error on line "+(l+1)+": Unexpected "+(F==v?"end of input":"'"+(this.terminals_[F]||F)+"'"),this.parseError(At,{text:x.match,token:this.terminals_[F]||F,line:x.yylineno,loc:et,expected:kt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Z+", token: "+F);switch(B[0]){case 1:d.push(F),m.push(x.yytext),e.push(x.yylloc),d.push(B[1]),F=null,y=x.yyleng,o=x.yytext,l=x.yylineno,et=x.yylloc;break;case 2:if(j=this.productions_[B[1]][1],G.$=m[m.length-j],G._$={first_line:e[e.length-(j||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(j||1)].first_column,last_column:e[e.length-1].last_column},Me&&(G._$.range=[e[e.length-(j||1)].range[0],e[e.length-1].range[1]]),St=this.performAction.apply(G,[o,y,l,E.yy,B[1],m,e].concat(w)),typeof St!="undefined")return St;j&&(d=d.slice(0,-1*j*2),m=m.slice(0,-1*j),e=e.slice(0,-1*j)),d.push(this.productions_[B[1]][0]),m.push(G.$),e.push(G._$),Nt=I[d[d.length-2]][d[d.length-1]],d.push(Nt);break;case 3:return!0}}return!0}},b=function(){var g={EOF:1,parseError:function(u,d){if(this.yy.parser)this.yy.parser.parseError(u,d);else throw new Error(u)},setInput:function(n,u){return this.yy=u||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var u=n.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var u=n.length,d=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===c.length?this.yylloc.first_column:0)+c[c.length-d.length].length-d[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),u=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+u+"^"},test_match:function(n,u){var d,c,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),c=n[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],d=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var e in m)this[e]=m[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,u,d,c;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),e=0;e<m.length;e++)if(d=this._input.match(this.rules[m[e]]),d&&(!u||d[0].length>u[0].length)){if(u=d,c=e,this.options.backtrack_lexer){if(n=this.test_match(d,m[e]),n!==!1)return n;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(n=this.test_match(u,m[c]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var u=this.next();return u||this.lex()},begin:function(u){this.conditionStack.push(u)},popState:function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},pushState:function(u){this.begin(u)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(u,d,c,m){switch(c){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 40;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};return g}();k.lexer=b;function p(){this.yy={}}return p.prototype=k,k.Parser=p,new p}();mt.parser=mt;const Zt=mt;L.extend(jt),L.extend(Kt),L.extend(Xt);let Y="",yt="",gt,pt="",H=[],J=[],Tt={},bt=[],st=[],q="",xt="";const It=["active","done","crit","milestone"];let vt=[],$=!1,_t=!1,wt="sunday",Et=0;const qt=function(){bt=[],st=[],q="",vt=[],nt=0,Dt=void 0,it=void 0,A=[],Y="",yt="",xt="",gt=void 0,pt="",H=[],J=[],$=!1,_t=!1,Et=0,Tt={},(0,D.v)(),wt="sunday"},Qt=function(t){yt=t},Gt=function(){return yt},Ht=function(t){gt=t},Jt=function(){return gt},$t=function(t){pt=t},te=function(){return pt},ee=function(t){Y=t},se=function(){$=!0},ne=function(){return $},ie=function(){_t=!0},re=function(){return _t},ae=function(t){xt=t},ce=function(){return xt},le=function(){return Y},oe=function(t){H=t.toLowerCase().split(/[\s,]+/)},ue=function(){return H},de=function(t){J=t.toLowerCase().split(/[\s,]+/)},fe=function(){return J},he=function(){return Tt},ke=function(t){q=t,bt.push(t)},me=function(){return bt},ye=function(){let t=Vt();const s=10;let i=0;for(;!t&&i<s;)t=Vt(),i++;return st=A,st},Lt=function(t,s,i,r){return r.includes(t.format(s.trim()))?!1:t.isoWeekday()>=6&&i.includes("weekends")||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(t.format(s.trim()))},ge=function(t){wt=t},pe=function(){return wt},Mt=function(t,s,i,r){if(!i.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=L(t.startTime):a=L(t.startTime,s,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=L(t.endTime):h=L(t.endTime,s,!0);const[f,P]=Te(a,h,s,i,r);t.endTime=f.toDate(),t.renderEndTime=P},Te=function(t,s,i,r,a){let h=!1,f=null;for(;t<=s;)h||(f=s.toDate()),h=Lt(t,i,r,a),h&&(s=s.add(1,"d")),t=t.add(1,"d");return[s,f]},Ct=function(t,s,i){i=i.trim();const a=new RegExp("^after\\s+(?<ids>[\\d\\w- ]+)").exec(i);if(a!==null){let f=null;for(const R of a.groups.ids.split(" ")){let W=X(R);W!==void 0&&(!f||W.endTime>f.endTime)&&(f=W)}if(f)return f.endTime;const P=new Date;return P.setHours(0,0,0,0),P}let h=L(i,s.trim(),!0);if(h.isValid())return h.toDate();{D.l.debug("Invalid date:"+i),D.l.debug("With date format:"+s.trim());const f=new Date(i);if(f===void 0||isNaN(f.getTime())||f.getFullYear()<-1e4||f.getFullYear()>1e4)throw new Error("Invalid date:"+i);return f}},Ft=function(t){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},Pt=function(t,s,i,r=!1){i=i.trim();const h=new RegExp("^until\\s+(?<ids>[\\d\\w- ]+)").exec(i);if(h!==null){let S=null;for(const U of h.groups.ids.split(" ")){let O=X(U);O!==void 0&&(!S||O.startTime<S.startTime)&&(S=O)}if(S)return S.startTime;const M=new Date;return M.setHours(0,0,0,0),M}let f=L(i,s.trim(),!0);if(f.isValid())return r&&(f=f.add(1,"d")),f.toDate();let P=L(t);const[R,W]=Ft(i);if(!Number.isNaN(R)){const S=P.add(R,W);S.isValid()&&(P=S)}return P.toDate()};let nt=0;const Q=function(t){return t===void 0?(nt=nt+1,"task"+nt):t},be=function(t,s){let i;s.substr(0,1)===":"?i=s.substr(1,s.length):i=s;const r=i.split(","),a={};Wt(r,a,It);for(let f=0;f<r.length;f++)r[f]=r[f].trim();let h="";switch(r.length){case 1:a.id=Q(),a.startTime=t.endTime,h=r[0];break;case 2:a.id=Q(),a.startTime=Ct(void 0,Y,r[0]),h=r[1];break;case 3:a.id=Q(r[0]),a.startTime=Ct(void 0,Y,r[1]),h=r[2];break}return h&&(a.endTime=Pt(a.startTime,Y,h,$),a.manualEndTime=L(h,"YYYY-MM-DD",!0).isValid(),Mt(a,Y,J,H)),a},xe=function(t,s){let i;s.substr(0,1)===":"?i=s.substr(1,s.length):i=s;const r=i.split(","),a={};Wt(r,a,It);for(let h=0;h<r.length;h++)r[h]=r[h].trim();switch(r.length){case 1:a.id=Q(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:r[0]};break;case 2:a.id=Q(),a.startTime={type:"getStartDate",startData:r[0]},a.endTime={data:r[1]};break;case 3:a.id=Q(r[0]),a.startTime={type:"getStartDate",startData:r[1]},a.endTime={data:r[2]};break}return a};let Dt,it,A=[];const Ot={},ve=function(t,s){const i={section:q,type:q,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},r=xe(it,s);i.raw.startTime=r.startTime,i.raw.endTime=r.endTime,i.id=r.id,i.prevTaskId=it,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.order=Et,Et++;const a=A.push(i);it=i.id,Ot[i.id]=a-1},X=function(t){const s=Ot[t];return A[s]},_e=function(t,s){const i={section:q,type:q,description:t,task:t,classes:[]},r=be(Dt,s);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,Dt=i,st.push(i)},Vt=function(){const t=function(i){const r=A[i];let a="";switch(A[i].raw.startTime.type){case"prevTaskEnd":{const h=X(r.prevTaskId);r.startTime=h.endTime;break}case"getStartDate":a=Ct(void 0,Y,A[i].raw.startTime.startData),a&&(A[i].startTime=a);break}return A[i].startTime&&(A[i].endTime=Pt(A[i].startTime,Y,A[i].raw.endTime.data,$),A[i].endTime&&(A[i].processed=!0,A[i].manualEndTime=L(A[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Mt(A[i],Y,J,H))),A[i].processed};let s=!0;for(const[i,r]of A.entries())t(i),s=s&&r.processed;return s},we=function(t,s){let i=s;(0,D.c)().securityLevel!=="loose"&&(i=(0,Ut.Nm)(s)),t.split(",").forEach(function(r){X(r)!==void 0&&(Rt(r,()=>{window.open(i,"_self")}),Tt[r]=i)}),Bt(t,"clickable")},Bt=function(t,s){t.split(",").forEach(function(i){let r=X(i);r!==void 0&&r.classes.push(s)})},Ee=function(t,s,i){if((0,D.c)().securityLevel!=="loose"||s===void 0)return;let r=[];if(typeof i=="string"){r=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<r.length;h++){let f=r[h].trim();f.charAt(0)==='"'&&f.charAt(f.length-1)==='"'&&(f=f.substr(1,f.length-2)),r[h]=f}}r.length===0&&r.push(t),X(t)!==void 0&&Rt(t,()=>{D.u.runFunc(s,...r)})},Rt=function(t,s){vt.push(function(){const i=document.querySelector(`[id="${t}"]`);i!==null&&i.addEventListener("click",function(){s()})},function(){const i=document.querySelector(`[id="${t}-text"]`);i!==null&&i.addEventListener("click",function(){s()})})},Ce=function(t,s,i){t.split(",").forEach(function(r){Ee(r,s,i)}),Bt(t,"clickable")},De=function(t){vt.forEach(function(s){s(t)})},Se={getConfig:()=>(0,D.c)().gantt,clear:qt,setDateFormat:ee,getDateFormat:le,enableInclusiveEndDates:se,endDatesAreInclusive:ne,enableTopAxis:ie,topAxisEnabled:re,setAxisFormat:Qt,getAxisFormat:Gt,setTickInterval:Ht,getTickInterval:Jt,setTodayMarker:$t,getTodayMarker:te,setAccTitle:D.s,getAccTitle:D.g,setDiagramTitle:D.q,getDiagramTitle:D.t,setDisplayMode:ae,getDisplayMode:ce,setAccDescription:D.b,getAccDescription:D.a,addSection:ke,getSections:me,getTasks:ye,addTask:ve,findTaskById:X,addTaskOrg:_e,setIncludes:oe,getIncludes:ue,setExcludes:de,getExcludes:fe,setClickEvent:Ce,setLink:we,getLinks:he,bindFunctions:De,parseDuration:Ft,isInvalidDate:Lt,setWeekday:ge,getWeekday:pe};function Wt(t,s,i){let r=!0;for(;r;)r=!1,i.forEach(function(a){const h="^\\s*"+a+"\\s*$",f=new RegExp(h);t[0].match(f)&&(s[a]=!0,t.shift(1),r=!0)})}const Ae=function(){D.l.debug("Something is calling, setConf, remove the call")},Yt={monday:T.Ox9,tuesday:T.YDX,wednesday:T.EFj,thursday:T.Igq,friday:T.y2j,saturday:T.LqH,sunday:T.Zyz},Ie=(t,s)=>{let i=[...t].map(()=>-1/0),r=[...t].sort((h,f)=>h.startTime-f.startTime||h.order-f.order),a=0;for(const h of r)for(let f=0;f<i.length;f++)if(h.startTime>=i[f]){i[f]=h.endTime,h.order=f+s,f>a&&(a=f);break}return a};let z;const Le={parser:Zt,db:Se,renderer:{setConf:Ae,draw:function(t,s,i,r){const a=(0,D.c)().gantt,h=(0,D.c)().securityLevel;let f;h==="sandbox"&&(f=(0,T.Ys)("#i"+s));const P=h==="sandbox"?(0,T.Ys)(f.nodes()[0].contentDocument.body):(0,T.Ys)("body"),R=h==="sandbox"?f.nodes()[0].contentDocument:document,W=R.getElementById(s);z=W.parentElement.offsetWidth,z===void 0&&(z=1200),a.useWidth!==void 0&&(z=a.useWidth);const S=r.db.getTasks();let M=[];for(const k of S)M.push(k.type);M=ft(M);const U={};let O=2*a.topPadding;if(r.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const k={};for(const p of S)k[p.section]===void 0?k[p.section]=[p]:k[p.section].push(p);let b=0;for(const p of Object.keys(k)){const g=Ie(k[p],b)+1;b+=g,O+=g*(a.barHeight+a.barGap),U[p]=g}}else{O+=S.length*(a.barHeight+a.barGap);for(const k of M)U[k]=S.filter(b=>b.type===k).length}W.setAttribute("viewBox","0 0 "+z+" "+O);const V=P.select(`[id="${s}"]`),_=(0,T.Xf)().domain([(0,T.VV$)(S,function(k){return k.startTime}),(0,T.Fp7)(S,function(k){return k.endTime})]).rangeRound([0,z-a.leftPadding-a.rightPadding]);function rt(k,b){const p=k.startTime,g=b.startTime;let n=0;return p>g?n=1:p<g&&(n=-1),n}S.sort(rt),at(S,z,O),(0,D.i)(V,O,z,a.useMaxWidth),V.append("text").text(r.db.getDiagramTitle()).attr("x",z/2).attr("y",a.titleTopMargin).attr("class","titleText");function at(k,b,p){const g=a.barHeight,n=g+a.barGap,u=a.topPadding,d=a.leftPadding,c=(0,T.BYU)().domain([0,M.length]).range(["#00B9FA","#F95002"]).interpolate(T.JHv);lt(n,u,d,b,p,k,r.db.getExcludes(),r.db.getIncludes()),ot(d,u,b,p),ct(k,n,u,d,g,c,b),ut(n,u),dt(d,u,b,p)}function ct(k,b,p,g,n,u,d){const m=[...new Set(k.map(l=>l.order))].map(l=>k.find(y=>y.order===l));V.append("g").selectAll("rect").data(m).enter().append("rect").attr("x",0).attr("y",function(l,y){return y=l.order,y*b+p-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",b).attr("class",function(l){for(const[y,C]of M.entries())if(l.type===C)return"section section"+y%a.numberSectionStyles;return"section section0"});const e=V.append("g").selectAll("rect").data(k).enter(),I=r.db.getLinks();if(e.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?_(l.startTime)+g+.5*(_(l.endTime)-_(l.startTime))-.5*n:_(l.startTime)+g}).attr("y",function(l,y){return y=l.order,y*b+p}).attr("width",function(l){return l.milestone?n:_(l.renderEndTime||l.endTime)-_(l.startTime)}).attr("height",n).attr("transform-origin",function(l,y){return y=l.order,(_(l.startTime)+g+.5*(_(l.endTime)-_(l.startTime))).toString()+"px "+(y*b+p+.5*n).toString()+"px"}).attr("class",function(l){const y="task";let C="";l.classes.length>0&&(C=l.classes.join(" "));let v=0;for(const[x,E]of M.entries())l.type===E&&(v=x%a.numberSectionStyles);let w="";return l.active?l.crit?w+=" activeCrit":w=" active":l.done?l.crit?w=" doneCrit":w=" done":l.crit&&(w+=" crit"),w.length===0&&(w=" task"),l.milestone&&(w=" milestone "+w),w+=v,w+=" "+C,y+w}),e.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",a.fontSize).attr("x",function(l){let y=_(l.startTime),C=_(l.renderEndTime||l.endTime);l.milestone&&(y+=.5*(_(l.endTime)-_(l.startTime))-.5*n),l.milestone&&(C=y+n);const v=this.getBBox().width;return v>C-y?C+v+1.5*a.leftPadding>d?y+g-5:C+g+5:(C-y)/2+y+g}).attr("y",function(l,y){return y=l.order,y*b+a.barHeight/2+(a.fontSize/2-2)+p}).attr("text-height",n).attr("class",function(l){const y=_(l.startTime);let C=_(l.endTime);l.milestone&&(C=y+n);const v=this.getBBox().width;let w="";l.classes.length>0&&(w=l.classes.join(" "));let x=0;for(const[tt,et]of M.entries())l.type===et&&(x=tt%a.numberSectionStyles);let E="";return l.active&&(l.crit?E="activeCritText"+x:E="activeText"+x),l.done?l.crit?E=E+" doneCritText"+x:E=E+" doneText"+x:l.crit&&(E=E+" critText"+x),l.milestone&&(E+=" milestoneText"),v>C-y?C+v+1.5*a.leftPadding>d?w+" taskTextOutsideLeft taskTextOutside"+x+" "+E:w+" taskTextOutsideRight taskTextOutside"+x+" "+E+" width-"+v:w+" taskText taskText"+x+" "+E+" width-"+v}),(0,D.c)().securityLevel==="sandbox"){let l;l=(0,T.Ys)("#i"+s);const y=l.nodes()[0].contentDocument;e.filter(function(C){return I[C.id]!==void 0}).each(function(C){var v=y.querySelector("#"+C.id),w=y.querySelector("#"+C.id+"-text");const x=v.parentNode;var E=y.createElement("a");E.setAttribute("xlink:href",I[C.id]),E.setAttribute("target","_top"),x.appendChild(E),E.appendChild(v),E.appendChild(w)})}}function lt(k,b,p,g,n,u,d,c){if(d.length===0&&c.length===0)return;let m,e;for(const{startTime:v,endTime:w}of u)(m===void 0||v<m)&&(m=v),(e===void 0||w>e)&&(e=w);if(!m||!e)return;if(L(e).diff(L(m),"year")>5){D.l.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const I=r.db.getDateFormat(),o=[];let l=null,y=L(m);for(;y.valueOf()<=e;)r.db.isInvalidDate(y,I,d,c)?l?l.end=y:l={start:y,end:y}:l&&(o.push(l),l=null),y=y.add(1,"d");V.append("g").selectAll("rect").data(o).enter().append("rect").attr("id",function(v){return"exclude-"+v.start.format("YYYY-MM-DD")}).attr("x",function(v){return _(v.start)+p}).attr("y",a.gridLineStartPadding).attr("width",function(v){const w=v.end.add(1,"day");return _(w)-_(v.start)}).attr("height",n-b-a.gridLineStartPadding).attr("transform-origin",function(v,w){return(_(v.start)+p+.5*(_(v.end)-_(v.start))).toString()+"px "+(w*k+.5*n).toString()+"px"}).attr("class","exclude-range")}function ot(k,b,p,g){let n=(0,T.LLu)(_).tickSize(-g+b+a.gridLineStartPadding).tickFormat((0,T.i$Z)(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));const d=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||a.tickInterval);if(d!==null){const c=d[1],m=d[2],e=r.db.getWeekday()||a.weekday;switch(m){case"millisecond":n.ticks(T.U8T.every(c));break;case"second":n.ticks(T.S1K.every(c));break;case"minute":n.ticks(T.Z_i.every(c));break;case"hour":n.ticks(T.WQD.every(c));break;case"day":n.ticks(T.rr1.every(c));break;case"week":n.ticks(Yt[e].every(c));break;case"month":n.ticks(T.F0B.every(c));break}}if(V.append("g").attr("class","grid").attr("transform","translate("+k+", "+(g-50)+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||a.topAxis){let c=(0,T.F5q)(_).tickSize(-g+b+a.gridLineStartPadding).tickFormat((0,T.i$Z)(r.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(d!==null){const m=d[1],e=d[2],I=r.db.getWeekday()||a.weekday;switch(e){case"millisecond":c.ticks(T.U8T.every(m));break;case"second":c.ticks(T.S1K.every(m));break;case"minute":c.ticks(T.Z_i.every(m));break;case"hour":c.ticks(T.WQD.every(m));break;case"day":c.ticks(T.rr1.every(m));break;case"week":c.ticks(Yt[I].every(m));break;case"month":c.ticks(T.F0B.every(m));break}}V.append("g").attr("class","grid").attr("transform","translate("+k+", "+b+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function ut(k,b){let p=0;const g=Object.keys(U).map(n=>[n,U[n]]);V.append("g").selectAll("text").data(g).enter().append(function(n){const u=n[0].split(D.e.lineBreakRegex),d=-(u.length-1)/2,c=R.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("dy",d+"em");for(const[m,e]of u.entries()){const I=R.createElementNS("http://www.w3.org/2000/svg","tspan");I.setAttribute("alignment-baseline","central"),I.setAttribute("x","10"),m>0&&I.setAttribute("dy","1em"),I.textContent=e,c.appendChild(I)}return c}).attr("x",10).attr("y",function(n,u){if(u>0)for(let d=0;d<u;d++)return p+=g[u-1][1],n[1]*k/2+p*k+b;else return n[1]*k/2+b}).attr("font-size",a.sectionFontSize).attr("class",function(n){for(const[u,d]of M.entries())if(n[0]===d)return"sectionTitle sectionTitle"+u%a.numberSectionStyles;return"sectionTitle"})}function dt(k,b,p,g){const n=r.db.getTodayMarker();if(n==="off")return;const u=V.append("g").attr("class","today"),d=new Date,c=u.append("line");c.attr("x1",_(d)+k).attr("x2",_(d)+k).attr("y1",a.titleTopMargin).attr("y2",g-a.titleTopMargin).attr("class","today"),n!==""&&c.attr("style",n.replace(/,/g,";"))}function ft(k){const b={},p=[];for(let g=0,n=k.length;g<n;++g)Object.prototype.hasOwnProperty.call(b,k[g])||(b[k[g]]=!0,p.push(k[g]));return p}}},styles:t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`}}}]);
