var suggestions=document.getElementById("suggestions"),userinput=document.getElementById("userinput");document.addEventListener("keydown",inputFocus);function inputFocus(e){e.keyCode===191&&(e.preventDefault(),userinput.focus()),e.keyCode===27&&(userinput.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.querySelectorAll("a"),o=[...s],t=o.indexOf(document.activeElement);let n=0;e.keyCode===38?(e.preventDefault(),n=t>0?t-1:0,s[n].focus()):e.keyCode===40&&(e.preventDefault(),n=t+1<o.length?t+1:t,s[n].focus())}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/",title:"Introduction",description:"TrueBlocks Docs",content:`\u003cp\u003e\u003cfont color=red\u003e\u003cb\u003eAre you here for the OpenData Community Hackathon?\u003c/b\u003e\u003c/font\u003e\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e\u003ca href="https://github.com/TrueBlocks/trueblocks-docker"\u003eInstall the docker version and download (or build) the Unchained Index\u003c/a\u003e\u003c/li\u003e
\u003cli\u003eTutorials:
\u003cul\u003e
\u003cli\u003e\u003ca href="/blog/showing-erc-20-transfers/"\u003eShowing ERC20 transfers on the token contract\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="https://tjayrush.medium.com/recipe-factories-ce78fa4c5f5b"\u003eListing contracts created by an address (including UniSwap)\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="https://tjayrush.medium.com/recipe-monthly-token-balances-ff6a302fda80"\u003eMonthly ERC20 token balance for one or more addresses\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="https://tjayrush.medium.com/calling-smart-contracts-with-chifra-state-call-ea03b8d35ea7"\u003eCalling into smart contracts with \u003ccode\u003echifra state\u003c/code\u003e\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="https://medium.com/coinmonks/the-rent-is-too-damn-high-part-i-dc6695b25259"\u003eThe Rent is Too Damn High\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="https://medium.com/coinmonks/commanding-the-line-ca5fe3496ae1"\u003eCommanding the Line\u003c/a\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003e\u003cbig\u003e\u003cbig\u003e\u0026#8593\u003c/big\u003e\u003c/big\u003e\u003c/p\u003e
\u003chr\u003e
\u003cp\u003eAre blockchains really meeting their promise?\u003c/p\u003e
\u003ch2 id="problem-statement"\u003eProblem Statement\u003c/h2\u003e
\u003cp\u003eIf you\u0026rsquo;re like us, you fell in love with blockchains because of the promise they provide: world-wide, private, and permissionless
access to the most accurate and agreed-upon data ever produced. Near perfect data.\u003c/p\u003e
\u003cp\u003eBut in reality, it\u0026rsquo;s as if we\u0026rsquo;re just lost at sea. Awash in bytes.\u003c/p\u003e
\u003cimg src="/docs/img/steam-boat-off-a-harbor.jpg" alt="Who's stearing this boat?" width="500"/\u003e
\u003ch2 id="world-wide"\u003eWorld-wide\u003c/h2\u003e
\u003cp\u003eBlockchains are supposed to be world-wide. Are they? Yes, they are.\u003c/p\u003e
\u003ch2 id="permissionless"\u003ePermissionless\u003c/h2\u003e
\u003cp\u003eBlockchains are supposed to be permissionless. Are they? Not really.\u003c/p\u003e
\u003ch2 id="accurate"\u003eAccurate\u003c/h2\u003e
\u003cp\u003eBlockchains are supposed to be accurate. Are they? Well\u0026hellip;on-chain they are, but
off-chain, not even close. Ask any crypto-accountant.\u003c/p\u003e
\u003ch2 id="problem-statement-1"\u003eProblem statement\u003c/h2\u003e
\u003cp\u003eIt is true that anyone may send a transaction to a blockchain. All one needs is a wallet and access to an RPC\u0026hellip;
wait\u0026hellip;access to an RPC\u0026hellip;is that permissionless? Unless you\u0026rsquo;re running your own node, no, it\u0026rsquo;s not.\u003c/p\u003e
\u003cp\u003eIt\u0026rsquo;s worse than that. Not only must you ask permission to send a transaction, you must
ask permission to see the results. \u0026ldquo;Please Mr. Massive Blockchain Explorer in the Sky\u0026hellip;
please may I see my transactions? Oh, and by the way, you\u0026rsquo;re not watching me are you?\u0026rdquo;\u003c/p\u003e
\u003cp\u003eWorse even yet, have you ever actually tried to deeply understand what the blockchain explorer
is showing you? And why, after paying hundreds of dollars, does you crypto tax report have
massive, obvious errors?\u003c/p\u003e
\u003cp\u003eTrueBlocks can\u0026rsquo;t solve the first problem \u0026ndash; eventually you\u0026rsquo;re going to have to provide your
own access if you want the true benefits of decentralization. Luckily there are emerging
solutions such as \u003ca href="https://dappnode.io/"\u003edAppNode\u003c/a\u003e and \u003ca href="https://ava.do/"\u003eAvado\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003eTrueBlocks can, however, solve the other two problems \u0026ndash; accurate, private access to your
own transactions.\u003c/p\u003e
\u003chr\u003e
\u003cp\u003eLike Infura, anyone may visit EtherScan. That is true. Both of those systems are kind enough to
give us (give us!) whatever we ask for. But how long do you think it will take before they realize
(hint: they\u0026rsquo;ve already have) how valuable their position in the ecosystem is? Do you think they\u0026rsquo;re
not paying attention to what you\u0026rsquo;re doing? Do you think they\u0026rsquo;re not connecting your Ethereum address
to your IP address? I would be if I were them.\u003c/p\u003e
\u003cp\u003eWebsites and APIs are inherently the wrong solution for decentralized data for a number of reasons:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eThey can see who you are because your browser tells them your IP address (not private!).\u003c/li\u003e
\u003cli\u003eBecause their resources are shared among many users, they must protect their system by rate limiting you (not permissionless!)
\u003col\u003e
\u003cli\u003eThey use your IP address to rate limit you - that is, they know who you are each time you arrive\u003c/li\u003e
\u003c/ol\u003e
\u003c/li\u003e
\u003cli\u003eEvery time you visit EtherScan or use Infura, you do it with the same Ethereum address\u003c/li\u003e
\u003cli\u003eThey know who you are \u0026ndash; they know your address \u0026ndash; they know your spending habits \u0026ndash; that\u0026rsquo;s terrible for you\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eWebsites and APIs are terrible for you. If you think your privacy is being invaded today, wait until you start
telling them, with near perfect data, exactly what you spend your money on.\u003c/p\u003e
\u003cp\u003eWe all see this coming. No-one seems to want to do anything about it. In fact, we see an increasingly competitive
environment to provide you ingress and egress to the chain.\u003c/p\u003e
\u003ch2 id="solution"\u003eSolution\u003c/h2\u003e
\u003cp\u003e\u003ca href="https://dappnode.io/"\u003edAppNode\u003c/a\u003e, \u003ca href="https://github.com/ledgerwatch/erigon"\u003eErigon\u003c/a\u003e and TrueBlocks.\u003c/p\u003e
`}).add({id:1,href:"/docs/install/install-core/",title:"Install core",description:"TrueBlocks works on Linux and Mac",content:`\u003cp\u003eThese instructions assume you can navigate the command line and edit configuration files.
If you need help with a particular step, see the \u003ca href="/docs/install/install-troubleshooting"\u003einstallation\u0026rsquo;s troubleshooting section\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="installation"\u003eInstallation\u003c/h2\u003e
\u003cul\u003e
\u003cli\u003e
\u003cp\u003eOpen a terminal window.\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eType \u003ccode\u003ego version\u003c/code\u003e. If Go is not installed or your version is less than 1.18.0, \u003ca href="https://go.dev/doc/install"\u003einstall the latest version of Go\u003c/a\u003e\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eInstall or upgrade the build dependancies: \u003cem\u003egit\u003c/em\u003e, \u003cem\u003ecmake\u003c/em\u003e, \u003cem\u003eninja\u003c/em\u003e, \u003cem\u003ecurl\u003c/em\u003e, \u003cem\u003epython\u003c/em\u003e, \u003cem\u003eclang-format\u003c/em\u003e, \u003cem\u003ejq\u003c/em\u003e\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e\u003ca href="/docs/install/install-core/#how-do-i-install-packages-on-the-command-line"\u003eInstall dependencies\u003c/a\u003e
\u003cbr\u003e\u003cbr\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eClone the repo and compile the executable:\u003c/p\u003e
\u003c/li\u003e
\u003c/ul\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003egit clone https://github.com/TrueBlocks/trueblocks-core
cd trueblocks-core
mkdir build \u0026amp;\u0026amp; cd build
cmake ../src
make                   # may be faster with make -j \u0026lt;nproc\u0026gt;
\u003c/code\u003e\u003c/pre\u003e
\u003cul\u003e
\u003cli\u003e
\u003cp\u003eAdd \u003ccode\u003e./trueblocks-core/bin\u003c/code\u003e to your shell\u0026rsquo;s $PATH. Check Google if you don\u0026rsquo;t know what this means.\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003eType \u003ccode\u003echifra config --paths\u003c/code\u003e. This will produce a display similar to the following (ignore any errors). Note the \u003ccode\u003e$CONFIG\u003c/code\u003e paths.\u003c/p\u003e
\u003c/li\u003e
\u003c/ul\u003e
\u003cpre\u003e\u003ccode class="language-[shell]"\u003echifra status --paths:
  Config: $HOME/Library/Application Support/TrueBlocks/
  Cache : $HOME/Library/Application Support/TrueBlocks/cache/mainnet
  Index : $HOME/Library/Application Support/TrueBlocks/unchained/mainnet
\u003c/code\u003e\u003c/pre\u003e
\u003cul\u003e
\u003cli\u003eNext, edit a configuration file called \u003ccode\u003e$CONFIG/trueBlocks.toml\u003c/code\u003e. Edit this file and locate the \u003ccode\u003e[chains.mainnet]\u003c/code\u003e section. Add a valid RPC endpoint. If you don\u0026rsquo;t know what this means, search Google.\u003c/li\u003e
\u003c/ul\u003e
\u003cpre\u003e\u003ccode class="language-[shell]"\u003e[chains.mainnet]
...
rpcProvider = \u0026quot;http://localhost:8545\u0026quot;
...
\u003c/code\u003e\u003c/pre\u003e
\u003cul\u003e
\u003cli\u003eIf you wish to use the \u003ccode\u003e--articulate\u003c/code\u003e feature (you probably do), add an API key to the following section:\u003c/li\u003e
\u003c/ul\u003e
\u003cpre\u003e\u003ccode class="language-[shell]"\u003e[keys.etherscan]
...
apiKey = \u0026quot;\u0026lt;your Etherscan api key\u0026gt;\u0026quot;   # optional
...
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="testing-the-install"\u003eTesting the install\u003c/h2\u003e
\u003cp\u003eIf you\u0026rsquo;ve installed things properly, you should be able to now run the following command, which should return this data:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[shell]"\u003echifra blocks 12
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eYou should get results similar to these:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-[shell]"\u003e{
  \u0026quot;data\u0026quot;: [
    {
      \u0026quot;gasLimit\u0026quot;: 5000,
      \u0026quot;gasUsed\u0026quot;: 0,
      \u0026quot;hash\u0026quot;: \u0026quot;0xc63f666315fa1eae17e354fab532aeeecf549be93e358737d0648f50d57083a0\u0026quot;,
      \u0026quot;blockNumber\u0026quot;: 12,
      \u0026quot;parentHash\u0026quot;: \u0026quot;0x3f5e756c3efcb93099361b7ddd0dabfeaa592439437c1c836e443ccb81e93242\u0026quot;,
      \u0026quot;miner\u0026quot;: \u0026quot;0x0193d941b50d91be6567c7ee1c0fe7af498b4137\u0026quot;,
      \u0026quot;difficulty\u0026quot;: 17179844608,
      \u0026quot;finalized\u0026quot;: true,
      \u0026quot;timestamp\u0026quot;: 1438270144,
      \u0026quot;baseFeePerGas\u0026quot;: 0
    }
  ]
}
\u003c/code\u003e\u003c/pre\u003e
\u003cul\u003e
\u003cli\u003eAssuming the above works, you\u0026rsquo;re system is properly installed. If not, see the \u003ca href="/docs/install/install-troubleshooting"\u003eTroubleShooting section\u003c/a\u003e.\u003c/li\u003e
\u003c/ul\u003e
\u003ch2 id="more-information"\u003eMore information\u003c/h2\u003e
\u003cp\u003eThere\u0026rsquo;s a lot left to learn. Have fun:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003e\u003ca href="/docs/install/build-unchained-index/"\u003eUsing the Unchained Index\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="https://github.com/TrueBlocks/trueblocks-core/tree/master/src/examples"\u003eExplore some coding examples\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="/tags/tutorials/"\u003eView data science recipies\u003c/a\u003e\u003c/li\u003e
\u003cli\u003e\u003ca href="/docs/install/install-explorer/"\u003eUse the explorer application\u003c/a\u003e\u003c/li\u003e
\u003c/ul\u003e
`}).add({id:2,href:"/docs/prologue/about-trueblocks/",title:"About TrueBlocks",description:"How does TrueBlocks address the problem",content:`\u003ch2 id="trueblocks-provides-a-solution"\u003eTrueBlocks provides a solution\u003c/h2\u003e
\u003cp\u003eWe think there are at least three fundamental problems with the current Ethereum ecosystem:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eIt\u0026rsquo;s difficult to run your own Ethereum node (not really, see below).\u003c/li\u003e
\u003cli\u003eEven if one runs a node, getting useful data is nearly impossible.\u003c/li\u003e
\u003cli\u003eAll current solutions end up with a winner-take-all central database just like Google.\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eWe discuss each of these problems below.\u003c/p\u003e
\u003ch3 id="ethereum-nodes-are-difficult-to-run"\u003eEthereum nodes are difficult to run\u003c/h3\u003e
\u003cp\u003eVitalik once called the Ethereum client software a \u0026ldquo;Big, Hairy node.\u0026rdquo; No wonder people think they are hard to run.\u003c/p\u003e
\u003cp\u003eBut, with the recent arrival of \u003ca href="https://dappnode.io/"\u003edAppNode\u003c/a\u003e and \u003ca href="https://ava.do/"\u003eAvado\u003c/a\u003e things
have gotten much easier. Each of these products allows you to buy a machine, plug it in the wall,
and your soon you\u0026rsquo;re running your own node.\u003c/p\u003e
\u003cp\u003eYou should to this now. Buy a dAppNode, plug it in, and enjoy the benefits of running your own node. Why wait?\u003c/p\u003e
\u003ch3 id="useful-data-is-hard-to-get"\u003eUseful data is hard to get\u003c/h3\u003e
\u003cp\u003eIt is our strong beleif that the Ethereum RPC is broken. It\u0026rsquo;s missing something. An index by address.\u003c/p\u003e
\u003cp\u003eThe goal of TrueBlocks is to provide exactly that missing peice. We call our solution the \u003ca href="/docs/install/build-unchained-index/"\u003eUnchained Index\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003eThe Unchained Index is created locally on your machine \u0026ndash; on the dAppNode. As a direct result of being local, the index has a number of amazing qualities:\u003c/p\u003e
\u003col\u003e
\u003cli\u003e\u003cstrong\u003eIt fixes the broken node:\u003c/strong\u003e Without an index, one cannot query the node for a \u0026ldquo;list of everything that ever happened to an address.\u0026rdquo; With one, which is what the Unchained Index provides, one can make such a query. In effect this turns the node from a \u0026ldquo;really shitting database,\u0026rdquo; into a perfectly fine database.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eNo rate limiting:\u003c/strong\u003e Because both your node and the Unchained Index are local and not shared with other users, there is no need for rate limiting. Your can query the local node 100s of times faster than you can an API. This has massive implications for the types of applications you can build.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003ePerfectly private:\u003c/strong\u003e All queries happen against your local node - you don\u0026rsquo;t expose your IP address to anyone, nor do you expose any information about which addresses you\u0026rsquo;re interested in.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eFaster queries leads to a better index::\u003c/strong\u003e Because we can query so much faster, we can dig MUCH deeper into the details of every block. This means our index contains more information about where an address appears on the chain. In fact, in tests against two popular Ethereum APIs, we consistently find 20-30% more appearances.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eMore appearances means more accurate results:\u003c/strong\u003e because our locally created index goes to a deeper level of detail, we can deliver to end user applications much more informative data. For example, we can fully reconcile transactions off-chain. Something not even the most expensive web-based services can do.\u003c/li\u003e
\u003cli\u003e\u003cstrong\u003eUnique user experience:\u003c/strong\u003e Because TrueBlocks is focused on the \u0026ldquo;account\u0026rdquo;, the user experience is cohesive \u0026ndash; everything about an account is brought together in single interface. No more visiting a different website for each different dApp you interact with.\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eTrueBlocks ships with large suite of command line tools that allow you to make exactly the queries you want to make. One of the
command line options is an API server which allows you to build blindly-fast desktop applications. We\u0026rsquo;ve built an example of
such an application with our \u003ca href="/docs/install/install-explorer"\u003eAccount Explorer\u003c/a\u003e.\u003c/p\u003e
\u003ch3 id="avoiding-winner-take-all"\u003eAvoiding winner-take-all\u003c/h3\u003e
\u003cp\u003eIn it\u0026rsquo;s best incarnation, TrueBlocks runs locally against your own locally running node. If you build the thing yourself, no-one can take it away from you. After the initial syncronization of your node (Erigon, for example) which may take a few weeks, you can run one of TrueBlocks\u0026rsquo; command line tools called \u003ca href="/chifra/admin/#chifra-scrape"\u003echifra scrape\u003c/a\u003e. This process takes a few days.\u003c/p\u003e
\u003cp\u003eTo ease the burden of having to create the Unchained Index yourself, you may download it from IPFS using \u003ca href="/chifra/admin/#chifra-init"\u003echifra init\u003c/a\u003e. Putting this data on IPFS has the very interesting consequence of sharing it. This makes it impossible for us (or anyone) to become the \u0026ldquo;holder of all data\u0026rdquo; which eventually leads to winner-take-all like Google. We want to purposfully avoid that.\u003c/p\u003e
\u003cp\u003eThis whole process is \u003ca href="/docs/install/build-unchained-index/"\u003ebetter explained here\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="unchained-index-provides-huge-advantages"\u003eUnchained Index provides huge advantages\u003c/h2\u003e
\u003cp\u003eBesides the philosophical benefits, TrueBlocks is straight up more performant.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eQuerying straight from your hard drive is \u003cem\u003e100s of times faster than an API\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eA local binary cache makes subsequent queries \u003cem\u003enearly instantaneous\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eAvoiding a full extraction of the data from the node results in much lower hardware requirements: from \u003cem\u003eterabytes to gigabytes\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eBloom filters further reduce storage overhead and greatly lessen the search time for particular addresses.\u003c/li\u003e
\u003cli\u003eArticulation resolves the transactional detail at the byte level, \u003cem\u003eturning byte streams into human-readable data\u003c/em\u003e.\u003c/li\u003e
\u003cli\u003eThe data can be exported into many formats: \u003cem\u003eJSON, CSV, TSV, OFX, etc.\u003c/em\u003e\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eTrueBlocks performs so well because the design data first. We are lifelong hackers, and we agree with \u003ca href="https://lwn.net/Articles/193245/"\u003eLinus Torvalds when he
said\u003c/a\u003e:\u003c/p\u003e
\u003cblockquote\u003e
\u003cp\u003eIn fact, I\u0026rsquo;m a huge proponent of designing your code around the data, rather than the other way around.\u003c/p\u003e
\u003c/blockquote\u003e
\u003ch2 id="more-words"\u003eMore words!\u003c/h2\u003e
\u003cp\u003eWe\u0026rsquo;ve got more words for you. \u003ca href="/blog/a-long-winded-explanation-of-trueblocks/"\u003eThis blog post covers these topics in much more detail\u003c/a\u003e.\u003c/p\u003e
`}).add({id:3,href:"/docs/install/build-unchained-index/",title:"Unchained Index",description:"There are three ways to get the index. Each way involves some tradeoff between initialization time, storage use, and local access.",content:`\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eIf you want\u0026hellip;\u003c/th\u003e
\u003cth\u003eand you don\u0026rsquo;t mind\u0026hellip;\u003c/th\u003e
\u003cth\u003ethen use\u0026hellip;\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eto minimize the size of the data stored locally and\u003cbr\u003eyou want to get started faster\u0026hellip;\u003c/td\u003e
\u003ctd\u003eslower first-time queries on new addresses, an index\u003cbr\u003ethat\u0026rsquo;s slightly behind the head of the chain, an index\u003cbr\u003ecreated by someone else\u0026hellip;\u003c/td\u003e
\u003ctd\u003e\u003ca href="#use-init-to-get-only-the-chunks-you-query"\u003e\u003ccode\u003echifra init\u003c/code\u003e\u003c/a\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eto maximize the speed of first-time queries for\u003cbr\u003enew addresses\u0026hellip;\u003c/td\u003e
\u003ctd\u003elonger initial setup time, ~70 GB of local storage, an\u003cbr\u003eindex that\u0026rsquo;s slightly behind the head of the chain, an\u003cbr\u003eindex created by someone else\u0026hellip;\u003c/td\u003e
\u003ctd\u003e\u003ca href="#use_init_all-to-get-all-index-chunks"\u003e\u003ccode\u003echifra init --all\u003c/code\u003e\u003c/a\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ehave a locally-running node and wish to build\u003cbr\u003ethe index yourself\u0026hellip;\u003c/td\u003e
\u003ctd\u003etwo to three days setup time and running your own\u003cbr\u003elocal node (such as dAppnode)\u0026hellip;.\u003c/td\u003e
\u003ctd\u003e\u003ca href="#use-scrape-to-build-your-own-index"\u003e\u003ccode\u003echifra scrape\u003c/code\u003e\u003c/a\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch2 id="getting-the-index-without-running-a-node"\u003eGetting the index without running a node\u003c/h2\u003e
\u003cp\u003eIf you\u0026rsquo;re not running your own node (or you don\u0026rsquo;t feel like waiting), you can download all or part of a pre-built index from IPFS.\u003c/p\u003e
\u003cp\u003eTo do this, you have two options:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003erun \u003ccode\u003echifra init\u003c/code\u003e to download only the Bloom filters. Then, as you query individual addresses, TrueBlocks will download the much-larger index chunks (\u003cem\u003efaster now, slower later\u003c/em\u003e)\u003c/li\u003e
\u003cli\u003erun \u003ccode\u003echifra init --all\u003c/code\u003e to download both the Bloom filters and the index chunks all at once (\u003cem\u003eslower now, faster later\u003c/em\u003e)\u003c/li\u003e
\u003c/ul\u003e
\u003ch3 id="use-chifra-init-to-get-a-subset-of-the-data"\u003eUse chifra init to get a subset of the data\u003c/h3\u003e
\u003cp\u003eTo get only the Bloom filters, run \u003ccode\u003echifra init\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eIf you do this, you will have to periodically re-run the command to update your index. (\u003ca href="#Supplementary-how-can-I-see-when-the-manifest-was-last-published"\u003eRead about the finding the latest manifest\u003c/a\u003e).\u003c/p\u003e
\u003cp\u003eFor more information, see the \u003ca href="/chifra/admin#chifra-init"\u003e\u003ccode\u003echifra init\u003c/code\u003e command documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eInitial set up time\u003c/strong\u003e: \u003ccode\u003echifra init\u003c/code\u003e takes only about a half an hour on a machine with a good connection. (We\u0026rsquo;ve had report from some users that it takes much longer, but we suspect they are on slow machines.) We highly prefer you have a capable machine.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eStorage use\u003c/strong\u003e: In this scenario, since you only download the Bloom filters, the space required is about 1GB. Subsequently, as you download individual chunk, each chunk occupies about 25MB.\u003c/p\u003e
\u003cp\u003eThe number of index chunks you download depends entirely on the addresses you query. Of course, if you query a lightly used address, very few chunks will be downloaded. However, if you query are heavily used address, such as UniSwap, nearly every chunk will be downloaded. This is by design. In the later case, you would probably be better off using \u003ccode\u003echifra init --all\u003c/code\u003e to begin with.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eFor typical addresses (e.g. personal accounts), storage is somewhere between 50 to 500 MB\u003c/li\u003e
\u003cli\u003eFor more active addresses, storage may be as much as 1 or 2 GB\u003c/li\u003e
\u003cli\u003eFor very popular smart contracts, the storage requirement may be as high as 50 GB\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003e\u003cstrong\u003eHow it works\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eWhen you run \u003ccode\u003echifra init\u003c/code\u003e, TrueBlocks downloads a set of Bloom filters from the latest published manifest to your local machine. Subsequently, when you want to explore an address history, e.g. with the command \u003ccode\u003echifra export \u0026lt;address\u0026gt;\u003c/code\u003e, TrueBlocks:\u003c/p\u003e
\u003col\u003e
\u003cli\u003eScans the Bloom filters for potential matches and if there\u0026rsquo;s a hit, downloads the corresponding index chunks.\u003c/li\u003e
\u003cli\u003eReturns the set of \u003ccode\u003eappearances\u003c/code\u003e for the address as pairs of \u003ccode\u003e\u0026lt;block number\u0026gt;\u003c/code\u003e and \u003ccode\u003e\u0026lt;transaction_id\u0026gt;\u003c/code\u003e. (This permits direct queries for exact details of desired transaction histories).\u003c/li\u003e
\u003cli\u003eGiven the list of \u003ccode\u003eappearances\u003c/code\u003e, TrueBlocks pulls the full transacitonal history of the account from any (remote or local) RPC endpoint.\u003c/li\u003e
\u003cli\u003eDuring the query, you may instruct TrueBlocks to cache the response locally, making future queries for this same address nearly instantaneous.\u003c/li\u003e
\u003c/ol\u003e
\u003ch3 id="use-chifra-init---all-to-get-the-entirity-of-the-index"\u003eUse chifra init \u0026ndash;all to get the entirity of the index\u003c/h3\u003e
\u003cp\u003eTo get the entirety of the appearance index, run \u003ccode\u003echifra init --all\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eIf you use this command and don\u0026rsquo;t run \u003ccode\u003echifra scrape\u003c/code\u003e, you will have to update the index periodically by running the command again. (\u003ca href="#Supplementary-how-can-I-see-when-the-manifest-was-last-published"\u003eRead about the finding the latest manifest\u003c/a\u003e).\u003c/p\u003e
\u003cp\u003eFor detailed instructions, see the \u003ca href="/chifra/admin#chifra-pins"\u003e\u003ccode\u003echifra pins\u003c/code\u003e documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eInitial set up time\u003c/strong\u003e: Somewhere between six and ten hours depending on the speed of your connection.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eStorage use\u003c/strong\u003e: About 60GB-80GB\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eHow it works\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eThe initialization is very similar to the \u003ccode\u003einit\u003c/code\u003e process described in the previous section.\u003c/p\u003e
\u003cp\u003eHowever, while \u003ccode\u003echifra init\u003c/code\u003e downloads only the Bloom filters, downloading the index chunks only after a user queries for an address, \u003ccode\u003echifra init --all\u003c/code\u003e \u003cem\u003edownloads all index chunks up front\u003c/em\u003e.\u003c/p\u003e
\u003cp\u003eWhile this process takes much longer (perhaps hours), when you query a particular address in the future, TrueBlocks no longer has to download anything.
Therefore, the query is significantly faster.
In other words, the first time you run \u003ccode\u003echifra export \u0026lt;transaction\u0026gt;\u003c/code\u003e, the process is much faster than it is if you initialize with \u003ccode\u003echifra init\u003c/code\u003e alone.\u003c/p\u003e
\u003cp\u003eAs is true of the previous methods, if you enable caching, subsequent queries for the same address return almost instantly.\u003c/p\u003e
\u003ch2 id="use-chifra-scrape-to-build-your-own-index"\u003eUse chifra scrape to build your own index\u003c/h2\u003e
\u003cblockquote\u003e
\u003cp\u003e👉 \u003cstrong\u003eNote\u003c/strong\u003e:
If you don\u0026rsquo;t have a node with tracing or archiving, \u003ccode\u003escrape\u003c/code\u003e exits by default.
You can still use scrape, but you need to
\u003ca href="/docs/install/install-core#no-tracing"\u003eopen your config and disable these checks\u003c/a\u003e\u003c/p\u003e\u003c/p\u003e
\u003c/blockquote\u003e
\u003cp\u003eTo build your own index without any downloading, run \u003ccode\u003echifra scrape\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eFor detailed instructions, see the \u003ca href="/chifra/admin#chifra-scrape"\u003e\u003ccode\u003echifra scrape\u003c/code\u003e command documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eInitial set up time\u003c/strong\u003e: This method requires a locally-running tracing / archive node such as dAppNode running Erigon. Early users have reported 2-4 days to build the index from scratch. (You may wish to run \u003ccode\u003echifra scrape\u003c/code\u003e in an application like \u003ccode\u003etmux\u003c/code\u003e, so you can close the terminal window while it builds.)\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eStorage use\u003c/strong\u003e: About 60GB.\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eHow it works\u003c/strong\u003e:\u003c/p\u003e
\u003cp\u003eThe end result of \u003ccode\u003echifa scrape\u003c/code\u003e is the same as the end result of \u003ccode\u003echifra init --all\u003c/code\u003e. However, the process is crucially different: rather than downloading the index that we publish (that is, trusting us), \u003ccode\u003echifra scrape\u003c/code\u003e \u003cem\u003ebuilds the index on your local machine connecting only with your local-running RPC endpoint\u003c/em\u003e, which means if you trust your own setup, you can trust the data.\u003c/p\u003e
\u003cp\u003e(One note: It\u0026rsquo;s possible to run against any RPC endpoint \u0026ndash; remote or local \u0026ndash; but because the TrueBlocks scraper hits the node continually and very aggressively, you will probably get rate-limited against a shared RPC server such as Infura.)\u003c/p\u003e
\u003cp\u003eA good explanation of this whole process requires a long form article. For now, the curious may look at the best documentation available, the \u003ccode\u003esrc\u003c/code\u003e directory of the source code.\u003c/p\u003e
\u003ch2 id="one-final-note-on-building--making-the-index"\u003eOne final note on building / making the index\u003c/h2\u003e
\u003cp\u003eYou can, if you wish, mix and match the above methods.\u003c/p\u003e
\u003cp\u003eFor example, you can initially download only the Bloom filters with \u003ccode\u003echifra init\u003c/code\u003e and then start up \u003ccode\u003echifra scrape\u003c/code\u003e in the background. This would allow you to get started quickly but stay up to the front of the chain. Of course, as with everything, there\u0026rsquo;s a tradeoff. You will be storing a few MB every time a new chunk is created (about three times a day). In return, it\u0026rsquo;s way faster to query and the index stay up to the chain.\u003c/p\u003e
\u003cp\u003eAlternatively, you may choose to scrape (i.e. build) the index yourself and share it with others by pinning it on IPFS. In this case, you\u0026rsquo;re being a good citizen and making the whole ecosystem better off because you\u0026rsquo;re sharing you index.\u003c/p\u003e
\u003cp\u003eYou can download the index (either with \u003ccode\u003echifra init\u003c/code\u003e or \u003ccode\u003echifra init --all\u003c/code\u003e) and pin that data (with the \u003ccode\u003e--pin_locally\u003c/code\u003e flag) as a way to share with the community, and then turn on the scraper. All options are available as a way to maximize the usefulness of the tool.\u003c/p\u003e
\u003ch2 id="supplementary-how-can-i-see-when-the-manifest-was-last-published"\u003eSupplementary: how can I see when the manifest was last published?\u003c/h2\u003e
\u003cp\u003eTo view the latest manifest published by TrueBlocks (note that there may be other publishers), pass our publisher id: \u003ccode\u003e0xf503017d7baf7fbc0fff7492b751025c6a78179b\u003c/code\u003e and the string \u003ccode\u003emainnet\u003c/code\u003e to the \u003ccode\u003emanifestHashMap()\u003c/code\u003e method of the UnchainedIndex_V2 contract at https://etherscan.io/address/0x0c316b7042b419d07d343f2f4f5bd54ff731183d#readContract. This will return the \u003ccode\u003eLATEST_IPFS_HASH\u003c/code\u003e of the manifest. To fetch the manifest, use an IPFS client and \u003ccode\u003eipfs get \u0026lt;LATEST_IPFS_HASH\u0026gt;\u003c/code\u003e or a gateway (such as the one TrueBlocks maintains) \u003ccode\u003ehttps://ipfs.unchainedindex.io/ipfs/LATEST_IPFS_HASH\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eEdit the resulting file to see the latest published data.\u003c/p\u003e
\u003cp\u003eAlternatively, you may always use \u003ccode\u003echifra chunks manifest\u003c/code\u003e to see where the latest published index is at.\u003c/p\u003e
`}).add({id:4,href:"/docs/prologue/design-philosophy/",title:"Design philosophy",description:"The philosophy behind the technical design of TrueBlocks",content:`\u003ch2 id="the-three-commandments"\u003eThe three commandments\u003c/h2\u003e
\u003col\u003e
\u003cli\u003e
\u003cp\u003e\u003cstrong\u003eLet users query this data without asking third-parties for permission.\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eIf you can access blockchain data only through a third party (e.g. a cloud provider),
is the data really decentralized?\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003e\u003cstrong\u003eProvide accurate access, to underived, consented-to, pure immutable data.\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eIf the blockchain data is not accurate, what good is the blockchain?\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003e\u003cstrong\u003ePerform well on small machines\u003c/strong\u003e\u003c/p\u003e
\u003cp\u003eIf an application requires web-scale computer infrastructure,
does it really support decentralization?\u003c/p\u003e
\u003c/li\u003e
\u003c/ol\u003e
\u003ch2 id="how-trueblocks-prioritizes-design-features"\u003eHow TrueBlocks prioritizes design features\u003c/h2\u003e
\u003cp\u003eNo application can do all things. All design decisions involve tradeoffs.
TrueBlocks tries to make trade off \u003cem\u003econsciously\u003c/em\u003e, so that we always
make the application best serve our core values.\u003c/p\u003e
\u003ch3 id="core-design-values"\u003eCore design values\u003c/h3\u003e
\u003cp\u003eThese core design features are \u003cem\u003eimperative\u003c/em\u003e.
They underlie every single commit made to the TrueBlocks code base.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eCore design values\u003c/th\u003e
\u003cth\u003eWhat they mean in practice matter\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eDecentralization\u003c/td\u003e
\u003ctd\u003eNo one should have to rely on anyone other than themselves for data. This including users who want data at the very end of the data journey\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ePerformance\u003c/td\u003e
\u003ctd\u003eTrueBlocks should be fast on small machines, and provide options for minimal disc footprints\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ePreserves integrity of data\u003c/td\u003e
\u003ctd\u003eBlockchain data is mutually-agreed upon and consented-to. Don\u0026rsquo;t tamper with it.\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch3 id="very-important-values"\u003eVery important values\u003c/h3\u003e
\u003cp\u003eThese values are particularly important. They are naturally necessary to achieving
the core design features.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eVery important values\u003c/th\u003e
\u003cth\u003eWhat they mean in practice\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eTransparency\u003c/td\u003e
\u003ctd\u003eEvery person gets permissionless access to all the data they want; the application should be open source, letting users verify the data\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eReproducibility\u003c/td\u003e
\u003ctd\u003eRequired for transparency and decentralization\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eStability\u003c/td\u003e
\u003ctd\u003eIt should run forever with zero downtime\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch3 id="important-values"\u003eImportant values\u003c/h3\u003e
\u003cp\u003eThese values are important, and TrueBlocks tries to maximize these values wherever possible.
However, if we have to make a tradeoff, these values come after the core values.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eImportant values\u003c/th\u003e
\u003cth\u003eWhat they mean in practice\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eRobustness\u003c/td\u003e
\u003ctd\u003eApp should work forever without needing to be futzed with\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eApproachability\u003c/td\u003e
\u003ctd\u003eEasy to understand how it works; easy to understand how to get started\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eSimplicity\u003c/td\u003e
\u003ctd\u003eRelated to Approachability\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eExtensibility\u003c/td\u003e
\u003ctd\u003eOthers should be able to add to it\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eMaintainability\u003c/td\u003e
\u003ctd\u003eIdeally requires no maintenance\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eDebuggability\u003c/td\u003e
\u003ctd\u003eAn internal concern\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch3 id="not-priorities"\u003eNot priorities\u003c/h3\u003e
\u003cp\u003eWhile TrueBlocks does not \u003cem\u003etry\u003c/em\u003e to sacrifice these values, they are not core concerns.\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eNot a priority\u003c/th\u003e
\u003cth\u003eWhy these values aren\u0026rsquo;t emphasized\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eCompatibility\u003c/td\u003e
\u003ctd\u003eDepends on programming languages that we use, so not a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eComposability\u003c/td\u003e
\u003ctd\u003eNot really a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eExpressiveness\u003c/td\u003e
\u003ctd\u003eNot a concern, readable commands more important\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eInteroperability\u003c/td\u003e
\u003ctd\u003eOnly care about data being platform-independent. Production of the index needs to create something that is useful outside of TrueBlocks\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eMensurability\u003c/td\u003e
\u003ctd\u003eFor internal use only, so less of a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003ePortability\u003c/td\u003e
\u003ctd\u003eDepends on programming language, so not a concern\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eSafety\u003c/td\u003e
\u003ctd\u003eNot really. Consented to data is safe.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eSecurity\u003c/td\u003e
\u003ctd\u003eNot really. Out of our code\u0026rsquo;s purview other than basic software security. We hold no special data: our data is consented-to data. Reproducible, consented-to data is reproducibly safe. The app runs on local machines. If the local machine is compromised, TrueBlocks is not the user\u0026rsquo;s biggest security concern.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eThoroughness\u003c/td\u003e
\u003ctd\u003eThe application should do one thing perfectly \u0026ndash; reconciliations\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cp\u003e\u003cem\u003eThis ranking of values was inspired by \u003ca href="https://www.youtube.com/watch?v=2wZ1pCpJUIM"\u003ea talk given by Bryan Cantrill in 2018\u003c/a\u003e.\u003c/em\u003e\u003c/p\u003e
\u003ch2 id="mantras-for-decentralized-data"\u003eMantras for decentralized data\u003c/h2\u003e
\u003cp\u003eBecause \u0026ldquo;commandments\u0026rdquo; sounds authoritarian and Abrahamic, we also keep an ongoing list of mantras.\u003c/p\u003e
\u003cp\u003eIf repeated endlessly, they will eventually sink in:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eAll the data, for all the people, all the time, but no data if the user doesn’t want it\u003c/li\u003e
\u003cli\u003eUse only consented-to data…
\u003cul\u003e
\u003cli\u003eIf you can’t do that, use only data derived directly from consented-to data\u003c/li\u003e
\u003cli\u003eIf you can’t do that, find a way to force the data provider to prove their data\u003c/li\u003e
\u003c/ul\u003e
\u003c/li\u003e
\u003cli\u003eThe paradigm has shifted, embrace it - the server is now called localhost\u003c/li\u003e
\u003cli\u003eBreak yourself out of the browser. There’s a big wide desktop out there\u003c/li\u003e
\u003cli\u003eIt’s easier to scale up than to scale down - decentralize first\u003c/li\u003e
\u003cli\u003eMost users care only about themselves and maybe a few smart contracts\u003c/li\u003e
\u003cli\u003eSome users, but not all, care about everything\u003c/li\u003e
\u003cli\u003eEveryone needs to do accounting and pay taxes\u003c/li\u003e
\u003cli\u003eThe node can, and should be, be improved\u003c/li\u003e
\u003c/ul\u003e
`}).add({id:5,href:"/docs/install/install-explorer/",title:"Install explorer",description:"Explorer is the GUI frontend for TrueBlocks ",content:`\u003cp\u003eFirst, make sure that you have the \u003ccode\u003echifra-core\u003c/code\u003e backend up and running,
then run the application from \u003ca href="https://github.com/TrueBlocks/trueblocks-explorer"\u003ea clone of the explorer repo\u003c/a\u003e.\u003c/p\u003e
\u003ch2 id="before-you-begin"\u003eBefore you begin\u003c/h2\u003e
\u003cp\u003e☑ Set up the trueblocks backend using the \u003ca href="/docs/install/install-core"\u003echifra installation instructions\u003c/a\u003e\u003c/p\u003e
\u003cp\u003e☑ In a terminal window, run the command \u003ccode\u003echifra serve\u003c/code\u003e\u003c/p\u003e
\u003ch2 id="install"\u003eInstall\u003c/h2\u003e
\u003cp\u003eKeep the \u003ccode\u003echifra serve\u003c/code\u003e process running.\u003c/p\u003e
\u003cp\u003eThen, in a new terminal, run these commands:\u003c/p\u003e
\u003col\u003e
\u003cli\u003egit clone git@github.com:TrueBlocks/trueblocks-explorer.git\u003c/li\u003e
\u003cli\u003ecd trueblocks-explorer\u003c/li\u003e
\u003cli\u003ecp .env.example .env\u003c/li\u003e
\u003cli\u003eyarn\u003c/li\u003e
\u003cli\u003eyarn develop\u003c/li\u003e
\u003c/ol\u003e
\u003cp\u003eOpen your browser, and access the app from \u003ccode\u003elocalhost:1234\u003c/code\u003e.\u003c/p\u003e
`}).add({id:6,href:"/docs/prologue/do-i-need-a-node/",title:"Do I need a node?",description:"A node is not required, but that's the only way use Trueblocks as it is intended.",content:`\u003cp\u003eAnd if you are running your own node, TrueBlocks works best with Erigon.\u003c/p\u003e
\u003chr\u003e
\u003ch2 id="why-having-a-node-is-the-best-option"\u003eWhy having a node is the best option\u003c/h2\u003e
\u003cp\u003eSome benefits of TrueBlocks can be realized only when a user has their own node.
Having a node lets users:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eLimit queries to the node on their machine\u003c/li\u003e
\u003cli\u003eUse the node to build a local index\u003c/li\u003e
\u003cli\u003eQuery data directly from the top of the chain\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eSetting up a node is not as hard as many people think, but it does require two TBs of storage
and some good hardware.\u003c/p\u003e
\u003cp\u003eIf you want to build your own index, plan for a few days and run \u003ccode\u003echifra scrape\u003c/code\u003e.
Before doing so, you probably want to read the relevant section in the
\u003ca href="/docs/install/build-unchained-index"\u003e\u0026ldquo;How Can I Get the Index\u0026rdquo;\u003c/a\u003e article,
and \u003ca href="/chifra/admin#chifra-scrape"\u003ethe \u003ccode\u003escrape\u003c/code\u003e command documentation\u003c/a\u003e.\u003c/p\u003e
\u003cp\u003eFortunately, TrueBlocks also publishes the index on the IPFS,
which lets you access it locally without running a node.\u003c/p\u003e
\u003ch2 id="without-a-node-you-can-download-the-index-from-the-ipfs"\u003eWithout a node, you can download the index from the IPFS\u003c/h2\u003e
\u003cp\u003eDownloading the IPFS manifest is a good option for many users:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eThe initial time to get started is much faster\u003c/li\u003e
\u003cli\u003eThe index occupies only the space you need, (between 1 and 80GB)\u003c/li\u003e
\u003cli\u003eYou can verify its correctness with the TrueBlocks source code\u003c/li\u003e
\u003cli\u003eYou can own the index on your local machine (though you still need to query remote RPCs for transaction data).\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eThere are two commands to download the index, \u003ccode\u003echifra init\u003c/code\u003e and \u003ccode\u003echifra pins\u003c/code\u003e.
The pros and cons of each approach are outlined in the
\u003ca href="/docs/install/build-unchained-index"\u003e\u0026ldquo;How Can I Get the Index?\u0026rdquo;\u003c/a\u003e article.\u003c/p\u003e
\u003ch3 id="drawbacks-of-using-the-ipfs-manifest"\u003eDrawbacks of using the IPFS manifest\u003c/h3\u003e
\u003cp\u003eThe drawbacks of using the IPFS manifest are the opposite of the benefits
of building an index from your own node:\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eYou still must query transaction data from remote RPCs\u003c/li\u003e
\u003cli\u003eYou must trust the data TrueBlocks publishes (though you can verify the build)\u003c/li\u003e
\u003cli\u003eYou can only query up to the last time TrueBlocks published the manifest\u003c/li\u003e
\u003c/ul\u003e
`}).add({id:7,href:"/docs/prologue/multi-chain/",title:"Multi chain",description:"Instructions for accessing multiple chains from chifra",content:`\u003ch2 id="accessing-multiple-chains"\u003eAccessing multiple chains\u003c/h2\u003e
\u003cp\u003eAs of version 0.25.0-alpha, TrueBlocks supports accessing data from any EVM-based blockchain that supports the requisite RPC endpoints. This includes most blockchains we know of.\u003c/p\u003e
\u003cp\u003eIn order to use this new feature, you have to do almost nothing. All you have to do is add \u003ccode\u003e--chain \u0026lt;chainname\u0026gt;\u003c/code\u003e to any chifra command (except one or two as detailed below).\u003c/p\u003e
\u003cp\u003eFor example:\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eCommand\u003c/th\u003e
\u003cth\u003eNotes\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003echifra blocks 12\u003c/td\u003e
\u003ctd\u003eDefault chain is mainnet\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003echifra blocks 12 \u0026ndash;chain mainnet\u003c/td\u003e
\u003ctd\u003eSame as default\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003echifra blocks 12 \u0026ndash;chain gnosis\u003c/td\u003e
\u003ctd\u003eBlock 12 from gnosis chain\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch2 id="how-can-this-possibly-work"\u003eHow can this possibly work?\u003c/h2\u003e
\u003cp\u003eTo be perfectly honest, it can\u0026rsquo;t \u0026ndash; without you.\u003c/p\u003e
\u003cp\u003eYou must be running your own RPC endpoints. We built TrueBlocks in this way on purpose \u0026ndash; TrueBlocks is not a service. It\u0026rsquo;s a locally running tool. We did this because doing otherwise promotes a world of highly centralized solutions\u0026ndash;something we are trying very hard to avoid.\u003c/p\u003e
\u003cp\u003eOnce you do start to run your own node software, you will be very glad you did. While you can use publicly available endpoints such as Infura, you will find that you will almost certainly be rate-limited. This is not true if you run your own node.\u003c/p\u003e
\u003ch2 id="support-for-default-chains"\u003eSupport for default chains\u003c/h2\u003e
\u003cp\u003eNotwithstanding the above, we\u0026rsquo;ve provided default configurations for the following eight (8) EVM compatible chains:\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003emainnet, rinkeby, ropsten, goerli, kovan,
gnosis, optimism, polygon
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIn each case (except \u003ccode\u003emainnet\u003c/code\u003e) we point to public RPC endpoints. It is likely that you will be rate-limited if you use these options. Providing your own endpoints is much preferred.\u003c/p\u003e
\u003ch2 id="the-default-chain"\u003eThe Default Chain\u003c/h2\u003e
\u003cp\u003eA new configuration item has been added to the \u003ccode\u003etrueBlocks.toml\u003c/code\u003e file under the \u003ccode\u003e[settings]\u003c/code\u003e section. That item is called \u003ccode\u003edefaultChain\u003c/code\u003e. The initial value is \u003ccode\u003emainnet\u003c/code\u003e. After installing version 0.25.0-alpha any \u003ccode\u003echifra\u003c/code\u003e command that is run without the \u003ccode\u003e--chain\u003c/code\u003e option will default to \u003ccode\u003edefaultChain\u003c/code\u003e. You may modify this and subsequently remove the \u003ccode\u003e--chain\u003c/code\u003e option if you wish to default to a different chain.\u003c/p\u003e
\u003ch2 id="adding-your-own-chain"\u003eAdding your own chain\u003c/h2\u003e
\u003cp\u003eTo configure a chain or add a new one, you must edit an entry for the \u003ccode\u003echains\u003c/code\u003e array in the \u003ccode\u003etrueBlocks.toml\u003c/code\u003e file.\u003c/p\u003e
\u003cp\u003eOnce added, you may use your new chain entry by naming it to the \u003ccode\u003e--chain\u003c/code\u003e option:\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003echifra \u0026lt;cmd\u0026gt; \u0026lt;options\u0026gt; --chain \u0026lt;chain-name\u0026gt;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eBelow is one of the pre-configured sections for Ethereum Mainnet. Following that is a description of fields making up a chain configuration. Note that the section header of the chain must start with \u003ccode\u003echains.\u003c/code\u003e and becomes the name of the chain.\u003c/p\u003e
\u003cpre\u003e\u003ccode\u003e[chains.mainnet]
chainId = \u0026quot;1\u0026quot;
rpcProvider = \u0026quot;http://localhost:8545\u0026quot;
remoteExplorer = \u0026quot;https://etherscan.io\u0026quot;
apiProvider = \u0026quot;http://localhost:8080\u0026quot;
localExplorer = \u0026quot;http://localhost:1234\u0026quot;
pinGateway = \u0026quot;https://ipfs.unchainedindex.io/ipfs/\u0026quot;
symbol = \u0026quot;ETH\u0026quot;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eYour entry must contain the following fields (some of which are optional):\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eField Name\u003c/th\u003e
\u003cth\u003erequired\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003echainId\u003c/td\u003e
\u003ctd\u003eyes\u003c/td\u003e
\u003ctd\u003eThe chain id as returned by \u003ccode\u003eeth_chainId\u003c/code\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003erpcProvider\u003c/td\u003e
\u003ctd\u003eyes\u003c/td\u003e
\u003ctd\u003eThe RPC provider for the chain. Highly preferred this is local and dedicated.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003eremoteExplorer\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eA remote blockchain explorer for the chain (such as EtherScan). Used by \u003ccode\u003echifra explore\u003c/code\u003e\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003epinGateway\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eOnly needed if you are running \u003ccode\u003echifra scrape --pin\u003c/code\u003e. Note you will need your own Pinata endpoint.\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003cp\u003eThe following three fields are only needed if you\u0026rsquo;re also running the TrueBlocks Explorer:\u003c/p\u003e
\u003ctable\u003e
\u003cthead\u003e
\u003ctr\u003e
\u003cth\u003eField Name\u003c/th\u003e
\u003cth\u003erequired\u003c/th\u003e
\u003cth\u003eDescription\u003c/th\u003e
\u003c/tr\u003e
\u003c/thead\u003e
\u003ctbody\u003e
\u003ctr\u003e
\u003ctd\u003eapiProvider\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eThe URL given by \u003ccode\u003echifra serve\u003c/code\u003e and where the explorer will get its data.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003elocalExplorer\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eThe URL of the local explorer application. Where \u003ccode\u003echifra explore --local\u003c/code\u003e will open.\u003c/td\u003e
\u003c/tr\u003e
\u003ctr\u003e
\u003ctd\u003esymbol\u003c/td\u003e
\u003ctd\u003e\u003c/td\u003e
\u003ctd\u003eThe symbol of the native token on the chain in question. \u003ccode\u003eETH\u003c/code\u003e for mainnet, \u003ccode\u003exDAI\u003c/code\u003e for \u003ccode\u003egnosis\u003c/code\u003e for example.\u003c/td\u003e
\u003c/tr\u003e
\u003c/tbody\u003e
\u003c/table\u003e
\u003ch2 id="what-doesnt-work"\u003eWhat Doesn\u0026rsquo;t Work?\u003c/h2\u003e
\u003cp\u003eThere are two things that currently do not work with Multi-Chain:\u003c/p\u003e
\u003col\u003e
\u003cli\u003e
\u003cp\u003eThe command \u003ccode\u003echifra init\u003c/code\u003e only works with Ethereum Mainnet. While we will never provide an index for every chain (we must rely on our user base to do that and hopefully share it), we will, in the future be supporting some chains, notably the gnosis chain.\u003c/p\u003e
\u003c/li\u003e
\u003cli\u003e
\u003cp\u003ePricing using UniSwap only works on the mainnet. In the future, once more standardization appears relative to pricing on multiple chains, this choice will be revisited.\u003c/p\u003e
\u003c/li\u003e
\u003c/ol\u003e
`}).add({id:8,href:"/docs/install/install-troubleshooting/",title:"Troubleshooting",description:"Solutions to Common Problems",content:`\u003cp\u003eThis section lists solutions to problems some users have run into with the installation. If you continue to have trouble, \u003ca href="https://github.com/TrueBlocks/trueblocks-core/issues"\u003ecreate an issue\u003c/a\u003e, or ask us on discord.\u003c/p\u003e
\u003ch2 id="dependencies"\u003eDependencies\u003c/h2\u003e
\u003ch3 id="installing-go"\u003eInstalling go\u003c/h3\u003e
\u003ch4 id="how-do-i-check-my-go-version"\u003eHow do I check my Go version?\u003c/h4\u003e
\u003cp\u003eRun this command\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003ego version
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eTrueBlocks needs version 1.16.x or later. If you to install or update Go, \u003ca href="https://golang.org/doc/install"\u003esee here\u003c/a\u003e.\u003c/p\u003e
\u003ch3 id="installing-build-tools"\u003eInstalling build tools\u003c/h3\u003e
\u003ch4 id="how-do-i-install-the-build-packages-for-my-system"\u003eHow do I install the build packages for my system?\u003c/h4\u003e
\u003cp\u003e\u003cstrong\u003eLinux:\u003c/strong\u003e \u003ccode\u003esudo apt install build-essential git cmake ninja-build python3 python3-dev libcurl4-openssl-dev clang-format jq\u003c/code\u003e\u003c/p\u003e
\u003cp\u003e\u003cstrong\u003eMac:\u003c/strong\u003e \u003ccode\u003ebrew install cmake ninja git clang-format jq\u003c/code\u003e\u003c/p\u003e
\u003ch2 id="building-trueblocks"\u003eBuilding TrueBlocks\u003c/h2\u003e
\u003ch3 id="did-it-work"\u003eDid it work?\u003c/h3\u003e
\u003ch4 id="how-do-i-know-if-compilation-worked"\u003eHow do I know if compilation worked?\u003c/h4\u003e
\u003cp\u003eFrom the \u003ccode\u003e./trueblocks-core/build\u003c/code\u003e folder, test your installation with this command:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003e../bin/chifra version
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eYou should get a version string similar to this:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003etrueBlocks GHC-TrueBlocks//0.9.0-alpha-409aa9388-20210503
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIf nothing outputs, your installation or the build has failed. Try repeating the installation instructions. If it still fails, make an issue or join our discord.\u003c/p\u003e
\u003ch3 id="exporting-your-path"\u003eExporting your PATH\u003c/h3\u003e
\u003ch4 id="how-do-i-export-my-path"\u003eHow do I export my PATH?\u003c/h4\u003e
\u003cp\u003e\u003ccode\u003echifra\u003c/code\u003e only works if its underlying tools are found in your \u003ccode\u003e$PATH.\u003c/code\u003e
To find the full path, run this from the top of the \u003ccode\u003etrueblocks-core\u003c/code\u003e directory.\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003ecd bin \u0026amp;\u0026amp; pwd \u0026amp;\u0026amp; cd -
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eAdd the result of that command to your shell’s \u003ccode\u003e$PATH\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eHow you do that depends on your system.
In Bash, you\u0026rsquo;re probably going to put something like this in your \u003ccode\u003e.bashrc\u003c/code\u003e:\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003eexport PATH=\${PATH}:\u0026lt;/path/to/trueblocks-core/directory\u0026gt;/bin
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eIf you are confused, a Google search may be in order…\u003c/p\u003e
\u003ch3 id="number-of-cores"\u003eNumber of cores\u003c/h3\u003e
\u003ch4 id="how-many-cores-can-i-use-to-make-trueblocks"\u003eHow many cores can I use to make TrueBlocks?\u003c/h4\u003e
\u003cp\u003eWhen you run \u003ccode\u003emake\u003c/code\u003e, you can speed up the build by parallelizing with\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003emake -j \u0026lt;ncores\u0026gt;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003eWhere \u003ccode\u003e\u0026lt;ncores\u0026gt;\u003c/code\u003e represents the number of cores to devote to the job.
How many cores can you use? That depends on many factors. A handy tool is \u003ccode\u003enproc\u003c/code\u003e,
which identifies the machine\u0026rsquo;s number of available processing units.\u003c/p\u003e
\u003cp\u003eIf you have \u003ccode\u003enproc\u003c/code\u003e installed, you can safely parallelize the build with this command\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-shell"\u003emake -j \`nproc\`
\u003c/code\u003e\u003c/pre\u003e
\u003ch2 id="configuration"\u003eConfiguration\u003c/h2\u003e
\u003ch3 id="where"\u003eWhere?\u003c/h3\u003e
\u003ch4 id="where-are-the-configuration-files"\u003eWhere are the configuration files?\u003c/h4\u003e
\u003cp\u003eWhere your configuration folder is depends on your operating system
and environment.\u003c/p\u003e
\u003cul\u003e
\u003cli\u003eIf \u003ccode\u003eXDG_CONFIG_HOME\u003c/code\u003e is set, your configuration is there\u003c/li\u003e
\u003cli\u003eOtherwise, on Linux: \u003ccode\u003e~/.local/share/trueblocks\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eOtherwise, on Mac: \u003ccode\u003e~/Library/Application Support/TrueBlocks\u003c/code\u003e\u003c/li\u003e
\u003cli\u003eOtherwise, you\u0026rsquo;re out of luck\u0026ndash;we only support Linux and Mac\u003c/li\u003e
\u003c/ul\u003e
\u003cp\u003eThe primary or base configuration file (\u003ccode\u003etrueBlocks.toml\u003c/code\u003e) must exist at one
of the above locations for \u003ccode\u003echifra\u003c/code\u003e to work.\u003c/p\u003e
\u003cp\u003eWith the recent addition of support for multi-chain, there has arisen the need
for per-chain configuration as well (for example, values such as \u003ccode\u003erpcProvider\u003c/code\u003e or
\u003ccode\u003eremoteExplorer\u003c/code\u003e are unique per chain).\u003c/p\u003e
\u003cp\u003eThis issue is discussed here \u003ca href="#"\u003eTODO: PLACE_HOLDER\u003c/a\u003e.\u003c/p\u003e
\u003ch3 id="rpc-endpoint"\u003eRPC endpoint\u003c/h3\u003e
\u003ch4 id="how-do-i-specify-an-rpc-endpoint"\u003eHow do I specify an RPC endpoint?\u003c/h4\u003e
\u003cp\u003eBy default, TrueBlocks looks for the RPC at \u003ccode\u003ehttp://localhost:8545/\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eIf you are using a remote RPC such as Infura or your own local RPC at
a different port, you will need to modify that value.\u003c/p\u003e
\u003cp\u003eAs is true of all configuration values, you coudl use an environment
variable as described above, but you may also edit \u003ccode\u003etrueBlocks.toml\u003c/code\u003e.\u003c/p\u003e
\u003cp\u003eThe format of that file is documented \u003ca href="#"\u003eTODO: PLACE_HOLDER\u003c/a\u003e.\u003c/p\u003e
\u003ch3 id="api-keys"\u003eAPI keys\u003c/h3\u003e
\u003ch4 id="how-do-i-add-a-etherscan-key"\u003eHow do I add a EtherScan key?\u003c/h4\u003e
\u003cp\u003eSome small part of TrueBlocks requires an EtherScan API key. In particular
this is the \u003ca href="/chifra/chaindata/"\u003e\u003ccode\u003e--articulate\u003c/code\u003e option\u003c/a\u003e. We are working
hard to remove this centralized dependency, but in the mean time you
may get a warning of a missing key.\u003c/p\u003e
\u003cp\u003eHere’s an example of a remote RPC for Infura and an EtherScan API key.
\u003cem\u003e\u003cstrong\u003eWarning: see the note below\u003c/strong\u003e\u003c/em\u003e\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-TOML"\u003e[settings]
default_chain=mainnet
etherscan_key = \u0026quot;\u0026lt;key_value\u0026gt;\u0026quot;

