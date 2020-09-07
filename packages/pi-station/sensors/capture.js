const shell = require("shelljs");

const basePath = `${__dirname}/../files`;
const imgPath = `${basePath}/captureImage.jpg`;
const vidPath = `${basePath}/captureVideo.avi`;

function captureImage() {
  shell.exec(`fswebcam -d /dev/video0 -r 1280x720 --no-banner ${imgPath}`);
}

function captureVideo() {
  shell.exec(
    `streamer -q -c /dev/video0 -s 720x480 -f rgb24 -r 20 -t 00:00:10 -o ${vidPath}`
  );
  compressVideo();
}

function compressVideo() {
  shell.exec(
    `ffmpeg -i ${vidPath} -vcodec mpeg4 -vtag xvid -qscale:v 5 -c:a libmp3lame -y ${basePath}/newVideo.avi`
  );
  shell.exec(
  `ffmpeg -i ${basePath}/newVideo.avi -y ${basePath}/newVideo.mp4`
  );
}

module.exports = {
  captureImage,
  captureVideo
};
