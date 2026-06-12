const NPC_PROFILES = [
  {
    name: "빅터 로웰",
    role: "전당포 주인",
    trait: "말을 아끼고 숫자처럼 사람을 기억합니다.",
    rumorFail: "모르는 일입니다. 저는 장부에 없는 말은 하지 않습니다.",
    calmRumor: "어젯밤 장부를 정리했습니다. 밖은 지나치게 조용했습니다.",
    pressure: "묻는 순서가 이상하군요. 먼저 당신이 아는 걸 말해보시죠.",
  },
  {
    name: "엘리엇 그레이",
    role: "약사",
    trait: "예민하고 냄새와 발소리에 집착합니다.",
    rumorFail: "냄새가 너무 섞여 있었습니다. 기억을 믿기 어렵군요.",
    calmRumor: "약국 문은 잠겨 있었습니다. 금속이 긁히는 소리도 없었고요.",
    pressure: "그 질문, 이미 답을 정해두고 묻는 표정입니다.",
  },
  {
    name: "마르코 벨리니",
    role: "술집 주인",
    trait: "농담으로 긴장을 숨기지만 눈은 늘 주변을 훑습니다.",
    rumorFail: "하하, 손님들 말은 반만 믿는 게 좋습니다. 제 말도요.",
    calmRumor: "술집은 늦게까지 시끄러웠지만, 한순간 이상하게 조용해졌습니다.",
    pressure: "탐정님, 술 한 잔 없이 그런 질문은 너무 차갑습니다.",
  },
  {
    name: "로렌 밀러",
    role: "재단사",
    trait: "옷감과 실밥을 보고 사람을 구분합니다.",
    rumorFail: "밤엔 바늘귀도 흐려집니다. 제가 본 게 맞는지 모르겠어요.",
    calmRumor: "누군가 급히 지나갔다면 옷자락 소리가 났을 텐데, 못 들었습니다.",
    pressure: "제 손은 거짓말을 싫어하지만, 입은 겁이 많습니다.",
  },
  {
    name: "아멜리아 브룩",
    role: "서점 주인",
    trait: "침착하고 오래된 문장처럼 천천히 말합니다.",
    rumorFail: "기억은 책갈피처럼 정확하지 않습니다. 잘못 꽂히기도 하죠.",
    calmRumor: "창밖을 오래 봤습니다. 움직임보다 정적이 더 눈에 띄었습니다.",
    pressure: "진실은 서두르면 찢어집니다. 천천히 묻죠.",
  },
  {
    name: "토마스 리드",
    role: "신문 배달부",
    trait: "호기심이 많고 들은 말을 참지 못합니다.",
    rumorFail: "들은 건 많은데, 쓸 만한 건 없어요. 다들 겁먹어서요.",
    calmRumor: "새벽 배달길엔 별일 없었어요. 대신 몇몇 집 불이 늦게 꺼졌죠.",
    pressure: "저는 본 것만 말합니다. 아니, 들은 것도 조금은요.",
  },
  {
    name: "세실 하워드",
    role: "의뢰인",
    trait: "겁이 많아 작은 소리에도 몸을 움츠립니다.",
    rumorFail: "전 아무것도 못 봤습니다. 정말입니다. 제발 그렇게 적어주세요.",
    calmRumor: "문을 걸어 잠그고 숨죽였습니다. 바깥은 너무 조용했어요.",
    pressure: "저를 의심하시는 겁니까? 저는 살아남고 싶을 뿐입니다.",
  },
  {
    name: "그레이스 모건",
    role: "여관 주인",
    trait: "사람의 거짓말보다 침묵을 더 잘 읽습니다.",
    rumorFail: "손님들은 밤이 되면 서로 다른 얼굴을 합니다. 하나로 말하기 어렵네요.",
    calmRumor: "계단은 조용했습니다. 누군가 움직였다면 삐걱임이 남았을 겁니다.",
    pressure: "여관에서는 비밀도 방값을 냅니다. 공짜로 드릴 순 없죠.",
  },
  {
    name: "오스카 베일",
    role: "마부",
    trait: "거칠지만 발자국과 진흙에는 정직합니다.",
    rumorFail: "난 사람 말은 잘 몰라. 발자국이면 몰라도.",
    calmRumor: "마차 바퀴 자국은 없었어. 누가 갔다면 걸어서 갔겠지.",
    pressure: "빙빙 돌리지 마. 묻고 싶은 걸 똑바로 물어.",
  },
  {
    name: "노라 클라인",
    role: "꽃집 주인",
    trait: "부드럽게 말하지만 세세한 색을 놓치지 않습니다.",
    rumorFail: "어둠 속에서는 꽃 색도 거짓말을 해요. 확신할 수 없어요.",
    calmRumor: "꽃을 들여놓느라 늦게까지 깨어 있었지만, 낯선 그림자는 못 봤어요.",
    pressure: "무서운 질문이네요. 그래도 피하지는 않을게요.",
  },
];

const NPCS = NPC_PROFILES.map(profile => profile.name);

const CLOTHES = ["회색 코트", "검은 코트", "갈색 망토", "붉은 숄", "남색 조끼", "긴 외투"];
const HANDS = ["검은 장갑", "흰 장갑", "갈색 장갑", "붕대를 감은 손"];
const ITEMS = ["은색 회중시계", "황동 라이터", "낡은 수첩", "작은 유리병", "만년필", "열쇠 꾸러미"];
const SEARCH_SPOTS_BY_LOCATION = {
  square: [
    "분수대 주변",
    "종탑 아래",
    "광장 벤치 밑",
    "게시판 뒤쪽",
    "돌바닥 틈",
  ],
  pharmacy: [
    "약병 진열장",
    "조제대 아래",
    "잠긴 약품 서랍",
    "뒷문 손잡이",
    "깨진 유리 조각",
  ],
  bar: [
    "카운터 아래",
    "술통 뒤편",
    "뒷문 발판",
    "난로 주변",
    "빈 잔이 쌓인 테이블",
  ],
  alley: [
    "벽돌담 아래",
    "쓰레기통 뒤",
    "배수로 입구",
    "젖은 발자국",
    "찢어진 포스터",
  ],
  market: [
    "곡물 자루 사이",
    "과일 좌판 아래",
    "천막 기둥",
    "빈 상자 더미",
    "시장 뒷길",
  ],
  harbor: [
    "밧줄 더미",
    "젖은 나무 부두",
    "창고 문틈",
    "닻 주변",
    "검은 진흙 웅덩이",
  ],
};

const LOCATION_BACKGROUNDS = {
  pharmacy: "bg1.png",
  square: "bg2.png",
  bar: "bg3.png",
  alley: "bg4.png",
  market: "bg5.png",
  harbor: "bg6.png",
};

const LOCATIONS = {
  square: {
    name: "광장",
    connected: ["pharmacy", "bar", "market"],
    description: "마을 중심 광장입니다. 사람들의 발소리가 여전히 잦습니다.",
  },
  pharmacy: {
    name: "약국",
    connected: ["square", "alley"],
    description: "약품 냄새가 짙게 배어 있는 약국입니다. 작은 단서가 있을 수 있습니다.",
  },
  bar: {
    name: "술집",
    connected: ["square", "harbor"],
    description: "소란스러운 술집입니다. 거짓말과 진실이 섞여 있을 것입니다.",
  },
  alley: {
    name: "골목길",
    connected: ["pharmacy", "market"],
    description: "어두운 골목길입니다. 발자국과 흔적을 찾아보세요.",
  },
  market: {
    name: "시장",
    connected: ["square", "alley", "harbor"],
    description: "텅 빈 시장입니다. 밤의 흔적이 남아 있을지 모릅니다.",
  },
  harbor: {
    name: "항구",
    connected: ["bar", "market"],
    description: "습한 항구입니다. 진흙과 밧줄 자국을 주의하세요.",
  },
};

const LOCATION_TRACES = {
  square: ["분수 물기", "종탑 먼지"],
  pharmacy: ["약품 냄새", "고운 유리 가루"],
  bar: ["술 냄새", "담배 재"],
  alley: ["벽돌 먼지", "축축한 흙"],
  market: ["곡물 가루", "과일즙 얼룩"],
  harbor: ["짠 바닷물 냄새", "검은 진흙"],
};

const FIRST_NIGHT_LOCATION_STORIES = {
  square: "광장에 들어서자 종탑의 그림자가 발끝까지 내려와 있었습니다.\n\n마을 사람들은 창문 뒤에서 당신을 보았지만, 누구도 먼저 문을 열지 않았습니다.",
  pharmacy: "약국의 유리문은 안쪽에서 잠겨 있었습니다.\n\n문틈으로 흘러나온 약품 냄새 사이에, 오래 닫힌 방의 차가운 공기가 섞여 있었습니다.",
  bar: "술집 안쪽에서는 웃음소리가 끊긴 뒤의 정적만 남아 있었습니다.\n\n탁자 위 잔들은 비어 있었고, 누군가 막 자리를 뜬 듯 의자가 비스듬히 밀려 있었습니다.",
  alley: "골목길은 낮보다 더 좁아 보였습니다.\n\n벽돌 사이의 습기가 발소리를 삼켰고, 어둠은 당신보다 먼저 길 안쪽으로 걸어 들어갔습니다.",
  market: "시장의 천막들은 바람도 없는데 작게 흔들렸습니다.\n\n낮 동안 사람들로 가득했던 길에는 과일 냄새와 발자국만 남아 있었습니다.",
  harbor: "항구의 물결은 검은 천처럼 느리게 접혔습니다.\n\n밧줄 더미 너머로 배가 삐걱였지만, 그 소리가 사람의 숨소리처럼 들렸습니다.",
};

const DAILY_LOCATION_LIMIT = 3;

const state = {
  day: 0,
  phase: "night",
  playerLocation: "square",
  actionsLeft: DAILY_LOCATION_LIMIT,
  suspects: [],
  mafia: null,
  npcs: [],
  caseLogs: [],
  currentLocationNpcs: [],
  log: [],
  sceneText: "",
  lastRenderedScene: "",
  activeNpcId: null,
  pendingActiveNpcId: null,
  sceneMode: null,
  lastNightLocations: {},
  lastNightTraces: {},
  investigationFocus: {},
  liarIds: [],
  rumorRefusals: {},
  alibiRefusals: {},
  searchCompletions: {},
  investigatedLocations: {},
  notebook: {
    evidence: [],
    suspects: {},
  },
  gameOver: false,
  menu: null,
  continueQueue: [],
  awaitingContinue: false,
  isMafiaWin: false,
  quietNightStreak: 0,
  searchSession: null,
  analysisReturnScene: null,
  startedAt: null,
  endedAt: null,
  endingType: null,
  musicSuppressed: false,
};

const MAX_MARKED_SUSPECTS = 4;
const SAVE_KEY = "mafia-detective-save-v1";

const TITLE_SCENE_TEXT = "책상 위에 낡은 사건 파일이 놓여 있습니다.\n\n표지에는 검은 잉크로 한 단어만 적혀 있습니다.\n\nMAFIA\n\n텍스트를 통해 추리를 하고,\n숨어 있는 마피아를 찾아보세요.";

const OPENING_STORY_ENDING = "당신의 마을에 도착했습니다.\n\n어느 곳에서 시작하시겠습니까?";

const OPENING_STORY_VARIANTS = [
  [
    "비가 오던 밤, 당신의 사무실 문틈으로 편지 한 통이 밀려 들어왔습니다.",
    "봉투에는 주소도, 보낸 사람의 이름도 없었습니다.\n\n다만 젖은 종이 위에 검은 잉크가 번져 있었습니다.",
    "우리 마을에는 밤마다 누군가 움직입니다.",
    "처음에는 발소리뿐이었습니다.\n\n그 다음에는 거짓말이 늘었습니다.\n그리고 이제는, 아무도 서로의 이름을 끝까지 부르지 않습니다.",
    "편지의 마지막 줄은 다른 글씨보다 깊게 눌려 있었습니다.\n\n당신이 와야 합니다.\n이번에는 틀리면 안 됩니다.",
    "며칠 뒤, 당신은 종이 울리지 않는 마을 앞에 도착했습니다.",
    OPENING_STORY_ENDING,
  ],
  [
    "아침 신문 한쪽 구석에 작은 기사가 실려 있었습니다.",
    "제목은 단 한 줄이었습니다.\n\n종이 울리지 않는 마을.",
    "기사에는 사망자도, 용의자도 적혀 있지 않았습니다.\n\n다만 이상할 만큼 많은 사람들이 같은 말을 했다고 적혀 있었습니다.",
    "어젯밤에는 아무 일도 없었습니다.",
    "당신은 그 문장을 오래 바라보았습니다.\n\n사람들이 한목소리로 아무 일도 없었다고 말할 때, 대개는 무언가를 숨기고 있습니다.",
    "신문 하단에는 마을 이름 하나가 작게 남아 있었습니다.",
    OPENING_STORY_ENDING,
  ],
  [
    "당신은 오래된 사건 수첩을 정리하다가 찢긴 페이지 하나를 발견했습니다.",
    "누가 끼워 넣었는지는 알 수 없었습니다.\n\n하지만 종이에는 마을 지도가 삐뚤게 그려져 있었습니다.",
    "광장, 시장, 항구, 골목길.",
    "지도 아래에는 짧은 문장이 적혀 있었습니다.\n\n밤에는 모두가 움직인다.\n아침에는 한 사람만 거짓말을 한다.",
    "당신은 그 문장을 읽고도 한동안 페이지를 넘기지 못했습니다.",
    "수첩의 마지막 칸에는 아직 적히지 않은 이름 하나가 기다리고 있었습니다.",
    OPENING_STORY_ENDING,
  ],
];

const INITIAL_SCENE_TEXT = OPENING_STORY_ENDING;

let sceneTypingTimer = null;
let typingSoundTimer = null;

const audioState = {
  musicEnabled: true,
  sfxEnabled: true,
  musicVolume: 0.32,
  sfxVolume: 0.32,
  unlocked: false,
  currentMusic: null,
  tracks: {
    night: new Audio("music/night.mp3"),
    morning: new Audio("music/morning.mp3"),
    success: new Audio("music/succes.mp3"),
    fail: new Audio("music/fail.mp3"),
    typing: new Audio("music/typing.mp3"),
    click: new Audio("music/click.mp3"),
  },
};

audioState.tracks.night.loop = true;
audioState.tracks.morning.loop = true;
audioState.tracks.success.loop = true;
audioState.tracks.fail.loop = true;
audioState.tracks.typing.loop = true;
audioState.tracks.night.volume = audioState.musicVolume;
audioState.tracks.morning.volume = audioState.musicVolume;
audioState.tracks.success.volume = audioState.musicVolume;
audioState.tracks.fail.volume = audioState.musicVolume;
audioState.tracks.typing.volume = audioState.sfxVolume * 0.75;
audioState.tracks.click.volume = audioState.sfxVolume;

function unlockAudio() {
  if (audioState.unlocked) return;
  audioState.unlocked = true;
  updateMusicForPhase();
}

