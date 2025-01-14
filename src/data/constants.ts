export const userPageRegex = [
  /^user\/\d+$/,
  /^\/user\/\d+$/,
  /^space\/show\?uid=\d+$/,
  /^\/space\/show\?uid=\d+$/,
  /^https:\/\/www\.luogu\.com\.cn\/user\/\d+$/,
  /^https:\/\/www\.luogu\.com\.cn\/space\/show\?uid=\d+$/,
  /^https:\/\/www\.luogu\.org\/space\/show\?uid=\d+$/
];

export const userPageUrlIndex = [ 5, 6, 15, 16, 30, 40, 37 ];

export module consts {
  export let currentUID: number = -1;
  export let csrfToken: string = "";
}
