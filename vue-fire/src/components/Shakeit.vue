<template>
<div>
  <h1>Anda Player 1</h1>
  <div v-if="winnerstatus">
    Pemenangnya adalah player
    {{winner}}
    anda adalah "shake it sejati"
  </div>
  <div v-if="!winnerstatus">
    <h1>Jumlah Shake</h1>
    <h1>{{shakeCount}}</h1>
  </div>
</div>
</template>

<script>

import Shake from 'shake.js'
export default {
  data () {
    return {
      shakeCount: 0,
      finishShake: 100,
      winnerstatus: false,
      winner: 0
    }
  },
  methods: {
    setgesture () {
      this.$db.ref('play/player2').set({
        shake: this.shakeCount
      })
    },
    gesture () {
      var self = this
      let db = this.$db.ref('play/')
      db.on('value', function (snapshot) {
        console.log('ini snapshit', snapshot.val().player1.shake)
        self.shakeCount = snapshot.val().player1.shake
        if (snapshot.val().win !== 0) {
          self.winnerstatus = true
          self.winner = snapshot.val().win
        } else {
          self.winnerstatus = false
          self.winner = snapshot.val().win
        }
      })
      var shakeEvent = new Shake({threshold: 15, timeout: 1000})
      shakeEvent.start()
      window.addEventListener('shake', function () {
        console.log(self.winner)
        if (self.winner === 0) {
          self.shakeCount = self.shakeCount + 1
          self.$db.ref('play/player1').set({
            shake: self.shakeCount
          })
        }
      }, false)
    }
  },
  mounted () {
    this.gesture()
    // this.setgesture()
  },
  watch: {
    shakeCount (newShakeCount) {
      console.log(newShakeCount)
      if (newShakeCount >= 20) {
        this.$db.ref('play/').set({
          win: 1,
          player1: {shake: 0},
          player2: {shake: 0}
        })
        alert('ahhhh')
      }
    }
  }
}
</script>

<style>

</style>
