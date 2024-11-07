"use strict";(self.webpackChunkestreamly_docs=self.webpackChunkestreamly_docs||[]).push([[54],{8054:(b,a,n)=>{n.r(a),n.d(a,{FlutterDocsModule:()=>c});var d=n(8996),i=n(4854),e=n(4650),l=n(3848);let p=(()=>{class t{constructor(){this.singlePlayer=i.pE,this.gridEmbed=i.ad,this.carouselEmbed=i.Zf}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-flutterdetaileddoc"]],decls:51,vars:33,consts:[["id","pdfContent",1,"flutter-doc-container"],["href","https://docs.flutter.dev/","target","_blank"],["mat-align-tabs","start","animationDuration","0ms"],["label","Single Player Embed"],["label","Grid Embed"],["label","Carousel Embed"]],template:function(r,w){1&r&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Getting Started"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Please refer to the "),e.TgZ(5,"a",1),e._uU(6,"Flutter documentation"),e.qZA(),e._uU(7," for initial project creation if you don't have one."),e.qZA(),e._UZ(8,"hr"),e.TgZ(9,"p"),e._uU(10,"Install webview_flutter, This provides the WebView implementation in Flutter."),e.qZA(),e.TgZ(11,"pre"),e._uU(12,"flutter pub add webview_flutter"),e.qZA(),e.TgZ(13,"h3"),e._uU(14,"Adding WebView widget to the Flutter App"),e.qZA(),e.TgZ(15,"p"),e._uU(16,"Import webview_flutter"),e.qZA(),e.TgZ(17,"pre"),e._uU(18,"import 'package:webview_flutter/webview_flutter.dart';"),e.qZA(),e.TgZ(19,"p"),e._uU(20," Within your class, please define the controller for WebView in "),e.TgZ(21,"strong"),e._uU(22,"initState"),e.qZA(),e._uU(23," function and set the configurations for WebView. "),e.qZA(),e.TgZ(24,"pre"),e._uU(25,"playerEmbedController = WebViewController()\n    ..setJavaScriptMode(JavaScriptMode.unrestricted)\n    ..loadRequest(Uri.parse('<<YOUR_URL_GOES_HERE>>'));"),e.qZA(),e.TgZ(26,"p"),e._uU(27," Within your class, please include the controller as child in "),e.TgZ(28,"strong"),e._uU(29,"build"),e.qZA(),e._uU(30," function to show in the view. "),e.qZA(),e.TgZ(31,"pre"),e._uU(32,"Center(\n    child: SizedBox(\n        height: 512,\n        width: 300,\n        child: WebViewWidget(controller: playerEmbedController),\n    ),\n)"),e.qZA(),e.TgZ(33,"p")(34,"em")(35,"strong"),e._uU(36,"Note:"),e.qZA(),e._uU(37," Please do not change the height and width as this is the right size for our player."),e.qZA()(),e._UZ(38,"hr"),e.TgZ(39,"h3"),e._uU(40,"Full Example:"),e.qZA(),e.TgZ(41,"mat-tab-group",2)(42,"mat-tab",3)(43,"pre"),e._uU(44),e.qZA()(),e.TgZ(45,"mat-tab",4)(46,"pre"),e._uU(47),e.qZA()(),e.TgZ(48,"mat-tab",5)(49,"pre"),e._uU(50),e.qZA()()()()),2&r&&(e.xp6(44),e.qoO(["import 'package:flutter/material.dart';\nimport 'package:webview_flutter/webview_flutter.dart';\n\nvoid main() ","{","\n    runApp(\n        MaterialApp(\n            theme: ThemeData(useMaterial3: true),\n            home: const WebViewApp(),\n        ),\n    );\n","}","\n\nclass WebViewApp extends StatefulWidget ","{","\n    const WebViewApp(","{","super.key});\n\n    @override\n    State<WebViewApp> createState() => _WebViewAppState();\n","}","\n\nclass _WebViewAppState extends State<WebViewApp> ","{","\n    late final WebViewController playerEmbedController;\n\n    @override\n    void initState() ","{","\n        super.initState();\n        playerEmbedController = WebViewController()\n            ..setJavaScriptMode(JavaScriptMode.unrestricted)\n            ..loadRequest(Uri.parse('https://www.estreamly.com/embedded-play?v=oez01nGpoXo&mobile=true'));\n            // NOTE: To get your URL, please login to our app and follow your instructions.\n    ","}","\n    \n    @override\n    Widget build(BuildContext context) ","{","\n        return Scaffold(\n            appBar: AppBar(title: const Text('Flutter WebView ListView'),),\n            body: ListView(\n                children: [\n                    Center(\n                        child: SizedBox(\n                            height: 512,\n                            width: 300,\n                            child: WebViewWidget(controller: playerEmbedController),\n                        ),\n                    ),\n                ],\n            ),\n        );\n    ","}","\n","}","\n"]),e.xp6(3),e.qoO(["import 'package:flutter/material.dart';\nimport 'package:webview_flutter/webview_flutter.dart';\n\nvoid main() ","{","\n    runApp(\n        MaterialApp(\n            theme: ThemeData(useMaterial3: true),\n            home: const WebViewApp(),\n        ),\n    );\n","}","\n\nclass WebViewApp extends StatefulWidget ","{","\n    const WebViewApp(","{","super.key});\n\n    @override\n    State<WebViewApp> createState() => _WebViewAppState();\n","}","\n\nclass _WebViewAppState extends State<WebViewApp> ","{","\n    late final WebViewController gridEmbedController;\n\n    @override\n    void initState() ","{","\n        super.initState();\n        gridEmbedController = WebViewController()\n            ..setJavaScriptMode(JavaScriptMode.unrestricted)\n            ..loadRequest(Uri.parse('https://www.estreamly.com/embed/estreamly?isSmartView=true&category=tutorial&font=Roboto&btnColor=%237358ff&btntextColor=%23ffffff&backColor=%23ffffff&textColor=%23101010&styleUpdate=true'));\n            // NOTE: To get your URL, please login to our app and follow your instructions.\n    ","}","\n\n    @override\n    Widget build(BuildContext context) ","{","\n        return Scaffold(\n            appBar: AppBar(title: const Text('Flutter WebView ListView'),),\n            body: ListView(\n                children: [\n                    Center(\n                        child: SizedBox(\n                            height: 512,\n                            width: 300,\n                            child: WebViewWidget(controller: gridEmbedController),\n                        ),\n                    ),\n                ],\n            ),\n        );\n    ","}","\n","}","\n"]),e.xp6(3),e.qoO(["import 'package:flutter/material.dart';\nimport 'package:webview_flutter/webview_flutter.dart';\n\nvoid main() ","{","\n    runApp(\n        MaterialApp(\n            theme: ThemeData(useMaterial3: true),\n            home: const WebViewApp(),\n        ),\n    );\n","}","\n\nclass WebViewApp extends StatefulWidget ","{","\n    const WebViewApp(","{","super.key});\n\n    @override\n    State<WebViewApp> createState() => _WebViewAppState();\n","}","\n\nclass _WebViewAppState extends State<WebViewApp> ","{","\n    late final WebViewController carouselEmbedController;\n\n    @override\n    void initState() ","{","\n        super.initState();\n        carouselEmbedController = WebViewController()\n            ..setJavaScriptMode(JavaScriptMode.unrestricted)\n            ..loadRequest(Uri.parse('https://www.estreamly.com/carousel-embed/estreamly?isSmartView=true&category=tutorial&font=Roboto&btnColor=%237358ff&btntextColor=%23ffffff&backColor=%23ffffff&textColor=%23101010&styleUpdate=true'));\n            // NOTE: To get your URL, please login to our app and follow your instructions.\n    ","}","\n\n    @override\n    Widget build(BuildContext context) ","{","\n        return Scaffold(\n            appBar: AppBar(title: const Text('Flutter WebView ListView'),),\n            body: ListView(\n                children: [\n                    Center(\n                        child: SizedBox(\n                            height: 512,\n                            width: 300,\n                            child: WebViewWidget(controller: carouselEmbedController),\n                        ),\n                    ),\n                ],\n            ),\n        );\n    ","}","\n","}","\n"]))},dependencies:[l.SP,l.uX]}),t})();var s=n(1075);const u=[{path:"",component:p}];let c=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(u),s.m]}),t})()}}]);