(this.webpackJsonpride=this.webpackJsonpride||[]).push([[0],{20:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(11),i=s.n(n),r=(s(20),s(4)),o=s(3),l=(s(5),s.p+"static/media/driver.47fa5572.mp4"),d=s(6),j=s(1),h=Object(c.createContext)(),b=function(e){var t=Object(c.useState)(!1),s=Object(d.a)(t,2),a=s[0],n=s[1];return Object(j.jsx)(h.Provider,{value:{isOpen:a,toggle:function(){n(!a)}},children:e.children})},m=function(e){var t=Object(c.useContext)(h),s=t.isOpen,a=t.toggle;return Object(j.jsx)("div",{className:"sideBar ".concat(s?"":"false"),children:Object(j.jsxs)("div",{className:"icon",children:[Object(j.jsx)(o.f,{className:"close",onClick:a}),Object(j.jsx)("div",{className:"sidebarMenu",children:Object(j.jsx)("ul",{className:"sidebarUl",children:e.navbar.map((function(e){return Object(j.jsx)("li",{className:"sidebarLink",onClick:a,children:Object(j.jsx)("a",{href:"/".concat(e.toLowerCase()),children:e})},e)}))})})]})})},u=s(13),x=s(14),O=s.p+"static/media/car1.7d592615.png",g=s.p+"static/media/car2.d30faa14.jpg",p=s.p+"static/media/car3.7fe88e44.jpg",v=s.p+"static/media/car4.02f748fe.jpg",f=["Home","Recent trips","Available Rides","Contact","Blog"],N=["Home","Service","About","Contact","Blog"],k=[{text:"Notification",icon:Object(j.jsx)(u.a,{className:"icons"})},{text:"Recent Trips",icon:Object(j.jsx)(o.c,{className:"icons"})},{text:"Available Rides",icon:Object(j.jsx)(x.a,{className:"icons"})}],y=[{name:"Sule",location:"Kaduna",id:1,src:O},{name:"Kolade",location:"Lagos",id:2,src:g},{name:"Peter",location:"Lagos",id:3,src:p},{name:"Chibuzor",location:"Imo",id:4,src:v}],C=function(e){var t=Object(c.useContext)(h).toggle;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"bar",children:Object(j.jsx)(o.a,{className:"Fabar",onClick:t})}),Object(j.jsx)(m,{navbar:N}),Object(j.jsx)("ul",{className:"navUl",children:N.map((function(e){return Object(j.jsx)("li",{className:"navLink",children:Object(j.jsx)("a",{href:"/".concat(e.toLowerCase()),children:e})},e)}))}),Object(j.jsx)("div",{children:e.children})]})},T=function(){var e=Object(c.useContext)(h).isOpen;return Object(j.jsx)("div",{children:Object(j.jsx)(C,{children:Object(j.jsxs)("div",{className:e?"false":"",children:[Object(j.jsxs)("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo",children:[Object(j.jsx)("source",{src:l,type:"video/mp4",className:"videoSource"}),"Your browser does not support HTML5 video."]}),Object(j.jsxs)("h1",{className:"diplay",children:[Object(j.jsx)("span",{children:"Get"}),Object(j.jsx)("span",{children:" a"}),Object(j.jsx)("span",{children:" stressfree"}),Object(j.jsx)("span",{children:" ride"}),Object(j.jsx)("div",{className:"joinUs",children:Object(j.jsx)(r.a,{to:"/signup",children:Object(j.jsx)("button",{className:"boardButton",children:"Join Us"})})})]}),Object(j.jsxs)("footer",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"About Us"}),Object(j.jsx)("h4",{children:"How it works"}),Object(j.jsx)("h4",{children:"Testimonials"}),Object(j.jsx)("h4",{children:"Career"}),Object(j.jsx)("h4",{children:"Investors"}),Object(j.jsx)("h4",{children:"Terms of Service"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Contact Us"}),Object(j.jsx)("h4",{children:"Contact"}),Object(j.jsx)("h4",{children:"Support"}),Object(j.jsx)("h4",{children:"Destination"}),Object(j.jsx)("h4",{children:"Sponsor"})]}),Object(j.jsxs)("div",{className:"socialMedia",children:[Object(j.jsx)("h3",{children:"Social Media"}),Object(j.jsx)("h4",{children:Object(j.jsx)(o.b,{})}),Object(j.jsxs)("h4",{children:[" ",Object(j.jsx)(o.g,{})," "]}),Object(j.jsx)("h4",{children:Object(j.jsx)(o.e,{})}),Object(j.jsx)("h4",{children:Object(j.jsx)(o.h,{})}),Object(j.jsx)("h4",{children:Object(j.jsx)(o.d,{})})]})]})]})})})},w=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"inputField",type:e.type,placeholder:e.placeholder,onChange:function(e){return e.target.value}})})},L=function(){var e=Object(c.useContext)(h).isOpen;return Object(j.jsx)(C,{children:Object(j.jsxs)("div",{className:"loginPage ".concat(!e&&""),children:[Object(j.jsxs)("div",{className:"head",children:[Object(j.jsx)("h1",{children:"Ride-my-way"}),Object(j.jsx)("div",{style:{backgroundColor:"transparent",position:"relative"},children:Object(j.jsx)("hr",{className:"underline"})})]}),Object(j.jsxs)("form",{action:"",className:"loginForm",children:[Object(j.jsx)(w,{type:"text",placeholder:"Username or Email"}),Object(j.jsx)(w,{type:"password",placeholder:"Password"}),Object(j.jsxs)("span",{className:"loginSpan",children:[Object(j.jsx)(r.a,{to:"/dashboard",children:Object(j.jsx)("button",{className:"loginButton",children:"Login"})}),"New Users",Object(j.jsxs)("a",{href:"/signup",className:"linkToSignup",children:[" ","Sign up"]})]})]})]})})},S=s.p+"static/media/Paul.20124625.jpg",B=function(e){return Object(j.jsxs)("ul",{className:e.ulClassName,style:{backgroundColor:"".concat(e.backgroundColor)},children:[e.items.map((function(t){return Object(j.jsx)("li",{className:e.className,children:Object(j.jsx)(r.a,{to:"/".concat(t.toLowerCase()),style:{color:"".concat(e.color),backgroundColor:"".concat(e.backgroundColor)},children:t})},t)})),e.children]})},I=function(e){return Object(j.jsxs)("ul",{className:e.ulClassName,style:{backgroundColor:"".concat(e.backgroundColor)},children:[e.items.map((function(t){return Object(j.jsx)("li",{className:e.className,children:Object(j.jsxs)(r.a,{to:"/".concat(t.text.toLowerCase().replace(/ /g,"")),style:{color:"".concat(e.color),backgroundColor:"".concat(e.backgroundColor)},children:[t.icon,t.text]})},t.text)})),e.children]})},P=function(e){return Object(j.jsx)("div",{className:"AvailableContainer",children:e.items.map((function(e){return Object(j.jsxs)("div",{className:"AvailableContent",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.src,alt:"pix",className:"AvailableRidePix"})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:["Driver's Name: ",e.name," "]}),Object(j.jsxs)("h4",{children:["Id: ",e.id]}),Object(j.jsxs)("h4",{children:["Location: ",e.location]})]})]},e.id)}))})},A=function(e){var t=Object(c.useState)(!1),s=Object(d.a)(t,2),a=(s[0],s[1],Object(c.useContext)(h).toggle);return Object(j.jsxs)("div",{className:"layer2",children:[Object(j.jsx)("div",{className:"bar",children:Object(j.jsx)(o.a,{className:"Fabar",onClick:a})}),Object(j.jsx)(m,{navbar:f}),Object(j.jsxs)(B,{items:f,className:"navLink",color:e.textTheme,backgroundColor:e.backgroundTheme,ulClassName:"navUl",children:[Object(j.jsx)("img",{className:"profilePix",alt:"trans",src:S}),Object(j.jsx)("button",{onClick:e.toggle,className:"themeChangeButton",children:"Change Theme"})]}),Object(j.jsxs)("div",{className:"dashboardContainer",children:[Object(j.jsxs)("div",{className:"dashboardFirstDiv",style:{color:"".concat(e.textTheme),backgroundColor:"".concat(e.backgroundTheme)},children:[Object(j.jsxs)("button",{className:"orderButton",style:{backgroundColor:"".concat(e.elementTheme)},children:[" ","+ Order"," "]}),Object(j.jsx)(I,{items:k,color:e.textTheme,ulClassName:"DashboardSidebar",className:"DashboardSidebarList"})]}),Object(j.jsx)("div",{className:"dashboardSecondtDiv",children:e.children}),Object(j.jsx)("div",{className:"dashboardThirdDiv",style:{color:"".concat(e.textTheme),backgroundColor:"".concat(e.backgroundTheme)},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."})]})]})},U=s(9),D=Object(c.createContext)(),E=function(e){var t=Object(c.useState)({isLightTheme:!1,dark:{background:"#232B2B",element:"#DC3D24",text:"#FFF"},light:{background:"#ECEAE0",element:"#4EB1BA",text:"#221E1D"}}),s=Object(d.a)(t,2),a=s[0],n=s[1];return Object(j.jsx)("div",{children:Object(j.jsx)(D.Provider,{value:Object(U.a)(Object(U.a)({},a),{},{toggleTheme:function(){n({dark:a.dark,light:a.light,isLightTheme:!a.isLightTheme})}}),children:e.children})})},F=[{sender:"Pauliski",message:"Order your first ride at a discount of 30%"},{sender:"Ride my way",message:"Welcome to our platform, your satisfaction is our priority"},{sender:"Shehu from Ride-my-way",message:"Welcome to our platform, your satisfaction is our priority"},{sender:"Shukurah from Ride-my-way",message:"Welcome to our platform, your satisfaction is our priority"}],R=s(15),M=function(){return Object(j.jsx)("div",{children:F.map((function(e){return Object(j.jsx)("div",{className:"notification",children:Object(j.jsxs)("div",{className:"messageContent",children:[e.sender," ",Object(j.jsx)("span",{className:"messageBody",children:e.message}),Object(j.jsx)(R.a,{className:"delete"})]})},e.message)}))})},H=function(){var e=Object(c.useContext)(D),t=e.light,s=e.dark,a=e.isLightTheme,n=e.toggleTheme,i=a?t:s;return Object(j.jsx)(A,{backgroundColor:i.background,color:i.text,toggle:n,textTheme:i.text,backgroundTheme:i.background,elementTheme:i.element,children:Object(j.jsx)("div",{className:"dashboardSecondtDiv",children:Object(j.jsx)(M,{})})})},W=function(){var e=Object(c.useContext)(h).isOpen;return Object(j.jsxs)(C,{children:[" ",Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"loginPage ".concat(!e&&""),children:[Object(j.jsxs)("div",{className:"head",children:[Object(j.jsx)("h1",{children:"Ride-my-way"}),Object(j.jsx)("div",{style:{backgroundColor:"transparent",position:"relative"},children:Object(j.jsx)("hr",{className:"underline signup_text"})})]}),Object(j.jsxs)("form",{action:"",className:"loginForm signupForm",children:[["Username","Email Adress","Home Adress","Mobile Number"].map((function(e){return Object(j.jsx)(w,{type:"text",placeholder:e},e)})),["Password","Confirm Password"].map((function(e){return Object(j.jsx)(w,{type:"password",placeholder:e})})),Object(j.jsxs)("span",{className:"loginSpan",children:[Object(j.jsx)("button",{className:"loginButton",children:"Sign Up"}),"Existing Users",Object(j.jsxs)("a",{href:"/login",className:"linkToSignup",children:[" ","Sign In"]})]})]})]})})]})},J=function(){var e=Object(c.useContext)(D),t=e.light,s=e.dark,a=e.isLightTheme,n=e.toggleTheme,i=a?t:s;return Object(j.jsx)(A,{toggle:n,backgroundTheme:i.background,textTheme:i.text,elementTheme:i.element,children:Object(j.jsx)(P,{items:y})})},_=function(){var e=Object(c.useContext)(D),t=e.light,s=e.dark,a=e.isLightTheme,n=e.toggleTheme,i=a?t:s;return Object(j.jsx)(A,{color:i.text,toggle:n,backgroundTheme:i.background,textTheme:i.text,elementTheme:i.element})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsxs)(b,{children:[Object(j.jsx)(E,{children:Object(j.jsxs)(r.b,{children:[Object(j.jsx)(H,{exact:!0,path:"/dashboard"}),Object(j.jsx)(H,{exact:!0,path:"/notification"}),Object(j.jsx)(J,{exact:!0,path:"/availablerides"}),Object(j.jsx)(_,{exact:!0,path:"/recenttrips"})]})}),Object(j.jsxs)(r.b,{children:[Object(j.jsx)(T,{path:"/ride_my_way"}),Object(j.jsx)(T,{path:"/home"}),Object(j.jsx)(T,{exact:!0,path:"/"}),Object(j.jsx)(L,{path:"/login"}),Object(j.jsx)(W,{path:"/signup"})]})]})}),document.getElementById("root"))},5:function(e,t,s){}},[[28,1,2]]]);
//# sourceMappingURL=main.1670edfa.chunk.js.map