<template>
  <div>
    <div v-if="winnerstatus">
      Pemenangnya adalah player
      {{winner}}
      anda adalah "shake it sejati"
    </div>
    <!-- <ProgressBar></ProgressBar> -->
    <div v-if="!winnerstatus" class="container">
      <div class="row">
        <div class="col-md-5 player1" id="player1" >
          <h1>Player 1</h1>
          <h1>{{shakeCount1}}</h1>
          <center><div class="prp" id="progress" :style="`width: ${ progressCount1 }%`">
            <p>{{progressCount1}}%</p>
          </div></center>
        </div>
        <div class="col-md-2">
          <img id="vs" src="../assets/versus.png" alt="">
        </div>
        <div class="col-md-5 player2">
          <h1>Player 2</h1>
          <h1>{{shakeCount2}}</h1>
          <center><div class="prp cen" id="progress" :style="`width: ${ progressCount2 }%`">
            <p>{{progressCount2}}%</p>
          </div></center>
        </div>
      </div>
    </div><br>
    <button @click="reset()" class="btn btn-primary">Mulai</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shakeCount1: 0,
      shakeCount2: 0,
      winnerstatus: false,
      winner: 0,
      progressCount1: 0,
      progressCount2: 0
    }
  },
  methods: {
    match () {
      var self = this
      let db = this.$db.ref('play/')
      this.$db.ref('play/player2').set({
        shake: 0
      })
      this.$db.ref('play/player1').set({
        shake: 0
      })
      db.on('value', function (snapshot) {
        console.log('ini snapshit', snapshot.val())
        self.shakeCount2 = snapshot.val().player2.shake
        self.shakeCount1 = snapshot.val().player1.shake
        self.progressCount1 = Math.floor((self.shakeCount1 / 20) * 100)
        self.progressCount2 = Math.floor((self.shakeCount2 / 20) * 100)
        if (snapshot.val().win !== 0) {
          self.winnerstatus = true
          self.winner = snapshot.val().win
        } else {
          self.winnerstatus = false
          self.winner = snapshot.val().win
        }
      })
    },
    reset () {
      this.$db.ref('play/').set({
        win: 0,
        player1: {shake: 0},
        player2: {shake: 0}
      })
    }
  },
  mounted () {
    this.match()
  }
}
</script>

<style scoped>
body {
  background-color: #e3e3e3;
}
#progress {
  background-color: white;
}
#player1 {
  background-color: #b71c1c;
  color: #e3e3e3;
  border-radius: 30px;
}
.player2 {
  background-color: #3f51b5;
  color: #e3e3e3;
  border-radius: 30px;
}

#vs {
  height: 100px;
  width: auto;
}


</style>