function playAudio(audio) {
  if (!audioState.sfxEnabled || !audioState.unlocked || !audio) return;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function playClickSound() {
  playAudio(audioState.tracks.click);
}

function playTypingSound() {
  if (!audioState.sfxEnabled || !audioState.unlocked) return;
  const track = audioState.tracks.typing;
  if (track.paused) {
    track.currentTime = 0;
    track.play().catch(() => {});
  }
}

function stopTypingSoundTimer() {
  if (typingSoundTimer) clearInterval(typingSoundTimer);
  typingSoundTimer = null;
  const track = audioState.tracks.typing;
  track.pause();
  track.currentTime = 0;
}

function applyAudioVolumes() {
  audioState.tracks.night.volume = audioState.musicVolume;
  audioState.tracks.morning.volume = audioState.musicVolume;
  audioState.tracks.success.volume = audioState.musicVolume;
  audioState.tracks.fail.volume = audioState.musicVolume;
  audioState.tracks.typing.volume = audioState.sfxVolume * 0.75;
  audioState.tracks.click.volume = audioState.sfxVolume;
}

function stopAllMusic() {
  ["night", "morning", "success", "fail"].forEach(key => {
    const track = audioState.tracks[key];
    track.pause();
  });
  audioState.currentMusic = null;
}

function setMusic(trackName) {
  if (!audioState.musicEnabled || !audioState.unlocked) return;
  const next = audioState.tracks[trackName];
  if (!next) return;
  if (audioState.currentMusic === next) {
    if (next.paused) next.play().catch(() => {});
    return;
  }
  if (audioState.currentMusic) audioState.currentMusic.pause();
  audioState.currentMusic = next;
  next.currentTime = 0;
  next.play().catch(() => {});
}

function updateMusicForPhase() {
  if (state.musicSuppressed) {
    stopAllMusic();
    return;
  }
  if (!audioState.musicEnabled) {
    stopAllMusic();
    return;
  }
  if (state.endingType === "success") {
    setMusic("success");
    return;
  }
  if (state.endingType === "wrong") {
    setMusic("fail");
    return;
  }
  if (state.endingType === "mafia") {
    setMusic("night");
    return;
  }
  setMusic(state.phase === "day" && state.day > 0 ? "morning" : "night");
}

function updateAudioSettings() {
  unlockAudio();
  const bgmEnabled = document.getElementById("bgm-enabled");
  const sfxEnabled = document.getElementById("sfx-enabled");
  const bgmVolume = document.getElementById("bgm-volume");
  const sfxVolume = document.getElementById("sfx-volume");

  if (bgmEnabled) audioState.musicEnabled = bgmEnabled.checked;
  if (sfxEnabled) audioState.sfxEnabled = sfxEnabled.checked;
  if (bgmVolume) audioState.musicVolume = Number(bgmVolume.value) / 100;
  if (sfxVolume) audioState.sfxVolume = Number(sfxVolume.value) / 100;

  applyAudioVolumes();
  if (!audioState.musicEnabled) {
    stopTypingSoundTimer();
    stopAllMusic();
  } else {
    updateMusicForPhase();
  }
}

function syncAudioSettingsControls() {
  const bgmEnabled = document.getElementById("bgm-enabled");
  const sfxEnabled = document.getElementById("sfx-enabled");
  const bgmVolume = document.getElementById("bgm-volume");
  const sfxVolume = document.getElementById("sfx-volume");

  if (bgmEnabled) bgmEnabled.checked = audioState.musicEnabled;
  if (sfxEnabled) sfxEnabled.checked = audioState.sfxEnabled;
  if (bgmVolume) bgmVolume.value = Math.round(audioState.musicVolume * 100);
  if (sfxVolume) sfxVolume.value = Math.round(audioState.sfxVolume * 100);
}

function startGameAudio() {
  unlockAudio();
  updateMusicForPhase();
}

function isPublicAlive(npc) {
  const hasUnfoundCase = state.caseLogs.some(c => c.victimId === npc.id && !c.bodyFound);
  return npc.alive || hasUnfoundCase;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function sample(arr, count) {
  return shuffle(arr).slice(0, count);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getNightLabel(day) {
  return day === 0 ? "첫날 밤" : `${day}일차 밤`;
}

function getSearchSpots(locationId) {
  return SEARCH_SPOTS_BY_LOCATION[locationId] || SEARCH_SPOTS_BY_LOCATION.square;
}

function resetNotebook() {
  state.notebook = {
    evidence: [],
    suspects: {},
  };
}

function ensureSuspectNote(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  if (!npc) return null;
  if (!state.notebook.suspects[npcId]) {
    state.notebook.suspects[npcId] = {
      name: npc.name,
      clothing: null,
      items: null,
      alibi: null,
      alibis: [],
      traces: [],
    };
  }
  return state.notebook.suspects[npcId];
}

function rememberEvidence(kind, text, data = {}) {
  const day = data.day ?? state.day;
  if (hasEvidence(kind, text, day)) return false;
  state.notebook.evidence.push({ kind, text, day, ...data });
  return true;
}

function hasEvidence(kind, text, day = state.day) {
  return state.notebook.evidence.some(e => e.kind === kind && e.text === text && e.day === day);
}

function rememberSuspectInfo(npcId, patch) {
  const note = ensureSuspectNote(npcId);
  if (!note) return;
  Object.assign(note, patch);
}

function rememberSuspectTrace(npcId, traceInfo) {
  const note = ensureSuspectNote(npcId);
  if (!note) return;
  if (!note.traces.some(item => item.day === traceInfo.day && item.trace === traceInfo.trace && item.location === traceInfo.location)) {
    note.traces.push(traceInfo);
  }
}

function getTraceForNpc(npcId) {
  if (state.lastNightTraces[npcId]) return state.lastNightTraces[npcId];
  const location = state.lastNightLocations[npcId] || state.npcs.find(npc => npc.id === npcId)?.location || state.playerLocation;
  return {
    day: state.day,
    location,
    trace: pickRandom(LOCATION_TRACES[location] || ["정체 모를 먼지"]),
  };
}

function assignNightTraces(caseLog = null) {
  state.lastNightTraces = {};
  for (const npc of state.npcs) {
    if (!isPublicAlive(npc)) continue;
    let location = state.lastNightLocations[npc.id] || npc.location;
    if (caseLog && npc.id === state.mafia.id) {
      location = pickRandom([caseLog.start, caseLog.crime, caseLog.escape]);
    }
    state.lastNightTraces[npc.id] = {
      day: state.day + 1,
      location,
      trace: pickRandom(LOCATION_TRACES[location] || ["정체 모를 먼지"]),
    };
  }
}

function getFakeAlibiLocation(actualLocation) {
  const candidates = Object.keys(LOCATIONS).filter(location => location !== actualLocation);
  return pickRandom(candidates);
}

function getNpcAlibiQuote(npc, locationId) {
  const locName = LOCATIONS[locationId].name;
  const alibiTemplates = {
    "빅터 로웰": {
      square: "어젯밤 광장에 있었습니다. 분수대 소리를 세고 있었죠.",
      pharmacy: "어젯밤 약국 쪽에 용무가 있어 가 있었습니다.",
      bar: "어젯밤 술집에 있었습니다. 소음 속에서 혼자 계산을 하고 있었죠.",
      alley: "어젯밤 골목길에 있었습니다. 어둠 속에서 벽돌 수를 세며 걸었습니다.",
      market: "어젯밤 시장에 있었습니다. 거래 장부를 정리할 일이 있었습니다.",
      harbor: "어젯밤 항구에 있었습니다. 화물 선적량을 기록하느라 밤을 샜습니다.",
    },
    "엘리엇 그레이": {
      square: "어젯밤 광장에 있었습니다. 차가운 분수대 냄새가 났던 기억이 나는군요.",
      pharmacy: "어젯밤 제 약국을 지키고 있었습니다. 약품 냄새가 진동을 했지요.",
      bar: "어젯밤 술집 구석에 있었습니다. 독한 술 냄새와 시끄러운 발소리가 섞여 있더군요.",
      alley: "어젯밤 골목길을 지나고 있었습니다. 눅눅한 흙 냄새가 났습니다.",
      market: "어젯밤 시장에 있었습니다. 낮에 상인들이 남긴 과일 향이 남아 있더군요.",
      harbor: "어젯밤 항구에 가 있었습니다. 비릿한 짠내와 습기 때문에 불쾌했습니다.",
    },
    "마르코 벨리니": {
      square: "어젯밤엔 바람 좀 쐬려고 광장을 서성였습니다. 싱거운 밤이었죠.",
      pharmacy: "어젯밤 약국에 있었습니다. 요즘 몸이 영 예전 같지 않아서 영양제라도 사러 갔었죠.",
      bar: "어젯밤 제 술집을 보고 있었죠. 손님들 뒤치다꺼리하느라 바빴습니다.",
      alley: "어젯밤엔 골목길에 잠깐 서 있었습니다. 바람이 차서 금방 들어왔지만요.",
      market: "어젯밤엔 시장 근처를 배회했습니다. 혹시 늦게까지 문을 연 야식 가판대가 있나 해서요.",
      harbor: "어젯밤엔 머리나 식힐 겸 항구 쪽 부두에 나가 있었습니다.",
    },
    "로렌 밀러": {
      square: "어젯밤 광장에 서 있었습니다. 사람들의 옷자락이 바람에 나부끼는 소리를 들었습니다.",
      pharmacy: "어젯밤 약국에 가 있었습니다. 약사님의 코트 실밥이 뜯어져 있던 게 기억나는군요.",
      bar: "어젯밤엔 술집에 있었습니다. 독한 술에 젖은 거친 모직 옷 냄새가 가득하더군요.",
      alley: "어젯밤 골목길을 걷고 있었습니다. 좁고 차가운 벽 사이로 스치는 바람 소리가 좋았습니다.",
      market: "어젯밤 시장에 있었습니다. 낮에 쓰던 빈 천막 천을 수거하려고 잠시 들렀지요.",
      harbor: "어젯밤 항구 쪽에 있었습니다. 젖은 밧줄 섬유 냄새가 진하게 베어 나왔습니다.",
    },
    "아멜리아 브룩": {
      square: "어젯밤엔 잠이 오지 않아 광장 벤치에 앉아 조용히 책을 읽고 있었습니다.",
      pharmacy: "어젯밤 약국에 들렀습니다. 머리가 조금 아파서 진통제가 필요했거든요.",
      bar: "어젯밤엔 술집에 잠시 들어가 앉아 있었습니다. 소란스러운 사람들을 조용히 관찰했지요.",
      alley: "어젯밤엔 오래된 기억을 짚어가듯 골목길을 천천히 걸었습니다.",
      market: "어젯밤엔 시장 공터를 산책했습니다. 밤의 시장은 책방의 밤처럼 차분하더군요.",
      harbor: "어젯밤엔 항구의 등대를 바라보며 부두 곁에 서 있었습니다.",
    },
    "토마스 리드": {
      square: "어젯밤 광장에 있었어요! 새벽 배달을 준비하기 전에 종탑 근처에 가 있었거든요.",
      pharmacy: "어젯밤 약국 근처를 지나갔어요. 약사님이 불을 늦게 끄시더라고요.",
      bar: "어젯밤엔 당근 술집에 있었죠! 재미있는 소문이 있나 귀를 기울이고 있었습니다.",
      alley: "어젯밤엔 지름길인 골목길로 뛰어다녔습니다. 밤의 골목은 좀 오싹하지만요.",
      market: "어젯밤엔 시장 가판대 구석에 걸터앉아 있었습니다. 야시장 구경도 좀 할 겸 해서요.",
      harbor: "어젯밤엔 물건이 들어오는 걸 보려고 항구 부두 쪽에 가 있었습니다.",
    },
    "세실 하워드": {
      square: "어젯밤엔 광장에 있었습니다... 무서워서 분수대 뒤 그늘에 몸을 숨기고 있었어요.",
      pharmacy: "어젯밤 약국에 숨어 있었습니다... 문 틈새로 들어오는 바람 소리에도 깜짝깜짝 놀랐지요.",
      bar: "어젯밤엔 사람들이 많은 술집 구석자리에 웅크려 앉아 있었습니다. 거기가 덜 무섭거든요...",
      alley: "어젯밤엔 어두운 골목길에 갇혀 있었습니다. 발소리가 날 때마다 너무 무서웠습니다.",
      market: "어젯밤엔 시장의 빈 상자 더미 뒤에 숨어 있었습니다. 바깥이 너무 소란스러워서요...",
      harbor: "어젯밤엔 항구 창고 옆 밧줄 더미 틈에 숨어 있었습니다... 밤 안개가 무서웠어요.",
    },
    "그레이스 모건": {
      square: "어젯밤 광장에 있었습니다. 말 없는 사람들의 침묵이 더 크게 느껴지는 밤이었죠.",
      pharmacy: "어젯밤 약국에 들렀습니다. 약사님과 짧은 인사를 나누었지요.",
      bar: "어젯밤엔 술집에서 손님들의 수다와 그 이면의 기색을 살피고 있었습니다.",
      alley: "어젯밤엔 조용히 골목길을 걷고 있었습니다. 밤이 되면 다들 정직해지니까요.",
      market: "어젯밤 시장에 잠깐 다녀왔습니다. 여관에 쓸 식재료를 수령하려 했지요.",
      harbor: "어젯밤엔 밤바람을 쐬러 항구 부두로 내려가 웅성이는 소리를 듣고 있었습니다.",
    },
    "오스카 베일": {
      square: "어젯밤 광장에 마차를 세워두고 손님을 기다리며 말고삐를 쥐고 있었습니다.",
      pharmacy: "어젯밤 약국에 약을 지으러 다녀왔습니다. 다리가 영 뻐근해서 말입니다.",
      bar: "어젯밤엔 고단한 하루를 마감하고 술집 구석에서 맥주나 한잔 들이켜고 있었습니다.",
      alley: "어젯밤엔 마차가 지나갈 수 없는 좁은 골목길에 발자국을 남기며 걸어 다녔지.",
      market: "어젯밤엔 시장 뒤편에서 짐을 내리고 마차 바퀴 자국을 지우며 쉬고 있었습니다.",
      harbor: "어젯밤엔 항구에서 짐 실을 준비를 하며 진흙 바닥을 살피고 있었습니다.",
    },
    "노라 클라인": {
      square: "어젯밤 광장에 있었습니다. 달빛을 받아 하얗게 빛나는 분수대를 보았어요.",
      pharmacy: "어젯밤 약국에 가 있었습니다. 꽃 향기보다 강한 알싸한 약 냄새를 맡으면서요.",
      bar: "어젯밤엔 시끌벅적한 술집에 어울리지 않게 꽃 몇 송이를 안고 앉아 있었습니다.",
      alley: "어젯밤엔 어두운 골목길에 핀 야생화의 흔적을 따라 조용히 걸었습니다.",
      market: "어젯밤 시장에 가 있었습니다. 오늘 아침 팔 꽃 자루들을 정리하느라 밤이 늦었거든요.",
      harbor: "어젯밤엔 밤 안개가 깔린 항구 부두 근처에서 바다 냄새를 맡고 있었어요.",
    }
  };

  const templates = alibiTemplates[npc.name];
  if (templates && templates[locationId]) {
    return templates[locationId];
  }
  return `저는 어젯밤 ${locName}에 있었습니다.`;
}

function getCaseRoute(caseLog) {
  return [caseLog.start, caseLog.crime, caseLog.escape].filter(Boolean);
}

function getCaseMovementText(caseLog) {
  const start = LOCATIONS[caseLog.start].name;
  const crime = LOCATIONS[caseLog.crime].name;
  return `${start} 쪽에서 ${crime} 방향으로 이어진 밤의 흔적`;
}

function getMovementEvidenceText(caseLog, observedLocation = state.playerLocation) {
  const start = LOCATIONS[caseLog.start].name;
  const crime = LOCATIONS[caseLog.crime].name;
  const escape = LOCATIONS[caseLog.escape].name;

  if (observedLocation === caseLog.escape) {
    return `${crime} 쪽에서 ${escape} 방향으로 이어진 밤의 흔적`;
  }
  return `${start} 쪽에서 ${crime} 방향으로 이어진 밤의 흔적`;
}

function getMovementEvidenceRoute(caseLog, observedLocation = state.playerLocation) {
  if (observedLocation === caseLog.escape) {
    return [caseLog.crime, caseLog.escape];
  }
  return [caseLog.start, caseLog.crime];
}

function getWeakSearchHint(caseLog, locationId) {
  const crime = LOCATIONS[caseLog.crime].name;
  const start = LOCATIONS[caseLog.start].name;
  const escape = LOCATIONS[caseLog.escape].name;

  if (locationId === caseLog.crime) {
    return `결정적인 흔적은 건지지 못했지만, 현장의 흐트러진 자국은 ${start} 쪽 길목과 이어져 보입니다.`;
  }
  if (locationId === caseLog.start) {
    return `결정적인 흔적은 없지만, 이곳의 작은 소란은 ${crime} 쪽으로 옮겨간 듯합니다.`;
  }
  if (locationId === caseLog.escape) {
    return `결정적인 흔적은 없지만, ${crime} 쪽에서 넘어온 듯한 희미한 기척이 남아 있습니다.`;
  }
  return `결정적인 흔적은 없지만, ${crime} 주변을 다시 살펴볼 필요가 있어 보입니다.`;
}

function getCaseAge(caseLog) {
  return state.day - caseLog.day;
}

function isCaseTraceSearchable(caseLog) {
  const age = getCaseAge(caseLog);
  return age >= 1 && age <= 2;
}

function isCaseRouteLocation(caseLog, locationId) {
  return [caseLog.start, caseLog.crime, caseLog.escape].includes(locationId);
}

function findSearchableCaseAtLocation(locationId) {
  return state.caseLogs.find(caseLog =>
    isCaseTraceSearchable(caseLog) &&
    isCaseRouteLocation(caseLog, locationId)
  );
}

function findStaleCaseAtLocation(locationId) {
  return state.caseLogs.find(caseLog =>
    getCaseAge(caseLog) > 2 &&
    isCaseRouteLocation(caseLog, locationId)
  );
}

function findNearbySearchableCase(locationId) {
  const connected = LOCATIONS[locationId]?.connected || [];
  return state.caseLogs.find(caseLog =>
    isCaseTraceSearchable(caseLog) &&
    connected.some(nearbyId => isCaseRouteLocation(caseLog, nearbyId))
  );
}

function getSearchFailureNote(staleCase, nearbyCase) {
  const locationName = LOCATIONS[state.playerLocation].name;
  if (staleCase) {
    return `${locationName}에는 오래된 밤의 흔적이 남아 있지만, 사람들의 발길과 먼지가 방향을 거의 지워 버렸습니다. 3일차가 지난 동선은 더 이상 수색으로 읽기 어렵습니다.`;
  }
  if (nearbyCase) {
    return `${locationName} 자체에서는 결정적인 흔적을 찾지 못했습니다. 다만 먼지와 발자국이 인접한 길목 몇 곳에서 더 어지럽게 흐트러져 있습니다. 밤의 흔적이 이곳을 스쳤는지, 주변에서 흘러든 것인지는 아직 단정하기 어렵습니다.`;
  }
  return `${locationName}에는 장사꾼과 주민들의 생활 흔적만 뒤섞여 있습니다. 급히 지나간 밤의 흔적은 읽히지 않습니다.`;
}

function getWeakCorpseHint(caseLog) {
  const hints = [
    "피해자의 몸에서는 결정적인 물증을 찾기 어렵습니다. 대신 주변 현장에 움직임의 흔적이 더 남아 있을 가능성이 큽니다.",
    "시체에 남은 흔적은 너무 흐립니다. 몸보다 주변 바닥과 길목을 다시 보는 편이 나아 보입니다.",
    "범인이 남긴 직접 물증은 지워진 듯합니다. 현장 주변의 소리와 발자국을 더 캐물어야 할 것 같습니다.",
    "시체만으로는 부족합니다. 이 장소에서 다시 탐문하거나 현장을 넓게 수색하면 실마리가 잡힐 수 있습니다.",
  ];
  return pickRandom(hints);
}

function addInvestigationFocus(locationId) {
  state.investigationFocus[locationId] = state.day;
}

function hasInvestigationFocus(locationId = state.playerLocation) {
  return state.investigationFocus[locationId] === state.day;
}

function isMarkedSuspect(npcId) {
  return state.suspects.some(npc => npc.id === npcId);
}

function toggleSuspect(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  if (!npc || !isPublicAlive(npc)) return;

  if (isMarkedSuspect(npcId)) {
    state.suspects = state.suspects.filter(s => s.id !== npcId);
    updateScene(`${npc.name}의 의심 표시를 해제했습니다.`);
  } else {
    if (state.suspects.length >= MAX_MARKED_SUSPECTS) {
      updateScene(`의심 표시는 최대 ${MAX_MARKED_SUSPECTS}명까지만 유지할 수 있습니다.\n누군가를 해제한 뒤 다시 표시하세요.`);
    } else {
      state.suspects.push(npc);
      ensureSuspectNote(npcId);
      updateScene(`${npc.name}을(를) 의심 인물로 표시했습니다.\n이제 맵과 수첩에서 위치와 조사 기록을 추적합니다.`);
    }
  }

  refreshStatusModal();
  render();
}

function setSceneText(text) {
  const scene = document.getElementById("scene");
  if (!scene) return;
  if (sceneTypingTimer) clearTimeout(sceneTypingTimer);
  stopTypingSoundTimer();
  scene.innerHTML = "";
  const activeNpc = getActiveSceneNpc();
  if (activeNpc && state.sceneMode === "accuse") {
    scene.insertAdjacentHTML("beforeend", `
      <div class="accuse-scene">
        ${getNpcPortraitHtml(activeNpc, "accuse")}
        <p></p>
      </div>
    `);
  } else if (activeNpc) {
    scene.insertAdjacentHTML("beforeend", getNpcPortraitHtml(activeNpc, "large"));
  } else {
    // 인물 탐문이 아닌 일반 장소 상황일 때, 장소 이미지를 텍스트 위에 큼직하게 띄움
    const isGameActive = state.npcs && state.npcs.length > 0 && (state.day > 0 || state.log.length > 1);
    if (isGameActive) {
      const bgImage = LOCATION_BACKGROUNDS[state.playerLocation];
      if (bgImage) {
        scene.insertAdjacentHTML("beforeend", `
          <div class="scene-location-image-wrapper">
            <img src="img/배경/${bgImage}" class="scene-location-image" alt="${escapeHtml(LOCATIONS[state.playerLocation].name)}">
          </div>
        `);
      }
    }
  }
  if (state.sceneMode !== "accuse") {
    scene.insertAdjacentHTML("beforeend", "<p></p>");
  }
  const paragraph = scene.querySelector("p");
  let index = 0;
  if (audioState.sfxEnabled && audioState.unlocked) {
    playTypingSound();
  }

  function typeNext() {
    paragraph.textContent = text.slice(0, index);
    if (index <= text.length) {
      index += 1;
      sceneTypingTimer = setTimeout(typeNext, 18);
    } else {
      stopTypingSoundTimer();
    }
  }

  typeNext();
}

function renderLog() {
  // no-op: log UI removed
}

const LOG_MAX_ENTRIES = 6;

function addLog(message) {
  const currentNpcId = state.activeNpcId;
  if (!state.sceneText) {
    if (currentNpcId) updateNpcScene(currentNpcId, message);
    else updateScene(message);
  } else {
    if (currentNpcId) updateNpcScene(currentNpcId, `${state.sceneText}\n\n${message}`);
    else updateScene(`${state.sceneText}\n\n${message}`);
  }
}

function enqueueContinue(action) {
  state.continueQueue.push(action);
}

function startContinueSequence() {
  state.awaitingContinue = true;
  render();
}

function startSceneSequence(lines, finalAction = null) {
  state.continueQueue = lines.map(line => () => {
    updateScene(line);
    render();
  });
  if (finalAction) state.continueQueue.push(finalAction);
  startContinueSequence();
}

function startOpeningStory() {
  const openingLines = pickRandom(OPENING_STORY_VARIANTS);
  updateScene(openingLines[0]);
  state.continueQueue = openingLines.slice(1).map(line => () => {
    updateScene(line);
    render();
  });
  startContinueSequence();
}

function advanceContinue() {
  if (state.continueQueue.length === 0) {
    state.awaitingContinue = false;
    state.menu = null;
    setMainMenu();
    render();
    return;
  }

  const nextAction = state.continueQueue.shift();
  nextAction();

  if (state.continueQueue.length === 0) {
    state.awaitingContinue = false;
    state.menu = null;
    setMainMenu();
  }

  render();
}

function setMenu(title, options) {
  state.menu = { title, options };
  render();
}

function setMainMenu() {
  if (state.day === 0) {
    const options = Object.entries(LOCATIONS).map(([locId, loc], index) => ({
      label: `${index + 1}. ${loc.name}`,
      action: () => moveTo(locId),
    }));
    setMenu("수사를 시작할 장소를 선택하세요. 이 장소에서 탐문이나 수색을 시작할 때 조사 가능 장소가 차감됩니다.", options);
    return;
  }

  const options = [];
  let optionNumber = 1;

  if (state.actionsLeft > 0) {
    options.push({ label: `${optionNumber++}. 이동`, action: showMoveOptions });
  }

  options.push(
    { label: `${optionNumber++}. 탐문`, action: showInquiryMenu },
    { label: `${optionNumber++}. 수색`, action: searchLocation },
    { label: `${optionNumber++}. 사건 수첩`, action: showNotebookModal },
    { label: `${optionNumber++}. 탐색 완료`, action: completeSearch },
  );

  if (state.suspects.length > 0) {
    options.push({ label: `${optionNumber++}. 마피아 고발`, action: () => showNpcOptions("accuse") });
  }

  setMenu("선택지", options);
}
function showMoveOptions() {
  const isStart = state.day === 0;
  if (!isStart && state.actionsLeft <= 0) {
    setMenu("\uC624\uB298 \uC774\uB3D9\uD560 \uC218 \uC788\uB294 \uC870\uC0AC \uC7A5\uC18C\uB97C \uBAA8\uB450 \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4.", [
      { label: "0. \uB3CC\uC544\uAC00\uAE30", action: () => setMainMenu() },
    ]);
    return;
  }
  const options = Object.keys(LOCATIONS)
    .filter(locId => {
      if (isStart) return true;
      if (locId === state.playerLocation) return false;
      return state.actionsLeft > 0 || hasInvestigatedLocation(locId);
    })
    .map((locId, index) => ({
      label: `${index + 1}. ${LOCATIONS[locId].name}`,
      action: () => { moveTo(locId); setMainMenu(); },
    }));

  if (!isStart) {
    if (options.length === 0) {
      setMenu("\uC624\uB298 \uC0C8\uB85C \uC870\uC0AC\uD560 \uC218 \uC788\uB294 \uC7A5\uC18C\uB97C \uBAA8\uB450 \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4.", [
        { label: "0. \uB3CC\uC544\uAC00\uAE30", action: () => setMainMenu() },
      ]);
      return;
    }
    options.push({ label: "0. 돌아가기", action: () => setMainMenu() });
  }

  setMenu(isStart ? "시작할 장소를 선택하세요." : "이동할 장소를 선택하세요.", options);
}

function showInquiryMenu() {
  // Show people currently at this location first
  const npcs = state.currentLocationNpcs;
  if (!npcs || npcs.length === 0) {
    setMenu("이곳엔 아무도 없습니다.", [
      { label: "0. 돌아가기", action: () => setMainMenu() },
    ]);
    return;
  }

  if (!spendLocationInvestigation()) return;

  const options = npcs.map((npc, idx) => ({
    label: `${idx + 1}. ${npc.name} - ${npc.role}`,
    npcId: npc.id,
    action: () => showPersonInquiryMenu(npc.id),
  }));
  options.push({ label: "0. 돌아가기", action: () => setMainMenu() });
  setMenu("누구를 탐문하시겠습니까?", options);
}

function showPersonInquiryMenu(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  if (!npc) { setMainMenu(); return; }

  const options = [
    { label: "1. 소문", action: () => { askRumor(npcId); } },
    { label: "2. 알리바이", action: () => { askAlibi(npcId); } },
    { label: "3. 인상착의", action: () => { inspectClothing(npcId); } },
    { label: "4. 소지품 검사", action: () => { inspectItems(npcId); } },
    { label: "0. 돌아가기", action: () => setMainMenu() },
  ];

  updateNpcScene(npcId, `${npc.name}, ${npc.role}.\n\n${npc.trait}`);
  setMenu(`${npc.name}에게 무엇을 묻겠습니까?`, options);
}

function setPersonInquiryMenu(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  if (!npc) { setMainMenu(); return; }

  const options = [
    { label: "1. 소문", action: () => { askRumor(npcId); } },
    { label: "2. 알리바이", action: () => { askAlibi(npcId); } },
    { label: "3. 인상착의", action: () => { inspectClothing(npcId); } },
    { label: "4. 소지품 검사", action: () => { inspectItems(npcId); } },
    { label: "0. 돌아가기", action: () => setMainMenu() },
  ];

  setMenu(`${npc.name}에게 무엇을 묻겠습니까?`, options);
}

function showNpcOptions(type) {
  const npcs = type === "accuse" ? state.suspects : state.currentLocationNpcs;
  if (npcs.length === 0) {
    updateScene(type === "accuse" ? "아직 의심 표시한 인물이 없습니다." : "이곳에는 현재 조사할 NPC가 없습니다.");
    setMainMenu();
    return;
  }

  const options = npcs.map((npc, index) => ({
    label: `${index + 1}. ${npc.name}`,
    npcId: npc.id,
    action: () => {
      if (type === "rumor") askRumor(npc.id);
      else if (type === "rumorAlibi") askRumorAlibi(npc.id);
      else if (type === "alibi") askAlibi(npc.id);
      else if (type === "clothing") inspectClothing(npc.id);
      else if (type === "items") inspectItems(npc.id);
      else if (type === "accuse") accuse(npc.id);
      setMainMenu();
    },
  }));

  options.push({ label: "0. 돌아가기", action: () => setMainMenu() });
  const title = type === "rumor" ? "누구에게 소문을 물어볼까요?"
    : type === "rumorAlibi" ? "누구에게 알리바이를 물어볼까요?"
    : type === "alibi" ? "누구의 알리바이를 확인할까요?"
    : type === "clothing" ? "누구의 인상착의를 확인할까요?"
    : type === "items" ? "누구의 소지품을 검사할까요?"
    : "의심 인물 중 누구를 고발할까요?";

  setMenu(title, options);
}

function getMovementRumorText(caseLog, currentLocation = state.playerLocation) {
  const start = LOCATIONS[caseLog.start].name;
  const crime = LOCATIONS[caseLog.crime].name;

  if (currentLocation === caseLog.start) {
    return `어젯밤 누군가 이곳에서 ${crime} 쪽으로 빠져나갔습니다.\n발소리는 급했는데, 이상하게 숨은 고르더군요.\n지금 이곳에 남은 사람이 아니라, 밤사이 이 길을 지나간 사람의 흔적입니다.`;
  }

  if (currentLocation === caseLog.crime) {
    return `어젯밤 누가 ${start} 쪽에서 이곳으로 넘어왔습니다.\n발소리는 급했는데, 이상하게 숨은 고르더군요.\n지금 이곳에 남은 사람이 아니라, 밤사이 이 길을 지나간 사람의 흔적입니다.`;
  }

  if (currentLocation === caseLog.escape) {
    return `${crime} 쪽이 한때 소란스러웠다는 말은 있지만, 이곳까지 이어진 움직임은 분명하지 않습니다.`;
  }

  return `어젯밤 누군가 ${start}에서 ${crime} 쪽으로 움직였다는 말이 있습니다.\n발소리는 급했는데, 이상하게 숨은 고르더군요.\n지금 보이는 위치보다 밤사이 동선을 봐야 할 것 같습니다.`;
}

function getStrongMovementRumorText(caseLog, currentLocation = state.playerLocation) {
  const start = LOCATIONS[caseLog.start].name;
  const crime = LOCATIONS[caseLog.crime].name;

  if (currentLocation === caseLog.start) {
    return `${crime} 쪽에서 짧은 비명 같은 소리가 났습니다.\n그 직전 누군가 이곳에서 그 방향으로 빠르게 움직였습니다.\n얼굴은 못 봤지만, 발걸음에는 망설임이 없었습니다.`;
  }

  if (currentLocation === caseLog.crime) {
    return `${start} 쪽에서 누군가 이곳으로 넘어온 뒤, 짧은 비명 같은 소리가 났습니다.\n얼굴은 못 봤지만, 발걸음에는 망설임이 없었습니다.`;
  }

  if (currentLocation === caseLog.escape) {
    return `${crime} 쪽에서 짧은 비명 같은 소리가 났다는 말만 돌고 있습니다.\n그 뒤의 움직임은 말이 엇갈려 믿기 어렵습니다.`;
  }

  return `${start} 쪽에서 짧은 비명 같은 소리가 났습니다.\n그 뒤에 누군가 ${crime} 쪽으로 빠르게 걸어왔습니다.\n얼굴은 못 봤지만, 발걸음에는 망설임이 없었습니다.`;
}

function askRumor(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  const refusalKey = `${state.day}:${npcId}`;
  const alreadyAskedRumor = Boolean(state.rumorRefusals[refusalKey]);
  if (alreadyAskedRumor) {
    updateNpcScene(npcId, `${npc.name}에게 다시 소문을 묻습니다.\n\n${npc.name}: “방금 말했잖습니까. 같은 질문을 반복한다고 제 기억이 바뀌지는 않습니다.”\n\n상대가 불쾌해하며 대화를 끊었습니다.`);
    setPersonInquiryMenu(npcId);
    return;
  }

  state.rumorRefusals[refusalKey] = true;

  const relatedCase = state.caseLogs.find(c =>
    !c.bodyFound && [c.start, c.crime].includes(state.playerLocation)
  );

  let quote;
  let evidence = null;
  const roll = Math.random();
  const successThreshold = hasInvestigationFocus() ? 0.8 : 0.65;
  if (roll > successThreshold) {
    quote = `${npc.name}: “${npc.profile.rumorFail}”`;
    state.rumorRefusals[refusalKey] = true;
  } else if (!relatedCase) {
    // 플레이어가 서 있는 곳과 인접한 구역에 아직 시체가 발견되지 않은 범행 현장이 있는지 체크
    const connectedLocations = LOCATIONS[state.playerLocation]?.connected || [];
    const nearbyCase = state.caseLogs.find(c => !c.bodyFound && connectedLocations.includes(c.crime));

    if (nearbyCase) {
      const nearbyName = LOCATIONS[nearbyCase.crime].name;
      quote = `${npc.name}: “어젯밤 이곳은 별일 없었는데... 어쩐지 인접한 ${nearbyName} 쪽이 유난히 소란스럽고 비정상적으로 시끄러웠던 거 같습니다.”`;
    } else {
      quote = `${npc.name}: “${npc.profile.calmRumor}”`;
    }
  } else {
    quote = `${npc.name}: “${roll < 0.1 ? getStrongMovementRumorText(relatedCase) : getMovementRumorText(relatedCase)}”`;
    evidence = {
      kind: "movement",
      text: getMovementEvidenceText(relatedCase),
      route: getMovementEvidenceRoute(relatedCase),
    };
  }

  const isDuplicate = evidence && hasEvidence(evidence.kind, evidence.text, evidence.day ?? state.day);

  if (isDuplicate) {
    updateNpcScene(npcId, `${npc.name}에게 소문을 듣습니다.\n\n${quote}\n\n핵심 내용은 이미 수첩에 기록된 단서와 같습니다. 새로운 정보는 얻지 못했습니다.`);
    setPersonInquiryMenu(npcId);
    return;
  }

  updateNpcScene(npcId, `${npc.name}에게 소문을 듣습니다.\n\n${quote}`);
  if (evidence) rememberEvidence(evidence.kind, evidence.text, evidence);

  addLog(`${npc.name}에게 소문을 들었습니다.`);
  setPersonInquiryMenu(npcId);
}

function askRumorAlibi(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  const latestCase = state.caseLogs[state.caseLogs.length - 1];
  let quote;
  if (Math.random() > 0.5) {
    quote = `${npc.name}: “그런 걸 왜 물어보죠?”`;
  } else if (npc.id === state.mafia.id && latestCase) {
    quote = `${npc.name}: “${getNpcAlibiQuote(npc, latestCase.falseAlibi)}”`;
  } else {
    quote = `${npc.name}: “${getNpcAlibiQuote(npc, npc.location)}”`;
  }

  updateNpcScene(npcId, `${npc.name}의 알리바이를 묻습니다.\n\n${quote}`);
  setPersonInquiryMenu(npcId);
}

function showTitleMenu() {
  state.sceneText = TITLE_SCENE_TEXT;
  state.lastRenderedScene = "";
  state.menu = null;
  state.continueQueue = [];
  state.awaitingContinue = false;
  state.gameOver = false;
  setMenu("사건 파일을 어떻게 하시겠습니까?", [
    { label: "1. 사건 파일을 연다", action: () => initGame() },
    { label: "2. 덮어 둔다", action: closeCaseWindow },
  ]);
}

function closeCaseWindow() {
  updateScene("사건 파일을 덮었습니다.\n\n창을 닫습니다.");
  render();
  window.close();
  window.setTimeout(() => {
    updateScene("브라우저 보안 설정 때문에 창을 자동으로 닫지 못했습니다.\n\n이 탭을 직접 닫아주세요.");
    render();
  }, 250);
}

function initGame() {
  clearSavedGame();
  startGameAudio();
  const npcObjects = NPC_PROFILES.map((profile, index) => ({
    id: `npc_${index}`,
    name: profile.name,
    role: profile.role,
    trait: profile.trait,
    profile,
    clothing: [pickRandom(CLOTHES), pickRandom(HANDS)],
    items: sample(ITEMS, 2),
    alive: true,
    location: pickRandom(Object.keys(LOCATIONS)),
  }));

  state.npcs = npcObjects;
  state.suspects = [];
  state.mafia = pickRandom(state.npcs);
  state.liarIds = sample(state.npcs.filter(npc => npc.id !== state.mafia.id).map(npc => npc.id), 4);
  state.day = 0;
  state.phase = "day";
  state.playerLocation = "square";
  state.actionsLeft = 1;
  state.caseLogs = [];
  state.gameOver = false;
  state.sceneText = INITIAL_SCENE_TEXT;
  state.lastNightLocations = {};
  state.lastNightTraces = {};
  state.investigationFocus = {};
  state.rumorRefusals = {};
  state.alibiRefusals = {};
  state.searchCompletions = {};
  state.investigatedLocations = {};
  resetNotebook();
  state.log = [
    "[시작] 플레이를 위해 이동해 주세요.",
  ];
  state.isMafiaWin = false;
  state.quietNightStreak = 0;
  state.searchSession = null;
  state.analysisReturnScene = null;
  state.startedAt = Date.now();
  state.endedAt = null;
  state.endingType = null;
  state.musicSuppressed = false;

  assignLocationNpcs();
  updateCurrentLocationNpcs();
  startOpeningStory();
}

function canSaveGame() {
  return !state.gameOver &&
    !state.awaitingContinue &&
    !state.searchSession &&
    !state.corpseSession &&
    !state.musicSuppressed &&
    state.npcs.length > 0;
}

function getGameSnapshot() {
  return {
    version: 1,
    savedAt: Date.now(),
    day: state.day,
    phase: state.phase,
    playerLocation: state.playerLocation,
    actionsLeft: state.actionsLeft,
    suspects: state.suspects.map(npc => npc.id),
    mafiaId: state.mafia?.id || null,
    npcs: state.npcs,
    caseLogs: state.caseLogs,
    sceneText: state.sceneText,
    lastNightLocations: state.lastNightLocations,
    lastNightTraces: state.lastNightTraces,
    investigationFocus: state.investigationFocus,
    liarIds: state.liarIds,
    rumorRefusals: state.rumorRefusals,
    alibiRefusals: state.alibiRefusals,
    searchCompletions: state.searchCompletions,
    investigatedLocations: state.investigatedLocations,
    notebook: state.notebook,
    log: state.log,
    isMafiaWin: state.isMafiaWin,
    quietNightStreak: state.quietNightStreak,
    startedAt: state.startedAt,
    endedAt: state.endedAt,
    endingType: state.endingType,
  };
}

function saveGame() {
  if (!canSaveGame()) return;
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(getGameSnapshot()));
  } catch (error) {
    console.warn("게임 저장 실패", error);
  }
}

function clearSavedGame() {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch (error) {
    console.warn("저장 데이터 삭제 실패", error);
  }
}

function getSavedGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const snapshot = JSON.parse(raw);
    if (!snapshot || snapshot.version !== 1 || !Array.isArray(snapshot.npcs)) return null;
    return snapshot;
  } catch (error) {
    console.warn("저장 데이터 읽기 실패", error);
    return null;
  }
}

