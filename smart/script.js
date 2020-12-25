/*********************** */
function validate_query(){
  var query_data = document.getElementById("query");
  if(query_data.value=="")
  {  
    alert("Oops...Query is mandatory..!");
    return false;
  }
  query_data=document.getElementById("query-name");
  if(query_data.value=="")
  {  
    alert("Oops...Name is mandatory..!");
    return false;
  }
  query_data=document.getElementById("query-email");
  if(query_data.value=="")
  {  
    alert("Oops...Email is mandatory..!");
    return false;
  }
  alert("Query Submitted Successfully.!");
  return (true);
}
function validate_login(){
  var login_id=document.getElementById("login-username");
  if(login_id.value=="")
  {
    alert("Oops...Username is missing..!");
    return false;
  }
  var login_password=document.getElementById("login-password");
  if(login_password.value=="")
  {
    alert("Oops...password is missing..!");
    return false;
  }
  alert("login successsful");
  return true; 
}
function validate_register()
{
  if(document.getElementById("name").value==""){
    alert("Oops..Please Fill Name..!");
    return false;
  }
  if(document.getElementById("gender").value=="select"){
    alert("Oops..please Select your gender..!");
    return false;
  }
  if(document.getElementById("email").value==""){
    alert("Oops..please provide your email..!");
    return false;
  }
  if(document.getElementById("phonenumber").value==""){
    alert("Oops..please provide your Phone Number..!");
    return false;
  }
   if(document.getElementById("phonenumber").value.length!=10){
    alert("Oops..please provide valid Phone Number(without country code)..!");
    return false;
  }
  if(document.getElementById("dob").value==""){
    alert("Oops..please fill Date of Birth..!");
    return false;
  }
  if(document.getElementById("Username").value==""){
    alert("Oops..Please select a username..!");
    return false;
  }
  if(document.getElementById("password").value==""){
    alert("Oops..Please select your password..!");
    return false;
  }
  if(document.getElementById("password").value.length<8){
    alert("Oops..Password should be atleast 8 characters..!");
    return false;
  }
  if(document.getElementById("password").value!=document.getElementById("cpassword").value){
    alert("Oops..password and Confirm Password doesnot match..!");
    document.getElementById("password").value="";
    document.getElementById("cpassword").value="";
    return false;
  }
  if(!(document.getElementById("agree1").checked && document.getElementById("agree2").checked)){
    alert("Accept terms and conditions..!");
    return false;
  }
  alert("Registered successsful");
  return true;
}
function validate_post(){
  if(!((document.getElementById("bad").checked)||(document.getElementById("average").checked)||(document.getElementById("good").checked))){
    alert("Please provide with a rating..!");
    return false;
  }
  if(document.getElementById("feedback-name").value==""){
    alert("Oops...Name is mandatory..!");
    return false;
  }
  if(document.getElementById("feedback-email").value==""){
    alert("Oops...Email is mandatory..!");
    return false;
  }
  alert("Thanks for your valuable feedback..Have a Good Day..!");
  return true;
}

/********************* */
function close_tab(id){
  var ele = document.getElementById(id);
  ele.style.display="none";
  ele.style.position="relative";
}
function open_tab(id){
  
  var ele = document.getElementById(id);
  ele.style.display="block";
  ele.style.position="fixed";
}

/*********************** */
var x1=0,y1=0;

function add_item_cart(x,y){
  var i=0,flag=true;
  while(i<cart.length){
    if(cart[i][0]==x && cart[i][1]==y){
      flag=false;
      break;
    }
    i++;
  }
  if(flag==false){
    var flag = confirm("Already this item is in cart. Do you want to add again.?");
    if(flag)cart[i][4]+=1;
    else return;
  }
 else{
  var c= new Array(4);
  c[0]=x;c[1]=y;
  c[2]=data[x][y][0];
  c[3]=data[x][y][3];
  c[4]=1;
  cart.push(c);
 }
  
  console.log(cart);
  alert("Item Added successsfully..!");
}

