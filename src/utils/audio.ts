// ============================================================
// 音频系统 — Web Audio API 程序生成音效和背景音乐
// ============================================================

let ctx: AudioContext | null = null;
let musicGain: GainNode | null = null;
let musicOsc: OscillatorNode | null = null;
let musicPlaying = false;
let sfxEnabled = true;
let musicEnabled = true;

function getCtx(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
  }
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  return ctx;
}

// ---- 音效开关 ----
export function isSfxEnabled() { return sfxEnabled; }
export function isMusicEnabled() { return musicEnabled; }

export function toggleSfx(): boolean {
  sfxEnabled = !sfxEnabled;
  return sfxEnabled;
}

export function toggleMusic(): boolean {
  musicEnabled = !musicEnabled;
  if (musicEnabled) {
    startMusic();
  } else {
    stopMusic();
  }
  return musicEnabled;
}

// ---- 音效生成 ----
function playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.08, delay = 0) {
  if (!sfxEnabled) return;
  try {
    const c = getCtx();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, c.currentTime + delay);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(c.currentTime + delay);
    osc.stop(c.currentTime + delay + duration);
  } catch { /* ignore audio errors */ }
}

function playNoise(duration: number, volume = 0.04) {
  if (!sfxEnabled) return;
  try {
    const c = getCtx();
    const bufferSize = c.sampleRate * duration;
    const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3);
    }
    const source = c.createBufferSource();
    source.buffer = buffer;
    const gain = c.createGain();
    gain.gain.setValueAtTime(volume, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);
    source.start();
    source.stop(c.currentTime + duration);
  } catch { /* ignore */ }
}

function playChord(freqs: number[], duration: number, type: OscillatorType = 'sine', volume = 0.06) {
  freqs.forEach((f, i) => playTone(f, duration, type, volume / freqs.length, i * 0.03));
}

// ---- 具体音效 ----
export function sfxClick() {
  playTone(800, 0.06, 'sine', 0.04);
}

export function sfxSelect() {
  playTone(600, 0.08, 'sine', 0.05);
  playTone(900, 0.06, 'sine', 0.03, 0.05);
}

export function sfxConfirm() {
  playChord([523, 659, 784], 0.2, 'triangle', 0.06);
}

export function sfxEventNew() {
  playTone(440, 0.3, 'sine', 0.03);
  playTone(660, 0.2, 'sine', 0.02, 0.08);
}

export function sfxChoiceMade() {
  playNoise(0.08, 0.03);
  playTone(300, 0.15, 'triangle', 0.05);
}

export function sfxPositive() {
  playChord([523, 659, 784, 1047], 0.3, 'triangle', 0.06);
}

export function sfxNegative() {
  playTone(200, 0.4, 'sawtooth', 0.03);
  playTone(150, 0.3, 'sine', 0.03, 0.1);
}

export function sfxSocialEvent() {
  playTone(60, 0.8, 'sawtooth', 0.06);
  playNoise(0.3, 0.05);
  // Dramatic low rumble
  playTone(40, 1.0, 'sine', 0.08, 0.1);
}

export function sfxEnding() {
  // Fanfare chord
  playChord([392, 523, 659, 784, 1047], 0.6, 'triangle', 0.07);
  playTone(196, 0.8, 'sine', 0.05, 0.3);
}

export function sfxSadEnding() {
  playChord([262, 330, 392], 0.8, 'sine', 0.05);
}

export function sfxSkillUnlock() {
  playChord([784, 988, 1175], 0.25, 'triangle', 0.05);
}

export function sfxOpenTab() {
  playTone(1000, 0.04, 'sine', 0.02);
  playTone(1200, 0.03, 'sine', 0.02, 0.03);
}

export function sfxResourceDelta(positive: boolean) {
  if (positive) {
    playTone(600, 0.1, 'sine', 0.04);
    playTone(900, 0.08, 'sine', 0.03, 0.06);
  } else {
    playTone(400, 0.12, 'sine', 0.04);
    playTone(300, 0.1, 'sine', 0.03, 0.06);
  }
}

// ---- 背景音乐 ----
export function startMusic() {
  if (musicPlaying || !musicEnabled) return;
  try {
    const c = getCtx();
    musicGain = c.createGain();
    musicGain.gain.value = 0.015; // Very subtle

    // Create a gentle ambient pad using multiple oscillators
    const osc1 = c.createOscillator();
    const osc2 = c.createOscillator();
    const osc3 = c.createOscillator();

    osc1.type = 'sine';
    osc2.type = 'sine';
    osc3.type = 'sine';

    // Ambient chord: D minor (D, F, A) — melancholy but calm
    osc1.frequency.value = 146.83;  // D3
    osc2.frequency.value = 174.61;  // F3
    osc3.frequency.value = 220.00;  // A3

    // Slow LFO for subtle movement
    const lfo = c.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.1; // Very slow modulation
    const lfoGain = c.createGain();
    lfoGain.gain.value = 2;
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);
    lfoGain.connect(osc2.frequency);
    lfoGain.connect(osc3.frequency);
    lfo.start();

    osc1.connect(musicGain);
    osc2.connect(musicGain);
    osc3.connect(musicGain);
    musicGain.connect(c.destination);

    osc1.start();
    osc2.start();
    osc3.start();

    musicOsc = osc1; // Store reference for stopping
    musicPlaying = true;
  } catch { /* ignore */ }
}

export function stopMusic() {
  if (!musicPlaying) return;
  try {
    const c = getCtx();
    if (musicGain) {
      musicGain.gain.linearRampToValueAtTime(0, c.currentTime + 0.5);
    }
    if (musicOsc) {
      musicOsc.stop(c.currentTime + 0.5);
    }
    // Note: osc2, osc3, lfo will stop when musicOsc stops due to shared context
    musicPlaying = false;
    musicOsc = null;
    musicGain = null;
  } catch { /* ignore */ }
}
