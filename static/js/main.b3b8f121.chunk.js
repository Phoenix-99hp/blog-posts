(this["webpackJsonpblog-posts"]=this["webpackJsonpblog-posts"]||[]).push([[0],{14:function(e,t,n){e.exports={error:"Error_error__2WwmA",errorBody:"Error_errorBody__2g6yq",errorContainer:"Error_errorContainer__2xGfw",link:"Error_link__1cUrZ"}},18:function(e,t,n){e.exports={postBody:"NoPosts_postBody__1vJ4k",postContainer:"NoPosts_postContainer__35G7c"}},19:function(e,t,n){e.exports={container:"Layout_container__1nNA4",main:"Layout_main__1dFZc"}},23:function(e,t,n){e.exports={spinner:"Spinner_spinner__1Neu5",spin:"Spinner_spin__2cA5G"}},25:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(22),m=n.n(c),r=n(3),s=n(12),i=n.n(s),l=n(4),u=n.n(l),p=n(23),_=n.n(p),f=function(){return a.a.createElement("div",{id:_.a.spinner})},d=n(1),C=function(e){var t=e.currentPost,n=e.writeComment,c=e.setWriteComment,m=e.setCurrentPost,s=Object(o.useState)(!0),l=Object(r.a)(s,2),p=l[0],_=l[1],C=[],E=Object(d.f)();Object(o.useEffect)((function(){setTimeout((function(){_(!1)}),1e3)}),[]);var h=function(e){e.preventDefault();var n={post:t._id,newComment:e.target.parentElement.previousElementSibling.value,name:e.target.parentElement.previousElementSibling.previousElementSibling.children[0].value};!function(e){var t=e.newComment,n=e.name,o=t.trim(),a=n.trim();return!1===/^[a-z0-9\s@\.\-,]+$/i.test(a)||" "===a||0===a.length?(C.push("characters"),!1):!(o.length>200||" "===o)||(C.push("comment"),!1)}(n)?E.push("error/".concat(C[0])):fetch("https://nameless-plains-23983.herokuapp.com/api/posts",{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){e.updated?(m(e.updated),window.location.href="/blog-posts"):e.specific?(console.log(e.specific),E.push("/error/".concat(e.specific))):E.push("/error/general")})).catch((function(e){E.push("/error/general")}))};return p?a.a.createElement(f,null):a.a.createElement("div",{id:u.a.mainContainer},a.a.createElement("div",{className:u.a.postContainer},a.a.createElement("p",{className:"".concat(u.a.postInfo," ").concat(u.a.postTitle)},t.title),a.a.createElement("p",{className:"".concat(u.a.postBody," ").concat(u.a.postInfo)},t.text),a.a.createElement("p",{className:u.a.postInfo},"Posted: ",i()(t.timestamp).format("L"))),a.a.createElement("div",{id:u.a.inputContainer},a.a.createElement("input",{id:u.a.commentUser,placeholder:"Your Name..."})),a.a.createElement("textarea",{id:u.a.commentArea,placeholder:"Your Comment (200 characters or less)..."}),a.a.createElement("div",{className:u.a.submitCancelContainer},a.a.createElement("button",{id:u.a.submitCommentBtn,onClick:function(e){h(e),c(!n)}},"Submit Comment"),a.a.createElement("button",{id:u.a.cancelBtn,onClick:function(){return c(!n)}},"Cancel")))},E=n(8),h=n.n(E),b=n(9),v=n.n(b),B=function(e){var t=e.currentPost,n=e.commentsAreActive,c=Object(o.useState)(!1),m=Object(r.a)(c,2),s=m[0],l=m[1],u=Object(o.useState)(!1),p=Object(r.a)(u,2),_=p[0],d=p[1];return Object(o.useEffect)((function(){n&&(l(!0),setTimeout((function(){l(!1)}),1e3))}),[n]),Object(o.useEffect)((function(){d(!!n)}),[n]),s?a.a.createElement(f,null):t.comments[0]?t.comments.map((function(e,t){return a.a.createElement("div",{"data-id":e._id,className:_?v.a.commentsActive:v.a.commentsInactive,key:t},a.a.createElement("p",{className:"".concat(v.a.commentInfo," ").concat(v.a.commentBody)},e.text),a.a.createElement("p",{className:"".concat(v.a.commentInfo," ").concat(v.a.paddingLast)},a.a.createElement("span",{id:v.a.commentName},e.name)," - ",i()(e.timestamp).format("L")))})):a.a.createElement("div",{id:_?v.a.noCommentActive:v.a.noCommentInactive},a.a.createElement("p",null,"There are no comments for this post."))},N=n(18),g=n.n(N),j=function(){return a.a.createElement("div",{className:g.a.postContainer},a.a.createElement("p",{className:g.a.postBody},"There are currently no posts."))},O=function(e){var t=e.setCurrentPost,n=e.currentPost,c=e.setWriteComment,m=e.writeComment,s=Object(o.useState)(!1),l=Object(r.a)(s,2),u=l[0],p=l[1],_=Object(o.useState)(!1),d=Object(r.a)(_,2),C=d[0],E=d[1];Object(o.useEffect)((function(){setTimeout((function(){E(!1)}),1e3)}),[n]);return C?a.a.createElement(f,null):n?a.a.createElement("div",{id:h.a.mainContainer},a.a.createElement("div",{className:h.a.postContainer},a.a.createElement("p",{className:"".concat(h.a.postInfo," ").concat(h.a.postTitle)},n.title),a.a.createElement("p",{className:"".concat(h.a.postBody," ").concat(h.a.postInfo)}," ",n.text),a.a.createElement("p",{className:h.a.postInfo},"Posted: ",i()(n.timestamp).format("L")),a.a.createElement("button",{className:h.a.prevBtn,onClick:function(){return E(!0),p(!1),void fetch("https://nameless-plains-23983.herokuapp.com/api/posts/".concat(n._id,"/prev"),{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.post&&t(e.post[0])})).catch((function(e){console.log(e)}))}},"Previous"),a.a.createElement("button",{className:h.a.nextBtn,onClick:function(){return E(!0),p(!1),void fetch("https://nameless-plains-23983.herokuapp.com/api/posts/".concat(n._id,"/next"),{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.post&&t(e.post[0])})).catch((function(e){console.log(e)}))}},"Next"),a.a.createElement("button",{className:h.a.commentBtn,onClick:function(){return c(!m)}},"Add Comment")),a.a.createElement("button",{className:h.a.showCommentsBtn,onClick:function(e){return function(e){var t=e.target;console.log(e.target.innerText),"See Comments"===e.target.innerText?(t.disabled=!0,p(!u),setTimeout((function(){t.disabled=!1}),1e3)):p(!u)}(e)}},u?"Hide Comments":"See Comments"),a.a.createElement(B,{currentPost:n,commentsAreActive:u})):a.a.createElement(j,null)},I=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],m=Object(o.useState)(null),s=Object(r.a)(m,2),i=s[0],l=s[1],u=Object(o.useState)(!0),p=Object(r.a)(u,2),_=p[0],d=p[1];Object(o.useEffect)((function(){fetch("https://nameless-plains-23983.herokuapp.com/api/posts",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){e.post[0]?(console.log(e.post[0]),l(e.post[0])):setTimeout((function(){d(!1)}),1e3)})).catch((function(e){console.log(e)}))}),[]),Object(o.useEffect)((function(){i&&setTimeout((function(){d(!1)}),1e3)}),[i]);return _?a.a.createElement(f,null):n?a.a.createElement(C,{setCurrentPost:l,currentPost:i,writeComment:n,setWriteComment:c}):i?a.a.createElement(O,{setCurrentPost:l,currentPost:i,setWriteComment:c,writeComment:n}):a.a.createElement(j,null)},P=n(19),S=n.n(P),y=function(e){var t=e.children;return a.a.createElement("div",{id:S.a.container},a.a.createElement("main",{id:S.a.main},a.a.createElement("h1",null,"Blog"),t))},w=function(){return a.a.createElement(y,null,a.a.createElement(I,null))},A=n(11),T=n(14),x=n.n(T),k=function(){var e=Object(o.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],m=Object(d.g)().specific;return Object(o.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),a.a.createElement(y,null,n?a.a.createElement(f,null):a.a.createElement("div",{id:x.a.errorContainer},a.a.createElement("p",{id:x.a.errorBody},a.a.createElement("span",{id:x.a.error},"Error: "),"comment"===m?"Comments must be 200 characters or less, and may not be empty.":"characters"===m?"The Name field must not be blank, and only the characters a-z 0-9 @ . - are allowed as part of the Name field.":"Something went wrong."),a.a.createElement(A.b,{className:x.a.link,to:"/"},"Back")))};var L=function(){return a.a.createElement(A.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(d.c,null,a.a.createElement(d.a,{exact:!0,path:"/",component:w}),a.a.createElement(d.a,{path:"/error/:specific",component:k}))))};m.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root"))},4:function(e,t,n){e.exports={postContainer:"Comment_postContainer__1b81W",postInfo:"Comment_postInfo__2GeiF",postTitle:"Comment_postTitle__2W_Ro",postBody:"Comment_postBody__1IHwO",inputContainer:"Comment_inputContainer__1h3KW",commentUser:"Comment_commentUser__XWNgC",commentArea:"Comment_commentArea__23ZLh",submitCancelContainer:"Comment_submitCancelContainer__RqH8C",submitCommentBtn:"Comment_submitCommentBtn__3AXZs",cancelBtn:"Comment_cancelBtn__I2vu6",commentBtn:"Comment_commentBtn__gURR2",mainContainer:"Comment_mainContainer__3pCq1"}},8:function(e,t,n){e.exports={postContainer:"Post_postContainer__y69o4",postInfo:"Post_postInfo__2NGOe",postTitle:"Post_postTitle__3hPg-",postBody:"Post_postBody__1Yb52",prevBtn:"Post_prevBtn__3OneU",nextBtn:"Post_nextBtn__2OtbN",commentBtn:"Post_commentBtn__1BCr2",showCommentsBtn:"Post_showCommentsBtn__1d-DH",commentInfo:"Post_commentInfo__b9HR4",commentBody:"Post_commentBody__3msXm",commentsActive:"Post_commentsActive__mItcK",commentsInactive:"Post_commentsInactive__3D4BA",paddingLast:"Post_paddingLast__Ia5N2",commentName:"Post_commentName__1wQei",mainContainer:"Post_mainContainer__16AjI"}},9:function(e,t,n){e.exports={commentsActive:"ShowComments_commentsActive__1Ieql",commentsInactive:"ShowComments_commentsInactive__jqAW2",commentInfo:"ShowComments_commentInfo__2u-MR",commentBody:"ShowComments_commentBody__ST5kQ",paddingLast:"ShowComments_paddingLast__81UC8",deleteBtn:"ShowComments_deleteBtn__2EvO5",noCommentActive:"ShowComments_noCommentActive__1lgez",noCommentInactive:"ShowComments_noCommentInactive__3dH_W",commentName:"ShowComments_commentName__uI7v_"}}},[[25,1,2]]]);
//# sourceMappingURL=main.b3b8f121.chunk.js.map