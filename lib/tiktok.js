const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch data from TikWM API
const ttdw = async (url) => {
  try {
    const response = await axios.post('https://www.tikwm.com/api/', new URLSearchParams({
      url: url,
      count: 12,
      cursor: 0,
      web: 1,
      hd: 1
    }), {
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
      },
      withCredentials: true,
    });

    const baseURL = "https://www.tikwm.com";
    const data = response.data;

    if (data.code === 0) {
      data.data.play = baseURL + data.data.play;
      data.data.wmplay = baseURL + data.data.wmplay;
      data.data.hdplay = baseURL + data.data.hdplay;
      data.data.music = baseURL + data.data.music;

      // Determine type based on the presence of images or video
      if (Array.isArray(data.data.images) && data.data.images.length > 0) {
        data.type = 'image';
      } else if (data.data.hdplay) {
        data.type = 'video';
      } else {
        data.type = 'unknown';
      }
    }
    return data;
  } catch (error) {
    console.error("Error fetching from TikWM:", error);
    throw new Error("Failed to fetch data from TikWM.");
  }
};

// Function to get the content type (image or video)
async function getType(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];
    const mainType = contentType.split('/')[0];
    return mainType;
  } catch (error) {
    console.error('Error fetching the content type:', error);
    throw error;
  }
}

// Function to fetch data from TikSave API
async function tiksave(url) {
  let res = {};

  try {
    res.type = await getType(url);
    const { data } = await axios.post(
      "https://tiksave.io/api/ajaxSearch",
      new URLSearchParams({
        q: url,
        lang: "en"
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Accept": "*/*",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Origin": "https://tiksave.io",
          "Referer": "https://tiksave.io/",
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    );
    
    

    const $ = cheerio.load(data.data);
    let title = $('div.thumbnail h3').text() || 'No title found';
    res.title = title.trim();

    // Extract download buttons
    const dlbutton = Array.from($('.tik-button-dl')).map((element) => {
      const downloadUrl = $(element).attr('href');
      const text = $(element).text().trim();
      const description = text.replace(/\s+/g, ' ').trim();
      return { description, downloadUrl };
    });

    // Get media URLs (either images or videos)
    res.media = res.type === "image" ? $('.photo-list .download-box li').map((index, element) => {
      let url = $(element).find('.download-items__thumb img').attr('src');
      return { url };
    }).get() : dlbutton;

    // Set audio URL if it's a video
    res.audio = res.type === "video" && res.media.length > 0
    ? { url: res.media[res.media.length - 1].downloadUrl }
    : null;
  

    return res;
  } catch (error) {
    console.error("Error fetching data from TikSave:", error);
    throw new Error("Failed to fetch data from TikSave.");
  }
}

module.exports = {
  ttdw,
  tiksave,
}