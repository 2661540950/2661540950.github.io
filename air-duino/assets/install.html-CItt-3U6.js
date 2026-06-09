import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,c as l,a,b as s,d as t,e as r,o as p}from"./app-B8tYiuI_.js";const c={},d={href:"https://github.com/Air-duino/AirISP/releases/latest",target:"_blank",rel:"noopener noreferrer"},u={class:"hint-container details"},v={href:"https://aur.archlinux.org/packages/airisp-git",target:"_blank",rel:"noopener noreferrer"};function m(b,n){const e=o("ExternalLinkIcon");return p(),l("div",null,[a("p",null,[n[1]||(n[1]=s("我们可以前往",-1)),a("a",d,[n[0]||(n[0]=s("GitHub Release页面",-1)),t(e)]),n[2]||(n[2]=s("下载最新版本的AirISP工具。",-1))]),a("details",u,[n[6]||(n[6]=a("summary",null,"Arch包管理安装",-1)),a("p",null,[n[4]||(n[4]=s("Arch Linux 及其衍生版可以安装 ",-1)),a("a",v,[n[3]||(n[3]=s("AUR airisp-git",-1)),t(e)]),n[5]||(n[5]=s("。",-1))]),n[7]||(n[7]=r(`<p><strong>注：命令行名称按 Arch Linux 规范应该是小写，安装后命令行为：<code>airisp</code>。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-Syu</span> airisp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2))]),n[8]||(n[8]=r(`<blockquote><p><code>AiISP</code>工具内置了<code>.NET</code>运行时，所以无需手动安装额外的依赖。</p></blockquote><p>解压后可以得到<code>AirISP.exe</code>（其他系统上可能为<code>AirISP</code>）</p><p>此时我们就可以直接使用这个工具了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>AirISP.exe <span class="token parameter variable">-h</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const f=i(c,[["render",m],["__file","install.html.vue"]]);export{f as default};
