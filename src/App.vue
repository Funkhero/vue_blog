<template lang="html">
    <section id="app" class="app" v-bind:style="{backgroundImage: 'url(' + currentSong.pic + ')'}">
        <div class="app__wrapper">
            <div class="app__content">
                <div v-show="showPlayer" class="player__controls">
                    <canvas ref="timeCircle" class="player__timecircle" width="456" height="456"></canvas>
                    <span v-on:click="toggleList" class="player__button player__button_mnu">
                        <i class="ico ico-menu"></i>
                    </span>
                    <span v-on:click="switchSong" data-direction="prev" class="player__button player__button_prev">
                        <i class="ico ico-prev"></i>
                    </span>
                    <span v-on:click="switchSong" data-direction="next" class="player__button player__button_next">
                        <i class="ico ico-next"></i>
                    </span>
                    <span v-on:click="togglePlay" class="player__button player__button_play">
                        <i class="ico ico-playpause"></i>
                    </span>
                    <div class="player__info">
                        <div class="player__time">{{ songMin }}:{{ songSec }}</div>
                        <div class="player__song">
                            <div class="player__name">{{ currentSong.name }}</div>
                            <div class="player__author">{{ currentSong.author }}</div>
                        </div>
                    </div>
                </div>
                <div v-show="!showPlayer" class="songs">
                    <canvas ref="timeLine" class="player__timeline" width="440" height="3"></canvas>
                    <div class="songs__top">
                        <span v-on:click="toggleList" class="songs__close">
                            <i class="ico ico-close"></i>
                        </span>
                    </div>
                    <ul class="songs__list">
                        <li v-for="(song, index) in songs" v-on:click="selectSong(index)" class="songs__item">
                            <div class="songs__name">{{ song.name }}</div>
                            <div class="songs__author">{{ song.author }}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <audio ref="audioPlayer" id="audioPlayer" v-bind:src="currentSong.src"></audio>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            toggleList() {
                this.showPlayer = !this.showPlayer;
            },
            togglePlay() {
                let _this = this;
                (this.player.paused) ? this.player.play() : this.player.pause();
                _this.drowTimeline()
            },
            selectSong(i) {
                console.log(this.currentSong.number);
                this.currentSong.number = i > this.$store.getters.songs.length - 1 ? i = 0 : i;
                this.clearTimeLines();
                this.setNewSong(true);
            },
            switchSong(e) {
                let direction = e.currentTarget.getAttribute('data-direction');
                (direction === 'next') ? this.currentSong.number++ : this.currentSong.number--;
                if (this.currentSong.number < 0) {this.currentSong.number = this.$store.getters.songs.length - 1}
                if (this.currentSong.number > this.$store.getters.songs.length - 1) {this.currentSong.number = 0}
                this.clearTimeLines();
                this.setNewSong(e);
            },
            setNewSong(e) {
                this.currentSong.name = this.$store.getters.songs[this.currentSong.number].name;
                this.currentSong.author = this.$store.getters.songs[this.currentSong.number].author;
                this.currentSong.src = this.$store.getters.songs[this.currentSong.number].src;
                this.currentSong.pic = this.$store.getters.songs[this.currentSong.number].pic;

                this.player.oncanplay = () =>{
                    this.setTime();
                    if (e) {this.togglePlay()}
                };
            },
            setTime() {
                let tTime = Math.floor(this.player.currentTime);
                let hr = Math.floor(tTime / 3600),
                    min = Math.floor((tTime - (hr * 3600)) / 60),
                    sec = Math.floor(tTime - (hr * 3600) - (min * 60));

                if (min < 10) { min = '0' + min}
                if (sec < 10) { sec = '0' + sec}

                this.songMin = min;
                this.songSec = sec;
            },
            clearTimeLines() {
                this.canvas.cctx.clearRect(0, 0, 445, 445);
                this.canvas.lctx.clearRect(0, 0, 440, 3);
            },
            progressSim(){
                if(this.canvas.ended) {
                    this.clearTimeLines();
                }
                console.log(this.canvas.al);
                this.canvas.diff = (this.canvas.al / this.player.duration) * Math.PI*2*10;
                this.canvas.cctx.lineWidth = 3;
                this.canvas.cctx.strokeStyle = "#fff";
                this.canvas.cctx.beginPath();
                this.canvas.cctx.lineCap = 'round';
                this.canvas.cctx.arc(226, 226, 219, this.canvas.start, (this.canvas.diff/10 + this.canvas.start).toFixed(3), false);
                this.canvas.cctx.stroke();

                this.canvas.ldiff = this.canvas.al * 440 / this.player.duration;
                this.canvas.lctx.lineWidth = 10;
                this.canvas.lctx.strokeStyle = "#fff";
                this.canvas.lctx.beginPath();
                this.canvas.lctx.lineCap = 'round';
                this.canvas.lctx.moveTo(0, 0);
                this.canvas.lctx.lineTo(this.canvas.ldiff, 0);
                this.canvas.lctx.stroke();

                this.drowTimeline();
            },
            drowTimeline() {
                this.canvas.al = Number(this.player.currentTime.toFixed(3));

                this.setTime();
                if (this.canvas.al < this.player.duration) {
                    requestAnimationFrame(() => this.progressSim());
                }

            }
        },
        computed: {
            songs() {
                return this.$store.getters.songs
            }
        },
        mounted() {
            this.player = this.$refs.audioPlayer;
            this.canvas.cctx = this.$refs.timeCircle.getContext('2d');
            this.canvas.lctx = this.$refs.timeLine.getContext('2d');
            this.setNewSong();
            this.player.onended = () =>{
                this.canvas.al = 0;
                this.canvas.ended = true;
                this.selectSong(++this.currentSong.number)
            }
        },
        data() {
            return {
                showPlayer: true,
                player: this.$refs.audioPlayer,
                songMin: '00',
                songSec: '00',
                canvas: {
                    cctx: '',
                    lctx: '',
                    ended: false,
                    al: 0,
                    start: 4.72,
                    diff: null,
                    ldiff: null
                },
                currentSong: {
                    number: 0,
                    name: '',
                    author: '',
                    src: '',
                    pic: '',
                }
            }
        }
    }
</script>

