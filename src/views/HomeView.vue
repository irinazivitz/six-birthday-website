<template>
  <div >
    <img src="../assets/InviteFinal.jpg" alt="Invite_image" class="hero-image" />
    
    <button class="rsvp-button" @click="showRSVP = true">RSVP Now</button>

    <RSVPForm v-if="showRSVP" @close="showRSVP = false" />
    
    <div class="party-details  mt-4 p-4 rounded">
      <h2 class="text-center">Party Details</h2>
      <p><strong>✨ What:</strong> Leah is turning six! Join us for a fabulous glam makeover and dance party to celebrate her special day.</p>
      <p><strong>📅 When:</strong> March 29, starting at <strong>3 PM</strong>.</p>
      <p>💃 <strong>Dance entertainment:</strong> 4–5 PM, followed by pizza and cake.</p>
      <p>👨‍👩‍👧‍👦 The whole family is welcome—we’ll have <strong>snacks and refreshments</strong> for adults too!</p>
      <p><strong>📍 Where:</strong> Our home 509 Montrose St, Philly</p>
      <p><strong>💖 P.S.</strong> Overdressing is highly encouraged! ✨</p>
      <hr>
      <h3 class="text-center">Helpful Details</h3>
      <ul>
        <li>🐶 We have a <strong>large, friendly dog</strong>.</li>
        <li>🚗 <strong>Street parking.</strong> </li>
        <li>👞 <strong>Shoes-free house</strong>, so feel free to bring socks or indoor fancy shoes !</li>
      </ul>
    </div>
  </div>
</template>
 
<script>
import RSVPForm from "@/components/RSVPForm.vue";

export default {
  components: { RSVPForm },
  data() {
    return { showRSVP: false };
  }
};
</script>

<style>
/* Typography */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');



body {
  background-color: #1b2340 !important;
  color: #e1b97e !important;
  font-family: 'Montserrat', sans-serif !important;
  text-align: center!important;
}

h2, h3 {
  font-family: 'Playfair Display', serif;
  color: #e1b97e;
  margin-top: 20px;
}

p, li {
  font-size: 18px;
  color: #e1b97e;
}

.hero-image {
  width: 100%;
  height: auto; 
  max-height: 700px; 
  object-fit: contain;
  display: block;
  margin-bottom: 20px;
}

button {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin: 10px;
}

.rsvp-button {
  background-color: #f6bbd1;
  color: white;
}
.rsvp-button:hover {
  background-color: #d1acd4;
}

.party-details {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
</style>
