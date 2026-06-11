import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as p,a as s,b as a,d as t,e as i,o}from"./app-B8tYiuI_.js";const d={},u={href:"https://github.com/Air-duino/AirISP",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/Air-duino/AirISP/releases/latest",target:"_blank",rel:"noopener noreferrer"},v={class:"hint-container details"},m={href:"https://aur.archlinux.org/packages/airisp-git",target:"_blank",rel:"noopener noreferrer"};function b(k,n){const e=l("ExternalLinkIcon");return o(),p("div",null,[n[13]||(n[13]=s("p",null,"AirISP 是一个通过串口与芯片ISP功能进行交互，从而实现擦除、烧录、修改读保护等功能的一个小工具。",-1)),s("p",null,[n[1]||(n[1]=a("它使用",-1)),n[2]||(n[2]=s("code",null,".NET6",-1)),n[3]||(n[3]=a("进行编写，支持跨平台。可以在",-1)),s("a",u,[n[0]||(n[0]=a("GitHub上获取该项目的源码",-1)),t(e)]),n[4]||(n[4]=a("。",-1))]),n[14]||(n[14]=s("h2",{id:"快速开始",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),a(" 快速开始")],-1)),s("p",null,[n[6]||(n[6]=a("前往",-1)),s("a",c,[n[5]||(n[5]=a("GitHub Release页面",-1)),t(e)]),n[7]||(n[7]=a("下载最新版本的AirISP工具。",-1))]),s("details",v,[n[11]||(n[11]=s("summary",null,"Arch 包管理安装",-1)),s("p",null,[n[9]||(n[9]=a("Arch Linux 及其衍生版可以安装 ",-1)),s("a",m,[n[8]||(n[8]=a("AUR airisp-git",-1)),t(e)]),n[10]||(n[10]=a("。",-1))]),n[12]||(n[12]=i(`<p><strong>注：命令行名称按 Arch Linux 规范应该是小写，安装后命令行为：<code>airisp</code>。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-Syu</span> airisp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2))]),n[15]||(n[15]=i(`<p>解压或安装后可以得到 <code>AirISP</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>AirISP <span class="token parameter variable">-h</span>
Description:
  AirISP 是一个flash烧录工具

Usage:
  AirISP <span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Options:
  -c, <span class="token parameter variable">--chip</span> <span class="token operator">&lt;</span>chip<span class="token operator">&gt;</span>                      目标芯片型号，auto/air001
  -p, <span class="token parameter variable">--port</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>                      串口名称
  -b, <span class="token parameter variable">--baud</span> <span class="token operator">&lt;</span>baud<span class="token operator">&gt;</span>                      串口波特率
  -t, <span class="token parameter variable">--trace</span>                            启用trace日志输出 <span class="token punctuation">[</span>default: False<span class="token punctuation">]</span>
  --connect-attempts <span class="token operator">&lt;</span>connect-attempts<span class="token operator">&gt;</span>  最大重试次数，小于等于0表示无限次，默认为10次 <span class="token punctuation">[</span>default: <span class="token number">10</span><span class="token punctuation">]</span>
  <span class="token parameter variable">--before</span> <span class="token operator">&lt;</span>before<span class="token operator">&gt;</span>                      下载前要执行的操作 <span class="token punctuation">[</span>default: default_reset<span class="token punctuation">]</span>
  <span class="token parameter variable">--after</span> <span class="token operator">&lt;</span>after<span class="token operator">&gt;</span>                        下载后要执行的操作 <span class="token punctuation">[</span>default: hard_reset<span class="token punctuation">]</span>
  <span class="token parameter variable">--version</span>                              Show version information
  -?, -h, <span class="token parameter variable">--help</span>                         Show <span class="token builtin class-name">help</span> and usage information

Commands:
  chip_id                           获取芯片ID
  get                               获取ISP版本和支持的命令列表
  get_version                       获取ISP版本和芯片读保护状态
  write_flash <span class="token operator">&lt;</span>address<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>  向flash刷入固件
  read_unprotect                    关闭读保护
  read_protect                      开启读保护
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以使用该工具为芯片进行烧录，比如下面这样：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>AirISP.exe <span class="token parameter variable">-c</span> air001 <span class="token parameter variable">-p</span> COM21 <span class="token parameter variable">-b</span> <span class="token number">115200</span> write_flash <span class="token parameter variable">-e</span> 0x08000000 gpio.hex
AirISP v1.2.4.0
串口 COM21
连接中<span class="token punctuation">..</span>.
Chip PID is: 0x04 0x40
擦除flash中（请耐心等待）<span class="token punctuation">..</span>.
擦除成功，耗时 <span class="token number">39.5811</span> ms.
Writing at <span class="token number">134219264</span><span class="token punctuation">..</span>. <span class="token number">100.00</span>%
Write <span class="token number">1536</span> bytes at 0x08000000 <span class="token keyword">in</span> <span class="token number">274.0526</span> ms

Leaving<span class="token punctuation">..</span>.
通过RTS硬件复位<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多信息请见其他章节内容</p>`,5))])}const h=r(d,[["render",b],["__file","index.html.vue"]]);export{h as default};
