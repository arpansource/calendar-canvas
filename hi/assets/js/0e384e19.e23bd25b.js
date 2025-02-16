"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3976],{7879:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"intro","title":"Introduction","description":"Welcome to Calendar Canvas - a powerful and highly customizable calendar library built specifically for React applications.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/calendar-canvas/hi/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/arpansource/calendar-canvas/tree/main/src/docs/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Introduction","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Quick Start","permalink":"/calendar-canvas/hi/docs/quick-start"}}');var r=i(4848),a=i(8453);const t={sidebar_label:"Introduction",sidebar_position:1},l="Introduction",o={},c=[{value:"What is Calendar Canvas?",id:"what-is-calendar-canvas",level:2},{value:"Key Features",id:"key-features",level:2},{value:"\ud83c\udfa8 Design Freedom",id:"-design-freedom",level:3},{value:"\ud83d\udcc5 Flexible Views",id:"-flexible-views",level:3},{value:"\ud83d\udee0 Development Approach",id:"-development-approach",level:3},{value:"\u26a1 Core Strengths",id:"-core-strengths",level:3},{value:"Two Ways to Use",id:"two-ways-to-use",level:2},{value:"1. Using Pre-built Components",id:"1-using-pre-built-components",level:3},{value:"2. Using Hooks for Custom Implementation",id:"2-using-hooks-for-custom-implementation",level:3},{value:"Why Choose Calendar Canvas?",id:"why-choose-calendar-canvas",level:2},{value:"Ready to Start?",id:"ready-to-start",level:2},{value:"Need Help?",id:"need-help",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsx)(n.p,{children:"Welcome to Calendar Canvas - a powerful and highly customizable calendar library built specifically for React applications."}),"\n",(0,r.jsx)(n.h2,{id:"what-is-calendar-canvas",children:"What is Calendar Canvas?"}),"\n",(0,r.jsx)(n.p,{children:'Calendar Canvas is a lightweight, zero-dependency calendar library that provides the essential logic and components for building calendar interfaces in React applications. What sets it apart is its "bring your own design" philosophy - you can use it with or without the default styling, making it perfect for projects that require a completely custom look and feel.'}),"\n",(0,r.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsx)(n.h3,{id:"-design-freedom",children:"\ud83c\udfa8 Design Freedom"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ships with zero default styles - complete freedom to implement your own design"}),"\n",(0,r.jsxs)(n.li,{children:["Miniamal default styling available through ",(0,r.jsx)(n.code,{children:"calendar-canvas/dist/main.css"})]}),"\n",(0,r.jsx)(n.li,{children:"Fully customizable components to match your application's design system"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"-flexible-views",children:"\ud83d\udcc5 Flexible Views"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Month view"}),"\n",(0,r.jsx)(n.li,{children:"Week view"}),"\n",(0,r.jsx)(n.li,{children:"Day view"}),"\n",(0,r.jsx)(n.li,{children:"Ability to switch between views seamlessly"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"-development-approach",children:"\ud83d\udee0 Development Approach"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hooks-First Architecture"}),": Access calendar logic through custom hooks to build your UI from scratch"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Component Library"}),": Pre-built components available for rapid development"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TypeScript Support"}),": Built with TypeScript for better development experience"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"-core-strengths",children:"\u26a1 Core Strengths"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83d\ude80 Lightweight and performant"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcf1 Responsive by design"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udd27 Easy to integrate"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf Zero dependencies"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcaa Built specifically for React"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udce6 Tree-shakeable"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"two-ways-to-use",children:"Two Ways to Use"}),"\n",(0,r.jsx)(n.h3,{id:"1-using-pre-built-components",children:"1. Using Pre-built Components"}),"\n",(0,r.jsx)(n.p,{children:"Perfect for quick implementation with customizable styling:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import {\n  CalendarCanvas,\n  CalendarContent,\n  CalendarContentHeader,\n  CalendarContentWrapper,\n  CalendarHeader,\n} from "calendar-canvas";\nimport "calendar-canvas/dist/main.css";\n\nfunction Calendar() {\n  return (\n    <CalendarCanvas events={events} defaultView="month">\n      <CalendarHeader />\n      <CalendarContentWrapper>\n        <CalendarContentHeader />\n        <CalendarContent />\n      </CalendarContentWrapper>\n    </CalendarCanvas>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-using-hooks-for-custom-implementation",children:"2. Using Hooks for Custom Implementation"}),"\n",(0,r.jsx)(n.p,{children:"For complete control over the UI while leveraging calendar logic:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { useCalendarCanvas } from "calendar-canvas/hooks";\n\nfunction CustomCalendar() {\n  const {\n    CalendarCanvas,\n    // ... more calendar logic\n  } = useCalendarCanvas();\n\n  return <CalendarCanvas>{/* Your custom implementation */}</CalendarCanvas>;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"why-choose-calendar-canvas",children:"Why Choose Calendar Canvas?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Flexibility"}),": From using pre-built components to building completely custom UIs"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Performance"}),": Lightweight core with optimized rendering"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Developer Experience"}),": Comprehensive TypeScript support and intuitive API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Customization"}),": Total control over styling and behavior"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Maintenance"}),": Zero dependencies means fewer security risks and smaller bundle size"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ready-to-start",children:"Ready to Start?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Check out our ",(0,r.jsx)(n.a,{href:"/docs/quick-start",children:"Quick Start Guide"})," to begin building"]}),"\n",(0,r.jsxs)(n.li,{children:["Deep dive into ",(0,r.jsx)(n.a,{href:"/docs/category/components",children:"Components"})," to understand how to implement them."]}),"\n",(0,r.jsxs)(n.li,{children:["View our ",(0,r.jsx)(n.a,{href:"/docs/category/hooks",children:"Hooks Reference"})," to see how they can be used to create custom UIs."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"need-help",children:"Need Help?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GitHub Issues: Report bugs or request features"}),"\n",(0,r.jsxs)(n.li,{children:["Email Support: ",(0,r.jsx)(n.a,{href:"mailto:ap0661236@gmail.com",children:"ap0661236@gmail.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["Website: ",(0,r.jsx)(n.a,{href:"https://abhishekprajapati1.com",children:"https://abhishekprajapati1.com"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const r={},a=s.createContext(r);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);