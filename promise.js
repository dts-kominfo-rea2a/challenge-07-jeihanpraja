const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  const emosiIXX = await promiseTheaterIXX();
  const emosiVGC = await promiseTheaterVGC();

  return new Promise((resolve) => {
    let hasil;

    if(emosi === 'marah') {
      const emosiIXXMarah = emosiIXX.filter((element) => (element.hasil === 'marah')).length;
      const emosiVGCMarah = emosiVGC.filter((element) => (element.hasil === 'marah')).length;
      hasil = emosiIXXMarah + emosiVGCMarah;
    } else if (emosi === 'tidak marah') {
      const emosiIIXTdkMarah = emosiIXX.filter((element) => (element.hasil === 'tidak marah')).length;
      const emosiVGCTdkMarah = emosiVGC.filter((element) => (element.hasil === 'tidak marah')).length;
      hasil = emosiIIXTdkMarah + emosiVGCTdkMarah;
    }

    return resolve(hasil);
  })
};

  module.exports = {
      promiseOutput,
    };
