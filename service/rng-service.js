class rngService {
    rng(max) {
        let rand = 0 + Math.random() * (max + 1 - 0);

        if (Math.floor(rand) == max) {
            return Math.floor(rand) - 1;
        }
        else {
            return Math.floor(rand);
        }
      }
}

module.exports = new rngService();