let pendingSavedGame = null;

function showResumeModal(snapshot) {
  pendingSavedGame = snapshot;
  const modal = document.getElementById("resume-modal");
  if (!modal) {
    restoreGame(snapshot);
    return;
  }
  modal.classList.add("active");
}

function hideResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (!modal) return;
  modal.classList.remove("active");
}

function resumeSavedGame() {
  if (!pendingSavedGame) {
    hideResumeModal();
    showTitleMenu();
    return;
  }
  const snapshot = pendingSavedGame;
  pendingSavedGame = null;
  hideResumeModal();
  restoreGame(snapshot);
}

function startNewGameFromResume() {
  pendingSavedGame = null;
  hideResumeModal();
  clearSavedGame();
  showTitleMenu();
}

function restoreGame(snapshot) {
  const restoredNpcs = snapshot.npcs.map((npc, index) => ({
    ...npc,
    profile: NPC_PROFILES[index] || npc.profile,
  }));

  state.day = snapshot.day;
  state.phase = snapshot.phase;
  state.playerLocation = snapshot.playerLocation;
  state.actionsLeft = state.day > 0
    ? Math.min(snapshot.actionsLeft ?? DAILY_LOCATION_LIMIT, DAILY_LOCATION_LIMIT)
    : snapshot.actionsLeft;
  state.npcs = restoredNpcs;
  state.mafia = restoredNpcs.find(npc => npc.id === snapshot.mafiaId) || null;
  state.suspects = (snapshot.suspects || [])
    .map(id => restoredNpcs.find(npc => npc.id === id))
    .filter(Boolean);
  state.caseLogs = snapshot.caseLogs || [];
  state.sceneText = snapshot.sceneText || INITIAL_SCENE_TEXT;
  state.lastRenderedScene = "";
  state.lastNightLocations = snapshot.lastNightLocations || {};
  state.lastNightTraces = snapshot.lastNightTraces || {};
  state.investigationFocus = snapshot.investigationFocus || {};
  state.liarIds = snapshot.liarIds || [];
  state.rumorRefusals = snapshot.rumorRefusals || {};
  state.alibiRefusals = snapshot.alibiRefusals || {};
  state.searchCompletions = snapshot.searchCompletions || {};
  state.investigatedLocations = snapshot.investigatedLocations || {};
  state.notebook = snapshot.notebook || { evidence: [], suspects: {} };
  state.log = snapshot.log || [];
  state.gameOver = false;
  state.menu = null;
  state.continueQueue = [];
  state.awaitingContinue = false;
  state.searchSession = null;
  state.corpseSession = null;
  state.analysisReturnScene = null;
  state.isMafiaWin = Boolean(snapshot.isMafiaWin);
  state.quietNightStreak = snapshot.quietNightStreak || 0;
  state.startedAt = snapshot.startedAt || Date.now();
  state.endedAt = null;
  state.endingType = null;
  state.musicSuppressed = false;

  updateCurrentLocationNpcs();
  setMainMenu();
}

