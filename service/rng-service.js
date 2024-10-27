class rngService {
    rng(max) {
        // случайное число от min до (max+1)
        let rand = 0 + Math.random() * (max + 1 - 0);
        return Math.floor(rand);
      }
}

module.exports = new rngService();