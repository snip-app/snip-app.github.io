"use strict";(self.webpackChunklandingpage_new=self.webpackChunklandingpage_new||[]).push([[699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(7462),i=n(7294),r=n(3905);const o="wrapper_JtNr";function s(e){const t=(0,i.useRef)(null);return i.createElement("div",{className:o,onMouseEnter:()=>t.current?.play(),onMouseLeave:()=>t.current?.pause(),onClick:()=>t.current?.play()},i.createElement("video",{loop:!0,ref:t,width:"100%"},i.createElement("source",{src:`/videos/${e.name}.webm`,type:"video/webm"})))}const l={description:"Snip is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored."},p="Features",d={unversionedId:"features",id:"features",title:"Features",description:"Snip is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored.",source:"@site/docs/1-features.md",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-features.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Snip is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored."},sidebar:"tutorialSidebar"},c={},u=[{value:"The Snip Philosophy",id:"the-snip-philosophy",level:2},{value:"Regarding Markdown",id:"regarding-markdown",level:2},{value:"Snippets and Tags",id:"snippets-and-tags",level:2},{value:"Origins",id:"origins",level:2},{value:"Editing Rich Text",id:"editing-rich-text",level:2},{value:"Using Markdown-like syntax",id:"using-markdown-like-syntax",level:3},{value:"Jumping in and out of inline formattings",id:"jumping-in-and-out-of-inline-formattings",level:3},{value:"Destroying formattings with backspace",id:"destroying-formattings-with-backspace",level:3},{value:"Interaction with links",id:"interaction-with-links",level:3},{value:"Drag and Drop",id:"drag-and-drop",level:3},{value:"Calendar Entries",id:"calendar-entries",level:2},{value:"Creating a calendar entry via the side panel",id:"creating-a-calendar-entry-via-the-side-panel",level:3},{value:"Creating a calendar entry via a date expression",id:"creating-a-calendar-entry-via-a-date-expression",level:3},{value:"Snippet References",id:"snippet-references",level:2},{value:"Search and Quick Access",id:"search-and-quick-access",level:2}],m={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("h2",{id:"the-snip-philosophy"},"The Snip Philosophy"),(0,r.kt)("p",null,"The aim of Snip is to provide a handful of simple concepts, which, in combination,\nmake for a rich user experience, allowing you to organize your daily life. You can\nthink of it as a five-step evolution:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the most basic scenario, you can use Snip as a classic note taking app. Your\ndata simply consists of a few notes, containing rich text, links and images.\nWe've put a lot of focus on making the editing experience as user friendly as\npossible, since this is what you'll be doing the most: editing text."),(0,r.kt)("li",{parentName:"ul"},'Next, as your note taking evolves, you might feel the need to organize your\ndata into sub-sections. For example, you might want to separate private notes\nfrom work related notes. This is where tags come in: they represent concepts\nthat in other note taking apps are referred to as "Note books", "Folders",\n"Projects", etc.'),(0,r.kt)("li",{parentName:"ul"},"Next, you might want to do task management. This is often done with todo lists,\nwhich is a powerful concept to keep track of your tasks. Snip provides todo\nlists as part of the rich text editing experience. Todo items can be marked as\ndone, and re-arranged with the built-in drag-and-drop functionality."),(0,r.kt)("li",{parentName:"ul"},"Next, you might want to schedule your work. This is where the built in calendar\nfunctionality comes into play: you can create calendar entries inside your notes,\nwhich will be presented by the calendar view. You can interact with those\nentries - for example, you can create repeat patterns and reminders. Note that\nSnip inverts the classic calendar principle: usually, you think of the calendar\nas the owning instance of your schedule - every calendar entry \"lives\" inside\nthe calendar. In Snip however, calendar entries live inside your notes, and the\ncalendar is merely a representation of those entries. This concept is quite\npowerful: it allows you to make use of Snip's rich text editing experience\nto take notes for events in your schedule, instead of having to use the\n(usually limited) note-taking capabilities you'd find in classic calendar apps."),(0,r.kt)("li",{parentName:"ul"},'Next, you might want to display your notes with special representations. This\ncan be done with tag display modes. Think of this as if you were working\nwith non-digital notes: you would arrange your notes on your desk, organizing\nthem as "pools" of related notes. The visual feedback this creates makes it\neasier for you to know where you\'ve put your notes. This is great for context\nswitching: create dashboards and whiteboards for specific tasks that you can\njump to and see all relevant notes in one place.')),(0,r.kt)("h2",{id:"regarding-markdown"},"Regarding Markdown"),(0,r.kt)("p",null,"Snip is ",(0,r.kt)("em",{parentName:"p"},"not")," a markdown-based note taking app. However, it does have markdown-related\nfunctionality:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you can use markdown syntax while writing rich text notes"),(0,r.kt)("li",{parentName:"ul"},"you can import markdown"),(0,r.kt)("li",{parentName:"ul"},"you can export to markdown")),(0,r.kt)("p",null,"We do not deem the use of markdown for taking notes\nnecessary. With a good rich text editor, notes are equally easy (if not easier)\nto edit and read, and export to markdown removes the possibility of\nvendor lock-in: your data will be future-proof as in any other markdown based\nnote taking app."),(0,r.kt)("p",null,"Not using markdown also comes with the advantage that documents can contain more\ncomplex elements and formatting than a regular markdown document would. Once you\nwant to introduce additional concepts (for\nexample, a reminder feature as it is implemented in Snip), you'll have to introduce\nyour own, custom syntax, ultimately breaking the original idea of using a\ncommon standard. Even worse, if such custom standards are introduced through\na community driven platform, you end up with notes that contain structures that\nare only valid within the respective note taking app and with additional plugins\ninstalled."),(0,r.kt)("p",null,"That is not to say that markdown in itself is bad. In fact, the documentation you're\nreading right now is written in markdown. It is certainly a great language for\nwriting documentation, and its plain text format makes it work well with version\ncontrol systems."),(0,r.kt)("h2",{id:"snippets-and-tags"},"Snippets and Tags"),(0,r.kt)("p",null,"Snippets are what you would usually call a ",(0,r.kt)("em",{parentName:"p"},"Document"),", a ",(0,r.kt)("em",{parentName:"p"},"Note"),", or a ",(0,r.kt)("em",{parentName:"p"},"File"),".\nIn Snip, a ",(0,r.kt)("em",{parentName:"p"},"Snippet")," is a unit of data which can be edited and persisted. There's\ncurrently two types of Snippets: Rich Text Snippets and Code Snippets."),(0,r.kt)("p",null,"Tags can be used to organize snippets. Think of a tag as something that has a\nname, an icon, and a list of snippets it references. A tag can have a display mode,\nwhich determines how the snippets are presented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"list")," display mode shows snippets in a classic list layout"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"dashboard")," display mode shows snippets in a tiled space"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"whiteboard")," display mode shows snippets in an infinite, canvas-like space")),(0,r.kt)("p",null,'A tag\'s name is represented not just as a plain string, but as a "path". This\nmakes it possible to build folder-like structures. For example, you can create\ntwo tags ',(0,r.kt)("em",{parentName:"p"},"Private / Todos")," and ",(0,r.kt)("em",{parentName:"p"},"Private / Goals"),", which will cause the tag view\nto display a tree-like structure, grouping ",(0,r.kt)("em",{parentName:"p"},"Todos")," and ",(0,r.kt)("em",{parentName:"p"},"Goals")," under the common\nparent ",(0,r.kt)("em",{parentName:"p"},"Private"),"."),(0,r.kt)("p",null,"The tag concept allows you to organize your data in a hierarchical way, as you\nwould do with a classic folder system, and at the same time allows you\nto organize your data across multiple contexts, as you would do with a classic\ntagging system."),(0,r.kt)("h2",{id:"origins"},"Origins"),(0,r.kt)("p",null,"Origins allow you to specificy how your data shall be persisted. Currently,\nthere's two origins available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"file")," origin lets you store your data on your local disk"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"cloud")," origin lets you store your data in the Snip Cloud")),(0,r.kt)("p",null,"The advantage of the cloud origin is that you'll be able to sync your data\nacross multiple devices. Apart from that, the functionality of the application\nremains the same."),(0,r.kt)("h2",{id:"editing-rich-text"},"Editing Rich Text"),(0,r.kt)("h3",{id:"using-markdown-like-syntax"},"Using Markdown-like syntax"),(0,r.kt)("p",null,"Using the toolbar can feel cumbersome at times, since it forces you to switch\nbetween your mouse and keyboard often. You can use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Markdown"},"markdown"),"\nsyntax to avoid this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"# "),"\xa0"," for headings"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"**text**"),"\xa0"," for bold formatting"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"*text*"),"\xa0"," for italic formatting"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"* "),"\xa0"," for bullet lists"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"1. "),"\xa0"," for ordered lists"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"+ "),"\xa0"," for todo lists")),(0,r.kt)(s,{name:"markdown-formatting",mdxType:"DocVideo"}),(0,r.kt)("h3",{id:"jumping-in-and-out-of-inline-formattings"},"Jumping in and out of inline formattings"),(0,r.kt)("p",null,"The editor gives an indication whether you are inside an inline formatting\n(such as bold formatting) by rendering a dashed line underneath the formatting.\nYou can jump in and out of the formatting boundaries by using the left and right\narrow keys. This allows you to, for example, escape a bold-formatted text and\ncontinue writing unformatted."),(0,r.kt)(s,{name:"formatting-jump",mdxType:"DocVideo"}),(0,r.kt)("h3",{id:"destroying-formattings-with-backspace"},"Destroying formattings with backspace"),(0,r.kt)("p",null,"You can destroy inline formatting (such as bold formatting) using backspace.\nJump out of the formatting with your arrow-right key, then use backspace to\ndestroy the formatting."),(0,r.kt)(s,{name:"destroying-inline-formatting",mdxType:"DocVideo"}),(0,r.kt)("p",null,"Similarly, you can destroy block formattings, such as headings and code blocks,\nby placing the cursor at the beginning of the formatting and using backspace."),(0,r.kt)(s,{name:"destroying-nodes",mdxType:"DocVideo"}),(0,r.kt)("h3",{id:"interaction-with-links"},"Interaction with links"),(0,r.kt)("p",null,"The editor will detect urls such as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://example.com")," and give an indication\nonce the cursor is close to such a pattern. Pressing Enter will put\nfocus on the label input field. Once focus is inside the label input field,\npressing Escape will put focus back on the editor. Pressing Cmd+Enter\nwill turn the pattern into a highlighted, interactable link."),(0,r.kt)("p",null,"Once an interactable link is created, interacting with it is the same: use Enter\nto focus the url input field, use Escape to give focus back to the editor."),(0,r.kt)(s,{name:"interacting-with-links",mdxType:"DocVideo"}),(0,r.kt)("h3",{id:"drag-and-drop"},"Drag and Drop"),(0,r.kt)("p",null,"Parts of text can be dragged around. This is useful, for example, when you want\nto reorder items in a list, or put a paragraph before another one."),(0,r.kt)("p",null,"You can drag text by selecting some text inside the paragraph or list item\nyou want to drag. This will create a drag handle, which you can drag-and-drop\nto whichever part in the document you want."),(0,r.kt)(s,{name:"drag-n-drop-via-text-selection",mdxType:"DocVideo"}),(0,r.kt)("p",null,"Another option is to hit Escape when the editor is focused. This will create a\nnode selection around the paragraph where the cursor is placed. The node selection\nbecomes draggable and can be dragged accordingly."),(0,r.kt)(s,{name:"drag-n-drop-via-node-selection",mdxType:"DocVideo"}),(0,r.kt)("h2",{id:"calendar-entries"},"Calendar Entries"),(0,r.kt)("h3",{id:"creating-a-calendar-entry-via-the-side-panel"},"Creating a calendar entry via the side panel"),(0,r.kt)("p",null,"A calendar entry can be created by selecting a time span in the calendar\nside panel, then dragging it to a note. Whichever text is close to the created\ncalendar entry will become the description of the entry."),(0,r.kt)(s,{name:"creating-calendar-entries-via-sidepanel",mdxType:"DocVideo"}),(0,r.kt)("p",null,"Selecting an entry in the side panel will open a modal allowing you to edit\nreminders and repeat patterns."),(0,r.kt)(s,{name:"editing-reminder-and-repeat-pattern",mdxType:"DocVideo"}),(0,r.kt)("h3",{id:"creating-a-calendar-entry-via-a-date-expression"},"Creating a calendar entry via a date expression"),(0,r.kt)("p",null,"A calendar entry can be created using a date expression. Examples of such\nexpressions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"in one hour")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"tomorrow at eight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"in two weeks from 10 to 12")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"every monday and wednesday at nine pm"))),(0,r.kt)("p",null,'Once the cursor is close to such a pattern, an entry can be created by clicking\n"Create Calendar Entry" or by using Cmd+Enter. The calendar view will automatically\njump to whichever calendar entry is currently focused.'),(0,r.kt)("p",null,"Some terms can be abbreviated. For example, you can use ",(0,r.kt)("em",{parentName:"p"},"tm")," instead of ",(0,r.kt)("em",{parentName:"p"},"tomorrow"),",\n",(0,r.kt)("em",{parentName:"p"},"mon")," instead of ",(0,r.kt)("em",{parentName:"p"},"monday"),", and ",(0,r.kt)("em",{parentName:"p"},"aug")," instead of ",(0,r.kt)("em",{parentName:"p"},"august"),". You can use the terms\n",(0,r.kt)("em",{parentName:"p"},"noon")," and ",(0,r.kt)("em",{parentName:"p"},"midnight")," to target respective times of the day."),(0,r.kt)("p",null,'You can use "starting at" patterns to specify the start date of a repeat pattern.\nFor example: ',(0,r.kt)("em",{parentName:"p"},"every monday at eight starting on 1. jan"),"."),(0,r.kt)("p",null,"Calendar entries can be destroyed by using backspace. The expression that was\noriginally used will be inserted instead."),(0,r.kt)(s,{name:"creating-calendar-entries-via-expressions",mdxType:"DocVideo"}),(0,r.kt)("h2",{id:"snippet-references"},"Snippet References"),(0,r.kt)("p",null,"As the name suggests, snippet references enable you to reference snippets from\none another. There's multiple ways how to set up snippet references:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using the toolbar: there's a toolbar entry called \"Create Snippet References\",\nwhich allows you to search for the snippet you'd like to reference"),(0,r.kt)("li",{parentName:"ul"},"using autocomplete: type ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," inside a note and start typing some text. You'll\nbe presented with an autocomplete. If the text you type matches an already\nexisting snippet, it will be presented as an option. In addition, you'll have\nthe option to create a new snippet and auto-reference it into the snippet you're\nediting.")),(0,r.kt)("p",null,"Snippet references can be visualized in different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inline: shows the referenced snippet in a small pop-up"),(0,r.kt)("li",{parentName:"ul"},"On the side: in the list layout, shows the snippet to the right of the\nreferencing snippet")),(0,r.kt)(s,{name:"snippet-references",mdxType:"DocVideo"}),(0,r.kt)("h2",{id:"search-and-quick-access"},"Search and Quick Access"),(0,r.kt)("p",null,"Snip comes with an effective search-all feature, which you can use to search\nyour snippets. It presents results in a compact, easy-to-read manner. You can use\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regular_expression"},"regular expressions")," if you\nlike."),(0,r.kt)("p",null,"It also allows you to search for and jump to tags. Additionally, it shows you\nsnippets and tags you've visited recently."),(0,r.kt)("p",null,"The Quick Access feature allows you to quickly copy links and code blocks from\nyour notes to the clipboard."))}h.isMDXComponent=!0}}]);