"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1459],{4753:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"contributing","title":"Contributing to Calendar Canvas","description":"First off, thank you for considering contributing to Calendar Canvas! It\'s people like you that make Calendar Canvas such a great tool.","source":"@site/docs/contributing.md","sourceDirName":".","slug":"/contributing","permalink":"/calendar-canvas/docs/contributing","draft":false,"unlisted":false,"editUrl":"https://github.com/arpansource/calendar-canvas/tree/docs/docs/contributing.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"sidebar_label":"Contributing"},"sidebar":"tutorialSidebar","previous":{"title":"Type Reference","permalink":"/calendar-canvas/docs/types"},"next":{"title":"Code Of Conduct","permalink":"/calendar-canvas/docs/code-of-conduct"}}');var t=i(4848),l=i(8453);const r={sidebar_position:7,sidebar_label:"Contributing"},c="Contributing to Calendar Canvas",o={},d=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Protected Branches",id:"protected-branches",level:2},{value:"How Can I Contribute?",id:"how-can-i-contribute",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:3},{value:"Suggesting Enhancements",id:"suggesting-enhancements",level:3},{value:"Pull Requests",id:"pull-requests",level:3},{value:"Getting Started",id:"getting-started",level:4},{value:"Branch Naming Convention",id:"branch-naming-convention",level:4},{value:"Development Process",id:"development-process",level:4},{value:"Commit Message Guidelines",id:"commit-message-guidelines",level:4},{value:"Pull Request Process",id:"pull-request-process",level:4},{value:"Style Guide",id:"style-guide",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Questions?",id:"questions",level:2},{value:"License",id:"license",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"contributing-to-calendar-canvas",children:"Contributing to Calendar Canvas"})}),"\n",(0,t.jsx)(n.p,{children:"First off, thank you for considering contributing to Calendar Canvas! It's people like you that make Calendar Canvas such a great tool."}),"\n",(0,t.jsx)(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,t.jsxs)(n.p,{children:["By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to ",(0,t.jsx)(n.a,{href:"mailto:ap0661236@gmail.com",children:"ap0661236@gmail.com"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"protected-branches",children:"Protected Branches"}),"\n",(0,t.jsx)(n.p,{children:"This repository has three protected branches:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"main"}),": Production code"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"}),": Documentation website source"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gh-pages"}),": Built documentation (auto-deployed)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,t.jsx)(n.strong,{children:"Important"}),": Never push directly to these branches. All contributions must come through Pull Requests."]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-i-contribute",children:"How Can I Contribute?"}),"\n",(0,t.jsx)(n.h3,{id:"reporting-bugs",children:"Reporting Bugs"}),"\n",(0,t.jsxs)(n.p,{children:["Before creating bug reports, please check ",(0,t.jsx)(n.a,{href:"https://github.com/calendar-canvas/calendar-canvas/issues",children:"existing issues"})," as you might find that the issue has already been reported. When creating a bug report, please include as much detail as possible:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use a clear and descriptive title"}),"\n",(0,t.jsx)(n.li,{children:"Describe the exact steps to reproduce the problem"}),"\n",(0,t.jsx)(n.li,{children:"Provide specific examples to demonstrate the steps"}),"\n",(0,t.jsx)(n.li,{children:"Describe the behavior you observed after following the steps"}),"\n",(0,t.jsx)(n.li,{children:"Explain which behavior you expected to see instead and why"}),"\n",(0,t.jsx)(n.li,{children:"Include screenshots if possible"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"suggesting-enhancements",children:"Suggesting Enhancements"}),"\n",(0,t.jsx)(n.p,{children:"Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use a clear and descriptive title"}),"\n",(0,t.jsx)(n.li,{children:"Provide a detailed description of the proposed feature"}),"\n",(0,t.jsx)(n.li,{children:"Explain why this enhancement would be useful"}),"\n",(0,t.jsx)(n.li,{children:"List some examples of how it would be used"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,t.jsx)(n.h4,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fork the repository"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create your feature branch from ",(0,t.jsx)(n.code,{children:"main"})," for code changes or ",(0,t.jsx)(n.code,{children:"docs"})," for documentation:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# For code changes\ngit checkout main\ngit checkout -b feature/your-feature-name\n\n# For documentation changes\ngit checkout docs\ngit checkout -b docs/your-doc-change\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make your changes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Commit your changes using a descriptive commit message that follows our ",(0,t.jsx)(n.a,{href:"#commit-message-guidelines",children:"commit message conventions"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Push to your fork"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a Pull Request"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"branch-naming-convention",children:"Branch Naming Convention"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Features: ",(0,t.jsx)(n.code,{children:"feature/your-feature-name"})]}),"\n",(0,t.jsxs)(n.li,{children:["Bug fixes: ",(0,t.jsx)(n.code,{children:"fix/issue-description"})]}),"\n",(0,t.jsxs)(n.li,{children:["Documentation: ",(0,t.jsx)(n.code,{children:"docs/what-you-changed"})]}),"\n",(0,t.jsxs)(n.li,{children:["Performance improvements: ",(0,t.jsx)(n.code,{children:"perf/what-you-optimized"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"development-process",children:"Development Process"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create your feature branch:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout -b feature/amazing-feature\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make your changes"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run tests:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run test\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build the library:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"commit-message-guidelines",children:"Commit Message Guidelines"}),"\n",(0,t.jsx)(n.p,{children:"We follow conventional commits specification:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FEAT:"})," New feature"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FIX:"})," Bug fix"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DOCS:"})," Documentation only changes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"STYLE:"})," Changes that don't affect the meaning of the code"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"REFACTOR:"})," Code change that neither fixes a bug nor adds a feature"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PERF:"})," Code change that improves performance"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TEST:"})," Adding missing tests"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CHORE:"})," Changes to the build process or auxiliary tools"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"FEAT: add week view navigation\n"})}),"\n",(0,t.jsx)(n.h4,{id:"pull-request-process",children:"Pull Request Process"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Update the README.md with details of changes if needed"}),"\n",(0,t.jsx)(n.li,{children:"Update the documentation with details of any new features"}),"\n",(0,t.jsx)(n.li,{children:"The PR must pass all CI/CD checks"}),"\n",(0,t.jsx)(n.li,{children:"At least one maintainer must review and approve your PR"}),"\n",(0,t.jsx)(n.li,{children:"Squash commits before merging"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"style-guide",children:"Style Guide"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use TypeScript"}),"\n",(0,t.jsx)(n.li,{children:"Follow existing code style"}),"\n",(0,t.jsx)(n.li,{children:"Write meaningful variable and function names"}),"\n",(0,t.jsx)(n.li,{children:"Add JSDoc comments for public APIs"}),"\n",(0,t.jsx)(n.li,{children:"Include unit tests for new features"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsx)(n.p,{children:"If you're adding a new feature:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Add JSDoc comments"}),"\n",(0,t.jsx)(n.li,{children:"Update the TypeScript types"}),"\n",(0,t.jsx)(n.li,{children:"Add an example in the documentation"}),"\n",(0,t.jsx)(n.li,{children:"Update relevant guides"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"questions",children:"Questions?"}),"\n",(0,t.jsx)(n.p,{children:"Don't hesitate to ask questions about:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"How to implement a feature"}),"\n",(0,t.jsx)(n.li,{children:"Best practices"}),"\n",(0,t.jsx)(n.li,{children:"Design decisions"}),"\n",(0,t.jsx)(n.li,{children:"Anything else related to the project"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Create a discussion on GitHub or reach out to ",(0,t.jsx)(n.a,{href:"mailto:ap0661236@gmail.com",children:"ap0661236@gmail.com"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,t.jsx)(n.p,{children:"By contributing, you agree that your contributions will be licensed under the MIT License."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(6540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);