(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ow3J:function(e,t,r){"use strict";r.r(t),r.d(t,"PageModule",function(){return y});var o=r("ofXK"),s=r("tyNb"),i=r("fXoL"),a=r("jhN1");let b=(()=>{class e{constructor(e){this.titleService=e,this.titleService.setTitle("About Us")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Gb(a.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-about-us"]],decls:36,vars:0,consts:[["fxLayoutGap","20px",1,"d-flex","flex-row","bd-highlight","mb-2","p-60"],["src","../../../assets/images/glint_about_1.jpg","alt","...",1,"rounded","float-start",2,"width","40%","height","auto"],[1,"p-l-40"],[1,"header","c-grAj","tx-tr","le-spRe","f-szRe075","f-wht4"],[1,"sub-header","c-rd","f-szRe22"],[1,"f-szRe09","c-gr"],[1,"unorderlist","d-flex","flex-row","bd-highlight","mb-2","f-szRe09","c-gr","p-10"],[1,"li-st-ty"],["aria-hidden","true",1,"fa","fa-check","c-gre","p-b-10"],[1,"youvideo","f-fam","p-10","d-flex","flex-row","bd-highlight","mb-2"],["target","_blank","href","https://youtube.com/embed/b_HSz9KS1Po",1,"tx-dec","c-rd-custom"],["aria-hidden","true",1,"fa","fa-play-circle-o","fa-2x"],[1,"p-l-10"]],template:function(e,t){1&e&&(i.Jb(0,"div",0),i.Hb(1,"img",1),i.Jb(2,"div",2),i.Jb(3,"span",3),i.Zb(4,"ACQUAINT US"),i.Ib(),i.Jb(5,"h2",4),i.Zb(6,"About us"),i.Ib(),i.Jb(7,"p",5),i.Zb(8," Over one year we've fostered great relationships with our clients. We've always focused on making websites better for everyone, so our clients can focus on what they do best: selling their products and services. Today, web4ex solution is a tight-knit team of energetic web developers with a passion for getting great results. We provide personal, local service to our clients from all over the India. "),i.Ib(),i.Jb(9,"div",6),i.Jb(10,"ul",7),i.Jb(11,"li"),i.Hb(12,"i",8),i.Zb(13," Design "),i.Ib(),i.Jb(14,"li"),i.Hb(15,"i",8),i.Zb(16," Development "),i.Ib(),i.Jb(17,"li"),i.Hb(18,"i",8),i.Zb(19," eCommerce "),i.Ib(),i.Ib(),i.Jb(20,"ul",7),i.Jb(21,"li"),i.Hb(22,"i",8),i.Zb(23," Mobile Apps "),i.Ib(),i.Jb(24,"li"),i.Hb(25,"i",8),i.Zb(26," Web Hosting "),i.Ib(),i.Jb(27,"li"),i.Hb(28,"i",8),i.Zb(29," SEO "),i.Ib(),i.Ib(),i.Ib(),i.Jb(30,"div",9),i.Jb(31,"a",10),i.Hb(32,"i",11),i.Ib(),i.Jb(33,"a",10),i.Jb(34,"span",12),i.Zb(35,"Watch the video"),i.Ib(),i.Ib(),i.Ib(),i.Ib(),i.Ib())},styles:[""]}),e})();var n=r("3Pt+"),l=r("tk/3");let c=(()=>{class e{constructor(e){this.http=e,this.baseUrl="http://localhost:8080/api/contact"}getContact(e){return this.http.get(`${this.baseUrl}/${e}`)}createContact(e){return this.http.post(""+this.baseUrl,e)}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(l.a))},e.\u0275prov=i.Cb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function d(e,t){1&e&&(i.Jb(0,"span",13),i.Zb(1," Required "),i.Ib())}function u(e,t){1&e&&(i.Jb(0,"span",13),i.Zb(1," Required "),i.Ib())}function p(e,t){1&e&&(i.Jb(0,"span",13),i.Zb(1," Required "),i.Ib())}function m(e,t){1&e&&(i.Jb(0,"span",13),i.Zb(1," Required "),i.Ib())}function h(e,t){1&e&&(i.Jb(0,"span",13),i.Zb(1," Required "),i.Ib())}let f=(()=>{class e{constructor(e,t,r){this.titleService=e,this.contactservice=t,this._formBuilder=r,this.titleService.setTitle("Contacts")}ngOnInit(){this.createPageForm()}createPageForm(){this.firstFormGroup=this._formBuilder.group({firstName:["",[n.k.required]],lastName:["",[n.k.required]],email:["",[n.k.required]],phoneNumber:["",[n.k.required]],message:["",[n.k.required]]})}createContact(){console.log("..",this.firstFormGroup.value),this.firstFormGroup.value.operationType="New",this.contactservice.createContact(this.firstFormGroup.value).subscribe(e=>{console.log("Contact list",e),this.firstFormGroup.reset()})}}return e.\u0275fac=function(t){return new(t||e)(i.Gb(a.b),i.Gb(c),i.Gb(n.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-contacts"]],decls:24,vars:7,consts:[[1,"header","c-grAj","tx-tr","le-spRe","f-szRe075","f-wht4","d-flex","justify-content-center"],[1,"sub-header","c-rd","f-szRe22","p-10","d-flex","justify-content-center"],["novalidate","",1,"needs-validation",3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-6"],["mdbInput","","type","text","placeholder","First name","formControlName","firstName","required","",1,"form-control"],["class","text-danger",4,"ngIf"],["mdbInput","","type","text","placeholder","Last name","formControlName","lastName","id","validationTooltip01","required","",1,"form-control"],[1,"form-group"],["mdbInput","","type","email","placeholder","Email","formControlName","email","required","",1,"form-control"],["mdbInput","","type","number","placeholder","Phone Number","formControlName","phoneNumber","required","",1,"form-control"],["placeholder","Message","formControlName","message","required","",1,"form-control",2,"height","100px"],[1,"btn","btn-danger",3,"disabled","click"],[1,"text-danger"]],template:function(e,t){1&e&&(i.Jb(0,"div"),i.Jb(1,"span",0),i.Zb(2,"GET IN TOUCH"),i.Ib(),i.Jb(3,"h2",1),i.Zb(4,"Contact Us"),i.Ib(),i.Jb(5,"form",2),i.Jb(6,"div",3),i.Jb(7,"div",4),i.Hb(8,"input",5),i.Yb(9,d,2,0,"span",6),i.Ib(),i.Jb(10,"div",4),i.Hb(11,"input",7),i.Yb(12,u,2,0,"span",6),i.Ib(),i.Ib(),i.Jb(13,"div",8),i.Hb(14,"input",9),i.Yb(15,p,2,0,"span",6),i.Ib(),i.Jb(16,"div",8),i.Hb(17,"input",10),i.Yb(18,m,2,0,"span",6),i.Ib(),i.Jb(19,"div",8),i.Hb(20,"textarea",11),i.Yb(21,h,2,0,"span",6),i.Ib(),i.Ib(),i.Jb(22,"button",12),i.Qb("click",function(){return t.createContact()}),i.Zb(23,"Send Message"),i.Ib(),i.Ib()),2&e&&(i.wb(5),i.Tb("formGroup",t.firstFormGroup),i.wb(4),i.Tb("ngIf",null==t.firstFormGroup.controls.firstName.errors?null:t.firstFormGroup.controls.firstName.errors.required),i.wb(3),i.Tb("ngIf",null==t.firstFormGroup.controls.lastName.errors?null:t.firstFormGroup.controls.lastName.errors.required),i.wb(3),i.Tb("ngIf",null==t.firstFormGroup.controls.email.errors?null:t.firstFormGroup.controls.email.errors.required),i.wb(3),i.Tb("ngIf",null==t.firstFormGroup.controls.phoneNumber.errors?null:t.firstFormGroup.controls.phoneNumber.errors.required),i.wb(3),i.Tb("ngIf",null==t.firstFormGroup.controls.message.errors?null:t.firstFormGroup.controls.message.errors.required),i.wb(1),i.Tb("disabled","INVALID"==t.firstFormGroup.controls.firstName.status||"INVALID"==t.firstFormGroup.controls.lastName.status||"INVALID"==t.firstFormGroup.controls.email.status||"INVALID"==t.firstFormGroup.controls.phoneNumber.status||"INVALID"==t.firstFormGroup.controls.message.status))},directives:[n.l,n.g,n.d,n.a,n.f,n.c,n.j,o.i,n.h],styles:[""]}),e})(),g=(()=>{class e{constructor(e){this.titleService=e,this.titleService.setTitle("Home")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Gb(a.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-home"]],decls:20,vars:0,consts:[["id","carouselExampleIndicators","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["data-bs-target","#carouselExampleIndicators","data-bs-slide-to","1",1,"active"],["data-bs-target","#carouselExampleIndicators","data-bs-slide-to","2"],["data-bs-target","#carouselExampleIndicators","data-bs-slide-to","3"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","../../../assets/images/glint_hero_1.jpg","alt","...",1,"d-block","w-100"],[1,"carousel-item"],["src","../../../assets/images/glint_hero_2.jpg","alt","...",1,"d-block","w-100"],["src","../../../assets/images/glint_hero_3.jpg","alt","...",1,"d-block","w-100"],["href","#carouselExampleIndicators","role","button","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["href","#carouselExampleIndicators","role","button","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(e,t){1&e&&(i.Jb(0,"div",0),i.Jb(1,"ol",1),i.Hb(2,"li",2),i.Hb(3,"li",3),i.Hb(4,"li",4),i.Ib(),i.Jb(5,"div",5),i.Jb(6,"div",6),i.Hb(7,"img",7),i.Ib(),i.Jb(8,"div",8),i.Hb(9,"img",9),i.Ib(),i.Jb(10,"div",8),i.Hb(11,"img",10),i.Ib(),i.Ib(),i.Jb(12,"a",11),i.Hb(13,"span",12),i.Jb(14,"span",13),i.Zb(15,"Previous"),i.Ib(),i.Ib(),i.Jb(16,"a",14),i.Hb(17,"span",15),i.Jb(18,"span",13),i.Zb(19,"Next"),i.Ib(),i.Ib(),i.Ib())},styles:[""]}),e})(),I=(()=>{class e{constructor(e){this.titleService=e,this.titleService.setTitle("Location")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Gb(a.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-location"]],decls:29,vars:0,consts:[[1,"sub-header","c-rd","f-szRe22","p-30","d-flex","justify-content-center"],[1,"d-flex","justify-content-center","flex-row","bd-highlight","mb-2","p-20"],[1,"card","w-rem40","h-rem20","f-szRe09","m-b-1rem","mr-3"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"c-rd-custom"],["href","tel:+91 8056296172"],["href","tel:+91 9677024946"],["href","mailto:info@web4exsolution.com"],[1,"card","w-rem40","h-rem20"],["fxLayoutAlign","center centre",1,"card-title"],["src",i.bc("https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d62177.9047661902!2d80.27861800000005!3d13.0916409!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1548756227118"),"width","600","height","250","frameborder","0","allowfullscreen","",2,"border","0"]],template:function(e,t){1&e&&(i.Jb(0,"div"),i.Jb(1,"h2",0),i.Zb(2,"Address & Location"),i.Ib(),i.Jb(3,"div",1),i.Jb(4,"div",2),i.Jb(5,"div",3),i.Jb(6,"h5",4),i.Zb(7,"Address"),i.Ib(),i.Jb(8,"p",5),i.Zb(9," No.12, Kannathasan Street, Shanmuga Nagar Kundrathur Main Road, Madhanandhapuram Porur, Chennai-600 125, India "),i.Ib(),i.Jb(10,"h5",4),i.Zb(11,"Contact"),i.Ib(),i.Jb(12,"p",6),i.Jb(13,"a",7),i.Zb(14,"+91 8056296172"),i.Ib(),i.Hb(15,"br"),i.Jb(16,"a",8),i.Zb(17,"+91 9677024946"),i.Ib(),i.Ib(),i.Jb(18,"h5",4),i.Zb(19,"Email Address"),i.Ib(),i.Jb(20,"p",6),i.Jb(21,"a",9),i.Zb(22,"info@web4exsolution.com"),i.Ib(),i.Ib(),i.Ib(),i.Ib(),i.Jb(23,"div",10),i.Jb(24,"div",3),i.Jb(25,"h5",11),i.Zb(26,"Location"),i.Ib(),i.Jb(27,"div"),i.Hb(28,"iframe",12),i.Ib(),i.Ib(),i.Ib(),i.Ib(),i.Ib())},styles:[""]}),e})(),v=(()=>{class e{constructor(e){this.titleService=e,this.titleService.setTitle("Portfolio")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Gb(a.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-portfolio"]],decls:34,vars:0,consts:[[1,"header","c-grAj","tx-tr","le-spRe","f-szRe075","f-wht4","d-flex","justify-content-center"],[1,"sub-header","c-rd","f-szRe22","p-10","d-flex","justify-content-center"],[1,"container"],[1,"row","p-10"],[1,"col"],["src","../../../assets/images/gym.jpg","alt","",2,"width","30%","height","auto"],["src","../../../assets/images/loan1.png","alt","",2,"width","30%","height","auto"],["src","../../../assets/images/ras.png","alt","",2,"width","30%","height","auto"],["src","../../../assets/images/albeck.jpg","alt","",2,"width","30%","height","auto"]],template:function(e,t){1&e&&(i.Jb(0,"div"),i.Jb(1,"span",0),i.Zb(2,"RECENT WORKS"),i.Ib(),i.Jb(3,"h2",1),i.Zb(4,"Our Clients"),i.Ib(),i.Jb(5,"div",2),i.Jb(6,"div",3),i.Jb(7,"div",4),i.Hb(8,"img",5),i.Ib(),i.Jb(9,"div",4),i.Jb(10,"h5"),i.Zb(11," Worlds Gym Fitness"),i.Ib(),i.Zb(12," We done a dynamic website with mobile responsive by using a latest technology and we provided the digital marketing to explore their training works among the people "),i.Ib(),i.Ib(),i.Jb(13,"div",3),i.Jb(14,"div",4),i.Hb(15,"img",6),i.Ib(),i.Jb(16,"div",4),i.Jb(17,"h5"),i.Zb(18," Easy Loan Care"),i.Ib(),i.Zb(19," RAS Security & Allied Service is a man power security service company,we done static website with mobile responsive and also provided a digital marketing to explore their man power services among the people "),i.Ib(),i.Ib(),i.Jb(20,"div",3),i.Jb(21,"div",4),i.Hb(22,"img",7),i.Ib(),i.Jb(23,"div",4),i.Jb(24,"h5"),i.Zb(25," RAS security & Allied Service"),i.Ib(),i.Zb(26," Easy loan care is loan service provider,we done a creative dynamic website by using latest technology and also provided a digital marketing to explore their loan services among the people "),i.Ib(),i.Ib(),i.Jb(27,"div",3),i.Jb(28,"div",4),i.Hb(29,"img",8),i.Ib(),i.Jb(30,"div",4),i.Jb(31,"h5"),i.Zb(32," AL-Beck Resturant"),i.Ib(),i.Zb(33," AL-Beck Resturant is a food resturant,we done a dynamic website with table booking and online order features by using latest technology and also provided a digital marketing to explore their man power services among the people "),i.Ib(),i.Ib(),i.Ib(),i.Ib())},styles:[""]}),e})();const J=[{path:"home",component:g},{path:"what_we_do",component:(()=>{class e{constructor(e){this.titleService=e,this.titleService.setTitle("What We Do")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Gb(a.b))},e.\u0275cmp=i.Ab({type:e,selectors:[["app-what-we-do"]],decls:43,vars:0,consts:[[1,"parent","w-100","hover-shadow"],[1,"header","c-grAj","tx-tr","le-spRe","f-szRe075","f-wht4"],[1,"sub-header","c-rd","f-szRe22","p-30"],[1,"main-card","d-flex","flex-row","bd-highlight","mb-3","p-l-220","card-deck"],[1,"card","w-rem18","h-rem18","sub-card"],[1,"card-body","p-30","b-top","f-fam","f-wht"],[1,"card-title","f-szRe1","c-blcustom","headercustom"],[1,"card-text","f-szRe09","c-gr"]],template:function(e,t){1&e&&(i.Jb(0,"div",0),i.Jb(1,"span",1),i.Zb(2,"what we do"),i.Ib(),i.Jb(3,"h2",2),i.Zb(4,"Our Services"),i.Ib(),i.Jb(5,"div",3),i.Jb(6,"div",4),i.Jb(7,"div",5),i.Jb(8,"h5",6),i.Zb(9,"Web Design"),i.Ib(),i.Jb(10,"p",7),i.Zb(11,"Our designer design a user-interface that flows freely, allowing users to navigate easily and find what you need quickly and efficiently."),i.Ib(),i.Ib(),i.Ib(),i.Jb(12,"div",4),i.Jb(13,"div",5),i.Jb(14,"h5",6),i.Zb(15,"Development"),i.Ib(),i.Jb(16,"p",7),i.Zb(17,"We are develop an accurate and flexible model describing project & we are providing services to enterprises across the world and marketing needs."),i.Ib(),i.Ib(),i.Ib(),i.Jb(18,"div",4),i.Jb(19,"div",5),i.Jb(20,"h5",6),i.Zb(21,"eCommerce"),i.Ib(),i.Jb(22,"p",7),i.Zb(23,"Our ecommerce website developers build responsive, search-engine friendly, and secure eCommerce stores. As a result, the easy-to-navigate user interface attracts more customers to search & buy their favorite products from your website or mobile app."),i.Ib(),i.Ib(),i.Ib(),i.Ib(),i.Jb(24,"div",3),i.Jb(25,"div",4),i.Jb(26,"div",5),i.Jb(27,"h5",6),i.Zb(28,"Application Development"),i.Ib(),i.Jb(29,"p",7),i.Zb(30,"We have technically skilled and enthusiastic developers who will give you the best and most simple application to fulfill your business needs. Our teams of developers are also experts in developing native Apps also cross-platform Apps that can be launched on Smartphone\u2019s and hand-held devices."),i.Ib(),i.Ib(),i.Ib(),i.Jb(31,"div",4),i.Jb(32,"div",5),i.Jb(33,"h5",6),i.Zb(34,"Web Hosting"),i.Ib(),i.Jb(35,"p",7),i.Zb(36,"All of our hosting packages include the industry leading control panel which means it's super easy for you to manage your own website without having to rely on experts!"),i.Ib(),i.Ib(),i.Ib(),i.Jb(37,"div",4),i.Jb(38,"div",5),i.Jb(39,"h5",6),i.Zb(40,"Search Engine Optimization"),i.Ib(),i.Jb(41,"p",7),i.Zb(42,"Team of SEO specialists help you build a plan of attack that optimises your organic rankings for key search queries, our SEM team can create and deploy paid ad campaigns that drive traffic, leads and revenue for your brand."),i.Ib(),i.Ib(),i.Ib(),i.Ib(),i.Ib())},styles:[""]}),e})()},{path:"about_us",component:b},{path:"portfolio",component:v},{path:"location",component:I},{path:"contacts",component:f}];let w=(()=>{class e{}return e.\u0275mod=i.Eb({type:e}),e.\u0275inj=i.Db({factory:function(t){return new(t||e)},imports:[[s.b.forChild(J)],s.b]}),e})(),y=(()=>{class e{}return e.\u0275mod=i.Eb({type:e}),e.\u0275inj=i.Db({factory:function(t){return new(t||e)},imports:[[o.b,w,n.e,n.i]]}),e})()}}]);