function bootGame() {
  const saved = getSavedGame();
  if (saved) {
    showResumeModal(saved);
    return;
  }
  clearSavedGame();
  showTitleMenu();
}

function updateScene(description) {
  state.sceneText = description;
  state.lastRenderedScene = "";
  state.activeNpcId = state.pendingActiveNpcId || null;
  state.sceneMode = null;
}

function updateNpcScene(npcId, description) {
  state.sceneText = description;
  state.lastRenderedScene = "";
  state.activeNpcId = npcId;
  if (state.sceneMode !== "accuse") state.sceneMode = null;
}

function getNpcPortraitIndex(npcId) {
  const index = Number(String(npcId).replace("npc_", ""));
  return Number.isInteger(index) && index >= 0 ? index : 0;
}

function getNpcPortraitHtml(npc, size = "small") {
  const imageNumber = getNpcPortraitIndex(npc.id) + 1;
  return `
    <div class="npc-portrait npc-portrait-${size}">
      <img src="img/캐릭터/${imageNumber}.png" alt="${escapeHtml(npc.name)}">
    </div>
  `;
}

function getActiveSceneNpc() {
  if (!state.activeNpcId) return null;
  return state.npcs.find(npc => npc.id === state.activeNpcId) || null;
}

function getMapHtml() {
  const layout = [
    ["pharmacy", "square", "bar"],
    ["alley", "market", "harbor"],
  ];

  const mapNodes = layout.flatMap(row => row.map(locId => {
    const isCurrent = locId === state.playerLocation;
    const markedHere = state.suspects.filter(npc => npc.location === locId && npc.alive);
    return `
      <div class="map-node${isCurrent ? " current" : ""}">
        <span>${LOCATIONS[locId].name}</span>
        ${markedHere.length ? `<div class="suspect-dot"></div><small>${markedHere.map(npc => escapeHtml(npc.name)).join(", ")}</small>` : ''}
      </div>
    `;
  }));

  return `
    <div class="map-title">추적 맵</div>
    <div class="map-grid">${mapNodes.join("")}</div>
  `;
}

function renderMiniMap() {
  const miniMap = document.getElementById("mini-map");
  if (!miniMap) return;
  miniMap.innerHTML = getMapHtml();
}