[mainnet]
rpcProvider = \u0026quot;https://mainnet.infura.io/v3/\u0026lt;key_value\u0026gt;\u0026quot;
\u003c/code\u003e\u003c/pre\u003e
\u003cp\u003e\u003cem\u003e\u003cstrong\u003eNote:\u003c/strong\u003e\u003c/em\u003e Until mutli-chain is fully supported, put the \u003ccode\u003erpcProvider\u003c/code\u003e value
in the \u003ccode\u003e[settings]\u003c/code\u003e group.\u003c/p\u003e
\u003cp\u003e\u003cem\u003e\u003cstrong\u003eNote:\u003c/strong\u003e\u003c/em\u003e The EtherScan key is not \u003cem\u003eper-chain\u003c/em\u003e.\u003c/p\u003e
\u003ch3 id="do-i-need-the-index"\u003eDo I need the index?\u003c/h3\u003e
\u003ch4 id="why-do-i-need-the-index-of-appearances"\u003eWhy do I need the index of appearances?\u003c/h4\u003e
\u003cp\u003eIf you\u0026rsquo;re only querying basic block or transaction data, you don\u0026rsquo;t really
need the index of appearances.\u003c/p\u003e
\u003cp\u003eHowever, most of our users with to explore the entire history of their own
addresses. If you wish to do that, you will need the index.\u003c/p\u003e
\u003cp\u003eThere are multiple options for getting the index, which the
\u003ca href="/docs/install/build-unchained-index"\u003eHow Can I Get the Index?\u003c/a\u003e article covers
in more detail.\u003c/p\u003e
\u003cp\u003eNo matter which method you use, downloading or creating the index will take
somewhere between a few minutes and a day or two. So you might want to play
around with some \u003ca href="/chifra/chaindata"\u003echifra blockchain commands\u003c/a\u003e first.\u003c/p\u003e
\u003ch3 id="archive-nodes"\u003eArchive nodes\u003c/h3\u003e
\u003ch4 id="no-tracing"\u003eWhat if my node doesn\u0026rsquo;t have tracing or archiving?\u003c/h4\u003e
\u003cp\u003eIf the node you\u0026rsquo;re running does not support OpenEthereum style tracing or it
is not an archive node, you may get an error telling you such.\u003c/p\u003e
\u003cp\u003eSomething like\u003c/p\u003e
\u003cblockquote\u003e
\u003cp\u003e\u003ccode\u003e --accounting requires historical balances. The RPC server does not have them. Quitting...\u003c/code\u003e\u003c/p\u003e
\u003c/blockquote\u003e
\u003cp\u003eYou may disable this warning by editing a configuration file. Find the file
called \u003ccode\u003eblockScrape.toml\u003c/code\u003e in your configuration folder (in a multi-chain environment
this will be in the chain-specific config file, otherwise at the top level).\u003c/p\u003e
\u003cp\u003eAdd the following setting to the file (which you may create if it doesn\u0026rsquo;t exist):\u003c/p\u003e
\u003cpre\u003e\u003ccode class="language-toml"\u003e[requires]
tracing = false
archive = false
\u003c/code\u003e\u003c/pre\u003e
`}).add({id:9,href:"/docs/prologue/",title:"Prologue",description:"Prologue Doks.",content:""}),userinput.addEventListener("input",n,!0),suggestions.addEventListener("click",s,!0);function n(){var n,r=this.value,o=e.search(r,{limit:5,index:["content"],enrich:!0}),i=suggestions.childNodes,s=0,c=o.length;for(suggestions.classList.remove("d-none"),o.forEach(function(e){n=document.createElement("div"),n.innerHTML="<a href><span></span><span></span></a>",a=n.querySelector("a"),t=n.querySelector("span:first-child"),d=n.querySelector("span:nth-child(2)"),a.href=e.result[s].doc.href,t.textContent=e.result[s].doc.title,d.textContent=e.result[s].doc.description,suggestions.appendChild(n)});i.length>c;)suggestions.removeChild(i[s])}function s(){for(;suggestions.lastChild;)suggestions.removeChild(suggestions.lastChild);return!1}})()