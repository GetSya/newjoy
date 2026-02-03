const axios = require('axios');
const cheerio = require('cheerio');
const FileType = require('file-type');

async function getContentType(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const fileType = await FileType.fromBuffer(response.data);

        return fileType?.ext === 'jpg' || fileType?.ext === 'png' ? 'image' :
               fileType?.ext === 'mp4' ? 'video' : 'unknown';
    } catch (error) {
        console.error('Error fetching URL:', error);
        return 'unknown'; // Mengembalikan 'unknown' jika terjadi kesalahan
    }
}

async function saveInsta(url) {
    return new Promise(async (resolve) => {
        try {
            // Memeriksa apakah URL valid untuk Instagram atau Facebook
            if (!url.match(/(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/) && !url.match(/(https|http):\/\/www.instagram.com\/(p|reel|tv|stories)/gi)) {
                return resolve({ developer: '@Alia Uhuy', status: false, msg: `Link URL tidak valid` });
            }
            
            // Dekode aplikasi Snap
            function decodeSnapApp(args) {
                let [h, u, n, t, e, r] = args;

                function decode(d, e, f) {
                    const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
                    let h = g.slice(0, e);
                    let i = g.slice(0, f);
                    let j = d.split('').reverse().reduce(function (a, b, c) {
                        if (h.indexOf(b) !== -1)
                            return a += h.indexOf(b) * (Math.pow(e, c));
                    }, 0);
                    let k = '';
                    while (j > 0) {
                        k = i[j % f] + k;
                        j = (j - (j % f)) / f;
                    }
                    return k || '0';
                }
                let result = '';
                for (let i = 0, len = h.length; i < len; i++) {
                    let s = '';
                    while (h[i] !== n[e]) {
                        s += h[i];
                        i++;
                    }
                    for (let j = 0; j < n.length; j++) {
                        s = s.replace(new RegExp(n[j], "g"), j.toString());
                    }
                    result += String.fromCharCode(decode(s, e, 10) - t);
                }
                return decodeURIComponent(encodeURIComponent(result));
            }

            function getEncodedSnapApp(data) {
                return data.split('decodeURIComponent(escape(r))}(')[1]
                    .split('))')[0]
                    .split(',')
                    .map(v => v.replace(/"/g, '').trim());
            }

            function getDecodedSnapSave(data) {
                return data.split('getElementById("download-section").innerHTML = "')[1]
                    .split('"; document.getElementById("inputData").remove(); ')[0]
                    .replace(/\\(\\)?/g, '');
            }

            function decryptSnapSave(data) {
                return getDecodedSnapSave(decodeSnapApp(getEncodedSnapApp(data)));
            }

            // Mengambil data dari URL dan mendekode hasilnya
            const response = await axios.post('https://snapsave.app/action.php?lang=id', 
            new URLSearchParams({ url }), 
            {
                headers: {
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                    'content-type': 'application/x-www-form-urlencoded',
                    'origin': 'https://snapsave.app',
                    'referer': 'https://snapsave.app/id',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
                }
            });

            const html = response.data;
            const decode = decryptSnapSave(html);
            const $ = cheerio.load(decode);
            const results = [];
            
            // Mengambil URL dari elemen download
            for (const element of $('.download-items__btn a')) {
                const href = $(element).attr('href');
                if (href) {
                    const contentType = await getContentType(href);
                    results.push({ url: href, type: contentType });
                }
            }
            
            return resolve({ developer: '@agus', status: true, data: results });
            
        } catch (e) {
            return resolve({ developer: '@agus', status: false, msg: e.message });
        }
    });
}

module.exports = {
    saveInsta
};
