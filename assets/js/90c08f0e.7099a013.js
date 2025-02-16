"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7094],{5857:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"components/navigation-wrapper","title":"NavigationWrapper","description":"A utility component that provides date navigation functionality with customizable navigation icons and content. This component is particularly useful when building custom calendar headers.","source":"@site/docs/components/navigation-wrapper.md","sourceDirName":"components","slug":"/components/navigation-wrapper","permalink":"/calendar-canvas/docs/components/navigation-wrapper","draft":false,"unlisted":false,"editUrl":"https://github.com/arpansource/calendar-canvas/tree/docs/docs/components/navigation-wrapper.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"CalendarHeader","permalink":"/calendar-canvas/docs/components/calendar-header"},"next":{"title":"Hooks","permalink":"/calendar-canvas/docs/category/hooks"}}');var i=t(4848),s=t(8453);const r={sidebar_position:3},o="NavigationWrapper",c={},d=[{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"Props",id:"props",level:2},{value:"Custom Icons",id:"custom-icons",level:2},{value:"Default Structure",id:"default-structure",level:2},{value:"CSS Classes",id:"css-classes",level:2},{value:"Examples",id:"examples",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"With Custom Icons and Formatting",id:"with-custom-icons-and-formatting",level:3},{value:"Related",id:"related",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"navigationwrapper",children:"NavigationWrapper"})}),"\n",(0,i.jsx)(e.p,{children:"A utility component that provides date navigation functionality with customizable navigation icons and content. This component is particularly useful when building custom calendar headers."}),"\n",(0,i.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:'import { NavigationWrapper } from "calendar-canvas";\n\nfunction CustomHeader() {\n  return (\n    <NavigationWrapper>\n      {/* Content to be displayed between navigation buttons */}\n      <span>Current Date Display</span>\n    </NavigationWrapper>\n  );\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Pre-built navigation buttons with default icons"}),"\n",(0,i.jsx)(e.li,{children:"Automatic handling of next/previous date navigation"}),"\n",(0,i.jsx)(e.li,{children:"Customizable navigation icons"}),"\n",(0,i.jsx)(e.li,{children:"Flexible content placement through children prop"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"props",children:"Props"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Prop name"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"}),(0,i.jsx)(e.th,{children:"Default value"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"children"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"ReactNode"})}),(0,i.jsx)(e.td,{children:"Content to be rendered between navigation buttons"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"undefined"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"nextIcon"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Icon"})}),(0,i.jsx)(e.td,{children:'Custom icon component for the "next" button'}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"ArrowLeft"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"prevIcon"})}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"Icon"})}),(0,i.jsx)(e.td,{children:'Custom icon component for the "previous" button'}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"ArrowRight"})})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"custom-icons",children:"Custom Icons"}),"\n",(0,i.jsxs)(e.p,{children:["You can provide custom icons by passing components that implement the ",(0,i.jsx)(e.code,{children:"Icon"})," type:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import React from 'react';\nimport { NavigationWrapper, Icon } from \"calendar-canvas\";\n\nconst CustomNextIcon: React.FC<Icon> = (props) => (\n  <svg {...props}>\n    {/* Your custom SVG path */}\n  </svg>\n);\n\nconst CustomPrevIcon: React.FC<Icon> = (props) => (\n  <svg {...props}>\n    {/* Your custom SVG path */}\n  </svg>\n);\n\nfunction CustomHeader() {\n  return (\n    <NavigationWrapper\n      nextIcon={CustomNextIcon}\n      prevIcon={CustomPrevIcon}\n    >\n      <span>Current Date</span>\n    </NavigationWrapper>\n  );\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"default-structure",children:"Default Structure"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:'<div className="navigation-wrapper">\n  <button onClick={prevDate}>\n    <PrevIcon />\n  </button>\n  {children}\n  <button onClick={nextDate}>\n    <NextIcon />\n  </button>\n</div>\n'})}),"\n",(0,i.jsx)(e.h2,{id:"css-classes",children:"CSS Classes"}),"\n",(0,i.jsx)(e.p,{children:"The component uses the following CSS class:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:".navigation-wrapper"}),": Applied to the main container div"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"NavigationWrapper automatically handles date navigation through the calendar canvas context"}),"\n",(0,i.jsx)(e.li,{children:"The component works seamlessly with all calendar views (month, week, day)"}),"\n",(0,i.jsx)(e.li,{children:"Navigation logic is handled internally - no need to implement your own navigation handlers"}),"\n"]})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["This component must be used within a ",(0,i.jsx)(e.code,{children:"CalendarCanvas"})," component"]}),"\n",(0,i.jsxs)(e.li,{children:["It uses the ",(0,i.jsx)(e.code,{children:"useCalendarCanvas"})," hook internally for navigation functionality"]}),"\n",(0,i.jsxs)(e.li,{children:["The ",(0,i.jsx)(e.code,{children:"Icon"})," type requires implementing the standard SVG props interface"]}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:'import { NavigationWrapper } from "calendar-canvas";\n\nfunction BasicHeader() {\n  return (\n    <NavigationWrapper>\n      <h2>February 2025</h2>\n    </NavigationWrapper>\n  );\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"with-custom-icons-and-formatting",children:"With Custom Icons and Formatting"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:'import { NavigationWrapper } from "calendar-canvas";\nimport dayjs from "dayjs"; // assuming dayjs is installed\nimport { ChevronLeft, ChevronRight } from "your-icon-library";\n\nfunction CustomHeader() {\n  return (\n    <NavigationWrapper\n      nextIcon={ChevronRight}\n      prevIcon={ChevronLeft}\n    >\n      <div className="date-display">\n        {dayjs().format("MMMM YYYY")}\n      </div>\n    </NavigationWrapper>\n  );\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/docs/components/calendar-header",children:"CalendarHeader"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/docs/hooks/use-calendar-canvas",children:"useCalendarCanvas"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"/docs/types#icon",children:"Icon Type Definition"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var a=t(6540);const i={},s=a.createContext(i);function r(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);