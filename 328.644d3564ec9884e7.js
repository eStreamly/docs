"use strict";(self.webpackChunkestreamly_docs=self.webpackChunkestreamly_docs||[]).push([[328],{9328:(_,s,i)=>{i.r(s),i.d(s,{MagentoDocsModule:()=>g});var c=i(8996),u=i(1075),e=i(4650);const l=[{path:"",component:(()=>{class r{constructor(n,t){this.router=n,this.route=t}ngOnInit(){}ngAfterViewInit(){this.route.fragment.subscribe(n=>{n&&this.scrollToSection(n)})}scrollToSection(n){const t=document.querySelector(".app-content-section"),o=document.getElementById(n);t&&o&&(t.scrollTo({top:o.offsetTop-t.offsetTop,behavior:"smooth"}),this.router.navigate([],{fragment:n}))}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(c.F0),e.Y36(c.gz))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-magentodoc"]],decls:461,vars:0,consts:[[1,"magento-docs-container"],[1,"text-red"],["id","introduction"],[1,"sharable-link"],[1,"chain-link",3,"click"],["id","general_configuration",1,"guide-section"],["src","assets/images/generalconfiguration.png"],["href","https://api.estreamly.com/api/magento/webhook","target","_blank"],["href","https://api.estreamly.com/api/magento/store-details","target","_blank"],["href","https://api.estreamly.com/api/magento","target","_blank"],["id","payment_methods",1,"guide-section"],["src","assets/images/paymentmethods.png"],["id","product_level_settings",1,"guide-section"],["src","assets/images/productlevelsettings.png"],["id","product_sync_scheduled",1,"guide-section"],["id","product_sync_to_estreamly_server",1,"guide-section"],["href","https://devdocs.magento.com/guides/v2.3/config-guide/mq/manage-message-queues.html","target","_blank"],["id","configure_payment",1,"guide-section"],["id","installation_of_extension",1,"guide-section"],["href","https://marketplace.magento.com/cybersource-global-payment-management.html","target","_blank"],["href","https://marketplace.magento.com/media/catalog/product/cybersource-global-payment-management-3-5-5-ce/user_guides.pdf?1685688272","target","_blank"],["id","configurble_cybersource_credit_card",1,"guide-section"],["id","general_settings",1,"guide-section"],["src","assets/images/paymentmethodscybersource.png"],["id","webservice_configuration",1,"guide-section"],["id","configure_credit_card_payment",1,"guide-section"],["src","assets/images/cybersourcecreditcardpayment.png"],["id","credit_card_settings",1,"guide-section"],["src","assets/images/cybersourcecreditcardsettings.png"],["id","checkout_apt_profile",1,"guide-section"],["src","assets/images/checkoutapi.png"],["id","configure_paypal",1,"guide-section"],[1,"guide-section"],["href","https://experienceleague.adobe.com/docs/commerce-admin/stores-sales/payments/paypal/paypal-express-checkout.html?lang=en","target","_blank"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"strong"),e._uU(3,"Note: Our extension works only with two payment methods, make sure one of the payment methods is configured in-store."),e.qZA()(),e.TgZ(4,"section",2)(5,"h1",3),e._uU(6,"Configure the extension setting "),e.TgZ(7,"span",4),e.NdJ("click",function(){return t.scrollToSection("introduction")}),e._uU(8,"\u260d"),e.qZA()(),e.TgZ(9,"p"),e._uU(10,"Admin login > stores > Estreamly > Shoppable Videos"),e.qZA()(),e.TgZ(11,"section",5)(12,"h2",3),e._uU(13,"General Configuration "),e.TgZ(14,"span",4),e.NdJ("click",function(){return t.scrollToSection("general_configuration")}),e._uU(15,"\u260d"),e.qZA()(),e._UZ(16,"img",6),e.TgZ(17,"ul")(18,"li")(19,"strong"),e._uU(20,"Module Enable:"),e.qZA(),e._uU(21," Select Yes/No to enable the module."),e.qZA(),e.TgZ(22,"li")(23,"strong"),e._uU(24,"Product Webhook URL:"),e.qZA(),e._uU(25,"Product webhook URL for sending product data when the product is saved "),e.TgZ(26,"a",7),e._uU(27,"https://api.estreamly.com/api/magento/webhook"),e.qZA()(),e.TgZ(28,"li")(29,"strong"),e._uU(30,"Store Webhook URL:"),e.qZA(),e._uU(31," Send the store detail on this webhook. "),e.TgZ(32,"a",8),e._uU(33,"https://api.estreamly.com/api/magento/store-details"),e.qZA()(),e.TgZ(34,"li")(35,"strong"),e._uU(36,"All Product Webhook URL:"),e.qZA(),e._uU(37," send all product data to this webhook URL "),e.TgZ(38,"a",9),e._uU(39,"https://api.estreamly.com/api/magento"),e.qZA()(),e.TgZ(40,"li")(41,"strong"),e._uU(42," eStreamly Token:"),e.qZA(),e._uU(43,' Token for API authentication. To get the token click on the "get Estreamly token" button. After clicking on the button onboarding popup will open, Fill in the step, and after successfully onboarding get the token, copy this token, and add it to eStreamly Token field.'),e.qZA()()(),e.TgZ(44,"section",10)(45,"h2",3),e._uU(46,"Payment Methods "),e.TgZ(47,"span",4),e.NdJ("click",function(){return t.scrollToSection("payment_methods")}),e._uU(48,"\u260d"),e.qZA()(),e.TgZ(49,"p"),e._uU(50,"Admin login > stores > Estreamly > Shoppable Videos > Payment Methods > Do not show these payment on ecommerce store checkout pages"),e.qZA(),e._UZ(51,"img",11),e.TgZ(52,"ul")(53,"li"),e._uU(54,"eStreamly extension checkout works with Cybersource. If you have other payment methods on your store checkout process and would not like to show Cybersource payment methods, please select the below. Select all if you want none of these to show on your store checkout flow."),e.qZA()()(),e.TgZ(55,"section",12)(56,"h2",3),e._uU(57,"Product level settings "),e.TgZ(58,"span",4),e.NdJ("click",function(){return t.scrollToSection("product_level_settings")}),e._uU(59,"\u260d"),e.qZA()(),e.TgZ(60,"div"),e._uU(61,'Set the product attribute "eStreamly sync" Yes.'),e.qZA(),e._UZ(62,"img",13),e.qZA(),e.TgZ(63,"section",14)(64,"h2",3),e._uU(65,"Product Sync Scheduled "),e.TgZ(66,"span",4),e.NdJ("click",function(){return t.scrollToSection("product_sync_scheduled")}),e._uU(67,"\u260d"),e.qZA()(),e.TgZ(68,"div")(69,"strong"),e._uU(70,"Cron Job Time:"),e.qZA(),e._uU(71,' Enter the cron job timing in the format "* * * * *"'),e.qZA(),e.TgZ(72,"div")(73,"strong"),e._uU(74,"Note:"),e.qZA(),e._uU(75," The default cron runs every 1 hour. And send the 15 products to the eStreamly server."),e.qZA(),e.TgZ(76,"p"),e._uU(77,"Manually run the cron by n98, and run the below command."),e.qZA(),e.TgZ(78,"code"),e._uU(79,"php -f n98-magerun2.phar sys:cron:run estreamly_all_product_update_cron"),e.qZA(),e.TgZ(80,"p"),e._uU(81,"Save the configuration and send the store detail on the eStreamly server."),e.qZA()(),e.TgZ(82,"section",15)(83,"h2",3),e._uU(84,"Product sync to eStreamly Server "),e.TgZ(85,"span",4),e.NdJ("click",function(){return t.scrollToSection("product_sync_to_estreamly_server")}),e._uU(86,"\u260d"),e.qZA()(),e.TgZ(87,"p"),e._uU(88,"The extension syncs Magento products to the eStreamly server."),e.qZA(),e.TgZ(89,"p")(90,"strong"),e._uU(91,"Note: Only simple and configurable products are synchronized to eStreamly. Also, Configurable child products can not be synchronized."),e.qZA()(),e.TgZ(92,"p"),e._uU(93,'We only sync products to the eStreamly server that has "eStreamly Sync" attribute is Yes.'),e.qZA(),e.TgZ(94,"div"),e._uU(95,"By run extension, cron sends the products to eStreamly."),e.qZA(),e.TgZ(96,"code"),e._uU(97,"php -f n98-magerun2.phar sys:cron:run estreamly_all_product_update_cron"),e.qZA(),e.TgZ(98,"p"),e._uU(99,"Create new, update, or delete the product from admin and send the product data to eStreamly server."),e.qZA(),e.TgZ(100,"strong"),e._uU(101,"Product bulk update:"),e.qZA(),e.TgZ(102,"div"),e._uU(103,"After the product bulk update from the admin, the product data pull to eStreamly by the consumer queue."),e.qZA(),e.TgZ(104,"p")(105,"strong"),e._uU(106,"Note:"),e.qZA(),e._uU(107," Make sure the consumer queue is running on the server. For reference "),e.TgZ(108,"a",16),e._uU(109,"Check here"),e.qZA()(),e._uU(110," For manually running the consumer queue run the command "),e._UZ(111,"br"),e.TgZ(112,"code"),e._uU(113,'"bin/magento queue:consumers:start product_action_attribute.update"'),e.qZA(),e._UZ(114,"br"),e.TgZ(115,"code"),e._uU(116,'"bin/magento queue:consumers:start estreamly.update.product"'),e.qZA()(),e.TgZ(117,"section",17)(118,"h1",3),e._uU(119,"Configure Payment "),e.TgZ(120,"span",4),e.NdJ("click",function(){return t.scrollToSection("configure_payment")}),e._uU(121,"\u260d"),e.qZA()(),e.TgZ(122,"ul")(123,"li"),e._uU(124,"Cybersource credit card"),e.qZA(),e.TgZ(125,"li"),e._uU(126,"PayPal Standard"),e.qZA()()(),e.TgZ(127,"h2"),e._uU(128,"Configure Cybersource Extension"),e.qZA(),e.TgZ(129,"section",18)(130,"h2",3),e._uU(131," Installation of extension "),e.TgZ(132,"span",4),e.NdJ("click",function(){return t.scrollToSection("installation_of_extension")}),e._uU(133,"\u260d"),e.qZA()(),e.TgZ(134,"div"),e._uU(135,"Note: Before installing the extension purchase the extension from the "),e.TgZ(136,"a",19),e._uU(137,"marketplace"),e.qZA(),e._uU(138," run composer command."),e.qZA(),e.TgZ(139,"div"),e._uU(140,"Composer require Cybersource/global-payment-management:^3.5 For the setup of Cybersource all payment methods flow the link "),e.TgZ(141,"a",20),e._uU(142,"here"),e.qZA(),e._uU(143,"."),e.qZA()(),e.TgZ(144,"section",21)(145,"h2",3),e._uU(146,"Configure Cybersource credit card "),e.TgZ(147,"span",4),e.NdJ("click",function(){return t.scrollToSection("configurble_cybersource_credit_card")}),e._uU(148,"\u260d"),e.qZA()(),e.TgZ(149,"p"),e._uU(150,"Stores > Configuration > Sales > Payment Methods."),e.qZA(),e.TgZ(151,"p"),e._uU(152,"On the Payment Methods screen, you will see the settings for the Cybersource module. In the Cybersource module settings, there are additional sub panels for configuring the module and other payment methods."),e.qZA()(),e.TgZ(153,"section",22)(154,"h2",3),e._uU(155,"General Settings "),e.TgZ(156,"span",4),e.NdJ("click",function(){return t.scrollToSection("general_settings")}),e._uU(157,"\u260d"),e.qZA()(),e.TgZ(158,"p"),e._uU(159,"Stores > Configuration > Sales > Payment Methods > Cybersource"),e.qZA(),e.TgZ(160,"p"),e._uU(161,'The settings under "General" section are applicable to all the payment methods'),e.qZA(),e._UZ(162,"img",23),e.TgZ(163,"table")(164,"thead")(165,"tr")(166,"th"),e._uU(167,"Section"),e.qZA(),e.TgZ(168,"th"),e._uU(169,"Description"),e.qZA()()(),e.TgZ(170,"tbody")(171,"tr")(172,"td"),e._uU(173,"Debug Mode"),e.qZA(),e.TgZ(174,"td"),e._uU(175,"Debug mode provides an option to troubleshoot using the Cybersource logs (cybs.log). If Yes, diagnostic information is stored in log files on the Adobe Commerce web server. If No, no information is logged"),e.qZA()(),e.TgZ(176,"tr")(177,"td"),e._uU(178,"Sort Order"),e.qZA(),e.TgZ(179,"td"),e._uU(180,"Change the default module sort order here"),e.qZA()(),e.TgZ(181,"tr")(182,"td"),e._uU(183,"Show exact rejection or error message to users"),e.qZA(),e.TgZ(184,"td"),e._uU(185,"If set to No the general error message will be displayed as per Adobe Commerce in all rejection and error cases. If set to Yes, the general error message will be displayed as per the responses from Cybersource in all rejection and error cases."),e.qZA()(),e.TgZ(186,"tr")(187,"td"),e._uU(188,"Override payment error route path "),e.qZA(),e.TgZ(189,"td"),e._uU(190,'Specify the error page route path or the "checkout/cart" route will be used by default.'),e.qZA()()()()(),e.TgZ(191,"section",24)(192,"h2",3),e._uU(193,"WebService Configuration "),e.TgZ(194,"span",4),e.NdJ("click",function(){return t.scrollToSection("webservice_configuration")}),e._uU(195,"\u260d"),e.qZA()(),e.TgZ(196,"div"),e._uU(197,"WebService Configuration includes the Default Merchant ID (applicable to all the payment methods), the REST shared key and SOAP key detail."),e.qZA(),e.TgZ(198,"table")(199,"thead")(200,"tr")(201,"th"),e._uU(202,"Section"),e.qZA(),e.TgZ(203,"th"),e._uU(204,"Description"),e.qZA()()(),e.TgZ(205,"tbody")(206,"tr")(207,"td"),e._uU(208,"Merchant ID"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"Your Cybersource Merchant ID"),e.qZA()(),e.TgZ(211,"tr")(212,"td"),e._uU(213,"Test Mode"),e.qZA(),e.TgZ(214,"td"),e._uU(215,'Select "Yes" if Test Business Center is used, and "No" for production use.'),e.qZA()(),e.TgZ(216,"tr")(217,"td"),e._uU(218,"Developer ID"),e.qZA(),e.TgZ(219,"td"),e._uU(220,"This is an optional field that must be no longer than 8 characters. Developer ID's are assigned by Cybersource by request. Please contact your Cybersource Alliance Manager to have a Developer ID assigned to you."),e.qZA()(),e.TgZ(221,"tr")(222,"td"),e._uU(223,"SOAP Key Detail"),e.qZA(),e.TgZ(224,"td"),e._uU(225,"A unique key (can be generated from the Cybersource EBC portal) to trigger response from SOAP toolkit API"),e.qZA()(),e.TgZ(226,"tr")(227,"td"),e._uU(228,"REST API key Detail"),e.qZA(),e.TgZ(229,"td"),e._uU(230,"REST API key creation to use some services, such as Flex Microform or Fraud Management report."),e.qZA()(),e.TgZ(231,"tr")(232,"td"),e._uU(233,"REST API Shared Secret Key"),e.qZA(),e.TgZ(234,"td"),e._uU(235,"REST API key creation to use some services, such as Flex Microform or Fraud Management report."),e.qZA()()()(),e.TgZ(236,"p")(237,"strong"),e._uU(238,"NOTE:"),e.qZA(),e._uU(239,' Correct configuration of SOAP Web Service is required for the proper functioning of other services like Tax Calculation, Secure Acceptance, Visa Checkout, PayPal, Account Takeover Protection and Apple Pay. If you experience issues with these modules, please ensure that the SOAP Web Service options are configured correctly. It should be ensured that, "SOAP API Key Detail" have correct value and "Test Mode" option matches your Cybersource Merchant account environment.'),e.qZA(),e.TgZ(240,"p")(241,"strong"),e._uU(242,"NOTE:"),e.qZA(),e._uU(243,' REST Web Service section proper configuration is required for other services including Flex Microform, Decision Manager and Account updater. If you experience issues with these modules, please make sure the REST Web Service options are configured properly: "API Key Detail" and "API Shared Secret Key" have correct value and "Test Mode" option matches your Cybersource Merchant account environment.'),e.qZA()(),e.TgZ(244,"section",25)(245,"h2",3),e._uU(246,"Configure Credit Card Payment "),e.TgZ(247,"span",4),e.NdJ("click",function(){return t.scrollToSection("configure_credit_card_payment")}),e._uU(248,"\u260d"),e.qZA()(),e.TgZ(249,"p"),e._uU(250,"Stores > Configuration > Sales > Payment Methods > Cybersource > Credit card"),e.qZA(),e.TgZ(251,"p"),e._uU(252,"This section contains options to configure Credit Card payments."),e.qZA(),e._UZ(253,"img",26),e.TgZ(254,"table")(255,"thead")(256,"tr")(257,"th"),e._uU(258,"Section"),e.qZA(),e.TgZ(259,"th"),e._uU(260,"Description"),e.qZA()()(),e.TgZ(261,"tbody")(262,"tr")(263,"td"),e._uU(264,"Enabled "),e.qZA(),e.TgZ(265,"td"),e._uU(266,'Select "Yes" to activate and "No" to deactivate Secure Acceptance payment method'),e.qZA()(),e.TgZ(267,"tr")(268,"td"),e._uU(269,"Title "),e.qZA(),e.TgZ(270,"td"),e._uU(271,"This text is displayed to customers as the name of Secure Acceptance payment method for credit cards. This is used for Web Mobile, Flex Microform and Silent Order Post configurations."),e.qZA()(),e.TgZ(272,"tr")(273,"td"),e._uU(274,"Payment API"),e.qZA(),e.TgZ(275,"td"),e._uU(276,"Secure Acceptance API - an authorization is performed now of posting card data to Cybersource SOAP Toolkit API - the card information is tokenized via Cybersource, authorization is requested separately via SOAP Service."),e.qZA()(),e.TgZ(277,"tr")(278,"td"),e._uU(279,"Checkout Flow Type"),e.qZA(),e.TgZ(280,"td")(281,"div"),e._uU(282,'Hosted Checkout lets you securely accept payments made on the web or on mobile browsers, worldwide, without handling payment data (process involves a redirect to Cybersource). Checkout API integration method securely passes or "posts" payment data from the customer directly to the Cybersource system (the process does not involve a redirect to Cybersource)'),e.qZA(),e.TgZ(283,"div"),e._uU(284,"Flex Microform includes all benefits from the Hosted Checkout and Checkout API - potential SAQ A qualification and the customer never leaves your checkout page."),e.qZA(),e.TgZ(285,"div"),e._uU(286,"We recommend selecting our REST-based Microform Integration (formerly called Flex Microform) to access new enhancements, easier configuration/customization, and updated technology. To learn more about Microform Integration, please visit: Seamless payments, ironclad security: Get the best of both | Cybersource "),e.qZA(),e.TgZ(287,"p")(288,"strong"),e._uU(289,"NOTE:"),e.qZA(),e._uU(290," we use Checkout API (formerly Silent Order Post/SOP)"),e.qZA()()(),e.TgZ(291,"tr")(292,"td"),e._uU(293,"CSRF Token Expiration Time (Seconds)"),e.qZA(),e.TgZ(294,"td"),e._uU(295,"A lifetime of SOP security token used to prevent card testing attacks. Leave blank for a default of 600 seconds."),e.qZA()()()()(),e.TgZ(296,"section",27)(297,"h2",3),e._uU(298,"Credit Card Settings "),e.TgZ(299,"span",4),e.NdJ("click",function(){return t.scrollToSection("credit_card_settings")}),e._uU(300,"\u260d"),e.qZA()(),e._UZ(301,"img",28),e.TgZ(302,"table")(303,"thead")(304,"tr")(305,"th"),e._uU(306,"Section "),e.qZA(),e.TgZ(307,"th"),e._uU(308,"Description"),e.qZA()()(),e.TgZ(309,"tbody")(310,"tr")(311,"td"),e._uU(312,"Payment Action"),e.qZA(),e.TgZ(313,"td"),e._uU(314,"Set to Authorize Only to reserve funds during checkout and capture during invoice creation. Set to Authorize and Capture to authorize and capture during customer checkout."),e.qZA()(),e.TgZ(315,"tr")(316,"td"),e._uU(317,"Auth indicator"),e.qZA(),e.TgZ(318,"td"),e._uU(319,"This option specifies the purpose of the authorization."),e.qZA()(),e.TgZ(320,"tr")(321,"td"),e._uU(322,"New Order Status"),e.qZA(),e.TgZ(323,"td"),e._uU(324,"Select the order status assigned to the order when successfully paid with Cybersource"),e.qZA()(),e.TgZ(325,"tr")(326,"td"),e._uU(327,"Ignore AVS"),e.qZA(),e.TgZ(328,"td"),e._uU(329,"If set yes, the results of AVS verification are ignored."),e.qZA()(),e.TgZ(330,"tr")(331,"td"),e._uU(332,"Ignore CVN"),e.qZA(),e.TgZ(333,"td"),e._uU(334,"If set yes, the results of CVN verification are ignored. See Cybersource Secure Acceptance"),e.qZA()(),e.TgZ(335,"tr")(336,"td"),e._uU(337,"Skip Fraud Management for Tokenization"),e.qZA(),e.TgZ(338,"td"),e._uU(339,"If set to No, the 'Skip Decision Manager' field is set to 'false' for Secure Acceptance tokenization requests and set to 'true' otherwise."),e.qZA()(),e.TgZ(340,"tr")(341,"td"),e._uU(342,"Skip Pre Authorization check for Tokenization"),e.qZA(),e.TgZ(343,"td"),e._uU(344,"If set to No, the 'skip preauthorization' field is set to 'false' for Secure Acceptance tokenization requests and set to 'true' otherwise."),e.qZA()(),e.TgZ(345,"tr")(346,"td"),e._uU(347,"Pass expiration date for tokenized card via SOAP"),e.qZA(),e.TgZ(348,"td"),e._uU(349,"Card Expiration Date with SOAP Toolkit Authorization Calls for card tokenization"),e.qZA()(),e.TgZ(350,"tr")(351,"td"),e._uU(352,"Credit Card Types"),e.qZA(),e.TgZ(353,"td"),e._uU(354,"Select which card types you would like to accept. This only applies to Silent Order Post configuration. It is not used for Web/Mobile."),e.qZA()(),e.TgZ(355,"tr")(356,"td"),e._uU(357,"Payment from Applicable Countries"),e.qZA(),e.TgZ(358,"td"),e._uU(359,"If set to 'All Allowed', Adobe Commerce global settings for allowed countries is used to determine if the customers billing Country is applicable for use of this payment method. If set to 'Specific Countries' the next setting is used to configure allowed countries for this module"),e.qZA()(),e.TgZ(360,"tr")(361,"td"),e._uU(362,"Payment from Specific Countries"),e.qZA(),e.TgZ(363,"td"),e._uU(364,"This is a multi-select box allowing the store owner to specify countries that will be allowed to use this payment method"),e.qZA()(),e.TgZ(365,"tr")(366,"td"),e._uU(367,"Override secure acceptance locale"),e.qZA(),e.TgZ(368,"td"),e._uU(369,"Leave the system default to use store locale"),e.qZA()()()()(),e.TgZ(370,"section",29)(371,"h2",3),e._uU(372,"Checkout API Profile "),e.TgZ(373,"span",4),e.NdJ("click",function(){return t.scrollToSection("checkout_apt_profile")}),e._uU(374,"\u260d"),e.qZA()(),e.TgZ(375,"div"),e._uU(376,'This section provides options to configure Checkout API profile. Checkout API profile will be used for Credit Card payments when "checkout flow" is selected as "Checkout API (formerly Silent Order Post/SOP)" under the Credit Card Settings.'),e.qZA(),e._UZ(377,"img",30),e.qZA(),e.TgZ(378,"table")(379,"thead")(380,"tr")(381,"th"),e._uU(382,"Section"),e.qZA(),e.TgZ(383,"th"),e._uU(384,"Description"),e.qZA()()(),e.TgZ(385,"tbody")(386,"tr")(387,"td"),e._uU(388,"Profile ID"),e.qZA(),e.TgZ(389,"td"),e._uU(390,"Get from the CyberSource"),e.qZA()(),e.TgZ(391,"tr")(392,"td"),e._uU(393,"Access Key"),e.qZA(),e.TgZ(394,"td"),e._uU(395,"Get from the CyberSource"),e.qZA()(),e.TgZ(396,"tr")(397,"td"),e._uU(398,"Secret Key"),e.qZA(),e.TgZ(399,"td"),e._uU(400,"Get from the CyberSource "),e.qZA()()()(),e.TgZ(401,"section",31)(402,"h2",3),e._uU(403,"Configure PayPal "),e.TgZ(404,"span",4),e.NdJ("click",function(){return t.scrollToSection("configure_paypal")}),e._uU(405,"\u260d"),e.qZA()(),e.TgZ(406,"ol")(407,"li"),e._uU(408,"Log in to your Magento admin panel."),e.qZA(),e.TgZ(409,"li"),e._uU(410," Click Stores."),e.qZA(),e.TgZ(411,"li"),e._uU(412," Click Configuration."),e.qZA(),e.TgZ(413,"li"),e._uU(414," Click Sales."),e.qZA(),e.TgZ(415,"li"),e._uU(416," Click Payment Methods."),e.qZA(),e.TgZ(417,"li"),e._uU(418,"Click Configure for PayPal Checkout."),e.qZA(),e.TgZ(419,"li"),e._uU(420," Configure the following settings to complete your PayPal Checkout integration: "),e.TgZ(421,"ul")(422,"li"),e._uU(423,"Email Associated with PayPal Merchant Account - Enter your PayPal email address."),e.qZA(),e.TgZ(424,"li"),e._uU(425,"Authentication Method - Select API Signature."),e.qZA(),e.TgZ(426,"li"),e._uU(427,"API Username - Paste in your API username."),e.qZA(),e.TgZ(428,"li"),e._uU(429,"API Password - Paste in your API password."),e.qZA(),e.TgZ(430,"li"),e._uU(431,"API Signature - Paste in your API Signature."),e.qZA(),e.TgZ(432,"li"),e._uU(433,"Sandbox Mode - Select No unless you're using PayPal Sandbox credentials."),e.qZA(),e.TgZ(434,"li"),e._uU(435,"Enable this Solution - Select Yes."),e.qZA(),e.TgZ(436,"li"),e._uU(437,"Enable PayPal Credit - Select Yes."),e.qZA(),e.TgZ(438,"li"),e._uU(439,"Title - Enter your title as you would like it to appear."),e.qZA(),e.TgZ(440,"li"),e._uU(441,"Payment Action - Select either Sale or Authorize."),e.qZA(),e.TgZ(442,"li"),e._uU(443,"Display on Product Details Page - Select Yes (recommended)."),e.qZA(),e.TgZ(444,"li"),e._uU(445,"Display on Shopping Cart - Select Yes."),e.qZA(),e.TgZ(446,"li"),e._uU(447,"Payment Applicable From - Select All Allowed Countries unless you intend to restrict locations."),e.qZA(),e.TgZ(448,"li"),e._uU(449,"Transfer Cart Line Items - Select Yes."),e.qZA(),e.TgZ(450,"li"),e._uU(451,"Enable PayPal Guest Checkout - Select Yes (recommended)."),e.qZA(),e.TgZ(452,"li"),e._uU(453,"Review additional options not covered."),e.qZA()()(),e.TgZ(454,"li"),e._uU(455,"Click Save Config."),e.qZA()()(),e.TgZ(456,"section",32)(457,"div"),e._uU(458,"For more PayPal click "),e.TgZ(459,"a",33),e._uU(460,"here"),e.qZA()()()())},styles:[".magento-docs-container[_ngcontent-%COMP%]{color:#333}.magento-docs-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block}.magento-docs-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:1px solid black;border-collapse:collapse;margin:15px 0}.magento-docs-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .magento-docs-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid black;padding:10px}.magento-docs-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .magento-docs-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){text-align:justify}.magento-docs-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .magento-docs-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;line-height:1.6}.magento-docs-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;margin:.75rem 0;color:#1b9296}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]{margin-bottom:2rem}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700;color:#1b9296;border-bottom:2px solid #aaaaaa;padding-bottom:.5rem}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;margin-top:1rem;color:#1b9296}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5em 0}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:1.5rem;line-height:1.6}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.3rem 0}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#5f83bf;text-decoration:none}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.magento-docs-container[_ngcontent-%COMP%]   .guide-section[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:monospace;background-color:#373737;padding:10px 15px;border-radius:3px;display:inline-block;color:#fff;margin:10px 0;line-height:1.6;cursor:pointer}@media (max-width: 768px){.magento-docs-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem!important}.magento-docs-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3rem!important}.magento-docs-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem!important}}@media (max-width: 480px){.magento-docs-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem!important}.magento-docs-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3rem!important}.magento-docs-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem!important}}"]}),r})()}];let g=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.Bz.forChild(l),u.m]}),r})()}}]);