// Taiwan Pilgrim Building Data (台灣香客大樓資料)
const pilgrimBuildings = [
  {
    id: 1,
    nameZh: "鎮瀾宮香客大樓",
    nameEn: "Dajia Jenn Lann Temple Pilgrim Building",
    temple: "大甲鎮瀾宮",
    deity: "媽祖",
    addressZh: "台中市大甲區順天路158號",
    addressEn: "No. 158, Shuntian Rd., Dajia Dist., Taichung City",
    phone: "+886-4-2676-2582",
    website: "http://www.dajiamazu.org.tw",
    lat: 24.3486,
    lng: 120.6218,
    region: "Central",
    description: {
      zh: "大甲媽祖遶境起點,可容納數百人住宿",
      en: "Starting point of Dajia Mazu pilgrimage, accommodates hundreds of pilgrims"
    }
  },
  {
    id: 2,
    nameZh: "白沙屯拱天宮香客大樓",
    nameEn: "Baishatun Gongtian Temple Pilgrim Building",
    temple: "白沙屯拱天宮",
    deity: "媽祖",
    addressZh: "苗栗縣通霄鎮白東里8鄰26號",
    addressEn: "No. 26, Baishatun, Tongxiao Township, Miaoli County",
    phone: "+886-37-792-050",
    website: "https://www.baishatun.com.tw",
    lat: 24.5736,
    lng: 120.6953,
    region: "Central",
    description: {
      zh: "白沙屯媽祖進香重要據點",
      en: "Important base for Baishatun Mazu pilgrimage"
    }
  },
  {
    id: 3,
    nameZh: "北港朝天宮香客大樓",
    nameEn: "Beigang Chaotian Temple Pilgrim Building",
    temple: "北港朝天宮",
    deity: "媽祖",
    addressZh: "雲林縣北港鎮中山路178號",
    addressEn: "No. 178, Zhongshan Rd., Beigang Township, Yunlin County",
    phone: "+886-5-783-2055",
    website: "https://www.matsu.org.tw",
    lat: 23.5708,
    lng: 120.3028,
    region: "South",
    description: {
      zh: "歷史悠久的媽祖廟,設備完善",
      en: "Historic Mazu temple with well-equipped facilities"
    }
  },
  {
    id: 4,
    nameZh: "新港奉天宮香客大樓",
    nameEn: "Xingang Fengtian Temple Pilgrim Building",
    temple: "新港奉天宮",
    deity: "媽祖",
    addressZh: "嘉義縣新港鄉新民路53號",
    addressEn: "No. 53, Xinmin Rd., Xingang Township, Chiayi County",
    phone: "+886-5-374-2035",
    website: "http://www.hingkongmazu.org",
    lat: 23.5525,
    lng: 120.3461,
    region: "South",
    description: {
      zh: "嘉義地區重要媽祖信仰中心",
      en: "Important Mazu worship center in Chiayi region"
    }
  },
  {
    id: 5,
    nameZh: "鹿港天后宮香客大樓",
    nameEn: "Lugang Mazu Temple Pilgrim Building",
    temple: "鹿港天后宮",
    deity: "媽祖",
    addressZh: "彰化縣鹿港鎮中山路430號",
    addressEn: "No. 430, Zhongshan Rd., Lugang Township, Changhua County",
    phone: "+886-4-777-9899",
    website: "http://www.lugangmazu.org",
    lat: 24.0569,
    lng: 120.4347,
    region: "Central",
    description: {
      zh: "鹿港媽祖廟,古蹟建築",
      en: "Lugang Mazu temple with historic architecture"
    }
  },
  {
    id: 6,
    nameZh: "西螺福興宮香客大樓",
    nameEn: "Xiluo Fuxing Temple Pilgrim Building",
    temple: "西螺福興宮",
    deity: "媽祖",
    addressZh: "雲林縣西螺鎮建興路226號",
    addressEn: "No. 226, Jianxing Rd., Xiluo Township, Yunlin County",
    phone: "+886-5-586-2691",
    website: null,
    lat: 23.7986,
    lng: 120.4661,
    region: "South",
    description: {
      zh: "西螺大橋旁的媽祖廟",
      en: "Mazu temple near Xiluo Bridge"
    }
  },
  {
    id: 7,
    nameZh: "松山奉天宮香客大樓",
    nameEn: "Songshan Fengtian Temple Pilgrim Building",
    temple: "松山奉天宮",
    deity: "媽祖",
    addressZh: "台北市信義區福德街221巷12號",
    addressEn: "No. 12, Ln. 221, Fude St., Xinyi Dist., Taipei City",
    phone: "+886-2-2727-3838",
    website: "http://www.fengtian.org",
    lat: 25.0428,
    lng: 121.5783,
    region: "North",
    description: {
      zh: "台北市區媽祖廟,交通便利",
      en: "Mazu temple in Taipei with convenient transportation"
    }
  },
  {
    id: 8,
    nameZh: "關渡宮香客大樓",
    nameEn: "Guandu Temple Pilgrim Building",
    temple: "關渡宮",
    deity: "媽祖",
    addressZh: "台北市北投區知行路360號",
    addressEn: "No. 360, Zhixing Rd., Beitou Dist., Taipei City",
    phone: "+886-2-2858-1281",
    website: "http://www.guandu.org",
    lat: 25.1175,
    lng: 121.4658,
    region: "North",
    description: {
      zh: "北台灣古老媽祖廟,淡水河畔",
      en: "Ancient Mazu temple in northern Taiwan by Tamsui River"
    }
  },
  {
    id: 9,
    nameZh: "大天后宮香客大樓",
    nameEn: "Great Queen of Heaven Temple Pilgrim Building",
    temple: "台南大天后宮",
    deity: "媽祖",
    addressZh: "台南市中西區永福路二段227巷18號",
    addressEn: "No. 18, Ln. 227, Sec. 2, Yongfu Rd., West Central Dist., Tainan City",
    phone: "+886-6-221-1178",
    website: "http://www.twtainan.net",
    lat: 22.9961,
    lng: 120.2019,
    region: "South",
    description: {
      zh: "台灣最早官建媽祖廟",
      en: "First government-built Mazu temple in Taiwan"
    }
  },
  {
    id: 10,
    nameZh: "鹿耳門天后宮香客大樓",
    nameEn: "Luerhmen Mazu Temple Pilgrim Building",
    temple: "鹿耳門天后宮",
    deity: "媽祖",
    addressZh: "台南市安南區媽祖宮一街136號",
    addressEn: "No. 136, Mazugong 1st St., Annan Dist., Tainan City",
    phone: "+886-6-284-1386",
    website: "http://www.luerhmen.org.tw",
    lat: 23.0572,
    lng: 120.1383,
    region: "South",
    description: {
      zh: "鄭成功登陸地點的媽祖廟",
      en: "Mazu temple at Koxinga's landing site"
    }
  },
  {
    id: 11,
    nameZh: "南鯤鯓代天府香客大樓",
    nameEn: "Nankunshen Daitian Temple Pilgrim Building",
    temple: "南鯤鯓代天府",
    deity: "五府千歲",
    addressZh: "台南市北門區鯤江里976號",
    addressEn: "No. 976, Kunjiang Village, Beimen Dist., Tainan City",
    phone: "+886-6-786-3711",
    website: "http://www.nankunshen.org.tw",
    lat: 23.2889,
    lng: 120.1397,
    region: "South",
    description: {
      zh: "台灣王爺信仰總廟",
      en: "Head temple of Wang Ye worship in Taiwan"
    }
  },
  {
    id: 12,
    nameZh: "麻豆代天府香客大樓",
    nameEn: "Madou Daitian Temple Pilgrim Building",
    temple: "麻豆代天府",
    deity: "五府千歲",
    addressZh: "台南市麻豆區關帝廟60號",
    addressEn: "No. 60, Guandimiao, Madou Dist., Tainan City",
    phone: "+886-6-572-2133",
    website: null,
    lat: 23.1856,
    lng: 120.2603,
    region: "South",
    description: {
      zh: "麻豆地區王爺廟",
      en: "Wang Ye temple in Madou area"
    }
  },
  {
    id: 13,
    nameZh: "大龍峒保安宮香客大樓",
    nameEn: "Dalongdong Baoan Temple Pilgrim Building",
    temple: "大龍峒保安宮",
    deity: "保生大帝",
    addressZh: "台北市大同區哈密街61號",
    addressEn: "No. 61, Hami St., Datong Dist., Taipei City",
    phone: "+886-2-2595-1676",
    website: "http://www.baoan.org.tw",
    lat: 25.0703,
    lng: 121.5158,
    region: "North",
    description: {
      zh: "台北國定古蹟,保生大帝廟",
      en: "National historic site in Taipei, Baosheng Dadi temple"
    }
  },
  {
    id: 14,
    nameZh: "學甲慈濟宮香客大樓",
    nameEn: "Xuejia Ciji Temple Pilgrim Building",
    temple: "學甲慈濟宮",
    deity: "保生大帝",
    addressZh: "台南市學甲區濟生路115號",
    addressEn: "No. 115, Jisheng Rd., Xuejia Dist., Tainan City",
    phone: "+886-6-783-3111",
    website: "http://www.sjciji.org.tw",
    lat: 23.2314,
    lng: 120.1867,
    region: "South",
    description: {
      zh: "學甲保生大帝祖廟",
      en: "Ancestral Baosheng Dadi temple in Xuejia"
    }
  },
  {
    id: 15,
    nameZh: "行天宮香客大樓",
    nameEn: "Xingtian Temple Pilgrim Building",
    temple: "行天宮",
    deity: "關聖帝君",
    addressZh: "台北市中山區民權東路二段109號",
    addressEn: "No. 109, Sec. 2, Minquan E. Rd., Zhongshan Dist., Taipei City",
    phone: "+886-2-2502-7924",
    website: "http://www.ht.org.tw",
    lat: 25.0639,
    lng: 121.5336,
    region: "North",
    description: {
      zh: "台北知名關帝廟,收驚服務",
      en: "Famous Guan Di temple in Taipei with blessing services"
    }
  },
  {
    id: 16,
    nameZh: "武廟香客大樓",
    nameEn: "Wumiao Temple Pilgrim Building",
    temple: "台南武廟",
    deity: "關聖帝君",
    addressZh: "台南市中西區永福路二段229號",
    addressEn: "No. 229, Sec. 2, Yongfu Rd., West Central Dist., Tainan City",
    phone: "+886-6-220-2390",
    website: null,
    lat: 22.9958,
    lng: 120.2017,
    region: "South",
    description: {
      zh: "台灣首座官建關帝廟",
      en: "First government-built Guan Di temple in Taiwan"
    }
  },
  {
    id: 17,
    nameZh: "指南宮香客大樓",
    nameEn: "Zhinan Temple Pilgrim Building",
    temple: "指南宮",
    deity: "呂洞賓",
    addressZh: "台北市文山區萬壽路115號",
    addressEn: "No. 115, Wanshou Rd., Wenshan Dist., Taipei City",
    phone: "+886-2-2939-9922",
    website: "http://www.zhinan.org.tw",
    lat: 24.9875,
    lng: 121.5906,
    region: "North",
    description: {
      zh: "木柵指南宮,呂洞賓祖廟",
      en: "Daoist temple in Muzha dedicated to Lu Dongbin"
    }
  },
  {
    id: 18,
    nameZh: "佛光山朝山會館",
    nameEn: "Fo Guang Shan Pilgrim Lodge",
    temple: "佛光山寺",
    deity: "佛教",
    addressZh: "高雄市大樹區興田路153號",
    addressEn: "No. 153, Xingtian Rd., Dashu Dist., Kaohsiung City",
    phone: "+886-7-656-1921",
    website: "http://www.fgs.org.tw",
    lat: 22.7467,
    lng: 120.3872,
    region: "South",
    description: {
      zh: "台灣最大佛教道場,可容納千人",
      en: "Largest Buddhist monastery in Taiwan, accommodates thousands"
    }
  },
  {
    id: 19,
    nameZh: "法鼓山禪修中心",
    nameEn: "Dharma Drum Mountain Meditation Center",
    temple: "法鼓山",
    deity: "佛教",
    addressZh: "新北市金山區法鼓路555號",
    addressEn: "No. 555, Fagu Rd., Jinshan Dist., New Taipei City",
    phone: "+886-2-2498-7171",
    website: "http://www.ddm.org.tw",
    lat: 25.2114,
    lng: 121.6378,
    region: "North",
    description: {
      zh: "法鼓山總本山,禪修住宿",
      en: "Dharma Drum Mountain headquarters with meditation lodging"
    }
  },
  {
    id: 20,
    nameZh: "中台禪寺香客大樓",
    nameEn: "Chung Tai Chan Monastery Pilgrim Building",
    temple: "中台禪寺",
    deity: "佛教",
    addressZh: "南投縣埔里鎮中台路2號",
    addressEn: "No. 2, Zhongtai Rd., Puli Township, Nantou County",
    phone: "+886-49-293-0215",
    website: "http://www.ctworld.org",
    lat: 23.9658,
    lng: 120.9736,
    region: "Central",
    description: {
      zh: "世界最大佛教寺廟之一",
      en: "One of the largest Buddhist temples in the world"
    }
  },
  {
    id: 21,
    nameZh: "龍山寺香客大樓",
    nameEn: "Longshan Temple Pilgrim Building",
    temple: "艋舺龍山寺",
    deity: "觀音菩薩",
    addressZh: "台北市萬華區廣州街211號",
    addressEn: "No. 211, Guangzhou St., Wanhua Dist., Taipei City",
    phone: "+886-2-2302-5162",
    website: "http://www.lungshan.org.tw",
    lat: 25.0364,
    lng: 121.4997,
    region: "North",
    description: {
      zh: "台北國定古蹟,觀音信仰中心",
      en: "National historic site in Taipei, Guanyin worship center"
    }
  },
  {
    id: 22,
    nameZh: "竹山紫南宮香客大樓",
    nameEn: "Zhushan Zinan Temple Pilgrim Building",
    temple: "竹山紫南宮",
    deity: "土地公",
    addressZh: "南投縣竹山鎮大公街40號",
    addressEn: "No. 40, Dagong St., Zhushan Township, Nantou County",
    phone: "+886-49-262-0285",
    website: "http://www.luck.com.tw",
    lat: 23.7611,
    lng: 120.6822,
    region: "Central",
    description: {
      zh: "借金發財聞名的土地公廟",
      en: "Famous Earth God temple for borrowing lucky money"
    }
  },
  {
    id: 23,
    nameZh: "烘爐地南山福德宮",
    nameEn: "Hongludi Nanshan Fude Temple",
    temple: "烘爐地南山福德宮",
    deity: "土地公",
    addressZh: "新北市中和區興南路二段399巷57弄20號",
    addressEn: "No. 20, Aly. 57, Ln. 399, Sec. 2, Xingnan Rd., Zhonghe Dist., New Taipei City",
    phone: "+886-2-2942-7399",
    website: null,
    lat: 24.9972,
    lng: 121.5014,
    region: "North",
    description: {
      zh: "北部最大土地公廟",
      en: "Largest Earth God temple in northern Taiwan"
    }
  },
  {
    id: 24,
    nameZh: "知本天后宮香客大樓",
    nameEn: "Zhiben Mazu Temple Pilgrim Building",
    temple: "知本天后宮",
    deity: "媽祖",
    addressZh: "台東縣台東市知本路三段152巷8號",
    addressEn: "No. 8, Ln. 152, Sec. 3, Zhiben Rd., Taitung City, Taitung County",
    phone: "+886-89-512-593",
    website: null,
    lat: 22.7086,
    lng: 121.1028,
    region: "East",
    description: {
      zh: "台東地區媽祖信仰中心",
      en: "Mazu worship center in Taitung region"
    }
  }
];
