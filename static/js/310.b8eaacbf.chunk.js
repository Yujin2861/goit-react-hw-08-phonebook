"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{2310:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(2791),a=n(4420),s=n(4270),c={contactUser:"ContactList_contactUser__-dJIC",user:"ContactList_user__67mX+",wrapper:"ContactList_wrapper__VP-XU",contactList:"ContactList_contactList__UFVCg",contactInfo:"ContactList_contactInfo__Sgq6p"},o=n(5052),i=n(6095),u=n(184),l=function(){var e=(0,a.I0)(),t=(0,a.v9)(i.F4),n=(0,a.v9)(i.Af);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h3",{className:c.contactInfo,children:["Your phonebook has ",n.length," contacts"]}),(0,u.jsx)("hr",{}),(0,u.jsx)("ul",{className:c.contactList,children:t.map((function(t){return(0,u.jsxs)("li",{className:c.contactUser,children:[(0,u.jsxs)("div",{className:c.wrapper,children:[(0,u.jsx)("p",{className:c.user,children:(0,u.jsx)("b",{className:c.userName,children:t.name})}),(0,u.jsx)("span",{children:t.number})]}),(0,u.jsx)("button",{type:"button",onClick:function(){return e((0,o.xX)(t.id))},children:"Delete"})]},t.id)}))})]})},m="ContactForm_form__dhl+T",d="ContactForm_inputField__qJkou",f="ContactForm_button__eSwX9",h=n(1686),p=function(){var e=(0,a.I0)(),t=(0,a.v9)(i.Af);return(0,u.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),t.some((function(e){return e.name.toLowerCase()===n.target.elements.name.value.toLowerCase()})))h.Notify.warning("This contact has already exists");else{var r={name:n.target.elements.name.value,number:n.target.elements.number.value};e((0,o.je)(r)),n.target.reset()}},className:m,autoComplete:"off",children:[(0,u.jsx)("label",{children:(0,u.jsx)("input",{className:d,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,u.jsx)("label",{children:(0,u.jsx)("input",{className:d,placeholder:"Phone number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,u.jsx)("button",{type:"submit",className:f,children:"Add Contact"})]})},x=n(7140),_="Filter_inputField__GiGjH",j=function(){var e=(0,a.I0)(),t=(0,a.v9)(i.AD);return(0,u.jsxs)("div",{children:[(0,u.jsx)("hr",{}),(0,u.jsx)("label",{children:(0,u.jsx)("input",{type:"text",placeholder:"Find contacts by name...",value:t,onChange:function(t){e((0,x.x)(t.target.value))},className:_})})]})};function b(){var e=(0,a.I0)(),t=(0,a.v9)(i.NH);return(0,r.useEffect)((function(){e((0,o.m$)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.q,{children:(0,u.jsx)("title",{children:"Phonebook"})}),(0,u.jsx)(p,{}),(0,u.jsx)("div",{children:t&&"Request in progress..."}),(0,u.jsx)(j,{}),(0,u.jsx)(l,{})]})}},6095:function(e,t,n){n.d(t,{AD:function(){return s},Af:function(){return a},F4:function(){return o},NH:function(){return c}});var r=n(3553),a=function(e){return e.contacts.items},s=function(e){return e.filter},c=function(e){return e.isLoading},o=(0,r.P1)([function(e){return e.contacts.items},function(e){return e.filter}],(function(e,t){if(e)return e.filter((function(e){return e.name.toLowerCase().trim().includes(t.toLowerCase().trim())}))}))}}]);
//# sourceMappingURL=310.b8eaacbf.chunk.js.map