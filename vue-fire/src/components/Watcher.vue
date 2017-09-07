<template>
  <div>
    <div v-if="winnerstatus">
      Pemenangnya adalah player
      {{winner}}
      anda adalah "shake it sejati"
    </div>
    <div v-if="!winnerstatus">
      <h1>Jumlah Player 1</h1>
      <h1>{{shakeCount1}}</h1>
      <br>
      <h1>Jumlah Player 2</h1>
      <h1>{{shakeCount2}}</h1>
    </div>
    <button @click="reset()">Mulai</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shakeCount1: 0,
      shakeCount2: 0,
      winnerstatus: false,
      winner: 0
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
  },
  watch: {
  }
}
</script>

<style>

</style>