function add_item_cart1(){
  add_item_cart(x1,y1);
}
/*************************** */
var data = [[
              ["Acer NITRO 5 Core i5 9th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA Geforce GTX 1660)","Gaming Laptop", "79,999","69,999","images/item_0_0.png"],
              ["HP Pavilion Core i5 8th Gen - (8 GB/512 GB SSD/Windows 10 Home/2 GB Graphics) 14-ce1073TX Laptop  (14 inch, Mineral Silver, 1.59 kg, With MS Office)","Gaming Laptop","89,999","79,990","images/item_0_1.png"],         
              ["Asus ZenBook Core i5 8th Gen - (8 GB/256 GB SSD/Windows 10 Home) UX430UA-GV573T Thin and Light Laptop  (14 inch, Gold Metal, 1.3 kg)","Office Laptop","53,999","47,990","images/item_0_2.png"],
              ["Dell Inspiron Pentium Gold - (4 GB/256 GB SSD/Windows 10 Home) Inspiron 3480 Thin and Light Laptop  (14 inch, Black, 1.79 kg, With MS Office)","Office Laptop","32,999","29,643","images/item_0_3.jpg"],
              ["Acer Aspire 5 Core i3 10th Gen - (4 GB + 32 GB Optane/512 GB SSD/Windows 10 Home) A514-53-316M Thin and Light Laptop  (14 inch, Magic Purple, 1.50 kg)","Office Laptop","42,999","39,643","images/item_0_4.jpg"],
              ["Acer Swift 7 Core i5 7th Gen - (8 GB/256 GB SSD/Windows 10 Home) SF713-51 Thin and Light Laptop  (13.3 inch, Black, 1.125 kg, With MS Office)","Gamming Laptop","86,999","72,999","images/item_0_5.jfif"]
            ],
            [
              ["Apple iPhone 11 Pro (Gold, 64 GB)","iphone","1,10,000","1,06,600","images/item_1_0.jfif"],
              ["Samsung Galaxy A80 (Phantom Black, 128 GB)  (8 GB RAM)","samsung","35,999","32,999","images/item_1_1.jfif"],
              ["Asus ROG Phone 3 (Black, 128 GB)  (8 GB RAM)","asus","52,999","49,999","images/item_1_2.jfif"],
              ["Realme 5i (Forest Green, 64 GB)  (4 GB RAM)","realme","11,999","10,999","images/item_1_3.jfif"],
              ["Redmi Note 9 Pro (Aurora Blue, 128 GB)  (6 GB RAM)","redmi","21,999","19,964","images/item_1_4.jfif"],
              ["Nokia 9 (Blue, 128 GB)  (6 GB RAM)","nokia","32,499","31,499","images/item_1_5.jfif"]              
            ],
            [
              ["Amkette Xcite Neo Mouse & Wired USB Laptop Keyboard  (Black)","keyboard","999","639","images/item_2_0.jpeg"],
              ["Logitech B525 Commercial HD Webcam, 960-000841 Webcam  (Black)","web cam","6,999","6,199","images/item_2_1.jpeg"],
              ["Saco Screen Guard for Acer Nitro AMD Ryzen 5 Gaming 15.6 inch Laptop  (Pack of 3)","screen guard","499","473","images/item_2_2.jpeg"],
              ["VaiMi Front and Back Tempered Glass for Redmi Note 9 Pro Max  (Pack of 2)","Screen Guard","299","259","images/item_2_3.jpeg"],
              ["Teconica UNIVERSAL 12X ZOOM OPTICAL CLIP MOBILE PHONE TELESCOPE CAMERA Mobile Phone Lens","mobile lens","399","309","images/item_2_4.jpeg"],
              ["VIDZA Wall Charger Accessory Combo for MI NOTE 5 PRO 2.4 A Mobile Charger with Detachable Cable","charger","299","294","images/item_2_5.jpeg"]
            ]
            ];
var offers = ["&#127991; No cost EMI ₹12,499/month. Standard EMI also availabl",
"&#127991; Bank Offer5% Unlimited Cashback on Axis Bank Credit Card",
"&#127991; Partner OfferGet Google One 3-month Free Trial on purchase of a Laptop"      ];

