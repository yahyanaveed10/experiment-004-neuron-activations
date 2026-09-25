import { runNetwork } from './network.mjs';

const inputA = document.querySelector('#input-a');
const inputB = document.querySelector('#input-b');
const playButton = document.querySelector('#play-button');
const stages = ['input-stage', 'hidden-stage', 'output-stage']
  .map((id) => document.getElementById(id));
let animationTimers = [];
let playbackId = 0;

function setText(id, value) {
  document.getElementById(id).textContent = value.toFixed(2);
}

function setBar(id, value) {
  document.getElementById(id).style.width = `${value * 100}%`;
}

function animateStages() {
  animationTimers.forEach(clearTimeout);
  animationTimers = [];
  stages.forEach((stage) => stage.classList.remove('active'));
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stages.forEach((stage, index) => {
    animationTimers.push(setTimeout(() => stage.classList.add('active'), index * 350));
  });
}

function render(animate = false) {
  const state = runNetwork(Number(inputA.value), Number(inputB.value));
  const [a, b] = state.inputs;
  const [first, second] = state.activations;
  setText('value-a', a);
  setText('value-b', b);
  setText('trace-a', a);
  setText('trace-b', b);
  setText('hidden-one', first);
  setText('hidden-two', second);
  setText('score', state.output);
  setBar('bar-a', a);
  setBar('bar-b', b);
  setBar('bar-one', first);
  setBar('bar-two', second);
  document.getElementById('explanation').textContent = first > 0
    ? `A is larger by ${first.toFixed(2)}, so unit 1 carries the difference.`
    : second > 0
      ? `B is larger by ${second.toFixed(2)}, so unit 2 carries the difference.`
      : 'The signals match. Both hidden units stay at zero.';
  if (animate) animateStages();
}

function choose(a, b) {
  inputA.value = String(a);
  inputB.value = String(b);
  render(true);
}

for (const button of document.querySelectorAll('#presets button')) {
  button.addEventListener('click', () => {
    playbackId++;
    playButton.disabled = false;
    choose(Number(button.dataset.a), Number(button.dataset.b));
  });
}

for (const input of [inputA, inputB]) {
  input.addEventListener('input', () => {
    playbackId++;
    playButton.disabled = false;
    render();
  });
}

playButton.addEventListener('click', async () => {
  const thisPlayback = ++playbackId;
  playButton.disabled = true;
  for (const [a, b] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
    if (thisPlayback !== playbackId) return;
    choose(a, b);
    await new Promise((resolve) => setTimeout(resolve, 1300));
  }
  if (thisPlayback === playbackId) playButton.disabled = false;
});

render();
