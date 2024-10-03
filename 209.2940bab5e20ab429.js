"use strict";(self.webpackChunkestreamly_docs=self.webpackChunkestreamly_docs||[]).push([[209],{4209:(d,r,i)=>{i.r(r),i.d(r,{IosDocsModule:()=>l});var a=i(6895),s=i(8996),e=i(4650);const u=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}convertToPDF(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-iosdetaileddoc"]],decls:77,vars:10,consts:[["id","pdfContent",1,"ios-doc-container"],["href","https://developer.apple.com/swift/"],["href","https://eStreamly.com"]],template:function(o,h){1&o&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Getting Started"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Please refer iOS swift "),e.TgZ(5,"a",1),e._uU(6,"docs"),e.qZA(),e._uU(7," for initial project creation if you don't have one"),e.qZA(),e._UZ(8,"hr"),e.TgZ(9,"h3"),e._uU(10,"Import and definition"),e.qZA(),e.TgZ(11,"p"),e._uU(12," Import WebKit "),e.qZA(),e.TgZ(13,"pre"),e._uU(14,"import WebKit"),e.qZA(),e.TgZ(15,"p"),e._uU(16," Inside your "),e.TgZ(17,"b"),e._uU(18,"ViewController"),e.qZA(),e._uU(19,", define a variable (webView is the name used in this below example) for "),e.TgZ(20,"b"),e._uU(21,"WKWebKit"),e.qZA()(),e.TgZ(22,"pre"),e._uU(23,"var webView: WKWebView!"),e.qZA(),e._UZ(24,"hr"),e.TgZ(25,"h3"),e._uU(26,"Create a function to configure WebView"),e.qZA(),e.TgZ(27,"p"),e._uU(28," Create a function above "),e.TgZ(29,"b"),e._uU(30,"viewDidLoad"),e.qZA(),e._uU(31," function (setupWebView is the name used in this example). This function is to create the instance of WebView and pass the necessary configurations. "),e._UZ(32,"br")(33,"br"),e._uU(34," In line #4 where frame is initialized, for "),e.TgZ(35,"b"),e._uU(36,"x and y"),e.qZA(),e._uU(37,", please use the position where you want your player to be displayed. In my example, I have centered the WKWebView within its parent view (the entire screen or a container view) by calculating its x and y positions. "),e._UZ(38,"br")(39,"br"),e.TgZ(40,"em")(41,"b"),e._uU(42,"Note:"),e.qZA(),e._uU(43," Please do not change the height and width as this is the right size for our player. "),e.qZA()(),e.TgZ(44,"pre"),e._uU(45),e.qZA(),e._UZ(46,"hr"),e.TgZ(47,"h3"),e._uU(48,"Call setupWebView in viewDidLoad"),e.qZA(),e.TgZ(49,"p"),e._uU(50," Now call this function "),e.TgZ(51,"b"),e._uU(52,'"setupWebView"'),e.qZA(),e._uU(53," inside "),e.TgZ(54,"b"),e._uU(55,"viewDidLoad"),e.qZA(),e._uU(56," next to "),e.TgZ(57,"b"),e._uU(58,"super.viewDidLoad()"),e.qZA(),e._uU(59," statement. Then paste the below lines to load the player URL into the WebView. "),e.qZA(),e.TgZ(60,"pre"),e._uU(61),e.qZA(),e._UZ(62,"hr"),e.TgZ(63,"h3"),e._uU(64,"Full example:"),e.qZA(),e.TgZ(65,"pre"),e._uU(66),e.qZA(),e.TgZ(67,"b"),e._uU(68,"Note: "),e.qZA(),e.TgZ(69,"ol")(70,"li"),e._uU(71,"You can use the same Snippet for Carousal Embed, Player Embed and miniplayer embed. Just change the URL "),e.qZA(),e.TgZ(72,"li"),e._uU(73,"To get your URL, please login to "),e.TgZ(74,"a",2),e._uU(75,"our app"),e.qZA(),e._uU(76," and follow your instructions. "),e.qZA()()()),2&o&&(e.xp6(45),e.AsE("func setupWebView () ","{","\n    // Customize the width and height of the WebView\n    let customWidth: CGFloat = 318\n    let customHeight: CGFloat = 512\n    let xOffset: CGFloat = (view.frame.width - customWidth) / 2\n    let yOffset: CGFloat = (view.frame.height - customHeight) / 2\n\n    // Create the WebView with custom frame\n    webView = WKWebView(frame: CGRect(x: xOffset, y: yOffset, width: customWidth, height: customHeight))\n    view.addSubview(webView)\n","}","\n    "),e.xp6(16),e.AsE('setupWebView()\n\n// Create a URL to load\nlet urlString = "<<YOUR_URL_GOES_HERE>>"\nguard let url = URL(string: urlString) else ',"{"," return ","}","\n\n// Load the URL in the WebView\nlet request = URLRequest(url: url)\nwebView.load(request)\n        "),e.xp6(5),e.gL8("import UIKit\nimport WebKit\n\nclass WebViewController: UIViewController ","{","\n\n    var webView: WKWebView!\n\n    override func viewDidLoad() ","{",'\n        super.viewDidLoad()\n\n        // Create a URL to load\n        let urlString = "https://www.estreamly.com/embedded-play?v=GLEes5Zyqu0&mobile=true"\n        guard let url = URL(string: urlString) else ',"{"," return ","}","\n        \n        // Customize the width and height of the WebView\n        let customWidth: CGFloat = 300\n        let customHeight: CGFloat = 500\n        let xOffset: CGFloat = (view.frame.width - customWidth) / 2\n        let yOffset: CGFloat = (view.frame.height - customHeight) / 2\n        \n        // Create the WebView with custom frame\n        webView = WKWebView(frame: CGRect(x: xOffset, y: yOffset, width: customWidth, height: customHeight))\n        \n        // Add this webView to the view where needed as per your view structure.\n        view.addSubview(webView)\n        \n        // Load the URL in the WebView\n        let request = URLRequest(url: url)\n        webView.load(request)\n    ","}","\n","}","\n        "))},styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;background-color:#ebebeb8f}pre[_ngcontent-%COMP%]{width:calc(100% - 40px);background-color:#000;border-radius:5px;padding:20px;color:#fff;overflow-y:hidden;overflow-x:auto}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #fff}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#000}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,s.Bz.forChild(u)]}),t})()}}]);