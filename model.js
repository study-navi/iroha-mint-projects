export const stages = [
  ['inquiry', 'ご相談・見積もり', 'slate'],
  ['assets', '素材・情報待ち', 'amber'],
  ['working', '制作中', 'mint'],
  ['review', 'お客様確認中', 'violet'],
  ['revision', '修正中', 'blue'],
  ['ready', '公開準備', 'cyan'],
  ['live', '公開済み', 'green'],
  ['hold', '保留', 'slate'],
];

export const plans = ['未定', 'ライト', 'スタンダード', 'プレミアム', 'その他'];

export const fields = {
  customer: 100,
  title: 120,
  stage: 20,
  plan: 20,
  deadline: 10,
  next: 200,
  preview: 2000,
  live: 2000,
  materials: 2000,
  notes: 4000,
};

export function safeUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : '';
  } catch {
    return '';
  }
}