function formatNpcName(npc) {
  const classes = ["npc-name"];
  if (!isPublicAlive(npc)) {
    classes.push("dead");
  } else if (state.suspects.some(s => s.id === npc.id)) {
    classes.push("suspect");
  }
  const label = state.suspects.some(s => s.id === npc.id) ? "의심 해제" : "의심 표시";
  if (!isPublicAlive(npc)) {
    return `<span class="${classes.join(" ")}" title="${escapeHtml(npc.role)}">${npc.name}</span>`;
  }
  return `<button class="${classes.join(" ")}" type="button" title="${escapeHtml(npc.role)} · ${label}" onclick="toggleSuspect('${npc.id}')">${npc.name}</button>`;
}

function getNpcListHtml() {
  const npcList = state.npcs.map(formatNpcName).join("");
  return `<strong>전체 인물 목록 · 의심 ${state.suspects.length}/${MAX_MARKED_SUSPECTS}</strong> ${npcList}`;
}

function getStatusHtml() {
  const aliveCount = state.npcs.filter(n => isPublicAlive(n)).length;
  const currentLocation = LOCATIONS[state.playerLocation];
  const publicCaseCount = state.caseLogs.filter(c => c.bodyFound).length;
  const phaseLabel = state.phase === "day" ? "조사" : "밤";

  return `
    <p><strong>${state.day}일차</strong> / 단계: ${phaseLabel}</p>
    <p>현재 위치: ${currentLocation.name}</p>
    <p>오늘 조사 가능 장소: ${state.actionsLeft}</p>
    <p>의심 표시: ${state.suspects.length}/${MAX_MARKED_SUSPECTS}명</p>
    <p>공개 사건: ${publicCaseCount}건 / 생존 확인: ${aliveCount}명</p>
  `;
}

function renderNpcList() {
  const npcList = document.getElementById("npc-list");
  if (!npcList) return;
  npcList.innerHTML = getNpcListHtml();
}

function renderCaseNotebook() {
  const notebook = document.getElementById("case-notebook");
  if (!notebook) return;

  const evidenceCount = state.notebook.evidence.length;
  const checkedCount = state.suspects
    .map(npc => state.notebook.suspects[npc.id])
    .filter(Boolean)
    .filter(note => note.clothing || note.items || note.alibi || note.traces?.length)
    .length;

  notebook.innerHTML = `
    <button type="button" class="notebook-trigger" onclick="showNotebookModal()">
      <span>수사 수첩</span>
      <small>단서 ${evidenceCount}개 · 확인 ${checkedCount}명</small>
    </button>
  `;
}

function getEvidenceGroups() {
  return state.notebook.evidence.reduce((groups, evidence) => {
    const day = evidence.day || 0;
    if (!groups[day]) groups[day] = [];
    groups[day].push(evidence);
    return groups;
  }, {});
}

function formatEvidenceGroupsHtml() {
  const groups = getEvidenceGroups();
  const days = Object.keys(groups).map(Number).sort((a, b) => a - b);
  if (!days.length) return "<li>기록된 단서 없음</li>";

  return days.map(day => `
    <li class="evidence-day">
      <strong>${day}일차</strong>
      <span>${groups[day].map(e => escapeHtml(e.text)).join("<br>")}</span>
    </li>
  `).join("");
}

function formatEvidenceGroupsText() {
  const groups = getEvidenceGroups();
  const days = Object.keys(groups).map(Number).sort((a, b) => a - b);
  if (!days.length) return "- 아직 기록된 단서가 없습니다.";

  return days.map(day => {
    const lines = groups[day].map(e => `- ${e.text}`).join("\n");
    return `[${day}일차]\n${lines}`;
  }).join("\n\n");
}

function getNotebookHtml() {
  const knownSuspects = state.suspects
    .map(npc => state.notebook.suspects[npc.id])
    .filter(Boolean);
  const evidenceHtml = formatEvidenceGroupsHtml();
  const suspectHtml = knownSuspects.length
    ? knownSuspects.map(note => {
      const parts = [];
      if (note.clothing) parts.push(`복장 ${note.clothing.join(", ")}`);
      if (note.items) parts.push(`소지품 ${note.items.join(", ")}`);
      if (note.alibis?.length) {
        parts.push(`알리바이 ${note.alibis.map(item => `${item.day}일차: ${LOCATIONS[item.location].name}`).join(" / ")}`);
      } else if (note.alibi) {
        parts.push(`알리바이 ${LOCATIONS[note.alibi.location].name}`);
      }
      if (note.traces?.length) {
        parts.push(`흔적 ${note.traces.map(item => `${item.day}일차 ${item.trace}`).join(", ")}`);
      }
      return `<li><strong>${escapeHtml(note.name)}</strong><span>${escapeHtml(parts.join(" / ") || "확인 전")}</span></li>`;
    }).join("")
    : "<li>의심 표시한 인물 없음</li>";

  return `
    <div class="notebook-section">
      <div class="notebook-label">사건 기록</div>
      <ul>${evidenceHtml}</ul>
    </div>
    <div class="notebook-section">
      <div class="notebook-label">의심 인물 메모</div>
      <ul>${suspectHtml}</ul>
    </div>
  `;
}

function getNotebookMaxDay() {
  const evidenceDays = state.notebook.evidence.map(evidence => evidence.day || 1);
  const suspectDays = Object.values(state.notebook.suspects).flatMap(note => [
    ...(note.alibis || []).map(item => item.day || 1),
    ...(note.traces || []).map(item => item.day || 1),
  ]);
  return Math.max(1, state.day || 1, ...evidenceDays, ...suspectDays);
}

function getNotebookPageDay() {
  const maxDay = getNotebookMaxDay();
  const pageDay = state.notebookPageDay || state.day || 1;
  return Math.min(Math.max(1, pageDay), maxDay);
}

function getNotebookSuspectAlibiHtml(pageDay) {
  return state.suspects.map(npc => {
    const note = state.notebook.suspects[npc.id] || {};
    const alibis = (note.alibis || []).filter(item => (item.day || 1) === pageDay);
    const parts = [];
    if (alibis.length) {
      parts.push(`알리바이 ${alibis.map(item => LOCATIONS[item.location].name).join(" / ")}`);
    } else if (note.alibi && (note.alibi.day || 1) === pageDay) {
      parts.push(`알리바이 ${LOCATIONS[note.alibi.location].name}`);
    } else {
      parts.push("알리바이 미확인");
    }
    if (note.clothing) {
      parts.push(`인상착의 ${note.clothing.join(", ")}`);
    }
    if (note.items) {
      parts.push(`소지품 ${note.items.join(", ")}`);
    }
    return `<li><strong>${escapeHtml(npc.name)}</strong><span>${escapeHtml(parts.join(" / "))}</span></li>`;
  }).join("") || "<li><span>아직 의심 표시한 인물이 없습니다.</span></li>";
}

function getNotebookPageHtml() {
  const pageDay = getNotebookPageDay();
  const clueEvidence = state.notebook.evidence.filter(evidence =>
    ["clothing", "item", "movement"].includes(evidence.kind)
  );
  const evidenceHtml = clueEvidence.length
    ? clueEvidence.map(evidence => `<li><span>${escapeHtml(evidence.text)}</span></li>`).join("")
    : "<li><span>아직 기록된 단서가 없습니다.</span></li>";

  const contentLines = state.caseLogs
    .filter(caseLog => caseLog.day === pageDay && caseLog.bodyFound)
    .map(caseLog => {
      const victim = state.npcs.find(npc => npc.id === caseLog.victimId);
      const victimName = victim?.name || caseLog.victimName || "피해자";
      return `${LOCATIONS[caseLog.crime].name}에서 ${victimName} 발견`;
    });
  if (!contentLines.length) contentLines.push("조사 기록을 정리 중입니다.");
  const contentHtml = contentLines.map(line => `<li><span>${escapeHtml(line)}</span></li>`).join("");

  const suspectNotes = Object.entries(state.notebook.suspects)
    .map(([npcId, note]) => ({
      npc: state.npcs.find(person => person.id === npcId),
      note,
    }))
    .filter(entry => entry.npc && entry.note);

  const suspectHtml = suspectNotes.map(({ npc, note }) => {
    const parts = [];
    const alibis = (note.alibis || []).filter(item => (item.day || 1) === pageDay);
    const traces = (note.traces || []).filter(item => (item.day || 1) === pageDay);
    if (alibis.length) {
      parts.push(`알리바이 ${alibis.map(item => LOCATIONS[item.location].name).join(" / ")}`);
    }
    if (traces.length) {
      parts.push(`흔적 ${traces.map(item => item.trace).join(", ")}`);
    }
    if (!alibis.length && note.alibi && (note.alibi.day || 1) === pageDay) {
      parts.push(`알리바이 ${LOCATIONS[note.alibi.location].name}`);
    }
    if (note.clothing) parts.push(`복장 ${note.clothing.join(", ")}`);
    if (note.items) parts.push(`소지품 ${note.items.join(", ")}`);
    return `<li><strong>${escapeHtml(npc.name)}</strong><span>${escapeHtml(parts.join(" / ") || "해당 날짜 기록 없음")}</span></li>`;
  }).join("") || "<li><span>아직 기록된 인물이 없습니다.</span></li>";

  return `
    <div class="notebook-page-label">${pageDay}일차</div>
    <ul class="notebook-day-content">${contentHtml}</ul>
    <div class="notebook-section">
      <div class="notebook-label">찾은 단서</div>
      <ul>${evidenceHtml}</ul>
    </div>
    <div class="notebook-section">
      <div class="notebook-label">의심 인물목록</div>
      <ul>${getNotebookSuspectAlibiHtml(pageDay)}</ul>
    </div>
  `;
}

function getNotebookBackgroundSrc() {
  const maxDay = getNotebookMaxDay();
  const pageDay = getNotebookPageDay();
  if (maxDay <= 1) return "img/case_notebook.png";
  if (pageDay <= 1) return "img/case_notebook_1.png";
  if (pageDay >= maxDay) return "img/case_notebook_3.png";
  return "img/case_notebook_2.png";
}

function renderNotebookPage() {
  const body = document.getElementById("notebook-modal-body");
  const background = document.querySelector("#notebook-modal .notebook-bg-img");
  if (!body) return;
  if (background) {
    background.src = getNotebookBackgroundSrc();
  }
  body.innerHTML = getNotebookPageHtml();
}

function showNextNotebookPage() {
  const maxDay = getNotebookMaxDay();
  const currentDay = getNotebookPageDay();
  state.notebookPageDay = currentDay >= maxDay ? 1 : currentDay + 1;
  renderNotebookPage();
}

function showPreviousNotebookPage() {
  const maxDay = getNotebookMaxDay();
  const currentDay = getNotebookPageDay();
  state.notebookPageDay = currentDay <= 1 ? maxDay : currentDay - 1;
  renderNotebookPage();
}

function showNotebookModal() {
  const modal = document.getElementById("notebook-modal");
  const body = document.getElementById("notebook-modal-body");
  if (!modal || !body) return;
  state.notebookPageDay = getNotebookPageDay();
  renderNotebookPage();
  modal.classList.add("active");
}

function hideNotebookModal() {
  const modal = document.getElementById("notebook-modal");
  if (!modal) return;
  modal.classList.remove("active");
}

function showStatusModal() {
  const modal = document.getElementById("status-modal");
  const body = document.getElementById("status-modal-body");
  if (!modal || !body) return;
  const people = state.currentLocationNpcs.length
    ? state.currentLocationNpcs.map(npc => `${npc.name}(${npc.role})`).join(", ")
    : "아무도 없음";
  body.innerHTML = `
    <div class="modal-status">${getStatusHtml()}</div>
    <div class="modal-status">
      <p><strong>현재 장소 인물</strong></p>
      <p>${escapeHtml(LOCATIONS[state.playerLocation].name)}: ${escapeHtml(people)}</p>
    </div>
    <div class="modal-map">${getMapHtml()}</div>
    <div class="modal-npcs">${getNpcListHtml()}</div>
  `;
  modal.classList.add("active");
}

function refreshStatusModal() {
  const modal = document.getElementById("status-modal");
  const body = document.getElementById("status-modal-body");
  if (!modal || !body || !modal.classList.contains("active")) return;
  const people = state.currentLocationNpcs.length
    ? state.currentLocationNpcs.map(npc => `${npc.name}(${npc.role})`).join(", ")
    : "아무도 없음";
  body.innerHTML = `
    <div class="modal-status">${getStatusHtml()}</div>
    <div class="modal-status">
      <p><strong>현재 장소 인물</strong></p>
      <p>${escapeHtml(LOCATIONS[state.playerLocation].name)}: ${escapeHtml(people)}</p>
    </div>
    <div class="modal-map">${getMapHtml()}</div>
    <div class="modal-npcs">${getNpcListHtml()}</div>
  `;
}

function hideStatusModal() {
  const modal = document.getElementById("status-modal");
  if (!modal) return;
  modal.classList.remove("active");
}

window.addEventListener("click", (event) => {
  const statusModal = document.getElementById("status-modal");
  if (event.target === statusModal) {
    hideStatusModal();
  }
  const settingsModal = document.getElementById("settings-modal");
  if (event.target === settingsModal) {
    hideSettingsModal();
  }
});

window.addEventListener("pointerdown", startGameAudio, { once: true });

function showSettingsModal() {
  unlockAudio();
  syncAudioSettingsControls();
  const modal = document.getElementById("settings-modal");
  if (!modal) return;
  modal.classList.add("active");
}

function hideSettingsModal() {
  const modal = document.getElementById("settings-modal");
  if (!modal) return;
  modal.classList.remove("active");
}

function updateCurrentLocationNpcs() {
  state.currentLocationNpcs = state.npcs.filter(
    npc => npc.alive && npc.location === state.playerLocation
  );
}

function moveNpcsOneStep(options = {}) {
  const { skipNpcIds = [] } = options;
  for (const npc of state.npcs) {
    if (!npc.alive) continue;
    if (skipNpcIds.includes(npc.id)) continue;
    const current = npc.location;
    const connected = LOCATIONS[current]?.connected || [];
    if (connected.length > 0) {
      npc.location = pickRandom(connected);
    }
  }
}

function getSceneTextWithLocation() {
  return state.sceneText;
}

function renderLocationContext() {
  const context = document.getElementById("location-context");
  if (!context) return;

  if (state.phase !== "day" || state.day === 0) {
    context.classList.add("hidden");
    context.innerHTML = "";
    return;
  }

  const names = state.currentLocationNpcs.map(npc => `${npc.name}(${npc.role})`);
  const peopleText = names.length > 0 ? names.join(", ") : "아무도 없음";
  context.classList.remove("hidden");
  context.innerHTML = `
    <div class="location-context-title">${LOCATIONS[state.playerLocation].name} · 조사 가능 장소 ${state.actionsLeft}</div>
    <div class="location-context-body">현재 인물: ${peopleText}</div>
  `;
}

function showNewsModal(message) {
  const modal = document.getElementById("news-modal");
  const content = document.getElementById("news-modal-message");
  if (!modal || !content) return;
  content.textContent = message;
  modal.classList.add("active");
}

function hideNewsModal() {
  const modal = document.getElementById("news-modal");
  if (!modal) return;
  modal.classList.remove("active");
  render();
}

function rememberBodyDiscovery(caseLog) {
  rememberEvidence("body", `시체 발견: ${state.day}일차, ${LOCATIONS[caseLog.crime].name}에서 ${caseLog.victimName} 발견. 사망 추정: ${getNightLabel(caseLog.day)}`, {
    location: caseLog.crime,
    victimId: caseLog.victimId,
  });
}

