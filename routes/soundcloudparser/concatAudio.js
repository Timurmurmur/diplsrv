import ffmpeg from 'fluent-ffmpeg';
ffmpeg.setFfmpegPath(require('@ffmpeg-installer/ffmpeg').path);
ffmpeg.setFfprobePath(require('@ffprobe-installer/ffprobe').path);

const songsArray = [
  './downloaded/music-part6.mp3',
  './downloaded/music-part8.mp3',
];

function concat(files, output) {
  return new Promise((resolve, reject) => {
    files = Array.isArray(files) ? files : [files];
    files
      .reduce((ffmpeg, file) => ffmpeg.addInput(file), ffmpeg())
      .audioCodec('libmp3lame')
      .on('error', reject)
      .on('end', resolve)
      .mergeToFile(output, require('os').tmpdir());
  });
}

concat(songsArray, './finish.mp3');
