// Firebase Realtime Database の URL（README の手順で作成して貼る）。空のままだと編集は画面内だけで保存されない。
const FIREBASE_URL = "https://europe-trip-746fb-default-rtdb.asia-southeast1.firebasedatabase.app";

// 保存先が空のときに最初に書き込まれる初期データ（ホワイトボード 2026-10-25 の写真から）。以後の編集はアプリ上で行う。
// who を省くと全員、who: ["Dan"] のように書くとその人だけの予定。
const DAN = ["Dan"], HT = ["Hiroto", "Tashiro"];
const air = (name, kind = "Airbnb", who) => ({ name, kind, ...(who && { who }) });
const SEED = {
  title: "ヨーロッパ周遊",
  members: ["Dan", "Hiroto", "Tashiro"],
  days: {
    d0218: { date: "2027-02-18", area: "東京 → 北京", map: "北京大興国際空港", note: "PKX でトランジット",
      legs: [{ mode: "飛行機", from: { t: "15:40", name: "HND", code: "HND" }, to: { t: "18:55", name: "PKX", code: "PKX" } }] },
    d0219: { date: "2027-02-19", area: "北京 → ロンドン", map: "London",
      legs: [{ mode: "飛行機", from: { t: "14:35", name: "PKX", code: "PKX" }, to: { t: "17:55", name: "LHR", code: "LHR" } }],
      stays: [air("John", "知り合いの家")] },
    d0220: { date: "2027-02-20", area: "ロンドン", map: "London", stays: [air("John", "知り合いの家")] },
    d0221: { date: "2027-02-21", area: "ロンドン", map: "London", stays: [air("John", "知り合いの家")] },
    d0222: { date: "2027-02-22", area: "ロンドン", map: "London", stays: [air("John", "知り合いの家")] },
    d0223: { date: "2027-02-23", area: "ロンドン → ブリュッセル", map: "Brussels",
      legs: [{ mode: "鉄道", from: { t: "13:04", name: "ロンドン" }, to: { t: "16:05", name: "ブリュッセル" }, note: "ユーロスター" }],
      stays: [air("Reside")] },
    d0224: { date: "2027-02-24", area: "ブリュッセル", map: "Brussels", stays: [air("Reside")] },
    d0225: { date: "2027-02-25", stays: [air("lime")] },
    d0226: { date: "2027-02-26", stays: [air("lime")] },
    d0227: { date: "2027-02-27", stays: [air("VIP")] },
    d0228: { date: "2027-02-28", stays: [air("VIP")] },
    d0301: { date: "2027-03-01",
      legs: [
        { mode: "飛行機", who: DAN, from: { t: "09:50", name: "FRA", code: "FRA" }, to: { t: "11:40", name: "OPO", code: "OPO" } },
        { mode: "飛行機", who: HT, from: { t: "11:15", name: "HHN", code: "HHN" }, to: { t: "13:15", name: "BCN", code: "BCN" } },
      ],
      stays: [air("Ramba", "Airbnb", HT)] },
    d0302: { date: "2027-03-02", stays: [air("Ramba", "Airbnb", HT)] },
    d0303: { date: "2027-03-03", stays: [air("Ramba", "Airbnb", HT)] },
    d0304: { date: "2027-03-04",
      legs: [{ mode: "飛行機", who: DAN, from: { t: "13:15", name: "LIS", code: "LIS" }, to: { t: "15:40", name: "MAD", code: "MAD" } }],
      stays: [air("Carlos", "Airbnb", HT)] },
    d0305: { date: "2027-03-05", stays: [air("Carlos")] },
    d0306: { date: "2027-03-06", note: "広州へは翌 3/7 着",
      legs: [{ mode: "飛行機", from: { t: "10:50", name: "MAD", code: "MAD" }, to: { t: "06:30", name: "CAN", code: "CAN" }, note: "翌日着" }],
      stays: [{ name: "機内" }] },
    d0307: { date: "2027-03-07", area: "広州 → 東京",
      legs: [{ mode: "飛行機", from: { t: "08:50", name: "CAN", code: "CAN" }, to: { t: "13:35", name: "HND", code: "HND" } }] },
  },
};
