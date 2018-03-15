const download = (url, filename) => {
    chrome.downloads.download({
        url,
        filename
    });
};
chrome.runtime.onMessage.addListener((message, sender, res) => {
    if (message.action == 'request' && message.video_id) {
        var request = new Request('https://www.facebook.com/video.php?v=' + message.video_id, {
            method: 'GET',
            redirect: 'follow',
        });
        fetch(request).then(res => res.text()).then(content => {
            const regex = /(hd|sd)\_src\:\"(\w[^"]*)\"/img;
            while ((m = regex.exec(content)) !== null) {
                if (m[2]) {
                    download(decodeURIComponent(m[2]));
                    res(true);
                    return true;
                }
            }
            res({
                error: true
            });
        }).catch(() => {
            res({
                error: true
            });
        });
        return true;
    }
    if (message.action = 'download' && message.url) {
        download(decodeURIComponent(message.url));
        res(true);
        return true;
    }
});