var spec =[
            [ 
              ["Pack: Laptop, Battery, Power Adaptor, User Guide, Warranty Documents","Model Number: AN517-51","Type: Gaming Laptop","Battery Backup:Upto 8 Hours","RAM: 8GB DDR4 ","Processor: intel i5 9th gen", "Screen: 43.94 cm (17.3 inch)  1920 x 1080 pixel "],
              ["Pack: Laptop, Power Adaptor, User Guide, Warranty Documents","Model Number: 14-ce1073TX","Type: Office Laptop","Battery Backup: Upto 8 Hours","RAM: 8GB DDR4","Processor: intel i5 8th Gen","Screen: 35.56 cm (14 inch) 1920 x 1080 Pixel"],
              ["Pack: Laptop, Power Adaptor, User Guide, Warranty Documents","Model Number: UX430UA-GV573T","Type: Thin and Light Laptop","Battery Backup: Upto 8 Hours","RAM: 8GB DDR3","Processor: Intel i5 8Gen","Screen: 35.56 cm (14 inch) 1920 x 1080 Pixel"],
              ["Pack: Laptop, Power Adaptor, User Guide, Warranty Documents","Model Number: Inspiron 3480","Type: Thin and Light Laptop","Battery Backup: Upto 6 hours","RAM: 4GB DDR4","Processor: intel Pentium Gold","Screen: 35.56 cm (14 inch) 1366 x 768 Pixel"],
              ["Pack: Laptop, Power Adaptor, User Guide, Warranty Documents","Model Number: A514-53-316M","Type: Thin and Light Laptop","Battery Backup: Upto 10.5 hours","RAM: ","Processor: intel i3 10th Gen","Screen: 35.56 cm (14 inch) 1920 x 1080 Pixel"],
              ["Pack: Laptop, Battery, Power Adaptor, User Guide, Warranty Documents","Model Number: SF713-51","Type: Thin and Light Laptop","Battery Backup: Upto 8 hours","RAM: 8 GB DDR3","Processor: intel i5 7th Gen","Screen: 33.78 cm (13.3 inch) 1920 x 1080 Pixel"]            
            ],
            [
              ["Pack: Handset, EarPods with Lightning Connector, USB-C to Lightning Cable, 18W USB-C Power Adapter, Documentation","Model Number: MWC52HN/A","RAM: 4GB","Storage: 64GB","Camera: 12MP + 12MP + 12MP 12MP Front Camera","Color: Gold","Screen: 14.73 cm (5.8 inch) 2436 x 1125 Pixels"],
              ["Pack: Handset (Non-removable Battery Included), Earphones, Travel Adapter, USB Cable, Ejection Pin, User Manual, Mobile Cover","Model Number: SM-A805FZKUINS","RAM: 8GB","Storage: 128GB","Camera: 48MP + 8MP 48MP(F2.0)","Color: Phantom Black","Screen: 17.02 cm (6.7 inch) 1080 x 2400 pixels"],
              ["Pack: Handset, Adapter (30W), USB Type-C to Type C Cable, Ejector Pin (SIM Tray Needle), Aero Case, AJ Dongle, Documentation (User Guide, Warranty Card)","Model Number: ZS661KS-6A006IN","RAM: 8GB","Storage: 128GB","Camera: 64MP + 13MP + 5MP | 24MP Front Camera","Color: Black","Screen: 16.74 cm (6.59 inch) 2340 x 1080 Pixels"],
              ["Pack: Handset, Adapter 5V/2A, Important Info Booklet with Warranty Card, Quick Guide, SIM Card Tool, Screen Protect Film (2D TP Film),Micro USB Cable","Model Number: RMX2030","RAM: 4GB","Storage: 64GB","Camera: 12MP + 8MP + 2MP + 2MP | 8MP Front Camera","Color: Forest Green","Screen: 16.56 cm (6.52 inch) 720 x 1600 Pixels"],
              ["Pack: Handset, Power adapter, USB cable, SIM eject tool, Warranty card, User guide, Clear soft case, Screen protector pre-applied on the phone","Model Number: M2003J6A1I","RAM: 6GB","Storage: 128GB","Camera: 48MP + 8MP + 5MP + 2MP | 16MP Front Camera","Color: Aurora Blue","Screen: 16.94 cm (6.67 inch) 2400 x 1080 pixel"],
              ["Pack: Handset, Charger, Charging/Data Cable, Headset, Quick Guide, SIM Door Key, Adapter","Model Number: TA-1087 DS","RAM: 6GB","Storage: 128GB","Camera: 5 x 12MP | 20MP Front Camera","Color: Blue","Screen: 15.21 cm (5.99 inch) 2880 x 1440 pixels"]
            ],
            [
              ["Pack: 1 Xcite NEO USB Keyboard and Mouse combo","Model Name: Xcite NEO Desktop","Model Number: Xcite Neo Mouse", "Type: Laptop Keyboard", "Designed For: Laptop, Desktop, Notebook","USB Version: USB 2.0", "OS Supported: Windows 2000, Windows XP, Windows Vista, Windows 7 / 8 / 10, Linux, Mac OS"],
              ["Sales Package: Webcam 1N || Documentation 1N","Video Sensor Resolution: 1920 x 800 pixels, 1280 x 720 pixels","Frame Rate: 30 fps","Focus Type: Auto","Pan Angle: 69 degree","Connectivity: USB", "Tilt Angle: 360 degree"],
              ["Designed For: Acer Nitro AMD Ryzen 5 Gaming 15.6 inch Laptop","Color: Transparent","Pack of: 3","Number of Layers: 3","Sales Package: Screen guard, Cloth, Manual Shee","Removable", "Easy Wear"],
              ["Designed For: Redmi Note 9 Pro Max","Color: Transparent","Applied on: Front & Back","Pack of: 2","Sales Package: Pack of 2","Removable","Easy Wear"],
              ["Brand: Teconica","Model Number: UNIVERSAL 12X ZOOM OPTICAL CLIP MOBILE PHONE TELESCOPE CAMERA","Lens Type: Telephoto","Color: Mullti Color","Compatible With: All Mobiles,Laptops,Tablets", "Weight: 0.05 kg","Generic Name: Mobile Phone Lens"],
              ["Generic Name: Battery Chargers","Country of Origin: India","Sales Package: 1 UNIT","Series: A2DP","Model Number: Wall Charger Accessory Combo for MI NOTE 5 PRO","Output Interface: 5.0V/2.4A","Output Current: 2.4 A"]
            ]
          ];

