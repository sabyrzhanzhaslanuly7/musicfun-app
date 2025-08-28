import {tracks} from './data.js'

const rootEl = document.getElementById("root")
const titleEl = document.createElement("h1")

titleEl.append('Musicfun Player')
rootEl.append(titleEl)

const trackListEl = document.createElement("ul")

const createTrackElement = (track) => {
	const trackEl = document.createElement("li")
	const trackTitleEl = document.createElement("div")
	const trackAudio = document.createElement("audio")

	trackTitleEl.textContent = track.title
	trackAudio.controls = true
	trackAudio.src = track.url

	trackEl.append(trackTitleEl, trackAudio)
	return trackEl
}

tracks.forEach(track => {
	const trackEl = createTrackElement(track)
	trackListEl.append(trackEl)
})

rootEl.append(trackListEl)
