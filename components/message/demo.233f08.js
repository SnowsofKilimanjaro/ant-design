(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1529:function(n,s,a){n.exports={duration:a(2e3),info:a(2001),loading:a(2002),other:a(2003),thenable:a(2004)}},2000:function(n,s,a){n.exports={content:{"zh-CN":[["p","自定义时长 ",["code","10s"],"，默认时长为 ",["code","3s"],"。"]],"en-US":[["p","Customize message display duration from default ",["code","3s"]," to ",["code","10s"],"."]]},meta:{order:2,title:{"zh-CN":"修改延时","en-US":"Customize duration"},filename:"components/message/demo/duration.md",id:"components-message-demo-duration"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'This is a prompt message for success, and it will disappear in 10 seconds\'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Customized display duration<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Button,{onClick:function(){s.message.success("This is a prompt message for success, and it will disappear in 10 seconds",10)}},"Customized display duration")}}},2001:function(n,s,a){n.exports={content:{"zh-CN":[["p","信息提醒反馈。"]],"en-US":[["p","Normal message for information."]]},meta:{order:0,title:{"zh-CN":"普通提示","en-US":"Normal prompt"},filename:"components/message/demo/info.md",id:"components-message-demo-info"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'This is a normal message\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    Display normal message\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Button,{type:"primary",onClick:function(){s.message.info("This is a normal message")}},"Display normal message")}}},2002:function(n,s,a){n.exports={content:{"zh-CN":[["p","进行全局 loading，异步自行移除。"]],"en-US":[["p","Display a global loading indicator, which is dismissed by itself asynchronously."]]},meta:{order:3,title:{"zh-CN":"加载中","en-US":"Message with loading indicator"},filename:"components/message/demo/loading.md",id:"components-message-demo-loading"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> hide <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Action in progress..\'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">// Dismiss manually and asynchronously</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span>hide<span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display a loading indicator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Button,{onClick:function(){var n=s.message.loading("Action in progress..",0);setTimeout(n,2500)}},"Display a loading indicator")}}},2003:function(n,s,a){n.exports={content:{"zh-CN":[["p","包括成功、失败、警告。"]],"en-US":[["p","Messages of success, error and warning types."]]},meta:{order:1,title:{"zh-CN":"其他提示类型","en-US":"Other types of message"},filename:"components/message/demo/other.md",id:"components-message-demo-other"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'This is a message of success\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'This is a message of error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> warning <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">\'This is message of warning\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>warning<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement("div",null,n.createElement(s.Button,{onClick:function(){s.message.success("This is a message of success")}},"Success"),n.createElement(s.Button,{onClick:function(){s.message.error("This is a message of error")}},"Error"),n.createElement(s.Button,{onClick:function(){s.message.warning("This is message of warning")}},"Warning"))},style:"\n#components-message-demo-other .ant-btn {\n  margin-right: 8px;\n}\n"}},2004:function(n,s,a){n.exports={content:{"zh-CN":[["p","可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。"]],"en-US":[["p",["code","message"]," provides a promise interface for ",["code","onClose"],". The above example will display a new message when the old message is about to close."]]},meta:{order:5,title:{"zh-CN":"Promise 接口","en-US":"Promise interface"},filename:"components/message/demo/thenable.md",id:"components-message-demo-thenable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  message\n    <span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">\'Action in progress..\'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'Loading finished\'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">\'Loading finished is finished\'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display sequential messages<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Button,{onClick:function(){s.message.loading("Action in progress..",2.5).then(function(){return s.message.success("Loading finished",2.5)}).then(function(){return s.message.info("Loading finished is finished",2.5)})}},"Display sequential messages")}}}}]);