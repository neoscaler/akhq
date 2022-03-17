"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77],{4412:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-4fa4b185",path:"/docs/configuration/docker.html",title:"Docker",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Pass custom Java opts",slug:"pass-custom-java-opts",children:[]},{level:2,title:"Run with another jvm.options file",slug:"run-with-another-jvm-options-file",children:[]},{level:2,title:"How to mount configuration file",slug:"how-to-mount-configuration-file",children:[]}],filePathRelative:"docs/configuration/docker.md",git:{updatedTime:1647550596e3,contributors:[{name:"Timon Back",email:"timonback@users.noreply.github.com",commits:1}]}}},9339:(n,a,e)=>{e.r(a),e.d(a,{default:()=>h});var s=e(6252);const t=(0,s.uE)('<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="pass-custom-java-opts" tabindex="-1"><a class="header-anchor" href="#pass-custom-java-opts" aria-hidden="true">#</a> Pass custom Java opts</h2><p>By default, the docker container will allow a custom JVM options setting the environments vars <code>JAVA_OPTS</code>. For example, if you want to change the default timezone, just add <code>-e &quot;JAVA_OPTS=-Duser.timezone=Europe/Paris&quot;</code></p><h2 id="run-with-another-jvm-options-file" tabindex="-1"><a class="header-anchor" href="#run-with-another-jvm-options-file" aria-hidden="true">#</a> Run with another jvm.options file</h2>',4),o=(0,s.Uk)("By default, the docker container will run with a "),i={href:"https://github.com/tchiotludo/akhq/blob/dev/docker/app/jvm.options",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("jvm.options"),l=(0,s.Uk)(" file, you can override it with your own with an Environment Variable. With the "),c=(0,s._)("code",null,"JVM_OPTS_FILE",-1),r=(0,s.Uk)(" environment variable, you can override the jvm.options file by passing the path of your file instead."),u=(0,s.uE)('<p>Override the <code>JVM_OPTS_FILE</code> with docker run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>\n    --env <span class="token assign-left variable">JVM_OPTS_FILE</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>path-of-your-jvm.options-file<span class="token punctuation">}</span><span class="token punctuation">}</span>\n    -p <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>\n    -v /tmp/application.yml:/app/application.yml <span class="token punctuation">\\</span>\n    tchiotludo/akhq\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Override the <code>JVM_OPTS_FILE</code> with docker-compose:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> tchiotludo/akhq<span class="token punctuation">-</span>jvm<span class="token punctuation">:</span>dev\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">JVM_OPTS_FILE</span><span class="token punctuation">:</span> /app/jvm.options\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;8080:8080&quot;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /tmp/application.yml<span class="token punctuation">:</span>/app/application.yml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>If you do not override the <code>JVM_OPTS_FILE</code>, the docker container will take the defaults one instead.</p><p>The AKHQ docker image supports 4 environment variables to handle configuration :</p><ul><li><code>AKHQ_CONFIGURATION</code>: a string that contains the full configuration in yml that will be written on /app/configuration.yml on the container.</li><li><code>MICRONAUT_APPLICATION_JSON</code>: a string that contains the full configuration in JSON format</li><li><code>MICRONAUT_CONFIG_FILES</code>: a path to a configuration file in the container. Default path is <code>/app/application.yml</code></li><li><code>CLASSPATH</code>: additional Java classpath entries. Must be used to specify the location of the TIBCO Avro client library jar if a &#39;tibco&#39; schema registry type is used</li></ul><h2 id="how-to-mount-configuration-file" tabindex="-1"><a class="header-anchor" href="#how-to-mount-configuration-file" aria-hidden="true">#</a> How to mount configuration file</h2><p>Take care when you mount configuration files to not remove akhq files located on /app. You need to explicitly mount the <code>/app/application.yml</code> and not mount the <code>/app</code> directory. This will remove the AKHQ binaries and give you this error: <code> /usr/local/bin/docker-entrypoint.sh: 9: exec: ./akhq: not found</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>\n<span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /app/application.yml\n  <span class="token key atrule">subPath</span><span class="token punctuation">:</span> application.yml\n  <span class="token key atrule">name</span><span class="token punctuation">:</span> config\n  <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',10),d={},h=(0,e(3744).Z)(d,[["render",function(n,a){const e=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[o,(0,s._)("a",i,[p,(0,s.Wm)(e)]),l,c,r]),u],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{for(const[e,s]of a)n[e]=s;return n}}}]);