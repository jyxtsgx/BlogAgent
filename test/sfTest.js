"use strict";
var sf = require("../src/sf/doPost");
var config = {
    url: "https://segmentfault.com/write",
    headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "AcceptEncoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
        "Cache-Control": "max-age=0",
        "Cookie": "Hm_lvt_e23800c454aa573c0ccb16b52665ac26=1480042218,1480049341,1480050350,1480056908; sf_remember=585ebc30c1ae3b05a4633c777219f2f4; __jsluid=ee6b8a36e03924b1a60b54e683709183; Hm_lpvt_e23800c454aa573c0ccb16b52665ac26=1480057545; PHPSESSID =web6~ro0cd50592ceiqp65isfimid26",
        "Host": "segmentfault.com",
        "Referer": "https://segmentfault.com/",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:49.0) Gecko/20100101 Firefox/49.0"
    },
    proxy: {
        host: '127.0.0.1',
        port: 8888
    }

}
sf.doPost(config).then(data=> {
    //console.log(data);
}).catch(ex=> {
    //console.log(ex);
});