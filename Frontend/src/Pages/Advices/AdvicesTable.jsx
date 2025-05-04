import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const stateCasteData = {
  "Andaman and Nicobar": [
    {
      name: "Karen",
      link: "https://ncbc.nic.in/Writereaddata/1635221877612532824.pdf",
    },
    {
      name: "Local Borns, Bhatus, Moplas",
      link: "https://ncbc.nic.in/Writereaddata/2635221877732469684.pdf",
    },
    {
      name: "Post 1942 Bengali Settlers settled in the Islands under various rehabilitation schemes of the Government of India",
      link: "https://ncbc.nic.in/Writereaddata/3635221877846226190.pdf",
    },
  ],
  "Andhra Pradesh": [
    {
      name: "Nayi-Brahmin",
      link: "https://ncbc.nic.in/Writereaddata/1635221876272536180.pdf",
    },
    {
      name: "Rangarez or Khatriya",
      link: "https://ncbc.nic.in/Writereaddata/2635221876377492183.pdf",
    },
    {
      name: "Nayyala",
      link: "https://ncbc.nic.in/Writereaddata/3635221876481128111.pdf",
    },
    {
      name: "Pallireedi",
      link: "https://ncbc.nic.in/Writereaddata/4635221876582443906.pdf",
    },
    {
      name: "Chuduvallu",
      link: "https://ncbc.nic.in/Writereaddata/5635221876675549231.pdf",
    },
    {
      name: "Moneepatta",
      link: "https://ncbc.nic.in/Writereaddata/6635238318664060665.pdf",
    },
    {
      name: "Nokkar",
      link: "https://ncbc.nic.in/Writereaddata/7635238319021266151.pdf",
    },
    { name: "Yata", link: "https://ncbc.nic.in/Writereaddata/addap8.pdf" },
    {
      name: "Odde, Oddilu, Vaddi, Vaddelu",
      link: "https://ncbc.nic.in/Writereaddata/addap9.pdf",
    },
    { name: "Gammalla", link: "https://ncbc.nic.in/Writereaddata/addap10.pdf" },
    {
      name: "Gandla, Telikula",
      link: "https://ncbc.nic.in/Writereaddata/addap11.pdf",
    },
    { name: "Kaikolan", link: "https://ncbc.nic.in/Writereaddata/addap12.pdf" },
    {
      name: "Karnabhakthula",
      link: "https://ncbc.nic.in/Writereaddata/addap13.pdf",
    },
    {
      name: "Perika Balija",
      link: "https://ncbc.nic.in/Writereaddata/addap14.pdf",
    },
    {
      name: "Thogata Soli",
      link: "https://ncbc.nic.in/Writereaddata/addap15.pdf",
    },
    { name: "Thogati", link: "https://ncbc.nic.in/Writereaddata/addap16.pdf" },
    { name: "Vadla", link: "https://ncbc.nic.in/Writereaddata/addap17.pdf" },
    {
      name: "Krishnabalija",
      link: "https://ncbc.nic.in/Writereaddata/addap18.pdf",
    },
    {
      name: "Chattadasrivaishnava",
      link: "https://ncbc.nic.in/Writereaddata/addap19.pdf",
    },
    { name: "Dasari", link: "https://ncbc.nic.in/Writereaddata/addap20.pdf" },
    {
      name: "Surya Balija",
      link: "https://ncbc.nic.in/Writereaddata/addap21.pdf",
    },
    {
      name: "Nagavasam (Nagavasmsa)",
      link: "https://ncbc.nic.in/Writereaddata/addap22.pdf",
    },
    { name: "Kalinga", link: "https://ncbc.nic.in/Writereaddata/addap23.pdf" },
    {
      name: "Vamsha Raj",
      link: "https://ncbc.nic.in/Writereaddata/addap24.pdf",
    },
    {
      name: "Neeli (Nelli)",
      link: "https://ncbc.nic.in/Writereaddata/addap25.pdf",
    },
    {
      name: "Vishwakarma, Devathilakula",
      link: "https://ncbc.nic.in/Writereaddata/addap26.pdf",
    },
    {
      name: "Pala-Ekari, Ayyaraka, Nagaralu, Pondara, Lodh, Lodha, Lodhi, Kurakula",
      link: "https://ncbc.nic.in/Writereaddata/addap27.pdf",
    },
    {
      name: "Kasi Kapadi",
      link: "https://ncbc.nic.in/Writereaddata/addap28.pdf",
    },
    {
      name: "Gujala Balija",
      link: "https://ncbc.nic.in/Writereaddata/addap29.pdf",
    },
    {
      name: "Karuneegar, Sistakaranam",
      link: "https://ncbc.nic.in/Writereaddata/addap30.pdf",
    },
    {
      name: "Agamudiyar Including Thuluvavilla",
      link: "https://ncbc.nic.in/Writereaddata/addap31.pdf",
    },
    {
      name: "Bondili (Rajput)",
      link: "https://ncbc.nic.in/Writereaddata/addap32.pdf",
    },
    { name: "Jetty", link: "https://ncbc.nic.in/Writereaddata/addap33.pdf" },
    {
      name: "Velama, Adi-Velama",
      link: "https://ncbc.nic.in/Writereaddata/addap34.pdf",
    },
    {
      name: "Turupu Kapu of Srikakulam, Vizianagaram & Visakhapatnam districts",
      link: "https://ncbc.nic.in/Writereaddata/addap35.pdf",
    },
    {
      name: "Thiyya/Ezhava",
      link: "https://ncbc.nic.in/Writereaddata/addap36.pdf",
    },
    {
      name: "Bukka Ayyawar",
      link: "https://ncbc.nic.in/Writereaddata/addap37.pdf",
    },
    {
      name: "Salivahana as synonym of Kummara or Kulala",
      link: "https://ncbc.nic.in/Writereaddata/addap38.pdf",
    },
    {
      name: "Are-Maratha, Maratha, Are-Vellu, Are-Kapu, Are-Kshatriya as synonyms of Arekatika",
      link: "https://ncbc.nic.in/Writereaddata/addap39.pdf",
    },
    {
      name: "Vannia, Vanniar, Vannikula Kshatriya",
      link: "https://ncbc.nic.in/Writereaddata/addap40.pdf",
    },
    {
      name: "Jaiswal/Kalwar",
      link: "https://ncbc.nic.in/Writereaddata/addap41.pdf",
    },
    { name: "Sarollu", link: "https://ncbc.nic.in/Writereaddata/addap42.pdf" },
    {
      name: "yellapu/Yellapondlu as synonyms of Yellapi",
      link: "https://ncbc.nic.in/Writereaddata/addap43.pdf",
    },
    {
      name: "Are-Kshatriya, Are-Vallu, Arollu",
      link: "https://ncbc.nic.in/Writereaddata/addap44.pdf",
    },
    {
      name: "Issai Vellalar",
      link: "https://ncbc.nic.in/Writereaddata/addap45.pdf",
    },
    {
      name: "Atirasa (of Polavaram, Gopalapuram, Koyylagudem, Buttayagudem, Chagallu Mandals of West Godavari district and Devipattanam, Korukonda and Gokavaram Mandals of East Godavari district)",
      link: "https://ncbc.nic.in/Writereaddata/addap46.pdf",
    },
    {
      name: "Kapu, Telaga, Balija, Ontari",
      link: "https://ncbc.nic.in/Writereaddata/addap47.pdf",
    },
    {
      name: "All sections of Balija, specifically Setti Balijas and Thota Balijas of Rayalaseema and other Balija groups, other than those who are already included in the Central List of Backward Classes",
      link: "https://ncbc.nic.in/Writereaddata/addap48.pdf",
    },
    {
      name: "Veerashaiva Lingayat/Linga Balija",
      link: "https://ncbc.nic.in/Writereaddata/addap49.pdf",
    },
    {
      name: "Varala, Thogara Balija, Bholla",
      link: "https://ncbc.nic.in/Writereaddata/addap50.pdf",
    },
    {
      name: "Ekili, Ekila, Ekari, Vyakari, Vyakula, Palegar, Tolagari, Nayaka and Nayanivaru as synonyms of Pala-Ekari",
      link: "https://ncbc.nic.in/Writereaddata/addap51.pdf",
    },
    {
      name: "Reddy Gandla",
      link: "https://ncbc.nic.in/Writereaddata/addap52.pdf",
    },
    {
      name: "Sondi/Sundi",
      link: "https://ncbc.nic.in/Writereaddata/addap53.pdf",
    },
    {
      name: "Gajula Kapu as a synonym of Turupu Kapu of Srikakulam and Visakhapatnam districts",
      link: "https://ncbc.nic.in/Writereaddata/addap54.pdf",
    },
    { name: "Patra", link: "https://ncbc.nic.in/Writereaddata/addap55.pdf" },
    {
      name: "Muslim, Mavafarosh, Muslim Katika, Quresh (Muslim Butchers)",
      link: "https://ncbc.nic.in/Writereaddata/addap56.pdf",
    },
    { name: "Sikligar", link: "https://ncbc.nic.in/Writereaddata/addap57.pdf" },
    { name: "Siddula", link: "https://ncbc.nic.in/Writereaddata/addap58.pdf" },
    {
      name: "Toorpu Chalukya Kapu",
      link: "https://ncbc.nic.in/Writereaddata/addap59.pdf",
    },
    {
      name: "Mehtar (Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No71635367144629701546.pdf",
    },
    {
      name: "Chakali, Vannar, Devaravandlu, Yellammavandlu, Mutyalammavandlu, Veerabhadreeya, Kalinga",
      link: "https://ncbc.nic.in/Writereaddata/addap60.pdf",
    },
    {
      name: "Nakkala",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No73635367160854885948.pdf",
    },
    {
      name: "Maha Brahaman, Achraj, Charaj, Acharaya",
      link: "https://ncbc.nic.in/Writereaddata/Maha635302302761526013.pdf",
    },
    {
      name: "Gudia, Gudiya (confined to Srikakulam, Vizianagaram and Visakhapatnam Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Gudia635302303380685523.pdf",
    },
    {
      name: "Kurmi (confined to Telangana Region and also Krishna District only)",
      link: "https://ncbc.nic.in/Writereaddata/Kurmi635302303810917132.pdf",
    },
    {
      name: "Budubunjala, Bhunjwa, Bhadbhunja (confined to Hyderabad and Ranga Reddy Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Budubunjala635302304213173310.pdf",
    },
    {
      name: "Lakkamari Kapu (confined to Telangana Region only)",
      link: "https://ncbc.nic.in/Writereaddata/Lakkamari635302304811407499.pdf",
    },
    {
      name: "Beri Vysya, Beri Chetty",
      link: "https://ncbc.nic.in/Writereaddata/Beri635302305282614736.pdf",
    },
    {
      name: "Kucchiti Vakkaliga, Vakkaligara, Kunchitiga",
      link: "https://ncbc.nic.in/Writereaddata/Kucchiti635302306039851367.pdf",
    },
    {
      name: "Sardara, Sadaru, Hindu Sadaru (Sadari, Sardara Reddy, Sadara Kapu, Sardara Gowda, Sardar)",
      link: "https://ncbc.nic.in/Writereaddata/Sardara635302306608885108.pdf",
    },
    {
      name: "Pambala",
      link: "https://ncbc.nic.in/Writereaddata/Advice-116-Pambala-AP636056589506087470.pdf",
    },
    {
      name: "Agnikulakshatriya, Palli, Vadabalija, Bestha, Jalari, Gangavar, Gangaputra, Goondla, Vanyakulakshatriya (Vannekapu,Vannereddi, Pallikapu, Pallireddi) Neyyala, Pattapu",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20%20NO832015%20RI%20DKPandey636202507528857011.pdf",
    },
    {
      name: "Rajaka (Chakali, Vannar), Chakali, Vannar",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO842015%20RI%20DKPandey636202513887004139.pdf",
    },
    {
      name: "Nayi-Brahmin (Mangali), Mangala, Bajantri",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO852015%20RI%20DK%20Pandey636202517055899757.pdf",
    },
    {
      name: "Vamsharaj, Pitchiguntala",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO86%202015%20RI%20DKPandey636202518939485232.pdf",
    },
    {
      name: "Veeramushti (Nettikotala), Veerabhadreeya",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO%20872015%20RI%20DK%20Pandey636202521207607489.pdf",
    },
    {
      name: "Valmiki Boya, (Boya, Bedar, Kirataka, Nishadi, Yellapi, Pedda Boya), Talayari and Chunduvallu",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO882015%20RI%20DKPandey636202531057139033.pdf",
    },
    {
      name: "Odde (Oddilu, Vaddi, Vaddelu) Vaddera, Waddera",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO892015%20RI%20DK%20Pandey636202532436361355.pdf",
    },
    {
      name: "Kurakula confined to Srikakulam, Viziangaram & Visakhapatnam Districts",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO902015%20RI%20DK%20Pandey636202534553552600.pdf",
    },
    {
      name: "Pondara confined to Srikakulam, Vizianagaram & Visakhapatnam Districts",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO912015%20RI%20DK%20Pandey636202536534181664.pdf",
    },
    {
      name: "Kasi Kapadi",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO922015%20RI%20D%20K%20Pandey636202538420459633.pdf",
    },
    {
      name: "Sikligar/Saikilgar",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO932015%20RI%20DK%20Pandey636202575235263252.pdf",
    },
    {
      name: "Achukadavandlu in the districts of Visakhapatnam and Guntur confined to Hindus only",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO942015%20RI%20DK%20Pandey636202576602450789.pdf",
    },
    {
      name: "Goud, Ediga, Gouda (Gamalla, Kalalee), Goundla, Settibalija of Vishakapatnam, East Godavari, West Godavari and Krishna Districts and Srisayana (Segidi)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO952015%20RI%20DK%20Pandey636202578039638229.pdf",
    },
    {
      name: "Karikalabhakthulu, Kaikolan of Kaikala (Sengundam of Sengunther)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO962015%20RI%20DK%20Pandey636202579472606979.pdf",
    },
    {
      name: "Perika (Perika Balija, Puragiri Kshatriya)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO972015%20RI%20DK%20Pandey636202581355733444.pdf",
    },
    {
      name: "Padmasali (Sali, Salivan, Pattusali, Senapathulu, Thogata Sali)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO982015%20RI%20DK%20Pandey636202582845419472.pdf",
    },
    {
      name: "Thogata, Thogati or Thogataveerakshariya",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO992015%20RI%20DK%20Pandey636202584223398175.pdf",
    },
    {
      name: "Lodh, Lodha, Lodhi",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1002015%20RI%20DK%20Pandey636202586212450735.pdf",
    },
    {
      name: "Arekatika, Katika, Qureshi (Muslim Butchers)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1012015%20RI%20DK%20Pandey636202587999638223.pdf",
    },
    {
      name: "Bhatraju",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1022015%20RI%20DK%20Pandey636202589054971737.pdf",
    },
    {
      name: "Krishnabhalija (Dasari, Bukka)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1032015%20RI%20DK%20Pandey636202593335908272.pdf",
    },
    {
      name: "Neeli",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1042015%20RI%20DK%20Pandey636202594052450712.pdf",
    },
    {
      name: "Satani (Chattadasrivaishnava)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1052015%20RI%20DK%20Pandey636202594853706229.pdf",
    },
    {
      name: "Tammali (Non-Brahmins) (Shudra Caste)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1062015%20RI%20DK%20Pandey636202595759794791.pdf",
    },
    {
      name: "Ayyaraka Confined to Srikakulam, Vizianagaram, Visakhapatnam, East Godavari, West Godavari, Krishna & Guntur Districts",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1072015%20RI%20DK%20Pandey636202598370267304.pdf",
    },
    {
      name: "Kurmi (Confined to Krishna District only)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1082015%20RI%20DK%20Pandey636202599260575691.pdf",
    },
    {
      name: "Budubunjala/Bhunjwa/Bhadbhuja (confined to Hyderabad and Ranga Reddy Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1092015%20RI%20DK%20Pandey636202600107930560.pdf",
    },
    {
      name: "Surya Balija (Kalavanthula, Ganika)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO110%202015%20RI%20DK%20Pandey636202601333389494.pdf",
    },
    {
      name: "Dammali/Dammala/Dammula/Damala/Peddammavandlu, Devaraavandlu, Yellammavandlu, Mutyalammavandlu",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1112015%20RI%20DK%20Pandey636202602565107100.pdf",
    },
    {
      name: "Samanthula/Samantha/Sounita/Saunita Confined to Srikakulam District",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1122015%20RI%20DK%20Pandey636202603330263477.pdf",
    },
    {
      name: "Lakkamarikapu (Confined to Telangana region only)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1132015%20RI%20DK%20Pandey636202604765419518.pdf",
    },
    {
      name: "Siddula",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1142015%20RI%20DK%20Pandey636202606350426081.pdf",
    },
    {
      name: "Munnurkapu (Telangana)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO1152015%20RI%20DK%20Pandey636202607077920387.pdf",
    },
  ],

  Assam: [
    {
      name: "Saifi",
      link: "https://ncbc.nic.in/Writereaddata/1635218546875024491.pdf",
    },
    {
      name: "Koch-Rajbonshi",
      link: "https://ncbc.nic.in/Writereaddata/2635218547062185196.pdf",
    },
    {
      name: "Koch-Rajbongshi {The entry after restoration of caste/ community Koch-Rajbonshi w.e.f. 03.04.1997 (expect for the period when ordinance regarding inclusion of the caste/community Koch-Rajbonshi in the ST list was in force)",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO42014%20RI%20DKPandey636205042987168095.pdf",
    },
  ],
  Bihar: [
    { name: "Shekhra", link: "" },
    { name: "Dangi", link: "" },
    {
      name: "Kalal, Eraqui, Jaiswal",
      link: "https://ncbc.nic.in/Writereaddata/AddBH3.pdf",
    },
    {
      name: "Kasaundhan/ Kardhadhan",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    { name: "Barhi", link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf" },
    { name: "Tomar", link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf" },
    { name: "Rastogi", link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf" },
    { name: "Lohani", link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf" },
    {
      name: "Ayodhiyavasi",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    {
      name: "Baio Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    {
      name: "Jain Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    {
      name: "Gaud Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    {
      name: "Bais Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    {
      name: "Kath Bania and/or Kaithal Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    {
      name: "Bangiya Vaishya (Bangal Bania)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH4.pdf",
    },
    { name: "Saifi", link: "https://ncbc.nic.in/Writereaddata/AddBH5.pdf" },
    {
      name: "Gangai (Ganesh)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH6.pdf",
    },
    {
      name: "Kewat, Murawai",
      link: "https://ncbc.nic.in/Writereaddata/AddBH7.pdf",
    },
    { name: "Kulahiya", link: "https://ncbc.nic.in/Writereaddata/AddBH8.pdf" },
    {
      name: "Shershahabadi",
      link: "https://ncbc.nic.in/Writereaddata/AddBH9.pdf",
    },
    { name: "Sukiyar", link: "https://ncbc.nic.in/Writereaddata/AddBH10.pdf" },
    {
      name: "Buranwal, Kamlapuri Vaishya, Poddar",
      link: "https://ncbc.nic.in/Writereaddata/AddBH11.pdf",
    },
    {
      name: "Musahar (Christians)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH12.pdf",
    },
    {
      name: "Newar (Christians)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH13.pdf",
    },
    { name: "Tili", link: "https://ncbc.nic.in/Writereaddata/AddBH14.pdf" },
    { name: "Nagar", link: "https://ncbc.nic.in/Writereaddata/AddBH15.pdf" },
    { name: "Adrakh", link: "https://ncbc.nic.in/Writereaddata/AddBH16.pdf" },
    {
      name: "Gandh Banik",
      link: "https://ncbc.nic.in/Writereaddata/AddBH17.pdf",
    },
    {
      name: "Sadgope as a synonym of Yadav",
      link: "https://ncbc.nic.in/Writereaddata/AddBH18.pdf",
    },
    {
      name: "Saikalar (Silkigar) (Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH19.pdf",
    },
    {
      name: "Kurmi, Kurmi (Mahto)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH20.pdf",
    },
    {
      name: "Bakho (Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH21.pdf",
    },
    {
      name: "Thakurai (Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/AddBH22.pdf",
    },
    { name: "Adrakh", link: "https://ncbc.nic.in/Writereaddata/AddBH23.pdf" },
    {
      name: "Soyar, Ansari/Julaha, Badhai",
      link: "https://ncbc.nic.in/Writereaddata/AddBH24.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/JAT%202014635568527976819713.pdf",
    },
    {
      name: "Chipi",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO452015%20RI%20DK%20Pandey636204319446970700.pdf",
    },
    {
      name: "Ittarosh/Ittarafosh/Gadheri",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO492015%20RI%20DK%20Pandey636204320239627892.pdf",
    },
  ],

  Chandigarh: [
    {
      name: "Bhar, Rajbhar, Ramgarhia",
      link: "https://ncbc.nic.in/Writereaddata/1635218601524200245.pdf",
    },
    {
      name: "Gujjar, Saini",
      link: "https://ncbc.nic.in/Writereaddata/AddChh-2.pdf",
    },
    {
      name: "Gosain, Goswami",
      link: "https://ncbc.nic.in/Writereaddata/AddChh-3.pdf",
    },
    {
      name: "Sunar Swanakar",
      link: "https://ncbc.nic.in/Writereaddata/AddChh-4.pdf",
    },
    {
      name: "Yadav/Ahir",
      link: "https://ncbc.nic.in/Writereaddata/AddChh-5.pdf",
    },
    {
      name: "Soni, Sunar/ Swanakar",
      link: "https://ncbc.nic.in/Writereaddata/AddChh-6.pdf",
    },
    {
      name: "Tarboli",
      link: "https://ncbc.nic.in/Writereaddata/Tarboli635302287757120549.pdf",
    },
    {
      name: "Berrer",
      link: "https://ncbc.nic.in/Writereaddata/Berrer635302288217602622.pdf",
    },
    {
      name: "Bharbhuria",
      link: "https://ncbc.nic.in/Writereaddata/Bharbhuria635302288731910522.pdf",
    },
    {
      name: "Chahang",
      link: "https://ncbc.nic.in/Writereaddata/Chahang635302289018189919.pdf",
    },
    {
      name: "Chamgar",
      link: "https://ncbc.nic.in/Writereaddata/Chamgar635302289422871135.pdf",
    },
    {
      name: "Darji, Darj, Tank, Chimpa, Chiba (Hindu, Muslim, Sikh, Christian)",
      link: "https://ncbc.nic.in/Writereaddata/Darji635302290053930827.pdf",
    },
    {
      name: "Bhosali (Hindu, Muslim, Sikh, Christian)",
      link: "https://ncbc.nic.in/Writereaddata/Bhosali635302290720816071.pdf",
    },
    {
      name: "Gadderia",
      link: "https://ncbc.nic.in/Writereaddata/Gadderia635302291394526419.pdf",
    },
    {
      name: "Ghani, Ghazi, Goasiara or Ghosia",
      link: "https://ncbc.nic.in/Writereaddata/Ghani635302291811807828.pdf",
    },
    {
      name: "Kummi",
      link: "https://ncbc.nic.in/Writereaddata/Kummi635302292681446185.pdf",
    },
    {
      name: "Kanihar",
      link: "https://ncbc.nic.in/Writereaddata/Kanihar635302292997376038.pdf",
    },
    {
      name: "Pemja (Hindu, Muslim, Christian, Sikh)",
      link: "https://ncbc.nic.in/Writereaddata/Pemja635302293683636579.pdf",
    },
    {
      name: "Rehard",
      link: "https://ncbc.nic.in/Writereaddata/Rehard635302294071042529.pdf",
    },
    {
      name: "Singhikar, Singhwala",
      link: "https://ncbc.nic.in/Writereaddata/Singhikar635302294735852741.pdf",
    },
    {
      name: "Tamera",
      link: "https://ncbc.nic.in/Writereaddata/Tamera635302295048957550.pdf",
    },
    {
      name: "Daula, Soni Barderi",
      link: "https://ncbc.nic.in/Writereaddata/Daula635302295503089525.pdf",
    },
    {
      name: "Nais",
      link: "https://ncbc.nic.in/Writereaddata/Nais635302295857044962.pdf",
    },
    {
      name: "Lohar (Hindu, Muslim, Sikh, Christian)",
      link: "https://ncbc.nic.in/Writereaddata/Lohar635302296461929253.pdf",
    },
    {
      name: "Kashyap Rajput",
      link: "https://ncbc.nic.in/Writereaddata/27635367169612450929.pdf",
    },
    {
      name: "Kasye Rajputs",
      link: "https://ncbc.nic.in/Writereaddata/Kasye635302296823609808.pdf",
    },
  ],
  Chhattisgarh: [
    {
      name: "First List of Chhattisgarh",
      link: "https://ncbc.nic.in/Writereaddata/1635218605687378365.pdf",
    },
    {
      name: "Dhariya, Dhosi (Gadariya), Gadariya (Pal Baghele),Panwar,Hunga Lohar, Garola, Lohar (Vishwakarma),Kurmvanshi, Chandrakar, Chandra Nahu, Kumbhi Gaval (Gamel), Sirvi,Pinjara (Hindu Kasaria/Kosaria),Mowar,Panka,Dudsena,Khathiya,Jhhani, soni (Swarnkar)",
      link: "https://ncbc.nic.in/Writereaddata/635863101923940372_Advice%20No2%20RIPandey.pdf",
    },
    {
      name: "Pinjara, Naddaf, Fakir/Faquir, Behna, Dhuniya, Dhunkar, Mansoori,Luhar, Nagauri Luhar, Saifi, Multani Luhar",
      link: "https://ncbc.nic.in/Writereaddata/2635234760983075523.pdf",
    },
  ],

  "Daman and Diu": [
    {
      name: "Rana",
      link: "https://ncbc.nic.in/Writereaddata/a1635234816441977358.pdf",
    },
    {
      name: "Koli, Koli Patel, Koli Machhi, Koli Kadia, Luhar (Panchal), Kansara, Kumbhar, Kapdi, Khati (Vankar), Khati (Rangara), Baria, Sorthi, Soni, Soni Sonar, Mali, Kasbati (Muslim), Mansuri (Muslim), Darji, Bhoi, Vanza, Kharva",
      link: "https://ncbc.nic.in/Writereaddata/1635234832646351254.pdf",
    },
    {
      name: "Khati (Butcher), Kureshi (Muzavar), Mogal, Thapania, Vadhel (Muslim), Mir, Fakir, Khalifa (Nai), Mangela, Koli Khania, Salat",
      link: "https://ncbc.nic.in/Writereaddata/1635234834439503796.pdf",
    },
  ],
  "Dadra and Nagar Haveli": [
    {
      name: "Bhandari",
      link: "https://ncbc.nic.in/Writereaddata/635415430704144305_d,nagar.pdf",
    },
  ],
  "N.C.T Of Delhi": [
    {
      name: "Ramgarhia, Panchal, Dheeman, Luhar, Bhubhaliya, Saifi",
      link: "https://ncbc.nic.in/Writereaddata/adddel1.pdf",
    },
    {
      name: "Kanu, Bharbhooja, Qassar, Dhobi",
      link: "https://ncbc.nic.in/Writereaddata/adddel2.pdf",
    },
    {
      name: "Teli, Teli-Malik",
      link: "https://ncbc.nic.in/Writereaddata/adddel3.pdf",
    },
    {
      name: "Kalwar, Jaiswal",
      link: "https://ncbc.nic.in/Writereaddata/adddel4.pdf",
    },
    {
      name: "Rajkumar Kshatriya, Rajkumar",
      link: "https://ncbc.nic.in/Writereaddata/adddel5.pdf",
    },
    { name: "Kayastha", link: "https://ncbc.nic.in/Writereaddata/adddel6.pdf" },
    {
      name: "Rauniyar Vaishya, Poddar, Kesavani Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/adddel7.pdf",
    },
    {
      name: "Kamlapuri Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/adddel8.pdf",
    },
    {
      name: "Arak, Arakvanshiya",
      link: "https://ncbc.nic.in/Writereaddata/adddel9.pdf",
    },
    {
      name: "Raya-Tanwar",
      link: "https://ncbc.nic.in/Writereaddata/adddel10.pdf",
    },
    {
      name: "Vishwakarma Maithil Brahman",
      link: "https://ncbc.nic.in/Writereaddata/adddel11.pdf",
    },
    {
      name: "Rai-Sikh",
      link: "https://ncbc.nic.in/Writereaddata/adddel12.pdf",
    },
    {
      name: "Ansari (as synonyms of Julaha)",
      link: "https://ncbc.nic.in/Writereaddata/adddel13.pdf",
    },
    {
      name: "Salmani (as synonyms of Nai)",
      link: "https://ncbc.nic.in/Writereaddata/adddel14.pdf",
    },
    {
      name: "Idrishi (as synonyms of Darzi)",
      link: "https://ncbc.nic.in/Writereaddata/adddel15.pdf",
    },
    {
      name: "Naddaf, Mansoori (as synonyms of Dhunia)",
      link: "https://ncbc.nic.in/Writereaddata/adddel16.pdf",
    },
    {
      name: "Ezhava, Thiyya",
      link: "https://ncbc.nic.in/Writereaddata/adddel17.pdf",
    },
    {
      name: "Rayakwar, Raikwar",
      link: "https://ncbc.nic.in/Writereaddata/adddel18.pdf",
    },
    {
      name: "Swami, Vaishnav, Vaishnav Brahmin (as synonyms of Bairagi)",
      link: "https://ncbc.nic.in/Writereaddata/adddel19.pdf",
    },
    {
      name: "Teli-Malik",
      link: "https://ncbc.nic.in/Writereaddata/adddel20.pdf",
    },
    {
      name: "Julaha, Ansari (whose traditional occupation is weaving, excluding those in SCs)",
      link: "https://ncbc.nic.in/Writereaddata/adddel21.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/Jat%20delhi%202010%20Advice635566614516967053.pdf",
    },
    {
      name: "Dhangar, Kurba",
      link: "https://ncbc.nic.in/Writereaddata/Dhangar635302275904188491.pdf",
    },
    {
      name: "Sain (barbers by caste)",
      link: "https://ncbc.nic.in/Writereaddata/Sain635302276253143851.pdf",
    },
    {
      name: "Ghrit, Bhati, Chahang",
      link: "https://ncbc.nic.in/Writereaddata/Ghrit635302277799142597.pdf",
    },
    {
      name: "Meo",
      link: "https://ncbc.nic.in/Writereaddata/Meo635302278362851255.pdf",
    },
    {
      name: "Ramgarhia-Sikh",
      link: "https://ncbc.nic.in/Writereaddata/Ramgarhia635302278735506979.pdf",
    },
    {
      name: "Alvi-Fakir",
      link: "https://ncbc.nic.in/Writereaddata/Alvi635302279311840831.pdf",
    },
    {
      name: "Nath, Yogi, Gosain",
      link: "https://ncbc.nic.in/Writereaddata/Nath635302281030867235.pdf",
    },
    {
      name: "Maurya, Shakya",
      link: "https://ncbc.nic.in/Writereaddata/635367174139095361_Advice%20No35.pdf",
    },
    {
      name: "Bhar, Rajbhar",
      link: "https://ncbc.nic.in/Writereaddata/Bhar635302282275836358.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/635566520075573056_JAT%202014.pdf",
    },
  ],
  Goa: [
    {
      name: "Dhobi, Rajak, Madval (including Christian Dhobis), Nhavi, Nai, Nabhi, Napit, Mahalo, Koli, Kharvi (including Christian Kharvi)",
      link: "https://ncbc.nic.in/Writereaddata/1635234836659787899.pdf",
    },
    {
      name: "Nathjogi, Gosavi",
      link: "https://ncbc.nic.in/Writereaddata/2635234841920593704.pdf",
    },
    {
      name: "Kumbhar, Teli, Shimpi",
      link: "https://ncbc.nic.in/Writereaddata/3635234844421082111.pdf",
    },
    {
      name: "Mahar (excluding those who are already in SC list), Pagui",
      link: "https://ncbc.nic.in/Writereaddata/4635234850270821961.pdf",
    },
    {
      name: "Satarkar",
      link: "https://ncbc.nic.in/Writereaddata/5635234851233036741.pdf",
    },
    {
      name: "Suvarnakar (Sunar)",
      link: "https://ncbc.nic.in/Writereaddata/6635234852699909271.pdf",
    },
    {
      name: "Velip",
      link: "https://ncbc.nic.in/Writereaddata/7635234856630844650.pdf",
    },
    {
      name: "Muslim",
      link: "https://ncbc.nic.in/Writereaddata/1635234858061191619.pdf",
    },
    {
      name: "Beri Muslim, Beri, Khan Farooque, Kan Muslim",
      link: "https://ncbc.nic.in/Writereaddata/2635234859579739944.pdf",
    },
    {
      name: "Kalaikar",
      link: "https://ncbc.nic.in/Writereaddata/3635234860583205357.pdf",
    },
    {
      name: "Bhandari",
      link: "https://ncbc.nic.in/Writereaddata/4635234865935987574.pdf",
    },
    {
      name: "Bhandari Naik",
      link: "https://ncbc.nic.in/Writereaddata/4635234873075747240.pdf",
    },
    {
      name: "Christian Renders (who are actually in the profession of toddy tapping), Komarpant, Thakar",
      link: "https://ncbc.nic.in/Writereaddata/5635234911464611883.pdf",
    },
    {
      name: "Barber (including Christians), Kumbhar (including Christians), Mahar (including Christians), Gabit, Blacksmith, Tinsmith",
      link: "https://ncbc.nic.in/Writereaddata/5635234911464611883.pdf",
    },
    {
      name: "Vishwakarma, Chari, Mesta",
      link: "https://ncbc.nic.in/Writereaddata/Vishwakarma635302270586256809.pdf",
    },
    {
      name: "Christian Renders (who are actually in the profession of toddy tapping), Komarpant, Thakar",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No21635367943804438388.pdf",
    },
  ],
  Gujarat: [
    {
      name: "Barber (Hindu), Pakhali",
      link: "https://ncbc.nic.in/Writereaddata/1635234931684257453.pdf",
    },
    {
      name: "Satwara",
      link: "https://ncbc.nic.in/Writereaddata/2635234932928776568.pdf",
    },
    {
      name: "Mali, Teli, Modhghanchi as synonym of Modh Ghanchi",
      link: "https://ncbc.nic.in/Writereaddata/3635234934789480148.pdf",
    },
    {
      name: "Kumbhar Prajapati,Varia",
      link: "https://ncbc.nic.in/Writereaddata/4635234936277503004.pdf",
    },
    {
      name: "Bardai Brahmin",
      link: "https://ncbc.nic.in/Writereaddata/5635234937254843016.pdf",
    },
    {
      name: "Lakhara Lakhwara, Laxkar Sindhi, Ansari as synonym of Julaha",
      link: "https://ncbc.nic.in/Writereaddata/6635234939564378490.pdf",
    },
    {
      name: "Koshti, Sawkee Salai-Saith",
      link: "https://ncbc.nic.in/Writereaddata/7635234941442382335.pdf",
    },
    {
      name: "Gadaria as synonym of Bharwad",
      link: "https://ncbc.nic.in/Writereaddata/8635234952228298004.pdf",
    },
    {
      name: "Kalal",
      link: "https://ncbc.nic.in/Writereaddata/9635234954877838701.pdf",
    },
    {
      name: "Vanza (Dant), Darji Sai-Sathar Mistri (Suthar/Sutar), Indian Sutar-Rejection, Luhar, Lohar, Panchal Idlui",
      link: "https://ncbc.nic.in/Writereaddata/10635234961296272287.pdf",
    },
    {
      name: "Mahia (Mali)",
      link: "https://ncbc.nic.in/Writereaddata/11635234961969032620.pdf",
    },
    {
      name: "Nadoda Rajput",
      link: "https://ncbc.nic.in/Writereaddata/12635234963006623557.pdf",
    },
    {
      name: "Rajbhar, Bhar, Chhipa",
      link: "https://ncbc.nic.in/Writereaddata/13635234964098315326.pdf",
    },
    {
      name: "Rajput, Purohitakshatriya Rajput, Brahmin",
      link: "https://ncbc.nic.in/Writereaddata/14635235072845830663.pdf",
    },
    {
      name: "Kadva Patel, Anjana (Patel, Chaudhary, Desai), Modh Patel or Modh Patidar, Baloch Muslim",
      link: "https://ncbc.nic.in/Writereaddata/1(1)635235081457612937.pdf",
    },
    {
      name: "Marada or Marwada Waghrat, Waghra Waghrat & Waghrat-Gamicho, Vadu Churalia, Jakhudia (where they are not STs) as synonyms of Waghrat",
      link: "https://ncbc.nic.in/Writereaddata/2635236510012980211.pdf",
    },
    {
      name: "Palani Kamlaliya (Waghri), Hilari, Chunvaliya, Jahori, Kanikuda, Satatia, Porma, Vadhiyari, Utamariya, Ghanghaliya, Sansoriya (Lakadvai), Kachhi, Bavari, Modhkhiya, Vasvadiya, Bhoviya Madiya as synonyms of Waghrat",
      link: "https://ncbc.nic.in/Writereaddata/2635236510012980211.pdf",
    },
    {
      name: "Food Mali, Maratha Mali, Kach Mali Jire Mali as synonyms of Mali",
      link: "https://ncbc.nic.in/Writereaddata/3635236512399391866.pdf",
    },
    {
      name: "Kachhia, Kachhi, Kachhi-Kushwaha, Mauya-Kotri",
      link: "https://ncbc.nic.in/Writereaddata/3635236513745712545.pdf",
    },
    {
      name: "Sorathia Mali, Saini Mali, Moria, Kushwaha, Rami as synonyms of Mali",
      link: "https://ncbc.nic.in/Writereaddata/3635236514756303067.pdf",
    },
    {
      name: "Bhandari",
      link: "https://ncbc.nic.in/Writereaddata/4635236542165199061.pdf",
    },
    {
      name: "Teli-Sahu, Teli Rathod, Teli-Rathore, Jaiswal Teli, Jaiswar Teli, Gupta Teli, Choudhari Teli, Talik, Modi Teli, Vaishya Teli, Vaniya Teli, Rajput Teli & Maratha Teli",
      link: "https://ncbc.nic.in/Writereaddata/5635236542786608606.pdf",
    },
    {
      name: "Gugali Brahmin",
      link: "https://ncbc.nic.in/Writereaddata/6635236545323922579.pdf",
    },
    {
      name: "Bhadbhunja",
      link: "https://ncbc.nic.in/Writereaddata/7635236545713603564.pdf",
    },
    {
      name: "Bagban Revery",
      link: "https://ncbc.nic.in/Writereaddata/8635236546713593924.pdf",
    },
    {
      name: "Kathit",
      link: "https://ncbc.nic.in/Writereaddata/9635236547166775884.pdf",
    },
    {
      name: "Jagr",
      link: "https://ncbc.nic.in/Writereaddata/1635236548005788771.pdf",
    },
    {
      name: "Khavas",
      link: "https://ncbc.nic.in/Writereaddata/2635236548363994273.pdf",
    },
    {
      name: "Sager",
      link: "https://ncbc.nic.in/Writereaddata/3635236549401785214.pdf",
    },
    {
      name: "Dhangar as synonym of Bharwad",
      link: "https://ncbc.nic.in/Writereaddata/4635236549994019310.pdf",
    },
    {
      name: "Ana Mukhlim Nizam (including Sunni Muslim Tamboli Charan Gaudvi, Charan Banjara Mistri (Suthar/Sutar), Suthar, Mistri, Gurjar (Suthar/Sutar))",
      link: "https://ncbc.nic.in/Writereaddata/5a635236555166298755.pdf",
    },
    {
      name: "Prajapati (Gujarat Prajapati, Varia Prajapati, Sorathia Prajapati), Sorathiya Prajapati Satwara, Satwara - Kadiya, Satwara - Kadiya, Dalwadi and Kadiya Mochi",
      link: "https://ncbc.nic.in/Writereaddata/5b635236558583501243.pdf",
    },
    {
      name: "Charan",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No%2045635367873252753316.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/JAT%202014635566929448804378.pdf",
    },
  ],
  Haryana: [
    {
      name: "Bhattu/Chattu, Badi/Baddon, Rahbari, Raigar, Ramgarhia, Nat",
      link: "https://ncbc.nic.in/Writereaddata/1635236561332843472.pdf",
    },
    {
      name: "Ahir/Yadav, Meo, Gujjar",
      link: "https://ncbc.nic.in/Writereaddata/635415424744160328_HARYANA(Ahir,yadav).pdf",
    },
    {
      name: "Lodh/Lodha, Saini",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-3.pdf",
    },
    {
      name: "Pal, Jangam-Jogi, Zargar, Soni, Suthar, Dhiman, Tarkhan, Barhai, Baddi, Panchal, Rohilla",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-4.pdf",
    },
    {
      name: "Saini, Khewat, Mehra, Nishad",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-5.pdf",
    },
    {
      name: "Bhar, Rajbhar",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-6.pdf",
    },
    {
      name: "Salmani, Saifi",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-7.pdf",
    },
    {
      name: "Rangrez, Nilgar, Leelagar, Lallari",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-8.pdf",
    },
    {
      name: "Gramini, Jaiswar",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-9.pdf",
    },
    {
      name: "Jat (Part-1)",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-10a.pdf",
    },
    {
      name: "Jat (Part-2)",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-10b.pdf",
    },
    {
      name: "Jat (Part-3)",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-10c.pdf",
    },
    {
      name: "Jat Sikh",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-11.pdf",
    },
    {
      name: "Gosain/Goswami",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-12.pdf",
    },
    { name: "Udasin", link: "https://ncbc.nic.in/Writereaddata/AddHay-13.pdf" },
    {
      name: "Charaj (Mahabrahman)",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-14.pdf",
    },
    { name: "Ror", link: "https://ncbc.nic.in/Writereaddata/AddHay-15.pdf" },
    {
      name: "Swamy Sadh",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-16.pdf",
    },
    {
      name: "Dawala, Soni (Dawala), Nyaria",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-17.pdf",
    },
    {
      name: "Vishwakarma Maithi Brahman",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-18.pdf",
    },
    {
      name: "Lodhi as synonym of Lodh/Lodha",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-19.pdf",
    },
    {
      name: "Saini, Shakya",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-20.pdf",
    },
    {
      name: "Hari, Sakka, Bhisti, Sheikh-Abbasi, Nai, Joginath, Yogi, Kachera, Banzara",
      link: "https://ncbc.nic.in/Writereaddata/AddHay-21.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/JAT%202014635568274253868064.pdf",
    },
  ],
  "Himachal Pradesh": [
    {
      name: "Tarkhan, Julaha, Ansari (Other than those included in the list of SC)",
      link: "https://ncbc.nic.in/Writereaddata/addhim1.pdf",
    },
    { name: "Khatri", link: "https://ncbc.nic.in/Writereaddata/addhim2.pdf" },
    { name: "Nai", link: "https://ncbc.nic.in/Writereaddata/addhim3.pdf" },
    {
      name: "Kumhar, Prajapati, Kumbar, Ghumar, Ghumhar",
      link: "https://ncbc.nic.in/Writereaddata/addhim4.pdf",
    },
    {
      name: "Pinja or Penja, Panja, Nadaf, Nadaaf",
      link: "https://ncbc.nic.in/Writereaddata/addhim5.pdf",
    },
    { name: "Pumba", link: "https://ncbc.nic.in/Writereaddata/addhim6.pdf" },
    { name: "Hadi", link: "https://ncbc.nic.in/Writereaddata/addhim7.pdf" },
    {
      name: "Badhai, Ramgarhi, Dhiman (excluding Lohar), Vishwakarma",
      link: "https://ncbc.nic.in/Writereaddata/addhim8.pdf",
    },
    { name: "Saini", link: "https://ncbc.nic.in/Writereaddata/addhim9.pdf" },
    {
      name: "Popo Brahman as synonyms of Ard Pop",
      link: "https://ncbc.nic.in/Writereaddata/Popo635301604764119937.pdf",
    },
    {
      name: "Jhiwar, Jhewr, Jheer castes as synonyms of Dhiwar or Jhinwar, Jheewar",
      link: "https://ncbc.nic.in/Writereaddata/Jhiwar635301605220951954.pdf",
    },
    {
      name: "Bujhru, Darkaut",
      link: "https://ncbc.nic.in/Writereaddata/Bujhru635301605816136096.pdf",
    },
    {
      name: "Choharka other than SC and ST residing in 12 Gram Panchayats in Choharghati of Mandi District (HP) viz. Bardhan",
      link: "https://ncbc.nic.in/Writereaddata/Choharka635301606396995018.pdf",
    },
    {
      name: "Sanyasi, Gujrati, Vyas",
      link: "https://ncbc.nic.in/Writereaddata/Sanyasi635301607055155127.pdf",
    },
    {
      name: "Maha Brahman, Achari, Chari, Acharya",
      link: "https://ncbc.nic.in/Writereaddata/Maha635301607472736541.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/JAT%202014635568319282367583.pdf",
    },
    {
      name: "Gaddi (in merged areas only)",
      link: "https://ncbc.nic.in/Writereaddata/HP%20Advice%2021%20Gaddi636056593010464132.pdf",
    },
    {
      name: "Gujjar or Gujar (in merged areas only)",
      link: "https://ncbc.nic.in/Writereaddata/HP%20Advice%2033%20%20Gujjar636056593905200635.pdf",
    },
    {
      name: "Batehda",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO20%20Batehda%20HP2015%20RI%20DK%20Pandey636205126496148436.pdf",
    },
  ],
  Jharkhand: [
    {
      name: "First List of Jharkhand",
      link: "https://ncbc.nic.in/Writereaddata/addjh1.pdf",
    },
    {
      name: "Chippi, Julaha, Ansari, Ghasi, Mehar, Sadgop, Bairagi",
      link: "https://ncbc.nic.in/Writereaddata/Chippi635301599447863281.pdf",
    },
    {
      name: "Agariya, Kaura, Kaear, Kumarbhag Pahadia",
      link: "https://ncbc.nic.in/Writereaddata/Agariya635301599862669652.pdf",
    },
    {
      name: "Sudi, Halwai, Roniyar, Pansari, Modi, Kasera, Kaservani, Thathera, Patwa, Sinduriya-Bania, Mahuri-Vaishya, Awadh-Bania/Adrakh, Agrahari-Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/addjh3.pdf",
    },
    {
      name: "Bhat, Bhatt, Bhat (Muslim),Gandharb, Gandharbh,Kaivarta, Kaibaritta,Kamar (Lohar, Karmakar), Visvakarma,Kurmi, Kurmi (Mahto),Mallah (Surhiya), Kewat Murawari,Mangar (Magar),Maurjaro, Mauriara,Nagar (Excludes Maithili Brahmins and immigrant Nagars from other States),Nonia, Nunia,Pal (Berihar-Gaderi), Gaderia,Sonar, Sunar,Tamoli, Tamboli,Tanti (Tatwa), Tati, Tatin,Chik (Muslim),Dhankar,Kalal, Eraqui,Kalwar,Parya",
      link: "https://ncbc.nic.in/Writereaddata/addjh2.pdf",
    },
    {
      name: "Mayra (Maira) Modak",
      link: "https://ncbc.nic.in/Writereaddata/Mayra635301600461403849.pdf",
    },
    {
      name: "Bagti",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO72014%20RI%20DK%20Pandey636205020495453611.pdf",
    },
    {
      name: "Bagchi",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO82014%20RI%20DK%20Pandey636205021710453888.pdf",
    },
    {
      name: "Late",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO92014%20RI%20DK%20Padney636205023054988270.pdf",
    },
    {
      name: "Kunai",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO102014%20RI%20DK%20Pandey636205023905449401.pdf",
    },
    {
      name: "Pushpanamit",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No%20NO112014%20RI%20DK%20Pandey636205025127636877.pdf",
    },
    {
      name: "Jhora",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO122014%20RI%20DK%20Pandey636205026565452532.pdf",
    },
    {
      name: "Laxmi Narayan Gola",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO132014%20RI%20DK%20Pandey636205027454669972.pdf",
    },
  ],
  Kerala: [
    {
      name: "Mukaya, Mogaveera",
      link: "https://ncbc.nic.in/Writereaddata/addker1.pdf",
    },
    { name: "Devadiga", link: "https://ncbc.nic.in/Writereaddata/addker2.pdf" },
    { name: "Ganika", link: "https://ncbc.nic.in/Writereaddata/addker3.pdf" },
    {
      name: "Thattan Pandithalan",
      link: "https://ncbc.nic.in/Writereaddata/addker4.pdf",
    },
    {
      name: "Perunkulian",
      link: "https://ncbc.nic.in/Writereaddata/addker5.pdf",
    },
    {
      name: "Kannadiya",
      link: "https://ncbc.nic.in/Writereaddata/addker6.pdf",
    },
    {
      name: "Kavudiyar",
      link: "https://ncbc.nic.in/Writereaddata/addker7.pdf",
    },
    { name: "Koteyar", link: "https://ncbc.nic.in/Writereaddata/addker8.pdf" },
    {
      name: "Veerasaiva",
      link: "https://ncbc.nic.in/Writereaddata/addker9.pdf",
    },
    {
      name: "Vikkhikalavan",
      link: "https://ncbc.nic.in/Writereaddata/addker10.pdf",
    },
    {
      name: "Valan, Bovi Mukayar, Nulayan, Valintar, and Paranikkal",
      link: "https://ncbc.nic.in/Writereaddata/addker11.pdf",
    },
    {
      name: "Kumbaran",
      link: "https://ncbc.nic.in/Writereaddata/addker12.pdf",
    },
    {
      name: "Perorkada Chetty, Sauchaley, 24 Manai Telugu Chetty",
      link: "https://ncbc.nic.in/Writereaddata/addker13.pdf",
    },
    {
      name: "Thachan, Kalthachan, Kamsala, Kannan",
      link: "https://ncbc.nic.in/Writereaddata/addker14.pdf",
    },
    {
      name: "Vettuva Nanjinan, Kongu Nanjinan, Aduthon",
      link: "https://ncbc.nic.in/Writereaddata/addker15.pdf",
    },
    { name: "Thachar", link: "https://ncbc.nic.in/Writereaddata/addker16.pdf" },
    {
      name: "Poopandaram, Masalapandaram, and Jangam as synonyms of Veerasaiva Vairavi, Vairagi, Matapathi, Gurukkal (Kurukkal), Yogi Gurukkal, Poojari, Ambalakkara, Padaram/Padaran, Ligayat, Chetty, Pappada Chetty, Andi/Andi Pandaram as synonyms of Jangam",
      link: "https://ncbc.nic.in/Writereaddata/addker17.pdf",
    },
    {
      name: "Odde, Boyan",
      link: "https://ncbc.nic.in/Writereaddata/addker18.pdf",
    },
    {
      name: "Vellala, including Nandimuda Vellala and Pondi Vellala, Saiva Vellala, Parakavalam, Jews",
      link: "https://ncbc.nic.in/Writereaddata/addker19.pdf",
    },
    {
      name: "Kalamnoopan or Kallan Moopar, Mukhari Alias Modvari",
      link: "https://ncbc.nic.in/Writereaddata/addker20.pdf",
    },
    {
      name: "Vaishava Gowder",
      link: "https://ncbc.nic.in/Writereaddata/addker21.pdf",
    },
    {
      name: "Saraswat Non-Brahmin",
      link: "https://ncbc.nic.in/Writereaddata/addker22.pdf",
    },
    {
      name: "Arya Vaisya",
      link: "https://ncbc.nic.in/Writereaddata/addker23.pdf",
    },
    { name: "Ezhuva", link: "https://ncbc.nic.in/Writereaddata/addker24.pdf" },
    {
      name: "Vania Vaisya",
      link: "https://ncbc.nic.in/Writereaddata/addker25.pdf",
    },
    {
      name: "Kumar Akshathiya, Maran/Maranmar",
      link: "https://ncbc.nic.in/Writereaddata/addker26.pdf",
    },
    { name: "Nair", link: "https://ncbc.nic.in/Writereaddata/addker27.pdf" },
    { name: "Nadar", link: "https://ncbc.nic.in/Writereaddata/addker28.pdf" },
    {
      name: "Mallava Veeshasiva",
      link: "https://ncbc.nic.in/Writereaddata/addker29.pdf",
    },
    {
      name: "Kongu Vellala Gounder, including Vellala Gounder, Nattu Gounder, Pala Gounder, Poojari Gounder, Pala Vellala Gounder",
      link: "https://ncbc.nic.in/Writereaddata/addker30.pdf",
    },
    {
      name: "Mahendra/Meda",
      link: "https://ncbc.nic.in/Writereaddata/Mahendra-Medara635300557110224286.pdf",
    },
    {
      name: "Chaliya (Chalian) (Whose caste profession is cotton weaving)",
      link: "https://ncbc.nic.in/Writereaddata/Chaliya%20(Chaliyan)635300558090989350.pdf",
    },
    {
      name: "Moopar",
      link: "https://ncbc.nic.in/Writereaddata/Moopar635300558467720137.pdf",
    },
    {
      name: "Kuruba",
      link: "https://ncbc.nic.in/Writereaddata/Kuruba635300558744924394.pdf",
    },
  ],

  Punjab: [
    {
      name: "Ramgarhia, Turkhan",
      link: "https://ncbc.nic.in/Writereaddata/AddPB-1.pdf",
    },
    {
      name: "Bhar, Rajbhar, Saifi",
      link: "https://ncbc.nic.in/Writereaddata/AddPB-2.pdf",
    },
    { name: "Rahbari", link: "https://ncbc.nic.in/Writereaddata/AddPB-3.pdf" },
    {
      name: "Sunar/Swarnakar, Dhaula/Soni, Mair-Rajput",
      link: "https://ncbc.nic.in/Writereaddata/AddPB-4.pdf",
    },
    { name: "Saini", link: "https://ncbc.nic.in/Writereaddata/AddPB-5.pdf" },
    { name: "Gosain", link: "https://ncbc.nic.in/Writereaddata/AddPB-6.pdf" },
    { name: "Sain", link: "https://ncbc.nic.in/Writereaddata/AddPB-7.pdf" },
    {
      name: "Kachhi, Kachhi-Shakya, Kachhi-Maurya, Kachhi-Kushwaha",
      link: "https://ncbc.nic.in/Writereaddata/AddPB-8.pdf",
    },
    {
      name: "Kumhar/Ghumiar, Prajapati/Prajapatra",
      link: "https://ncbc.nic.in/Writereaddata/AddPB-9.pdf",
    },
    {
      name: "Re, Nai (Kullen Brahmn), Tamboli, Buzroos, Dhiman, Chhippi, Chimp, Kangohra, Thathora, Tampora",
      link: "https://ncbc.nic.in/Writereaddata/Re635300531356203710.pdf",
    },
  ],
  Sikkim: [
    {
      name: "Thami",
      link: "https://ncbc.nic.in/Writereaddata/AddSikkim-1.pdf",
    },
    {
      name: "Sanyasi",
      link: "https://ncbc.nic.in/Writereaddata/AddSikkim-2.pdf",
    },
    {
      name: "Newar",
      link: "https://ncbc.nic.in/Writereaddata/AddSikkim-3.pdf",
    },
    {
      name: "Chettri, Bahun",
      link: "https://ncbc.nic.in/Writereaddata/AddSikkim-4.pdf",
    },
    { name: "Jogi", link: "https://ncbc.nic.in/Writereaddata/AddSikkim-5.pdf" },
    {
      name: "Limbu, Tamang",
      link: "https://ncbc.nic.in/Writereaddata/Delete635415433560721802.pdf",
    },
    {
      name: "Limbu (including Tsong, Subba, and Yakthungba)",
      link: "https://ncbc.nic.in/Writereaddata/Sikkim%20Advice%207636056598013562581.pdf",
    },
  ],
  Tripura: [
    {
      name: "Barujibi, Aheer, Natta",
      link: "https://ncbc.nic.in/Writereaddata/635415435573524544_Tripura.pdf",
    },
    { name: "Kuri", link: "https://ncbc.nic.in/Writereaddata/AddTri-2.pdf" },
    { name: "Modak", link: "https://ncbc.nic.in/Writereaddata/AddTri-3.pdf" },
    {
      name: "Heledas, Halladas, Haluadas",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-4.pdf",
    },
    {
      name: "Shil, Painak",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-5.pdf",
    },
    {
      name: "Bishnupriya Manipuri, Pangal",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-6.pdf",
    },
    {
      name: "Rai (Oriya), Raily, Telenga",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-7.pdf",
    },
    {
      name: "Bangshi, Kumar, Rudrapal",
      link: "https://ncbc.nic.in/Writereaddata/635415437190769180_Tripura(14-15).pdf",
    },
    { name: "Giri", link: "https://ncbc.nic.in/Writereaddata/AddTri-9.pdf" },
    { name: "Saha", link: "https://ncbc.nic.in/Writereaddata/AddTri-10.pdf" },
    {
      name: "Acharjee (Ganak)",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-11.pdf",
    },
    {
      name: "Rajbhar as a Synonym of Bhar",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-12.pdf",
    },
    {
      name: "Adhikari (the Brahmas of Namsudra community)",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-13.pdf",
    },
    { name: "Banik", link: "https://ncbc.nic.in/Writereaddata/AddTri-14.pdf" },
    {
      name: "Muslims",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-15.pdf",
    },
    {
      name: "Teli (All Sections) other than Oriya Telis",
      link: "https://ncbc.nic.in/Writereaddata/AddTri-16.pdf",
    },
  ],
  Uttarakhand: [
    {
      name: "Rai-Sikh (Mahtam)",
      link: "https://ncbc.nic.in/Writereaddata/AddUA-2.pdf",
    },
    {
      name: "Gorkha",
      link: "https://ncbc.nic.in/Writereaddata/635368704899088783_Advice%20No2.pdf",
    },
    {
      name: "Gada",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No3635368705791970008.pdf",
    },
    {
      name: "Ranwalta Jaunpari Community",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No4635368706296295973.pdf",
    },
    {
      name: "First List",
      link: "https://ncbc.nic.in/Writereaddata/AddUA-1.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/JAT%202014635569254649111270.pdf",
    },
    {
      name: "Rajbhar",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO19%20Rajbhar%20UK%202015%20RI%20DKPandey636205049614355742.pdf",
    },
    {
      name: "Dhiman",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO20%20UK2015%20RI%20DK%20Pandey636205060371093733.pdf",
    },
  ],
  "West Bengal": [
    {
      name: "Jolah (Ansari-Momin)",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-1.pdf",
    },
    { name: "Malakar", link: "https://ncbc.nic.in/Writereaddata/AddWB-2.pdf" },
    {
      name: "Tanti, Tantubay",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-3.pdf",
    },
    { name: "Dhanuk", link: "https://ncbc.nic.in/Writereaddata/AddWB-4.pdf" },
    {
      name: "Karani, Raju, Keori, Kori, Sarak, Kosta, Koshta",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-5.pdf",
    },
    { name: "Nagar", link: "https://ncbc.nic.in/Writereaddata/AddWB-6.pdf" },
    {
      name: "Chitrakar",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-7.pdf",
    },
    {
      name: "Goala-Gope",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-8.pdf",
    },
    { name: "Bhujel", link: "https://ncbc.nic.in/Writereaddata/AddWB-9.pdf" },
    {
      name: "Fakir, Sain",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-10.pdf",
    },
    {
      name: "Jogi, Nadap/Dhunia, Nembang, Churiwalan",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-11.pdf",
    },
    { name: "Turha", link: "https://ncbc.nic.in/Writereaddata/AddWB-12.pdf" },
    {
      name: "Mangar (Thapa, Rana)",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-13.pdf",
    },
    {
      name: "Kahar, Betkar",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-14.pdf",
    },
    {
      name: "Sampang, Bura, Chhteng, Suki (excluding Solanki Rajputs who claim themselves to be Suki)",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-16a.pdf",
    },
    {
      name: "Dhimal, Bhar, Lakhera, Laahera",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-16b.pdf",
    },
    { name: "Rangwa", link: "https://ncbc.nic.in/Writereaddata/AddWB-17.pdf" },
    { name: "Newar", link: "https://ncbc.nic.in/Writereaddata/AddWB-18.pdf" },
    {
      name: "Kasai-Quraishi",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-19.pdf",
    },
    {
      name: "Kalwar, Jaiswal as synonym of Kalwar",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-20.pdf",
    },
    {
      name: "Hawari, Dhobi (other than those included in the list of SCs), Salmani and Saini",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-21.pdf",
    },
    {
      name: "Roniwar, Gandhabanik, Kamipuri Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-22.pdf",
    },
    { name: "Gorkha", link: "https://ncbc.nic.in/Writereaddata/AddWB-23.pdf" },
    {
      name: "Tamboli/Tamti",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-24.pdf",
    },
    { name: "Tili", link: "https://ncbc.nic.in/Writereaddata/AddWB-25.pdf" },
    { name: "Saha", link: "https://ncbc.nic.in/Writereaddata/AddWB-26.pdf" },
    { name: "Tamang", link: "https://ncbc.nic.in/Writereaddata/AddWB-27.pdf" },
    {
      name: "Khami, Khera",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-28.pdf",
    },
    {
      name: "Khen (Non-Baniya category)",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-29.pdf",
    },
    {
      name: "Chamling",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-30.pdf",
    },
    {
      name: "Scheduled Caste Converts to Christianity and their progeny",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-31.pdf",
    },
    { name: "Sunuwar", link: "https://ncbc.nic.in/Writereaddata/AddWB-32.pdf" },
    {
      name: "Rayeen (Kunjri)",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-33.pdf",
    },
    {
      name: "Helel-Hala, Chasi, Kabarita, Das Kabarita, Mahishya",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-34.pdf",
    },
    {
      name: "Khandait",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-35.pdf",
    },
    {
      name: "Nashya-Sheik",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-36.pdf",
    },
    {
      name: "Shereshabadia (Badia/Bhatiya)",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-37.pdf",
    },
    {
      name: "Rai (including Chamaria, Bhatrajua, Dewan, Patidar, Banshi, Barman, Pahadia Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/AddWB-38.pdf",
    },
    {
      name: "Devangan, Hajjam (Muslim), Chowdri (Muslim), Nikari (Muslim), Mahaldar (Muslim), Dhukrey (Muslim), Basni, Muslim Teli, Muslim Goyan, Muslim Rajbedar, Muslim Khotta, Muslim Laskar, Muslim Sardar, Muslim Kalandar, Muslim Sapera, Muslim Jogi, Muslim Muchi, Muslim Neharay, Muslim Hataar, Muslim Sandor, Muslim Mochi, Muslim Darzi, Muslim Rajmistri, Muslim Bhatiyara, Muslim Molla, Muslim Dhai, Muslim Peyda, Muslim Barhuj, Muslim Tamtaan",
      link: "https://ncbc.nic.in/Writereaddata/DEVANG~1635299699865957216.PDF",
    },
    {
      name: "Tamang",
      link: "https://ncbc.nic.in/Writereaddata/Delete635415440516143637.pdf",
    },
    { name: "Thami", link: "https://ncbc.nic.in/Writereaddata/AddWB-15.pdf" },
  ],
  "Tamil Nadu": [
    {
      name: "Kalari Kuran, Kalari Panickeri, Kalyali Gonder, Twenty four Mandal Teluça Chefty, Thachar, Visaybrahima, Kaniso, Dasanalanjika, Tunori Vellalar, Koppala Vedama, Kotayar, Nandev Maharatta, Simbana Maravar, Christian Granani, Naikklar, Senatihalaviar, Senatindlar, İlmayapidir, Sozha Vallalar, Kotikalkarar, Keeralkarar, Uapolu, Kappiliya, Jambuvankodai, Muçakampati, Chalarda Srivalshnava, Thattiya Naicker",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-1.pdf",
    },
    {
      name: "120. Perankollar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-2.pdf",
    },
    {
      name: "96. Velakkattalarair",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-3.pdf",
    },
    {
      name: "Gola, Görda Doda Boya, Kutlapje Kallar, Phampali Kallar, Perasuriyar Kallar, Arapad Gounder, Kausmar, See Karunagur, Bri Karunageer, Vinlayar, Gandarvakottai Koravari, Kala Keravar, Kahni Danikoravar, Atunkinad Keravar, Atum Melnar, Isavellallar, Kurimi Cheety, Sombadavar, Saranna Palil Loravar, Kateshar, Telugupatiy Cheety, Salavak Thozhilalar, Kerala Madali, Moopan, Pattanya, Yogeswirrar, Tholimorvar Sahla District, Kekatlikarunageer, Payalahkatiy Vellalar Gounder, Nathu Vihi Kankar, Sozni Sankar, Sumambhu Karunageer, Telgu Chetty",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-4.pdf",
    },
    {
      name: "Virakodi Vellala (former panisai vanonly)",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-5.pdf",
    },
    {
      name: "156. Vannar (Salavai, Thozhilalar), Agasa, Ekali, Madivala, Battu Turkas, Devagudi Talayar, Mantihuvar, navithar, Mangala, Pronogakari, Suruthimar (including those Suruthimar who call themselves as Moopanar,Nathmar including those Nathmar who call themselves as Nainar)",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-6.pdf",
    },
    {
      name: "Thoriyar Badaga, Thoriyar of Nilgiris, Nangudi Vellalar, Pulavar",
      link: "",
    },
    {
      name: "Vellalar, Devendra Kula Vellalar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-7.pdf",
    },
    {
      name: "Podikara Vellalar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-8.pdf",
    },
    {
      name: "Reddy (Ganjam)",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-10.pdf",
    },
    {
      name: "Andi Pandaram, Bakthwi Jangan, Maniagar, Lingayat Pandaram, Pulavar Thamiran, Yogeeswarar, Jangama",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-11.pdf",
    },
    {
      name: "Reddy/Reddiyar, Orugunta Reddy, Kaniyala vellalar, O.P.S. vellalar, Arunattu vellalar, Paiyar Kotila vellalar, Moondrunauadi Embathunalu, Sozhiya vellalar Kudi Kara vellalar, Qitruvalainattu vellalar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-12.pdf",
    },
    {
      name: "Velar synonym of Kuala",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-13.pdf",
    },
    {
      name: "Sheik, Syed, Ansal, Kasukkara Chetliar, Karopora Chetliar, Agaram vellalar Chetliar, Sundaram Chethy, Unikkara Nayakkar, Ukkrakulu İsahatiya Naicker",
      link: "",
    },
    {
      name: "Servai",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-15.pdf",
    },
    {
      name: "Rowthar as a synonym of Labhai, Kuqa Vellalar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-16.pdf",
    },
    {
      name: "Arya Vaishya, Ayira Vaishya, Bhatlachar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-17.pdf",
    },
    {
      name: "Pooluva Gounder, Synonym of Pulluvar or Pooluvar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-18.pdf",
    },
    {
      name: "Kongu Vaishnavar, Padmanabar, Mukkulava synonym of Christian Meenavar, Chowdry",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-19.pdf",
    },
    {
      name: "Kannadiya Naidu",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-20.pdf",
    },
    {
      name: "Kallar Kula Thondamar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-21.pdf",
    },
    {
      name: "Thiyya, Jain Nainar",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-22.pdf",
    },
    {
      name: "Okkaliga Gowda",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-23.pdf",
    },
    {
      name: "Kammalar or Viswakarma, Viswakammala (including Thaftar, Porkollar, Kannar, Karumar, Kollar, Thacher, Kalthacher, Kamsala and Viswabrahmin)",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-25.pdf",
    },
    {
      name: "Kurumba (where they are not Scheduled Tribes), Kurumba Gounder",
      link: "https://ncbc.nic.in/Writereaddata/AddTamil-24.pdf",
    },
    {
      name: "Latin Catholic Christian Vannar (in Kanniyakumari District)",
      link: "https://ncbc.nic.in/Writereaddata/Latin%20Catholic%20Christian%20Vannar%20(in%20Kanniyakumari%20District)635300497709836910.pdf",
    },
    {
      name: "Thoraiyar (Plains)",
      link: "https://ncbc.nic.in/Writereaddata/Thoraiyar%20(Plains)635300495531628453.pdf",
    },
    {
      name: "Erraqollar",
      link: "https://ncbc.nic.in/Writereaddata/Erragollar635300496231539204.pdf",
    },
    {
      name: "Agaram Vellan Chetliar",
      link: "https://ncbc.nic.in/Writereaddata/Agaram%20Vellan%20Chettiar635300496867598973.pdf",
    },
    {
      name: "Chodwry",
      link: "https://ncbc.nic.in/Writereaddata/Chodwry635300507197482638.pdf",
    },
    {
      name: "Lingayat",
      link: "https://ncbc.nic.in/Writereaddata/Lingayat635300502312007598.pdf",
    },
    {
      name: "Servai",
      link: "https://ncbc.nic.in/Writereaddata/Servai635300494558513506.pdf",
    },
    {
      name: "Reddy (Ganjam)",
      link: "https://ncbc.nic.in/Writereaddata/Reddy%20(Ganjam)%202015%20Pandey635705686536355761.pdf",
    },
  ],
  Rajasthan: [
    {
      name: "Kansara Bharawar, Wazir",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-1.pdf",
    },
    {
      name: "Tamboli (Chaurasia, Kumi), Kumrawal",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-2.pdf",
    },
    {
      name: "Gujar (Muslim), Lobar (Muslim), Nai (Muslim), Muasi (Muslim), Sairi and Bagwan",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-3.pdf",
    },
    {
      name: "Dhobi excluding SCs",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-4.pdf",
    },
    {
      name: "Duvashi, Manihar, Sakka Bhisti, Sespa Bhisti, Bhistri Akbasi, Modif excluding SCs",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-5.pdf",
    },
    {
      name: "Mansoori, Lodh, Dyer, Rangrez, Nilgar",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-6.pdf",
    },
    {
      name: "Jat (Part-1)",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-7a.pdf",
    },
    {
      name: "Jat (Part-2)",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-7b.pdf",
    },
    {
      name: "Jat (Part-3)",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-7c.pdf",
    },
    {
      name: "Gaur Brahman",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-8.pdf",
    },
    { name: "Chungar", link: "https://ncbc.nic.in/Writereaddata/AddRaj-9.pdf" },
    {
      name: "Sirvi, Dari",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-10.pdf",
    },
    {
      name: "Panchal, Panchal Brahman, Vishwakarma and Sharma, Saifi",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-11.pdf",
    },
    {
      name: "Bhavasar",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-12.pdf",
    },
    {
      name: "Kayastha",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-13.pdf",
    },
    { name: "Yati", link: "https://ncbc.nic.in/Writereaddata/AddRaj-14.pdf" },
    {
      name: "Jachak Jaga",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-15.pdf",
    },
    {
      name: "Damani, Nagarchi",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-16.pdf",
    },
    {
      name: "Andor Kotiyan, Ander Kot",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-17.pdf",
    },
    {
      name: "Adi-Gaur Brahmari",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-18.pdf",
    },
    { name: "Sain", link: "https://ncbc.nic.in/Writereaddata/AddRaj-19.pdf" },
    {
      name: "Bairagi",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-20.pdf",
    },
    {
      name: "Faehl/Fasul/Koshin,Chishand Nasabhandias are not included,Kumawat,Kashhi-Kushwaha, Kashhi-Shakyu, Maurya",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-21.pdf",
    },
    {
      name: "Baid nai",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-22.pdf",
    },
    {
      name: "Bangson Brahmari, Tamgal (Muslim), Tiao Rajpur",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-23.pdf",
    },
    { name: "Joshi", link: "https://ncbc.nic.in/Writereaddata/AddRaj-24.pdf" },
    {
      name: "Sunzu, Soni",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-25.pdf",
    },
    {
      name: "Sipahi (Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-26.pdf",
    },
    {
      name: "Vachat Rahval",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-27.pdf",
    },
    {
      name: "Darosa Rajdi",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-28.pdf",
    },
    {
      name: "Kasai, Hammal, Paladar, Kasab, Qureshi",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-29.pdf",
    },
    {
      name: "Rayon/Rayoon, Kunji",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-30.pdf",
    },
    {
      name: "Bisavati and Machuarzi",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-31.pdf",
    },
    { name: "Gadaf", link: "https://ncbc.nic.in/Writereaddata/AddRaj-32.pdf" },
    { name: "Kabli", link: "https://ncbc.nic.in/Writereaddata/AddRaj-33.pdf" },
    {
      name: "Rai-Siki, Bhattar, Karambkani/Muslim, Guru, Garu, Gara Brahmari, Sheikh Farsouil as a synonym of Bhattar",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-34.pdf",
    },
    { name: "Bishma", link: "https://ncbc.nic.in/Writereaddata/AddRaj-35.pdf" },
    {
      name: "Silovasi (excreti Sompura Murikar)",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-36.pdf",
    },
    {
      name: "Chohdar, Sidith, Rajput, Paidar, Kulmi, Kumi and Patel, Darqi, Ariana, Salju, Rahpro as sub-casket synonyms of Tsii Ghanchi, Kekri/Kekami",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-37.pdf",
    },
    {
      name: "Pulari (Sevak)",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-38.pdf",
    },
    {
      name: "Rangasami (Adbhopa), Nishad, Bhisti, Gayri, Mev, Sindhi Musalman, Deshwali",
      link: "https://ncbc.nic.in/Writereaddata/AddRaj-38.pdf",
    },
  ],
  Puducherry: [
    {
      name: "Ansar, Agaram Vellan Chettiar, Dombs, Donga Dasari, Kaladi, Kaliar Kula Thondaman, Kalveli Gounder, Kambar, Kannadiya Naidu, Karpora Chettiar, Katesar, Patlamkatti, Malayar, Ovachar, Paiyur Kotta Vellalar, Panar, Panisaivan, Panirandam Chettiar, Podikara Vellalar, Pooluva Gounder, Salivagana, Savalakarar, Ukkirakula Kshatriya Naicker, Urikkara Nayakar, Vellan Chettiar, Yavana, Punnam Nattuva Gounder, Valaiyar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl1.pdf",
    },
    {
      name: "Reddy/Reddiars, Ayira Vaisya Chetty, Sozhia Vellalar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl2.pdf",
    },
    {
      name: "Sozhia Chetty, Kannadiyar/Kannada Saineegar, Kongu Vellalar, Karuneegar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl3.pdf",
    },
    {
      name: "Sadhu Chetty, Telugu Chetty, Telugupatty Chetty, 24-Manai Telugu Chetty",
      link: "https://ncbc.nic.in/Writereaddata/addpudl4.pdf",
    },
    {
      name: "Reddy (Ganjam)",
      link: "https://ncbc.nic.in/Writereaddata/addpudl5.pdf",
    },
    {
      name: "Navithar, Maruthuvar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl6.pdf",
    },
    {
      name: "Sheik, Syed, Kaniyala Vellalar, Kasukkara Chetty, Sundaram Chetty",
      link: "https://ncbc.nic.in/Writereaddata/addpudl7.pdf",
    },
    {
      name: "Vallambar, Chowdry, Servai, Thattar, Porkollar, Karumarm Kollar, Thatchar, Kalthatcher & Karuvan as synonyms of Kammalan",
      link: "https://ncbc.nic.in/Writereaddata/addpudl8.pdf",
    },
    {
      name: "Meenavar-Sembadavar, Meenavar-Chinnapattanavan, Meenavar-Periapattanavan",
      link: "https://ncbc.nic.in/Writereaddata/addpudl9.pdf",
    },
    {
      name: "Yerukula",
      link: "https://ncbc.nic.in/Writereaddata/addpudl10.pdf",
    },
    {
      name: "Gurukkal alias Archakar, Bhattacharyas, Purohits, Brahmin Iyer, Franco Indian (Creole), Nathamar Udayar, Malayamar Udayar, Surdhimar Udayar, Kamma Naidu, Balija Naidu, Kaikolan Mudaliar, Konaimuthous Adidravidar, Sorukattai Adidravidar, Sowrashtra, Archakarai Vellalar, Bagasalai Vellalar, Karukatha Vellalar, Thuluva Vellalar, Kanjam Reddy, Kokanad Reddiar, Band Reddiar, Thelungu Reddiar, Konda Reddy, Devanger Chettiar, Vaniya Chettiar, Seda Chettiar, Meenava Chettiar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl11.pdf",
    },
    {
      name: "Lingayat",
      link: "https://ncbc.nic.in/Writereaddata/addpudl12.pdf",
    },
    {
      name: "Vokkaliga",
      link: "https://ncbc.nic.in/Writereaddata/addpudl13.pdf",
    },
    {
      name: "Deccani Muslim",
      link: "https://ncbc.nic.in/Writereaddata/addpudl14.pdf",
    },
    {
      name: "Moopan, Panickar, Illathu Pillaimar, Illavar, Eluver, Illathar, Gounder",
      link: "https://ncbc.nic.in/Writereaddata/addpudl15.pdf",
    },
    {
      name: "Namdev Maratha",
      link: "https://ncbc.nic.in/Writereaddata/addpudl16.pdf",
    },
    {
      name: "Senaithalaivar Christian",
      link: "https://ncbc.nic.in/Writereaddata/addpudl17.pdf",
    },
    {
      name: "Christian Nadar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl18.pdf",
    },
    { name: "Muslim", link: "https://ncbc.nic.in/Writereaddata/addpudl19.pdf" },
    {
      name: "Kapu, Telaga, Balija, Ontari",
      link: "https://ncbc.nic.in/Writereaddata/addpudl20.pdf",
    },
    {
      name: "Chakkala, Chatadi (Chattada or Srivaishnava), Irulas, Isai Vallalar, Kammalana, Kamsalas, Kuyavar, Kulala, Kumbaran, Labbai, Mangala (Nayee-Brahman), Muttiriyan/Muthiriyar, Naniar, Narikoravan, Nokka, Padayachi, Pranopkari, Rauther, Thiya, Vanniyakula Kshatriya, Vettaikaran",
      link: "https://ncbc.nic.in/Writereaddata/addpudl21.pdf",
    },
    {
      name: "Khatri, Mannudayar/Pathar/Poonul Kuyavar/Vellar, Latin Catholics, Mahratta (Non-Brahmin) Including Khatik, Parkavakulam Pillai/Parkavakulam Udaiyar, Pattu Chettiar, Salia Chettiar, Vadamalai Chettiar, Maricar/Saibu, Valayal Naidu/Cavara Naidu/Gavarlu, Kannar/Pathar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl22.pdf",
    },
    {
      name: "Ottar, Vannan, Vannar, Ekali, Mannan, Rajaka, Chakkali, Jangamar, Nattar, Salian, Saliar, Pattu Saliar, Saliars, Udayar, Parkavakulam Moopanar, Vadugan",
      link: "https://ncbc.nic.in/Writereaddata/addpudl23.pdf",
    },
    {
      name: "Gollalu, Pariyari, Ezhuthachan/Ezhuthachans",
      link: "https://ncbc.nic.in/Writereaddata/addpudl24.pdf",
    },
    {
      name: "Senai Thalaivar",
      link: "https://ncbc.nic.in/Writereaddata/addpudl25.pdf",
    },
    {
      name: "Vadabalija",
      link: "https://ncbc.nic.in/Writereaddata/Vadabalija635300532889402260.pdf",
    },
  ],
  "Madhya Pradesh": [
    { name: "Kurmi", link: "https://ncbc.nic.in/Writereaddata/addmadpl1.pdf" },
    {
      name: "Mali (Saini), Marar, Teli (Rathore, Sahu), Kunbi",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl2.pdf",
    },
    {
      name: "Dheemar, Nishad, Kewat",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl1.pdf",
    },
    {
      name: "Ghoshi, Raine, Meo, Koyari/Koiri, Shakya, Murai, Sonkar and Panara, Nai (Barber), Pinjara (Hindu)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl3.pdf",
    },
    {
      name: "Saifi and Naguri Luhar",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl4.pdf",
    },
    {
      name: "Jat (Part-1)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl6.pdf",
    },
    {
      name: "Jat (Part-2)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl6a.pdf",
    },
    {
      name: "Jat (Part-3)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl6b.pdf",
    },
    {
      name: "Rajwar, Sein, Savita, Shrivas",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl7.pdf",
    },
    {
      name: "Patidar, Kurmi, Kulmi, Kulambi, Gavel/Gabhel",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl8.pdf",
    },
    {
      name: "Kahra, Panika",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl9.pdf",
    },
    {
      name: "Mahapatra",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl10.pdf",
    },
    {
      name: "Gehlot Mewara, Halwai (Modanwal)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl11.pdf",
    },
    {
      name: "Dhangar, Gaadri, Gadaria",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl12.pdf",
    },
    {
      name: "Dhuri or Dhoori",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl13.pdf",
    },
    {
      name: "Agharia, Kalaigar, Pemdi",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl14.pdf",
    },
    {
      name: "Salmani, Nalband",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl15.pdf",
    },
    {
      name: "Mirdha (excluding Jat Muslims)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl16.pdf",
    },
    {
      name: "Mansoori",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl17.pdf",
    },
    {
      name: "Julaha-Ansari, Momin-Ansari",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl18.pdf",
    },
    {
      name: "Nat (other than those included in the list of SCs)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl19.pdf",
    },
    {
      name: "Multani Lohar",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl20.pdf",
    },
    {
      name: "Niyargar, Niargar-Multani, Niyaria",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl21.pdf",
    },
    {
      name: "Usmani as synonym of Teli, Nayata, Pindari",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl22.pdf",
    },
    {
      name: "Nagavamsam",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl23.pdf",
    },
    {
      name: "Kamlapuri Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl24.pdf",
    },
    {
      name: "Chippa-Sindhi-Khatri as synonym of Chippa",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl25.pdf",
    },
    {
      name: "Thath as synonym of Teli (Rathore, Sahu)",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl26.pdf",
    },
    {
      name: "Bhisti-Abbasi as synonym of Bhishti",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl27.pdf",
    },
    {
      name: "Agrahari Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl28.pdf",
    },
    { name: "Rawat", link: "https://ncbc.nic.in/Writereaddata/addmadpl29.pdf" },
    {
      name: "Yaduvanshi",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl30.pdf",
    },
    {
      name: "Qassab-Qureshi, Kasai, Kasab",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl31.pdf",
    },
    { name: "Tanti", link: "https://ncbc.nic.in/Writereaddata/addmadpl32.pdf" },
    {
      name: "Hammal/Palledar",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl33.pdf",
    },
    { name: "Gaddi", link: "https://ncbc.nic.in/Writereaddata/addmadpl34.pdf" },
    {
      name: "Sodhi, Sodi, Sundi, Sondi, Sondik, Behra-Sondi",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl35.pdf",
    },
    {
      name: "Mukeri, Makrani as a synonym of Banjara",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl36.pdf",
    },
    {
      name: "Kaurav, Kanwnra, Kaunrae",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl37.pdf",
    },
    {
      name: "Bargahi, Bargah, Bari, Mina (Rawat) Deshwali, Dhariya, Dhoshi (Gadariya), Gadariya (Pal Baghele), Panwar, Hunga Lohar, Garola, Lohar (Vishwakarma), Kurumvanshi, Chandrakar, Chandra Nahu, Kumbhi Gavel (Gamel), Sirvi",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl38.pdf",
    },
    { name: "Salwi", link: "https://ncbc.nic.in/Writereaddata/addmadpl39.pdf" },
    {
      name: "Kalotha, Khairuwa",
      link: "https://ncbc.nic.in/Writereaddata/addmadpl40.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/JAT%202014635568349602814958.pdf",
    },
    {
      name: "Kamariya",
      link: "https://ncbc.nic.in/Writereaddata/Kamariya,%20Pandey635705699909852508.pdf",
    },
    {
      name: "Rajak",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO%2067%20MP%202015%20RI%20DK%20Pandey636205193765990250.pdf",
    },
    {
      name: "Otari, Kaser",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO64%20MP%202015%20RI%20DK%20Pandey636205194860058569.pdf",
    },
    {
      name: "Sai, Shah, KabraKhodu",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO78%20MP%202015%20RI%20DK%20Pandey636205195643334047.pdf",
    },
  ],
  Karnataka: [
    {
      name: "Chapparband",
      link: "https://ncbc.nic.in/Writereaddata/addkar1.pdf",
    },
    { name: "Kunchi", link: "https://ncbc.nic.in/Writereaddata/addkar2.pdf" },
    {
      name: "Pichiguntala",
      link: "https://ncbc.nic.in/Writereaddata/addkar3.pdf",
    },
    { name: "Medara", link: "https://ncbc.nic.in/Writereaddata/addkar4.pdf" },
    { name: "Kaensar", link: "https://ncbc.nic.in/Writereaddata/addkar5.pdf" },
    { name: "Kuruba", link: "https://ncbc.nic.in/Writereaddata/addkar6.pdf" },
    { name: "Mudhar", link: "https://ncbc.nic.in/Writereaddata/addkar7.pdf" },
    { name: "Mukkavah", link: "https://ncbc.nic.in/Writereaddata/addkar8.pdf" },
    {
      name: "Vokkaliga",
      link: "https://ncbc.nic.in/Writereaddata/addkar9.pdf",
    },
    {
      name: "Sappaliga",
      link: "https://ncbc.nic.in/Writereaddata/addkar10.pdf",
    },
    {
      name: "Nikalmakkalu, Talwar, Modikar, Full-Mali, Bhavin and Binapatta, Bogodi, Chunchar, Digwan, Jingar, Giddidki, Kuruva, Kusavan, Uppunador, Kalal",
      link: "https://ncbc.nic.in/Writereaddata/addkar11.pdf",
    },
    {
      name: "Kallu Kutiga Uppara, Melu Sakkreyavaru, Namada Uppara, Sunna Uppara, Sunnagara, Padti, Uppaliga, Uppaliga Shetty, Uppar, Sagar",
      link: "https://ncbc.nic.in/Writereaddata/12a.pdf",
    },
    {
      name: "Kerebandiyavaru, Savitha, Bandari, Bajanthri/Bhajanthri, Mahale, Hadapada",
      link: "https://ncbc.nic.in/Writereaddata/12b.pdf",
    },
    {
      name: "Pariyala, Pattasale, Pinjara, Pinjari, Nadaf, Ladaf, Dhunia, Mansoori Dedukula",
      link: "https://ncbc.nic.in/Writereaddata/addkar13.pdf",
    },
    {
      name: "Lonari, Chittara, Chittari",
      link: "https://ncbc.nic.in/Writereaddata/addkar14.pdf",
    },
    {
      name: "Komarpant, Kumara Panth, Komarpaik, Kashatriya Komarpant, Yakalara, Yekkali, Vannikula Kshatriya",
      link: "https://ncbc.nic.in/Writereaddata/addkar15.pdf",
    },
    {
      name: "Synonyms of Goniga, Sadu Setty, 24 Mane Telugu Chetty, 24 More Telugu Chettiar, Sanapparu, Janapparu, Dasai Chetty, Deshadhipathi Telugu Chetty, Pruthviswara Vamastharu, Galadakonkavi, Kottari, Kotari, Kottary, Ezhava, Thiyya",
      link: "https://ncbc.nic.in/Writereaddata/addkar16.pdf",
    },
    { name: "Urs", link: "https://ncbc.nic.in/Writereaddata/addkar17.pdf" },
    {
      name: "Kamma, Namdhari Nagartha, Bunt alias Nadava",
      link: "https://ncbc.nic.in/Writereaddata/addkar18.pdf",
    },
    { name: "Nairy", link: "https://ncbc.nic.in/Writereaddata/addkar19.pdf" },
    {
      name: "Maratha and Arya Maratha, Karuneeka (Kanakapillai)",
      link: "https://ncbc.nic.in/Writereaddata/addkar20.pdf",
    },
    {
      name: "Vaisya Brahmin, Vaishya Vani, Vani",
      link: "https://ncbc.nic.in/Writereaddata/addkar21.pdf",
    },
    {
      name: "Kunchitiga",
      link: "https://ncbc.nic.in/Writereaddata/addkar22.pdf",
    },
    { name: "Koyava", link: "https://ncbc.nic.in/Writereaddata/addkar23.pdf" },
    {
      name: "Agamudi, Mala Hegde",
      link: "https://ncbc.nic.in/Writereaddata/addkar24.pdf",
    },
    {
      name: "Lingayat Group",
      link: "https://ncbc.nic.in/Writereaddata/addkar25.pdf",
    },
    {
      name: "Kuruba/Kurubaru, Medhar, Kuruhinashetty/Hatagar/Jadaru/Bilimagga, Simpy/Sivasimpy, Bilijedaru/Jeda, Neygi/Nekar/Neyge/Neelgar, Agasa/Madivala, Banagar, Gowli/Gauli/Kawadiga, Balegara/Baleshettaru, Jeer/Hugar/Hoogara/Hoogaran/Malgar/Gurav, Ganiga/Ganigar/Sajjans/Sajjanaganigar, Kammara/Badiga/Kammasali/Akkasali, Nayinda/Bajantri/Hadapada/Bandari, Kumbar/Kumbara, Uppara/Sunnagara, Aradhya/Jangama, Panchacharu/Panchamasali, Lingayat (all lingayat castes/communities other than the above)",
      link: "https://ncbc.nic.in/Writereaddata/addkar26.pdf",
    },
    {
      name: "Reddy, Munnur Kapu, Uppar, Teluru",
      link: "https://ncbc.nic.in/Writereaddata/addkar26.pdf",
    },
    {
      name: "Balayaya",
      link: "https://ncbc.nic.in/Writereaddata/addkar27.pdf",
    },
    {
      name: "Banajiga, Setty Banajiga, Telugu Banajiga, Bale Banajiga, Dasa Banajiga",
      link: "https://ncbc.nic.in/Writereaddata/addkar28.pdf",
    },
    {
      name: "Halakshatriya",
      link: "https://ncbc.nic.in/Writereaddata/addkar29.pdf",
    },
    {
      name: "Somakshatriya",
      link: "https://ncbc.nic.in/Writereaddata/addkar30.pdf",
    },
    {
      name: "Bhandari, Siddi",
      link: "https://ncbc.nic.in/Writereaddata/addkar31.pdff",
    },
    {
      name: "Baghban, Pandara, Muslim",
      link: "https://ncbc.nic.in/Writereaddata/addkar32.pdf",
    },
    {
      name: "Poladavaru",
      link: "https://ncbc.nic.in/Writereaddata/addkar33.pdf",
    },
    {
      name: "Goud Saraswat Brahmin",
      link: "https://ncbc.nic.in/Writereaddata/addkar34.pdf",
    },
    {
      name: "Uppina Kolaga Vokkaliga",
      link: "https://ncbc.nic.in/Writereaddata/addkar35.pdf",
    },
    {
      name: "Rama Kshatriya, Ramaraja Kshatriya, Servegara (South Kanara), Serugara (North Kanara), Koteyar, Kotegara, Kotegar/Kotekar as synonyms of Kotekshatriya",
      link: "https://ncbc.nic.in/Writereaddata/addkar36.pdf",
    },
    {
      name: "Kumbri Maratha (belonging to Uttara Kannada district), Kulvadi (Sudra) Marati (belonging to Uttara Kannada district)",
      link: "https://ncbc.nic.in/Writereaddata/addkar37.pdf",
    },
    {
      name: "Gouda/Gowda as a sub-caste of Vokkaliga",
      link: "https://ncbc.nic.in/Writereaddata/addkar38.pdf",
    },
    {
      name: "Telugu Gowda",
      link: "https://ncbc.nic.in/Writereaddata/addkar39.pdf",
    },
    {
      name: "Namadhari Gowda",
      link: "https://ncbc.nic.in/Writereaddata/addkar40.pdf",
    },
    {
      name: "Vokkalliga (Urban Areas)",
      link: "https://ncbc.nic.in/Writereaddata/addkar41.pdf",
    },
    {
      name: "Kunchitiga",
      link: "https://ncbc.nic.in/Writereaddata/addkar42.pdf",
    },
    {
      name: "Aryakshatriya, Sarige, Somavamsha Arya Kshatriya",
      link: "https://ncbc.nic.in/Writereaddata/addkar43.pdf",
    },
    {
      name: "Hindu Sadaru",
      link: "https://ncbc.nic.in/Writereaddata/addkar44.pdf",
    },
    {
      name: "Shivachara Nagartha",
      link: "https://ncbc.nic.in/Writereaddata/addkar45.pdf",
    },
    {
      name: "Nadar, Hallikara",
      link: "https://ncbc.nic.in/Writereaddata/addkar46.pdf",
    },
    { name: "Pagi", link: "https://ncbc.nic.in/Writereaddata/addkar47.pdf" },
    {
      name: "Gam Vokkal, Grama Vokkalu",
      link: "https://ncbc.nic.in/Writereaddata/addkar48.pdf",
    },
    {
      name: "Jogi, Brahma Kapali, Joger, Jogtin, Kapali, Raval, Ravalia, Sanjogi, Jogar",
      link: "https://ncbc.nic.in/Writereaddata/addkar49.pdf",
    },
    {
      name: "Kasai, Katik, Khatik, Katuka, Katuga, Aray, Are Kasai, Ari Katikelu, Kalal Khatik, Kasab, Maratti, Suryavamsha Kshatriya",
      link: "https://ncbc.nic.in/Writereaddata/addkar50.pdf",
    },
    {
      name: "Ladar, Lad/Kshatriya Lad/Sugandhi Lad, Ladaru/Ladara, Yelegar",
      link: "https://ncbc.nic.in/Writereaddata/addkar51.pdf",
    },
    {
      name: "Medara, Medari, Lingayat Medhar, Batter, Burned, Gauriga, Gouriga, Gowri, Gowrimaratha, Gowriga, Burud",
      link: "https://ncbc.nic.in/Writereaddata/addkar52.pdf",
    },
    {
      name: "Golla, Gouli, Lingayat Gowli/Gouli/Kawadiga, Gavali, Gavli, Konar, Konnur, Krishna Gaveli, Gopal, Yadav, Asthanagolla, Yadava, Adavigolla, Gopala, Gopali, Maniyani",
      link: "https://ncbc.nic.in/Writereaddata/addkar53.pdf",
    },
    {
      name: "Idiga, Belchad, Poojari, Desha Bhandari, Ediga, Eliga, Illiga, Gamalla, Halepaik, Halepaikaru, Billava, Devar, Malayali, Billava, Deevar, Devaramakkalu, Divaramakkalu, Namdhari, Kalal, Goundia, Goondla, Thiyan, Thiyyan, Tiyan, Ezhava, Thiyya",
      link: "https://ncbc.nic.in/Writereaddata/addkar54.pdf",
    },
    {
      name: "Kumbara, Chakrasali, Gunaga, Ganagi, Kula, Kummara, Khumara, Kumbhar, Kumbard, Khumbhar, Lingayat Kumbar/Kumbara, Kusavan, Kulala, Kulalar, Moolya, Sajjan Kumbara",
      link: "https://ncbc.nic.in/Writereaddata/addkar55.pdf",
    },
    {
      name: "Neygi, Kurni, Thogataru/Thogatiga/Thogataveera/Thogatagera/Thoagataveera Kshatriya, Thogaja Pushpanjali, Padma Shali, Padma Sali, Pattasale, Pattasali, Lingayat Neygi/Nekar/Neygi, Kurushinasetty, Lingayat Kurushinasetty, Bilimagga, Lingayat Bilimagga Thogata, Soniga, Jamkhana, Ayiri, Avir, Sale, Padmasale, Saale, Kaikolan, Sengundhar, Neikar, Jandra, Jadar, Lingayat Jadaru, Sakulasale",
      link: "https://ncbc.nic.in/Writereaddata/addkar56.pdf",
    },
    {
      name: "Viswakarma, Akkasale, Aksali, Lingayat Akkasali, Achari, Badigar, Bailapatra, Bailu Akkasali, Bailu Kammara, Konkani Achar, Viswa Brahman, Daivanga Brahman, Kammar, Lingayat Kammara, Ausala, Kambar, Kamsan, Kanchagar, Kanchora, Kammalan, Luhar (Kammari), Kamsal, Lingayat Kammasali, Kamasala, Panchal, Panchala, Mesta, Sutar, Badagi, Lingayat Badiga, Badiwadli, Soni, Sonar, Pattar, Gajjigar, Silpi, Sohagar, Tacehan, Thattan",
      link: "https://ncbc.nic.in/Writereaddata/addkar57.pdf",
    },
    {
      name: "Satani, Chattada Vaishnava, Sattada Vaishnava, Sattada Srivaishnava, Kadri Vaishnava, Chattada-Shri Vaishnava, Vaishnava, Sameraya, Sattadaval, Sattadavan",
      link: "https://ncbc.nic.in/Writereaddata/addkar58.pdf",
    },
    {
      name: "Begadi, Bagali, Budubuduki, Bududki, Chhetri, Garadi, Nairi, Jeeregar, Najabund, Padithi, Talawara/Talwar, Mysa Nayaka, Urs Nayaka, Byada, Bargi, Hirshikari, Bovi, Mansuri, Padiar, Seregara, Vajantri (Uttara Kannada District), Gadiga, Gunagi, Upanador/Upa Nadavar, Vaniyan",
      link: "https://ncbc.nic.in/Writereaddata/addkar59.pdf",
    },
    {
      name: "Baggaru, Dasari, Dasaru, Chakravadya Dasa, Ghisade, Jangala, Telugu Jangam, Pakanathi Jangama, Kodagu Kapala, Kumbri Marati (Uttara Kannada District), Girini Waddar, Tudug Woddar, Kallu Vaddar, Mannu Voddar, Bhandi Vaddar, Banna (Kodagu District), Kodagu (Heggade) (Kodagu Dist), Amma Kodava",
      link: "https://ncbc.nic.in/Writereaddata/addkar60.pdf",
    },
    {
      name: "Ambi, Barika, Rajabhoi, Gangamathastha, Jalagara, Kabber, Konkan Kharvi, Koli, Kolimahadev, Maddar (as synonyms of Bestha)",
      link: "https://ncbc.nic.in/Writereaddata/addkar61.pdf",
    },
    {
      name: "Darzi, Bhavasar Kshatriya, Chippi, Chippiga, Simpi, Shimpi, Lingayat Simpy, Sivasimpy, Sai, Mirai, Rangari, Rangrez, Nilari, Namdev, Mandev Simpy, Rangare, Neelagar, Lingayat Neelagar",
      link: "https://ncbc.nic.in/Writereaddata/addkar62.pdf",
    },
    {
      name: "Kalavanthi",
      link: "https://ncbc.nic.in/Writereaddata/Kalavanthi635300604218572859.pdf",
    },
    {
      name: "Kodagaru",
      link: "https://ncbc.nic.in/Writereaddata/Kodagaru635300604575578342.pdf",
    },
    {
      name: "Raya Rawath, Ravat",
      link: "https://ncbc.nic.in/Writereaddata/Raya%20Rawath,%20Ravat635300604992334744.pdf",
    },
    {
      name: "Daveri",
      link: "https://ncbc.nic.in/Writereaddata/Daveri635300605392090884.pdf",
    },
    {
      name: "Garudi, Garudiga, Garadiga",
      link: "https://ncbc.nic.in/Writereaddata/Garudi,%20Garudiga,%20Garadiga635300605763921595.pdf",
    },
    {
      name: "Andi, Andipandaram",
      link: "https://ncbc.nic.in/Writereaddata/Andi,%20Andipandaram635300606101726784.pdf",
    },
    {
      name: "Bolahallala, Ballala",
      link: "https://ncbc.nic.in/Writereaddata/Bolahallala,%20Ballala635300607066366600.pdf",
    },
    {
      name: "Bhatial, Bhattia",
      link: "https://ncbc.nic.in/Writereaddata/Bhatial,%20Bhattia635300607440547348.pdf",
    },
    {
      name: "Banagara",
      link: "https://ncbc.nic.in/Writereaddata/Banagara635300614401004259.pdf",
    },
    {
      name: "Somavamsha Sahasrarjuna Kshatriya",
      link: "https://ncbc.nic.in/Writereaddata/Somavamsha%20Sahasrarjuna%20Kshatriya635300615286142854.pdf",
    },
    {
      name: "Sadaru, Sadunata, Sadkula, Sadar, Sadu Gowda, Sadu Gowdar, Sadara, Sadari, Sadara Gowda",
      link: "https://ncbc.nic.in/Writereaddata/Sadaru635301551509698027.pdf",
    },
    {
      name: "Gamalla",
      link: "https://ncbc.nic.in/Writereaddata/Gamalla635301551922879373.pdf",
    },
    {
      name: "Agnivanni",
      link: "https://ncbc.nic.in/Writereaddata/Agnivanni635301552248734379.pdf",
    },
    {
      name: "Agni Vamsha Kshatriya",
      link: "https://ncbc.nic.in/Writereaddata/Agni635301552757942200.pdf",
    },
    {
      name: "Medara",
      link: "https://ncbc.nic.in/Writereaddata/Medara635301553237499566.pdf",
    },
    {
      name: "Banjari, Brinjari, Vanjara, Eanjari, Lambaid, Gore or Goria",
      link: "https://ncbc.nic.in/Writereaddata/Banjari635301557702743151.pdf",
    },
    {
      name: "Killikyata as synonym of Budubuduki",
      link: "https://ncbc.nic.in/Writereaddata/Killikyata635301558624257305.pdf",
    },
    {
      name: "Uppara, Uppar, Uppera, Lingayat Uppaa, Sunnagara, Uppaliyan",
      link: "https://ncbc.nic.in/Writereaddata/Uppara635301559357418566.pdf",
    },
  ],

  Telangana: [
    {
      name: "Mehtar (Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756080615151576.pdf",
    },
    {
      name: "Agnikulakshatriya, Palli, Vadabalija, Bestha, Jalari, Gangavar, Gangaputra, Goondla, Vanyakulakshatriya (Vannekapu,Vannereddi, Pallikapu, Pallireddi) Neyyala, Pattapu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755990151624248.pdf",
    },
    {
      name: "Balasanthu, Bahurupi",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755990663024457.pdf",
    },
    {
      name: "Budabukkala",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755991719348315.pdf",
    },
    {
      name: "Rajaka (Chakali, Vannar)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755992292943172.pdf",
    },
    {
      name: "Dasari (formerly engaged in Bikshatana i.e., Beggary)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755992635328664.pdf",
    },
    {
      name: "Dommara",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755992903727802.pdf",
    },
    {
      name: "Gangiredlavaru",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755993512648874.pdf",
    },
    {
      name: "Jangam (whose traditional occupation is begging)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755993790438152.pdf",
    },
    {
      name: "Jogi",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755994096102210.pdf",
    },
    {
      name: "Katipapala",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755994359591044.pdf",
    },
    {
      name: "Medari or Mahendra",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755994670949085.pdf",
    },
    {
      name: "Mondivaru, Mondibanda, Banda",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755995044535675.pdf",
    },
    {
      name: "Nayi-Brahmin/Nayee-Brahmin (Mangali), Mangala and Bhajantri",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755995529759798.pdf",
    },
    {
      name: "Vamsha Raj",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755998888432201.pdf",
    },
    {
      name: "Pamula",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637755999709243415.pdf",
    },
    {
      name: "Pardhi (Nirshikari)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756000090393637.pdf",
    },
    {
      name: "Pambala",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756000546856508.pdf",
    },
    {
      name: "Peddammavandlu, Devaravandlu, Yellammavandlu, Mutyalammavandlu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756001446095681.pdf",
    },
    {
      name: "Veeramushti (Nettikotala), Veerabhadreeya",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756002276569500.pdf",
    },
    {
      name: "Valmiki Boya (Boya, Bedar, Kirataka, Nishadi, Yellapi, Pedda Boya), Talayari, Chunduvallu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756002854045113.pdf",
    },
    {
      name: "Gudala",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756003188094325.pdf",
    },
    {
      name: "Kanjara Bhatta",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756003539671886.pdf",
    },
    {
      name: "Kepmare or Reddika",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756004227787461.pdf",
    },
    {
      name: "Mondepatta",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756004536062188.pdf",
    },
    {
      name: "Nokkar",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756004866267911.pdf",
    },
    {
      name: "Pariki Muggula",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756005239918884.pdf",
    },
    {
      name: "Yata",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756005553962698.pdf",
    },
    {
      name: "Chopemari",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756005877610560.pdf",
    },
    {
      name: "Kaikadi",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756006242449756.pdf",
    },
    {
      name: "Joshinandiwala",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756007994594720.pdf",
    },
    {
      name: "Odde (Oddilu, Vaddi, Vaddelu), Vaddera, Waddera",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756008469193659.pdf",
    },
    {
      name: "Mandula",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756008938073997.pdf",
    },
    {
      name: "Kunapuli",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756009224135998.pdf",
    },
    {
      name: "Aryakshatriya, Chittari, Giniyar, Chitrakara, Nakhas",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756009631138794.pdf",
    },
    {
      name: "Devanga",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756010039433473.pdf",
    },
    {
      name: "Goud, Ediga, Gouda (Gamalla), Kalalee, Goundla and Srisayana (Segidi)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756010377886744.pdf",
    },
    {
      name: "Gandla, Telikula, Devathilakula",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756010713493063.pdf",
    },
    {
      name: "Jandra",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756010988243181.pdf",
    },
    {
      name: "Kummara or Kulala, Salivahana",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756011372413364.pdf",
    },
    {
      name: "Karikalabhakthulu, Kaikolan or Kaikala (Sengundam or Sengunther)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756011841650492.pdf",
    },
    {
      name: "Karnabhakthulu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756012199373550.pdf",
    },
    {
      name: "Kuruba or Kuruma",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756014261405320.pdf",
    },
    {
      name: "Neelakanthi",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756015535520653.pdf",
    },
    {
      name: "Patkar (Khatri)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756015898603904.pdf",
    },
    {
      name: "Perika (Perika Balija, Puragiri kshatriya)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756016363264355.pdf",
    },
    {
      name: "Nessi or Kurni",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756016678733452.pdf",
    },
    {
      name: "Padmasali (Sali, Salivan, Pattusali, Senapathulu, Thogata Sali)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756017230834403.pdf",
    },
    {
      name: "Swakulasali",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756017694310294.pdf",
    },
    {
      name: "Thogata, Thogati or Thogataveerakshatriya",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756018405618954.pdf",
    },
    {
      name: "Viswabrahmin or Viswakarma (Ausula, Kamsali, Kammari, Kanchari, Vadla or Vadra or Vadrangi and Silpi)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756018764266788.pdf",
    },
    {
      name: "Scheduled Castes converts to Christianity and their progeny",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756019603997251.pdf",
    },
    {
      name: "Arekatika, Katika",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756020210936792.pdf",
    },
    {
      name: "Bhatraju",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756020790023165.pdf",
    },
    {
      name: "Chippolu (Mera)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756021227497426.pdf",
    },
    {
      name: "Hatkar",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756021505525451.pdf",
    },
    {
      name: "Jingar",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756022577195384.pdf",
    },
    {
      name: "Koshti",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756023674971378.pdf",
    },
    {
      name: "Kachi",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756024415096905.pdf",
    },
    {
      name: "Surya Balija (Kalavanthula, Ganika)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756024840277366.pdf",
    },
    {
      name: "Krishnabalija (Dasari, Bukka)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756025524545386.pdf",
    },
    {
      name: "Mathura",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756025846391433.pdf",
    },
    {
      name: "Mali (where they are not Scheduled Tribe)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756026458964933.pdf",
    },
    {
      name: "Mudiraj, Mutrasi, Tenugollu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756026778410649.pdf",
    },
    {
      name: "Munnurukapu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756027366453076.pdf",
    },
    {
      name: "Neeli",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756027722292059.pdf",
    },
    {
      name: "Poosala",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756028405025737.pdf",
    },
    {
      name: "Passi",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756028661345723.pdf",
    },
    {
      name: "Rangarez or Bhavasara Kshatriya",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756028944341447.pdf",
    },
    {
      name: "Sadhuchetty",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756029214400142.pdf",
    },
    {
      name: "Satani (Chattadasrivaishnava)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756029477592650.pdf",
    },
    {
      name: "Tammali (Non-Brahmins) (Shudra caste) whose traditional occupation is playing musical instruments, vending of flowers and giving assistance in temple service but not Shivarchakars",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756071344543837.pdf",
    },
    {
      name: "Uppara or Sagara",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756071879911205.pdf",
    },
    {
      name: "Vanjara (Vanjari)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756072462657419.pdf",
    },
    {
      name: "Yadava (Golla)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756072764101111.pdf",
    },
    {
      name: "Pala-Ekari (area confined to Hyderabad and Rangareddy Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756073099049062.pdf",
    },
    {
      name: "Ayyaraka (area confined to Khammam and Warrangal Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756074026283737.pdf",
    },
    {
      name: "Nagaralu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756074301829651.pdf",
    },
    {
      name: "Kasikapadi/Kasikapudi (area confined to Hyderabad, Rangareddy, Nizamabad, Mahaboobnagar and Adilabad Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756074636564874.pdf",
    },
    {
      name: "Lodh/Lodhi/Lodha (area confined to Hyderabad, Rangareddy, Khammam and Adilabad Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756075133691662.pdf",
    },
    {
      name: "Kurmi",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756075435585237.pdf",
    },
    {
      name: "Patra",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756075849919029.pdf",
    },
    {
      name: "Siddula",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756076215168268.pdf",
    },
    {
      name: "Sikligar/Saikalgar",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756076553824546.pdf",
    },
    {
      name: "Budubunjala/Bhunjwa/ Bhadbhunja (area confined to Hyderabad and Rangareddy Districts only)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756076865202480.pdf",
    },
    {
      name: "Lakkamarikapu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756077367246156.pdf",
    },
    {
      name: "Mehtar (Muslim)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756082089016321.pdf",
    },
    {
      name: "Dudekula, Laddaf, Pinjari or Noorbash",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756082660051725.pdf",
    },
    {
      name: "Qureshi (Muslim Butchers)",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-1637756082875788302.pdf",
    },
    {
      name: "Faqir, Fakeer",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-2637756083470640955.pdf",
    },
    {
      name: "Rajannala, Rajannalu",
      link: "https://ncbc.nic.in/Writereaddata/Telengana-Advice-3637756084002536207.pdf",
    },
  ],
  "Uttar Pradesh": [
    { name: "Prajapati", link: "https://ncbc.nic.in/Writereaddata/addup1.pdf" },
    { name: "Saini", link: "https://ncbc.nic.in/Writereaddata/addup2.pdf" },
    { name: "Halalkhor", link: "https://ncbc.nic.in/Writereaddata/addup3.pdf" },
    { name: "Nai", link: "https://ncbc.nic.in/Writereaddata/addup4.pdf" },
    {
      name: "Rangrez, Kunjara or Rayeen, Teli, Banjara, Gaddi, Gujar, Bhathiara, Manihar, Lohar, Halwai, Barhai, Nut (Excluding those who are included in the SC), Momin (Ansar), Kassab, Mirasi, Hajjam (Nai), Faqir, Naddaf (Dhunia)",
      link: "https://ncbc.nic.in/Writereaddata/addup5.pdf",
    },
    {
      name: "Dhobi (other than those who are included on SC list of U.P.)",
      link: "https://ncbc.nic.in/Writereaddata/addup6.pdf",
    },
    {
      name: "Kachhi, Kisan, Kasgar, Kunjora or Rayeen, Gaddi, Giri, Kassaib, Dafali, Nut, Bind, Bhar, Bharbhuja, Bhathiara, Murao or Murai, Muslim Kayasth, Naddaf (Dhunia), Marchha",
      link: "https://ncbc.nic.in/Writereaddata/addup7.pdf",
    },
    {
      name: "Mansoori, Ghosi",
      link: "https://ncbc.nic.in/Writereaddata/addup8.pdf",
    },
    {
      name: "Kushwaha, Shakya",
      link: "https://ncbc.nic.in/Writereaddata/addup9.pdf",
    },
    { name: "Maurya", link: "https://ncbc.nic.in/Writereaddata/addup10.pdf" },
    {
      name: "Chak, Kandu, Rangwa, Salmani",
      link: "https://ncbc.nic.in/Writereaddata/addup11.pdf",
    },
    {
      name: "Mewati, Meo, Saqqa-Bhisti, Bhisti-Abbasi, Koshta, Koshti",
      link: "https://ncbc.nic.in/Writereaddata/addup12.pdf",
    },
    {
      name: "Arakhvanshiya, Samani, Roganagar, Saifi",
      link: "https://ncbc.nic.in/Writereaddata/addup13.pdf",
    },
    {
      name: "Jat (Part-1)",
      link: "https://ncbc.nic.in/Writereaddata/addup14.pdf",
    },
    {
      name: "Jat (Part-2)",
      link: "https://ncbc.nic.in/Writereaddata/addup15.pdf",
    },
    {
      name: "Jat (Part-3)",
      link: "https://ncbc.nic.in/Writereaddata/addup16.pdf",
    },
    {
      name: "Lodhi, Lodhi-Rapur",
      link: "https://ncbc.nic.in/Writereaddata/addup17.pdf",
    },
    {
      name: "Teli Malik (Muslim), Kacher, Lakher, Ansari, Qureshi",
      link: "https://ncbc.nic.in/Writereaddata/addup18.pdf",
    },
    {
      name: "Visthapit Rajput",
      link: "https://ncbc.nic.in/Writereaddata/addup19.pdf",
    },
    {
      name: "Barber, Carpenter, Turk",
      link: "https://ncbc.nic.in/Writereaddata/addup20.pdf",
    },
    {
      name: "Yadav, Nonia, Nunere, Kasai, Qassai, Julah",
      link: "https://ncbc.nic.in/Writereaddata/addup21.pdf",
    },
    {
      name: "Pinjara, Behna, Dhunia, Dhunkar, Kandere, Kadere, Karan",
      link: "https://ncbc.nic.in/Writereaddata/addup22.pdf",
    },
    {
      name: "Sangtarash, Khumra, Hansiri",
      link: "https://ncbc.nic.in/Writereaddata/addup23.pdf",
    },
    {
      name: "Nayata, Nagori",
      link: "https://ncbc.nic.in/Writereaddata/addup24.pdf",
    },
    {
      name: "Churihar, Lakhera",
      link: "https://ncbc.nic.in/Writereaddata/addup25.pdf",
    },
    {
      name: "Patwa, Patua, Pathar",
      link: "https://ncbc.nic.in/Writereaddata/addup26.pdf",
    },
    {
      name: "Nand/Nandvanshi, Sheikh Forooqi, Hashmi Masoodi",
      link: "https://ncbc.nic.in/Writereaddata/addup27.pdf",
    },
    {
      name: "Atisbaz Darugar, Madari, Nalband Sais, Bhand, Mochi (Excluding these who are in SC list)",
      link: "https://ncbc.nic.in/Writereaddata/addup28.pdf",
    },
    {
      name: "Rajput Sikh, Bhatra Bhaatt (Brahman), Muslim Bhatt Kaviraj",
      link: "https://ncbc.nic.in/Writereaddata/addup29.pdf",
    },
    {
      name: "Teli Saha, Teli Rathore, Tatwa",
      link: "https://ncbc.nic.in/Writereaddata/addup30.pdf",
    },
    {
      name: "Verma Sonar Sunar, Gautam Brahman",
      link: "https://ncbc.nic.in/Writereaddata/addup31.pdf",
    },
    { name: "Jaiswar", link: "https://ncbc.nic.in/Writereaddata/addup32.pdf" },
    {
      name: "Ramgarhia",
      link: "https://ncbc.nic.in/Writereaddata/addup33.pdf",
    },
    { name: "Kunjara", link: "https://ncbc.nic.in/Writereaddata/addup34.pdf" },
    {
      name: "Raj (Memar), Thabai, Rajgir, Silpkar Viswakarma",
      link: "https://ncbc.nic.in/Writereaddata/addup35.pdf",
    },
    { name: "Dhakad", link: "https://ncbc.nic.in/Writereaddata/addup36.pdf" },
    {
      name: "Aheria, Ahriya",
      link: "https://ncbc.nic.in/Writereaddata/addup37.pdf",
    },
    {
      name: "Sheikh Sarvari (Pirahi), Bot",
      link: "https://ncbc.nic.in/Writereaddata/addup38.pdf",
    },
    {
      name: "Kamboj, Choudhary, Khagi, Kharagvanshi",
      link: "https://ncbc.nic.in/Writereaddata/addup39.pdf",
    },
    {
      name: "Tanwar Singhariya",
      link: "https://ncbc.nic.in/Writereaddata/addup40.pdf",
    },
    {
      name: "Charaj (Mahabrahman), Mukeri synonyms of Kasai",
      link: "https://ncbc.nic.in/Writereaddata/addup41.pdf",
    },
    {
      name: "Ror, Alwi as a synonym of Faqir, Sosar, Shah, Pindara/Pindari/Kankar",
      link: "https://ncbc.nic.in/Writereaddata/addup42.pdf",
    },
    {
      name: "Sah/Choudhary",
      link: "https://ncbc.nic.in/Writereaddata/addup43.pdf",
    },
    {
      name: "Khas Rajput, Muslim Jat, Kalwar, Kalal, Kalar, Jaiswal",
      link: "https://ncbc.nic.in/Writereaddata/addup44.pdf",
    },
    {
      name: "Agrahari Vaishya, Kamlapuri Vaishya, Roniyar Vaishya, Vaishya Samaj, Gulhare Vaishya, Bania, Umar Bania, Baranwal, Kesarwani, Kasaudhan",
      link: "https://ncbc.nic.in/Writereaddata/addup45.pdf",
    },
    { name: "Dohar", link: "https://ncbc.nic.in/Writereaddata/addup46.pdf" },
    {
      name: "Jaiswar Rajput",
      link: "https://ncbc.nic.in/Writereaddata/addup47.pdf",
    },
    {
      name: "Bismali, Pemdi and Tadvi",
      link: "https://ncbc.nic.in/Writereaddata/addup48.pdf",
    },
    {
      name: "Muslim Tawaif and Hammal",
      link: "https://ncbc.nic.in/Writereaddata/addup49.pdf",
    },
    {
      name: "Kesera, Thathera, Tamrakar, Kaliakar",
      link: "https://ncbc.nic.in/Writereaddata/addup50.pdf",
    },
    {
      name: "Mukeri, Ranki, Mekrani",
      link: "https://ncbc.nic.in/Writereaddata/addup51.pdf",
    },
    {
      name: "Kuthaliya Bora (belonging to Almora, Pithoragarh, Bageswar & Nainital distts.)",
      link: "https://ncbc.nic.in/Writereaddata/addup52.pdf",
    },
    {
      name: "People of Uttarakhand area of U.P.",
      link: "https://ncbc.nic.in/Writereaddata/addup53.pdf",
    },
    {
      name: "Sain as a synonym of Nai",
      link: "https://ncbc.nic.in/Writereaddata/addup54.pdf",
    },
    {
      name: "Hela, Lalbegi (other than those who are included in the list of SCs of U.P.)",
      link: "https://ncbc.nic.in/Writereaddata/addup55.pdf",
    },
    {
      name: "Rai Sikh (Mahatam)",
      link: "https://ncbc.nic.in/Writereaddata/addup56.pdf",
    },
    {
      name: "Baghban as a synonym of Mali",
      link: "https://ncbc.nic.in/Writereaddata/addup57.pdf",
    },
    {
      name: "Herufi as a synonym of Halalkhor",
      link: "https://ncbc.nic.in/Writereaddata/addup58.pdf",
    },
    {
      name: "Tamoli, Barai, Chaurasia",
      link: "https://ncbc.nic.in/Writereaddata/addup59.pdf",
    },
    {
      name: "Kurmi, Kurmi-Sainthwar/Kurmi-Mall",
      link: "https://ncbc.nic.in/Writereaddata/addup60.pdf",
    },
    {
      name: "Unai Sahu",
      link: "https://ncbc.nic.in/Writereaddata/addup61.pdf",
    },
    {
      name: "Kurmi-Patanwar, Gada",
      link: "https://ncbc.nic.in/Writereaddata/addup62.pdf",
    },
    {
      name: "Jat",
      link: "https://ncbc.nic.in/Writereaddata/JAT%202014635569222920127250.pdf",
    },
  ],
  Maharashtra: [
    {
      name: "Powar, Bhoyar Pawar, Bhoyar",
      link: "https://ncbc.nic.in/Writereaddata/addmh1.pdf",
    },
    {
      name: "Ansari, Koli",
      link: "https://ncbc.nic.in/Writereaddata/addmh2.pdf",
    },
    { name: "Mali", link: "https://ncbc.nic.in/Writereaddata/addmh3.pdf" },
    {
      name: "Agarhari Vaishya, Asati Vaishya, Vaishya Wani, Kulwant Wani",
      link: "https://ncbc.nic.in/Writereaddata/addmh4.pdf",
    },
    { name: "Saifi", link: "https://ncbc.nic.in/Writereaddata/addmh5.pdf" },
    {
      name: "Khatik, Kasai, Kasab, Kasai-Qureshi",
      link: "https://ncbc.nic.in/Writereaddata/addmh6.pdf",
    },
    {
      name: "Pahad, Pahadi, Vanmali, Billawa (Poojary)",
      link: "https://ncbc.nic.in/Writereaddata/addmh7.pdf",
    },
    {
      name: "Lonia, Lunia, Nunia as synonym of Nonia, Kachhi as synonym of Kachi, Kachwa, Kushwaha, Kachhawaha, Shakya, Maurya, Murai, Murav, Korai, Saini as synonym of Kachhi",
      link: "https://ncbc.nic.in/Writereaddata/addmh8.pdf",
    },
    {
      name: "Rayeen/Bagban as synonyms of Mali, Ahir Koli, Pan Koli, Bari as synonyms of Koli, Lodhi, Lodha, Lodh, Komarpant/Kumarapanth, Saini, Mourya, Sorathia Mali, Kashuva, Kushwaha as synonym of Mali, Mitna as synonym of Koli",
      link: "https://ncbc.nic.in/Writereaddata/addmh9.pdf",
    },
    {
      name: "Kalal, Kalar, Sav Kalar, Jain Kalar, Kosare Kalar, Lad Kalar, Shivhare Kalar, Zariya Kalar, Suryavanshi Kalar, Marthe Kalar, Matthe Kalar, Choukase Kalar, Rai Kalar, Dharwal Kalar, Malviya Kalar, Jaiswar Kalar",
      link: "https://ncbc.nic.in/Writereaddata/addmh10.pdf",
    },
    { name: "Kohli", link: "https://ncbc.nic.in/Writereaddata/addmh11.pdf" },
    {
      name: "Dore Gujar/Dode Gujar, Gujar, Leva or Reve Gujar, Dale Gujar, Gari Gujar, Kadava Gujar, Analas, Londari alais Bad Gujar, Khapra Gujar",
      link: "https://ncbc.nic.in/Writereaddata/addmh12.pdf",
    },
    {
      name: "Teli-Lingayat, Teli-Sahu, Teli-Rathod as sub-caste/synonym of Teli",
      link: "https://ncbc.nic.in/Writereaddata/addmh13.pdf",
    },
    {
      name: "Ganiga and Sapaliga",
      link: "https://ncbc.nic.in/Writereaddata/addmh14.pdf",
    },
    {
      name: "Ezhava/Thiyya",
      link: "https://ncbc.nic.in/Writereaddata/addmh15.pdf",
    },
    {
      name: "Gujarati Dhobi",
      link: "https://ncbc.nic.in/Writereaddata/addmh16.pdf",
    },
    {
      name: "Maratha alias Kunbi",
      link: "https://ncbc.nic.in/Writereaddata/addmh17.pdf",
    },
    { name: "Chakali", link: "https://ncbc.nic.in/Writereaddata/addmh18.pdf" },
    {
      name: "Twashta Kasar, Kansar as synonyms of Tambat",
      link: "https://ncbc.nic.in/Writereaddata/addmh19.pdf",
    },
    {
      name: "Sindhi Sonar",
      link: "https://ncbc.nic.in/Writereaddata/addmh20.pdf",
    },
    {
      name: "Kurmi as synonyms of Kunbi",
      link: "https://ncbc.nic.in/Writereaddata/addmh21.pdf",
    },
    {
      name: "Yellam/Yelam",
      link: "https://ncbc.nic.in/Writereaddata/addmh22.pdf",
    },
    {
      name: "Lewa Kunbi, Lewa Patil, Lewa Patidar",
      link: "https://ncbc.nic.in/Writereaddata/addmh23.pdf",
    },
    {
      name: "Vatkar, Vatkari, Votankar, Votakar, Otkari, Otokar, Vatokaar, Kasar, Nili, Fakir Bhandrawala, Shilkalgar, Dhangari, Besta, Besti, Bestallu, Yalam/Yallam, Shikaligar/Shikalgar/Shikilgar/Shiklikar/Sikalkar/Sikilgar/Siklighar/Sikligar/Sikalgar/Sikkaligar/Cyclegar/Saikalgar, Suthar, Garpagari, Mansoori, Nadaff, Kurba, Kurubar, Lohar-Gada, Dodi, Khatawali, Hajam, Kalseru, Navliga, Kanshi, Valand, Odevar, Vadhai/Lohar Khatvadhai, Nalband, Govari, Gawari, Khandeshi",
      link: "https://ncbc.nic.in/Writereaddata/addmh24.pdf",
    },
    {
      name: "Kasera, Machimmar (Daldi), Dhankar, Sakka, Bawarchi, Bhatiara (Muslim), Attar, Bhoyar, Darji, Dommara, Lakhari, Bhaldar, Mahat, Mahoot, Mahawat, Khatik (Muslim), Qureshi",
      link: "https://ncbc.nic.in/Writereaddata/addmh25.pdf",
    },
    {
      name: "Darweshi, Vaghwale-Shah(Muslim religion), Aashwalwale, Udasi, Kudmude",
      link: "https://ncbc.nic.in/Writereaddata/addmh26.pdf",
    },
    {
      name: "Wadder, Kalawader, Muslim Manyar (Bangadeewala) Maniyaar or Maneri, Kunkuwale, Nirhali, Savkalar, Hanbar, Pahad/Pahadi, Gadariya, Pendhari, Kulekdagi, Kullekadgi, Kullakadagi, Kuladagi, Saali, Deshkar, Salewar, Devang, Kachi Bandhe, Patwis, Satsale, Sade, Halba Koshti, Ladkoshti, Gadhewal Koshti, Jainkoshti, Munnerwar, Munnurwar, Munnur, Telgu Munnur, Munnurwar Telgu, Telgu Kapewar",
      link: "https://ncbc.nic.in/Writereaddata/addmh27.pdf",
    },
    { name: "Kaikadi", link: "https://ncbc.nic.in/Writereaddata/addmh28.pdf" },
    {
      name: "Muslim Religion Bhangi/Mehtar/Lalbeg/Halalkhor/Khakrob, the members if which are actually in the Safai Karmachari profession",
      link: "https://ncbc.nic.in/Writereaddata/addmh43.pdf",
    },
    {
      name: "Audhiya/Audgeliya",
      link: "https://ncbc.nic.in/Writereaddata/addmh44.pdf",
    },
    {
      name: "Beldar Kapevar, Beldar Munnar Kapevar, Beldar, Munnar Kapu, Beldar Telanga, Beldar Telagi, Beldar Pentreddi, Beldar Bukekari as synonyms of Beldar",
      link: "https://ncbc.nic.in/Writereaddata/Beldar%20Kapevar635300545717899302.pdf",
    },
    {
      name: "Bhampta or Ghantichore or Pardeshi",
      link: "https://ncbc.nic.in/Writereaddata/addmh45.pdf",
    },
    {
      name: "Dorik",
      link: "https://ncbc.nic.in/Writereaddata/Dorik635300546131405654.pdf",
    },
    {
      name: "Bhadbhunja, Bhurjawa, Bhurji, Bharadbhunga, Bhuranji, Bhunj",
      link: "https://ncbc.nic.in/Writereaddata/addmh29.pdf",
    },
    {
      name: "Bhoi/Boi, Zinga Bhoi, Pardeshi Bhoi, Raj Bhoi, Kahar, Gadia Kahare, Dhuria Kahar, Kirat, Machwa, MAnzi, Jatia, Kewat, Dhiwar, Dhiwar Bhoi, Dheewar, Dhimar, Palewar, Machhendra, Navadi, Malhar, Madhav, Gadhav Bhoi, Khadi Bhoi, Khara Bhoi, Dhevra, Bhoi-Navadi, Taru-Navadi, Dheewar Bhoi",
      link: "https://ncbc.nic.in/Writereaddata/addmh40.pdf",
    },
    {
      name: "Dhangar, dhangari, Dange, Dongari",
      link: "https://ncbc.nic.in/Writereaddata/addmh31.pdf",
    },
    {
      name: "Devdig, Dewadiga",
      link: "https://ncbc.nic.in/Writereaddata/addmh30.pdf",
    },
    {
      name: "East Indian, East-Indian Christian, East-Indian Cathalic",
      link: "https://ncbc.nic.in/Writereaddata/East%20Indian635300547127645956.pdf",
    },
    { name: "Dhawad", link: "https://ncbc.nic.in/Writereaddata/addmh46.pdf" },
    {
      name: "Goller",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No55635367936446375984.pdf",
    },
    {
      name: "Gavandi, Gujar Kadiya",
      link: "https://ncbc.nic.in/Writereaddata/addmh32.pdf",
    },
    { name: "Jaatgaar", link: "https://ncbc.nic.in/Writereaddata/addmh47.pdf" },
    {
      name: "Ladasi",
      link: "https://ncbc.nic.in/Writereaddata/Ladasi635300547720630064.pdf",
    },
    {
      name: "Manyaar (Hindu)",
      link: "https://ncbc.nic.in/Writereaddata/addmh48.pdf",
    },
    { name: "Panchama", link: "https://ncbc.nic.in/Writereaddata/addmh49.pdf" },
    {
      name: "Gosavi, Bava, Bairagi, Bharati, Girigosavi, Bharati Gosavi, Saraswati Parbat, Sagar, Ban or Van, Teerth Ashram, Gosavi-Puri, Gusai/Gosai, Nathpanthi Gosavi",
      link: "https://ncbc.nic.in/Writereaddata/addmh37.pdf",
    },
    {
      name: "Shimpi, Saisutar",
      link: "https://ncbc.nic.in/Writereaddata/addmh34.pdf",
    },
    {
      name: "Koshti, Salevar, Padmashali, Chanewar/Channewar/Chenewar",
      link: "https://ncbc.nic.in/Writereaddata/addmh33.pdf",
    },
    {
      name: "Vedu (Waaghari)",
      link: "https://ncbc.nic.in/Writereaddata/addmh50.pdf",
    },
    {
      name: "Ayyar and Ayyyari as synonyms of Bahurupi",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No65635367937333807619.pdf",
    },
    {
      name: "Ghisadi Lohar, Gadi Lohar, Ghitodi Lohar, Rajput Lohar, Chitodiya-Lohar",
      link: "https://ncbc.nic.in/Writereaddata/addmh38.pdf",
    },
    {
      name: "Tamboli, Dhakad, Mitkari-Wani, Wani, Boral, Boraal, Borul, Borad",
      link: "https://ncbc.nic.in/Writereaddata/addmh36.pdf",
    },
    {
      name: "Gosai, Gusai",
      link: "https://ncbc.nic.in/Writereaddata/Gosai,%20Gusai635300548057785242.pdf",
    },
    {
      name: "Khatri, Kshatriya as synonyms of Patkar",
      link: "https://ncbc.nic.in/Writereaddata/Khatri635300548798221615.pdf",
    },
    { name: "Lazad", link: "https://ncbc.nic.in/Writereaddata/addmh51.pdf" },
    {
      name: "Muslim Panfarosh",
      link: "https://ncbc.nic.in/Writereaddata/Muslim%20Panfarosh635300549162952218.pdf",
    },
    {
      name: "Nathpanthi Gosavi",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No72635367938250294888.pdf",
    },
    {
      name: "Dhangar/Dhanwar, Ahir, Telwar, Hatkar, Hatker, Tellari, Kanade, Kurmar, Sangar, Kokni-Dhangar, Varahade-Dhangar, Sagar, Segar",
      link: "https://ncbc.nic.in/Writereaddata/addmh41.pdf",
    },
    {
      name: "Sanyasi as synonym of Gosavi",
      link: "https://ncbc.nic.in/Writereaddata/Sanyasi%20as%20synonym%20of%20Gosavi635300552073296920.pdf",
    },
    {
      name: "Masanjogi, Sudgadsiddha, Mapanjogi, Sharadakar, Shardakar, Shardakal, Balasantu",
      link: "https://ncbc.nic.in/Writereaddata/addmh39.pdf",
    },
    {
      name: "Kalal, Kalar, Sav Kalar, Jain Kalar",
      link: "https://ncbc.nic.in/Writereaddata/addmh42.pdf",
    },
    {
      name: "Mali (Sub-castes: Phul Mali, Phule, Halade, Kacha, Kadu, Bawane, Ad Prabhu, Ad Shethi, Jire, Unde, Lingayat Mali, Banka Mali, Gase Mali, Kosare Mali, Marar, Maral, Savta Mali, Van Mali, Bagban/Rayeen), Sutars, Malis, Vadvals, Chaukalshis",
      link: "https://ncbc.nic.in/Writereaddata/addmh35.pdf",
    },
    {
      name: "Pachkalshi",
      link: "https://ncbc.nic.in/Writereaddata/Pachkalshi635300552515503712.pdf",
    },
    {
      name: "Mhali",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO78%202014%20RI%20DK%20Pandey636205031580294424.pdf",
    },
    {
      name: "Malhav",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20NO79%202015%20RI%20DK%20Pandey636205033522636848.pdf",
    },
  ],
  Odisha: [
    {
      name: "Gopal, Gopala, Sholakhandia, Magadha Gouda Kansari, Kachara/Kachera, Rangani, Sundi/Sundhi, Kubera/Kubara, Sahu/Sahoo",
      link: "https://ncbc.nic.in/Writereaddata/addodh1.pdf",
    },
    {
      name: "Patara/Patra",
      link: "https://ncbc.nic.in/Writereaddata/addodh2.pdf",
    },
    {
      name: "Laxminarayan Gola and Goudia Gola Kurmi, Kurma, Kuduma, Kurma Chasa, Kudimi, Kurmi Khetriya and Kudumi Kshyatria",
      link: "https://ncbc.nic.in/Writereaddata/addodh3.pdf",
    },
    {
      name: "Saraka/Saraka Tanti",
      link: "https://ncbc.nic.in/Writereaddata/addodh4.pdf",
    },
    { name: "Chasa", link: "https://ncbc.nic.in/Writereaddata/addodh5.pdf" },
    {
      name: "Dera, Dewanga, Kosta, Salia, Buna, Bunkara as synonyms of Hansi, Thori/Thodia/Thudia/Thuria",
      link: "https://ncbc.nic.in/Writereaddata/addodh6.pdf",
    },
    {
      name: "Kalanji, Kalinji, Kalingi",
      link: "https://ncbc.nic.in/Writereaddata/addodh7.pdf",
    },
    {
      name: "Bangali Tanti/Bangiya Tanti",
      link: "https://ncbc.nic.in/Writereaddata/addodh8.pdf",
    },
    {
      name: "Khadura, Kharuda",
      link: "https://ncbc.nic.in/Writereaddata/addodh9.pdf",
    },
    {
      name: "Mahla/Mahlar, Malla",
      link: "https://ncbc.nic.in/Writereaddata/addodh10.pdf",
    },
    {
      name: "Gaudia Patara",
      link: "https://ncbc.nic.in/Writereaddata/addodh11.pdf",
    },
    { name: "Banka", link: "https://ncbc.nic.in/Writereaddata/addodh12.pdf" },
    {
      name: "Rout, Jena, Sahu, Patayat, Sawain, Parida, Pradhan, Padhan",
      link: "https://ncbc.nic.in/Writereaddata/addodh13.pdf",
    },
    {
      name: "Ashtalohi/Ashtalohi Karmakar, Kamila, Sunari, Sunaree, Viswa Brahman (Sunari), Swarnakar/Swarnsilpi, Bania, Vaishya, Vaishya Bania, Baishya Banika, Sunari Bania/Sunaree Bania, Sunari Banik, Subarna Bania, Subarna Banik, Putuli Bania, Putuli Bandha Bania/Putuli Bandha Vaishya, Gandh Bania, Gandh Banik/Gandh Banika, Podar Bania, Achari Bania, Chinera, Goldsmith",
      link: "https://ncbc.nic.in/Writereaddata/addodh14.pdf",
    },
    {
      name: "Matibansa Tanti, Asina Tanti, Aswina Tanti, Ashani Tanti, Aswinna Tanti as synonym of Hansi Tanti",
      link: "https://ncbc.nic.in/Writereaddata/addodh15.pdf",
    },
    {
      name: "Bhanjapuran",
      link: "https://ncbc.nic.in/Writereaddata/addodh16.pdf",
    },
    {
      name: "Kandha-Kumbhar",
      link: "https://ncbc.nic.in/Writereaddata/addodh17.pdf",
    },
    {
      name: "Liyari & Mativansa Ojha, Ojha, Khitibansa, Kitibansa Naik, Khitibansa Abadhan, Ojha Karan, Khitibansa Nayak, Mativansa and Mativansa Abadhan",
      link: "https://ncbc.nic.in/Writereaddata/addodh18.pdf",
    },
    {
      name: "Ekadash Teli as synonym of Teli",
      link: "https://ncbc.nic.in/Writereaddata/addodh19.pdf",
    },
    {
      name: "Koppula Velama, Kalanga",
      link: "https://ncbc.nic.in/Writereaddata/addodh20.pdf",
    },
    {
      name: "Odachasa, Banayat Odiya as sub-caste of Chasa",
      link: "https://ncbc.nic.in/Writereaddata/addodh21.pdf",
    },
    {
      name: "Oda Pradhan and Odra Pradhan",
      link: "https://ncbc.nic.in/Writereaddata/addodh22.pdf",
    },
    {
      name: "SCs converts to Christianity and their progeny",
      link: "https://ncbc.nic.in/Writereaddata/addodh23.pdf",
    },
    {
      name: "Kalwar, Jaiswal, Byahut Kalwar, Byahut Bania as synonym of Kalwar",
      link: "https://ncbc.nic.in/Writereaddata/addodh24.pdf",
    },
    { name: "Arua", link: "https://ncbc.nic.in/Writereaddata/addodh25.pdf" },
    { name: "Hatua", link: "https://ncbc.nic.in/Writereaddata/addodh26.pdf" },
    {
      name: "Baisya-Karan",
      link: "https://ncbc.nic.in/Writereaddata/addodh27.pdf",
    },
    {
      name: "Tambuli, Tamali, Tamuli (Baisya)",
      link: "https://ncbc.nic.in/Writereaddata/addodh28.pdf",
    },
    {
      name: "Telugu-Kachara, Telugu, Telanga, Telenga (only those member of Telugu, Telanga, Telenga who belong to the same caste as Telaga, Pamula or Telugu Kachara",
      link: "https://ncbc.nic.in/Writereaddata/addodh29.pdf",
    },
    { name: "Shudra", link: "https://ncbc.nic.in/Writereaddata/addodh30.pdf" },
    {
      name: "Alia, Raju",
      link: "https://ncbc.nic.in/Writereaddata/addodh31.pdf",
    },
    {
      name: "Kalandi Baishnaba",
      link: "https://ncbc.nic.in/Writereaddata/addodh32.pdf",
    },
    { name: "Sagua", link: "https://ncbc.nic.in/Writereaddata/addodh33.pdf" },
    {
      name: "Gopal Baishnab",
      link: "https://ncbc.nic.in/Writereaddata/addod34.pdf",
    },
    {
      name: "Muni, Raula (Raula of Ganjam District only)",
      link: "https://ncbc.nic.in/Writereaddata/addodh35.pdf",
    },
    {
      name: "Khandayat Mahanayak/Mahanayak Sudra",
      link: "https://ncbc.nic.in/Writereaddata/addodh36.pdf",
    },
    {
      name: "Dalpati/Dalua",
      link: "https://ncbc.nic.in/Writereaddata/addodh37.pdf",
    },
    {
      name: "Rajasri Balasi/Balasi",
      link: "https://ncbc.nic.in/Writereaddata/addodh38.pdf",
    },
    {
      name: "Dumal Gouda",
      link: "https://ncbc.nic.in/Writereaddata/addodh39.pdf",
    },
    {
      name: "Rangani Tanti/Rangani Tantee/Ranganee Tantee/Ragini Tanti/Ranguni Tanti",
      link: "https://ncbc.nic.in/Writereaddata/addodh40.pdf",
    },
    {
      name: "Kalal, Kalar as Synonyms of Kalwar",
      link: "https://ncbc.nic.in/Writereaddata/addodh41.pdf",
    },
    {
      name: "Pandara Mali as a sub-caste of Mali",
      link: "https://ncbc.nic.in/Writereaddata/addodh42.pdf",
    },
    {
      name: "Maahaata & Maahaanta",
      link: "https://ncbc.nic.in/Writereaddata/addodh43.pdf",
    },
    { name: "Ezhava", link: "https://ncbc.nic.in/Writereaddata/addodh44.pdf" },
    {
      name: "Reddy/Reddi, Kampo or Kapu and Gajulu Kampa or Gajulu Kapu",
      link: "https://ncbc.nic.in/Writereaddata/addodh45.pdf",
    },
    {
      name: "Asini Patara/Aswini & Ashwini",
      link: "https://ncbc.nic.in/Writereaddata/addodh46.pdf",
    },
    {
      name: "Rangini Hansi",
      link: "https://ncbc.nic.in/Writereaddata/addodh47.pdf",
    },
    {
      name: "Koppala Velama",
      link: "https://ncbc.nic.in/Writereaddata/addodh48.pdf",
    },
    { name: "Tamuli", link: "https://ncbc.nic.in/Writereaddata/addodh49.pdf" },
    { name: "Belama", link: "https://ncbc.nic.in/Writereaddata/addodh50.pdf" },
    { name: "Kurum", link: "https://ncbc.nic.in/Writereaddata/addodh51.pdf" },
    {
      name: "Goudia & Laxminarayana Goudia",
      link: "https://ncbc.nic.in/Writereaddata/addodh52.pdf",
    },
    {
      name: "Chitrasilpi",
      link: "https://ncbc.nic.in/Writereaddata/addodh53.pdf",
    },
    {
      name: "Mathurapuria Gouda, Gopapuria Gouda, Nanda Gouda & Kanja Gouda",
      link: "https://ncbc.nic.in/Writereaddata/addodh54.pdf",
    },
    {
      name: "Odiya, Benayat Oriya, Benayit Odia, Banayat, Banayat Oriya, Odia & Udia",
      link: "https://ncbc.nic.in/Writereaddata/addodh55.pdf",
    },
    { name: "Ellama", link: "https://ncbc.nic.in/Writereaddata/addodh56.pdf" },
    {
      name: "Kumbhakar",
      link: "https://ncbc.nic.in/Writereaddata/addodh57.pdf",
    },
    {
      name: "Chattada Srivaishnab",
      link: "https://ncbc.nic.in/Writereaddata/addodh58.pdf",
    },
    {
      name: "Tamil, Bangiya Tambuli, Tambili, Bangiya Tamboli, Bangiya Tamili & Tambula",
      link: "https://ncbc.nic.in/Writereaddata/addodh59.pdf",
    },
    {
      name: "Chasa Paiko",
      link: "https://ncbc.nic.in/Writereaddata/addodh60.pdf",
    },
    {
      name: "Odia/Od ia Khandayat",
      link: "https://ncbc.nic.in/Writereaddata/addodh61.pdf",
    },
    {
      name: "Dalua-Paik",
      link: "https://ncbc.nic.in/Writereaddata/addodh62.pdf",
    },
    {
      name: "Odra Khandayat Kalanji",
      link: "https://ncbc.nic.in/Writereaddata/addodh63.pdf",
    },
    {
      name: "Chasa Mahanty/ Mahanty",
      link: "https://ncbc.nic.in/Writereaddata/addodh64.pdf",
    },
    { name: "Mahisya", link: "https://ncbc.nic.in/Writereaddata/addodh65.pdf" },
    {
      name: "Jyotish Abadhan & Jyotish Nayak",
      link: "https://ncbc.nic.in/Writereaddata/addodh66.pdf",
    },
    {
      name: "Tailik Vaishya",
      link: "https://ncbc.nic.in/Writereaddata/addodh67.pdf",
    },
    {
      name: "Kaliji, Kalinga",
      link: "https://ncbc.nic.in/Writereaddata/addodh68.pdf",
    },
    {
      name: "Segidi, Srisayan",
      link: "https://ncbc.nic.in/Writereaddata/addodh69.pdf",
    },
    {
      name: "Hansi, Tanti, Sukuli, Vina, Tulabhina, Rangani, Dera, Dewanga/Dewangulu, Kosta/Kusta/Kustha/Kostha, Salia, Patsalia, Buna, Bunkar/Bunkara, Bangali, Tanti/Bangiya Tanti, Mativansa Tanti, Asina Tanti, Aswina Tanti, Ashani Tanti, Aswinna Tanti, Rangani Tanti/Rangani Tantee/Ranganee Tantee/Rangini Tanti/Ranguni Tanti, Rangini Hansi, Amila Tanti",
      link: "https://ncbc.nic.in/Writereaddata/addodh70.pdf",
    },
    {
      name: "Kammara, Kamara, Kamar, Kammaro, Muli, Lohuru, Loharo, Astolohi Kamar",
      link: "https://ncbc.nic.in/Writereaddata/addodh71.pdf",
    },
    {
      name: "Teli, Telli, Kubara/Kubera, Talakar, Sahu, Sahoo, Bahaldia, Baladia",
      link: "https://ncbc.nic.in/Writereaddata/addodh72.pdf",
    },
    { name: "Majjula", link: "https://ncbc.nic.in/Writereaddata/addodh73.pdf" },
    { name: "Bhopa", link: "https://ncbc.nic.in/Writereaddata/addodh74.pdf" },
    {
      name: "Saunties as synonym of Nagavasam, Khandal, Khandual as synonym of Khandals, Teloga",
      link: "https://ncbc.nic.in/Writereaddata/Advice%20No120635368760407618111.pdf",
    },
  ],
  // Add other states...
};

const AdvicesTable = () => {
  const { stateName } = useParams(); // Get state name from URL
  const [states, setstates] = useState([]);
  useEffect(() => {
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/advices/");
        setstates(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRules();
  }, []);

  const navigate = useNavigate();
  const checkState = (states) => {
    return states.state == stateName && states.parent_id !== null;
  };

  const castes = states.filter(checkState);
  console.log(castes);

  return (
    <div className="custom-table-container">
      {/* Header section with title and back button */}
      <div className="custom-table-header">
        <h2 className="custom-table-title">Castes in {stateName}</h2>
        <button
          className="custom-back-button"
          onClick={() => navigate("/advices")}
        >
          Back
        </button>
      </div>

      <table className="custom-styled-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Caste Name</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {castes.length > 0 ? (
            castes.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.caste}</td>
                <td>
                  <a
                    href={`http://localhost:3000${item.file_name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-view-button"
                  >
                    View / Download
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No caste data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="custom-table-bottom-border"></div>
    </div>
  );
};

export default AdvicesTable;
