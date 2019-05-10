export const audioclip = {
  Q: "Heater-1",
  W: "Heater-2",
  E: "Heater-3",
  A: "Heater-4_1",
  S: "Heater-6",
  D: "Dsc_Oh",
  Z: "Kick_n_Hat",
  X: "RP4_KICK_1",
  C: "Cev_H2"
};

export const amazonURL = "https://s3.amazonaws.com/freecodecamp/drums/";

export const objectKeys = Object.keys(audioclip);

export const audioObj = () => {
  let obj = {};
  objectKeys.map(key => {
    obj[key] = new Audio(amazonURL + audioclip[key] + ".mp3");
  });
  return obj;
};