var hilts = [ 
              [
                ["Stylish & Portable Thin and Light Laptop","14 inch Full HD LED Backlit IPS ComfyView Display (16:9 Aspect Ratio)","Light Laptop without Optical Disk Drive","No cost EMI starting from ₹4,444/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
                ["Pre-installed Genuine Windows 10 OS","NVIDIA Geforce MX150 for High Graphics Performance","Preloaded MS Office Home and Student 2016","Light Laptop without Optical Disk Drive","Net banking & Credit/ Debit/ ATM card","EMI starting from ₹2,734/month"],
                ["Stylish & Portable Thin and Light Laptop","14 inch Full HD LED Backlit Anti-glare Display","Light Laptop without Optical Disk Drive","No cost EMI starting from ₹5,333/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
                ["Stylish & Portable Thin and Light Laptop","14 inch HD LED Backlit Anti-glare Display","Light Laptop without Optical Disk Drive","No cost EMI starting from ₹3,294/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
                ["Stylish & Portable Thin and Light Laptop","14 inch Full HD LED Backlit IPS ComfyView Display (16:9 Aspect Ratio)","Light Laptop without Optical Disk Drive","No cost EMI starting from ₹4,444/month","Cash on Delivery","Net banking & Credit/ Debit/ ATM card"],
                ["Stylish & Portable Thin and Light Laptop","13.3 inch Full HD LED Backlit IPS Display","Finger Print Sensor for Faster System Access","Light Laptop without Optical Disk Drive","No cost EMI starting from ₹8,110/month","Cash on Delivery"]
              ],
              [
                ["64 GB ROM","14.73 cm (5.8 inch) Super Retina XDR Display","12MP + 12MP + 12MP | 12MP Front Camera","A13 Bionic Chip Processor","No cost EMI starting from ₹11,845/month","Net banking & Credit/ Debit/ ATM card"],
                ["8 GB RAM | 128 GB ROM","17.02 cm (6.7 inch) Full HD+ Display","48MP + 8MP | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) "," TOF (Time-of-Flight) 3D-Depth Rotating Camera","3700 mAh Battery","Qualcomm Snapdragon 730G Octa-Core Processor"],
                ["8 GB RAM | 128 GB ROM","16.74 cm (6.59 inch) Full HD+ Display","64MP + 13MP + 5MP | 24MP Front Camera","6000 mAh Lithium Polymer Battery","Qualcomm Snapdragon 865+ (SM8250) Processor","No cost EMI starting from ₹5,556/month"],
                ["4 GB RAM | 64 GB ROM","16.56 cm (6.52 inch) HD+ Display","12MP + 8MP + 2MP + 2MP | 8MP Front Camera","5000 mAh Battery","Qualcomm Snapdragon 665 2 GHz Processor","Sunrise Design"],
                ["6 GB RAM | 128 GB ROM | Expandable Upto 512 GB","16.94 cm (6.67 inch) Full HD+ Display","48MP + 8MP + 5MP + 2MP | 16MP Front Camera","5020 mAh Battery","Qualcomm® Snapdragon™ 720G Processor","Net banking & Credit/ Debit/ ATM card"],
                ["6 GB RAM | 128 GB ROM","15.21 cm (5.99 inch) Quad HD+ Display","5 x 12MP | 20MP Front Camera","3320 mAh Battery","Qualcomm Snapdragon 845 Processor","Net banking & Credit/ Debit/ ATM card"]
              ],
              [
                ["Size: Standard","Interface: Wired USB","Multimedia Keys","1 Year Amkette Warranty","7 Days Replacement Policy","Cash on Delivery available"],
                ["Color: Black","HD Support","Built in Microphone","2 MP Image Resolution","USB Interface","7 Days Replacement Policy"],
                ["Scratch Resistant, Anti Glare","Laptop","Screen Guard","Removable","No Returns Applicable","Cash on Delivery available"],
                ["Anti Glare, Scratch Resistant,Anti Reflection","Mobile","Front and Back Tempered Glass","Removable","No Returns Applicable","Cash on Delivery available"],
                ["7 Days Replacement Policy","Cash on Delivery available","full lens","color: black","adatable","removable"],
                ["Wall Charger","Suitable For: Mobile","Universal Voltage","Output Current : 2.4 A","7 Days Replacement Policy","Cash on Delivery available"]
              ]
            ];
var Warranty = [
                  ["Warranty Summary: 1 Year Limited International Hardware Warranty","Warranty Service Type: Onsite","Covered in Warranty: Manufacturing Defects","Not Covered in Warranty: Physical Damage","Domestic Warranty: 1 Year","International Warranty: 1 Year"],
                  ["Warranty Summary: 1 Year Limited International Hardware Warranty","Warranty Service Type: Onsite","Covered in Warranty: Manufacturing Defects","Not Covered in Warranty: Physical Damage","Domestic Warranty: 1 Year","International Warranty: 1 Year"],
                  ["Warranty Summary: 1 Year Limited International Hardware Warranty","Warranty Service Type: Onsite","Covered in Warranty: Manufacturing Defects","Not Covered in Warranty: Physical Damage","Domestic Warranty: 1 Year","International Warranty: 1 Year"]
                ];




function show_item(x,y){
  x1=x; y1=y;
 var ele= document.getElementById("showitem");
 ele.style.display="block";
 ele.style.position="fixed";
 document.getElementById("item-name").innerHTML=data[x][y][0];
 document.getElementById("old-price").innerHTML='&#8377;'+data[x][y][2];
 document.getElementById("new-price").innerHTML='&#8377;'+data[x][y][3];
 document.getElementById("item-img").src=data[x][y][4];
 document.getElementById("offer1").innerHTML=offers[0];
 document.getElementById("offer2").innerHTML=offers[1];
 document.getElementById("offer3").innerHTML=offers[2];
 add_highlites(x,y);
 add_specifications(x,y);
 add_warranty(x);
 /*document.getElementById("ele1").innerHTML=2*/
 /*document.getElementById("add_cart_id").onclick=add_item_cart(x,y);*/
}


function close_item(){
  var ele= document.getElementById("showitem");
  ele.style.display="none";
  ele.style.position="relative";
}

function add_highlites(x,y){
 var i=0;
  while(i<hilts[x][y].length){
    var node = "hli"+i;
    document.getElementById(node).innerHTML=hilts[x][y][i];
    i++;
  }  
}
function add_specifications(x,y){
 var i=0;
  while(i<spec[x][y].length){
    var node = "sli"+i;
    document.getElementById(node).innerHTML=spec[x][y][i];
    i++;
  }
}
function add_warranty(x){
 var i=0;
  while(i<Warranty[x].length){
    var node = "w"+i;
    document.getElementById(node).innerHTML=Warranty[x][i];
    i++;
  }
}
/************************* */
var cart= new Array();
function open_cart(){
 var e= document.getElementById("cart-table");
 e.innerHTML="";
 var tblBody = document.createElement("tbody");

  for (var i = 0; i < cart.length; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 3; j++) {
      
      var cell = document.createElement("td");
      if(j>0){cell.style.width="20%";cell.style.text_align="center";}
      var cellText = document.createTextNode(""+cart[i][j+2]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  console.log(tblBody)
  if(tblBody!=null)e.appendChild(tblBody);
  open_tab("cart");
}