function checkAutoReveal() {
  const revealedCases = state.caseLogs.filter(c => !c.bodyFound && c.autoRevealDay === state.day);
  if (revealedCases.length === 0) return;

  const messages = revealedCases.map(c => 
    `${LOCATIONS[c.crime].name}에서 ${c.victimName}의 시체가 발견되었습니다.\n사망 추정 시점: ${getNightLabel(c.day)}.`
  );
  revealedCases.forEach(c => {
    c.bodyFound = true;
    rememberBodyDiscovery(c);
    const victim = state.npcs.find(npc => npc.id === c.victimId);
    if (victim) victim.alive = false;
  });
  updateCurrentLocationNpcs();
  const message = messages.join("\n\n");
  showNewsModal(`속보: ${message}`);
  updateScene(`속보: ${message}`);
}

function assignLocationNpcs() {
  for (const npc of state.npcs) {
    if (npc.alive) npc.location = pickRandom(Object.keys(LOCATIONS));
  }

  state.currentLocationNpcs = state.npcs.filter(
    npc => npc.alive && npc.location === state.playerLocation
  );
}

function queueMafiaVictory() {
  startSceneSequence([
    "다섯 번째 이름이 사라졌습니다.",
    "마을 사람들은 더 이상 서로를 부르지 않습니다.\n\n부르면 대답이 돌아오지 않을까 봐 두려운 것입니다.",
    "광장의 등불은 아직 켜져 있지만, 그 아래에 서는 사람은 없습니다.",
    "당신의 수첩에는 단서가 남아 있습니다.\n\n하지만 단서는 사람을 살리지 못했습니다.",
    `새벽이 오기 직전, 닫힌 창문에 한 얼굴이 비칩니다.\n\n마피아는 ${state.mafia.name}였습니다.`,
    "그는 웃지 않았습니다.\n\n이미 이긴 사람은 웃을 필요가 없으니까요.",
    "마을은 침묵을 선택했습니다.",
    "그리고 밤은 다시 시작되었습니다.",
  ], () => finishGame("mafia"));
}

function moveTo(locationId) {
  if (state.gameOver) return;

  const isStart = state.day === 0;
  state.playerLocation = locationId;

  const message = isStart
    ? `${LOCATIONS[locationId].name}에서 수사를 시작합니다.`
    : `${LOCATIONS[locationId].name}으로 이동했습니다.`;
  addLog(message);

  updateScene(isStart
    ? `${LOCATIONS[locationId].name}에서 첫 수사를 착수했습니다. ${LOCATIONS[locationId].description}`
    : `${LOCATIONS[locationId].name}에 도착했습니다. ${LOCATIONS[locationId].description}`);

  updateCurrentLocationNpcs();

  if (isStart) {
    addLog("시작 장소를 정했습니다. 밤이 깊어갑니다.");
    runNight(false);
    return;
  }

  setMainMenu();
}
function runNight(forceKill = false) {
  state.phase = "night";
  state.awaitingContinue = true;
  state.continueQueue = [];
  const forcedBySilence = state.day > 0 && state.quietNightStreak >= 2;
  const shouldKill = forceKill || state.day === 0 || forcedBySilence || Math.random() < 0.6;
  state.lastNightLocations = Object.fromEntries(
    state.npcs.map(npc => [npc.id, npc.location])
  );
  const isFirstNight = state.day === 0;

  if (isFirstNight) {
    enqueueContinue(() => {
      updateScene(FIRST_NIGHT_LOCATION_STORIES[state.playerLocation] || "마을은 당신을 들여보냈지만, 아무 말도 건네지 않았습니다.");
      render();
    });
  }

  enqueueContinue(() => {
    updateScene(isFirstNight
      ? "그 밤, 종은 끝내 울리지 않았습니다.\n\n불빛 하나가 천천히 꺼졌고, 잠시 뒤 다른 집의 불도 따라 꺼졌습니다. 마치 누가 보지 말라고 손짓한 것처럼."
      : "불안한 기운이 마을을 감싸고 있습니다.\n\n문틈마다 숨죽인 시선이 남아 있습니다.");
    render();
  });

  enqueueContinue(() => {
    if (!shouldKill) {
      assignNightTraces();
      state.quietNightStreak += 1;
      updateScene("밤은 아무 말 없이 지나갑니다.");
      render();
      return;
    }

    const caseLog = createCaseLog();
    state.quietNightStreak = 0;
    assignNightTraces(caseLog);
    if (state.isMafiaWin) {
      state.continueQueue = [];
      queueMafiaVictory();
      return;
    }
    updateScene(isFirstNight
      ? "새벽이 오기 전, 누군가 마지막으로 문고리를 잡았습니다.\n\n비명은 없었습니다. 대신 마을 전체가 동시에 숨을 멈춘 듯 조용해졌습니다."
      : "밤은 아무 말 없이 지나갑니다.");
    render();
  });

  enqueueContinue(() => {
    if (!shouldKill) {
      updateScene("새벽 안개가 짙게 내려앉았습니다.");
      render();
      return;
    }

    updateScene(isFirstNight
      ? "새벽이 가까워지자, 사람들은 서로의 이름을 부르며 살아 있음을 확인합니다.\n\n하지만 대답이 돌아올 때마다 누군가는 한 박자씩 늦게 안도합니다."
      : "새벽 안개가 짙게 내려앉았습니다.");
    render();
  });

  // transition to day and start investigation
  enqueueContinue(() => {
    state.day += 1;
    state.phase = "day";
    state.actionsLeft = DAILY_LOCATION_LIMIT;
    moveNpcsOneStep();

    updateCurrentLocationNpcs();

    updateScene("아침이 밝았습니다.\n\n마을은 살아 있는 척하지만, 어젯밤의 침묵은 아직 골목에 남아 있습니다.\n수사 정보에서 의심 가는 인물을 표시하고, 단서와 위치를 직접 맞춰 보세요.");
    if (state.caseLogs.some(c => !c.bodyFound && c.autoRevealDay === state.day)) {
      enqueueContinue(() => { checkAutoReveal(); });
    }
    render();
  });

  startContinueSequence();
}

function createCaseLog() {
  const mafia = state.mafia;
  const start = mafia.location || pickRandom(Object.keys(LOCATIONS));
  const crime = pickRandom(LOCATIONS[start].connected);
  const escape = pickRandom(LOCATIONS[crime].connected);
  const previousVictimIds = state.caseLogs.map(c => c.victimId);

  let victims = state.npcs.filter(npc =>
    npc.alive &&
    npc.id !== mafia.id &&
    !previousVictimIds.includes(npc.id)
  );
  if (victims.length === 0) {
    victims = state.npcs.filter(npc =>
      npc.alive &&
      npc.id !== mafia.id &&
      !previousVictimIds.includes(npc.id)
    );
  }
  if (victims.length === 0) {
    state.isMafiaWin = true;
    return;
  }
  const victim = pickRandom(victims);
  victim.alive = false; // 마피아에게 살해당했으므로 실제 생존 상태를 즉시 false로 변경 (유령 대화 방지)
  mafia.location = escape;

  const falseAlibiCandidates = Object.keys(LOCATIONS).filter(
    loc => ![start, crime, escape].includes(loc)
  );
  const falseAlibi = pickRandom(falseAlibiCandidates);

  const clothingClue = pickRandom(mafia.clothing);
  const itemClue = pickRandom(mafia.items);

  const caseLog = {
    day: state.day,
    mafiaId: mafia.id,
    victimId: victim.id,
    victimName: victim.name,
    start,
    crime,
    escape,
    falseAlibi,
    bodyFound: false,
    autoRevealDay: state.day + 2,
    clues: {
      clothing: clothingClue,
      item: itemClue,
      movement: getCaseMovementText({ start, crime, escape }),
    },
  };

  state.caseLogs.push(caseLog);

  const victimCount = state.caseLogs.length;
  if (victimCount >= 5) {
    state.isMafiaWin = true;
  }

  return caseLog;
}

function useAction() {
  setMainMenu();
}

function getInvestigationLocationKey(locationId = state.playerLocation) {
  return `${state.day}:${locationId}`;
}

function hasInvestigatedLocation(locationId = state.playerLocation) {
  return Boolean(state.investigatedLocations[getInvestigationLocationKey(locationId)]);
}

function spendLocationInvestigation(locationId = state.playerLocation) {
  if (state.day <= 0 || hasInvestigatedLocation(locationId)) return true;
  if (state.actionsLeft <= 0) {
    updateScene(`${LOCATIONS[locationId].name}은(는) 오늘 새로 조사할 수 있는 장소 한도를 넘었습니다.\n\n이미 조사한 장소로 돌아가 기록을 확인하거나, 탐색을 완료해야 합니다.`);
    setMainMenu();
    return false;
  }
  state.investigatedLocations[getInvestigationLocationKey(locationId)] = true;
  state.actionsLeft -= 1;
  return true;
}

function getSearchCompletionKey(type, locationId = state.playerLocation) {
  return `${state.day}:${locationId}:${type}`;
}

function hasCompletedSearch(type, locationId = state.playerLocation) {
  return Boolean(state.searchCompletions[getSearchCompletionKey(type, locationId)]);
}

function markSearchCompleted(type, locationId = state.playerLocation) {
  state.searchCompletions[getSearchCompletionKey(type, locationId)] = true;
}

function getKnownPhysicalClues() {
  return {
    clothing: state.notebook.evidence.find(e => e.clothing)?.clothing || null,
    item: state.notebook.evidence.find(e => e.item)?.item || null,
  };
}

function getKnownRouteLocations() {
  const locations = new Set();
  state.notebook.evidence.forEach(e => {
    if (Array.isArray(e.route)) e.route.forEach(loc => locations.add(loc));
  });
  return locations;
}

function getAccusationReadiness() {
  const hasBody = state.notebook.evidence.some(e => e.kind === "body");
  const categories = [
    state.notebook.evidence.some(e => e.kind === "clothing"),
    state.notebook.evidence.some(e => e.kind === "item"),
    state.notebook.evidence.some(e => e.kind === "movement"),
  ].filter(Boolean).length;

  return {
    hasBody,
    categories,
    canAccuse: hasBody && categories >= 2,
  };
}

function getSuspectAnalysisRows() {
  const clues = getKnownPhysicalClues();
  const routeLocations = getKnownRouteLocations();

  return state.suspects.map(npc => {
    const note = state.notebook.suspects[npc.id] || {};
    const checks = [];

    if (clues.clothing) {
      if (!note.clothing) {
        checks.push("복장: 미확인");
      } else {
        const displayClothes = note.clothing.join(", ");
        checks.push(`복장: ${displayClothes}`);
      }
    } else {
      if (note.clothing) {
        const displayClothes = note.clothing.join(", ");
        checks.push(`복장: ${displayClothes}`);
      } else {
        checks.push("복장: 미확인");
      }
    }

    if (clues.item) {
      if (!note.items) {
        checks.push("소지품: 미확인");
      } else {
        const displayItems = note.items.join(", ");
        checks.push(`소지품: ${displayItems}`);
      }
    } else {
      if (note.items) {
        const displayItems = note.items.join(", ");
        checks.push(`소지품: ${displayItems}`);
      } else {
        checks.push("소지품: 미확인");
      }
    }

    if (note.alibis?.length) {
      const alibiText = note.alibis
        .map(item => `${item.day}일차: ${LOCATIONS[item.location].name}`)
        .join(" / ");
      checks.push(`알리바이: ${alibiText}`);
    } else if (note.alibi) {
      checks.push(`알리바이: ${LOCATIONS[note.alibi.location].name}`);
    } else {
      checks.push("알리바이: 미확인");
    }

    if (note.traces?.length) {
      const latestTrace = note.traces[note.traces.length - 1];
      checks.push(`흔적: ${latestTrace.trace}`);
    }

    return {
      npc,
      checks,
    };
  });
}

function showCaseAnalysis() {
  showNotebookModal();
  return;

  if (state.analysisReturnScene === null) {
    state.analysisReturnScene = state.sceneText;
  }

  const clues = getKnownPhysicalClues();
  const evidenceLines = formatEvidenceGroupsText();

  const clueSummary = [
    clues.clothing ? `복장 단서: ${CLOTHES_MAP[clues.clothing] || clues.clothing}` : "복장 단서: 없음",
    clues.item ? `소지품 단서: ${ITEMS_MAP[clues.item] || clues.item}` : "소지품 단서: 없음",
  ].join("\n");

  const rows = getSuspectAnalysisRows()
    .map(row => {
      return `- ${row.npc.name}\n  ${row.checks.join(" / ")}`;
    })
    .join("\n") || "- 아직 의심 표시한 인물이 없습니다.";

  updateScene(`사건 수첩 분석\n\n[현재 단서]\n${clueSummary}\n\n[사건 기록]\n${evidenceLines}\n\n[의심 인물 비교]\n${rows}`);
  setMenu("사건 수첩", [
    { label: "0. 사건 수첩 닫기", action: closeCaseAnalysis },
  ]);
  render();
}

function closeCaseAnalysis() {
  if (state.analysisReturnScene !== null) {
    updateScene(state.analysisReturnScene);
  }
  state.analysisReturnScene = null;
  setMainMenu();
}

function formatPlayTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}분 ${String(seconds).padStart(2, "0")}초`;
}

function getEndingTitle(type) {
  if (type === "success") return "검거 성공";
  if (type === "wrong") return "검거 실패";
  if (type === "mafia") return "마피아 승리";
  return "수사 종료";
}

function getResultSheet(type) {
  const endedAt = state.endedAt || Date.now();
  const startedAt = state.startedAt || endedAt;
  const foundClues = [...new Set(state.notebook.evidence.map(e => e.text))];
  const clueLines = foundClues.length
    ? foundClues.map((clue, index) => `${index + 1}. ${clue}`).join("\n")
    : "없음";

  return `결과지 - ${getEndingTitle(type)}\n\n플레이 시간\n${formatPlayTime(endedAt - startedAt)}\n\n찾은 단서\n${clueLines}\n\n마피아\n${state.mafia ? `${state.mafia.name} (${state.mafia.role})` : "알 수 없음"}`;
}

function finishGame(type) {
  state.sceneMode = null;
  state.endingType = type;
  state.endedAt = Date.now();
  state.gameOver = true;
  clearSavedGame();
  updateScene(getResultSheet(type));
  render();
}

function askSuspicious() {
  const relatedCase = state.caseLogs.find(c =>
    !c.bodyFound &&
    [c.start, c.crime].includes(state.playerLocation)
  );

  const roll = Math.random();
  if (roll > 0.7) {
    updateScene("주변을 탐문하여 이상한 점을 찾아봅니다.\n\n탐문 실패: “잘 모르겠습니다. 밤에는 문을 걸어 잠그고 있었거든요.”");
    useAction();
    return;
  }

  if (!relatedCase) {
    updateScene("주변을 탐문하여 이상한 점을 찾아봅니다.\n\n탐문 성공: “어젯밤 이곳은 조용했습니다. 특별한 일은 없었어요.”");
  } else {
    updateScene(`주변을 탐문하여 이상한 점을 찾아봅니다.\n\n탐문 성공: “${roll < 0.1 ? getStrongMovementRumorText(relatedCase) : getMovementRumorText(relatedCase)}”`);
  }

  useAction();
}

function askAlibi(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  const refusalKey = `${state.day}:${npcId}`;
  if (state.alibiRefusals[refusalKey]) {
    updateNpcScene(npcId, `${npc.name}에게 다시 알리바이를 묻습니다.\n\n${npc.name}: "이미 말한 알리바이입니다. 같은 밤에 제 위치가 두 번 바뀌지는 않습니다."`);
    setPersonInquiryMenu(npcId);
    return;
  }
  state.alibiRefusals[refusalKey] = true;

  let quote;
  let alibiLocation = null;
  if (Math.random() > 0.5) {
    quote = `${npc.name}: “${npc.profile.pressure}”`;
  } else {
    const latestCase = state.caseLogs[state.caseLogs.length - 1];
    if (npc.id === state.mafia.id && latestCase) {
      alibiLocation = latestCase.falseAlibi;
      quote = `${npc.name}: “${getNpcAlibiQuote(npc, alibiLocation)}”`;
    } else if (state.liarIds.includes(npc.id)) {
      const actualLocation = state.lastNightLocations[npc.id] || npc.location;
      alibiLocation = getFakeAlibiLocation(actualLocation);
      quote = `${npc.name}: “${getNpcAlibiQuote(npc, alibiLocation)}”`;
    } else {
      alibiLocation = state.lastNightLocations[npc.id] || npc.location;
      quote = `${npc.name}: “${getNpcAlibiQuote(npc, alibiLocation)}”`;
    }
  }

  // 중복 여부 사전 체크
  let isDuplicate = false;
  let alibiObj = null;
  if (alibiLocation) {
    const note = ensureSuspectNote(npcId);
    alibiObj = {
      day: state.day,
      location: alibiLocation,
      text: `${state.day}일차 증언: ${LOCATIONS[alibiLocation].name}`,
    };
    if (note && note.alibis.some(item => item.day === alibiObj.day && item.location === alibiObj.location)) {
      isDuplicate = true;
    }
  }

  if (isDuplicate) {
    updateNpcScene(npcId, `${npc.name}에게 알리바이를 묻습니다.\n\n${quote}\n\n이미 같은 알리바이가 수첩에 기록되어 있습니다. 새로운 정보는 얻지 못했습니다.`);
    setPersonInquiryMenu(npcId);
    return;
  }

  updateNpcScene(npcId, `${npc.name}에게 알리바이를 묻습니다.\n\n${quote}`);

  if (alibiLocation && alibiObj) {
    const note = ensureSuspectNote(npcId);
    if (note && !note.alibis.some(item => item.day === alibiObj.day && item.location === alibiObj.location)) {
      note.alibis.push(alibiObj);
    }
    rememberSuspectInfo(npcId, { alibi: alibiObj });
  }

  addLog(`${npc.name}의 알리바이를 들었습니다.`);
  setPersonInquiryMenu(npcId);
}

const CLOTHES_MAP = {
  "회색 코트": "거친 회색 섬유",
  "검은 코트": "검고 질긴 섬유",
  "갈색 망토": "흙빛이 도는 두꺼운 천 조각",
  "붉은 숄": "붉은 실오라기",
  "남색 조끼": "어둡고 푸른 직물 조각",
  "긴 외투": "검고 질긴 섬유",
  "검은 장갑": "검고 질긴 가죽 조각",
  "흰 장갑": "밝은 장갑 섬유",
  "갈색 장갑": "갈색 가죽 조각",
  "붕대를 감은 손": "약품 냄새가 밴 천 조각"
};

const ITEMS_MAP = {
  "은색 회중시계": "작은 금속 부품",
  "황동 라이터": "그을린 금속 부품",
  "낡은 수첩": "찢어진 종이 조각",
  "작은 유리병": "약품 냄새가 나는 유리 파편",
  "만년필": "검은 잉크 자국",
  "열쇠 꾸러미": "작은 금속 긁힌 자국"
};

const CORPSE_SPOTS = ["피해자의 움켜쥔 손", "피해자의 옷 주머니", "피해자의 구두 밑창"];

function searchLocation() {
  const hasBodyHere = state.caseLogs.some(c => c.crime === state.playerLocation && c.bodyFound);
  if (!spendLocationInvestigation()) return;

  if (hasBodyHere) {
    setMenu("무엇을 수색하시겠습니까?", [
      { label: "1. 현장 수색", action: startFieldSearch },
      { label: "2. 시체 수색", action: startCorpseSearch },
      { label: "0. 돌아가기", action: () => setMainMenu() }
    ]);
  } else {
    startFieldSearch();
  }
}

function startFieldSearch() {
  if (hasCompletedSearch("field")) {
    updateScene(`${LOCATIONS[state.playerLocation].name}의 현장은 오늘 이미 충분히 수색했습니다.\n\n같은 장소를 다시 훑어도 새로운 단서는 나오지 않을 것 같습니다.`);
    setMainMenu();
    return;
  }

  const caseHere = state.caseLogs.find(c =>
    !c.bodyFound &&
    c.crime === state.playerLocation &&
    isCaseTraceSearchable(c)
  );
  const relatedCase = caseHere || findSearchableCaseAtLocation(state.playerLocation);
  const staleCase = relatedCase ? null : findStaleCaseAtLocation(state.playerLocation);
  const nearbyCase = relatedCase || staleCase ? null : findNearbySearchableCase(state.playerLocation);
  const searchSpots = getSearchSpots(state.playerLocation);
  const correctSpots = relatedCase ? sample(searchSpots, 2) : [];
  const focused = hasInvestigationFocus();

  state.searchSession = {
    caseHere,
    relatedCase,
    staleCase,
    nearbyCase,
    searchSpots,
    correctSpots,
    selectedSpots: [],
    hits: 0,
    attemptsLeft: focused ? 4 : 3,
  };

  updateScene(`${LOCATIONS[state.playerLocation].name}의 현장을 수색합니다.\n수상한 지점 5곳 중 ${focused ? 4 : 3}곳까지 확인할 수 있습니다.${focused ? "\n\n사체 수색 소견 덕분에 이 현장을 조금 더 집요하게 살펴볼 수 있습니다." : ""}`);
  renderSearchMenu();
}

function renderSearchMenu() {
  const session = state.searchSession;
  if (!session) {
    setMainMenu();
    return;
  }

  const options = session.searchSpots
    .filter(spot => !session.selectedSpots.includes(spot))
    .map((spot, index) => ({
      label: `${index + 1}. ${spot}`,
      action: () => chooseSearchSpot(spot),
    }));

  setMenu(`수색 지점을 선택하세요. 남은 선택: ${session.attemptsLeft}`, options);
}

function chooseSearchSpot(spot) {
  const session = state.searchSession;
  if (!session || session.selectedSpots.includes(spot)) return;

  session.selectedSpots.push(spot);
  session.attemptsLeft -= 1;

  if (session.correctSpots.includes(spot)) {
    session.hits += 1;
    updateScene(`${spot} 쪽을 확인했습니다.\n희미하지만 의미 있는 흔적이 있습니다.`);
  } else {
    updateScene(`${spot} 쪽을 확인했습니다.\n특별한 단서는 보이지 않습니다.`);
  }

  if (session.hits >= 2 || session.attemptsLeft <= 0) {
    finishSearchSession();
    return;
  }

  renderSearchMenu();
}

function finishSearchSession() {
  const session = state.searchSession;
  if (!session) return;
  state.searchSession = null;
  state.menu = null;
  markSearchCompleted("field");

  const { caseHere, relatedCase, staleCase, nearbyCase, hits } = session;

  if (caseHere) {
    caseHere.bodyFound = true;
    const victim = state.npcs.find(npc => npc.id === caseHere.victimId);
    if (victim) {
      victim.alive = false;
      updateCurrentLocationNpcs();
    }

    const clueLevel = hits >= 2 ? "확실한 단서" : hits === 1 ? "희미한 단서" : "시체 발견";

    rememberBodyDiscovery(caseHere);

    if (hits >= 2) {
      // 2번 성공: 동선 단서 + 물리 단서 무작위 1개 제공 (밸런스 가공)
      const movementText = getMovementEvidenceText(caseHere);
      const physicalChoice = Math.random() > 0.5 ? "clothing" : "item";
      let pText = "";
      if (physicalChoice === "clothing") {
        const textClue = CLOTHES_MAP[caseHere.clues.clothing] || caseHere.clues.clothing;
        rememberEvidence("clothing", `복장 단서: ${textClue}`, {
          clothing: caseHere.clues.clothing,
        });
        pText = `\n마피아의 의복 흔적인 [${textClue}]을(를) 채집했습니다.`;
      } else {
        const iClue = ITEMS_MAP[caseHere.clues.item] || caseHere.clues.item;
        rememberEvidence("item", `소지품 단서: ${iClue}`, {
          item: caseHere.clues.item,
        });
        pText = `\n마피아의 소지품 흔적인 [${iClue}]을(를) 주웠습니다.`;
      }

      rememberEvidence("movement", movementText, {
        route: getMovementEvidenceRoute(caseHere),
      });

      updateScene(`조사 결과 (확실한 현장 증거):\n시체를 발견했습니다! 주위 현장 수색 끝에 살인마의 이동 궤적인 [${movementText}]을(를) 완벽히 알아냈습니다.${pText}`);
    } else if (hits === 1) {
      // 1번 성공: 오직 동선 단서만 제공
      const movementText = getMovementEvidenceText(caseHere);
      rememberEvidence("movement", movementText, {
        route: getMovementEvidenceRoute(caseHere),
      });
      updateScene(`조사 결과 (희미한 현장 증거):\n시체를 발견했습니다! 현장에 흩어진 흔적으로부터 살인마의 이동 궤적인 [${movementText}]을(를) 알아냈습니다.`);
    } else {
      const weakHint = getWeakSearchHint(caseHere, state.playerLocation);
      rememberEvidence("weak-search", `${state.day}일차 약한 수색 단서: ${weakHint}`);
      updateScene(`조사 결과 (약한 단서):\n시체를 발견했습니다. 현장이 너무 어수선해 결정적인 이동 흔적은 건지지 못했습니다.\n\n${weakHint}`);
    }
    useAction();
    return;
  }

  if (relatedCase && hits > 0) {
    const movementText = getMovementEvidenceText(relatedCase);
    const clueText = `${movementText}.`;
    rememberEvidence("movement", movementText, {
      route: getMovementEvidenceRoute(relatedCase),
    });
    updateScene(`조사 결과:\n${clueText}`);
    useAction();
    return;
  }

  if (relatedCase) {
    const weakHint = getWeakSearchHint(relatedCase, state.playerLocation);
    rememberEvidence("weak-search", `${state.day}일차 약한 수색 단서: ${weakHint}`);
    updateScene(`조사 결과 (약한 단서):\n결정적인 증거는 찾지 못했습니다.\n\n${weakHint}`);
    useAction();
    return;
  }

  const searchNote = getSearchFailureNote(staleCase, nearbyCase);
  rememberEvidence("search-note", `${state.day}일차 수색 소견: ${searchNote}`);
  updateScene(`조사 결과 (수색 소견):\n결정적인 증거는 찾지 못했습니다.\n\n${searchNote}`);
  useAction();
}

function startCorpseSearch() {
  const caseHere = state.caseLogs.find(c => c.crime === state.playerLocation && c.bodyFound);
  if (!caseHere) {
    updateScene("수색할 시체가 이곳에 없습니다.");
    setMainMenu();
    return;
  }

  if (hasCompletedSearch("corpse")) {
    updateScene(`${LOCATIONS[state.playerLocation].name}의 시체는 오늘 이미 충분히 수색했습니다.\n\n남은 것은 기록을 비교하거나 다른 장소를 확인하는 일입니다.`);
    setMainMenu();
    return;
  }

  if (!isCaseTraceSearchable(caseHere)) {
    const staleNote = `${LOCATIONS[caseHere.crime].name}의 시체는 이미 너무 많은 손과 시간이 지나갔습니다. 남은 상처는 확인할 수 있지만, 마피아가 남긴 밤의 직접 흔적은 더 이상 읽기 어렵습니다.`;
    rememberEvidence("stale-corpse-search", `${state.day}일차 사체 수색 소견: ${staleNote}`);
    updateScene(`[시체 수색 소견]\n\n${staleNote}`);
    markSearchCompleted("corpse");
    useAction();
    return;
  }

  const correctSpot = pickRandom(CORPSE_SPOTS);

  state.corpseSession = {
    caseHere,
    correctSpot,
    attemptsLeft: 2,
    attemptsUsed: 0,
    selectedSpots: []
  };

  updateScene("시체를 정밀 수색합니다.\n피해자의 옷깃이나 상처 틈새 중 마피아가 남긴 직접 증거가 있을 만한 부위 한 곳을 선택하세요. (기회 2번)");
  renderCorpseSearchMenu();
}

function renderCorpseSearchMenu() {
  const session = state.corpseSession;
  if (!session) {
    setMainMenu();
    return;
  }

  const options = CORPSE_SPOTS
    .filter(spot => !session.selectedSpots.includes(spot))
    .map((spot, index) => ({
      label: `${index + 1}. ${spot}`,
      action: () => chooseCorpseSpot(spot)
    }));

  setMenu(`수색할 부위를 고르세요. 남은 기회: ${session.attemptsLeft}`, options);
}

function chooseCorpseSpot(spot) {
  const session = state.corpseSession;
  if (!session) return;

  session.selectedSpots.push(spot);
  session.attemptsLeft -= 1;
  session.attemptsUsed += 1;

  const isHit = spot === session.correctSpot;

  if (isHit) {
    finishCorpseSearchSession(true);
  } else if (session.attemptsLeft <= 0) {
    finishCorpseSearchSession(false);
  } else {
    updateScene(`${spot}을(를) 들여다보았으나, 아무런 물리적 실마리도 보이지 않습니다.\n기회는 이제 단 한 번뿐입니다.`);
    renderCorpseSearchMenu();
  }
}

function finishCorpseSearchSession(success) {
  const session = state.corpseSession;
  if (!session) return;
  state.corpseSession = null;
  state.menu = null;
  markSearchCompleted("corpse");

  const { caseHere, attemptsUsed } = session;

  if (success) {
    if (attemptsUsed === 1) {
      // 1트 성공: 물리 단서 1개와 강한 동선 단서를 제공한다.
      const physicalChoice = Math.random() > 0.5 ? "clothing" : "item";
      let physicalText = "";
      if (physicalChoice === "clothing") {
        const clothingClue = caseHere.clues.clothing;
        const textClue = CLOTHES_MAP[clothingClue] || clothingClue;
        rememberEvidence("clothing", `복장 단서: ${textClue}`, { clothing: clothingClue });
        physicalText = `마피아의 의복 흔적인 [${textClue}]`;
      } else {
        const itemClue = caseHere.clues.item;
        const iClue = ITEMS_MAP[itemClue] || itemClue;
        rememberEvidence("item", `소지품 단서: ${iClue}`, { item: itemClue });
        physicalText = `마피아의 소지품 흔적인 [${iClue}]`;
      }
      const movementText = getMovementEvidenceText(caseHere);
      rememberEvidence("movement", movementText, {
        route: getMovementEvidenceRoute(caseHere),
      });

      updateScene(`[시체 수색 대성공 - 물리 단서와 강한 동선 획득]\n\n정밀 수색으로 ${physicalText}을(를) 채집했습니다.\n\n피해자의 자세와 주변 흔적으로 보아 [${movementText}]이(가) 뚜렷하게 드러납니다.`);
    } else {
      // 2트 성공: 약한 물리 단서 1개 무작위 제공
      const physicalChoice = Math.random() > 0.5 ? "clothing" : "item";
      if (physicalChoice === "clothing") {
        const clothingClue = caseHere.clues.clothing;
        const textClue = CLOTHES_MAP[clothingClue] || clothingClue;
        rememberEvidence("clothing", `복장 단서: ${textClue}`, { clothing: clothingClue });
        updateScene(`[시체 수색 성공 - 약한 단서 1개 획득]\n\n두 번째 조사 끝에 시체 틈새에서 마피아의 의복 흔적인 [${textClue}]을(를) 찾아내 수집했습니다.`);
      } else {
        const itemClue = caseHere.clues.item;
        const iClue = ITEMS_MAP[itemClue] || itemClue;
        rememberEvidence("item", `소지품 단서: ${iClue}`, { item: itemClue });
        updateScene(`[시체 수색 성공 - 약한 단서 1개 획득]\n\n두 번째 조사 끝에 시체 품속에서 마피아의 소지품 흔적인 [${iClue}]을(를) 기어코 찾아내 획득했습니다.`);
      }
    }
  } else {
    const weakHint = getWeakCorpseHint(caseHere);
    addInvestigationFocus(caseHere.crime);
    rememberEvidence("corpse-opinion", `${state.day}일차 사체 수색 소견: ${weakHint}`);
    updateScene(`[시체 수색 실패 - 수색 소견]\n\n결정적인 물증은 찾지 못했습니다.\n\n${weakHint}\n\n오늘 ${LOCATIONS[caseHere.crime].name}에서 하는 탐문과 현장 수색이 조금 유리해집니다.`);
  }

  useAction();
}

function completeSearch() {
  state.log = [];
  updateScene("탐색을 완료했습니다.\n어둠이 몰려옵니다.");

  const options = [
    { label: "1. 밤으로 간다", action: () => runNight(false) },
  ];

  if (state.suspects.length > 0) {
    options.push({ label: "2. 마피아를 고발한다", action: () => showNpcOptions("accuse") });
  }

  options.push({ label: "0. 돌아가기", action: () => setMainMenu() });
  setMenu("탐색을 종료합니다. 다음 행동을 선택하세요.", options);
}

function inspectClothing(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  const roll = Math.random();
  const traceInfo = getTraceForNpc(npcId);
  const traceText = `${npc.name}의 옷자락과 구두를 살피자 ${traceInfo.trace}이(가) 남아 있습니다. ${LOCATIONS[traceInfo.location].name} 근처에서 묻었을 법한 흔적입니다.`;
  const clothingText = `${npc.name}의 인상착의: ${npc.clothing.join(", ")}`;

  if (roll < 0.6) {
    rememberSuspectTrace(npcId, traceInfo);
    updateNpcScene(npcId, `${npc.name}의 인상착의를 살펴봅니다.\n\n${traceText}`);
  } else if (roll < 0.9) {
    rememberSuspectInfo(npcId, { clothing: npc.clothing });
    updateNpcScene(npcId, `${npc.name}의 인상착의를 살펴봅니다.\n\n${clothingText}`);
  } else {
    rememberSuspectInfo(npcId, { clothing: npc.clothing });
    rememberSuspectTrace(npcId, traceInfo);
    updateNpcScene(npcId, `${npc.name}의 인상착의를 살펴봅니다.\n\n${clothingText}\n\n${traceText}`);
  }
  setPersonInquiryMenu(npcId);
}

function inspectItems(npcId) {
  const npc = state.npcs.find(n => n.id === npcId);
  rememberSuspectInfo(npcId, { items: npc.items });
  updateNpcScene(npcId, `${npc.name}의 소지품을 확인합니다.\n\n${npc.name}의 소지품: ${npc.items.join(", ")}`);
  setPersonInquiryMenu(npcId);
}

function getWrongAccusationEndingLines(npc) {
  const mafiaName = state.mafia.name;
  const variants = [
    [
      `${npc.name}은(는) 무너진 얼굴로 당신을 바라봅니다.\n\n그 시선에는 분노보다 억울함이 먼저 떠오릅니다.`,
      "마을은 조용해졌습니다.",
      "누군가 작게 숨을 삼킵니다.\n\n그 소리만으로도 사람들은 한 걸음씩 물러납니다.",
      "당신의 말은 칼보다 빨랐고, 칼보다 깊게 박혔습니다.",
      `진짜 마피아는 아직 사람들 사이에 서 있습니다.\n\n그 이름은 ${mafiaName}입니다.`,
      "그는 아무 말도 하지 않았습니다.\n\n그는 나를 쳐다보고 조용히 미소를 지었습니다.",
      "그리고 밤은 다시 시작되었습니다.",
    ],
    [
      `${npc.name}은(는) 끝내 아무 말도 하지 못했습니다.\n\n사람들은 침묵을 자백처럼 받아들였습니다.`,
      "그날 밤, 광장의 종은 울리지 않았습니다.",
      "하지만 새벽이 오자 누군가 당신의 수첩을 펼쳐 두고 갔습니다.\n\n마지막 장에는 아무 글씨도 없었습니다. 손가락 자국 하나만 남아 있었습니다.",
      `진짜 마피아는 ${mafiaName}였습니다.`,
      "그 이름을 읽는 순간, 당신은 어젯밤 광장에서 스쳐 지나간 얼굴 하나를 떠올립니다.",
      "그는 당신을 본 적 없는 사람처럼 지나갔습니다.\n\n하지만 이제는 압니다. 그가 당신을 보고 있었다는 것을.",
    ],
    [
      `${npc.name}은(는) 고개를 저었습니다.\n\n아주 작게, 너무 늦게.`,
      "사람들은 당신의 결론을 믿고 싶어 했습니다.\n\n누군가를 범인으로 정하면, 밤이 끝날 것 같았기 때문입니다.",
      "며칠 뒤, 사건이 난 골목에는 작은 꽃 한 송이가 놓였습니다.\n\n누가 두고 갔는지는 아무도 보지 못했습니다.",
      `진짜 마피아는 ${mafiaName}였습니다.`,
      "그는 장례식 맨 뒤에 서 있었습니다.\n\n눈물도 없이, 웃음도 없이.",
      "당신이 뒤돌아봤을 때 그는 이미 없었습니다.\n\n사람들 사이에는 빈자리 하나만 남아 있었습니다.",
    ],
  ];
  return pickRandom(variants);
}

function getSuccessAccusationEndingLines(npc) {
  const variants = [
    [
      `${npc.name}의 손끝이 미세하게 떨립니다.\n\n그제야 사람들은 깨닫습니다. 두려워해야 할 사람은 밤이 아니라, 낮에도 함께 서 있던 이 사람이었다는 것을.`,
      `고발 성공.\n\n${npc.name}이 마피아였습니다.`,
      "광장의 종이 다시 울립니다.\n\n이번에는 누군가 죽어서가 아니라, 살아남은 사람들이 서로의 이름을 확인하기 위해서입니다.",
      "사건은 끝났습니다.",
    ],
    [
      `${npc.name}은(는) 천천히 고개를 듭니다.\n\n변명은 나오지 않았습니다. 대신 아주 짧은 웃음이 먼저 새어 나왔습니다.`,
      `고발 성공.\n\n${npc.name}이 마피아였습니다.`,
      "사람들은 그제야 한 걸음씩 뒤로 물러납니다.\n\n늘 가까이 있던 사람이 가장 어두운 밤을 데리고 다녔다는 사실을 받아들이기 위해서입니다.",
      "그날 이후 마을의 불은 조금 더 오래 켜져 있었습니다.",
    ],
    [
      `${npc.name}의 표정이 잠깐 비어 버립니다.\n\n그리고 그 빈 얼굴 위로, 들켜서는 안 될 것이 아주 늦게 떠오릅니다.`,
      `고발 성공.\n\n${npc.name}이 마피아였습니다.`,
      "수첩에 적힌 말들이 하나씩 제자리로 돌아옵니다.\n\n거짓 알리바이, 남은 흔적, 맞지 않던 침묵까지.",
      "밤은 끝났지만, 사람들은 한동안 서로의 얼굴을 똑바로 보지 못했습니다.",
    ],
  ];
  return pickRandom(variants);
}

function startAccusationSequence(type, npc) {
  state.sceneMode = "accuse";
  state.musicSuppressed = true;
  stopAllMusic();

  const commonLines = [
    `${npc.name}을(를) 고발했습니다.`,
    "마을 사람들의 시선이 한곳으로 모입니다.",
    `${npc.name}은(는) 잠시 침묵했습니다.\n\n그 침묵은 어떤 변명보다 길었습니다.`,
    "당신은 수첩을 펼칩니다.\n\n복장, 소지품, 동선, 알리바이.\n흩어진 말들이 하나의 선으로 이어집니다.",
  ];

  const revealLines = type === "success"
    ? getSuccessAccusationEndingLines(npc)
    : getWrongAccusationEndingLines(npc);

  state.continueQueue = commonLines.map(line => () => {
    state.sceneMode = "accuse";
    updateNpcScene(npc.id, line);
    render();
  });
  state.continueQueue.push(() => {
    state.sceneMode = "accuse";
    state.musicSuppressed = false;
    state.endingType = type;
    updateMusicForPhase();
    updateNpcScene(npc.id, revealLines[0]);
    render();
  });
  state.continueQueue.push(...revealLines.slice(1).map(line => () => {
    state.sceneMode = "accuse";
    updateNpcScene(npc.id, line);
    render();
  }));
  state.continueQueue.push(() => finishGame(type));
  startContinueSequence();
}

function accuse(npcId) {
  if (state.gameOver) return;
  const npc = state.npcs.find(n => n.id === npcId);
  const readiness = getAccusationReadiness();
  if (!readiness.canAccuse) {
    const missing = [];
    if (!readiness.hasBody) missing.push("시체 발견");
    if (readiness.categories < 2) missing.push(`복장/소지품/동선 단서 중 ${2 - readiness.categories}종 추가`);
    updateScene(`아직 고발하기에는 근거가 부족합니다.\n\n필요 조건: 시체 발견 1건, 그리고 복장/소지품/동선 중 2종 이상의 단서.\n부족한 항목: ${missing.join(", ")}`);
    render();
    return;
  }

  if (npc.id === state.mafia.id) {
    startAccusationSequence("success", npc);
  } else {
    startAccusationSequence("wrong", npc);
  }
}

function render() {
  const status = document.getElementById("status");
  const scene = document.getElementById("scene");
  const actions = document.getElementById("actions");
  const log = document.getElementById("log");

  status.innerHTML = getStatusHtml();
  updateMusicForPhase();

  renderMiniMap();
  renderLocationContext();
  refreshStatusModal();

  const fullSceneText = getSceneTextWithLocation();
  if (state.lastRenderedScene !== fullSceneText) {
    setSceneText(fullSceneText);
    state.lastRenderedScene = fullSceneText;
  }

  // Apply dark styling when a found body exists at current location
  const sceneEl = document.getElementById("scene");
  if (sceneEl) {
    const hasBodyHere = state.caseLogs.some(c => c.crime === state.playerLocation && c.bodyFound);
    if (hasBodyHere) sceneEl.classList.add('dark');
    else sceneEl.classList.remove('dark');

    const activeNpc = getActiveSceneNpc();
    if (activeNpc) sceneEl.classList.add('talking');
    else sceneEl.classList.remove('talking');
    if (state.sceneMode === "accuse") sceneEl.classList.add('accusing');
    else sceneEl.classList.remove('accusing');

    // 게임 시작(오프닝 스토리 종료 및 첫 장소 선택 이후) 후에 배경 이미지를 매핑하여 적용합니다.
    const isGameActive = state.npcs && state.npcs.length > 0 && (state.day > 0 || state.log.length > 1);
    if (state.sceneMode === "accuse") {
      sceneEl.style.backgroundImage = "none";
    } else if (isGameActive) {
      const bgImage = LOCATION_BACKGROUNDS[state.playerLocation];
      if (bgImage) {
        sceneEl.style.backgroundImage = `linear-gradient(rgba(3, 4, 4, 0.88), rgba(3, 4, 4, 0.88)), url('img/배경/${bgImage}')`;
        sceneEl.style.backgroundSize = "cover";
        sceneEl.style.backgroundPosition = "center";
        sceneEl.style.backgroundRepeat = "no-repeat";
      } else {
        sceneEl.style.backgroundImage = "none";
      }
    } else {
      sceneEl.style.backgroundImage = "none";
    }
  }

  renderNpcList();
  renderCaseNotebook();
  actions.innerHTML = "";

  if (state.awaitingContinue) {
    const title = document.createElement("p");
    title.className = "chat-title";
    title.textContent = "계속하려면 클릭하거나 엔터를 누르세요.";
    actions.appendChild(title);

    const continueButton = document.createElement("div");
    continueButton.className = "chat-option";
    continueButton.textContent = "계속";
    continueButton.onclick = () => {
      unlockAudio();
      playClickSound();
      advanceContinue();
    };
    actions.appendChild(continueButton);
    return;
  }

  if (state.gameOver) {
    const ended = document.createElement("p");
    ended.textContent = "게임이 종료되었습니다. 다시 시작 버튼을 눌러 새 사건을 조사해보세요.";
    actions.appendChild(ended);
    const restart = document.createElement("button");
    restart.textContent = "다시 시작";
    restart.className = "secondary";
    restart.onclick = () => {
      unlockAudio();
      playClickSound();
      clearSavedGame();
      showTitleMenu();
    };
    actions.appendChild(restart);
    renderLog();
    return;
  }

  if (!state.menu) {
    setMainMenu();
    return;
  }

  const title = document.createElement("p");
  title.className = "chat-title";
  title.textContent = state.menu.title;
  actions.appendChild(title);

  state.menu.options.forEach(option => {
    const item = document.createElement("div");
    item.className = option.npcId ? "chat-option npc-option" : "chat-option";
    if (option.npcId) {
      const npc = state.npcs.find(person => person.id === option.npcId);
      if (npc) item.insertAdjacentHTML("beforeend", getNpcPortraitHtml(npc, "thumb"));
    }
    const label = document.createElement("span");
    label.textContent = option.label;
    item.appendChild(label);
    item.onclick = () => {
      unlockAudio();
      playClickSound();
      state.pendingActiveNpcId = option.npcId || null;
      option.action();
      state.pendingActiveNpcId = null;
    };
    actions.appendChild(item);
  });

  renderLog();
  saveGame();
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && state.awaitingContinue) {
    event.preventDefault();
    unlockAudio();
    playClickSound();
    advanceContinue();
  }
  // numeric shortcut for menu options when not in continue mode
  if (!state.awaitingContinue && state.menu && /^[0-9]$/.test(event.key)) {
    unlockAudio();
    playClickSound();
    const num = parseInt(event.key, 10);
    if (num === 0) {
      // try to find option labeled starting with 0.
      const opt0 = state.menu.options.find(o => o.label && o.label.trim().startsWith('0'));
      if (opt0) opt0.action();
      return;
    }
    const idx = num - 1;
    const option = state.menu.options[idx];
    if (option) option.action();
  }
});

window.addEventListener("beforeunload", (event) => {
  if (canSaveGame()) saveGame();
  if (!state.gameOver && state.day > 0) {
    event.preventDefault();
    event.returnValue = "";
  }
});

bootGame();
